'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function CrosbyCrossingsPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'crosby-crossings', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Crosby Crossings Valrico?', a: 'Homes in Crosby Crossings typically sell between $370,000 and $475,000. Most homes range from 1,800 to 2,800 square feet with 3 to 5 bedrooms. Pricing depends on lot position, floor plan, and interior upgrades. Contact Barrett Henry at (813) 733-7907 for current Crosby Crossings pricing.' },
    { q: 'What school zone is Crosby Crossings in?', a: 'Crosby Crossings is zoned for Alafia Elementary (or Cimino Elementary depending on address), Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale High is a well-regarded public high school. Barrett Henry can verify the exact school assignment for any Crosby Crossings address.' },
    { q: 'Does Crosby Crossings have an HOA?', a: 'Yes. Crosby Crossings has a mandatory HOA that maintains community standards, common areas, and neighborhood appearance. Monthly HOA fees typically run $100\u2013$200. Some sections may also carry a CDD assessment on the property tax bill. Call Barrett Henry at (813) 733-7907 for current HOA and CDD details.' },
    { q: 'Is Crosby Crossings a good neighborhood in Valrico?', a: 'Crosby Crossings is an excellent option for buyers who want newer construction with modern floor plans in the Bloomingdale High School zone. The homes are built to current building codes with energy-efficient systems, and the community offers convenient access to both Valrico and Riverview commercial areas.' },
    { q: 'How far is Crosby Crossings from I-75?', a: 'Crosby Crossings is approximately 5 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 10 to 12-minute drive. From I-75, downtown Tampa is roughly 25 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'Are there CDD fees in Crosby Crossings?', a: 'Some sections of Crosby Crossings may carry a CDD (Community Development District) assessment in addition to the HOA fee. CDD fees are included in your property tax bill and typically run $1,000\u2013$2,500 per year. Barrett Henry can pull the exact CDD amount for any specific Crosby Crossings address.' },
    { q: 'What year were Crosby Crossings homes built?', a: 'Crosby Crossings homes were built primarily from the 2010s onward, making them some of the newer construction available in south Valrico. The modern construction means open floor plans, impact-resistant features, energy-efficient windows, and updated building code compliance that reduces utility costs and maintenance.' },
    { q: 'How does Crosby Crossings compare to nearby neighborhoods?', a: 'Crosby Crossings ($370K\u2013$475K) offers newer construction in the Bloomingdale HS zone. Canterbury Oaks ($350K\u2013$475K) has pool and tennis amenities in the same school zone but older construction. Buckhorn Preserve ($350K\u2013$500K) has similar newer construction but in the Newsome HS zone. Duncan Groves ($350K\u2013$450K) provides a more affordable established option.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Crosby Crossings Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Crosby Crossings is a newer construction community in the Bloomingdale corridor of south Valrico (33596). Prices from $370K&ndash;$475K. Bloomingdale High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Crosby Crossings listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["CROSBY CROSSINGS"]} heading="Crosby Crossings Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['crosby-crossings']}
          neighborhoodName="Crosby Crossings"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$370K\u2013$475K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Newer Construction', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Crosby Crossings, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Crosby Crossings is one of the newer residential developments in the Bloomingdale corridor of south Valrico (33596). For buyers who prioritize modern construction over established charm, Crosby Crossings delivers open-concept floor plans, contemporary finishes, and building standards that meet current Florida energy and wind codes &mdash; something homes built before 2002 simply cannot match.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from 1,800 to 2,800 square feet with 3 to 5 bedrooms. Interior features include granite or quartz countertops, stainless steel appliances, tile and luxury vinyl plank flooring, and spacious owners suites with walk-in closets and double vanities. Many floor plans place the owners suite on the first floor with secondary bedrooms upstairs &mdash; a layout that appeals to families who want separation between the primary and secondary sleeping areas.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The community occupies a strategic position between Valrico and Riverview, giving residents access to two commercial corridors. Bloomingdale Avenue and Lithia Pinecrest Road provide grocery stores, restaurants, and services within minutes. For buyers who want a modern home in the Bloomingdale High School zone without paying for golf or gated amenities, Crosby Crossings hits the right balance of newer construction at a mid-range price point.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Crosby Crossings</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Crosby Crossings falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong> (or <strong>Cimino Elementary</strong> depending on address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale High offers a range of AP courses, dual enrollment options, and competitive athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The newer construction means lower near-term maintenance costs &mdash; newer roof, HVAC, water heater, and windows all translate to years before major replacement expenses hit. For young families and first-time buyers, this reduces the total cost of ownership significantly compared to 1990s-era homes in nearby subdivisions. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Crosby Crossings is positioned between the Valrico and Riverview commercial areas, offering dual-corridor access. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 10&ndash;12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;38 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 32&ndash;42 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~7 miles / 14 minutes</li>
              <li><strong>Lakeland:</strong> ~27 miles / 32 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 32&ndash;42 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Grocery, dining, and errands are quick. Publix, Walmart, and national restaurant chains are within a 5-minute drive along Bloomingdale Avenue. The Riverview commercial corridor to the south provides additional shopping and dining options, giving Crosby Crossings residents more variety than most south Valrico locations.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Crosby Crossings has a mandatory HOA that maintains community standards and common areas. Monthly HOA fees typically run $100&ndash;$200. As a newer construction community, some sections may carry a CDD (Community Development District) assessment on the property tax bill, typically $1,000&ndash;$2,500 per year. The CDD funded infrastructure development and is a fixed cost that declines over time as bonds are paid off. Barrett Henry can confirm exact HOA and CDD amounts for any Crosby Crossings address &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Crosby Crossings Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Crosby Crossings competes for buyers who want newer construction in south Valrico. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>HS Zone</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Crosby Crossings', '$370K\u2013$475K', 'Bloomingdale', 'Newer construction, modern floor plans'],
                    ['Canterbury Oaks', '$350K\u2013$475K', 'Bloomingdale', 'Pool & tennis, established community'],
                    ['Buckhorn Preserve', '$350K\u2013$500K', 'Newsome', 'Gated, community park amenities'],
                    ['Duncan Groves', '$350K\u2013$450K', 'Bloomingdale', 'More affordable, near parks'],
                  ].map(([name, price, hs, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{hs}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Crosby Crossings is the newer-construction pick in the Bloomingdale HS zone. If you want community pool access in the same school zone, <Link href="/neighborhoods/canterbury-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> has that. If the Newsome HS zone is a priority, <Link href="/neighborhoods/buckhorn-preserve/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Preserve</Link> delivers newer construction there.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Crosby Crossings Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>First-time buyers who want modern construction without the cost of building new</li>
              <li>Young families seeking open-concept floor plans in the Bloomingdale HS zone</li>
              <li>Buyers who want lower maintenance costs from newer roof, HVAC, and windows</li>
              <li>Professionals commuting to Tampa, Brandon, or Riverview</li>
              <li>Military families stationed at MacDill AFB who want newer homes</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Crosby Crossings FAQ</h2>
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
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Crosby Crossings? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Crosby Crossings</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Crosby Crossings?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Crosby Crossings Info'}</button>
                </form>
              )}
              <p className="text-xs mt-3" style={{ color: 'var(--ink-muted)' }}>Or call Barrett directly: <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
            </div>

            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-serif text-lg mb-3">Valrico Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Full Valrico guide &rarr;</a></li>
                <li><a href="https://nowtb.com/best-realtor-valrico/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Best Valrico REALTOR&reg; &rarr;</a></li>
                <li><Link href="/valrico-school-zones/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Valrico school zone map &rarr;</Link></li>
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 32 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Crosby Crossings?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Crosby Crossings &mdash; not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Crosby Crossings Homes for Sale", "item": "https://valricoagent.com/neighborhoods/crosby-crossings/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Crosby Crossings, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9395, "longitude": -82.2340 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Crosby Crossings, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Crosby Crossings, Valrico FL",
            "priceCurrency": "USD",
            "price": "370000-475000",
            "url": "https://valricoagent.com/neighborhoods/crosby-crossings/",
            "areaServed": { "@type": "Place", "name": "Crosby Crossings, Valrico FL" },
          },
        ],
      }) }} />

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
