'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LakeValricoPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'lake-valrico', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in the Lake Valrico area?', a: 'Homes surrounding Lake Valrico typically sell between $350,000 and $500,000. Waterfront properties with direct lake access command the upper end, while homes on nearby streets without water frontage start closer to $350K. Lot sizes range from a quarter acre to over two acres. Contact Barrett Henry at (813) 733-7907 for current Lake Valrico pricing.' },
    { q: 'What school zone is Lake Valrico in?', a: 'School zoning varies by specific address in the Lake Valrico area since it spans parts of the 33594 ZIP code. Some addresses fall in the Newsome High School zone while others may be zoned differently. Barrett Henry can verify the exact school assignment for any Lake Valrico address at (813) 733-7907.' },
    { q: 'Does the Lake Valrico area have an HOA?', a: 'Most properties surrounding Lake Valrico have no HOA, which is a major draw for buyers who want complete control over their property. No architectural review boards, no restrictions on boats or RVs, and no monthly dues. Some newer pockets near the lake may have deed restrictions. Barrett Henry can confirm HOA status for any address.' },
    { q: 'Is Lake Valrico a good area to buy in Valrico?', a: 'The Lake Valrico area is ideal for buyers who value waterfront living, privacy, larger lots, and freedom from HOA restrictions. Properties retain strong resale value due to the scarcity of lakefront land in the Valrico market. The area has a distinctly rural character compared to the planned subdivisions further south.' },
    { q: 'Can you fish and kayak on Lake Valrico?', a: 'Yes. Lake Valrico supports fishing, kayaking, canoeing, and paddleboarding. The lake is a natural freshwater lake surrounded by residential properties. Waterfront homeowners have direct access from their backyards. The lake adds both lifestyle value and property value to surrounding homes.' },
    { q: 'How far is Lake Valrico from I-75?', a: 'The Lake Valrico area is approximately 3 miles from the I-75 interchange at SR-60 (Brandon Blvd), about an 8-minute drive. Downtown Tampa is roughly 18 miles west via I-75. Daily shopping along SR-60 is within 2 miles of most Lake Valrico properties.' },
    { q: 'What size lots are available around Lake Valrico?', a: 'Lot sizes in the Lake Valrico area range from a quarter acre to over two acres. This is significantly larger than the standard 6,000-8,000 square foot lots found in typical Valrico subdivisions. The larger lots appeal to buyers who want space for pools, workshops, gardens, or simply more privacy between neighbors.' },
    { q: 'How does Lake Valrico compare to nearby neighborhoods?', a: 'Lake Valrico ($350K-$500K) offers waterfront potential and large lots with no HOA. Arista ($425K-$575K) offers gated newer construction. Diamond Hill ($400K-$700K+) has golf course proximity. Crestwood Estates ($350K-$500K) provides established single-family homes. Lake Valrico is the pick for buyers who prioritize land, water, and freedom.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Lake Valrico Area Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>The Lake Valrico area features waterfront and lakefront properties on larger lots in north Valrico (33594). No HOA on most properties, with prices from $350K&ndash;$500K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Lake Valrico listings</Link>
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
            ['Varies', 'High school zone'],
            ['No HOA (most)', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About the Lake Valrico Area, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The Lake Valrico area encompasses the residential properties surrounding Lake Valrico in north Valrico (33594). Unlike the planned subdivisions that define most of Valrico&apos;s housing stock, this area developed organically over decades. The result is a mix of custom-built homes, renovated ranch properties, and occasional new construction &mdash; all united by proximity to one of Valrico&apos;s most recognizable natural features.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Lot sizes here dwarf what you&apos;ll find in typical subdivisions. Quarter-acre parcels are the minimum, and many properties sit on a full acre or more. Waterfront lots with direct lake access represent the premium tier, offering fishing, kayaking, and sunset views from your backyard. Even non-waterfront homes in the area benefit from the quiet, semi-rural character and the absence of HOA restrictions that govern most neighboring communities.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Homes vary widely in size and style &mdash; from modest 1,200 square foot ranch homes to 3,000+ square foot custom builds. Many longtime owners have invested heavily in renovations, so updated kitchens, expanded owners suites, and screened pool enclosures are common. The diversity of housing stock means there is something for nearly every buyer profile, from the young couple wanting acreage to the retiree seeking waterfront tranquility.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving the Lake Valrico Area</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>School zoning in the Lake Valrico area varies by specific address since the area spans a broader section of the 33594 ZIP code. Some properties are zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle</strong>, and <strong>Newsome High School</strong>, while others may feed into different schools depending on their exact location.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Because school zoning is address-specific in this area, verifying the exact assignment before making an offer is essential. Barrett Henry can confirm zoning for any Lake Valrico property &mdash; a detail that directly impacts both livability and resale value. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for an overview of all feeder patterns.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The Lake Valrico area sits in north Valrico with quick access to SR-60 and I-75. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~3 miles / 8 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~18 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~22 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~25 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Despite the semi-rural feel, daily conveniences are close. Publix, Winn-Dixie, and Walmart along SR-60 are within 2 miles. The area balances a countryside atmosphere with suburban accessibility &mdash; something few Valrico neighborhoods can claim.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Most properties in the Lake Valrico area have no HOA. No monthly dues, no architectural review boards, and no restrictions on what you can park in your driveway or build on your lot. This is a significant draw for buyers who value property freedom. A few newer pockets near the lake may carry deed restrictions, so Barrett Henry recommends confirming HOA status on any property before making an offer &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Lake Valrico Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The Lake Valrico area offers a different lifestyle from Valrico&apos;s planned communities. Here&apos;s the comparison:</p>
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
                    ['Lake Valrico', '$350K\u2013$500K', 'No (most)', 'Waterfront lots, large acreage, no HOA'],
                    ['Arista', '$425K\u2013$575K', 'Yes', 'Gated, newer construction, modern floor plans'],
                    ['Diamond Hill', '$400K\u2013$700K+', 'No', 'Golf course proximity, large lots'],
                    ['Crestwood Estates', '$350K\u2013$500K', 'No', 'Established single-family, mature trees'],
                    ['Legends Pass', '$400K\u2013$550K', 'Yes', 'Newer builds, Newsome HS zone'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Lake Valrico stands apart for water access and lot size. If you want a gated community with newer construction, look at <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link>. If you want large lots without water but with golf, explore <Link href="/neighborhoods/diamond-hill/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Diamond Hill</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who the Lake Valrico Area Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Buyers who want waterfront living with fishing and kayaking from their backyard</li>
              <li>Families who want larger lots (half acre to 2+ acres) without HOA restrictions</li>
              <li>Custom home builders looking for buildable waterfront parcels</li>
              <li>Nature lovers who prefer a semi-rural character over subdivision uniformity</li>
              <li>Investors seeking unique properties with strong long-term appreciation</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Lake Valrico Area FAQ</h2>
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
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/legends-pass/" className="no-underline" style={{ color: 'var(--accent)' }}>Legends Pass</Link> &middot;{' '}
              <Link href="/neighborhoods/northwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Northwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes near Lake Valrico? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Lake Valrico</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="Waterfront, lot size, or other preferences?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Lake Valrico Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling Near Lake Valrico?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Waterfront and lakefront comps require local expertise &mdash; not an algorithm.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Lake Valrico Homes for Sale", "item": "https://valricoagent.com/neighborhoods/lake-valrico/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Lake Valrico Area, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9555, "longitude": -82.2310 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Lake Valrico, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Lake Valrico Area, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-500000",
            "url": "https://valricoagent.com/neighborhoods/lake-valrico/",
            "areaServed": { "@type": "Place", "name": "Lake Valrico, Valrico FL" },
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
