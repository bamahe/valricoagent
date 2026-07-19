/**
 * API route: GET /api/listings
 *
 * Proxies search requests to Bridge MLS API.
 * Query params get passed through to the Bridge client.
 * This keeps the server token hidden from the browser.
 *
 * Caching: in-memory (5 min) + CDN (5 min s-maxage + 10 min stale-while-revalidate)
 */

import { NextRequest, NextResponse } from 'next/server';
import { searchListings, isRateLimited, type PropertySearchParams } from '@/lib/bridge';

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
  if (sp.get('newConstruction') === 'true') params.newConstructionOnly = true;
  // Subdivision filters
  if (sp.get('subdivision')) params.subdivision = sp.get('subdivision')!;
  if (sp.get('subdivisions')) {
    params.subdivisions = sp.get('subdivisions')!.split(',').map(s => s.trim()).filter(Boolean);
  }
  // Sale vs rent, defaults to "sale" in bridge.ts if not specified
  if (sp.get('listingType') === 'rent' || sp.get('listingType') === 'sale') {
    params.listingType = sp.get('listingType') as 'sale' | 'rent';
  }
  if (sp.get('sortBy')) params.sortBy = sp.get('sortBy') as PropertySearchParams['sortBy'];
  if (sp.get('limit')) params.limit = parseInt(sp.get('limit')!);
  if (sp.get('offset')) params.offset = parseInt(sp.get('offset')!);

  const result = await searchListings(params);

  // Add rate limit header for debugging
  const headers: Record<string, string> = {
    // Layer 3: CDN cache, 5 min fresh, 10 min stale-while-revalidate
    'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
  };
  if (isRateLimited()) {
    headers['X-Bridge-Rate-Limited'] = 'true';
  }

  return NextResponse.json(result, { headers });
}
