'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function ShetlandRidgePage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'shetland-ridge', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'What do homes cost in Shetland Ridge?', a: 'Shetland Ridge homes generally sell between $400,000 and $550,000 depending on square footage, lot size, and renovations. The neighborhood offers solid mid-range to upper-mid-range pricing for the south Valrico / 33596 corridor. Call Barrett Henry at (813) 733-7907 for up-to-date Shetland Ridge pricing.' },
    { q: 'What schools serve Shetland Ridge?', a: 'Shetland Ridge is zoned for Alafia Elementary (or Cimino Elementary depending on address), Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale High is a well-regarded school with strong athletics and AP offerings. Barrett Henry can confirm the exact school assignment for any Shetland Ridge address.' },
    { q: 'Does Shetland Ridge have an HOA?', a: 'Shetland Ridge has an HOA that manages community standards and common area maintenance. HOA fees vary by section. Contact Barrett Henry at (813) 733-7907 for the most current HOA fee information for a specific Shetland Ridge property.' },
    { q: 'Is Shetland Ridge a good place to live?', a: 'Shetland Ridge is a well-established neighborhood in south Valrico with mature landscaping, larger lots than many newer communities, and strong resale values. The Bloomingdale High School zone and proximity to Bloomingdale Avenue shopping make it a practical choice for families and commuters.' },
    { q: 'How far is Shetland Ridge from I-75?', a: 'Shetland Ridge is approximately 5 miles from the I-75 interchange at Bloomingdale Avenue, roughly a 12-minute drive. From I-75 you can reach downtown Tampa in about 25-30 minutes and Lakeland in about 30 minutes via I-4.' },
    { q: 'What size are homes in Shetland Ridge?', a: 'Most Shetland Ridge homes range from 1,600 to 2,800 square feet with 3 to 5 bedrooms. Lot sizes tend to be generous compared to newer subdivisions in the area, with many homes sitting on quarter-acre or larger parcels with mature trees.' },
    { q: 'When was Shetland Ridge built?', a: 'The majority of Shetland Ridge homes were built in the late 1980s through the 1990s. Many have been updated over the years with modern kitchens, impact windows, and renovated owners suites. The mature landscaping gives the neighborhood a settled, established character.' },
    { q: 'How does Shetland Ridge compare to nearby neighborhoods?', a: 'Shetland Ridge ($400K-$550K) sits between more affordable options like Twin Lakes ($375K-$475K) and premium communities like Bloomingdale ($450K-$650K+). It offers larger lots than most newer construction and the same Bloomingdale HS zone as its neighbors along the Bloomingdale Avenue corridor.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Shetland Ridge Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Shetland Ridge is an established neighborhood of spacious homes on generous lots in south Valrico (33596). Prices from $400K&ndash;$550K. Bloomingdale High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Shetland Ridge listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["SHETLAND RIDGE"]} heading="Shetland Ridge Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['shetland-ridge']}
          neighborhoodName="Shetland Ridge"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$400K\u2013$550K', 'Price range'],
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
            <h2 className="font-serif text-2xl mb-4">About Shetland Ridge, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Shetland Ridge sits in the heart of south Valrico&apos;s 33596 ZIP code, tucked along the Bloomingdale Avenue corridor where most of Valrico&apos;s daily errands can be handled within a few minutes. The neighborhood was largely built out during the late 1980s and 1990s, giving it the mature tree canopy and settled feel that newer subdivisions simply don&apos;t have. Most streets are lined with live oaks and crepe myrtles that provide genuine shade &mdash; a noticeable difference from the sun-baked concrete of post-2010 developments.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Shetland Ridge typically range from 1,600 to 2,800 square feet across 3 to 5 bedrooms. Floor plans reflect the era &mdash; you&apos;ll find split bedroom layouts, formal dining rooms, and Florida rooms that many buyers prefer to today&apos;s open-concept trend. Lot sizes skew larger than what builders offer in 2024-era communities, with many parcels at a quarter acre or more. That extra yard space is a major draw for pet owners, families with children, and anyone who simply wants breathing room between homes.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Many Shetland Ridge homes have been updated over the decades. Renovated kitchens with granite or quartz countertops, updated owners suites, and newer roof systems are common. A few homes remain in original condition, which can mean opportunity for buyers willing to invest in cosmetic upgrades. The neighborhood&apos;s combination of location, lot size, and school zoning keeps demand steady even in shifting market conditions.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Shetland Ridge</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Shetland Ridge falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong> (or <strong>Cimino Elementary</strong> depending on the specific address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale High consistently performs well, offering AP and honors coursework, a strong athletics program, and a variety of career and technical education pathways.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale High School zone is one of the more desirable feeder patterns in south Valrico. Families who need this zone often gravitate toward the Bloomingdale Avenue corridor where Shetland Ridge, <Link href="/neighborhoods/twin-lakes/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>, and <Link href="/neighborhoods/wellington/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Wellington</Link> all share the same high school assignment. For details on all Valrico feeder patterns, check the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico school zone guide</Link>.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Shetland Ridge is positioned along the Bloomingdale Avenue corridor with straightforward access to I-75 and the greater Tampa Bay area. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (Bloomingdale Ave interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 30&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Avenue provides the essentials within a short drive &mdash; Publix, Walmart, medical offices, banks, and restaurants are all within 2 miles. The Bloomingdale Golfers Club and local parks add recreation options nearby.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Shetland Ridge has a homeowners association that maintains community standards and common areas. HOA fees vary by section within the neighborhood. There is generally no CDD (Community Development District) assessment since the community predates the widespread use of CDD financing. For exact HOA fee amounts on a specific Shetland Ridge property, call Barrett Henry at <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Shetland Ridge Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Shetland Ridge occupies the upper-middle price tier in south Valrico. Here&apos;s how it compares:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Lots</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Shetland Ridge', '$400K\u2013$550K', 'Generous', 'Spacious lots, mature trees, updated homes'],
                    ['Twin Lakes', '$375K\u2013$475K', 'Standard', 'Mixed older and updated homes, lower entry'],
                    ['Wellington', '$375K\u2013$475K', 'Larger', 'Established lots, same school zone'],
                    ['Bloomingdale', '$450K\u2013$650K+', 'Varies', 'Premium pricing, master-planned amenities'],
                  ].map(([name, price, lots, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{lots}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>If Shetland Ridge&apos;s pricing feels steep, <Link href="/neighborhoods/twin-lakes/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> offers similar Bloomingdale HS zoning at a lower entry point. For a larger community with pools and parks, <Link href="/neighborhoods/bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> is the step up.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Shetland Ridge Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want Bloomingdale High School zoning with mature lot sizes</li>
              <li>Buyers who prefer established neighborhoods over new construction</li>
              <li>Pet owners and families who need larger yards</li>
              <li>Commuters who want quick I-75 access via Bloomingdale Avenue</li>
              <li>Buyers looking for renovation opportunity in an appreciating area</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Shetland Ridge FAQ</h2>
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
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-forest/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Forest</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Searching for homes in Shetland Ridge? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Browse current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Shetland Ridge</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Shetland Ridge?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Shetland Ridge Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Shetland Ridge?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Shetland Ridge &mdash; not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Shetland Ridge Homes for Sale", "item": "https://valricoagent.com/neighborhoods/shetland-ridge/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Shetland Ridge, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9415, "longitude": -82.2480 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Shetland Ridge, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Shetland Ridge, Valrico FL",
            "priceCurrency": "USD",
            "price": "400000-550000",
            "url": "https://valricoagent.com/neighborhoods/shetland-ridge/",
            "areaServed": { "@type": "Place", "name": "Shetland Ridge, Valrico FL" },
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
