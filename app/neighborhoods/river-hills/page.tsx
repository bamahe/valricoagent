'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';

export default function RiverHillsPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'river-hills', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in River Hills Valrico?', a: 'Homes in River Hills range from $400,000 to $800,000 or more. Interior lots without golf course views start around $400K, while golf course frontage lots typically command $600K to over $1 million. The community has approximately 1,326 custom-built homes across multiple sections. Contact Barrett Henry at (813) 733-7907 for current River Hills pricing.' },
    { q: 'What school zone is River Hills in?', a: 'River Hills is zoned for Bloomingdale High School in the Hillsborough County School District. The feeder pattern includes area elementary and middle schools. Bloomingdale High is an A-rated school with a GreatSchools rating of 8/10. Barrett Henry can verify the exact school assignment for any River Hills address.' },
    { q: 'Does River Hills have an HOA?', a: 'Yes. River Hills has a mandatory HOA and deed restrictions. The community features a 24/7 guard-gated entrance, community pools, tennis courts, private hiking trails along the Alafia River, and access to the River Hills Country Club dining and social programming. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Is River Hills the best neighborhood in Valrico?', a: 'River Hills is widely considered Valrico\'s premier residential community. The combination of a 24/7 guard gate, 18-hole championship golf course, country club amenities, Alafia River trails, and approximately 1,326 custom-built homes on winding streets with mature oak canopies creates a lifestyle community that is unmatched in the Valrico market.' },
    { q: 'What is the River Hills Country Club?', a: 'River Hills Country Club anchors the community with an 18-hole Joe Lee-designed championship course stretching 7,007 yards. The club offers dining, social events, fitness facilities, and golf memberships. Club membership is separate from the HOA and is optional for residents. Barrett Henry at (813) 733-7907 can provide details on current membership options.' },
    { q: 'Are there trails in River Hills?', a: 'Yes. River Hills features private hiking and nature trails along the Alafia River that are exclusive to community residents. The trails follow natural terrain through oak hammocks and river-adjacent landscape, providing a recreational amenity rarely found in suburban Florida communities.' },
    { q: 'How far is River Hills from I-75?', a: 'River Hills is approximately 7 miles from the I-75 interchange at SR-60 (Brandon Blvd), about a 15-minute drive. Downtown Tampa is roughly 22 miles west via I-75. The community sits in south Valrico near Lithia Pinecrest Road, with Bloomingdale Avenue providing additional access to shopping and services.' },
    { q: 'How does River Hills compare to other premium Valrico neighborhoods?', a: 'River Hills ($400K-$800K+) is the clear premium option in Valrico with its guard gate, golf course, and country club. Bloomingdale ($375K-$600K) offers established homes without a gate. Diamond Hill ($400K-$700K+) has golf proximity but no guard gate or country club. River Hills Masters ($350K-$550K) provides access to River Hills amenities at a lower price point. For the full lifestyle package, River Hills stands alone.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">River Hills Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>River Hills is Valrico&apos;s premier gated golf community, anchored by the River Hills Country Club and its 18-hole Joe Lee-designed championship course. Guard gate, Alafia River trails, and custom homes from $400K&ndash;$800K+. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search River Hills listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["RIVER HILLS / FAIRWAY 01","RIVER HILLS / FAIRWAY ONE","RIVER HILLS COUNTRY CLUB","RIVER HILLS COUNTRY CLUB PARCE","RIVER HILLS COUNTRY CLUB PH"]} heading="River Hills Homes for Sale" />
      </div>

      {/* ===== COMMUNITY ENTRANCE PHOTO ===== */}
      <div className="max-w-[1140px] mx-auto px-7 pt-12 pb-0">
        <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/7' }}>
          <Image
            src="/river-hills-valrico.jpg"
            alt="River Hills community entrance in Valrico, Florida — guard-gated golf community"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
        </div>
        <p className="text-xs mt-2 mb-0" style={{ color: 'var(--ink-muted)' }}>River Hills community entrance — Valrico, FL 33596</p>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$400K\u2013$800K+', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Guard-gated golf', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About River Hills, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>River Hills is the defining luxury community in Valrico &mdash; and there is nothing else quite like it in the broader Brandon/Valrico market. Anchored by the River Hills Country Club and its 18-hole Joe Lee-designed championship course stretching 7,007 yards, the community spans south Valrico with approximately 1,326 custom-built homes behind a 24/7 guard-gated entrance. The streets wind through natural topography under mature oak canopies that feel more like the Carolina Lowcountry than typical Florida suburbs.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The housing stock spans a wide range. Interior lots without golf views start around $400K with 1,800 to 2,500 square feet. Mid-range homes on larger lots or with partial course views run $500K to $700K. Premium golf course frontage properties command $700K to over $1 million, featuring custom architecture, expansive lanais, and direct fairway views. Most homes are concrete block construction built from the 1980s through the 2000s, with custom homebuilding continuing today.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Beyond golf, the community delivers amenities that most Valrico neighborhoods cannot match: private hiking trails along the Alafia River, community pools, tennis courts, and the country club&apos;s dining and social calendar. The guard gate operates around the clock with professional staffing. For buyers who want a complete lifestyle community &mdash; not just a house in a subdivision &mdash; River Hills is the benchmark in this market.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving River Hills</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>River Hills falls within the Hillsborough County School District and is zoned for <strong>Bloomingdale High School</strong>. The feeder pattern includes area elementary schools and <strong>Burns Middle School</strong>. Bloomingdale High is an A-rated school with a GreatSchools rating of 8/10, offering AP courses, dual enrollment, and competitive athletics.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>School zoning is consistent across the entire River Hills community, so you do not need to worry about different sections having different school assignments. This consistency simplifies the home search and ensures every River Hills address carries the same school zone value. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>River Hills sits in south Valrico near Lithia Pinecrest Road. Key commute times from River Hills:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~7 miles / 15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~22 miles / 30&ndash;42 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~25 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~7 miles / 14 minutes</li>
              <li><strong>Lakeland:</strong> ~30 miles / 35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~30 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Avenue and Lithia Pinecrest Road provide access to Publix, restaurants, the Bloomingdale regional library, and medical offices. The south Valrico location is further from I-75 than north Valrico communities, but the tradeoff is the quieter, more secluded feel that defines the River Hills lifestyle.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA, Country Club, and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>River Hills has a mandatory HOA that funds the 24/7 guard gate, community pools, tennis courts, trail maintenance, and common area upkeep. The country club membership is separate and optional &mdash; you can live in River Hills without being a club member, though many residents join for the golf, dining, and social events. HOA fees reflect the premium amenity package. Barrett Henry can break down the exact current HOA fee and country club membership costs &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How River Hills Compares to Other Premium Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>River Hills is the premium benchmark in the Valrico market. Here&apos;s how it compares:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Guard Gate</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['River Hills', '$400K\u2013$800K+', '24/7', 'Golf, country club, trails, pools, tennis'],
                    ['River Hills Masters', '$350K\u2013$550K', '24/7', 'Same gate, lower price, no course views'],
                    ['Bloomingdale', '$375K\u2013$600K', 'No', 'Established, same school zone, no gate'],
                    ['Diamond Hill', '$400K\u2013$700K+', 'No', 'Golf proximity, larger lots, no club'],
                    ['Arista', '$425K\u2013$575K', 'Yes', 'Newer construction, gated, no golf'],
                  ].map(([name, price, gate, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{gate}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>River Hills is the only community in Valrico with a full country club, championship golf, and 24/7 guard gate. If you want the River Hills lifestyle at a lower price, <Link href="/neighborhoods/river-hills-masters/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills Masters</Link> provides access to the same amenities on interior lots. If you want newer construction with a gate, look at <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who River Hills Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Executive buyers who want the premier lifestyle community in Valrico</li>
              <li>Golfers who want to live on or near an 18-hole championship course</li>
              <li>Families who value 24/7 guard-gated security and Bloomingdale HS zoning</li>
              <li>Retirees who want community amenities, trails, and social programming</li>
              <li>Buyers relocating from out of state who want a ready-made lifestyle community</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">River Hills FAQ</h2>
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
              <Link href="/neighborhoods/river-hills-masters/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills Masters</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/lakemont/" className="no-underline" style={{ color: 'var(--accent)' }}>Lakemont</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/kings-mill/" className="no-underline" style={{ color: 'var(--accent)' }}>Kings Mill</Link> &middot;{' '}
              <Link href="/neighborhoods/savannah-landings/" className="no-underline" style={{ color: 'var(--accent)' }}>Savannah Landings</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in River Hills? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About River Hills</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="Golf frontage, interior lot, or price range?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get River Hills Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in River Hills?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Golf frontage, interior, and waterfront comps require local expertise &mdash; not an algorithm.</p>
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
              { "@type": "ListItem", "position": 3, "name": "River Hills Homes for Sale", "item": "https://valricoagent.com/neighborhoods/river-hills/" },
            ],
          },
          {
            "@type": "Place",
            "name": "River Hills, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9340, "longitude": -82.2510 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "River Hills, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in River Hills, Valrico FL",
            "priceCurrency": "USD",
            "price": "400000-800000",
            "url": "https://valricoagent.com/neighborhoods/river-hills/",
            "areaServed": { "@type": "Place", "name": "River Hills, Valrico FL" },
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
