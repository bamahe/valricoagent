/**
 * Bridge MLS API client for fetching property listings from Stellar MLS.
 *
 * Uses the Bridge Interactive REST API (not OData).
 * Docs: https://bridgedataoutput.com/docs/platform/API
 *
 * HOW IT WORKS:
 * - Server token goes in ?access_token= query param
 * - Dataset is "stellar" for Stellar MLS (Florida)
 * - Currently using "test" dataset until Stellar access is provisioned
 * - Once Bridge enables Stellar access, change BRIDGE_DATASET in .env.local
 */

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
  // Computed helper
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
  sortBy?: 'newest' | 'price-asc' | 'price-desc' | 'sqft';
  limit?: number;
  offset?: number;
}

// --- Config ---

const BASE_URL = 'https://api.bridgedataoutput.com/api/v2';

// "test" until Stellar MLS access is provisioned, then switch to "stellar"
const DATASET = process.env.BRIDGE_DATASET || 'test';
const SERVER_TOKEN = process.env.BRIDGE_SERVER_TOKEN || '';

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

  // Only active listings
  q.set('StandardStatus', 'Active');

  // Property type filter
  if (params.propertyType) {
    q.set('PropertyType', params.propertyType);
  }

  // Sorting — Bridge uses sortBy=Field&order=asc|desc (separate params)
  const sortMap: Record<string, [string, string]> = {
    'newest': ['ListingContractDate', 'desc'],
    'price-asc': ['ListPrice', 'asc'],
    'price-desc': ['ListPrice', 'desc'],
    'sqft': ['LivingArea', 'desc'],
  };
  const [sortField, sortOrder] = sortMap[params.sortBy || 'newest'] || sortMap['newest'];
  q.set('sortBy', sortField);
  q.set('order', sortOrder);

  // Pagination
  q.set('limit', (params.limit || 24).toString());
  if (params.offset) q.set('offset', params.offset.toString());

  // Request photos
  q.set('fields', 'ListingId,ListingKey,StandardStatus,MlsStatus,ListPrice,City,PostalCode,StateOrProvince,StreetNumber,StreetName,StreetSuffix,UnitNumber,UnparsedAddress,BedroomsTotal,BathroomsTotalInteger,BathroomsFull,BathroomsHalf,LivingArea,LotSizeSquareFeet,LotSizeAcres,YearBuilt,PropertyType,PropertySubType,SubdivisionName,PublicRemarks,Latitude,Longitude,DaysOnMarket,ListingContractDate,ModificationTimestamp,PhotosCount,GarageSpaces,GarageYN,PoolPrivateYN,WaterfrontYN,Cooling,Heating,Flooring,Roof,ExteriorFeatures,InteriorFeatures,Appliances,AssociationYN,AssociationFee,AssociationFeeFrequency,ElementarySchool,MiddleOrJuniorSchool,HighSchool,ListAgentFullName,ListOfficeName,Media');

  return q;
}

/**
 * Fetch listings from Bridge MLS API.
 * Caches for 5 minutes on Vercel via next revalidate.
 */
export async function searchListings(params: PropertySearchParams = {}): Promise<{
  listings: BridgeListing[];
  total: number;
}> {
  const q = buildQueryParams(params);
  const url = `${BASE_URL}/${DATASET}/listings?${q.toString()}`;

  const res = await fetch(url, {
    next: { revalidate: 300 }, // Cache 5 minutes
  });

  if (!res.ok) {
    console.error('Bridge API error:', res.status, await res.text());
    return { listings: [], total: 0 };
  }

  const data: BridgeResponse = await res.json();

  if (!data.success) {
    console.error('Bridge API returned error:', data);
    return { listings: [], total: 0 };
  }

  return {
    listings: data.bundle || [],
    total: data.total || 0,
  };
}

/**
 * Fetch a single listing by ListingId.
 */
export async function getListingById(listingId: string): Promise<BridgeListing | null> {
  const url = `${BASE_URL}/${DATASET}/listings/${listingId}?access_token=${SERVER_TOKEN}`;

  const res = await fetch(url, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    console.error('Bridge API error fetching listing:', res.status);
    return null;
  }

  const data = await res.json();
  if (!data.success) return null;

  return data.bundle || null;
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
  // Placeholder for listings with no photos
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
