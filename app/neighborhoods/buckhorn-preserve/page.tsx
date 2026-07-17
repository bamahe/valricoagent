'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function BuckhornPreservePage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'buckhorn-preserve', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Buckhorn Preserve Valrico?', a: 'Homes in Buckhorn Preserve typically sell between $350,000 and $500,000. Most homes range from 1,700 to 3,000 square feet with 3 to 5 bedrooms. Pricing varies by lot position, upgrades, and whether the home backs to conservation. Contact Barrett Henry at (813) 733-7907 for current Buckhorn Preserve pricing.' },
    { q: 'What school zone is Buckhorn Preserve in?', a: 'Buckhorn Preserve is zoned for Mintz Elementary, Mulrennan Middle School, and Newsome High School in the Hillsborough County School District. Newsome High is consistently rated among the top public high schools in the Tampa Bay area. Barrett Henry can verify the exact school assignment for any Buckhorn Preserve address.' },
    { q: 'Does Buckhorn Preserve have an HOA?', a: 'Yes. Buckhorn Preserve has a mandatory HOA that maintains the community park, playground, disc golf course, pavilions, and walking trails. Monthly HOA fees typically run $100\u2013$200 depending on the section. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Is Buckhorn Preserve a good neighborhood in Valrico?', a: 'Buckhorn Preserve is one of the best-maintained communities in the Buckhorn corridor. It offers modern construction, a dedicated community park with extensive amenities, and the coveted Newsome High School zone. The combination of walkable school access and family-oriented amenities makes it a top pick for families.' },
    { q: 'How far is Buckhorn Preserve from I-75?', a: 'Buckhorn Preserve is approximately 5 miles from the I-75 interchange at SR-60 (Brandon Blvd), which translates to roughly a 12-minute drive. From I-75, downtown Tampa is about 25 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'Are there CDD fees in Buckhorn Preserve?', a: 'Some sections of Buckhorn Preserve may carry a Community Development District (CDD) assessment in addition to the HOA fee. CDD fees appear on your property tax bill and typically run $1,000\u2013$2,000 per year. Barrett Henry can pull the exact CDD amount for any specific Buckhorn Preserve address.' },
    { q: 'What year were Buckhorn Preserve homes built?', a: 'Buckhorn Preserve homes were primarily built from the mid-2000s through the 2010s, making them relatively modern construction by Valrico standards. Most homes feature open floor plans, granite or quartz countertops, and energy-efficient systems that reduce utility costs compared to older Valrico neighborhoods.' },
    { q: 'How does Buckhorn Preserve compare to nearby Valrico neighborhoods?', a: 'Buckhorn Preserve ($350K\u2013$500K) offers newer construction with community park amenities in the Newsome HS zone. Buckhorn Springs Manor ($350K\u2013$550K) has larger lots near the golf club. Canterbury Oaks ($350K\u2013$475K) offers pool and tennis amenities in the Bloomingdale HS zone. Crosby Crossings ($370K\u2013$475K) has similar newer construction but in the Bloomingdale HS zone.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Buckhorn Preserve Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Buckhorn Preserve is a gated newer construction community with dedicated park amenities in the Buckhorn corridor of south Valrico (33596). Prices from $350K&ndash;$500K. Newsome High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Buckhorn Preserve listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["BUCKHORN PRESERVE PH 1","BUCKHORN PRESERVE PH 2","BUCKHORN PRESERVE PH 3","BUCKHORN PRESERVE PHASE 2"]} heading="Buckhorn Preserve Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['buckhorn-preserve']}
          neighborhoodName="Buckhorn Preserve"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$500K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['Gated', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Buckhorn Preserve, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Preserve is one of the most sought-after communities in the Buckhorn corridor of south Valrico (33596). With approximately 419 single-family homes built to modern construction standards, the community stands out for its dedicated park with playground equipment, covered pavilions, a disc golf course, and paved walking trails that wind through conservation areas.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Buckhorn Preserve range from 1,700 to 3,000 square feet with 3 to 5 bedrooms. Floor plans lean toward open-concept living with first-floor owners suites, modern kitchens with granite or quartz countertops, and covered lanais that extend the living space outdoors. Many homes feature conservation or pond views, which add privacy without the premium of waterfront pricing.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The gated entrance provides both real and perceived security value. Inside the gates, the streets are well-maintained with consistent landscaping standards enforced by the HOA. The community park is the centerpiece &mdash; it functions as a gathering point for families, with organized events throughout the year. For buyers who want a neighborhood that feels like a community rather than just a collection of houses, Buckhorn Preserve delivers.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Buckhorn Preserve</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Preserve falls within the Hillsborough County School District and is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong>. Newsome High is consistently rated among the top public high schools in the Tampa Bay area, earning an A grade from the Florida Department of Education.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome High School zone is the single biggest driver of home values in the Buckhorn corridor. Comparable homes inside the Newsome zone sell for meaningfully more than similar properties zoned for other high schools. Mulrennan Middle is within walking distance of Buckhorn Preserve, which eliminates the bus commute for middle school families. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Preserve sits in the heart of south Valrico&apos;s Buckhorn corridor with excellent access to major roads and commercial areas. Key commute times from Buckhorn Preserve:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;38 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 32&ndash;42 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~7 miles / 14 minutes</li>
              <li><strong>Lakeland:</strong> ~27 miles / 32 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 32&ndash;42 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Shopping and daily essentials are close. Publix, Walmart, and restaurants line Lithia Pinecrest Road and Bloomingdale Avenue. The Bloomingdale and Buckhorn commercial corridors offer everything from grocery runs to dining out within a 5-minute drive.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn Preserve has a mandatory HOA that maintains the gated entrance, community park, playground, disc golf course, pavilions, walking trails, and neighborhood appearance standards. Monthly HOA fees typically run $100&ndash;$200 depending on the section. Some sections may also carry a CDD (Community Development District) assessment on the property tax bill, typically $1,000&ndash;$2,000 per year. Barrett Henry can pull the exact HOA and CDD amounts for any specific Buckhorn Preserve address &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Buckhorn Preserve Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Preserve is one of several strong options in the Buckhorn corridor. Here&apos;s how it stacks up:</p>
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
                    ['Buckhorn Preserve', '$350K\u2013$500K', 'Yes', 'Community park, disc golf, walking trails'],
                    ['Buckhorn Springs Manor', '$350K\u2013$550K', 'No', 'Larger lots near golf club'],
                    ['Canterbury Oaks', '$350K\u2013$475K', 'No', 'Pool & tennis, Bloomingdale HS zone'],
                    ['Crosby Crossings', '$370K\u2013$475K', 'No', 'Newer construction, Bloomingdale HS zone'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn Preserve&apos;s gated entrance and community park amenities set it apart from most Buckhorn corridor neighborhoods. If you want larger lots near a golf course, look at <Link href="/neighborhoods/buckhorn-springs-manor/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Springs Manor</Link>. If you prefer a community pool, <Link href="/neighborhoods/canterbury-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> delivers that.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Buckhorn Preserve Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want Newsome HS zoning with modern construction and gated security</li>
              <li>Buyers who value community park amenities &mdash; playground, disc golf, walking trails</li>
              <li>Professionals commuting to Tampa or Brandon who want gated convenience</li>
              <li>Families with middle schoolers &mdash; Mulrennan Middle is walking distance</li>
              <li>Military families stationed at MacDill AFB (32&ndash;42 min commute)</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Buckhorn Preserve FAQ</h2>
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
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Buckhorn Preserve? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Buckhorn Preserve</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Buckhorn Preserve?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Buckhorn Preserve Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Buckhorn Preserve?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Buckhorn Preserve &mdash; not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
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
              { "@type": "ListItem", "position": 3, "name": "Buckhorn Preserve Homes for Sale", "item": "https://valricoagent.com/neighborhoods/buckhorn-preserve/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Buckhorn Preserve, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9412, "longitude": -82.2398 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Buckhorn Preserve, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Buckhorn Preserve, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-500000",
            "url": "https://valricoagent.com/neighborhoods/buckhorn-preserve/",
            "areaServed": { "@type": "Place", "name": "Buckhorn Preserve, Valrico FL" },
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
