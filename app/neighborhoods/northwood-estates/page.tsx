'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function NorthwoodEstatesPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'northwood-estates', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Northwood Estates Valrico?', a: 'Homes in Northwood Estates typically sell between $425,000 and $575,000. These are WestBay-built homes with premium finishes including quartz countertops, LVP flooring, and spacious owners suites. Prices vary based on square footage, lot size, and upgrades. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is Northwood Estates in?', a: 'Northwood Estates is zoned for Mintz Elementary, Mulrennan Middle School, and Newsome High School in the Hillsborough County School District. Newsome High is one of the top-rated high schools in the Tampa Bay area with an A grade and GreatSchools rating of 8/10. Barrett Henry can verify the exact school assignment for any address.' },
    { q: 'Does Northwood Estates have an HOA?', a: 'Yes. Northwood Estates has an HOA with relatively low monthly fees compared to similar communities. A significant advantage is that Northwood Estates has no CDD (Community Development District) assessment, which saves buyers $100-$250 per month compared to competing new construction communities. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Is Northwood Estates a good neighborhood in Valrico?', a: 'Northwood Estates is one of the best boutique new-construction options in north Valrico. The WestBay builder quality, no-CDD structure, Newsome HS zoning, and larger lot sizes create strong value. The smaller community size means less traffic and a more intimate neighborhood feel.' },
    { q: 'Are there CDD fees in Northwood Estates?', a: 'No. Northwood Estates does not have a CDD assessment, which is a meaningful financial advantage. Many competing new construction communities in the Valrico area add $1,200 to $3,000 per year in CDD fees on top of property taxes and HOA dues. Northwood Estates avoids this extra cost entirely.' },
    { q: 'Who built the homes in Northwood Estates?', a: 'Homes in Northwood Estates were built by WestBay, a well-regarded regional builder known for premium finishes and quality construction. Standard features include LVP flooring, quartz countertops, stainless steel appliances, covered lanais, and first-floor owners suites in most floor plans.' },
    { q: 'How far is Northwood Estates from I-75?', a: 'Northwood Estates is approximately 4 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 10-minute drive. Downtown Tampa is roughly 19 miles via I-75. The community is positioned in north Valrico with convenient access to SR-60 shopping and the broader Brandon commercial corridor.' },
    { q: 'How does Northwood Estates compare to nearby neighborhoods?', a: 'Northwood Estates ($425K-$575K) offers boutique WestBay construction with no CDD. Arista ($425K-$575K) is gated but may have CDD fees. Legends Pass ($400K-$550K) is slightly cheaper with similar newer builds. Diamond Hill ($400K-$700K+) has larger lots but older homes. Northwood Estates wins on builder quality and total monthly cost when you factor in the CDD savings.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Northwood Estates Homes for Sale, Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Northwood Estates is a boutique community of WestBay-built homes on larger lots in north Valrico (33594). No CDD fees, Newsome HS zone, and premium finishes. Prices from $425K&ndash;$575K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Northwood Estates listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["NORTHWOOD ESTATES"]} heading="Northwood Estates Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['northwood-estates']}
          neighborhoodName="Northwood Estates"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$425K\u2013$575K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['No CDD', 'Fee advantage'],
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
            <h2 className="font-serif text-2xl mb-4">About Northwood Estates, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Northwood Estates is a boutique community in north Valrico (33594) that punches above its weight class. Built by WestBay, a regional builder known for quality over volume, the homes here feature designer-level finishes that set them apart from standard production builds. LVP flooring throughout, quartz countertops, stainless steel appliances, and thoughtfully designed floor plans come standard, not as upgrades.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The community is intentionally small, which creates a neighborhood dynamic more like a cul-de-sac than a sprawling subdivision. Homes range from approximately 2,000 to 3,200 square feet with 3 to 5 bedrooms. Lot sizes run larger than average for the area, giving owners more yard space and breathing room between homes. Most floor plans feature first-floor owners suites, open-concept living areas, and covered lanais that extend the living space into Florida&apos;s outdoors.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The financial structure here matters: Northwood Estates has no CDD assessment. In a market where many competing new-construction communities tack on $100 to $250 per month in CDD fees, Northwood Estates keeps the total monthly cost lower. Combined with relatively low HOA fees, the true cost of ownership in Northwood Estates is often better than communities with lower sticker prices but higher recurring fees.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Northwood Estates</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Northwood Estates falls within the Hillsborough County School District and is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong>. Newsome High is consistently one of the top-performing public high schools in Hillsborough County, with an A rating, strong AP course offerings, and competitive athletics and extracurricular programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome HS zone drives a measurable premium on home values in north Valrico. Buyers in Northwood Estates get this school zone benefit alongside the no-CDD advantage, a combination that few other communities in the area can match. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details on every feeder pattern.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Northwood Estates sits in north Valrico with convenient access to major corridors. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~19 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 30&ndash;42 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~26 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~26 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily shopping along SR-60 is within minutes, Publix, Winn-Dixie, Walmart, and a full range of restaurants and services. The north Valrico position balances suburban accessibility with a quieter residential feel away from the busier commercial corridors.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Northwood Estates has a mandatory HOA with fees that run on the lower end compared to similar communities. The critical financial advantage is the absence of a CDD assessment. In nearby communities, CDD fees add $1,200 to $3,000 annually to the property tax bill, Northwood Estates owners skip that cost entirely. Barrett Henry can provide the exact current HOA fee and a total monthly cost comparison against competing neighborhoods, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Northwood Estates Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Northwood Estates competes with the newer-construction options in north Valrico. Here&apos;s how it stacks up:</p>
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
                    ['Northwood Estates', '$425K\u2013$575K', 'No', 'WestBay builder, boutique, larger lots'],
                    ['Arista', '$425K\u2013$575K', 'Some sections', 'Gated entrance, similar pricing'],
                    ['Legends Pass', '$400K\u2013$550K', 'Possible', 'Slightly lower price, larger community'],
                    ['Lake Valrico', '$350K\u2013$500K', 'No', 'No HOA, waterfront, older homes'],
                    ['Diamond Hill', '$400K\u2013$700K+', 'No', 'Larger lots, established, golf proximity'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Northwood Estates wins on total cost of ownership when CDD savings are factored in. If you want a gated entrance, look at <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link>. If you want more land and waterfront potential, explore <Link href="/neighborhoods/lake-valrico/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Lake Valrico</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Northwood Estates Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want premium new construction in the Newsome HS zone without CDD fees</li>
              <li>Buyers who value builder quality and designer finishes over community size</li>
              <li>Professionals who want a boutique neighborhood feel with low traffic</li>
              <li>Cost-conscious buyers who compare total monthly ownership costs, not just sticker price</li>
              <li>Move-up buyers who want larger lots than typical new-construction subdivisions offer</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Northwood Estates FAQ</h2>
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
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/legends-pass/" className="no-underline" style={{ color: 'var(--accent)' }}>Legends Pass</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/lake-valrico/" className="no-underline" style={{ color: 'var(--accent)' }}>Lake Valrico</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Northwood Estates? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Northwood Estates</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Northwood Estates?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Northwood Estates Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Northwood Estates?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Northwood Estates, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Northwood Estates Homes for Sale", "item": "https://valricoagent.com/neighborhoods/northwood-estates/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Northwood Estates, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9520, "longitude": -82.2380 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Northwood Estates, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Northwood Estates, Valrico FL",
            "priceCurrency": "USD",
            "price": "425000-575000",
            "url": "https://valricoagent.com/neighborhoods/northwood-estates/",
            "areaServed": { "@type": "Place", "name": "Northwood Estates, Valrico FL" },
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
