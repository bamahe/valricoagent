/**
 * API route: GET /api/listings/[id]
 *
 * Fetch a single listing by its ListingId from Bridge MLS.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getListingById } from '@/lib/bridge';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    return NextResponse.json(
      { error: 'Listing not found' },
      { status: 404 }
    );
  }

  return NextResponse.json({ listing }, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
