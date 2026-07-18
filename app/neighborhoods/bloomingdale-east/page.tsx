'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function BloomingdaleEastPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'bloomingdale-east', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Bloomingdale East?', a: 'Homes in Bloomingdale East typically sell between $350,000 and $500,000. Updated pool homes on larger lots command the upper end. Original-condition homes from the late 1980s start closer to $350K. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is Bloomingdale East in?', a: 'Bloomingdale East is zoned for Alafia Elementary, Burns Middle School, and Bloomingdale High School. Bloomingdale HS is A-rated with a GreatSchools rating of 8/10. School zoning is consistent across this entire section, unlike some other parts of Valrico where boundaries can shift by street.' },
    { q: 'Does Bloomingdale East have an HOA?', a: 'HOA structure varies within Bloomingdale East as part of the broader Bloomingdale community. Some sections have mandatory HOAs while others are voluntary. Call Barrett Henry at (813) 733-7907 for the specific HOA status of any Bloomingdale East property.' },
    { q: 'Is Bloomingdale East a good neighborhood in Valrico?', a: 'Bloomingdale East is ideal for families who want the Bloomingdale HS school zone with larger lots and more privacy than core Bloomingdale sections. The eastern edge location provides a slightly more rural feel while staying close to all Bloomingdale amenities.' },
    { q: 'How far is Bloomingdale East from I-75?', a: 'Bloomingdale East is approximately 7 miles from the I-75 interchange at SR-60 (Brandon Blvd), making it about a 14 to 18 minute drive to the highway. The eastern location adds a couple minutes compared to core Bloomingdale but provides more space and privacy in return.' },
    { q: 'What size are lots in Bloomingdale East?', a: 'Lots in Bloomingdale East tend to be larger than core Bloomingdale, typically quarter-acre to half-acre. The deeper lots appeal to buyers who want backyard space for pools, play areas, or entertaining without feeling crowded by neighbors. Barrett Henry can show you lot dimensions for specific properties.' },
    { q: 'When were Bloomingdale East homes built?', a: 'Homes in Bloomingdale East are primarily concrete block construction from the late 1980s through the 1990s. Many have been updated with modern kitchens, impact windows, and renovated pool areas. The mature oak canopy gives streets a settled, established character.' },
    { q: 'How does Bloomingdale East compare to Bloomingdale proper?', a: 'Bloomingdale East ($350K-$500K) is the eastern edge of the broader Bloomingdale community ($300K-$500K). The East section offers larger lots, deeper backyards, and a more rural transition feel compared to the denser core sections. Both share Bloomingdale HS zoning. The trade-off is a slightly longer drive to I-75 and commercial areas.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Bloomingdale East Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Bloomingdale East sits on the eastern edge of the broader Bloomingdale community in south Valrico (33596). Larger lots, deeper backyards, and mature oaks. Prices from $350K&ndash;$500K. Bloomingdale HS zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Bloomingdale East listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["BLOOMINGDALE EAST"]} heading="Bloomingdale East Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['bloomingdale-east']}
          neighborhoodName="Bloomingdale East"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$500K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Established', 'Larger lots, 1980s\u20131990s'],
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
            <h2 className="font-serif text-2xl mb-4">About Bloomingdale East, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale East sits on the eastern edge of the broader Bloomingdale community in south Valrico (33596). This section transitions from the denser core of Bloomingdale into a slightly more rural feel with larger lots &mdash; typically a quarter-acre to half-acre &mdash; and mature oak canopy that gives the streets a settled, established character you cannot replicate in newer construction.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes here are primarily concrete block construction from the late 1980s through the 1990s. Many have been updated with modern kitchens, impact windows, and renovated pool areas. Screened pools are common and command premiums in this section. The lots tend to be deeper than in core Bloomingdale, which appeals to buyers who want backyard space without paying River Hills or Crestwood Estates prices.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The eastern edge position means slightly less traffic noise and a more peaceful residential atmosphere. Homes face east-facing morning sun in the backyards, which many Florida homeowners prefer for outdoor entertaining in the cooler parts of the day. The trade-off is a couple extra minutes to reach I-75 or the commercial corridor, but most residents consider the added space well worth it.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Bloomingdale East</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale East is zoned for <strong>Alafia Elementary</strong>, <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong> in the Hillsborough County School District. Bloomingdale HS is A-rated with a GreatSchools rating of 8/10 and offers AP courses, Cambridge International curriculum, and competitive athletics.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>School zoning is consistent across the entire Bloomingdale East section, unlike some other parts of Valrico where boundaries can shift by street. This predictability is important for families making a purchase decision based on school access. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale East provides easy access to the Bloomingdale Avenue commercial corridor while offering more residential quiet. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~7 miles / 14&ndash;18 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~21 miles / 30&ndash;42 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~25 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12&ndash;15 minutes</li>
              <li><strong>Lakeland:</strong> ~27 miles / 28&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~28 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Publix, Winn-Dixie, restaurants, and medical offices are all accessible along Bloomingdale Avenue within a few minutes. Lithia Springs Park and Alafia River State Park are closer to Bloomingdale East than to core Bloomingdale, making outdoor recreation more convenient for this section.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>HOA structure varies within Bloomingdale East as part of the broader Bloomingdale community. Some sections have mandatory HOAs, others are voluntary or have no formal association. The diversity of HOA options means buyers can find both deed-restricted and unrestricted properties within the same general area. Barrett Henry can confirm the exact HOA status for any Bloomingdale East address &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Bloomingdale East Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale East offers a distinct feel among south Valrico options:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Lot Size</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Bloomingdale East', '$350K\u2013$500K', '1/4\u20131/2 acre', 'Deeper lots, eastern edge quiet'],
                    ['Bloomingdale Cove', '$375K\u2013$500K', 'Standard', 'Central location, updated interiors'],
                    ['Bloomingdale Oaks', '$350K\u2013$475K', 'Standard', 'Sidewalks, stronger resale identity'],
                    ['Bent Tree Estates', '$375K\u2013$500K', '1/4\u20131/3 acre', 'Mature tree canopy, minimal HOA'],
                  ].map(([name, price, lot, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{lot}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale East&apos;s larger lots and quieter streets set it apart from the core sections. For a more central Bloomingdale experience, look at <Link href="/neighborhoods/bloomingdale-cove/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bloomingdale Cove</Link>. For sidewalks and a denser community feel, check <Link href="/neighborhoods/bloomingdale-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bloomingdale Oaks</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Bloomingdale East Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want the Bloomingdale HS zone with more land and privacy</li>
              <li>Buyers who prefer established neighborhood character with mature trees over newer construction</li>
              <li>Move-up buyers from Brandon apartments or smaller starter homes who need yard space</li>
              <li>Outdoor enthusiasts who want easier access to Lithia Springs Park and Alafia River</li>
              <li>Homeowners who want a semi-rural feel while staying within a recognized community</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Bloomingdale East FAQ</h2>
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
              <Link href="/neighborhoods/bloomingdale-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale-cove/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale Cove</Link> &middot;{' '}
              <Link href="/neighborhoods/bent-tree-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Bent Tree Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn-bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Bloomingdale East? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Bloomingdale East</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Bloomingdale East?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get East Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Bloomingdale East?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from the East section &mdash; not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Bloomingdale East Homes for Sale", "item": "https://valricoagent.com/neighborhoods/bloomingdale-east/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Bloomingdale East, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9438, "longitude": -82.2380 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Bloomingdale East, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Bloomingdale East, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-500000",
            "url": "https://valricoagent.com/neighborhoods/bloomingdale-east/",
            "areaServed": { "@type": "Place", "name": "Bloomingdale East, Valrico FL" },
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
