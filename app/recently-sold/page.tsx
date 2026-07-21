'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sold listing from Bridge MLS
interface SoldListing {
  ListingId: string;
  UnparsedAddress: string;
  City: string;
  PostalCode: string;
  ClosePrice: number;
  ListPrice: number;
  CloseDate: string;
  BedroomsTotal: number;
  BathroomsTotalInteger: number;
  LivingArea: number;
  DaysOnMarket: number;
  Media?: { MediaURL: string }[];
}

export default function RecentlySoldPage() {
  const [listings, setListings] = useState<SoldListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, avgDom: 0, avgRatio: 0, totalVolume: 0 });

  useEffect(() => {
    async function fetchSold() {
      try {
        const res = await fetch('/api/recently-sold');
        const data = await res.json();
        setListings(data.listings || []);
        setStats(data.stats || { total: 0, avgDom: 0, avgRatio: 0, totalVolume: 0 });
      } catch {
        setListings([]);
      }
      setLoading(false);
    }
    fetchSold();
  }, []);

  return (
    <>
      {/* Hero */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Track Record</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Recently Sold by Barrett Henry</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>
            124+ homes sold across Tampa Bay. Real results, real closings. Barrett Henry, REALTOR® and Broker Associate with REMAX Collective — 23+ years of real estate experience.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">(813) 733-7907</a>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      {!loading && (
        <div style={{ background: 'var(--cream)' }}>
          <div className="max-w-[1140px] mx-auto px-7 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>{stats.total}+</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Homes Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>${(stats.totalVolume / 1_000_000).toFixed(1)}M</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Total Volume</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>{stats.avgDom}</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Avg Days on Market</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ color: 'var(--accent)' }}>{stats.avgRatio}%</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'var(--ink-soft)' }}>Avg Sale-to-List</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sold listings grid */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        {loading ? (
          <div className="text-center py-16">
            <div style={{ width: 40, height: 40, border: '3px solid #e8e8e8', borderTopColor: 'var(--accent)', borderRadius: '50%', margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
            <p style={{ fontSize: 14, color: '#888' }}>Loading sold listings...</p>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((l) => {
              const photoUrl = l.Media?.[0]?.MediaURL || '/images/no-photo.jpg';
              const ratio = l.ListPrice ? Math.round((l.ClosePrice / l.ListPrice) * 100) : 0;
              const closeDate = new Date(l.CloseDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

              return (
                <div key={l.ListingId} className="bg-white rounded-xl border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
                  {/* Photo */}
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <Image src={photoUrl} alt={l.UnparsedAddress} fill className="object-cover" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">SOLD</div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="text-white text-xl font-bold">${l.ClosePrice.toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-4">
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--ink)' }}>{l.UnparsedAddress}</p>
                    <p className="text-xs mb-3" style={{ color: 'var(--ink-soft)' }}>{l.City}, FL {l.PostalCode}</p>

                    <div className="flex gap-4 text-xs mb-3" style={{ color: 'var(--ink-soft)' }}>
                      {l.BedroomsTotal > 0 && <span>{l.BedroomsTotal} bed</span>}
                      {l.BathroomsTotalInteger > 0 && <span>{l.BathroomsTotalInteger} bath</span>}
                      {l.LivingArea > 0 && <span>{l.LivingArea.toLocaleString()} sqft</span>}
                    </div>

                    <div className="flex justify-between items-center text-xs pt-3 border-t" style={{ borderColor: 'var(--border)', color: 'var(--ink-soft)' }}>
                      <span>Closed {closeDate}</span>
                      <span>{l.DaysOnMarket} days on market</span>
                      {ratio > 0 && <span className="font-semibold" style={{ color: ratio >= 100 ? '#15803D' : 'var(--ink-soft)' }}>{ratio}% of list</span>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* CTA */}
      <section style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7 text-center">
        <div className="max-w-[560px] mx-auto">
          <h2 className="font-serif text-2xl mb-3">Ready to Be Next?</h2>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,.7)' }}>Whether you&apos;re buying or selling in Valrico, Barrett Henry delivers results. 23+ years of real estate experience. Free consultation, no pressure.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:8137337907" className="btn-solid" style={{ background: '#fff', color: '#003da5' }}>(813) 733-7907</a>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-sm rounded no-underline">Get My Home Value</Link>
          </div>
        </div>
      </section>

      {/* Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://valricoagent.com/" },
          { "@type": "ListItem", position: 2, name: "Recently Sold", item: "https://valricoagent.com/recently-sold/" },
        ]
      }) }} />
    </>
  );
}
