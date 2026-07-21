/**
 * GET /api/recently-sold
 * Fetches Barrett Henry's sold listings from Bridge MLS.
 * Filters out rentals (< $50K) and returns with computed stats.
 * Cached for 1 hour.
 */

import { NextResponse } from 'next/server';

const BRIDGE_BASE = 'https://api.bridgedataoutput.com/api/v2';
const DATASET = process.env.BRIDGE_DATASET || 'stellar';
const TOKEN = process.env.BRIDGE_SERVER_TOKEN || '';

export async function GET() {
  try {
    const url = `${BRIDGE_BASE}/${DATASET}/listings?access_token=${TOKEN}&ListAgentFullName=Barrett%20Henry&StandardStatus=Closed&sortBy=CloseDate&order=desc&limit=100&fields=ListingId,UnparsedAddress,City,PostalCode,ClosePrice,ListPrice,CloseDate,BedroomsTotal,BathroomsTotalInteger,LivingArea,DaysOnMarket,Media`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) {
      return NextResponse.json({ listings: [], stats: {} }, { status: 200 });
    }

    const data = await res.json();
    const raw = data.bundle || [];

    // Filter out rentals and tiny sales (< $50K likely leases or lot sales)
    const sold = raw.filter((l: Record<string, number>) => l.ClosePrice >= 50000);

    // Compute stats
    const total = data.total || sold.length;
    const totalVolume = sold.reduce((sum: number, l: Record<string, number>) => sum + (l.ClosePrice || 0), 0);
    const avgDom = sold.length > 0
      ? Math.round(sold.reduce((sum: number, l: Record<string, number>) => sum + (l.DaysOnMarket || 0), 0) / sold.length)
      : 0;
    const avgRatio = sold.length > 0
      ? Math.round(
          sold.reduce((sum: number, l: Record<string, number>) => {
            if (l.ListPrice && l.ClosePrice) return sum + (l.ClosePrice / l.ListPrice) * 100;
            return sum;
          }, 0) / sold.filter((l: Record<string, number>) => l.ListPrice > 0).length * 10
        ) / 10
      : 0;

    return NextResponse.json(
      {
        listings: sold,
        stats: { total, totalVolume, avgDom, avgRatio },
      },
      {
        headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200' },
      }
    );
  } catch {
    return NextResponse.json({ listings: [], stats: {} }, { status: 200 });
  }
}
