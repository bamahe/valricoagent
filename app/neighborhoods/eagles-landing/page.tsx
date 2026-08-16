'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

/**
 * Eagles Landing neighborhood page.
 * Newer construction community near Boyette Road in Valrico (33596).
 * Newsome HS zone, $375K-$525K range.
 */
export default function EaglesLandingPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'eagles-landing', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Eagles Landing Valrico?', a: 'Homes in Eagles Landing typically sell between $375,000 and $525,000. The community features newer construction with modern floor plans, energy-efficient features, and contemporary finishes. Contact Barrett Henry at (813) 733-7907 for current Eagles Landing pricing.' },
    { q: 'What school zone is Eagles Landing in?', a: 'Eagles Landing is zoned for Newsome High School, one of the top-rated high schools in Hillsborough County. Feeder schools include Mintz Elementary and Mulrennan Middle School. Newsome HS zoning is a significant value driver for homes in this area.' },
    { q: 'Does Eagles Landing have an HOA?', a: 'Yes, Eagles Landing has a mandatory HOA that maintains common areas, entrance landscaping, and community amenities. As a newer construction community, it may also carry a CDD assessment on the property tax bill. Barrett Henry can pull the exact HOA and CDD costs for any Eagles Landing address.' },
    { q: 'Is Eagles Landing a good neighborhood in Valrico?', a: 'Eagles Landing is a strong choice for buyers who want newer construction with modern amenities in the Newsome HS zone. The community offers energy-efficient homes with contemporary floor plans at a mid-range price point. It appeals to families, move-up buyers, and anyone who prefers a newer home without the hassle of building custom.' },
    { q: 'When was Eagles Landing built?', a: 'Eagles Landing features homes built primarily in the 2010s and later, making it one of Valrico\'s newer communities. Construction quality reflects modern building codes, impact-rated windows, and energy-efficient systems that reduce utility costs compared to older Valrico neighborhoods.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Eagles Landing Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Eagles Landing is a newer construction community near Boyette Road in Valrico (33596). Modern floor plans, Newsome HS zone, prices from $375K&ndash;$525K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Eagles Landing listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["EAGLES LANDING"]} heading="Eagles Landing Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['eagles-landing']}
          neighborhoodName="Eagles Landing"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$375K\u2013$525K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['New Construction', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Eagles Landing, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Eagles Landing is one of Valrico&apos;s newer residential communities, located near Boyette Road in the 33596 ZIP code. The community features modern construction with contemporary floor plans, energy-efficient building standards, and the kind of finishes that buyers expect in today&apos;s market: granite countertops, open-concept layouts, impact-rated windows, and smart-home readiness.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Eagles Landing range from approximately $375,000 to $525,000, with most offering 3-5 bedrooms and 1,800 to 3,000 square feet. The newer construction means lower maintenance costs, better energy efficiency, and modern building code compliance including hurricane-rated roofing and windows. For buyers who do not want to deal with the renovation and update costs that come with older Valrico homes, Eagles Landing eliminates that concern.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The community sits in the Newsome High School zone, which is one of the top school zones in Hillsborough County. Combined with newer construction and a mid-range price point, Eagles Landing attracts families moving up from starter homes, relocating professionals, and military families from MacDill AFB who want modern living with excellent schools.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Eagles Landing</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Eagles Landing is zoned for <strong>Newsome High School</strong>, with feeder schools including <strong>Mintz Elementary</strong> and <strong>Mulrennan Middle School</strong>. Newsome HS consistently ranks among the top public high schools in Hillsborough County. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 10&ndash;12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 30&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~7 miles / 14 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
            </ul>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Eagles Landing has a mandatory HOA that maintains common areas, entrance features, and community amenities. As a newer construction community, it may also carry a CDD (Community Development District) assessment on the property tax bill. CDD fees typically cover infrastructure costs like roads, drainage, and parks that were built by the developer. Barrett Henry can pull the exact HOA and CDD costs for any Eagles Landing address, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Eagles Landing Compares to Nearby Neighborhoods</h2>
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
                    ['Eagles Landing', '$375K\u2013$525K', 'Newsome HS', 'Newer construction, modern floor plans'],
                    ['Arista', '$380K\u2013$500K', 'Newsome HS', 'Gated, newer construction near Diamond Hill'],
                    ['Heritage Crest', '$380K\u2013$500K', 'Newsome HS', 'Newer construction, modern layouts'],
                    ['Buckhorn', '$350K\u2013$500K', 'Newsome HS', 'Larger community, mix of ages'],
                    ['Valrico Forest', '$380K\u2013$500K', 'Newsome HS', 'New construction available'],
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

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Eagles Landing Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want newer construction with Newsome HS zoning</li>
              <li>Move-up buyers upgrading from older starter homes in Bloomingdale or Brandon</li>
              <li>Military families from MacDill AFB seeking modern homes with top schools</li>
              <li>Buyers who want energy-efficient, low-maintenance homes without building custom</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Eagles Landing FAQ</h2>
            <div className="space-y-6 mb-10">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-[16px] mb-2" style={{ color: 'var(--ink)' }}>{f.q}</h3>
                  <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--ink-soft)' }}>{f.a}</p>
                </div>
              ))}
            </div>

            {/* --- Cross-links to Barrett's other sites --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Eagles Landing on Barrett&apos;s Other Sites</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><a href="https://valricopropertymgmt.com/neighborhoods/eagles-landing" target="_blank" rel="noopener" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Eagles Landing property management &rarr;</a></li>
              <li><a href="https://valrico.blog" target="_blank" rel="noopener" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico local news and guides &rarr;</a></li>
              <li><a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Full Valrico real estate guide &rarr;</a></li>
            </ul>

            {/* --- Explore more --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Explore More Valrico Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--ink-soft)' }}>
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/heritage-crest/" className="no-underline" style={{ color: 'var(--accent)' }}>Heritage Crest</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-forest/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Forest</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/copper-ridge/" className="no-underline" style={{ color: 'var(--accent)' }}>Copper Ridge</Link> &middot;{' '}
              <Link href="/neighborhoods/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>View all 36 &rarr;</Link>
            </p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Eagles Landing</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Eagles Landing?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Eagles Landing Info'}</button>
                </form>
              )}
              <p className="text-xs mt-3" style={{ color: 'var(--ink-muted)' }}>Or call Barrett directly: <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
            </div>

            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-serif text-lg mb-3">Valrico Resources</h3>
              <ul className="space-y-2">
                <li><a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Full Valrico guide &rarr;</a></li>
                <li><a href="https://valrico.blog" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Valrico local blog &rarr;</a></li>
                <li><a href="https://valricopropertymgmt.com/neighborhoods/eagles-landing" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Eagles Landing property management &rarr;</a></li>
                <li><Link href="/valrico-school-zones/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>Valrico school zone map &rarr;</Link></li>
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 36 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Eagles Landing?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Eagles Landing, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Eagles Landing Homes for Sale", "item": "https://valricoagent.com/neighborhoods/eagles-landing/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Eagles Landing, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9110, "longitude": -82.2620 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Eagles Landing, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Eagles Landing, Valrico FL",
            "priceCurrency": "USD",
            "price": "375000-525000",
            "url": "https://valricoagent.com/neighborhoods/eagles-landing/",
            "areaServed": { "@type": "Place", "name": "Eagles Landing, Valrico FL" },
          },
        ],
      }) }} />

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
