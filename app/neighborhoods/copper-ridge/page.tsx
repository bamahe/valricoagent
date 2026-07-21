'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function CopperRidgePage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'copper-ridge', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Copper Ridge Valrico?', a: 'Homes in Copper Ridge typically sell between $375,000 and $525,000. Prices vary based on lot position (conservation backing commands a premium), square footage, and interior upgrades. Homes range from 1,800 to 3,000 sqft with 3 to 5 bedrooms. Contact Barrett Henry at (813) 733-7907 for current Copper Ridge pricing.' },
    { q: 'What school zone is Copper Ridge in?', a: 'Copper Ridge is zoned for Newsome High School in the Hillsborough County School District. Newsome High is consistently rated among the top public high schools in the Tampa Bay area with an A grade from the Florida Department of Education. Barrett Henry can verify the exact school assignment for any Copper Ridge address.' },
    { q: 'Does Copper Ridge have an HOA?', a: 'Yes. Copper Ridge is an HOA-governed community with mandatory membership. The HOA maintains community standards, common areas, and landscaping in shared spaces. CDD (Community Development District) fees also apply and are included in your annual property tax bill. Call Barrett Henry at (813) 733-7907 for current HOA and CDD fee amounts.' },
    { q: 'What are CDD fees in Copper Ridge?', a: 'Copper Ridge carries CDD (Community Development District) fees in addition to the HOA. CDD fees are baked into your annual property tax bill and cover infrastructure bonds from when the community was developed (1997-2004). These fees typically run $1,000-$2,500 per year. Barrett Henry can pull the exact CDD amount for any specific Copper Ridge address.' },
    { q: 'When was Copper Ridge built?', a: 'Copper Ridge homes were built between 1997 and 2004. Construction is concrete block (CBS), which is the preferred building standard in Florida for hurricane resistance and longevity. Most homes feature tile roofs, screened lanais, and 2-car garages. The community is fully built out with no new construction available.' },
    { q: 'Do Copper Ridge homes back to conservation?', a: 'Yes. Many lots in Copper Ridge back up to conservation areas, providing wooded privacy buffers and natural views. Conservation-backing lots are among the most sought-after positions in the community because they offer privacy, nature views, and the assurance that no one will build behind you.' },
    { q: 'How many residents live in Copper Ridge?', a: 'Copper Ridge has approximately 2,372 residents according to census data. The community spans parts of both the 33596 and 33594 ZIP codes. It is a medium-sized community located off Lithia Pinecrest Road, positioned between FishHawk and Bloomingdale.' },
    { q: 'How does Copper Ridge compare to nearby Valrico neighborhoods?', a: 'Copper Ridge ($375K-$525K) is an HOA-governed community with conservation lots and Newsome HS zoning. Nearby Durant Oaks ($375K-$525K) offers custom-built homes without HOA. Cimmaron ($450K-$650K) has larger custom homes at a higher price. FishHawk Ranch (starting $400K+) is the larger master-planned alternative to the south.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Copper Ridge Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Copper Ridge is an HOA-governed community of concrete block homes built 1997&ndash;2004 in Valrico (33596). 1,800&ndash;3,000 sqft, 3&ndash;5 bedrooms, many lots back to conservation areas. Off Lithia Pinecrest Rd near FishHawk. Prices from $375K&ndash;$525K. Newsome High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Copper Ridge listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["COPPER RIDGE"]} heading="Copper Ridge Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['copper-ridge']}
          neighborhoodName="Copper Ridge"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$375K\u2013$525K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['2,372', 'Residents'],
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
            <h2 className="font-serif text-2xl mb-4">About Copper Ridge, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Copper Ridge is a well-established HOA-governed community in Valrico (33596) located off Lithia Pinecrest Road, positioned between the FishHawk and Bloomingdale areas. Built between 1997 and 2004, the community features concrete block (CBS) construction, the preferred building standard in Florida for hurricane resistance and durability. With approximately 2,372 residents, Copper Ridge is a medium-sized neighborhood with a stable, family-oriented feel.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Copper Ridge range from 1,800 to 3,000 square feet with 3 to 5 bedrooms. Most feature tile roofs, screened lanais, 2-car garages, and the solid construction quality typical of the late 1990s to early 2000s building era. Many lots back up to conservation areas, providing wooded privacy buffers and natural views that add both lifestyle value and long-term lot premium.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The community is HOA-governed with CDD fees that appear on your annual property tax bill. The HOA maintains community standards and common areas, keeping the neighborhood well-maintained and consistent. Copper Ridge sits in the Newsome High School zone, one of the most sought-after school assignments in Hillsborough County, which helps support property values long-term.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Copper Ridge</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Copper Ridge falls within the Hillsborough County School District and is zoned for <strong>Newsome High School</strong>. Newsome High is consistently rated among the top public high schools in the Tampa Bay area, earning an A grade from the Florida Department of Education and a GreatSchools rating of 8/10. The school offers AP courses, dual enrollment, and competitive athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome High School zone is one of the primary drivers of home values in this part of Valrico. Comparable homes inside the Newsome zone consistently sell for more than similar homes zoned for other high schools in the area. For families with school-age children, the zoning adds meaningful value to a Copper Ridge purchase. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Copper Ridge is located off Lithia Pinecrest Road in the southern part of the Valrico area, near both FishHawk and Bloomingdale. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~7 miles / 15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~22 miles / 30&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~25 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~8 miles / 15 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~28 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Lithia Pinecrest Road provides direct access to Publix, Winn-Dixie, restaurants, and medical offices. The FishHawk area to the south offers additional shopping, dining, and recreation options. Bloomingdale Avenue to the north connects to the heart of Valrico&apos;s retail corridor.</p>

            {/* --- HOA & CDD --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and CDD Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Copper Ridge has a mandatory HOA that maintains community standards, common areas, and neighborhood appearance. In addition to HOA dues, CDD (Community Development District) fees apply. CDD fees are baked into your annual property tax bill and cover infrastructure bonds from when the community was originally developed. These fees typically run $1,000&ndash;$2,500 per year depending on the lot. Barrett Henry can pull the exact HOA and CDD amounts for any specific Copper Ridge address, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Conservation Lots --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Conservation Lots in Copper Ridge</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>One of Copper Ridge&apos;s most desirable features is the number of lots that back up to conservation areas. These lots provide wooded privacy buffers, natural wildlife views, and the peace of mind that no one will ever build behind your home. Conservation-backing positions typically command a premium of $15,000&ndash;$30,000 over comparable interior lots. If a conservation lot is important to you, Barrett Henry can identify every conservation-backing home currently available in Copper Ridge.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Copper Ridge Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Copper Ridge is one of several quality neighborhoods in the Valrico area. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>HOA/CDD</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Copper Ridge', '$375K\u2013$525K', 'Both', 'Conservation lots, concrete block'],
                    ['Cimmaron', '$450K\u2013$650K', 'None', '19 custom homes, larger lots'],
                    ['Durant Oaks', '$375K\u2013$525K', 'None', 'Custom-built, mature landscaping'],
                    ['Buckhorn Golf Club Estates', '$350K\u2013$550K', 'HOA', 'Golf course views, established'],
                    ['Buckhorn Preserve', '$350K\u2013$500K', 'HOA', 'Nature preserve views, Boyette corridor'],
                  ].map(([name, price, fees, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{fees}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Copper Ridge offers Newsome HS zoning and conservation lots at a mid-range price. If you want to avoid HOA and CDD fees, look at <Link href="/neighborhoods/cimmaron/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Cimmaron</Link> or <Link href="/neighborhoods/durant-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Durant Oaks</Link>. If you want golf course views instead of conservation, <Link href="/neighborhoods/buckhorn-golf-club-estates/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Golf Club Estates</Link> is worth exploring.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Copper Ridge Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want Newsome High School zoning at a mid-range price point</li>
              <li>Buyers who prefer conservation-backing lots with wooded privacy</li>
              <li>Homeowners who appreciate HOA-maintained community standards and curb appeal</li>
              <li>Buyers looking for concrete block construction built to Florida wind codes</li>
              <li>Commuters who want easy access to Lithia Pinecrest Rd, FishHawk, and Bloomingdale corridors</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Copper Ridge FAQ</h2>
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
              <Link href="/neighborhoods/durant-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Durant Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn-preserve/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Preserve</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Copper Ridge? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Copper Ridge</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Copper Ridge?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Copper Ridge Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Copper Ridge?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Copper Ridge, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Copper Ridge Homes for Sale", "item": "https://valricoagent.com/neighborhoods/copper-ridge/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Copper Ridge, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.8920, "longitude": -82.2530 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Copper Ridge, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Copper Ridge, Valrico FL",
            "priceCurrency": "USD",
            "price": "375000-525000",
            "url": "https://valricoagent.com/neighborhoods/copper-ridge/",
            "areaServed": { "@type": "Place", "name": "Copper Ridge, Valrico FL" },
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
