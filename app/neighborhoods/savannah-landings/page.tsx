'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function SavannahLandingsPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'savannah-landings', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Savannah Landings Valrico?', a: 'Townhomes in Savannah Landings typically sell between $300,000 and $375,000, making it one of the most affordable communities in the Bloomingdale HS zone. Units range from 1,300 to 1,800 square feet with 2 to 3 bedrooms. Contact Barrett Henry at (813) 733-7907 for current Savannah Landings pricing.' },
    { q: 'What school zone is Savannah Landings in?', a: 'Savannah Landings is zoned for Alafia Elementary, Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale High is an A-rated school with a GreatSchools rating of 8/10. Barrett Henry can verify the exact school assignment for any Savannah Landings address.' },
    { q: 'Does Savannah Landings have an HOA?', a: 'Yes. Savannah Landings has a mandatory HOA that covers exterior maintenance, landscaping, roof upkeep on common structures, and community amenity maintenance. The HOA-maintained exterior reduces individual owner responsibilities and keeps the community looking consistent. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Is Savannah Landings a good neighborhood in Valrico?', a: 'Savannah Landings is an excellent choice for first-time buyers, young professionals, and downsizers who want Bloomingdale HS zoning at an affordable price point. The townhome format provides lower maintenance than a single-family home, and the community amenities add lifestyle value beyond the individual unit.' },
    { q: 'What year were Savannah Landings homes built?', a: 'Savannah Landings townhomes were built in the late 2000s to early 2010s, making them newer than Kings Mill (2004-2006). The construction reflects updated building codes with modern features including open-concept layouts, attached garages in some units, and energy-efficient systems.' },
    { q: 'Does Savannah Landings have a pool or community amenities?', a: 'Savannah Landings offers community amenities including common area green spaces and maintained landscaping. The HOA manages all shared spaces. Barrett Henry at (813) 733-7907 can provide details on specific amenities currently available in the community.' },
    { q: 'How far is Savannah Landings from I-75?', a: 'Savannah Landings is approximately 5 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 12-minute drive. Downtown Tampa is roughly 20 miles west via I-75. Bloomingdale Avenue provides direct access to nearby shopping, dining, and the Bloomingdale regional library.' },
    { q: 'How does Savannah Landings compare to other affordable Valrico neighborhoods?', a: 'Savannah Landings ($300K-$375K) is slightly above Kings Mill ($275K-$350K) in pricing but offers newer construction. Lakemont ($350K-$475K) has single-family homes at a higher price. River Hills Masters ($350K-$550K) offers guard-gated living but costs more. Savannah Landings hits the sweet spot for buyers who want newer townhomes in the Bloomingdale HS zone.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Savannah Landings Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Savannah Landings is an affordable townhome community in south Valrico (33596) with HOA-maintained exteriors and Bloomingdale HS zoning. Prices from $300K&ndash;$375K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Savannah Landings listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" heading="Savannah Landings Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['savannah-landings']}
          neighborhoodName="Savannah Landings"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$300K\u2013$375K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Townhomes', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Savannah Landings, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Savannah Landings is a townhome community in south Valrico (33596) that solves a common buyer problem: how to get into the Bloomingdale High School zone without stretching into single-family home territory. The community delivers newer construction, HOA-maintained exteriors, and community amenities at a price point that competes with apartments &mdash; except you are building equity instead of paying someone else&apos;s mortgage.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Units range from 1,300 to 1,800 square feet with 2 to 3 bedrooms. The layouts are functional and modern &mdash; open-concept living areas on the main floor, owners suites with walk-in closets, and attached garages in some configurations. Built in the late 2000s to early 2010s, Savannah Landings is newer than Kings Mill and shows it in the floor plans, finishes, and energy efficiency.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The HOA handles exterior maintenance, landscaping, and common area upkeep. This is a genuine lifestyle benefit &mdash; no weekend lawn mowing, no pressure washing the driveway, no coordinating roof repairs. For young professionals, first-time buyers, or downsizers who value their time over yard work, the maintenance-included format is a selling point, not a compromise.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Savannah Landings</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Savannah Landings falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong>, <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale High is an A-rated school with a GreatSchools rating of 8/10, offering AP courses, dual enrollment with local colleges, and competitive athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale HS zoning at this price point is Savannah Landings&apos; most powerful value proposition. Comparable homes in other school zones sell for less, but the Bloomingdale premium pays for itself in resale value and quality of education. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details on every feeder pattern.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Savannah Landings sits in south Valrico near Bloomingdale Avenue. Key commute times from Savannah Landings:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;38 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 32&ndash;42 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 32 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 32&ndash;42 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Avenue puts daily needs within minutes. Publix, Winn-Dixie, restaurants, the Bloomingdale regional library, banks, and medical offices are all a short drive. The location balances suburban convenience with the quieter residential character of south Valrico.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Savannah Landings has a mandatory HOA that covers exterior maintenance, landscaping, and common area upkeep. The maintenance-included model keeps individual owner costs predictable and eliminates the surprise expenses that come with single-family home ownership (roof repairs, exterior painting, lawn care). Barrett Henry can pull the exact current HOA fee for any Savannah Landings unit &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Savannah Landings Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Savannah Landings is one of the most affordable options in the Bloomingdale HS zone. Here&apos;s the comparison:</p>
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
                    ['Savannah Landings', '$300K\u2013$375K', 'Townhomes', 'Newer construction, community amenities'],
                    ['Kings Mill', '$275K\u2013$350K', 'Townhomes', 'Lowest price, gated, older build'],
                    ['Lakemont', '$350K\u2013$475K', 'Single-family', 'Detached homes, lake-influenced lots'],
                    ['River Hills Masters', '$350K\u2013$550K', 'Single-family', 'Guard gate, golf community access'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Savannah Landings offers newer townhomes than <Link href="/neighborhoods/kings-mill/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Kings Mill</Link> at a slightly higher price. If you want a detached single-family home, <Link href="/neighborhoods/lakemont/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Lakemont</Link> starts around $350K. If you want guard-gated living, <Link href="/neighborhoods/river-hills-masters/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills Masters</Link> is the next step up.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Savannah Landings Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>First-time buyers who want Bloomingdale HS zoning at a manageable price</li>
              <li>Young professionals transitioning from renting to owning with minimal maintenance</li>
              <li>Downsizers who want to shed yard work and exterior upkeep responsibilities</li>
              <li>Small families who need 2-3 bedrooms without paying for unused square footage</li>
              <li>Military families at MacDill AFB who want affordable homeownership near base</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Savannah Landings FAQ</h2>
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
              <Link href="/neighborhoods/kings-mill/" className="no-underline" style={{ color: 'var(--accent)' }}>Kings Mill</Link> &middot;{' '}
              <Link href="/neighborhoods/lakemont/" className="no-underline" style={{ color: 'var(--accent)' }}>Lakemont</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills-masters/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills Masters</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Savannah Landings? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Savannah Landings</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Savannah Landings?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Savannah Landings Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Savannah Landings?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Savannah Landings &mdash; not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Savannah Landings Homes for Sale", "item": "https://valricoagent.com/neighborhoods/savannah-landings/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Savannah Landings, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9430, "longitude": -82.2395 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Savannah Landings, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Savannah Landings, Valrico FL",
            "priceCurrency": "USD",
            "price": "300000-375000",
            "url": "https://valricoagent.com/neighborhoods/savannah-landings/",
            "areaServed": { "@type": "Place", "name": "Savannah Landings, Valrico FL" },
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
