import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const guestName = searchParams.get('guestName');
    const guestCount = searchParams.get('guestCount');
    const songRequest = searchParams.get('songRequest');
    const attending = searchParams.get('attending');

    try {
        if (!guestName || !guestCount || !attending) throw new Error('All fields required');    
        await sql`INSERT INTO Rsvp (Name, Guests, Song, Attending) VALUES (${guestName}, ${guestCount}, ${songRequest}, ${attending});`;
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

