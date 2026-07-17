'use client';

/**
 * PropertySearch — client-side search UI with filters.
 * Fetches from /api/listings and displays PropertyCard grid.
 * Filters: price range, beds, baths, property type, pool, waterfront, sort.
 */

import { useState, useEffect, useCallback } from 'react';
import PropertyCard from './PropertyCard';
import type { BridgeListing } from '@/lib/bridge';

interface PropertySearchProps {
  /** Default city filter (e.g. "Valrico") */
  defaultCity?: string;
  /** Default zip code filter */
  defaultZip?: string;
  /** Page heading override */
  heading?: string;
  /** Pre-filter: pool only */
  poolOnly?: boolean;
  /** Pre-filter: waterfront only */
  waterfrontOnly?: boolean;
  /** Hidden filter: single MLS subdivision name (exact match) */
  defaultSubdivision?: string;
  /** Hidden filter: multiple MLS subdivision names (OR match) */
  defaultSubdivisions?: string[];
  /** "sale" (default) or "rent" — shows a toggle when true */
  showRentToggle?: boolean;
  /** Force listing type without showing toggle */
  defaultListingType?: 'sale' | 'rent';
}

export default function PropertySearch({
  defaultCity = 'Valrico',
  defaultZip,
  heading,
  poolOnly: defaultPoolOnly = false,
  waterfrontOnly: defaultWaterfrontOnly = false,
  defaultSubdivision,
  defaultSubdivisions,
  showRentToggle = false,
  defaultListingType = 'sale',
}: PropertySearchProps) {
  // Filter state
  const [listingType, setListingType] = useState<'sale' | 'rent'>(defaultListingType);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBeds, setMinBeds] = useState('');
  const [minBaths, setMinBaths] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [poolOnly, setPoolOnly] = useState(defaultPoolOnly);
  const [waterfrontOnly, setWaterfrontOnly] = useState(defaultWaterfrontOnly);

  // Results
  const [listings, setListings] = useState<BridgeListing[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const pageSize = 24;

  // Fetch listings from our API route
  const fetchListings = useCallback(async (newPage = 0) => {
    setLoading(true);
    const params = new URLSearchParams();

    if (defaultCity) params.set('city', defaultCity);
    if (defaultZip) params.set('postalCode', defaultZip);
    if (minPrice) params.set('minPrice', minPrice);
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (minBeds) params.set('minBeds', minBeds);
    if (minBaths) params.set('minBaths', minBaths);
    if (poolOnly) params.set('poolOnly', 'true');
    if (waterfrontOnly) params.set('waterfrontOnly', 'true');
    params.set('listingType', listingType);
    // Hidden subdivision filters — passed with every request, not shown in UI
    if (defaultSubdivisions && defaultSubdivisions.length > 0) {
      params.set('subdivisions', defaultSubdivisions.join(','));
    } else if (defaultSubdivision) {
      params.set('subdivision', defaultSubdivision);
    }
    params.set('sortBy', sortBy);
    params.set('limit', pageSize.toString());
    params.set('offset', (newPage * pageSize).toString());

    try {
      const res = await fetch(`/api/listings/?${params.toString()}`);
      const data = await res.json();
      setListings(data.listings || []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error('Failed to fetch listings:', err);
      setListings([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, [defaultCity, defaultZip, minPrice, maxPrice, minBeds, minBaths, poolOnly, waterfrontOnly, sortBy, listingType, defaultSubdivision, defaultSubdivisions]);

  // Initial fetch
  useEffect(() => {
    fetchListings(0);
  }, [fetchListings]);

  // Handle filter submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(0);
    fetchListings(0);
  };

  // Handle page change
  const goToPage = (newPage: number) => {
    setPage(newPage);
    fetchListings(newPage);
    // Scroll to top of results
    document.getElementById('property-results')?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div>
      {/* Buy / Rent toggle */}
      {showRentToggle && (
        <div style={{ display: 'flex', gap: 0, marginBottom: 16 }}>
          <button
            type="button"
            onClick={() => { setListingType('sale'); setPage(0); }}
            style={{
              flex: 1, padding: '12px 0', fontSize: 15, fontWeight: 700,
              border: '2px solid #003da5', cursor: 'pointer',
              borderRadius: '8px 0 0 8px',
              background: listingType === 'sale' ? '#003da5' : '#fff',
              color: listingType === 'sale' ? '#fff' : '#003da5',
            }}
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => { setListingType('rent'); setPage(0); }}
            style={{
              flex: 1, padding: '12px 0', fontSize: 15, fontWeight: 700,
              border: '2px solid #003da5', borderLeft: 'none', cursor: 'pointer',
              borderRadius: '0 8px 8px 0',
              background: listingType === 'rent' ? '#003da5' : '#fff',
              color: listingType === 'rent' ? '#fff' : '#003da5',
            }}
          >
            Rent
          </button>
        </div>
      )}

      {/* Filter bar */}
      <form onSubmit={handleSearch} style={{
        background: '#fff',
        border: '1px solid #e5e5e5',
        borderRadius: 10,
        padding: '20px 24px',
        marginBottom: 32,
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 12, alignItems: 'end' }}>
          {/* Price range */}
          <div>
            <label style={labelStyle}>Min Price</label>
            <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)} style={selectStyle}>
              <option value="">Any</option>
              <option value="200000">$200K</option>
              <option value="250000">$250K</option>
              <option value="300000">$300K</option>
              <option value="350000">$350K</option>
              <option value="400000">$400K</option>
              <option value="500000">$500K</option>
              <option value="600000">$600K</option>
              <option value="750000">$750K</option>
              <option value="1000000">$1M</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Max Price</label>
            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} style={selectStyle}>
              <option value="">Any</option>
              <option value="300000">$300K</option>
              <option value="350000">$350K</option>
              <option value="400000">$400K</option>
              <option value="450000">$450K</option>
              <option value="500000">$500K</option>
              <option value="600000">$600K</option>
              <option value="750000">$750K</option>
              <option value="1000000">$1M</option>
              <option value="1500000">$1.5M</option>
              <option value="2000000">$2M+</option>
            </select>
          </div>

          {/* Beds */}
          <div>
            <label style={labelStyle}>Beds</label>
            <select value={minBeds} onChange={(e) => setMinBeds(e.target.value)} style={selectStyle}>
              <option value="">Any</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          {/* Baths */}
          <div>
            <label style={labelStyle}>Baths</label>
            <select value={minBaths} onChange={(e) => setMinBaths(e.target.value)} style={selectStyle}>
              <option value="">Any</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Sort */}
          <div>
            <label style={labelStyle}>Sort By</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={selectStyle}>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="sqft">Largest</option>
            </select>
          </div>

          {/* Search button */}
          <div>
            <button type="submit" style={{
              width: '100%',
              padding: '10px 20px',
              background: '#003da5',
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
            }}>
              Search
            </button>
          </div>
        </div>

        {/* Toggle filters row */}
        <div style={{ display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#555', cursor: 'pointer' }}>
            <input type="checkbox" checked={poolOnly} onChange={(e) => setPoolOnly(e.target.checked)} />
            Pool Only
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#555', cursor: 'pointer' }}>
            <input type="checkbox" checked={waterfrontOnly} onChange={(e) => setWaterfrontOnly(e.target.checked)} />
            Waterfront Only
          </label>
        </div>
      </form>

      {/* Results header */}
      <div id="property-results" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div style={{ fontSize: 14, color: '#555' }}>
          {loading ? (
            'Searching...'
          ) : (
            <><strong>{total.toLocaleString()}</strong> {listingType === 'rent' ? (total === 1 ? 'rental' : 'rentals') : (total === 1 ? 'home' : 'homes')} found</>
          )}
        </div>
        {heading && <div style={{ fontSize: 11, color: '#888' }}>Updated from Stellar MLS</div>}
      </div>

      {/* Loading state */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <div style={{
            width: 40, height: 40, border: '3px solid #e5e5e5',
            borderTopColor: '#003da5', borderRadius: '50%',
            margin: '0 auto 16px',
            animation: 'spin 1s linear infinite',
          }} />
          <p style={{ fontSize: 14, color: '#888' }}>Loading listings...</p>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}

      {/* Results grid */}
      {!loading && listings.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {listings.map((listing) => (
            <PropertyCard key={listing.ListingKey} listing={listing} />
          ))}
        </div>
      )}

      {/* No results */}
      {!loading && listings.length === 0 && (
        <div style={{
          textAlign: 'center', padding: '60px 20px',
          background: '#f7f7f7', borderRadius: 10, border: '1px solid #e5e5e5',
        }}>
          <span className="material-icons" style={{ fontSize: 48, color: '#ccc', marginBottom: 12 }}>search_off</span>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#222', marginBottom: 8 }}>No listings match your filters</p>
          <p style={{ fontSize: 14, color: '#555' }}>Try adjusting your price range or removing filters. Or call Barrett at <a href="tel:8137337907" style={{ color: '#003da5', fontWeight: 600 }}>(813) 733-7907</a> for help finding your next home.</p>
        </div>
      )}

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 32 }}>
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            style={{ ...paginationBtnStyle, opacity: page === 0 ? 0.4 : 1 }}
          >
            ← Prev
          </button>
          <span style={{ padding: '10px 16px', fontSize: 14, color: '#555' }}>
            Page {page + 1} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages - 1}
            style={{ ...paginationBtnStyle, opacity: page >= totalPages - 1 ? 0.4 : 1 }}
          >
            Next →
          </button>
        </div>
      )}

      {/* MLS disclaimer — required by Stellar MLS */}
      <div style={{
        marginTop: 40, padding: 20, background: '#f7f7f7',
        borderRadius: 8, border: '1px solid #e5e5e5',
        fontSize: 11, color: '#888', lineHeight: 1.7,
      }}>
        <p>Listing data provided by Stellar MLS via Bridge Interactive. Information deemed reliable but not guaranteed. Buyers should verify all data independently. IDX information is provided exclusively for personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Last updated: {new Date().toLocaleDateString()}.</p>
        <p style={{ marginTop: 8 }}>Barrett Henry, REALTOR® · REMAX Collective · (813) 733-7907</p>
      </div>
    </div>
  );
}

// --- Styles ---

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 600,
  color: '#888',
  textTransform: 'uppercase',
  letterSpacing: '.06em',
  marginBottom: 4,
};

const selectStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  fontSize: 14,
  border: '1px solid #e5e5e5',
  borderRadius: 6,
  background: '#fff',
  color: '#222',
  cursor: 'pointer',
  appearance: 'auto',
};

const paginationBtnStyle: React.CSSProperties = {
  padding: '10px 20px',
  fontSize: 14,
  fontWeight: 600,
  border: '1px solid #e5e5e5',
  borderRadius: 6,
  background: '#fff',
  color: '#003da5',
  cursor: 'pointer',
};
