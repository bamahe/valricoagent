'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function HeritageCrestPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'heritage-crest', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Heritage Crest Valrico?', a: 'Homes in Heritage Crest typically sell between $400,000 and $500,000. Most homes range from 1,800 to 2,800 square feet with 3 to 5 bedrooms. As one of the newest developments in Valrico 33594, pricing reflects current construction costs and modern design standards. Contact Barrett Henry at (813) 733-7907 for current Heritage Crest pricing.' },
    { q: 'What school zone is Heritage Crest in?', a: 'Heritage Crest is zoned for Mintz Elementary, Mulrennan Middle School, and Newsome High School in the Hillsborough County School District. Newsome High is consistently rated among the top public high schools in the Tampa Bay area. Barrett Henry can verify the exact school assignment for any Heritage Crest address.' },
    { q: 'Does Heritage Crest have an HOA?', a: 'Yes. Heritage Crest has a mandatory HOA that maintains community standards and common areas. Monthly HOA fees typically run $100\u2013$200. As a newer construction community, there may also be a CDD assessment on the property tax bill. Call Barrett Henry at (813) 733-7907 for current HOA and CDD details.' },
    { q: 'Is Heritage Crest a good neighborhood in Valrico?', a: 'Heritage Crest is one of the best options for buyers who want brand-new or nearly-new construction in the Newsome High School zone. The homes are built to current Florida building codes with energy-efficient systems, modern floor plans, and builder warranties that cover major components. The 33594 ZIP code and Newsome HS zoning support strong long-term values.' },
    { q: 'How far is Heritage Crest from I-75?', a: 'Heritage Crest is approximately 4 miles from the I-75 interchange at SR-60 (Brandon Blvd), about an 8 to 10-minute drive. From I-75, downtown Tampa is roughly 25 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'Are there CDD fees in Heritage Crest?', a: 'As a newer construction community, Heritage Crest may carry a CDD (Community Development District) assessment in addition to the HOA fee. CDD fees are included in your property tax bill and typically run $1,000\u2013$2,500 per year. The CDD funded infrastructure and declines over time as bonds are paid off. Barrett Henry can pull the exact CDD amount for any Heritage Crest address.' },
    { q: 'What year were Heritage Crest homes built?', a: 'Heritage Crest is one of the newest developments in the 33594 ZIP code, with homes built from the late 2010s through the 2020s. Construction meets current Florida building codes including enhanced wind resistance, energy-efficient windows, modern insulation, and updated electrical and plumbing systems. Builder warranties typically cover major systems for the first several years.' },
    { q: 'How does Heritage Crest compare to nearby neighborhoods?', a: 'Heritage Crest ($400K\u2013$500K) offers the newest construction in the Newsome HS zone. Arista ($425K\u2013$575K) is also gated newer construction in 33594 but at a higher price. Diamond Hill ($350K\u2013$550K) has gated golf amenities with mixed-era construction. Buckhorn Preserve ($350K\u2013$500K) has community park amenities in the Newsome zone at a slightly lower entry.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Heritage Crest Homes for Sale, Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Heritage Crest is one of the newest construction communities in north Valrico (33594). Modern builder homes with open floor plans and energy-efficient systems. Prices from $400K&ndash;$500K. Newsome High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Heritage Crest listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["HERITAGE CREST"]} heading="Heritage Crest Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['heritage-crest']}
          neighborhoodName="Heritage Crest"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$400K\u2013$500K', 'Price range'],
            ['33594', 'ZIP code'],
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
            <h2 className="font-serif text-2xl mb-4">About Heritage Crest, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Heritage Crest is one of the newest residential developments in the Valrico 33594 ZIP code, offering modern builder homes with contemporary designs that reflect how people actually live today. For buyers who want the newest construction available in the Newsome High School zone without commissioning a custom build, Heritage Crest fills a gap that few other north Valrico communities can.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from 1,800 to 2,800 square feet with 3 to 5 bedrooms. Floor plans emphasize open-concept living with large kitchen islands, first-floor owners suites with walk-in closets and double vanities, and covered lanais that extend the living space outdoors. Interior finishes include quartz or granite countertops, tile backsplashes, stainless steel appliances, and luxury vinyl plank or tile flooring throughout main living areas.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The energy efficiency angle is real and measurable. Homes built to current Florida building codes feature impact-resistant or high-wind-rated construction, energy-efficient windows, modern insulation, and newer HVAC systems that reduce monthly utility costs compared to older Valrico homes. Builder warranties cover major systems for the first several years, which eliminates the near-term maintenance surprises that come with buying a 20-year-old home. For buyers who plan to live in the home long-term, the lower maintenance and utility costs compound into meaningful savings.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Heritage Crest</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Heritage Crest falls within the Hillsborough County School District and is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong>. Newsome High consistently earns an A grade from the Florida Department of Education and ranks among the top public high schools in the Tampa Bay area, offering AP courses, dual enrollment, and competitive athletics.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome High School zone is the single biggest driver of home values in the 33594 ZIP code. New construction inside the Newsome zone commands a premium over comparable new builds outside it. For families relocating to Valrico, Heritage Crest combines the two most sought-after features, newest construction and the best school zone, in one community. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Heritage Crest sits in north Valrico with direct access to major corridors. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 8&ndash;10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~18 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~22 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~25 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Shopping and essentials are close. Publix, Winn-Dixie, and Walmart are within minutes along SR-60 (Brandon Blvd) and Lithia Pinecrest Road. The north Valrico location provides slightly shorter commute times to Brandon and Tampa compared to south Valrico neighborhoods, which is a factor for daily commuters.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Heritage Crest has a mandatory HOA that maintains community standards and common areas. Monthly HOA fees typically run $100&ndash;$200. As a newer construction community, Heritage Crest may also carry a CDD (Community Development District) assessment on the property tax bill, typically $1,000&ndash;$2,500 per year. CDD fees funded the infrastructure development and decline over time as bonds are paid off. Barrett Henry can confirm exact HOA and CDD amounts for any Heritage Crest address, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Heritage Crest Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Heritage Crest targets buyers who want the newest construction in north Valrico. Here&apos;s how it compares:</p>
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
                    ['Heritage Crest', '$400K\u2013$500K', 'No', 'Newest construction, Newsome HS zone'],
                    ['Arista', '$425K\u2013$575K', 'Yes', 'Gated, newer construction, higher price'],
                    ['Diamond Hill', '$350K\u2013$550K', 'Yes', 'Golf community, resort amenities'],
                    ['Buckhorn Preserve', '$350K\u2013$500K', 'Yes', 'Gated, community park, Newsome HS'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Heritage Crest offers the newest construction at a lower price point than gated <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link>. If you want gated security with the Newsome HS zone, <Link href="/neighborhoods/buckhorn-preserve/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Preserve</Link> delivers that. If golf community amenities are a priority, <Link href="/neighborhoods/diamond-hill/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> is the choice.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Heritage Crest Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want the newest construction available in the Newsome HS zone</li>
              <li>First-time buyers who want modern floor plans with builder warranties</li>
              <li>Buyers who prioritize energy efficiency and low maintenance costs</li>
              <li>Professionals commuting to Tampa or Brandon who want the shortest commute times</li>
              <li>Military families at MacDill AFB seeking new construction (30&ndash;40 min commute)</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Heritage Crest FAQ</h2>
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
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn-preserve/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Preserve</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Heritage Crest? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Heritage Crest</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Heritage Crest?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Heritage Crest Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Heritage Crest?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Heritage Crest, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Heritage Crest Homes for Sale", "item": "https://valricoagent.com/neighborhoods/heritage-crest/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Heritage Crest, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9560, "longitude": -82.2375 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Heritage Crest, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Heritage Crest, Valrico FL",
            "priceCurrency": "USD",
            "price": "400000-500000",
            "url": "https://valricoagent.com/neighborhoods/heritage-crest/",
            "areaServed": { "@type": "Place", "name": "Heritage Crest, Valrico FL" },
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
