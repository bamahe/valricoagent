'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function BuckhornSpringsManorPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'buckhorn-springs-manor', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Buckhorn Springs Manor Valrico?', a: 'Homes in Buckhorn Springs Manor typically sell between $350,000 and $550,000. Most homes range from 1,500 to 3,500+ square feet with 3 to 5 bedrooms on generous lots near the Buckhorn Springs Golf Club. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is Buckhorn Springs Manor in?', a: 'Buckhorn Springs Manor is zoned for Mintz Elementary, Mulrennan Middle School, and Newsome High School in the Hillsborough County School District. Newsome High is one of the highest-rated public high schools in the Tampa Bay area. Barrett Henry can verify the exact school assignment for any address.' },
    { q: 'Does Buckhorn Springs Manor have an HOA?', a: 'Yes. Buckhorn Springs Manor has an HOA that maintains community standards and common areas. Monthly HOA fees are generally modest compared to newer communities, typically in the $50\u2013$150 per month range. Call Barrett Henry at (813) 733-7907 for current HOA fee details on any specific property.' },
    { q: 'Is Buckhorn Springs Manor a good neighborhood in Valrico?', a: 'Buckhorn Springs Manor is one of the premium established subdivisions in the Buckhorn corridor. The combination of larger lots, mature landscaping, proximity to the Buckhorn Springs Golf Club, and the Newsome High School zone makes it a standout for families who prefer character over cookie-cutter construction.' },
    { q: 'How far is Buckhorn Springs Manor from I-75?', a: 'Buckhorn Springs Manor is approximately 5 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 12-minute drive. From I-75, downtown Tampa is roughly 25 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'Is Buckhorn Springs Manor near the golf course?', a: 'Yes. Buckhorn Springs Manor sits adjacent to the Buckhorn Springs Golf and Country Club. However, golf club membership is separate from the subdivision. Some homes back to the course with fairway views, which commands a premium. Barrett Henry can identify which lots have golf course frontage.' },
    { q: 'What year were Buckhorn Springs Manor homes built?', a: 'Most homes in Buckhorn Springs Manor were built in the late 1990s through mid-2000s. The established construction means mature oak trees, settled landscaping, and larger lot sizes that are hard to find in newer Valrico developments. Many homes have been updated with modern kitchens and renovated bathrooms.' },
    { q: 'How does Buckhorn Springs Manor compare to nearby neighborhoods?', a: 'Buckhorn Springs Manor ($350K\u2013$550K) offers larger lots near the golf club in the Newsome HS zone. Buckhorn Preserve ($350K\u2013$500K) has newer construction with community park amenities. Crestwood Estates ($500K\u2013$900K) is the premium estate option with even larger lots. Duncan Groves ($350K\u2013$450K) provides a more affordable entry into south Valrico.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Buckhorn Springs Manor Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Buckhorn Springs Manor is an established subdivision of larger homes near Buckhorn Springs Golf Club in south Valrico (33596). Prices from $350K&ndash;$550K. Newsome High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Buckhorn Springs Manor listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$550K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
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
            <h2 className="font-serif text-2xl mb-4">About Buckhorn Springs Manor, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Springs Manor is an established subdivision adjacent to the Buckhorn Springs Golf and Country Club in south Valrico (33596). Unlike many newer communities in the Buckhorn corridor that were built on tighter lots, Buckhorn Springs Manor features generous lot sizes with mature oak canopy, established landscaping, and a settled neighborhood feel that takes decades to develop.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from 1,500 to 3,500+ square feet with 3 to 5 bedrooms. The diversity of home sizes and styles gives buyers options &mdash; from updated ranch-style homes for empty nesters to spacious two-story family residences with pools and outdoor kitchens. Many properties feature screened pool enclosures, extended lanais, and mature landscaping that provides natural privacy between neighbors.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The proximity to Buckhorn Springs Golf Club is a defining feature. Several homes back directly to the golf course with panoramic fairway views, though golf club membership is separate from subdivision residency. For buyers who appreciate an established neighborhood with character, space, and the prestige of the golf club address, Buckhorn Springs Manor occupies a sweet spot that newer construction simply cannot replicate.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Buckhorn Springs Manor</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Springs Manor falls within the Hillsborough County School District and is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong>. Newsome High consistently earns an A grade from the Florida Department of Education and ranks among the top public high schools in the Tampa Bay area.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome High School zone is a primary value driver for the entire Buckhorn corridor. Homes inside the Newsome zone command a measurable premium over comparable properties zoned for other area high schools. For families relocating to the area, the school zone alone justifies the price difference between Buckhorn Springs Manor and similar neighborhoods outside the Newsome zone. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Springs Manor sits in south Valrico with access to both the Buckhorn and Bloomingdale commercial corridors. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;38 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 32&ndash;42 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~7 miles / 14 minutes</li>
              <li><strong>Lakeland:</strong> ~27 miles / 32 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 32&ndash;42 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily essentials are within easy reach. Publix, Winn-Dixie, and Walmart are all within a 5-minute drive along Lithia Pinecrest Road. Restaurants, medical offices, and banks line Bloomingdale Avenue and the Buckhorn corridor, providing everything families need without a long drive.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn Springs Manor has an HOA that maintains community standards and common areas. As an established community, HOA fees are generally lower than newer developments &mdash; typically $50&ndash;$150 per month. The community does not carry CDD fees, which is a meaningful cost advantage over newer Buckhorn corridor subdivisions that may add $1,000&ndash;$2,500 per year to the tax bill. Barrett Henry can confirm the exact HOA details for any Buckhorn Springs Manor property &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Buckhorn Springs Manor Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Springs Manor sits in one of the most popular corridors in south Valrico. Here&apos;s how it compares:</p>
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
                    ['Buckhorn Springs Manor', '$350K\u2013$550K', 'No', 'Larger lots, golf club proximity, mature trees'],
                    ['Buckhorn Preserve', '$350K\u2013$500K', 'Yes', 'Newer construction, community park amenities'],
                    ['Crestwood Estates', '$500K\u2013$900K', 'No', 'Estate-sized lots, custom builds, no CDD'],
                    ['Duncan Groves', '$350K\u2013$450K', 'No', 'Affordable entry, Bloomingdale HS zone'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn Springs Manor&apos;s larger lots and golf club proximity make it the established-living alternative to gated newer construction like <Link href="/neighborhoods/buckhorn-preserve/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Preserve</Link>. For premium estate living, <Link href="/neighborhoods/crestwood-estates/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> offers even larger lots at a higher price point.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Buckhorn Springs Manor Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want larger lots with mature landscaping in the Newsome HS zone</li>
              <li>Golf enthusiasts who want to live near the Buckhorn Springs Golf Club</li>
              <li>Buyers who prefer established neighborhoods with character over newer construction</li>
              <li>Homeowners who want lower HOA fees without CDD assessments</li>
              <li>Professionals commuting to Tampa or Brandon who value space and privacy</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Buckhorn Springs Manor FAQ</h2>
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
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Buckhorn Springs Manor? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Buckhorn Springs Manor</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Buckhorn Springs Manor?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Buckhorn Springs Manor Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Buckhorn Springs Manor?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Buckhorn Springs Manor &mdash; not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Buckhorn Springs Manor Homes for Sale", "item": "https://valricoagent.com/neighborhoods/buckhorn-springs-manor/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Buckhorn Springs Manor, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9385, "longitude": -82.2420 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Buckhorn Springs Manor, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Buckhorn Springs Manor, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-550000",
            "url": "https://valricoagent.com/neighborhoods/buckhorn-springs-manor/",
            "areaServed": { "@type": "Place", "name": "Buckhorn Springs Manor, Valrico FL" },
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
