/**
 * PropertyCard — displays a single MLS listing in a grid card.
 * Shows photo, price, beds/baths/sqft, address, and status badge.
 */

import Link from 'next/link';
import { formatPrice, formatSqft, getPrimaryPhoto, formatAddress, type BridgeListing } from '@/lib/bridge';

export default function PropertyCard({ listing }: { listing: BridgeListing }) {
  const photo = getPrimaryPhoto(listing);
  const address = formatAddress(listing);
  const detailHref = `/listing/${listing.ListingKey}/`;

  return (
    <Link href={detailHref} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{
        background: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        border: '1px solid #e5e5e5',
        transition: 'box-shadow .2s, transform .2s',
        cursor: 'pointer',
      }}
        className="property-card"
      >
        {/* Photo */}
        <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#f0f0f0' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt={address}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Status badge */}
          <span style={{
            position: 'absolute', top: 10, left: 10,
            background: listing.StandardStatus === 'Active' ? '#16a34a' : '#eab308',
            color: '#fff', fontSize: 11, fontWeight: 700,
            padding: '3px 10px', borderRadius: 4,
            textTransform: 'uppercase', letterSpacing: '.04em',
          }}>
            {listing.MlsStatus || listing.StandardStatus}
          </span>
          {/* Photo count */}
          {listing.PhotosCount > 1 && (
            <span style={{
              position: 'absolute', bottom: 8, right: 8,
              background: 'rgba(0,0,0,.6)', color: '#fff',
              fontSize: 11, padding: '2px 8px', borderRadius: 4,
            }}>
              <span className="material-icons" style={{ fontSize: 14, verticalAlign: 'middle', marginRight: 2 }}>photo_library</span>
              {listing.PhotosCount}
            </span>
          )}
          {/* Pool / Waterfront badges */}
          <div style={{ position: 'absolute', top: 10, right: 10, display: 'flex', gap: 4 }}>
            {listing.PoolPrivateYN && (
              <span style={{ background: '#003da5', color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 4 }}>Pool</span>
            )}
            {listing.WaterfrontYN && (
              <span style={{ background: '#0ea5e9', color: '#fff', fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 4 }}>Waterfront</span>
            )}
          </div>
        </div>

        {/* Details */}
        <div style={{ padding: '14px 16px' }}>
          {/* Price */}
          <div style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 22, fontWeight: 700, color: '#003da5', marginBottom: 4 }}>
            {formatPrice(listing.ListPrice)}
          </div>

          {/* Beds / Baths / Sqft */}
          <div style={{ display: 'flex', gap: 16, fontSize: 13, color: '#555', marginBottom: 8 }}>
            <span><strong>{listing.BedroomsTotal}</strong> bd</span>
            <span><strong>{listing.BathroomsTotalInteger}</strong> ba</span>
            {listing.LivingArea > 0 && <span><strong>{formatSqft(listing.LivingArea)}</strong> sqft</span>}
          </div>

          {/* Address */}
          <div style={{ fontSize: 13, color: '#222', fontWeight: 500, lineHeight: 1.4, marginBottom: 4 }}>
            {address}
          </div>

          {/* Subdivision + days on market */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#888', marginTop: 6 }}>
            {listing.SubdivisionName && <span>{listing.SubdivisionName}</span>}
            {listing.DaysOnMarket != null && <span>{listing.DaysOnMarket} days on market</span>}
          </div>
        </div>
      </div>

      <style>{`
        .property-card:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,.12);
          transform: translateY(-2px);
        }
      `}</style>
    </Link>
  );
}
