'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function DuncanGrovesPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'duncan-groves', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Duncan Groves Valrico?', a: 'Homes in Duncan Groves typically sell between $350,000 and $450,000. Most homes range from 1,400 to 2,400 square feet with 3 to 4 bedrooms. Duncan Groves is one of the more affordable entry points into south Valrico with the Bloomingdale High School zone. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is Duncan Groves in?', a: 'Duncan Groves is zoned for Alafia Elementary (or Cimino Elementary depending on address), Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Barrett Henry can verify the exact school assignment for any Duncan Groves address.' },
    { q: 'Does Duncan Groves have an HOA?', a: 'Duncan Groves has a more informal neighborhood structure typical of established south Valrico subdivisions. HOA requirements may be minimal or voluntary depending on the specific section. Monthly fees, where applicable, tend to be low. Call Barrett Henry at (813) 733-7907 for specific HOA details on any Duncan Groves property.' },
    { q: 'Is Duncan Groves a good neighborhood in Valrico?', a: 'Duncan Groves is a solid choice for buyers who want south Valrico living in the Bloomingdale HS zone at a more affordable price point. The proximity to Lithia Springs Park and Alafia River State Park is a major draw for outdoor-oriented families, and the established nature of the community means mature trees and settled landscaping.' },
    { q: 'How far is Duncan Groves from I-75?', a: 'Duncan Groves is approximately 6 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 12 to 15-minute drive. From I-75, downtown Tampa is roughly 25 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'What parks are near Duncan Groves?', a: 'Duncan Groves has excellent access to outdoor recreation. Lithia Springs Park is one of Hillsborough County\'s most popular parks, featuring natural springs, swimming areas, and picnic facilities. Alafia River State Park offers mountain biking, hiking, and equestrian trails. Both are within a short drive.' },
    { q: 'What year were Duncan Groves homes built?', a: 'Most homes in Duncan Groves were built in the 1990s through early 2000s. The established construction means mature oak trees and landscaping throughout. Many homeowners have updated kitchens, bathrooms, and flooring. Roof and HVAC replacement should be factored into offers on unrenovated properties.' },
    { q: 'How does Duncan Groves compare to nearby neighborhoods?', a: 'Duncan Groves ($350K\u2013$450K) is one of the most affordable Bloomingdale HS zone options. Canterbury Oaks ($350K\u2013$475K) has pool and tennis amenities at a slightly higher price. Crosby Crossings ($370K\u2013$475K) offers newer construction in the same school zone. Crestwood Estates ($500K\u2013$900K) is the premium estate option for buyers with bigger budgets.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Duncan Groves Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Duncan Groves is an established subdivision near Lithia Pinecrest Road in south Valrico (33596). Affordable entry into the Bloomingdale HS zone. Prices from $350K&ndash;$450K. Near parks and outdoor recreation. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Duncan Groves listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$450K', 'Price range'],
            ['33596', 'ZIP code'],
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
            <h2 className="font-serif text-2xl mb-4">About Duncan Groves, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Duncan Groves is an established subdivision in south Valrico (33596) that delivers something increasingly hard to find &mdash; affordable south Valrico living in the Bloomingdale High School zone. Located near Lithia Pinecrest Road, the community sits in a pocket of Valrico that prioritizes outdoor access and family-oriented living over resort-style amenities and gated entrances.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from 1,400 to 2,400 square feet with 3 to 4 bedrooms. The construction dates from the 1990s through early 2000s, which means mature oak trees, settled landscaping, and a neighborhood feel that takes decades to develop. Lot sizes are reasonable by Valrico standards, and many properties feature screened pools, fenced yards, and covered lanais that take advantage of Florida&apos;s outdoor living climate.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>What sets Duncan Groves apart from many south Valrico subdivisions is proximity to some of Hillsborough County&apos;s best outdoor recreation. Lithia Springs Park &mdash; one of the county&apos;s most popular parks with natural springs and swimming areas &mdash; is a short drive. Alafia River State Park offers mountain biking, hiking, and equestrian trails. For families who spend weekends outdoors, this location advantage is hard to replicate from other Valrico neighborhoods.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Duncan Groves</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Duncan Groves falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong> (or <strong>Cimino Elementary</strong> depending on address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale High offers AP courses, dual enrollment, athletics, and a range of extracurricular programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale HS zone drives consistent home values throughout south Valrico. Duncan Groves represents one of the most affordable ways to enter this school zone. For families who prioritize the school district but have a tighter budget, Duncan Groves offers Bloomingdale HS zoning without the premium that communities with gated entrances or resort amenities command. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Duncan Groves is located along the Lithia Pinecrest corridor in south Valrico with access to both Valrico and Riverview commercial areas. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 12&ndash;15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~21 miles / 30&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~25 miles / 34&ndash;44 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~8 miles / 15 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 34 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~28 miles / 34&ndash;44 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily essentials are nearby along Lithia Pinecrest Road and Bloomingdale Avenue. Publix, Winn-Dixie, gas stations, and restaurants are within a few minutes. The location between Valrico and Riverview provides access to two commercial corridors for additional variety.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Duncan Groves has a more relaxed neighborhood structure compared to newer HOA-governed communities. HOA requirements may be minimal or voluntary depending on the section, and monthly fees where applicable tend to be among the lowest in south Valrico. The community does not carry CDD fees, which keeps the total cost of ownership lower than many newer developments. Barrett Henry can confirm the exact HOA situation for any Duncan Groves property &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Duncan Groves Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Duncan Groves is the value entry point into south Valrico. Here&apos;s how it compares:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>CDD</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Duncan Groves', '$350K\u2013$450K', 'No', 'Affordable entry, near parks & trails'],
                    ['Canterbury Oaks', '$350K\u2013$475K', 'No', 'Pool & tennis, HOA-maintained standards'],
                    ['Crosby Crossings', '$370K\u2013$475K', 'Varies', 'Newer construction, modern floor plans'],
                    ['Crestwood Estates', '$500K\u2013$900K', 'No', 'Estate lots, custom builds, premium tier'],
                  ].map(([name, price, cdd, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{cdd}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Duncan Groves is the best value play in the Bloomingdale HS zone for buyers who prioritize affordability and outdoor access. If you want community amenities, <Link href="/neighborhoods/canterbury-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> adds pool and tennis. If you prefer newer construction, <Link href="/neighborhoods/crosby-crossings/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Crosby Crossings</Link> delivers modern floor plans at a slightly higher price.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Duncan Groves Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>First-time buyers seeking Bloomingdale HS zoning at the most affordable price</li>
              <li>Outdoor-oriented families who want proximity to Lithia Springs and Alafia parks</li>
              <li>Buyers who prefer low or no HOA fees with minimal restrictions</li>
              <li>Families who want established neighborhoods with mature landscaping</li>
              <li>Investors looking for value properties in a solid school zone</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Duncan Groves FAQ</h2>
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
              <Link href="/neighborhoods/crosby-crossings/" className="no-underline" style={{ color: 'var(--accent)' }}>Crosby Crossings</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Duncan Groves? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Duncan Groves</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Duncan Groves?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Duncan Groves Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Duncan Groves?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Duncan Groves &mdash; not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
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
              { "@type": "ListItem", "position": 3, "name": "Duncan Groves Homes for Sale", "item": "https://valricoagent.com/neighborhoods/duncan-groves/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Duncan Groves, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9360, "longitude": -82.2290 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Duncan Groves, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Duncan Groves, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-450000",
            "url": "https://valricoagent.com/neighborhoods/duncan-groves/",
            "areaServed": { "@type": "Place", "name": "Duncan Groves, Valrico FL" },
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
