import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

interface RsvpRequestBody {
  guestName: string;
  guestCount: number;
  songRequest?: string;
  team?: string;
  attending: boolean;
  guestResponses: { [key: string]: string };
}

export async function POST(request: Request) {
  let requestBody: RsvpRequestBody;

  try {
    requestBody = (await request.json()) as RsvpRequestBody;
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { guestName, guestCount, songRequest, team, attending, guestResponses } = requestBody;

  try {
    if (
      !guestName ||
      typeof guestCount !== "number" ||
      typeof attending !== "boolean" ||
      !guestResponses ||
      typeof guestResponses !== "object"
    ) {
      throw new Error("All fields required");
    }

    await sql`INSERT INTO rsvp (Name, Guests, Song, Team, Attending) VALUES (${guestName}, ${guestCount}, ${songRequest}, ${team}, ${attending});`;

    for (const [guest, status] of Object.entries(guestResponses)) {
      if (status === "attending") {
        await sql`INSERT INTO rsvp (Name, Guests, Song, Team, Attending) VALUES (${guest}, 0, '', ${team}, true);`;
      }
    }

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
