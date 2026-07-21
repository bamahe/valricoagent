'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function CimmaronPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'cimmaron', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Cimmaron Valrico?', a: 'Homes in Cimmaron typically sell between $450,000 and $650,000. Prices vary based on lot size, upgrades, and conservation views. Cimmaron is a small community of just 19 custom homes with generous square footage, many close to 4,000 sqft. Contact Barrett Henry at (813) 733-7907 for current Cimmaron pricing.' },
    { q: 'What school zone is Cimmaron in?', a: 'Cimmaron is zoned for Newsome High School in the Hillsborough County School District. Newsome High is consistently rated among the top public high schools in the Tampa Bay area with an A grade from the Florida Department of Education. Barrett Henry can verify the exact school assignment for any Cimmaron address.' },
    { q: 'Does Cimmaron have an HOA?', a: 'No. Cimmaron does not have a mandatory HOA. This means no monthly HOA fees, no architectural review board, and fewer restrictions on what you can do with your property. For buyers who want freedom over their home and lot, Cimmaron is an appealing option in the Newsome HS zone.' },
    { q: 'How many homes are in Cimmaron Valrico?', a: 'Cimmaron has just 19 custom-built homes. This makes it one of the smallest and most exclusive communities in the Valrico area. Homes rarely come on the market, and when they do, they tend to sell quickly due to the large lots, no HOA, and Newsome High School zoning.' },
    { q: 'Is Cimmaron near a golf course?', a: 'Yes. Cimmaron is located near Buckhorn Springs Golf & Country Club, the oldest private golf club in the Brandon/Valrico area (established 1965). While Cimmaron is not a golf course community, its proximity to the club is a selling point for golf enthusiasts.' },
    { q: 'What size are the lots in Cimmaron?', a: 'Cimmaron features large wooded lots, many with conservation backyards. Homes in the community range from 3 to 5 bedrooms with many close to 4,000 square feet of living space. The oversized lots and mature tree canopy give Cimmaron a private, semi-rural feel rare in the Valrico area.' },
    { q: 'How do I get to Cimmaron in Valrico?', a: 'From downtown Valrico, head south on Miller Road, then east on Durant Road, and turn north on Cimmaron Run. The community is tucked off the main road, contributing to its quiet, secluded character. It is roughly 3 miles from the SR-60 corridor and 5 miles from I-75.' },
    { q: 'How does Cimmaron compare to nearby Valrico neighborhoods?', a: 'Cimmaron ($450K-$650K) is a premium no-HOA option with just 19 custom homes. Nearby Buckhorn Golf Club Estates ($350K-$550K) offers golf course views at a lower price. Crestwood Estates ($600K-$1M+) is the luxury step up. Durant Oaks ($375K-$525K) is more affordable with similar custom-built character.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Cimmaron Homes for Sale, Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Cimmaron is an exclusive community of just 19 custom homes on large wooded lots near Buckhorn Springs Golf &amp; Country Club in Valrico (33594). No HOA. Prices from $450K&ndash;$650K. Newsome High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Cimmaron listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["CIMMARON"]} heading="Cimmaron Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['cimmaron']}
          neighborhoodName="Cimmaron"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$450K\u2013$650K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['No HOA', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Cimmaron, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Cimmaron is one of Valrico&apos;s best-kept secrets. With just 19 custom-built homes tucked away on large wooded lots, this small community offers a level of privacy and exclusivity that larger subdivisions simply cannot match. Located near Buckhorn Springs Golf &amp; Country Club, Cimmaron sits in the heart of the Newsome High School zone, one of the most sought-after school assignments in Hillsborough County.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Cimmaron range from 3 to 5 bedrooms, with many approaching 4,000 square feet of living space. These are not cookie-cutter tract homes. Each was custom built with individual floor plans, upgraded finishes, and thoughtful layouts. Many lots back up to conservation areas, providing wooded backyards with mature trees and natural buffers from neighboring properties.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>There is no HOA in Cimmaron. No monthly fees, no architectural review board, and no restrictions on things like parking your boat in the driveway or building a workshop. For buyers who value autonomy over their property while still living in a premium location with top schools, Cimmaron checks every box.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Cimmaron</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Cimmaron falls within the Hillsborough County School District and is zoned for <strong>Newsome High School</strong>. Newsome High is consistently rated among the top public high schools in the Tampa Bay area, earning an A grade from the Florida Department of Education and a GreatSchools rating of 8/10. The school offers AP courses, dual enrollment, and athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome High School zone is one of the primary drivers of home values in this part of Valrico. Comparable homes inside the Newsome zone consistently sell for more than similar homes zoned for other high schools in the area. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Cimmaron is located off Durant Road in Valrico, accessible by heading south on Miller Road, east on Durant, and north on Cimmaron Run. Key commute times from Cimmaron:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 30&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~7 miles / 15 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily essentials are within minutes. Publix, Winn-Dixie, and restaurants line the Durant Road and Lithia Pinecrest Road corridors. Buckhorn Springs Golf &amp; Country Club is right around the corner for golf enthusiasts.</p>

            {/* --- No HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">No HOA in Cimmaron</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Cimmaron has no mandatory HOA. There are no monthly fees, no architectural review committees, and no deed restrictions beyond standard county regulations. This appeals to buyers who want full control over their property, whether that means adding a detached garage, parking recreational vehicles, or making exterior modifications without committee approval. For other no-HOA options in Valrico, see <Link href="/valrico-no-hoa-homes/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico no-HOA homes</Link>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Cimmaron Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Cimmaron is one of several quality neighborhoods in the Valrico area. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>HOA</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cimmaron', '$450K\u2013$650K', 'No', '19 custom homes, large wooded lots'],
                    ['Buckhorn Golf Club Estates', '$350K\u2013$550K', 'Yes', 'Golf course views, more homes'],
                    ['Crestwood Estates', '$600K\u2013$1M+', 'No', 'Estate-sized lots, luxury tier'],
                    ['Durant Oaks', '$375K\u2013$525K', 'No', 'Custom-built, mature landscaping'],
                    ['Copper Ridge', '$375K\u2013$525K', 'Yes', 'HOA-governed, conservation lots'],
                  ].map(([name, price, hoa, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{hoa}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Cimmaron&apos;s combination of custom homes, no HOA, and Newsome HS zoning makes it unique among Valrico neighborhoods. If you want a similar feel with golf course views, look at <Link href="/neighborhoods/buckhorn-golf-club-estates/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Golf Club Estates</Link>. If you want more square footage and a higher price point, <Link href="/neighborhoods/crestwood-estates/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> is the next step up.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Cimmaron Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want custom homes in the Newsome High School zone without HOA restrictions</li>
              <li>Buyers who value large, wooded lots with conservation backyards and privacy</li>
              <li>Golf enthusiasts who want to live near Buckhorn Springs Golf &amp; Country Club</li>
              <li>Homeowners who want autonomy over their property with no architectural review board</li>
              <li>Move-up buyers looking for close to 4,000 sqft without new-construction pricing</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Cimmaron FAQ</h2>
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
              <Link href="/neighborhoods/buckhorn-golf-club-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Golf Club Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/durant-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Durant Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/copper-ridge/" className="no-underline" style={{ color: 'var(--accent)' }}>Copper Ridge</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Cimmaron? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Cimmaron</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Cimmaron?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Cimmaron Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Cimmaron?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Cimmaron, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Cimmaron Homes for Sale", "item": "https://valricoagent.com/neighborhoods/cimmaron/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Cimmaron, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9040, "longitude": -82.2620 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Cimmaron, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Cimmaron, Valrico FL",
            "priceCurrency": "USD",
            "price": "450000-650000",
            "url": "https://valricoagent.com/neighborhoods/cimmaron/",
            "areaServed": { "@type": "Place", "name": "Cimmaron, Valrico FL" },
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
