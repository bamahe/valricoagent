'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function KingsMillPage() {
  /* --- Lead form state --- */
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'kings-mill', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Kings Mill Valrico?', a: 'Townhomes in Kings Mill typically sell between $275,000 and $350,000, making it the most affordable gated community in the Valrico area. Units range from 1,345 to 1,560 square feet with 2 to 3 bedrooms. Contact Barrett Henry at (813) 733-7907 for current Kings Mill pricing.' },
    { q: 'What school zone is Kings Mill in?', a: 'Kings Mill is zoned for Alafia Elementary, Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale High is an A-rated school with a GreatSchools rating of 8/10. Barrett Henry can verify the exact school assignment for any Kings Mill address.' },
    { q: 'Does Kings Mill have an HOA?', a: 'Yes. Kings Mill is a gated townhome community with a mandatory HOA. The HOA covers exterior maintenance, landscaping, roof upkeep, and common areas including the gated entrance. This reduces individual owner maintenance responsibilities significantly. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Is Kings Mill a good neighborhood in Valrico?', a: 'Kings Mill is the best option in Valrico for first-time buyers, downsizers, and investors who want Bloomingdale HS zoning at the lowest possible entry price. The gated entrance and HOA-maintained exteriors provide security and curb appeal without single-family home upkeep costs.' },
    { q: 'What year were Kings Mill homes built?', a: 'Kings Mill townhomes were built between 2004 and 2006. The concrete block construction is durable and typical of Florida building standards from that era. Many units have been updated with modern flooring, kitchen upgrades, and fresh paint since original construction.' },
    { q: 'Are Kings Mill townhomes a good investment?', a: 'Kings Mill offers favorable cap rates for investors due to the low acquisition cost ($275K-$350K) and strong rental demand in the Bloomingdale HS zone. The gated community, low maintenance, and school zoning attract quality tenants. Barrett Henry at (813) 733-7907 can run rental comps for any unit.' },
    { q: 'How far is Kings Mill from I-75?', a: 'Kings Mill is approximately 5 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 12-minute drive. Downtown Tampa is roughly 20 miles west via I-75, and Lakeland is about 28 miles east via I-4. Daily shopping along SR-60 is within 2 miles.' },
    { q: 'How does Kings Mill compare to other affordable Valrico neighborhoods?', a: 'Kings Mill ($275K-$350K) offers the lowest entry price in Valrico with gated security. Savannah Landings ($300K-$375K) is slightly higher but offers newer townhomes. Lakemont ($350K-$475K) has single-family homes but no gate. Kings Mill is ideal for budget-conscious buyers who still want the Bloomingdale HS zone.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Kings Mill Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Kings Mill is a gated townhome community off Bloomingdale Avenue in south Valrico (33596). The most affordable entry into the Bloomingdale High School zone, with prices from $275K&ndash;$350K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Kings Mill listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-2 border-white text-white font-semibold text-[15px] rounded no-underline hover:bg-white/20">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["KINGS MILL","KINGS MILL COMM","KINGS MILL PH II"]} heading="Kings Mill Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['kings-mill']}
          neighborhoodName="Kings Mill"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$275K\u2013$350K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Gated townhomes', 'Community type'],
          ].map(([v, l]) => (
            <div key={l} className="bg-white rounded-md p-5 border" style={{ borderColor: 'var(--border)' }}>
              <span className="font-serif text-2xl block mb-1" style={{ color: 'var(--ink)' }}>{v}</span>
              <span className="text-sm" style={{ color: 'var(--ink-muted)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>
            {/* --- About --- */}
            <h2 className="font-serif text-2xl mb-4">About Kings Mill, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Kings Mill is a gated townhome community located off Bloomingdale Avenue in south Valrico (33596). Built between 2004 and 2006, the community offers the lowest entry price in the entire Valrico market while still delivering gated security and Bloomingdale High School zoning. For first-time buyers trying to break into Valrico, Kings Mill is often the starting point.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Units range from 1,345 to 1,560 square feet with 2 to 3 bedrooms. The townhome format means shared walls, but the tradeoff is straightforward: the HOA handles exterior maintenance, landscaping, and roof upkeep, which cuts your monthly maintenance burden significantly compared to a single-family home. Many owners have updated interiors since original construction, expect to see modern flooring, refreshed kitchens, and updated bathrooms in recently renovated units.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The gated entrance provides both real security and perceived value at resale. Concrete block construction is standard throughout, built to Florida building codes. The community sits within easy reach of Bloomingdale Avenue shopping, dining, and the Bloomingdale regional library. For buyers watching their budget, Kings Mill delivers the Valrico lifestyle at a price point that competes with apartments.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Kings Mill</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Kings Mill falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong>, <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale High is an A-rated school earning a GreatSchools rating of 8/10, with strong AP course offerings, dual enrollment options, and competitive athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale HS zone is a significant driver of property values in south Valrico. Kings Mill gives buyers access to this school zone at the lowest price point available, a meaningful advantage for families who prioritize school quality but have tighter budgets. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details on every feeder pattern.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Kings Mill sits in south Valrico near Bloomingdale Avenue, providing convenient access to major corridors. Key commute times from Kings Mill:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;38 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 32&ndash;42 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 32 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 32&ndash;42 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Avenue puts Publix, Winn-Dixie, restaurants, banks, and medical offices within a few minutes&apos; drive. The Bloomingdale regional library is less than a mile away. Kings Mill&apos;s central south Valrico location makes daily errands quick and convenient.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Kings Mill has a mandatory HOA that covers the gated entrance, exterior maintenance, roof maintenance, landscaping, and common areas. The HOA-maintained exterior is a key selling point for buyers who want minimal upkeep. Monthly fees cover these services and keep the community looking consistent and well-maintained. Barrett Henry can pull the exact current HOA fee for any Kings Mill unit, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Kings Mill Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Kings Mill is the most affordable option in Valrico&apos;s Bloomingdale HS zone. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Type</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Kings Mill', '$275K\u2013$350K', 'Townhomes', 'Lowest price, gated, HOA-maintained'],
                    ['Savannah Landings', '$300K\u2013$375K', 'Townhomes', 'Slightly newer, similar format'],
                    ['Lakemont', '$350K\u2013$475K', 'Single-family', 'Larger homes, lake-influenced lots'],
                    ['River Hills Masters', '$350K\u2013$550K', 'Single-family', 'Golf community access, guard gate'],
                  ].map(([name, price, type, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{type}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Kings Mill&apos;s price advantage is clear. If you need more space or want a detached home, look at <Link href="/neighborhoods/lakemont/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Lakemont</Link>. If you want the golf community lifestyle on a budget, <Link href="/neighborhoods/river-hills-masters/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills Masters</Link> is worth exploring.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Kings Mill Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>First-time buyers who want Bloomingdale HS zoning at the lowest entry price</li>
              <li>Downsizers who want gated security with zero exterior maintenance</li>
              <li>Investors seeking strong cap rates in a high-demand rental zone</li>
              <li>Young professionals transitioning from renting to owning</li>
              <li>Military families at MacDill AFB who want affordable homeownership</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Kings Mill FAQ</h2>
            <div className="space-y-6 mb-10">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-[16px] mb-2" style={{ color: 'var(--ink)' }}>{f.q}</h3>
                  <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--ink-soft)' }}>{f.a}</p>
                </div>
              ))}
            </div>

            {/* --- Explore more --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Explore More Valrico Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--ink-soft)' }}>
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/savannah-landings/" className="no-underline" style={{ color: 'var(--accent)' }}>Savannah Landings</Link> &middot;{' '}
              <Link href="/neighborhoods/lakemont/" className="no-underline" style={{ color: 'var(--accent)' }}>Lakemont</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills-masters/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills Masters</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Kings Mill? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Kings Mill</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Kings Mill?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Kings Mill Info'}</button>
                </form>
              )}
              <p className="text-xs mt-3" style={{ color: 'var(--ink-muted)' }}>Or call Barrett directly: <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
            </div>

            {/* Valrico resources */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-serif text-lg mb-3">Valrico Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Full Valrico guide &rarr;</a></li>
                <li><a href="https://nowtb.com/best-realtor-valrico/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Best Valrico REALTOR&reg; &rarr;</a></li>
                <li><Link href="/valrico-school-zones/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Valrico school zone map &rarr;</Link></li>
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 38 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            {/* Selling CTA */}
            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Kings Mill?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Kings Mill, not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-white block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCHEMA: BreadcrumbList + Place + GeoCoordinates + RealEstateAgent + Offer ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
              { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://valricoagent.com/neighborhoods/" },
              { "@type": "ListItem", "position": 3, "name": "Kings Mill Homes for Sale", "item": "https://valricoagent.com/neighborhoods/kings-mill/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Kings Mill, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9412, "longitude": -82.2418 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Kings Mill, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Kings Mill, Valrico FL",
            "priceCurrency": "USD",
            "price": "275000-350000",
            "url": "https://valricoagent.com/neighborhoods/kings-mill/",
            "areaServed": { "@type": "Place", "name": "Kings Mill, Valrico FL" },
          },
        ],
      }) }} />

      {/* ===== SCHEMA: FAQPage ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "dateModified": "2026-05-05",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }) }} />
    </>
  );
}
