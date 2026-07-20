'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function RiverHillsMastersPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'river-hills-masters', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in River Hills Masters?', a: 'Homes in River Hills Masters typically sell between $350,000 and $550,000. This section trades at a lower price point than the golf course frontage lots in River Hills proper, making it the most accessible way to live behind the River Hills guard gate. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is River Hills Masters in?', a: 'River Hills Masters is zoned for Bloomingdale High School in the Hillsborough County School District. The feeder pattern includes area elementary schools and Burns Middle School. School zoning is consistent across the entire River Hills community. Barrett Henry can verify the assignment for any address.' },
    { q: 'Does River Hills Masters have an HOA?', a: 'Yes. River Hills Masters is part of the broader River Hills community and shares the same HOA structure. Residents benefit from the 24/7 guard-gated entrance, community pools, tennis courts, private Alafia River trails, and access to the River Hills Country Club social programming. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'What is the difference between River Hills and River Hills Masters?', a: 'River Hills Masters is a section within the larger River Hills community. Homes in the Masters section are generally on interior lots without direct golf course frontage, which is why prices run $350K-$550K compared to $600K-$1M+ for course-front properties. Both sections share the same guard gate, trails, pools, tennis, and community amenities.' },
    { q: 'Is River Hills Masters inside the guard gate?', a: 'Yes. River Hills Masters is fully inside the 24/7 guard-gated River Hills community. Residents have the same security and access to all community amenities as any other River Hills homeowner, including the private Alafia River hiking trails, community pools, and tennis courts.' },
    { q: 'Can River Hills Masters residents use the country club?', a: 'Yes. River Hills Masters residents can join the River Hills Country Club, which offers the 18-hole championship golf course, dining, fitness, and social events. Club membership is separate from the HOA and optional. Barrett Henry at (813) 733-7907 can provide details on membership options and costs.' },
    { q: 'How far is River Hills Masters from I-75?', a: 'River Hills Masters is approximately 7 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 15-minute drive. Downtown Tampa is roughly 22 miles west via I-75. Bloomingdale Avenue provides access to nearby shopping, dining, and the Bloomingdale regional library.' },
    { q: 'How does River Hills Masters compare to nearby neighborhoods?', a: 'River Hills Masters ($350K-$550K) gives you the River Hills guard gate and amenities at a lower price. Lakemont ($350K-$475K) offers similar pricing but no gate or country club. Kings Mill ($275K-$350K) is cheaper but townhomes only. River Hills proper ($400K-$800K+) has golf frontage at premium pricing. River Hills Masters is the sweet spot for guard-gated living on a budget.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">River Hills Masters Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>River Hills Masters is the most affordable section within Valrico&apos;s premier gated golf community. Same guard gate, same trails, same amenities, lower price point. $350K&ndash;$550K. Bloomingdale HS zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search River Hills Masters listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["RIVER HILLS COUNTRY CLUB","RIVER HILLS COUNTRY CLUB PARCE","RIVER HILLS COUNTRY CLUB PH"]} heading="River Hills Masters Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['river-hills-masters']}
          neighborhoodName="River Hills Masters"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$550K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Guard-gated', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About River Hills Masters, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>River Hills Masters is the entry point into Valrico&apos;s most exclusive gated community. Situated within the broader River Hills development, the Masters section offers the same 24/7 guard-gated security, private Alafia River trails, community pools, and tennis courts as the premium golf frontage homes, at a price point that starts roughly $100K lower. For buyers who want the River Hills lifestyle without the golf course premium, this is where to look.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in the Masters section range from approximately 1,800 to 3,200 square feet with 3 to 5 bedrooms. Most are concrete block construction from the 1980s through the 2000s, consistent with the rest of River Hills. The lots are interior positions, meaning no direct golf course frontage, but the mature landscaping, winding streets, and oak canopy create the same premium residential feel that defines River Hills overall.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The value proposition is clear: pay $350K to $550K and live behind the same guard gate as homeowners in $800K+ golf frontage properties. You get the same trails along the Alafia River, the same community pools, the same tennis courts, and the same option to join the River Hills Country Club. The only difference is the view from your lanai, and for most buyers, the savings more than compensate.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving River Hills Masters</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>River Hills Masters falls within the Hillsborough County School District and is zoned for <strong>Bloomingdale High School</strong>. The feeder pattern includes area elementary schools and <strong>Burns Middle School</strong>. Bloomingdale High is an A-rated school with strong academic programs, dual enrollment, and competitive athletics.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>School zoning is consistent across all sections of River Hills, including the Masters section. Every address shares the same Bloomingdale HS assignment, which simplifies your home search. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>River Hills Masters shares the same south Valrico location as the broader River Hills community. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~7 miles / 15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~22 miles / 30&ndash;42 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~25 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~7 miles / 14 minutes</li>
              <li><strong>Lakeland:</strong> ~30 miles / 35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~30 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Avenue and Lithia Pinecrest Road provide access to Publix, restaurants, the Bloomingdale regional library, medical offices, and banks. The south Valrico location offers a quieter, more secluded residential feel than north Valrico communities closer to SR-60.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>River Hills Masters is part of the broader River Hills HOA, which funds the 24/7 guard gate, community pools, tennis courts, Alafia River trail maintenance, and common area upkeep. Country club membership is separate and optional. HOA fees reflect the premium amenity package shared across all River Hills sections. Barrett Henry can break down the exact current fees, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How River Hills Masters Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>River Hills Masters occupies a unique niche, guard-gated community access at a mid-range price. Here&apos;s the comparison:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Guard Gate</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['River Hills Masters', '$350K\u2013$550K', '24/7', 'Guard gate + amenities at lower price'],
                    ['River Hills', '$400K\u2013$800K+', '24/7', 'Golf frontage, premium custom homes'],
                    ['Lakemont', '$350K\u2013$475K', 'No', 'Similar pricing, no gate or club'],
                    ['Kings Mill', '$275K\u2013$350K', 'Gated', 'Cheapest entry, townhomes only'],
                    ['Savannah Landings', '$300K\u2013$375K', 'No', 'Affordable townhomes, no guard gate'],
                  ].map(([name, price, gate, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{gate}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>River Hills Masters is the only way to get 24/7 guard-gated living with country club access under $550K in Valrico. If you want the full golf frontage experience, look at <Link href="/neighborhoods/river-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills</Link> proper. If you want similar pricing without a gate, <Link href="/neighborhoods/lakemont/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Lakemont</Link> is a solid alternative.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who River Hills Masters Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Buyers who want the River Hills guard gate and amenities without the golf premium</li>
              <li>Families who prioritize security and Bloomingdale HS zoning</li>
              <li>Retirees who want trail access, social programming, and community pools</li>
              <li>Move-up buyers from townhomes who want a single-family home in a gated community</li>
              <li>Value-conscious buyers who compare amenities per dollar across Valrico communities</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">River Hills Masters FAQ</h2>
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
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/lakemont/" className="no-underline" style={{ color: 'var(--accent)' }}>Lakemont</Link> &middot;{' '}
              <Link href="/neighborhoods/kings-mill/" className="no-underline" style={{ color: 'var(--accent)' }}>Kings Mill</Link> &middot;{' '}
              <Link href="/neighborhoods/savannah-landings/" className="no-underline" style={{ color: 'var(--accent)' }}>Savannah Landings</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in River Hills Masters? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About River Hills Masters</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in River Hills Masters?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get River Hills Masters Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in River Hills Masters?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Section-specific comps within River Hills, not a generic estimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "River Hills Masters Homes for Sale", "item": "https://valricoagent.com/neighborhoods/river-hills-masters/" },
            ],
          },
          {
            "@type": "Place",
            "name": "River Hills Masters, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9355, "longitude": -82.2485 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "River Hills Masters, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in River Hills Masters, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-550000",
            "url": "https://valricoagent.com/neighborhoods/river-hills-masters/",
            "areaServed": { "@type": "Place", "name": "River Hills Masters, Valrico FL" },
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
