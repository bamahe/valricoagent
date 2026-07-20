'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function DurantOaksPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'durant-oaks', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Durant Oaks Valrico?', a: 'Homes in Durant Oaks typically sell between $375,000 and $525,000. Prices vary based on lot size, pool, and interior upgrades. Durant Oaks features custom-built homes with mature landscaping and generous interiors. Contact Barrett Henry at (813) 733-7907 for current Durant Oaks pricing.' },
    { q: 'What school zone is Durant Oaks in?', a: 'Durant Oaks is zoned for Bloomingdale High School in the Hillsborough County School District. Bloomingdale High is a well-established school serving the western Valrico area. Barrett Henry can verify the exact school assignment for any Durant Oaks address.' },
    { q: 'Are Durant Oaks homes custom built?', a: 'Yes. Durant Oaks homes were custom built, meaning each home has a unique floor plan rather than repeating builder models. This gives the neighborhood variety in architecture and layout. Homes feature 3 to 5 bedrooms with large interiors, pool views, jacuzzi tubs, and dual sinks in the owners suites.' },
    { q: 'Does Durant Oaks have mature landscaping?', a: 'Yes. Durant Oaks is known for its lush, mature landscaping. The community has established trees that provide significant shade and a park-like canopy over many of the streets and yards. This gives the neighborhood a settled, private feel that newer subdivisions with young trees cannot match.' },
    { q: 'Do Durant Oaks homes have pools?', a: 'Many homes in Durant Oaks have private pools with screen enclosures. The large lot sizes and custom construction mean that pool areas tend to be generous, with room for expanded patios, outdoor kitchens, and landscaped backyards. Barrett Henry can identify every pool home currently available in Durant Oaks.' },
    { q: 'How far is Durant Oaks from I-75?', a: 'Durant Oaks is approximately 6 miles from the I-75 interchange at SR-60 (Brandon Blvd), making it about a 15-minute drive to the highway. From there, downtown Tampa is roughly 30 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'Does Durant Oaks have an HOA?', a: 'Durant Oaks operates with minimal or no mandatory HOA restrictions. This gives homeowners more freedom over their properties, including exterior modifications, landscaping choices, and recreational vehicle parking. Call Barrett Henry at (813) 733-7907 to confirm the current HOA status for specific lots.' },
    { q: 'How does Durant Oaks compare to nearby Valrico neighborhoods?', a: 'Durant Oaks ($375K-$525K) offers custom-built homes with mature landscaping in the Bloomingdale HS zone. Nearby Cimmaron ($450K-$650K) is the premium step up with larger lots and Newsome HS zoning. Copper Ridge ($375K-$525K) has similar pricing but HOA-governed with CDD fees. Diamond Hill ($350K-$550K+) has larger lots with no HOA.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Durant Oaks Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Durant Oaks is a community of custom-built homes with mature landscaping, large interiors, and pool views in Valrico (33596). 3&ndash;5 bedrooms, jacuzzi tubs, dual sinks. Prices from $375K&ndash;$525K. Bloomingdale High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Durant Oaks listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["DURANT OAKS"]} heading="Durant Oaks Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['durant-oaks']}
          neighborhoodName="Durant Oaks"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$375K\u2013$525K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Custom-built', 'Home style'],
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
            <h2 className="font-serif text-2xl mb-4">About Durant Oaks, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Durant Oaks is a well-established neighborhood of custom-built homes in Valrico (33596). Unlike production-built subdivisions where every third house shares the same floor plan, Durant Oaks homes were individually designed with unique layouts, upgraded finishes, and attention to detail. The result is a community with architectural variety and character that tract neighborhoods simply cannot offer.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Durant Oaks feature 3 to 5 bedrooms with large, open interiors. Many include pool views through oversized sliding glass doors, jacuzzi tubs in the owners suites, dual vanity sinks, and spacious kitchens with eat-in areas. The construction quality reflects the custom-built era when builders spent more time on craftsmanship and less on speed.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The landscaping in Durant Oaks is one of its standout features. Mature oak trees, crepe myrtles, and native Florida plantings create a lush, shaded canopy throughout the neighborhood. Streets feel private and park-like, a stark contrast to the open, sun-baked look of newer communities where young trees are still years away from providing meaningful shade.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Durant Oaks</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Durant Oaks falls within the Hillsborough County School District and is zoned for <strong>Bloomingdale High School</strong>. Bloomingdale High is a well-established school serving the western Valrico area with a range of academic and extracurricular programs including AP courses, career academies, and competitive athletics.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>While Bloomingdale HS homes typically sell for less than comparable Newsome HS zone properties, this can be an advantage for buyers who want more home for their money. The pricing gap between the two zones means Durant Oaks buyers get custom-built quality at a lower price than they would pay in the Newsome zone. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Durant Oaks is located in the 33596 ZIP code of Valrico with convenient access to major corridors. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~22 miles / 30&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~25 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~7 miles / 15 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~28 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily shopping and dining are close by. Publix, Winn-Dixie, and a variety of restaurants are accessible along the Bloomingdale Avenue and Lithia Pinecrest Road corridors. The neighborhood&apos;s central Valrico location puts most errands within a 10-minute drive.</p>

            {/* --- Home Features --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">What Makes Durant Oaks Homes Special</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Durant Oaks homes stand out from typical Valrico subdivisions in several ways:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>Custom floor plans:</strong> Each home was individually designed, no repeating cookie-cutter models</li>
              <li><strong>Pool views:</strong> Many homes have screened pools with extended lanais visible from living areas</li>
              <li><strong>Owners suite upgrades:</strong> Jacuzzi tubs, dual vanity sinks, walk-in closets</li>
              <li><strong>Mature landscaping:</strong> Established trees provide shade, privacy, and curb appeal</li>
              <li><strong>Generous lot sizes:</strong> Room for pools, outdoor living, and privacy from neighbors</li>
            </ul>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Durant Oaks Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Durant Oaks is one of several quality neighborhoods in the Valrico area. Here&apos;s how it stacks up:</p>
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
                    ['Durant Oaks', '$375K\u2013$525K', 'Bloomingdale HS', 'Custom-built, mature landscaping'],
                    ['Cimmaron', '$450K\u2013$650K', 'Newsome HS', '19 custom homes, no HOA'],
                    ['Copper Ridge', '$375K\u2013$525K', 'Newsome HS', 'HOA-governed, conservation lots'],
                    ['Diamond Hill', '$350K\u2013$550K+', 'Bloomingdale HS', 'Larger lots, no HOA options'],
                    ['Canterbury Oaks', '$325K\u2013$475K', 'Bloomingdale HS', 'More affordable, quiet streets'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Durant Oaks delivers custom-built quality at a mid-range price. If you want similar character in the Newsome HS zone, look at <Link href="/neighborhoods/cimmaron/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Cimmaron</Link>. For a more affordable entry point in the Bloomingdale zone, <Link href="/neighborhoods/canterbury-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> is worth exploring.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Durant Oaks Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Buyers who want custom-built homes with unique floor plans, not cookie-cutter layouts</li>
              <li>Families who appreciate mature landscaping and shaded, private yards</li>
              <li>Pool home buyers looking for screened pools with generous outdoor living space</li>
              <li>Owners suite seekers who want jacuzzi tubs, dual sinks, and spacious layouts</li>
              <li>Value buyers who want more home for their money in the Bloomingdale HS zone</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Durant Oaks FAQ</h2>
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
              <Link href="/neighborhoods/cimmaron/" className="no-underline" style={{ color: 'var(--accent)' }}>Cimmaron</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn-golf-club-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Golf Club Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/copper-ridge/" className="no-underline" style={{ color: 'var(--accent)' }}>Copper Ridge</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Durant Oaks? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Durant Oaks</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Durant Oaks?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Durant Oaks Info'}</button>
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
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 42 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            {/* Selling CTA */}
            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Durant Oaks?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Durant Oaks, not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-white block text-center text-sm">Get your home value</Link>
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
              { "@type": "ListItem", "position": 3, "name": "Durant Oaks Homes for Sale", "item": "https://valricoagent.com/neighborhoods/durant-oaks/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Durant Oaks, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.8990, "longitude": -82.2610 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Durant Oaks, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Durant Oaks, Valrico FL",
            "priceCurrency": "USD",
            "price": "375000-525000",
            "url": "https://valricoagent.com/neighborhoods/durant-oaks/",
            "areaServed": { "@type": "Place", "name": "Durant Oaks, Valrico FL" },
          },
        ],
      }) }} />

      {/* ===== SCHEMA: FAQPage ===== */}
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
