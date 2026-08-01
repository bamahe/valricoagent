'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

/**
 * Somerset neighborhood page.
 * Established community in western Valrico (33594).
 * Bloomingdale HS zone, $300K-$450K range.
 */
export default function SomersetPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'somerset', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Somerset Valrico?', a: 'Homes in Somerset typically sell between $300,000 and $450,000. Most are single-family homes with 3-4 bedrooms built in the 1990s and early 2000s. The lower price point makes Somerset one of the more affordable entry points into Valrico. Contact Barrett Henry at (813) 733-7907 for current Somerset pricing.' },
    { q: 'What school zone is Somerset in?', a: 'Somerset is zoned for Bloomingdale High School. Feeder schools include Alafia Elementary (or Cimino Elementary depending on section) and Burns Middle School. Bloomingdale HS is a well-regarded school with strong extracurriculars.' },
    { q: 'Does Somerset have an HOA?', a: 'Somerset has a voluntary or low-cost HOA depending on the section. Some parts of the neighborhood operate with minimal HOA oversight, which appeals to buyers who want fewer restrictions. Barrett Henry can verify the exact HOA status for any Somerset address.' },
    { q: 'Is Somerset a good neighborhood in Valrico?', a: 'Somerset is a solid choice for buyers looking for affordable Valrico homes with established character. Mature trees, quiet streets, and proximity to shopping along SR-60 make it practical for daily living. It does not have the amenity packages of gated communities, but the lower price point and no-CDD tax bills make it attractive for budget-conscious buyers and investors.' },
    { q: 'How far is Somerset from Brandon?', a: 'Somerset is approximately 3-4 miles from the Brandon commercial corridor along SR-60 (Brandon Blvd), about a 7-10 minute drive. Brandon Town Center, Publix, Walmart, and medical offices are all within a short drive. I-75 access is roughly 4 miles away.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Somerset Homes for Sale, Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Somerset is an established community in western Valrico (33594). Mature trees, quiet streets, Bloomingdale HS zone, prices from $300K&ndash;$450K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Somerset listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["SOMERSET"]} heading="Somerset Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['somerset']}
          neighborhoodName="Somerset"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$300K\u2013$450K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Established', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Somerset, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Somerset is one of Valrico&apos;s more affordable established neighborhoods, sitting in the 33594 ZIP code on the western side of the community. Built primarily in the 1990s and early 2000s, Somerset offers the mature trees, settled infrastructure, and lived-in character that newer construction communities simply cannot replicate.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Somerset range from approximately $300,000 to $450,000, making it one of the most accessible entry points into Valrico. Most properties feature 3-4 bedrooms with 1,400 to 2,200 square feet of living space. The neighborhood does not carry CDD assessments on the tax bill, which means lower total monthly costs compared to newer construction communities that typically add $150-$300/month in CDD fees.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Somerset&apos;s location in western Valrico provides quick access to the SR-60 commercial corridor, Brandon shopping, and I-75. Daily errands are a short drive. The neighborhood is zoned for Bloomingdale High School, which has strong academics and extracurriculars. For first-time buyers and investors, Somerset offers one of the best price-to-value ratios in Valrico.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Somerset</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Somerset is zoned for <strong>Bloomingdale High School</strong>. Feeder schools include <strong>Alafia Elementary</strong> (or <strong>Cimino Elementary</strong> depending on section) and <strong>Burns Middle School</strong>. Bloomingdale HS offers strong academics and a wide range of extracurricular activities. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 8&ndash;10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~18 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~22 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~4 miles / 8 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
            </ul>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Somerset Compares to Nearby Neighborhoods</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>School Zone</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Somerset', '$300K\u2013$450K', 'Bloomingdale HS', 'Affordable, mature trees, no CDD'],
                    ['Bloomingdale', '$300K\u2013$500K', 'Bloomingdale HS', 'Largest community, more amenities'],
                    ['Valrico Hills', '$300K\u2013$450K', 'Bloomingdale HS', 'Similar pricing, close to shopping'],
                    ['Valri Park', '$300K\u2013$450K', 'Bloomingdale HS', 'Established, mature trees'],
                    ['Lake Valrico', '$300K\u2013$475K', 'Bloomingdale HS', 'Waterfront lots available'],
                  ].map(([name, price, school, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{school}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Somerset Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>First-time buyers looking for affordable Valrico homes with good schools</li>
              <li>Buyers who prefer mature neighborhoods over new construction</li>
              <li>Investors targeting affordable Valrico rental properties without CDD fees</li>
              <li>Commuters who need quick access to SR-60, Brandon, and I-75</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Somerset FAQ</h2>
            <div className="space-y-6 mb-10">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-[16px] mb-2" style={{ color: 'var(--ink)' }}>{f.q}</h3>
                  <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--ink-soft)' }}>{f.a}</p>
                </div>
              ))}
            </div>

            {/* --- Cross-links to Barrett's other sites --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Somerset on Barrett&apos;s Other Sites</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><a href="https://valricopropertymgmt.com/neighborhoods/somerset" target="_blank" rel="noopener" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Somerset property management &rarr;</a></li>
              <li><a href="https://valrico.blog" target="_blank" rel="noopener" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico local news and guides &rarr;</a></li>
              <li><a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Full Valrico real estate guide &rarr;</a></li>
            </ul>

            {/* --- Explore more --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Explore More Valrico Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--ink-soft)' }}>
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/valri-park/" className="no-underline" style={{ color: 'var(--accent)' }}>Valri Park</Link> &middot;{' '}
              <Link href="/neighborhoods/lake-valrico/" className="no-underline" style={{ color: 'var(--accent)' }}>Lake Valrico</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/kings-mill/" className="no-underline" style={{ color: 'var(--accent)' }}>Kings Mill</Link> &middot;{' '}
              <Link href="/neighborhoods/crosby-crossings/" className="no-underline" style={{ color: 'var(--accent)' }}>Crosby Crossings</Link> &middot;{' '}
              <Link href="/neighborhoods/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>View all 36 &rarr;</Link>
            </p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Somerset</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Somerset?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Somerset Info'}</button>
                </form>
              )}
              <p className="text-xs mt-3" style={{ color: 'var(--ink-muted)' }}>Or call Barrett directly: <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
            </div>

            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-serif text-lg mb-3">Valrico Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Full Valrico guide &rarr;</a></li>
                <li><a href="https://valrico.blog" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Valrico local blog &rarr;</a></li>
                <li><a href="https://valricopropertymgmt.com/neighborhoods/somerset" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Somerset property management &rarr;</a></li>
                <li><Link href="/valrico-school-zones/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Valrico school zone map &rarr;</Link></li>
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 36 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Somerset?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Somerset, not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-white block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCHEMA ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
              { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://valricoagent.com/neighborhoods/" },
              { "@type": "ListItem", "position": 3, "name": "Somerset Homes for Sale", "item": "https://valricoagent.com/neighborhoods/somerset/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Somerset, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.8925, "longitude": -82.2560 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Somerset, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Somerset, Valrico FL",
            "priceCurrency": "USD",
            "price": "300000-450000",
            "url": "https://valricoagent.com/neighborhoods/somerset/",
            "areaServed": { "@type": "Place", "name": "Somerset, Valrico FL" },
          },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "dateModified": "2026-07-17",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }) }} />
    </>
  );
}
