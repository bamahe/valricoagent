'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function WellingtonPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'wellington', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'What do homes cost in Wellington Valrico?', a: 'Wellington homes in Valrico typically sell between $375,000 and $475,000. Pricing varies based on square footage, lot size, and the level of interior updates. Wellington offers solid mid-range value within the Bloomingdale HS zone. Call Barrett Henry at (813) 733-7907 for current Wellington pricing.' },
    { q: 'What school zone is Wellington in?', a: 'Wellington is zoned for Alafia Elementary (or Cimino Elementary depending on address), Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale High offers AP courses, dual enrollment, and strong extracurricular programs. Barrett Henry can verify zoning for any Wellington address.' },
    { q: 'Does Wellington have an HOA?', a: 'Wellington has a homeowners association that manages community standards and common area maintenance. HOA fees vary by section within the neighborhood. Contact Barrett Henry at (813) 733-7907 for exact HOA fee information on any specific Wellington property.' },
    { q: 'How old are Wellington homes?', a: 'Wellington homes were built primarily during the 1980s and 1990s, giving the community a mature, established character. Many homes have been updated with modern kitchens, new roofs, and renovated owners suites. The concrete block construction from this era is known for durability in the Florida climate.' },
    { q: 'Is Wellington a good neighborhood in Valrico?', a: 'Wellington is a solid, established neighborhood with good fundamentals: Bloomingdale HS zoning, generous lot sizes, and a convenient location along the Bloomingdale Avenue corridor. It offers more land per dollar than newer subdivisions and avoids CDD fees that inflate the monthly cost of post-2005 communities.' },
    { q: 'How far is Wellington from I-75?', a: 'Wellington is approximately 5 miles from the I-75 interchange at Bloomingdale Avenue, roughly a 12-minute drive. From I-75, downtown Tampa is about 25-30 minutes and Lakeland is approximately 30 minutes via I-4.' },
    { q: 'What size lots does Wellington have?', a: 'Wellington lots tend to be larger than what most newer Valrico subdivisions offer. Many parcels are a quarter acre or more, providing meaningful yard space and distance between homes. The mature landscaping on these larger lots creates a sense of privacy that tight new-construction lots simply cannot offer.' },
    { q: 'How does Wellington compare to Twin Lakes?', a: 'Wellington ($375K-$475K) and Twin Lakes ($375K-$475K) share the same Bloomingdale HS zone and similar pricing. Wellington generally offers larger lots and more consistently sized homes. Twin Lakes has a wider mix of updated and original-condition properties. Choose Wellington for lot size; choose Twin Lakes if you want a wider range of price entry points.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Wellington Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Wellington is an established neighborhood with generous lots in south Valrico (33596). Prices from $375K&ndash;$475K. Bloomingdale High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Wellington listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" heading="Wellington Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['wellington']}
          neighborhoodName="Wellington"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$375K\u2013$475K', 'Price range'],
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
            <h2 className="font-serif text-2xl mb-4">About Wellington, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Wellington is one of south Valrico&apos;s established residential anchors &mdash; a community that was built when developers still gave buyers meaningful lot sizes instead of maximizing density. Homes here sit on generous parcels, often a quarter acre or larger, with mature oaks, palms, and landscaping that provide shade and privacy between neighbors. It&apos;s the kind of neighborhood where you can actually use your backyard, not just look at it through your lanai screen.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The housing stock in Wellington spans 3 to 5 bedrooms, with most homes falling between 1,600 and 2,800 square feet. Construction dates range primarily from the mid-1980s through the 1990s. Floor plans reflect the preferences of that era &mdash; split-bedroom layouts, formal living and dining rooms, and Florida rooms or screened enclosures that extend the living space. Many homes have been thoughtfully updated by long-term owners: you&apos;ll find renovated kitchens with quartz counters, newer flooring throughout, and modernized owners suites alongside the original solid block construction.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Wellington&apos;s location along the Bloomingdale Avenue corridor places it within easy reach of daily shopping, restaurants, and I-75 access. The neighborhood attracts buyers who want the Bloomingdale High School zone with more property than newer subdivisions can offer. If your priority list includes yard space, established trees, and a neighborhood that doesn&apos;t feel like it was stamped from a builder&apos;s template, Wellington checks those boxes at a price that still leaves room in the budget.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Wellington</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Wellington is zoned for <strong>Alafia Elementary</strong> (or <strong>Cimino Elementary</strong> depending on address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong> in the Hillsborough County School District. Bloomingdale High is a well-regarded school with a comprehensive AP program, dual enrollment partnerships, competitive athletics, and a range of career and technical education tracks.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale HS feeder pattern is a consistent draw for families looking along the south Valrico corridor. Wellington shares this zoning with neighbors like <Link href="/neighborhoods/shetland-ridge/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Shetland Ridge</Link> and <Link href="/neighborhoods/twin-lakes/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>, but Wellington&apos;s larger lots set it apart. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico school zone guide</Link> for the full feeder pattern details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Wellington sits in south Valrico with convenient access to Bloomingdale Avenue and the I-75 corridor. Key commute estimates:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (Bloomingdale Ave interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 30&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Avenue handles the daily essentials with Publix, Walmart, restaurants, medical offices, and banks all within a few minutes. The Bloomingdale Golfers Club nearby provides golf access, and parks along the corridor offer playgrounds and walking paths.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Wellington has a homeowners association that manages community standards and common area upkeep. HOA fees vary by section within the neighborhood. As a community built in the 1980s and 1990s, Wellington predates the CDD (Community Development District) financing model &mdash; meaning no CDD assessments are tacked onto your tax bill. That keeps total monthly housing costs below what comparably priced newer communities charge. For exact HOA details, call Barrett Henry at <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Wellington Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Wellington sits in the middle of the south Valrico pricing range. Here&apos;s the comparison:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Lot Size</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Wellington', '$375K\u2013$475K', 'Larger', 'Established lots, mature trees, no CDD'],
                    ['Twin Lakes', '$375K\u2013$475K', 'Standard', 'Mixed era, wider condition range'],
                    ['Shetland Ridge', '$400K\u2013$550K', 'Generous', 'Higher ceiling, more updated homes'],
                    ['Bloomingdale', '$450K\u2013$650K+', 'Varies', 'Premium tier, master-planned amenities'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Wellington is the go-to for buyers who want Bloomingdale HS zoning with larger lots at a mid-range price. For a lower entry point in the same zone, check <Link href="/neighborhoods/twin-lakes/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>. For a step up in finish quality, <Link href="/neighborhoods/shetland-ridge/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Shetland Ridge</Link> is the upgrade.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Wellington Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want Bloomingdale HS zoning with larger-than-average lots</li>
              <li>Buyers who value yard space, mature trees, and privacy between homes</li>
              <li>Pet owners and outdoor enthusiasts who need room to roam</li>
              <li>Commuters who want quick access to I-75 via Bloomingdale Avenue</li>
              <li>Anyone who prefers established neighborhoods over cookie-cutter new construction</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Wellington FAQ</h2>
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
              <Link href="/neighborhoods/shetland-ridge/" className="no-underline" style={{ color: 'var(--accent)' }}>Shetland Ridge</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-forest/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Forest</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Interested in Wellington? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Wellington</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What draws you to Wellington?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Wellington Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Wellington?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Real Wellington comps &mdash; not an online estimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Wellington Homes for Sale", "item": "https://valricoagent.com/neighborhoods/wellington/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Wellington, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9400, "longitude": -82.2455 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Wellington, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Wellington, Valrico FL",
            "priceCurrency": "USD",
            "price": "375000-475000",
            "url": "https://valricoagent.com/neighborhoods/wellington/",
            "areaServed": { "@type": "Place", "name": "Wellington, Valrico FL" },
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
