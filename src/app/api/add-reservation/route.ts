import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface RsvpRequestBody {
  guestName: string;
  guestCount: number;
  songRequest?: string;
  attending: boolean;
}

export async function POST(request: Request) {
  let requestBody: RsvpRequestBody;

  try {
    requestBody = (await request.json()) as RsvpRequestBody;
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { guestName, guestCount, songRequest, attending } = requestBody;

  try {
    if (
      !guestName ||
      typeof guestCount !== "number" ||
      typeof attending !== "boolean"
    ) {
      throw new Error("All fields required");
    }

    await sql`INSERT INTO registry (Name, Guests, Song, Attending) VALUES (${guestName}, ${guestCount}, ${songRequest}, ${attending});`;
    return NextResponse.json({ message: "RSVP submitted successfully" });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
