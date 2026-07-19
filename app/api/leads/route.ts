/**
 * app/api/leads/route.ts
 *
 * Lead capture for valricoagent.com.
 * Accepts leads from multiple form types (contact, showing, home-value).
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

  const {
    firstName,
    lastName,
    phone,
    email,
    message,
    bestTime,
    type,         // 'contact' | 'showing' | 'home-value'
    source,       // optional source label
    preferredDate,
    preferredTime,
    propertyAddress,
    timeframe,
  } = body;

  // Basic validation, all forms require name, phone, email
  if (!firstName || !phone || !email) {
    return NextResponse.json({ success: false, message: 'Name, phone, and email are required.' }, { status: 400 });
  }

  // Build a descriptive message based on form type
  let description = '';
  const formType = type || 'contact';

  if (formType === 'showing') {
    // Schedule showing form
    const parts = [
      `Form: Schedule Showing`,
      preferredDate ? `Preferred Date: ${preferredDate}` : null,
      preferredTime ? `Preferred Time: ${preferredTime}` : null,
      propertyAddress ? `Property: ${propertyAddress}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);
    description = parts.join(' | ');
  } else if (formType === 'home-value') {
    // Home value / CMA request
    const parts = [
      `Form: Home Value Request`,
      propertyAddress ? `Property: ${propertyAddress}` : null,
      timeframe ? `Timeframe to Sell: ${timeframe}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);
    description = parts.join(' | ');
  } else {
    // Default contact form
    const parts = [
      `Form: Contact`,
      bestTime ? `Best time: ${bestTime}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);
    description = parts.join(' | ');
  }

  // Determine tags based on form type
  const tags = ['Valrico-Agent', 'Website-Lead'];
  if (formType === 'showing') tags.push('Showing-Request');
  if (formType === 'home-value') tags.push('Home-Value-Request');

  // Push to Follow Up Boss (only if API key is configured)
  const apiKey = process.env.FUB_API_KEY;
  if (!apiKey) {
    // If no FUB key, log but still return success (lead captured in logs)
    console.error('[leads] FUB_API_KEY not set, lead NOT forwarded to FUB');
    console.log('[leads] Lead data:', JSON.stringify(body));
    return NextResponse.json({ success: true, message: 'Thank you! Barrett will be in touch shortly.' });
  }

  const authToken = Buffer.from(`${apiKey}:`).toString('base64');

  const payload = {
    source: source || 'ValricoAgent.com',
    type: 'Registration',
    person: {
      firstName,
      lastName: lastName || '',
      emails: [{ value: email }],
      phones: [{ value: phone }],
      tags,
    },
    message: description,
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
