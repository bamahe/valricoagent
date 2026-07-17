'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function ValricoHillsPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'valrico-hills', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'What do homes cost in Valrico Hills?', a: 'Homes in Valrico Hills typically sell between $325,000 and $425,000. Pricing depends on square footage, lot size, and the extent of interior updates. Valrico Hills offers a mid-range price point within the 33594 ZIP code. Call Barrett Henry at (813) 733-7907 for current Valrico Hills pricing.' },
    { q: 'What school zone is Valrico Hills in?', a: 'Valrico Hills school zoning varies by address. Some streets fall within the Newsome High School feeder pattern while others may be assigned to a different high school. Elementary and middle school assignments also depend on exact location. Barrett Henry can verify school zoning for any Valrico Hills address — call (813) 733-7907.' },
    { q: 'Does Valrico Hills have an HOA?', a: 'Valrico Hills has a homeowners association that maintains community standards. HOA fees vary by section. Contact Barrett Henry at (813) 733-7907 for specific HOA fee information on any Valrico Hills property.' },
    { q: 'How old are homes in Valrico Hills?', a: 'Valrico Hills homes were primarily built from the 1980s through the early 2000s. The neighborhood has an established, settled feel with mature landscaping. Many homes have been updated with modern kitchens, new flooring, and refreshed bathrooms while retaining the solid block construction typical of the era.' },
    { q: 'Is Valrico Hills a good neighborhood?', a: 'Valrico Hills is a dependable, established neighborhood in Valrico 33594. It offers mid-range pricing, reasonable lot sizes, and a convenient location near SR-60 and I-75. The mix of updated and original-condition homes provides options for both move-in-ready and renovation-minded buyers.' },
    { q: 'How far is Valrico Hills from I-75?', a: 'Valrico Hills is approximately 3-4 miles from the I-75 interchange at SR-60 (Brandon Blvd), about an 8-10 minute drive. From I-75, downtown Tampa is roughly 25 minutes, MacDill AFB is about 30-40 minutes, and Lakeland is approximately 30 minutes.' },
    { q: 'What size are Valrico Hills homes?', a: 'Most Valrico Hills homes range from 1,400 to 2,400 square feet with 3 to 4 bedrooms. Floor plans tend to be practical split-bedroom layouts with living and family rooms. Lot sizes are typical for established Valrico neighborhoods, with most offering fenced backyards.' },
    { q: 'How does Valrico Hills compare to Valri Park?', a: 'Valrico Hills ($325K-$425K) sits one tier above Valri Park ($280K-$375K) in price. Both are in 33594, but Valrico Hills tends to offer slightly larger homes and more consistently updated properties. Valri Park is the budget option; Valrico Hills is the established mid-range choice.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Hills Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Valrico Hills is an established, mid-range neighborhood in Valrico (33594) with solid homes and practical floor plans. Prices from $325K&ndash;$425K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Valrico Hills listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["VALRICO HEIGHTS ESTATES"]} heading="Valrico Hills Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['valrico-hills']}
          neighborhoodName="Valrico Hills"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$325K\u2013$425K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Varies', 'High school zone'],
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
            <h2 className="font-serif text-2xl mb-4">About Valrico Hills, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Hills occupies the middle ground in 33594 &mdash; not the most affordable option and not the premium tier, but a dependable established neighborhood where you get a solid home at a fair price. The community sits in a convenient pocket of Valrico with quick access to SR-60 (Brandon Blvd) for shopping and the I-75 corridor for commuting. For buyers who want a Valrico address without paying for newer construction or gated community premiums, Valrico Hills delivers.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Valrico Hills typically range from 1,400 to 2,400 square feet with 3 to 4 bedrooms. The community was built out primarily during the 1980s through the early 2000s, producing a range of home styles from classic Florida ranch plans to two-story layouts. Block construction is standard, and most homes feature split-bedroom floor plans with separate living and family areas. The mature landscaping throughout the neighborhood provides shade and curb appeal that new construction simply cannot match on day one.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The appeal of Valrico Hills comes down to value and location. At the $325K&ndash;$425K range, you&apos;re getting into a legitimate Valrico 33594 neighborhood with a reasonable commute to Tampa, Brandon, or Lakeland. Homes at the lower end of the range may need cosmetic work &mdash; older kitchens, original tile, dated bathrooms &mdash; but the bones are typically good. Updated homes in Valrico Hills compete well with newer communities that cost $50K&ndash;$100K more and add CDD fees on top.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Valrico Hills</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Hills school zoning varies by address within the neighborhood. Some sections fall within the Newsome High School feeder pattern (Mintz Elementary, Mulrennan Middle), while other streets may zone for different schools. This is common in established Valrico neighborhoods where school boundaries don&apos;t follow subdivision lines.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>If school zoning is a priority for your purchase, verifying the assignment for a specific address is essential before making an offer. Barrett Henry can pull the verified school zoning for any Valrico Hills address &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>. For a broader look at Valrico&apos;s feeder patterns, visit the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico school zone guide</Link>.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Hills benefits from a central Valrico location with direct access to the area&apos;s main corridors. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~3&ndash;4 miles / 8&ndash;10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~18 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~22 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~4 miles / 8 minutes</li>
              <li><strong>Lakeland:</strong> ~26 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~25 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The SR-60 corridor is minutes away with Publix, Walmart, Target, Home Depot, medical offices, and a full range of restaurants and services. Lithia Pinecrest Road provides an additional route to Bloomingdale Avenue and the south Valrico commercial area.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valrico Hills has a homeowners association that oversees community standards and maintenance requirements. HOA fees vary by section. As an established community built before the CDD era, most Valrico Hills homes do not carry Community Development District assessments &mdash; keeping total monthly costs below what newer communities charge. For exact HOA fee details, call Barrett Henry at <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Valrico Hills Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Hills falls in the mid-range of 33594 neighborhoods. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>ZIP</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Valrico Hills', '$325K\u2013$425K', '33594', 'Established mid-range, practical floor plans'],
                    ['Valri Park', '$280K\u2013$375K', '33594', 'Most affordable 33594 option, smaller homes'],
                    ['Valrico Oaks', '$350K\u2013$500K', '33594', 'Newsome HS zone, slightly higher tier'],
                    ['Valrico Forest', '$400K\u2013$525K', '33594', 'Wooded lots, Newsome HS, premium setting'],
                  ].map(([name, price, zip, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{zip}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valrico Hills is the steady middle option in 33594. If you want to spend less, <Link href="/neighborhoods/valri-park/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valri Park</Link> is the value play. If you want confirmed Newsome HS zoning at a step up, <Link href="/neighborhoods/valrico-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link> is worth considering.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Valrico Hills Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want a 33594 address at a mid-range price point</li>
              <li>Buyers who prefer established neighborhoods with mature landscaping</li>
              <li>Commuters who need quick access to SR-60 and I-75</li>
              <li>Move-up buyers from smaller or older homes in the area</li>
              <li>Anyone looking for an honest, no-frills Valrico neighborhood with solid resale</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Valrico Hills FAQ</h2>
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
              <Link href="/neighborhoods/valri-park/" className="no-underline" style={{ color: 'var(--accent)' }}>Valri Park</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-forest/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Forest</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Interested in Valrico Hills? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Valrico Hills</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Valrico Hills?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Valrico Hills Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Valrico Hills?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Neighborhood-specific comps &mdash; not an automated estimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
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
              { "@type": "ListItem", "position": 3, "name": "Valrico Hills Homes for Sale", "item": "https://valricoagent.com/neighborhoods/valrico-hills/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Valrico Hills, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9555, "longitude": -82.2310 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Valrico Hills, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Valrico Hills, Valrico FL",
            "priceCurrency": "USD",
            "price": "325000-425000",
            "url": "https://valricoagent.com/neighborhoods/valrico-hills/",
            "areaServed": { "@type": "Place", "name": "Valrico Hills, Valrico FL" },
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
