'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function BuckhornPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'buckhorn', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data --- */
  const faqs = [
    { q: 'How much do homes cost in Buckhorn Valrico?', a: 'Homes in the Buckhorn / Boyette corridor range from $350,000 to $500,000, which is the most affordable entry point into the Newsome HS zone compared to FishHawk Ranch ($450K-$800K+). Contact Barrett Henry at (813) 733-7907 for current Buckhorn pricing.' },
    { q: 'What school zone is Buckhorn in?', a: 'The Buckhorn corridor is zoned for Mintz Elementary, Mulrennan Middle School, and Newsome High School (A-rated, GreatSchools 8/10). Newsome is one of the top-performing high schools in Hillsborough County. Barrett Henry can confirm the school assignment for any Buckhorn address.' },
    { q: 'Does Buckhorn have an HOA?', a: 'HOA varies by subdivision within the Buckhorn corridor. Communities like Buckhorn Preserve and Crosby Crossings have mandatory HOAs, while some older sections do not. This variety means buyers can find both deed-restricted and unrestricted options. Call Barrett Henry at (813) 733-7907 for specific details.' },
    { q: 'Is Buckhorn a good neighborhood in Valrico?', a: 'The Buckhorn corridor is one of Valrico\'s fastest-growing areas, offering Newsome HS zoning at a more accessible price than FishHawk Ranch and without CDD fees in many sections. The mix of established and newer construction gives buyers flexibility. Barrett Henry at (813) 733-7907 is the local expert.' },
    { q: 'How far is Buckhorn from I-75?', a: 'Buckhorn is approximately 5 to 7 miles from the I-75 interchange at SR-60 (Brandon Blvd), making it about a 12 to 16 minute drive to the highway. Boyette Road connects south toward Riverview, providing an alternative route to avoid SR-60 congestion.' },
    { q: 'What is the difference between Buckhorn and FishHawk?', a: 'Buckhorn ($350K-$500K) is the more affordable Newsome HS zone option compared to FishHawk Ranch ($450K-$800K+). Buckhorn offers a mix of construction eras and no CDD fees in many sections. FishHawk is a master-planned community with extensive amenities and mandatory HOA + CDD fees. Both feed into Newsome HS.' },
    { q: 'Are there newer homes in Buckhorn?', a: 'Yes. The Buckhorn corridor includes both established subdivisions from the 1990s-2000s and newer construction communities like Crosby Crossings (2010s-2020s). This gives buyers the option to choose between established character and modern floor plans within the same school zone.' },
    { q: 'How does Buckhorn compare to Bloomingdale?', a: 'Buckhorn ($350K-$500K, Newsome HS) and Bloomingdale ($300K-$500K, Bloomingdale HS) are similar in price but serve different high school zones. Both are A-rated. Buckhorn has more newer construction options. Bloomingdale has the larger inventory (5,200+ homes) and more established character. The choice often comes down to which school zone you prefer.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Buckhorn Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>The Buckhorn / Boyette corridor is one of Valrico&apos;s fastest-growing real estate areas. A mix of established and newer construction with Newsome HS zoning. Prices from $350K&ndash;$500K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Buckhorn listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["BUCKHORN","BUCKHORN FIRST ADD UNIT 2","BUCKHORN FOREST","BUCKHORN GOLF ESTATES PH I","BUCKHORN GROVES","BUCKHORN OAKS UNIT 1","BUCKHORN THIRD ADD UNIT 2","BUCKHORN UNIT 1"]} heading="Buckhorn Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['buckhorn']}
          neighborhoodName="Buckhorn"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$500K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['Growing', 'Boyette corridor'],
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
            <h2 className="font-serif text-2xl mb-4">About Buckhorn / Boyette Corridor, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The Buckhorn and Boyette Road corridor running south from Lithia Pinecrest Road is one of Valrico&apos;s most active and fastest-growing real estate areas. A mix of established subdivisions and newer construction lines this corridor, including Buckhorn Preserve (419 homes with park and trails), Buckhorn Springs Manor (near the golf club), and Crosby Crossings (newer modern construction from the 2010s and 2020s).</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The corridor is zoned for Newsome High School, which is one of the top-performing high schools in Hillsborough County and the primary reason families choose this area. The Buckhorn corridor provides the most affordable entry point into the Newsome HS zone, which is critical for families who prioritize school quality but cannot stretch to FishHawk Ranch pricing ($450K to $800K+). Many Buckhorn sections also avoid the CDD fees that FishHawk buyers pay on top of their HOA fees.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Easy access to both Valrico and Riverview commercial areas means residents are never far from shopping and dining. The corridor has a suburban feel with more space between developments than you find in central Brandon. Boyette Road connects south toward Riverview, and Lithia Pinecrest runs north toward SR-60, creating two reliable commute routes that help distribute traffic.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving the Buckhorn Corridor</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The Buckhorn corridor is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong> (A-rated, GreatSchools 8/10). Newsome is consistently ranked among the top public high schools in the Tampa Bay area, offering AP courses, dual enrollment, and strong athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome zone extends south into FishHawk Ranch and parts of Lithia, which means Buckhorn corridor homes compete for demand with FishHawk buyers. This school zone premium helps Buckhorn properties hold value well over time. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The Buckhorn corridor sits in south Valrico along Boyette Road with access to multiple commute routes. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 12&ndash;16 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~21 miles / 28&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~25 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12&ndash;15 minutes</li>
              <li><strong>Lakeland:</strong> ~27 miles / 28&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~28 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Publix, Winn-Dixie, and restaurants are accessible along Lithia Pinecrest Road and Bloomingdale Avenue. Boyette Road connects south to Riverview&apos;s Big Bend Road commercial corridor, providing an alternative shopping route. Alafia River State Park and Lithia Springs are within a 10 to 15 minute drive south for outdoor recreation.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>HOA structure varies across the Buckhorn corridor. Newer communities like Buckhorn Preserve and Crosby Crossings have mandatory HOAs that maintain parks, trails, and common areas. Some older sections along Boyette Road have no HOA at all. A key advantage over FishHawk Ranch is that many Buckhorn sections do not carry CDD assessments, which can save buyers $1,500 to $3,000+ per year on their property tax bill. Barrett Henry can confirm the exact HOA and CDD status for any Buckhorn property, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Buckhorn Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn occupies a unique position as the affordable Newsome HS zone entry point:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>School</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Buckhorn', '$350K\u2013$500K', 'Newsome HS', 'Affordable Newsome zone, no CDD in many sections'],
                    ['Bloomingdale', '$300K\u2013$500K', 'Bloomingdale HS', '5,200+ homes, established, mixed HOA'],
                    ['Arista', '$425K\u2013$575K', 'Newsome HS', 'Gated, newer construction, premium'],
                    ['Buckhorn Bloomingdale', '$300K\u2013$420K', 'Bloomingdale HS', 'Most affordable, small community'],
                  ].map(([name, price, school, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{school}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn is the best value in the Newsome HS zone. If you want newer gated construction in the same school zone, look at <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link>. If school zone is flexible and you want the widest selection, check <Link href="/neighborhoods/bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bloomingdale</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Buckhorn Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want Newsome HS zoning at a price point below FishHawk Ranch</li>
              <li>First-time move-up buyers coming from Brandon or Riverview apartments</li>
              <li>Buyers who want newer construction options alongside established homes</li>
              <li>Homeowners who want the Newsome zone without CDD fees</li>
              <li>Outdoor enthusiasts who want proximity to Alafia River and Lithia Springs</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Buckhorn FAQ</h2>
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
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn-bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Buckhorn? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Buckhorn</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Buckhorn?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Buckhorn Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Buckhorn?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your Buckhorn section, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Buckhorn Homes for Sale", "item": "https://valricoagent.com/neighborhoods/buckhorn/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Buckhorn / Boyette Corridor, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9340, "longitude": -82.2350 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Buckhorn, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Buckhorn, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-500000",
            "url": "https://valricoagent.com/neighborhoods/buckhorn/",
            "areaServed": { "@type": "Place", "name": "Buckhorn, Valrico FL" },
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
