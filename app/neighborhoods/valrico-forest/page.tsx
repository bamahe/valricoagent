'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function ValricoForestPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'valrico-forest', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'What do homes cost in Valrico Forest?', a: 'Homes in Valrico Forest typically sell between $400,000 and $525,000. Pricing varies based on lot size (particularly tree coverage and privacy), square footage, and the extent of interior updates. Call Barrett Henry at (813) 733-7907 for current Valrico Forest pricing.' },
    { q: 'What school zone is Valrico Forest in?', a: 'Valrico Forest is zoned for Mintz Elementary, Mulrennan Middle School, and Newsome High School in the Hillsborough County School District. The Newsome HS feeder pattern is one of the strongest in the area. Barrett Henry can confirm exact zoning for any Valrico Forest address.' },
    { q: 'What makes Valrico Forest different from other Valrico neighborhoods?', a: 'Valrico Forest stands out for its heavily wooded lots. Where many Valrico subdivisions were cleared for construction, Valrico Forest preserved significant tree coverage. The result is a canopy-covered neighborhood that feels more rural and private than its suburban surroundings, while still being minutes from shopping and highways.' },
    { q: 'Does Valrico Forest have an HOA?', a: 'Valrico Forest has a homeowners association that maintains community standards. HOA fees vary by section. Contact Barrett Henry at (813) 733-7907 for the exact HOA amount on any specific Valrico Forest property.' },
    { q: 'How far is Valrico Forest from I-75?', a: 'Valrico Forest is approximately 4 miles from the I-75 interchange at SR-60, about a 10-minute drive. Downtown Tampa is roughly 25-30 minutes via I-75, and MacDill AFB is approximately 30-40 minutes depending on traffic.' },
    { q: 'What size are Valrico Forest homes?', a: 'Most Valrico Forest homes range from 1,800 to 3,000 square feet with 3 to 5 bedrooms. The lots tend to be larger than average for the area, with many offering substantial wooded buffers between properties. Owners suites are typically on the first floor.' },
    { q: 'Are there CDD fees in Valrico Forest?', a: 'Most Valrico Forest homes do not carry CDD assessments since the neighborhood was built before CDD-financed infrastructure became standard. This keeps the total monthly carrying cost lower than comparable newer communities. Barrett Henry can verify CDD status for any specific property.' },
    { q: 'How does Valrico Forest compare to Arista?', a: 'Valrico Forest ($400K-$525K) and Arista ($425K-$575K) share the Newsome HS zone and similar pricing. The key difference is character: Valrico Forest offers mature wooded lots with established landscaping, while Arista provides newer construction with modern floor plans behind a gated entrance. Choose Valrico Forest for trees and privacy; choose Arista for newer finishes and gated security.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Forest Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Valrico Forest is a tree-canopied neighborhood of spacious homes on wooded lots in north Valrico (33594). Prices from $400K&ndash;$525K. Newsome High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Valrico Forest listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$400K\u2013$525K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['Wooded lots', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Valrico Forest, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Forest earned its name honestly. This is one of the few Valrico neighborhoods where the developer worked around the existing trees rather than leveling the lots. The result is a community that feels distinctly different from the cleared, sod-covered subdivisions that dominate the area. Live oaks, water oaks, and mature pines create a canopy over the streets and natural privacy screens between properties.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Valrico Forest range from 1,800 to 3,000 square feet across 3 to 5 bedrooms, with lot sizes that tend to be more generous than comparable-price neighborhoods nearby. The floor plans reflect a mix of construction eras, with many homes built in the 1990s and 2000s. You&apos;ll find split bedroom plans, first-floor owners suites, and covered lanais that take advantage of the wooded backyard views. Several homes have been substantially renovated with modern kitchens, updated flooring, and refreshed bathrooms.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The wooded setting creates a neighborhood character that appeals to a specific type of buyer &mdash; someone who values privacy, shade, and a connection to nature over the manicured uniformity of a master-planned community. If you drive through Valrico Forest and feel like you&apos;re somewhere other than suburban Tampa Bay, that&apos;s the point. The trade-off is yard maintenance: mature trees mean more leaves, more shade (less grass growth), and occasional tree trimming. For buyers who embrace that, Valrico Forest delivers an experience that&apos;s hard to find at this price point.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Valrico Forest</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Forest is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong> in the Hillsborough County School District. Newsome High is consistently rated among the top public high schools in the Tampa Bay area, with strong AP and dual enrollment programs, competitive athletics, and an A rating from the Florida DOE.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome zone is a significant value driver in north Valrico &mdash; homes inside this feeder pattern command a premium over comparable properties zoned for other high schools. For Valrico Forest residents, the school zoning adds both quality-of-life value and long-term investment protection. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico school zone guide</Link> for details on all feeder patterns.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Forest is located in north Valrico with access to SR-60 and the I-75 corridor. Despite the wooded setting, you&apos;re not far from anything. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~18 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~22 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~26 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~25 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Groceries, dining, and daily errands are easily handled along SR-60 or Lithia Pinecrest Road, both within a few minutes&apos; drive. Publix, Winn-Dixie, and a variety of restaurants and services are all nearby.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valrico Forest has a homeowners association that maintains community standards and common areas. HOA fees vary by section within the neighborhood. Most properties in Valrico Forest do not carry a CDD assessment, which keeps the overall monthly cost below what you&apos;d pay in newer Valrico communities of similar size and price. For the exact HOA fee on a specific Valrico Forest address, contact Barrett Henry at <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Valrico Forest Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valrico Forest occupies the upper tier of 33594 neighborhoods. Here&apos;s how it stacks up:</p>
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
                    ['Valrico Forest', '$400K\u2013$525K', 'Newsome', 'Wooded lots, natural privacy, mature trees'],
                    ['Arista', '$425K\u2013$575K', 'Newsome', 'Gated, newer construction, modern plans'],
                    ['Valrico Oaks', '$350K\u2013$500K', 'Newsome', 'Lower entry, standard lots, solid mid-range'],
                    ['Valrico Hills', '$325K\u2013$425K', 'Varies', 'More affordable, established homes'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valrico Forest is the pick for buyers who want wooded privacy in the Newsome HS zone. If you prefer newer construction at a similar price, look at <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link>. For a lower entry into the same school zone, <Link href="/neighborhoods/valrico-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link> is the comparison.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Valrico Forest Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want the Newsome High School zone with a private, wooded setting</li>
              <li>Buyers who value mature trees and natural lot buffers over HOA-manicured uniformity</li>
              <li>Professionals commuting to Tampa or Brandon who want a retreat-like home base</li>
              <li>Pet owners and outdoor enthusiasts who want larger, shaded yards</li>
              <li>Anyone who wants a 33594 address with character that newer builds can&apos;t replicate</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Valrico Forest FAQ</h2>
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
              <Link href="/neighborhoods/valrico-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/valri-park/" className="no-underline" style={{ color: 'var(--accent)' }}>Valri Park</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Want to explore Valrico Forest? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Valrico Forest</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="Interested in wooded lots in Valrico Forest?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Valrico Forest Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Valrico Forest?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Comps pulled from your section of Valrico Forest &mdash; not a generic estimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Valrico Forest Homes for Sale", "item": "https://valricoagent.com/neighborhoods/valrico-forest/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Valrico Forest, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9490, "longitude": -82.2385 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Valrico Forest, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Valrico Forest, Valrico FL",
            "priceCurrency": "USD",
            "price": "400000-525000",
            "url": "https://valricoagent.com/neighborhoods/valrico-forest/",
            "areaServed": { "@type": "Place", "name": "Valrico Forest, Valrico FL" },
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
