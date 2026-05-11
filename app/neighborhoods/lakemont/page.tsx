'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LakemontPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'lakemont', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Lakemont Valrico?', a: 'Homes in Lakemont typically sell between $350,000 and $475,000. Prices vary based on lot position, lake views, square footage, and interior updates. Lakemont offers solid value in the Bloomingdale HS zone for single-family buyers. Contact Barrett Henry at (813) 733-7907 for current Lakemont pricing.' },
    { q: 'What school zone is Lakemont in?', a: 'Lakemont is zoned for Alafia Elementary, Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale High is an A-rated school with a GreatSchools rating of 8/10. Barrett Henry can verify the exact school assignment for any Lakemont address.' },
    { q: 'Does Lakemont have an HOA?', a: 'Lakemont has an HOA that maintains community standards and common areas. The HOA keeps the neighborhood well-maintained and consistent in appearance. Call Barrett Henry at (813) 733-7907 for current HOA fee details on any Lakemont property.' },
    { q: 'Is Lakemont a good neighborhood in Valrico?', a: 'Lakemont is a strong choice for families who want an established neighborhood in the Bloomingdale HS zone with mature landscaping, potential lake views, and a quiet residential character. The settled feel and tree canopy give Lakemont a charm that newer construction communities cannot replicate.' },
    { q: 'What year were Lakemont homes built?', a: 'Most Lakemont homes were built in the 1990s to early 2000s. The established construction means mature oak trees, developed landscaping, and a settled neighborhood character. Many homeowners have updated interiors with modern kitchens, flooring, and bathroom renovations since original construction.' },
    { q: 'Do any Lakemont homes have lake views?', a: 'Yes. Some Lakemont properties back up to community water features or ponds that provide scenic lake-influenced views. These lots typically command a premium at resale. Barrett Henry at (813) 733-7907 can identify which Lakemont homes currently on the market have water views.' },
    { q: 'How far is Lakemont from I-75?', a: 'Lakemont is approximately 6 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 14-minute drive. Downtown Tampa is roughly 21 miles west via I-75. Brandon Town Center is about 6 miles away with shopping, dining, and entertainment options.' },
    { q: 'How does Lakemont compare to nearby Valrico neighborhoods?', a: 'Lakemont ($350K-$475K) offers established single-family homes with lake-influenced lots. Kings Mill ($275K-$350K) is cheaper but townhomes only. River Hills Masters ($350K-$550K) offers guard-gated golf community access. Savannah Landings ($300K-$375K) is more affordable but townhomes. Lakemont is the pick for single-family buyers who want character and Bloomingdale HS zoning at a mid-range price.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Lakemont Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Lakemont is an established single-family neighborhood with lake-influenced lots and mature landscaping in south Valrico (33596). Prices from $350K&ndash;$475K. Bloomingdale HS zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Lakemont listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$475K', 'Price range'],
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
            <h2 className="font-serif text-2xl mb-4">About Lakemont, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Lakemont is an established single-family neighborhood in south Valrico (33596) that delivers something newer subdivisions struggle to match: character. Mature oak trees line the streets, canopies arch overhead, and the landscaping has had decades to fill in. The result is a neighborhood that feels settled and permanent rather than freshly stamped from a builder&apos;s template.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from approximately 1,500 to 2,600 square feet with 3 to 4 bedrooms. Most were built in the 1990s to early 2000s on standard subdivision lots, though some properties back up to community ponds and water features that provide lake-influenced views and a premium at resale. The neighborhood maintains a family-oriented atmosphere with low traffic, cul-de-sac streets, and a quiet residential feel.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Many Lakemont homeowners have invested in meaningful updates since original construction. Renovated kitchens with granite or quartz countertops, updated bathrooms, new flooring, and screened pool enclosures are common improvements. For buyers who want the Bloomingdale HS zone in a single-family home without the higher price tags of River Hills or the townhome format of Kings Mill, Lakemont hits a practical sweet spot.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Lakemont</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Lakemont falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong>, <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale High is consistently rated among the top public high schools in the area, earning an A grade from the Florida Department of Education and offering AP courses, dual enrollment, and competitive athletics.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale HS zone is a consistent driver of home values across south Valrico. Lakemont provides access to this school zone at a moderate price point &mdash; above the entry-level townhome communities but below the premium gated neighborhoods. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Lakemont sits in south Valrico near Bloomingdale Avenue. Key commute times from Lakemont:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 14 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~21 miles / 28&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 32&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 32 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~28 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Avenue provides direct access to Publix, restaurants, the Bloomingdale regional library, banks, and medical offices. The Valrico Town Center area along SR-60 is a short drive north with Walmart, Winn-Dixie, and additional retail.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Lakemont has an HOA that maintains community standards and keeps the neighborhood looking consistent. The HOA helps protect property values by enforcing basic maintenance standards and managing any common area upkeep. Barrett Henry can pull the exact current HOA fee for any Lakemont property &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Lakemont Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Lakemont occupies the middle ground in south Valrico&apos;s Bloomingdale HS zone. Here&apos;s the comparison:</p>
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
                    ['Lakemont', '$350K\u2013$475K', 'Single-family', 'Lake views, mature landscaping, mid-range'],
                    ['Kings Mill', '$275K\u2013$350K', 'Townhomes', 'Lowest entry, gated, HOA-maintained'],
                    ['Savannah Landings', '$300K\u2013$375K', 'Townhomes', 'Affordable, community amenities'],
                    ['River Hills Masters', '$350K\u2013$550K', 'Single-family', 'Guard gate, golf community access'],
                    ['River Hills', '$400K\u2013$800K', 'Single-family', 'Premium gated golf, country club'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Lakemont balances price, size, and character. If you need a lower entry price, <Link href="/neighborhoods/kings-mill/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Kings Mill</Link> is the budget option. If you want the gated golf lifestyle, explore <Link href="/neighborhoods/river-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Lakemont Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want a single-family home in the Bloomingdale HS zone at a mid-range price</li>
              <li>Buyers who prefer mature landscaping and established character over newer construction</li>
              <li>Move-up buyers graduating from townhomes who want more space and a private yard</li>
              <li>Nature lovers who appreciate lake-influenced lots and tree canopy</li>
              <li>Homeowners who want a quiet, low-traffic neighborhood with cul-de-sac streets</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Lakemont FAQ</h2>
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
              <Link href="/neighborhoods/kings-mill/" className="no-underline" style={{ color: 'var(--accent)' }}>Kings Mill</Link> &middot;{' '}
              <Link href="/neighborhoods/savannah-landings/" className="no-underline" style={{ color: 'var(--accent)' }}>Savannah Landings</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills-masters/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills Masters</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Lakemont? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Lakemont</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Lakemont?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Lakemont Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Lakemont?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Lakemont &mdash; not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Lakemont Homes for Sale", "item": "https://valricoagent.com/neighborhoods/lakemont/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Lakemont, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9385, "longitude": -82.2440 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Lakemont, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Lakemont, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-475000",
            "url": "https://valricoagent.com/neighborhoods/lakemont/",
            "areaServed": { "@type": "Place", "name": "Lakemont, Valrico FL" },
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
