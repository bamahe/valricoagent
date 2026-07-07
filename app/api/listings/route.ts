/**
 * API route: GET /api/listings
 *
 * Proxies search requests to Bridge MLS API.
 * Query params get passed through to the Bridge client.
 * This keeps the server token hidden from the browser.
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchListings, type PropertySearchParams } from '@/lib/bridge';

export async function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams;

  // Build search params from query string
  const params: PropertySearchParams = {};

  if (sp.get('city')) params.city = sp.get('city')!;
  if (sp.get('postalCode')) params.postalCode = sp.get('postalCode')!;
  if (sp.get('minPrice')) params.minPrice = parseInt(sp.get('minPrice')!);
  if (sp.get('maxPrice')) params.maxPrice = parseInt(sp.get('maxPrice')!);
  if (sp.get('minBeds')) params.minBeds = parseInt(sp.get('minBeds')!);
  if (sp.get('minBaths')) params.minBaths = parseInt(sp.get('minBaths')!);
  if (sp.get('minSqft')) params.minSqft = parseInt(sp.get('minSqft')!);
  if (sp.get('maxSqft')) params.maxSqft = parseInt(sp.get('maxSqft')!);
  if (sp.get('propertyType')) params.propertyType = sp.get('propertyType')!;
  if (sp.get('poolOnly') === 'true') params.poolOnly = true;
  if (sp.get('waterfrontOnly') === 'true') params.waterfrontOnly = true;
  if (sp.get('noHoa') === 'true') params.noHoa = true;
  if (sp.get('sortBy')) params.sortBy = sp.get('sortBy') as PropertySearchParams['sortBy'];
  if (sp.get('limit')) params.limit = parseInt(sp.get('limit')!);
  if (sp.get('offset')) params.offset = parseInt(sp.get('offset')!);

  const result = await searchListings(params);

  return NextResponse.json(result, {
    headers: {
      // Cache at CDN for 5 min, allow stale for 1 hour while revalidating
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
    },
  });
}
