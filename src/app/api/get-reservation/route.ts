import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from 'next/cache';
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  noStore();
  try {
    const result = await sql`SELECT * FROM registry;`;
    return NextResponse.json({ rows: result.rows }, { status: 200 });
  } catch (error) {
    console.error("Error fetching reservations:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
