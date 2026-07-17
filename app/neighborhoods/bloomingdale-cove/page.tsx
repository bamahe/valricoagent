'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function BloomingdaleCovePage() {
  /* --- Lead form state --- */
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'bloomingdale-cove', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Bloomingdale Cove?', a: 'Homes in Bloomingdale Cove typically sell between $375,000 and $500,000. Updated homes with modern kitchens and renovated bathrooms command the upper end. Original-condition homes start closer to $375K. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is Bloomingdale Cove in?', a: 'Bloomingdale Cove is zoned for Cimino Elementary, Burns Middle School, and Bloomingdale High School. Bloomingdale HS is A-rated with a GreatSchools rating of 8/10 and offers AP courses, Cambridge International curriculum, and competitive athletics.' },
    { q: 'Does Bloomingdale Cove have an HOA?', a: 'Bloomingdale Cove is a sub-neighborhood within the broader Bloomingdale community. HOA structure varies by section. Some areas have mandatory HOAs while others are voluntary. Call Barrett Henry at (813) 733-7907 for the specific HOA status of any Bloomingdale Cove property.' },
    { q: 'Is Bloomingdale Cove a good neighborhood in Valrico?', a: 'Bloomingdale Cove is a well-positioned section within Bloomingdale known for updated homes, convenient access to shopping on Bloomingdale Avenue, and the A-rated Bloomingdale HS zone. The central location within the broader community means shorter drives to amenities.' },
    { q: 'How far is Bloomingdale Cove from downtown Tampa?', a: 'Bloomingdale Cove is approximately 20 miles from downtown Tampa, which is a 28 to 40 minute drive depending on traffic and whether you use I-75 or the Lee Roy Selmon Expressway. The Selmon is typically faster during rush hour.' },
    { q: 'What size are homes in Bloomingdale Cove?', a: 'Homes in Bloomingdale Cove range from approximately 1,600 to 2,600 square feet with 3 to 4 bedrooms. Most are single-story concrete block construction from the late 1980s through the 1990s. Many have been renovated with contemporary finishes.' },
    { q: 'Are there pool homes in Bloomingdale Cove?', a: 'Yes, screened pool homes are available in Bloomingdale Cove. Pool homes typically sell for $20K to $35K more than comparable non-pool homes in this section. Barrett Henry at (813) 733-7907 can filter current listings to show only pool homes.' },
    { q: 'How does Bloomingdale Cove compare to Bloomingdale Oaks?', a: 'Both are sub-neighborhoods within Bloomingdale sharing the same school zone and general price range. Bloomingdale Oaks ($350K-$475K) is slightly more affordable and has a stronger identity with sidewalks throughout. Bloomingdale Cove ($375K-$500K) tends to have more updated interiors and a slightly higher median price per square foot.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Bloomingdale Cove Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Bloomingdale Cove is a well-positioned sub-neighborhood within the broader Bloomingdale community in south Valrico (33596). Prices from $375K&ndash;$500K. Bloomingdale HS zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Bloomingdale Cove listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["BLOOMINGDALE SEC CC PH"]} heading="Bloomingdale Cove Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['bloomingdale-cove']}
          neighborhoodName="Bloomingdale Cove"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$375K\u2013$500K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Sub-community', 'Part of Bloomingdale'],
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
            <h2 className="font-serif text-2xl mb-4">About Bloomingdale Cove, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Cove is a well-positioned sub-neighborhood within the broader Bloomingdale community in south Valrico (33596). The section sits centrally within Bloomingdale, giving residents quick access to the Bloomingdale Avenue shopping and dining corridor without being directly on the commercial road. This balance of convenience and residential quiet is what draws buyers to this particular section.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from approximately 1,600 to 2,600 square feet with 3 to 4 bedrooms. Most are concrete block construction from the late 1980s through the 1990s. Many homes in Bloomingdale Cove have been renovated with modern kitchens featuring granite or quartz countertops, stainless steel appliances, and updated bathrooms with contemporary tile work. LVP or tile flooring has replaced carpet in most updated homes.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The section is known for attracting buyers who want a specific Bloomingdale location that balances community character with convenience. Unlike some of the outer Bloomingdale sub-neighborhoods, Cove residents can walk to nearby retail without needing a car. The streets are residential and well-maintained, with a mix of original and updated homes that keeps the price range accessible for both first-time and move-up buyers.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Bloomingdale Cove</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Cove is zoned for <strong>Cimino Elementary</strong>, <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale HS is A-rated by the Florida Department of Education with a GreatSchools rating of 8/10. The school offers AP courses, Cambridge International curriculum, and a range of extracurricular programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale HS zone is one of the primary value drivers for all sub-neighborhoods in this area. Comparable homes inside the Bloomingdale HS zone sell for more than similar homes zoned for other high schools. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Cove&apos;s central location within Bloomingdale provides excellent access to daily needs. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 12&ndash;15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;40 minutes via I-75 or Selmon</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10&ndash;12 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 30&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Publix, Winn-Dixie, CVS, restaurants, and medical offices are all within a few minutes along Bloomingdale Avenue. HCA Florida Brandon Hospital is a short drive north. The Lee Roy Selmon Expressway offers a faster route into downtown Tampa during peak commute hours.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>HOA structure in Bloomingdale Cove follows the broader Bloomingdale community model, which varies by section. Some areas have mandatory HOAs while others are voluntary or have no formal association. This means monthly costs can range from nothing to a modest fee depending on the specific property. Barrett Henry can confirm the exact HOA status for any Bloomingdale Cove address &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Bloomingdale Cove Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Cove is one of 32+ Bloomingdale sub-neighborhoods. Here&apos;s how it compares:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>HOA</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Bloomingdale Cove', '$375K\u2013$500K', 'Varies', 'Central location, updated interiors'],
                    ['Bloomingdale Oaks', '$350K\u2013$475K', 'Varies', 'Sidewalks, strong resale identity'],
                    ['Bent Tree Estates', '$375K\u2013$500K', 'Minimal', 'Larger lots, mature canopy'],
                    ['Buckhorn Bloomingdale', '$300K\u2013$420K', 'Minimal', 'Most affordable in 33596'],
                  ].map(([name, price, hoa, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{hoa}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Cove&apos;s central location and updated homes set it apart. If you want a lower price point in the same school zone, look at <Link href="/neighborhoods/buckhorn-bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Bloomingdale</Link>. For more yard space, check <Link href="/neighborhoods/bent-tree-estates/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bent Tree Estates</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Bloomingdale Cove Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want a specific Bloomingdale section with updated homes and Bloomingdale HS zoning</li>
              <li>Buyers who prioritize walkable access to shopping and restaurants</li>
              <li>Move-up buyers from Brandon apartments or condos stepping into homeownership</li>
              <li>Professionals commuting to Tampa who want a central south Valrico location</li>
              <li>Homeowners who want a blend of community standards and residential character</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Bloomingdale Cove FAQ</h2>
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
              <Link href="/neighborhoods/bloomingdale-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale-east/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale East</Link> &middot;{' '}
              <Link href="/neighborhoods/bent-tree-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Bent Tree Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Bloomingdale Cove? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Bloomingdale Cove</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Bloomingdale Cove?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Cove Info'}</button>
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
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 32 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            {/* Selling CTA */}
            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Bloomingdale Cove?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Bloomingdale &mdash; not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCHEMA: BreadcrumbList + Place + GeoCoordinates + RealEstateAgent ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
              { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://valricoagent.com/neighborhoods/" },
              { "@type": "ListItem", "position": 3, "name": "Bloomingdale Cove Homes for Sale", "item": "https://valricoagent.com/neighborhoods/bloomingdale-cove/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Bloomingdale Cove, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9425, "longitude": -82.2435 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Bloomingdale Cove, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Bloomingdale Cove, Valrico FL",
            "priceCurrency": "USD",
            "price": "375000-500000",
            "url": "https://valricoagent.com/neighborhoods/bloomingdale-cove/",
            "areaServed": { "@type": "Place", "name": "Bloomingdale Cove, Valrico FL" },
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
