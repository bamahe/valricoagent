/**
 * Bridge MLS API client for fetching property listings from Stellar MLS.
 *
 * Uses the Bridge Interactive REST API (not OData).
 * Docs: https://bridgedataoutput.com/docs/platform/API
 *
 * CACHING STRATEGY (multi-layer):
 * 1. In-memory cache (api-cache.ts) — 5 min TTL per unique query
 * 2. Next.js fetch() revalidate — 30 min ISR cache
 * 3. CDN s-maxage + stale-while-revalidate — set in API routes
 * 4. Rate limit protection — 1 min cooldown on 429s
 */

import { getCached, setCached, makeCacheKey } from './api-cache';

// --- Types ---

export interface BridgeListing {
  ListingId: string;
  ListingKey: string;
  StandardStatus: string;
  MlsStatus: string;
  ListPrice: number;
  ClosePrice: number | null;
  City: string;
  PostalCode: string;
  StateOrProvince: string;
  StreetNumber: string;
  StreetName: string;
  StreetSuffix: string | null;
  UnitNumber: string | null;
  UnparsedAddress: string;
  BedroomsTotal: number;
  BathroomsTotalInteger: number;
  BathroomsFull: number;
  BathroomsHalf: number;
  LivingArea: number;
  LotSizeSquareFeet: number;
  LotSizeAcres: number;
  YearBuilt: number;
  PropertyType: string;
  PropertySubType: string;
  SubdivisionName: string;
  PublicRemarks: string;
  Latitude: number;
  Longitude: number;
  DaysOnMarket: number;
  ListingContractDate: string;
  ModificationTimestamp: string;
  PhotosCount: number;
  GarageSpaces: number;
  GarageYN: boolean;
  PoolPrivateYN: boolean;
  WaterfrontYN: boolean;
  Cooling: string[];
  Heating: string[];
  Flooring: string[];
  Roof: string[];
  ExteriorFeatures: string[];
  InteriorFeatures: string[];
  Appliances: string[];
  AssociationYN: boolean;
  AssociationFee: number;
  AssociationFeeFrequency: string;
  ElementarySchool: string;
  MiddleOrJuniorSchool: string;
  HighSchool: string;
  ListAgentFullName: string;
  ListOfficeName: string;
  Media: BridgeMedia[];
  url?: string;
}

export interface BridgeMedia {
  MediaURL: string;
  MediaObjectID: string;
  Order: number;
  MimeType: string;
  ShortDescription: string;
  MediaCategory: string;
}

export interface BridgeResponse {
  success: boolean;
  status: number;
  total: number;
  bundle: BridgeListing[];
}

export interface PropertySearchParams {
  city?: string;
  postalCode?: string;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  minBaths?: number;
  minSqft?: number;
  maxSqft?: number;
  propertyType?: string;
  poolOnly?: boolean;
  waterfrontOnly?: boolean;
  noHoa?: boolean;
  /** Single exact MLS subdivision name match */
  subdivision?: string;
  /** Multiple MLS subdivision names — uses .in operator for OR matching */
  subdivisions?: string[];
  /** "sale" (default) or "rent" — filters by PropertyType */
  listingType?: 'sale' | 'rent';
  sortBy?: 'newest' | 'price-asc' | 'price-desc' | 'sqft';
  limit?: number;
  offset?: number;
}

// --- Config ---

const BASE_URL = 'https://api.bridgedataoutput.com/api/v2';
const DATASET = process.env.BRIDGE_DATASET || 'test';
const SERVER_TOKEN = process.env.BRIDGE_SERVER_TOKEN || '';

// Skip API calls during build to avoid rate limits on many pages
const IS_BUILD_TIME = process.env.NEXT_PHASE === 'phase-production-build';

// --- Rate limit protection ---

let rateLimitedUntil = 0;

/** Check if we're currently rate-limited (recent 429 from Bridge) */
export function isRateLimited(): boolean {
  return Date.now() < rateLimitedUntil;
}

/** Mark the API as rate-limited for 1 minute cooldown */
function markRateLimited(): void {
  rateLimitedUntil = Date.now() + 60 * 1000;
  console.warn('[Bridge] Rate limited — pausing API calls for 1 minute');
}

// --- Sale vs Rent property type groups ---

// Bridge uses PropertyType to distinguish sales from rentals
const SALE_TYPES = ['Residential', 'Land', 'Commercial Sale', 'Residential Income', 'Business Opportunity'];
const RENT_TYPES = ['Residential Lease', 'Commercial Lease'];

// --- API helpers ---

/**
 * Build query string from search params.
 * Bridge API uses simple key=value query params (not OData).
 */
function buildQueryParams(params: PropertySearchParams): URLSearchParams {
  const q = new URLSearchParams();
  q.set('access_token', SERVER_TOKEN);

  // Filters
  if (params.city) q.set('City', params.city);
  if (params.postalCode) q.set('PostalCode', params.postalCode);
  if (params.minPrice) q.set('ListPrice.gte', params.minPrice.toString());
  if (params.maxPrice) q.set('ListPrice.lte', params.maxPrice.toString());
  if (params.minBeds) q.set('BedroomsTotal.gte', params.minBeds.toString());
  if (params.minBaths) q.set('BathroomsTotalInteger.gte', params.minBaths.toString());
  if (params.minSqft) q.set('LivingArea.gte', params.minSqft.toString());
  if (params.maxSqft) q.set('LivingArea.lte', params.maxSqft.toString());
  if (params.poolOnly) q.set('PoolPrivateYN', 'true');
  if (params.waterfrontOnly) q.set('WaterfrontYN', 'true');

  // Subdivision filter — array uses .in operator, single string uses exact match
  if (params.subdivisions && params.subdivisions.length > 0) {
    q.set('SubdivisionName.in', params.subdivisions.join(','));
  } else if (params.subdivision) {
    q.set('SubdivisionName', params.subdivision);
  }

  // Only active listings
  q.set('StandardStatus', 'Active');

  // Sale vs Rent — filter by PropertyType groups
  if (params.listingType === 'rent') {
    q.set('PropertyType.in', RENT_TYPES.join(','));
  } else if (params.listingType === 'sale' || !params.listingType) {
    // Default to sales only — exclude leases
    q.set('PropertyType.in', SALE_TYPES.join(','));
  }

  // Explicit property type override (e.g. "Land", "Residential")
  if (params.propertyType) {
    q.set('PropertyType', params.propertyType);
  }

  // Sorting
  const sortMap: Record<string, [string, string]> = {
    'newest': ['ListingContractDate', 'desc'],
    'price-asc': ['ListPrice', 'asc'],
    'price-desc': ['ListPrice', 'desc'],
    'sqft': ['LivingArea', 'desc'],
  };
  const [sortField, sortOrder] = sortMap[params.sortBy || 'newest'] || sortMap['newest'];
  q.set('sortBy', sortField);
  q.set('order', sortOrder);

  // Pagination (Bridge max is 200)
  q.set('limit', Math.min(params.limit || 24, 200).toString());
  if (params.offset) q.set('offset', params.offset.toString());

  // Request specific fields to reduce payload size
  q.set('fields', 'ListingId,ListingKey,StandardStatus,MlsStatus,ListPrice,City,PostalCode,StateOrProvince,StreetNumber,StreetName,StreetSuffix,UnitNumber,UnparsedAddress,BedroomsTotal,BathroomsTotalInteger,BathroomsFull,BathroomsHalf,LivingArea,LotSizeSquareFeet,LotSizeAcres,YearBuilt,PropertyType,PropertySubType,SubdivisionName,PublicRemarks,Latitude,Longitude,DaysOnMarket,ListingContractDate,ModificationTimestamp,PhotosCount,GarageSpaces,GarageYN,PoolPrivateYN,WaterfrontYN,Cooling,Heating,Flooring,Roof,ExteriorFeatures,InteriorFeatures,Appliances,AssociationYN,AssociationFee,AssociationFeeFrequency,ElementarySchool,MiddleOrJuniorSchool,HighSchool,ListAgentFullName,ListOfficeName,Media');

  return q;
}

/**
 * Fetch listings from Bridge MLS API with multi-layer caching.
 */
export async function searchListings(params: PropertySearchParams = {}): Promise<{
  listings: BridgeListing[];
  total: number;
}> {
  // Skip during build to avoid rate-limiting all pages at once
  if (IS_BUILD_TIME) {
    return { listings: [], total: 0 };
  }

  // Check in-memory cache first (Layer 1)
  const cacheKey = makeCacheKey('listings', {
    city: params.city,
    zip: params.postalCode,
    minPrice: params.minPrice?.toString(),
    maxPrice: params.maxPrice?.toString(),
    beds: params.minBeds?.toString(),
    baths: params.minBaths?.toString(),
    pool: params.poolOnly?.toString(),
    waterfront: params.waterfrontOnly?.toString(),
    sub: params.subdivision,
    subs: params.subdivisions?.join(','),
    type: params.listingType || 'sale',
    ptype: params.propertyType,
    sort: params.sortBy,
    limit: params.limit?.toString(),
    offset: params.offset?.toString(),
  });

  type CacheResult = { listings: BridgeListing[]; total: number };
  const cached = getCached<CacheResult>(cacheKey);
  if (cached) return cached;

  const q = buildQueryParams(params);
  const url = `${BASE_URL}/${DATASET}/listings?${q.toString()}`;

  try {
    // Layer 2: Next.js fetch ISR — 30 min revalidation
    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });

    // Rate limit detection
    if (res.status === 429) {
      markRateLimited();
      return { listings: [], total: 0 };
    }

    if (!res.ok) {
      console.error('[Bridge] API error:', res.status, await res.text());
      return { listings: [], total: 0 };
    }

    const data: BridgeResponse = await res.json();

    if (!data.success) {
      console.error('[Bridge] API returned error:', data);
      return { listings: [], total: 0 };
    }

    const result = {
      listings: data.bundle || [],
      total: data.total || 0,
    };

    // Only cache non-empty responses to avoid poisoning with 429/error results
    if (result.listings.length > 0 || result.total === 0) {
      setCached(cacheKey, result);
    }

    return result;
  } catch (err) {
    console.error('[Bridge] Fetch failed:', err);
    return { listings: [], total: 0 };
  }
}

/**
 * Fetch a single listing by ListingId.
 */
export async function getListingById(listingId: string): Promise<BridgeListing | null> {
  if (IS_BUILD_TIME) return null;

  // Check cache
  const cacheKey = `listing:${listingId}`;
  const cached = getCached<BridgeListing>(cacheKey);
  if (cached) return cached;

  try {
    const url = `${BASE_URL}/${DATASET}/listings/${listingId}?access_token=${SERVER_TOKEN}`;
    const res = await fetch(url, {
      next: { revalidate: 1800 },
    });

    if (res.status === 429) {
      markRateLimited();
      return null;
    }

    if (!res.ok) return null;

    const data = await res.json();
    if (!data.success) return null;

    const listing = data.bundle || null;
    if (listing) setCached(cacheKey, listing);
    return listing;
  } catch {
    return null;
  }
}

// --- Formatting helpers ---

/** Format price: 450000 → "$450,000" */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

/** Format sqft: 2450 → "2,450" */
export function formatSqft(sqft: number): string {
  return new Intl.NumberFormat('en-US').format(sqft);
}

/** Get primary photo URL from listing, or a placeholder */
export function getPrimaryPhoto(listing: BridgeListing): string {
  if (listing.Media?.length > 0) {
    const sorted = [...listing.Media].sort((a, b) => a.Order - b.Order);
    return sorted[0].MediaURL;
  }
  return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75';
}

/** Build a clean address from listing fields */
export function formatAddress(listing: BridgeListing): string {
  if (listing.UnparsedAddress) {
    return listing.UnparsedAddress;
  }
  const parts = [
    listing.StreetNumber,
    listing.StreetName,
    listing.StreetSuffix,
  ].filter(Boolean);
  if (listing.UnitNumber) parts.push(`#${listing.UnitNumber}`);
  return parts.join(' ');
}

/** Generate a URL-safe slug from a listing */
export function listingSlug(listing: BridgeListing): string {
  const addr = formatAddress(listing)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${addr}-${listing.ListingId}`;
}
