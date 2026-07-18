'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function DiamondHillPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'diamond-hill', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Diamond Hill Valrico?', a: 'Homes in Diamond Hill typically sell between $350,000 and $550,000. Patio homes start around $350K while larger 5-6 bedroom family estates with 3,600+ square feet can exceed $550K. Golf course-fronting lots command a premium. Contact Barrett Henry at (813) 733-7907 for current Diamond Hill pricing.' },
    { q: 'What school zone is Diamond Hill in?', a: 'School zoning varies by specific address within Diamond Hill. Some sections are zoned for Bloomingdale High School while others may feed into Newsome High School. This is critical because school zone directly affects pricing even within the same community. Barrett Henry verifies the exact school assignment for every Diamond Hill address.' },
    { q: 'Does Diamond Hill have an HOA?', a: 'Yes. Diamond Hill is a gated community with a mandatory HOA. The HOA maintains the gated entrance, Olympic-sized pool, fitness center, clubhouse, playground, basketball court, tennis facilities, and common areas. Monthly HOA fees vary by section. Call Barrett Henry at (813) 733-7907 for current fee details.' },
    { q: 'Is Diamond Hill a good neighborhood in Valrico?', a: 'Diamond Hill is one of the most amenity-rich communities in Valrico. The gated entrance, resort-style amenities, and golf course setting give it a country-club atmosphere at a price point well below River Hills. For buyers who want the lifestyle without the seven-figure price tag, Diamond Hill delivers.' },
    { q: 'How far is Diamond Hill from I-75?', a: 'Diamond Hill is approximately 4 miles from the I-75 interchange at SR-60 (Brandon Blvd), about an 8 to 10-minute drive. From I-75, downtown Tampa is roughly 25 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'Does Diamond Hill have a golf course?', a: 'Yes. Diamond Hill Golf Club is a Chic Adams-designed par-72 course stretching 6,920 yards. The course serves as the visual and recreational centerpiece of the community. Golf club membership is separate from HOA dues. Many homes back directly to the course with panoramic fairway and conservation views.' },
    { q: 'What amenities does Diamond Hill offer?', a: 'Diamond Hill features an Olympic-sized pool, fitness center, full clubhouse with event space, playground, basketball court, and tennis facilities. The gated entrance provides 24/7 access control. These resort-style amenities are included in the HOA fee and rival what many private country clubs charge separately.' },
    { q: 'How does Diamond Hill compare to nearby neighborhoods?', a: 'Diamond Hill ($350K\u2013$550K) offers gated golf community living with resort amenities. River Hills ($600K\u2013$1.2M+) is the premium gated golf option with larger lots. Arista ($425K\u2013$575K) has newer gated construction without golf. Crestwood Estates ($500K\u2013$900K) has estate lots with no CDD but no community amenities. Heritage Crest ($400K\u2013$500K) offers new construction in 33594 without golf.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Diamond Hill Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Diamond Hill is a gated golf community centered around the Diamond Hill Golf Club in Valrico (33594). Resort-style amenities, prices from $350K&ndash;$550K. School zone varies by section. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Diamond Hill listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== COMMUNITY PHOTO ===== */}
      <div className="max-w-[1140px] mx-auto px-7 pt-10">
        <Image
          src="/images/neighborhoods/diamond-hill-valrico-fl-entrance.jpg"
          alt="Diamond Hill gated community entrance sign in Valrico FL"
          width={1140}
          height={500}
          className="rounded-xl w-full h-auto"
          priority
        />
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["DIAMOND HILL","DIAMOND HILL PH 1A UNIT 1","DIAMOND HILL PH 1A UNIT 2","DIAMOND HILL PH 2"]} heading="Diamond Hill Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['diamond-hill']}
          neighborhoodName="Diamond Hill"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$550K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Varies', 'High school zone'],
            ['Gated / Golf', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Diamond Hill, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Diamond Hill is the gated golf community that gives Valrico its country-club lifestyle at a fraction of what you would pay in River Hills or South Tampa. Centered around the Diamond Hill Golf Club &mdash; a Chic Adams-designed par-72 course stretching 6,920 yards &mdash; the community wraps approximately 1,300 homes around fairways, conservation areas, and lakes that create an environment more resort than suburb.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from 2-bedroom patio homes starting around $350K to expansive 5-6 bedroom family estates with 3,600+ square feet reaching $550K and above. Many properties back directly to the golf course with unobstructed views of fairways and greens. Construction dates primarily from 2004 to 2006 with newer infill on remaining lots. The variety of home sizes makes Diamond Hill accessible to first-time buyers, growing families, and retirees looking for single-story patio home options.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The amenity package is the standout. Diamond Hill features an Olympic-sized pool, fully equipped fitness center, a clubhouse with event space, playground, basketball court, and tennis facilities. The gated entrance provides 24/7 access control. For buyers who want resort-style amenities inside their neighborhood gates, Diamond Hill delivers a lifestyle that most Valrico communities simply do not offer at this price point.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Diamond Hill</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Diamond Hill sits in the 33594 ZIP code, and school zoning varies by specific address within the community. Some sections are zoned for <strong>Bloomingdale High School</strong> (feeder schools: <strong>Alafia/Cimino Elementary</strong> and <strong>Burns Middle</strong>), while other sections may feed into <strong>Newsome High School</strong> (feeder schools: <strong>Mintz Elementary</strong> and <strong>Mulrennan Middle</strong>).</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>This is not a detail to overlook. School zone affects resale value even within the same gated community. Sections zoned for Newsome HS typically command a measurable premium over sections zoned for Bloomingdale HS. Barrett Henry verifies the exact school assignment for every Diamond Hill address as part of the buying or selling process. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Diamond Hill is centrally located in Valrico with quick access to major corridors. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 8&ndash;10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~18 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~22 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~25 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily essentials are minutes away. Publix, Winn-Dixie, and Walmart are within 2 miles along SR-60 (Brandon Blvd). Restaurants, banks, and medical offices line Lithia Pinecrest Road and Bloomingdale Avenue. The central Valrico location means quick access to both north and south commercial corridors.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Diamond Hill has a mandatory HOA that maintains the gated entrance, Olympic-sized pool, fitness center, clubhouse, playground, basketball court, tennis facilities, and all common areas. Monthly HOA fees vary by section and typically run $150&ndash;$300. Golf club membership is separate from the HOA. Some sections may carry a CDD assessment on the property tax bill. Barrett Henry can pull the exact HOA, CDD, and golf membership costs for any Diamond Hill address &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Diamond Hill Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Diamond Hill is Valrico&apos;s most amenity-rich gated golf community at a mid-range price point. Here&apos;s how it stacks up:</p>
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
                    ['Diamond Hill', '$350K\u2013$550K', 'Yes', 'Golf course, resort amenities, varied home sizes'],
                    ['River Hills', '$600K\u2013$1.2M+', 'Yes', 'Premium golf, larger lots, country club'],
                    ['Arista', '$425K\u2013$575K', 'Yes', 'Newer construction, no golf, modern plans'],
                    ['Heritage Crest', '$400K\u2013$500K', 'No', 'New construction, Newsome HS zone'],
                    ['Crestwood Estates', '$500K\u2013$900K', 'No', 'Estate lots, custom builds, no CDD'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Diamond Hill is the sweet spot for gated golf community living at a mid-range Valrico price. If you want newer construction without golf, <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link> delivers that. If you want the premium golf experience, <Link href="/neighborhoods/river-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills</Link> is the top tier.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Diamond Hill Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Golfers who want a gated community at a price point below River Hills</li>
              <li>Families wanting resort-style amenities (pool, fitness, clubhouse) inside the gates</li>
              <li>Retirees seeking patio home options with full golf course and amenity access</li>
              <li>Buyers who value gated security and community programming</li>
              <li>Military families at MacDill AFB who want gated living with amenities (30&ndash;40 min commute)</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Diamond Hill FAQ</h2>
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
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/heritage-crest/" className="no-underline" style={{ color: 'var(--accent)' }}>Heritage Crest</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Diamond Hill? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Diamond Hill</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Diamond Hill?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Diamond Hill Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Diamond Hill?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Diamond Hill &mdash; not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Diamond Hill Homes for Sale", "item": "https://valricoagent.com/neighborhoods/diamond-hill/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Diamond Hill, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9520, "longitude": -82.2410 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Diamond Hill, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Diamond Hill, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-550000",
            "url": "https://valricoagent.com/neighborhoods/diamond-hill/",
            "areaServed": { "@type": "Place", "name": "Diamond Hill, Valrico FL" },
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
