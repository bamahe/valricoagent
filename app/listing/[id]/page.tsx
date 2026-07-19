/**
 * Listing detail page, /listing/[id]/
 *
 * Shows full details for a single MLS listing:
 * photo gallery, price, address, description, features, school info,
 * map placeholder, and contact CTA.
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { getListingById, formatPrice, formatSqft, formatAddress, getPrimaryPhoto } from '@/lib/bridge';
import { ContactForm } from '@/app/components/ContactForm';

// Generate dynamic metadata from the listing
export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    return { title: 'Listing Not Found' };
  }

  const address = formatAddress(listing);
  const price = formatPrice(listing.ListPrice);

  return {
    title: `${address} | ${price} | Valrico Home for Sale`,
    description: `${listing.BedroomsTotal} bed, ${listing.BathroomsTotalInteger} bath, ${formatSqft(listing.LivingArea)} sqft home for sale at ${address}. Listed at ${price}. Contact Barrett Henry, REALTOR® at (813) 733-7907.`,
    openGraph: {
      title: `${address}, ${price}`,
      description: `${listing.BedroomsTotal}bd/${listing.BathroomsTotalInteger}ba · ${formatSqft(listing.LivingArea)} sqft · ${listing.SubdivisionName || listing.City}`,
      images: [{ url: getPrimaryPhoto(listing), width: 800, height: 600 }],
    },
  };
}

export default async function ListingDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const listing = await getListingById(id);

  if (!listing) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 24px' }}>
        <span className="material-icons" style={{ fontSize: 64, color: '#ccc' }}>home</span>
        <h1 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 28, marginTop: 16, marginBottom: 8 }}>Listing Not Found</h1>
        <p style={{ color: '#555', marginBottom: 24 }}>This listing may have been sold or removed from Stellar MLS.</p>
        <Link href="/valrico-fl-homes-for-sale/" style={{ padding: '12px 28px', background: '#003da5', color: '#fff', fontWeight: 600, borderRadius: 6, textDecoration: 'none' }}>
          Search All Homes
        </Link>
      </div>
    );
  }

  const address = formatAddress(listing);
  const photos = listing.Media?.length > 0
    ? [...listing.Media].sort((a, b) => a.Order - b.Order)
    : [];

  return (
    <>
      {/* Breadcrumbs */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e8e8e8', padding: '12px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#888' }}>
          <Link href="/" style={{ color: '#888' }}>
            <span className="material-icons" style={{ fontSize: 16, verticalAlign: 'middle' }}>home</span>
          </Link>
          <span>›</span>
          <Link href="/valrico-fl-homes-for-sale/" style={{ color: '#003da5' }}>Homes for Sale</Link>
          <span>›</span>
          <span style={{ color: '#222', fontWeight: 500 }}>{address}</span>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px' }}>
        {/* Photo gallery */}
        <div style={{ marginBottom: 32 }}>
          {photos.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: photos.length > 1 ? '2fr 1fr' : '1fr', gap: 8, borderRadius: 12, overflow: 'hidden', maxHeight: 480 }}>
              {/* Main photo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[0].MediaURL}
                alt={`${address}, main photo`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 300 }}
              />
              {/* Side photos (up to 2) */}
              {photos.length > 1 && (
                <div style={{ display: 'grid', gridTemplateRows: photos.length > 2 ? '1fr 1fr' : '1fr', gap: 8 }}>
                  {photos.slice(1, 3).map((photo) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={photo.MediaObjectID}
                      src={photo.MediaURL}
                      alt={photo.ShortDescription || address}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ height: 400, background: '#f0f0f0', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="material-icons" style={{ fontSize: 64, color: '#ccc' }}>photo_camera</span>
            </div>
          )}
          {/* All photos count */}
          {photos.length > 3 && (
            <p style={{ textAlign: 'right', fontSize: 13, color: '#003da5', fontWeight: 600, marginTop: 8 }}>
              {photos.length} photos total
            </p>
          )}
        </div>

        {/* Main content grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40 }}>
          {/* Left column, listing details */}
          <div>
            {/* Price + address */}
            <div style={{ marginBottom: 24 }}>
              <div style={{
                fontFamily: "'Merriweather', Georgia, serif",
                fontSize: 36, fontWeight: 700, color: '#003da5', marginBottom: 4,
              }}>
                {formatPrice(listing.ListPrice)}
              </div>
              <h1 style={{ fontSize: 20, fontWeight: 600, color: '#222', marginBottom: 4 }}>{address}</h1>
              <p style={{ fontSize: 14, color: '#555' }}>{listing.City}, {listing.StateOrProvince} {listing.PostalCode}</p>
            </div>

            {/* Quick stats row */}
            <div style={{
              display: 'flex', gap: 24, padding: '16px 0',
              borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8',
              marginBottom: 24,
            }}>
              {[
                [listing.BedroomsTotal, 'Beds', 'bed'],
                [listing.BathroomsTotalInteger, 'Baths', 'bathtub'],
                [listing.LivingArea > 0 ? formatSqft(listing.LivingArea) : ' - ', 'Sq Ft', 'straighten'],
                [listing.YearBuilt || ' - ', 'Built', 'calendar_today'],
                [listing.LotSizeAcres ? `${listing.LotSizeAcres} ac` : ' - ', 'Lot', 'grass'],
                [listing.GarageSpaces || 0, 'Garage', 'garage'],
              ].map(([val, label, icon]) => (
                <div key={label as string} style={{ textAlign: 'center' }}>
                  <span className="material-icons" style={{ fontSize: 20, color: '#003da5', display: 'block', marginBottom: 4 }}>{icon}</span>
                  <div style={{ fontSize: 18, fontWeight: 700, color: '#222' }}>{val}</div>
                  <div style={{ fontSize: 11, color: '#888' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 20, marginBottom: 12 }}>About This Home</h2>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.8, whiteSpace: 'pre-wrap' }}>
                {listing.PublicRemarks || 'No description available for this listing. Contact Barrett Henry for more details.'}
              </p>
            </div>

            {/* Property details */}
            <div style={{ marginBottom: 32 }}>
              <h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 20, marginBottom: 16 }}>Property Details</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {[
                  ['Property Type', listing.PropertySubType || listing.PropertyType],
                  ['Status', listing.MlsStatus || listing.StandardStatus],
                  ['MLS #', listing.ListingId],
                  ['Days on Market', listing.DaysOnMarket != null ? `${listing.DaysOnMarket} days` : ' - '],
                  ['Subdivision', listing.SubdivisionName || ' - '],
                  ['Year Built', listing.YearBuilt || ' - '],
                  ['Living Area', listing.LivingArea > 0 ? `${formatSqft(listing.LivingArea)} sqft` : ' - '],
                  ['Lot Size', listing.LotSizeAcres ? `${listing.LotSizeAcres} acres` : listing.LotSizeSquareFeet ? `${formatSqft(listing.LotSizeSquareFeet)} sqft` : ' - '],
                  ['Pool', listing.PoolPrivateYN ? 'Yes' : 'No'],
                  ['Waterfront', listing.WaterfrontYN ? 'Yes' : 'No'],
                  ['Garage', listing.GarageSpaces ? `${listing.GarageSpaces} spaces` : 'No'],
                  ['HOA', listing.AssociationYN ? `${listing.AssociationFee ? `$${listing.AssociationFee}/${listing.AssociationFeeFrequency || 'mo'}` : 'Yes'}` : 'No HOA'],
                ].map(([label, value]) => (
                  <div key={label as string} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0f0f0' }}>
                    <span style={{ fontSize: 13, color: '#888' }}>{label}</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#222' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features lists */}
            {[
              ['Interior Features', listing.InteriorFeatures],
              ['Exterior Features', listing.ExteriorFeatures],
              ['Appliances', listing.Appliances],
              ['Flooring', listing.Flooring],
              ['Cooling', listing.Cooling],
              ['Heating', listing.Heating],
              ['Roof', listing.Roof],
            ].filter(([, items]) => (items as string[])?.length > 0).length > 0 && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 20, marginBottom: 16 }}>Features</h2>
                {[
                  ['Interior Features', listing.InteriorFeatures],
                  ['Exterior Features', listing.ExteriorFeatures],
                  ['Appliances', listing.Appliances],
                  ['Flooring', listing.Flooring],
                  ['Cooling', listing.Cooling],
                  ['Heating', listing.Heating],
                  ['Roof', listing.Roof],
                ].filter(([, items]) => (items as string[])?.length > 0).map(([title, items]) => (
                  <div key={title as string} style={{ marginBottom: 16 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 600, color: '#222', marginBottom: 8 }}>{title}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {(items as string[]).map((item) => (
                        <span key={item} style={{
                          fontSize: 12, padding: '4px 12px',
                          background: '#fafafa', borderRadius: 4,
                          border: '1px solid #e8e8e8', color: '#555',
                        }}>{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Schools */}
            {(listing.ElementarySchool || listing.MiddleOrJuniorSchool || listing.HighSchool) && (
              <div style={{ marginBottom: 32 }}>
                <h2 style={{ fontFamily: "'Merriweather', Georgia, serif", fontSize: 20, marginBottom: 16 }}>
                  <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: 8, color: '#003da5' }}>school</span>
                  Schools
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                  {[
                    ['Elementary', listing.ElementarySchool],
                    ['Middle', listing.MiddleOrJuniorSchool],
                    ['High School', listing.HighSchool],
                  ].filter(([, v]) => v).map(([level, name]) => (
                    <div key={level as string} style={{ padding: 16, background: '#fafafa', borderRadius: 8, border: '1px solid #e8e8e8' }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: '#888', textTransform: 'uppercase', marginBottom: 4 }}>{level}</div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: '#222' }}>{name}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 12, color: '#888', marginTop: 8 }}>School assignments should be verified with Hillsborough County Schools.</p>
              </div>
            )}

            {/* Listing agent info */}
            <div style={{
              padding: 20, background: '#fafafa', borderRadius: 8,
              border: '1px solid #e8e8e8', fontSize: 12, color: '#888',
            }}>
              <p>Listed by {listing.ListOfficeName || 'Brokerage'}</p>
              <p style={{ marginTop: 4 }}>MLS #{listing.ListingId} · Data from Stellar MLS via Bridge Interactive. Deemed reliable but not guaranteed.</p>
            </div>
          </div>

          {/* Right column, contact CTA */}
          <div>
            <div style={{
              position: 'sticky', top: 80,
              background: '#fff', borderRadius: 12,
              border: '1px solid #e8e8e8',
              boxShadow: '0 4px 16px rgba(0,0,0,.08)',
              overflow: 'hidden',
            }}>
              {/* Agent header */}
              <div style={{ background: '#003da5', color: '#fff', padding: '20px 24px', textAlign: 'center' }}>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>Interested in This Home?</div>
                <div style={{ fontSize: 13, opacity: 0.8 }}>Barrett Henry, REALTOR® · REMAX Collective</div>
              </div>

              <div style={{ padding: '24px' }}>
                {/* Phone CTA */}
                <a href="tel:8137337907" style={{
                  display: 'block', textAlign: 'center',
                  padding: '14px 0', background: '#003da5', color: '#fff',
                  fontSize: 16, fontWeight: 700, borderRadius: 8,
                  textDecoration: 'none', marginBottom: 16,
                }}>
                  <span className="material-icons" style={{ verticalAlign: 'middle', marginRight: 6, fontSize: 20 }}>phone</span>
                  (813) 733-7907
                </a>

                <p style={{ fontSize: 13, color: '#555', textAlign: 'center', marginBottom: 16 }}>
                  Call or text for a private showing. Available 7 days a week.
                </p>

                {/* Lead form */}
                <ContactForm />
              </div>
            </div>

            {/* Quick links */}
            <div style={{ marginTop: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>Explore More</h3>
              {[
                ['/valrico-fl-homes-for-sale/', 'All Valrico Homes'],
                ['/valrico-pool-homes/', 'Pool Homes'],
                ['/valrico-new-construction-homes/', 'New Construction'],
                ['/valrico-fl-home-values/', "What's My Home Worth?"],
                ['/valrico-school-zones/', 'School Zone Guide'],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{
                  display: 'block', fontSize: 13, color: '#003da5',
                  padding: '8px 0', borderBottom: '1px solid #f0f0f0',
                }}>{label} →</Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${address} - Home for Sale`,
        "description": listing.PublicRemarks?.slice(0, 200) || `${listing.BedroomsTotal} bed, ${listing.BathroomsTotalInteger} bath home in ${listing.City}`,
        "image": photos[0]?.MediaURL,
        "offers": {
          "@type": "Offer",
          "price": listing.ListPrice,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry, REALTOR®",
            "telephone": "(813) 733-7907",
          }
        }
      })}} />

      {/* Responsive override for detail page */}
      <style>{`
        @media (max-width: 768px) {
          [style*="gridTemplateColumns: '1fr 380px'"],
          [style*="grid-template-columns: 1fr 380px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
