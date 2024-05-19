import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // Execute the query
    const reservations = await sql`SELECT * FROM rsvp;`;

    // Check the output in the console
    console.log("Reservations:", reservations);

    // Return the rows as JSON
    return NextResponse.json({ reservations }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}