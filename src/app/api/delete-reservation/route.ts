import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {

    try {
        await sql`DELETE FROM rsvp;`
        return NextResponse.json({ message: "All Rows Deleted" }, { status: 200 }); 
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}