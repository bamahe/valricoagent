'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function LegendsPassPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'legends-pass', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Legends Pass Valrico?', a: 'Homes in Legends Pass typically sell between $400,000 and $550,000. Prices depend on square footage, lot position, pool status, and interior upgrades. The community offers newer construction with modern floor plans in the desirable Newsome HS zone. Contact Barrett Henry at (813) 733-7907 for current Legends Pass pricing.' },
    { q: 'What school zone is Legends Pass in?', a: 'Legends Pass is zoned for Mintz Elementary, Mulrennan Middle School, and Newsome High School in the Hillsborough County School District. Newsome High is one of the top-rated high schools in the Tampa Bay area with an A grade and GreatSchools rating of 8/10. Barrett Henry can verify the exact school assignment for any Legends Pass address.' },
    { q: 'Does Legends Pass have an HOA?', a: 'Yes. Legends Pass has a mandatory HOA that maintains community appearance standards, common areas, and consistent architectural guidelines. The HOA ensures the neighborhood stays well-kept and protects property values. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Is Legends Pass a good neighborhood in Valrico?', a: 'Legends Pass is a strong choice for families who want newer construction with modern floor plans in the Newsome High School zone. The community offers the convenience of SR-60 access with the residential feel of north Valrico. Homes feature open kitchens, spacious owners suites, and covered lanais.' },
    { q: 'What year were Legends Pass homes built?', a: 'Most Legends Pass homes were built from the mid-2010s through the early 2020s. The newer construction means modern building standards, energy-efficient systems, impact-rated windows in many units, and contemporary open floor plans that buyers increasingly prefer over older compartmentalized layouts.' },
    { q: 'Does Legends Pass have a pool or community amenities?', a: 'Legends Pass maintains community common areas and consistent landscaping standards. Many individual homes feature private screened pools and covered lanais. Barrett Henry at (813) 733-7907 can provide details on specific amenities and which homes currently for sale include pools.' },
    { q: 'How far is Legends Pass from I-75?', a: 'Legends Pass is approximately 4 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 10-minute drive. Downtown Tampa is roughly 19 miles west via I-75. The community sits near the Diamond Hill corridor, providing quick access to SR-60 shopping, dining, and services.' },
    { q: 'How does Legends Pass compare to nearby Valrico neighborhoods?', a: 'Legends Pass ($400K-$550K) offers newer construction in the Newsome HS zone. Arista ($425K-$575K) is gated with similar pricing. Northwood Estates ($425K-$575K) has no CDD and boutique sizing. Crestwood Estates ($350K-$500K) has established homes at a lower price. Legends Pass is the pick for newer builds with modern finishes near the Diamond Hill corridor.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Legends Pass Homes for Sale, Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Legends Pass is a newer construction community near the Diamond Hill corridor in north Valrico (33594). Modern floor plans and Newsome HS zoning, with prices from $400K&ndash;$550K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Legends Pass listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" heading="Legends Pass Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['legends-pass']}
          neighborhoodName="Legends Pass"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$400K\u2013$550K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['Newer construction', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Legends Pass, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Legends Pass is a newer construction community positioned near the Diamond Hill corridor in north Valrico (33594). The community delivers what many buyers are searching for in the current market: modern floor plans with contemporary finishes in one of Valrico&apos;s most sought-after school zones. If you want a home that feels current without the timeline and cost of building new, Legends Pass belongs on your shortlist.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from approximately 1,800 to 3,000 square feet with 3 to 5 bedrooms. The floor plans are distinctly modern, open-concept kitchens flow into great rooms, owners suites feature walk-in closets and dual vanities, and covered lanais extend the living space outdoors. Many homes include screened pools, which are nearly essential for Florida living. The construction quality reflects mid-2010s to early 2020s building standards with energy-efficient HVAC systems and updated electrical.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The community&apos;s location near the Diamond Hill corridor puts it within striking distance of SR-60 (Brandon Blvd) shopping and dining while maintaining a residential feel. The HOA keeps the neighborhood consistent and well-maintained, protecting both curb appeal and property values across the community. For buyers who have outgrown older Valrico homes and want to step up to something more modern, Legends Pass hits the mark.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Legends Pass</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Legends Pass falls within the Hillsborough County School District and is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong>. Newsome High is consistently rated among the top public high schools in Hillsborough County, earning an A grade from the Florida Department of Education and a GreatSchools rating of 8/10.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome HS zone is a primary driver of home values across north Valrico. Comparable homes inside the Newsome zone sell for a measurable premium over similar properties zoned for other high schools. For families with school-age children or buyers thinking about resale, the zoning alone adds real value. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Legends Pass sits in north Valrico near the Diamond Hill corridor. Key commute times from Legends Pass:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~19 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 30&ndash;42 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~26 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~26 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>SR-60 (Brandon Blvd) is minutes away with Publix, Winn-Dixie, Walmart, restaurants, banks, and medical offices. The proximity to Diamond Hill Golf Course adds a recreational option for golf-oriented buyers. Lithia Pinecrest Road connects south to Bloomingdale Avenue for additional shopping.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Legends Pass has a mandatory HOA that maintains community standards, common area landscaping, and architectural guidelines. The HOA protects property values by ensuring consistent upkeep across the neighborhood. Some homes may also carry a CDD (Community Development District) assessment on the property tax bill. Barrett Henry can pull the exact HOA and any CDD amounts for any specific Legends Pass address, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Legends Pass Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Legends Pass competes with several quality north Valrico communities. Here&apos;s the breakdown:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Gated</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Legends Pass', '$400K\u2013$550K', 'No', 'Newer construction, modern floor plans'],
                    ['Arista', '$425K\u2013$575K', 'Yes', 'Gated entrance, similar era construction'],
                    ['Northwood Estates', '$425K\u2013$575K', 'No', 'Boutique sizing, no CDD, WestBay builder'],
                    ['Crestwood Estates', '$350K\u2013$500K', 'No', 'Established, lower price, mature trees'],
                    ['Diamond Hill', '$400K\u2013$700K+', 'No', 'Larger lots, golf course proximity'],
                  ].map(([name, price, gated, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{gated}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Legends Pass delivers newer construction without a gate premium. If you want gated security at a similar price, look at <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link>. If you want no CDD and a boutique feel, explore <Link href="/neighborhoods/northwood-estates/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Northwood Estates</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Legends Pass Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want newer construction in the Newsome High School zone</li>
              <li>Move-up buyers graduating from older Valrico homes to modern floor plans</li>
              <li>Professionals commuting to Tampa or Brandon who want quick I-75 access</li>
              <li>Buyers who want a screened pool home with contemporary finishes</li>
              <li>Golfers who want to live near Diamond Hill Golf Course</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Legends Pass FAQ</h2>
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
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/northwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Northwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/lake-valrico/" className="no-underline" style={{ color: 'var(--accent)' }}>Lake Valrico</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Legends Pass? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Legends Pass</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Legends Pass?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Legends Pass Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Legends Pass?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Legends Pass, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Legends Pass Homes for Sale", "item": "https://valricoagent.com/neighborhoods/legends-pass/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Legends Pass, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9490, "longitude": -82.2345 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Legends Pass, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Legends Pass, Valrico FL",
            "priceCurrency": "USD",
            "price": "400000-550000",
            "url": "https://valricoagent.com/neighborhoods/legends-pass/",
            "areaServed": { "@type": "Place", "name": "Legends Pass, Valrico FL" },
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
