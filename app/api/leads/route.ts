/**
 * app/api/leads/route.ts
 *
 * Lead capture for valricoagent.com.
 * Pushes all leads to Follow Up Boss with "Valrico-Agent" tag.
 */

import { NextResponse } from 'next/server';

const FUB_API_URL = 'https://api.followupboss.com/v1/events';

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
  }

  const { firstName, lastName, phone, email, message, bestTime } = body;

  // Basic validation
  if (!firstName || !phone || !email) {
    return NextResponse.json({ success: false, message: 'Name, phone, and email are required.' }, { status: 400 });
  }

  // Push to Follow Up Boss
  const apiKey = process.env.FUB_API_KEY;
  if (!apiKey) {
    console.error('[leads] FUB_API_KEY not set');
    return NextResponse.json({ success: false, message: 'Server configuration error.' }, { status: 500 });
  }

  const authToken = Buffer.from(`${apiKey}:`).toString('base64');

  const payload = {
    source: 'valricoagent.com',
    type: 'Registration',
    person: {
      firstName,
      lastName: lastName || '',
      emails: [{ value: email }],
      phones: [{ value: phone }],
      tags: ['Valrico-Agent', 'Website-Lead'],
    },
    message: `Best time: ${bestTime || 'N/A'} | Message: ${message || 'N/A'}`,
  };

  try {
    const res = await fetch(FUB_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${authToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error('[leads] FUB push failed:', res.status, errBody);
    }
  } catch (err) {
    console.error('[leads] FUB push error:', err);
  }

  return NextResponse.json({ success: true, message: 'Thank you! Barrett will be in touch shortly.' });
}
