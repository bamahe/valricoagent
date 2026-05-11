'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ValricoOaksPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'valrico-oaks', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'What do homes cost in Valrico Oaks?', a: 'Valrico Oaks homes typically sell between $350,000 and $500,000. The range reflects differences in square footage, lot position, and renovation level. Updated homes with modern kitchens and owners suites push toward the top of the range. Call Barrett Henry at (813) 733-7907 for current Valrico Oaks pricing.' },
    { q: 'What school zone is Valrico Oaks in?', a: 'Valrico Oaks is zoned for Mintz Elementary, Mulrennan Middle School, and Newsome High School in the Hillsborough County School District. Newsome High is one of the top-rated high schools in the Tampa Bay area with strong academics and athletics. Barrett Henry can confirm school zoning for any Valrico Oaks address.' },
    { q: 'Does Valrico Oaks have an HOA?', a: 'Valrico Oaks has a homeowners association that maintains community standards. HOA fees vary by section within the neighborhood. Contact Barrett Henry at (813) 733-7907 for the current HOA fee on any Valrico Oaks property.' },
    { q: 'How does Valrico Oaks compare to Valrico Forest?', a: 'Both share the Newsome HS zone and the 33594 ZIP code. Valrico Oaks ($350K-$500K) offers a lower entry point than Valrico Forest ($400K-$525K). Valrico Forest is distinguished by its heavily wooded lots, while Valrico Oaks has more standard lot layouts. Choose Valrico Oaks for value in the Newsome zone; choose Valrico Forest for wooded privacy.' },
    { q: 'How far is Valrico Oaks from I-75?', a: 'Valrico Oaks is approximately 4 miles from the I-75 interchange at SR-60 (Brandon Blvd), roughly a 10-minute drive. From I-75, downtown Tampa is about 25-30 minutes and MacDill AFB is roughly 30-40 minutes depending on traffic.' },
    { q: 'What size are homes in Valrico Oaks?', a: 'Most Valrico Oaks homes range from 1,600 to 2,800 square feet with 3 to 5 bedrooms. Floor plans vary from traditional split-bedroom ranch layouts to two-story designs. Owners suites are generally on the first floor, and many homes feature screened lanais and fenced backyards.' },
    { q: 'When was Valrico Oaks built?', a: 'Valrico Oaks homes were built primarily during the 1990s and 2000s. The neighborhood has a mature feel with established landscaping but the homes are not so old that major systems are nearing end-of-life. Many have been updated with modern finishes while retaining solid block construction.' },
    { q: 'Is Valrico Oaks a good investment?', a: 'Valrico Oaks benefits from the Newsome High School zone, which consistently drives demand in north Valrico. The 33594 ZIP code is desirable, and the neighborhood offers a lower entry point than premium Newsome-zone options like Arista or Diamond Hill. These fundamentals support strong resale and steady appreciation.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Oaks Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Valrico Oaks is a well-positioned neighborhood in the Newsome High School zone offering solid homes at competitive prices in Valrico (33594). Prices from $350K&ndash;$500K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Valrico Oaks listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$500K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
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
            <h2 className="font-serif text-2xl mb-4">About Valrico Oaks, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Oaks offers one of the most straightforward value propositions in north Valrico: Newsome High School zoning at a price point that undercuts the premium communities in the same feeder pattern. While neighborhoods like Arista and Diamond Hill command $425K+ for the Newsome zone, Valrico Oaks starts in the mid-$300s &mdash; making it the accessible entry point to one of the area&apos;s most sought-after school assignments.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Valrico Oaks range from 1,600 to 2,800 square feet with 3 to 5 bedrooms. Most were built during the 1990s and 2000s, placing them in a construction sweet spot &mdash; old enough to have mature landscaping and established character, new enough that major systems (roof, HVAC, plumbing) aren&apos;t all reaching end-of-life simultaneously. Block construction is standard, and floor plans include both single-story ranch layouts and two-story designs with first-floor owners suites.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The neighborhood has a straightforward, no-frills quality that appeals to practical buyers. Streets are established and well-maintained. Lots are standard suburban sizes with fenced backyards and screened lanais on many homes. You won&apos;t find a resort-style pool or a staffed gatehouse, but you also won&apos;t pay the HOA and CDD premiums that come with those amenities. For buyers who want the Newsome zone and would rather put their money into the house than into community fees, Valrico Oaks hits the mark.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Valrico Oaks</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Oaks is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong> through the Hillsborough County School District. Newsome High consistently earns an A grade from the Florida Department of Education and is rated 8/10 by GreatSchools. The school offers a full slate of AP courses, dual enrollment with local colleges, and competitive athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome zone is the primary demand driver for Valrico Oaks. Homes inside this feeder pattern consistently sell for more than comparable homes outside it. For families making school zoning a top priority, Valrico Oaks provides Newsome access without the premium pricing of gated or newer-construction alternatives. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico school zone guide</Link> for the full breakdown.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Oaks is located in north Valrico with convenient access to SR-60 and I-75. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~18 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~22 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~25 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily errands are handled quickly along SR-60 (Brandon Blvd) where Publix, Winn-Dixie, Walmart, and a full range of retailers sit within a 5-minute drive. Lithia Pinecrest Road provides an alternative route south toward Bloomingdale Avenue and the FishHawk corridor.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valrico Oaks has a homeowners association that enforces community standards including yard maintenance, exterior appearance, and parking rules. HOA fees vary by section. Most homes in Valrico Oaks do not carry a CDD (Community Development District) assessment, which keeps total monthly costs notably lower than newer Newsome-zone communities that were built with CDD financing. For the exact HOA fee on a specific Valrico Oaks address, call Barrett Henry at <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Valrico Oaks Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Oaks is the value entry point to the Newsome HS zone. Here&apos;s a comparison:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>High School</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Valrico Oaks', '$350K\u2013$500K', 'Newsome', 'Value entry to Newsome zone, no CDD'],
                    ['Valrico Forest', '$400K\u2013$525K', 'Newsome', 'Wooded lots, natural privacy setting'],
                    ['Arista', '$425K\u2013$575K', 'Newsome', 'Gated, newer construction, modern plans'],
                    ['Valrico Hills', '$325K\u2013$425K', 'Varies', 'Lower entry, school zone not guaranteed'],
                  ].map(([name, price, hs, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{hs}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valrico Oaks is the smart pick when Newsome HS zoning is non-negotiable and budget matters. For a woodsier setting at a step up, consider <Link href="/neighborhoods/valrico-forest/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico Forest</Link>. For newer construction with gated access, <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link> is the upgrade.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Valrico Oaks Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who prioritize Newsome High School zoning but want to control costs</li>
              <li>Buyers who prefer established neighborhoods without CDD assessments</li>
              <li>Professionals commuting to Tampa, Brandon, or MacDill who want the 33594 ZIP</li>
              <li>Move-up buyers from smaller homes in the area looking for more space</li>
              <li>Investors targeting the Newsome zone for strong rental and resale demand</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Valrico Oaks FAQ</h2>
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
              <Link href="/neighborhoods/valrico-forest/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Forest</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/valri-park/" className="no-underline" style={{ color: 'var(--accent)' }}>Valri Park</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Exploring Valrico Oaks? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Valrico Oaks</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="Looking for Newsome HS zone homes?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Valrico Oaks Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Valrico Oaks?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Comps from your section of Valrico Oaks &mdash; not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Valrico Oaks Homes for Sale", "item": "https://valricoagent.com/neighborhoods/valrico-oaks/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Valrico Oaks, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9465, "longitude": -82.2350 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Valrico Oaks, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Valrico Oaks, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-500000",
            "url": "https://valricoagent.com/neighborhoods/valrico-oaks/",
            "areaServed": { "@type": "Place", "name": "Valrico Oaks, Valrico FL" },
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
