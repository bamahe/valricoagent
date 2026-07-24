'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';
import Image from 'next/image';

export default function BentTreeEstatesPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'bent-tree-estates', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Bent Tree Estates Valrico?', a: 'Homes in Bent Tree Estates typically sell between $375,000 and $500,000. Prices depend on square footage, lot size, pool status, and the level of interior updates. Updated pool homes on larger lots command the upper end. Contact Barrett Henry at (813) 733-7907 for current Bent Tree Estates pricing.' },
    { q: 'What school zone is Bent Tree Estates in?', a: 'Bent Tree Estates is zoned for Alafia Elementary or Cimino Elementary, Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale HS is A-rated with a GreatSchools rating of 8/10. Barrett Henry can verify the exact school assignment for any address.' },
    { q: 'Does Bent Tree Estates have an HOA?', a: 'Bent Tree Estates has a voluntary or minimal HOA structure typical of established 1990s-era Valrico subdivisions. This means lower monthly costs compared to newer communities with mandatory HOAs. Call Barrett Henry at (813) 733-7907 for current HOA details on any specific property.' },
    { q: 'Is Bent Tree Estates a good neighborhood in Valrico?', a: 'Bent Tree Estates is excellent for families who want quiet streets, mature landscaping, larger lot sizes, and Bloomingdale HS zoning. The established character and tree canopy give it a feel that newer subdivisions cannot replicate. It consistently holds value well in the south Valrico market.' },
    { q: 'How far is Bent Tree Estates from I-75?', a: 'Bent Tree Estates is approximately 6 miles from the I-75 interchange at SR-60 (Brandon Blvd), making it about a 12 to 15 minute drive to the highway. From there, downtown Tampa is roughly 25 to 35 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'What year were Bent Tree Estates homes built?', a: 'Most homes in Bent Tree Estates were built in the 1990s. Construction is primarily concrete block, which is standard for Florida homes of that era. Many homes have been updated with modern kitchens, impact windows, and renovated pool areas since original construction.' },
    { q: 'Are there pools in Bent Tree Estates?', a: 'Yes, screened pools are common in Bent Tree Estates. Many properties feature screened-in pools with extended lanais and generously sized backyards that benefit from the mature tree canopy. Pool homes typically command a $25K-$40K premium over non-pool homes in this section.' },
    { q: 'How does Bent Tree Estates compare to Bloomingdale Oaks?', a: 'Bent Tree Estates ($375K-$500K) offers slightly larger lots and a quieter feel compared to Bloomingdale Oaks ($350K-$475K). Both share Bloomingdale HS zoning. Bloomingdale Oaks has more sidewalks and a denser community feel, while Bent Tree Estates emphasizes space and mature tree coverage. Barrett Henry can walk you through the differences.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Bent Tree Estates Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Bent Tree Estates is an established subdivision in south Valrico (33596) with mature trees, larger-than-average lots, and quiet residential streets. Prices from $375K&ndash;$500K. Bloomingdale HS zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Bent Tree Estates listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" heading="Bent Tree Estates Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['bent-tree-estates']}
          neighborhoodName="Bent Tree Estates"
        />
      </div>

      {/* ===== COMMUNITY PHOTO ===== */}
      {/* Image removed: Bloomingdale Avenue road photo does not belong on Bent Tree Estates page */}

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$375K\u2013$500K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
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
            <h2 className="font-serif text-2xl mb-4">About Bent Tree Estates, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bent Tree Estates is an established subdivision in south Valrico (33596) characterized by mature trees, larger-than-average lot sizes, and quiet residential streets with minimal through-traffic. The neighborhood sits near the Bloomingdale Avenue commercial corridor, giving residents quick access to shopping and dining without the noise of a main road.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes typically range from 1,800 to 3,000 square feet with 3 to 5 bedrooms. Construction dates primarily from the 1990s with concrete block builds that are standard for Florida. Many properties feature screened pools, extended lanais, and generously sized backyards that benefit from the mature tree canopy. The lots here tend to be wider and deeper than what you find in the core Bloomingdale sections, which appeals to buyers who want yard space for kids, pets, or entertaining.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Updated homes with modern kitchens, impact windows, and renovated bathrooms command the higher end of the price range. Original-condition homes with 1990s finishes still sell but at a noticeable discount per square foot. The mature tree canopy provides natural shade that reduces cooling costs, a meaningful advantage in Florida&apos;s 9-month warm season.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Bent Tree Estates</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bent Tree Estates falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong> or <strong>Cimino Elementary</strong> (depending on exact address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale HS is A-rated with a GreatSchools rating of 8/10, offering AP courses, Cambridge International curriculum, and competitive athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The quiet streets and larger lots make Bent Tree Estates particularly popular with families who have young children and want safe outdoor play areas without heavy traffic. The Bloomingdale HS zone adds long-term resale value. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details on how zoning affects pricing.</p>

            {/* Image removed: SR-60 road photo filler does not belong on Bent Tree Estates page */}

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bent Tree Estates sits in south Valrico with convenient access to Bloomingdale Avenue&apos;s retail corridor. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 12&ndash;15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;38 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10&ndash;12 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 30&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Publix, Winn-Dixie, restaurants, and medical offices are all within minutes along Bloomingdale Avenue. HCA Florida Brandon Hospital is accessible via Lithia Pinecrest Road. Lithia Springs Park and Alafia River State Park provide outdoor recreation within a 15-minute drive south.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bent Tree Estates has a voluntary or minimal HOA structure typical of established 1990s-era Valrico subdivisions. This means homeowners enjoy lower monthly costs compared to newer communities with mandatory HOAs and CDD fees. The trade-off is fewer community amenities like pools or clubhouses, but many homes have private pools. Barrett Henry can confirm the exact HOA status for any Bent Tree Estates property, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Bent Tree Estates Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bent Tree Estates is one of several established neighborhoods in south Valrico. Here&apos;s how it stacks up:</p>
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
                    ['Bent Tree Estates', '$375K\u2013$500K', 'Minimal', 'Larger lots, mature tree canopy'],
                    ['Bloomingdale Oaks', '$350K\u2013$475K', 'Varies', 'Sidewalks, denser community feel'],
                    ['Bloomingdale East', '$350K\u2013$500K', 'Varies', 'Eastern edge, deeper lots'],
                    ['Brentwood Hills', '$340K\u2013$475K', 'Yes', 'Community pool, dual ZIP codes'],
                    ['Bloomingdale', '$300K\u2013$500K', 'Mixed', '5,200+ homes, widest selection'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bent Tree Estates stands out for its larger lots and mature canopy. If you want a more walkable community with sidewalks, look at <Link href="/neighborhoods/bloomingdale-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bloomingdale Oaks</Link>. If you want a community pool, consider <Link href="/neighborhoods/brentwood-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Bent Tree Estates Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want quiet streets, mature landscaping, and Bloomingdale HS zoning</li>
              <li>Buyers who prefer larger lots over newer construction with postage-stamp yards</li>
              <li>Homeowners who want minimal HOA restrictions and lower monthly fees</li>
              <li>Move-up buyers from smaller Brandon or Riverview homes who need more space</li>
              <li>Pet owners who want generous backyard space with tree shade</li>
            </ul>

            {/* Image removed: Buckhorn Preserve entrance photo does not belong on Bent Tree Estates page */}

            {/* EEAT author block */}
            <div className="rounded-md p-6 mt-4 mb-6" style={{ background: 'var(--cream-warm)', border: '1px solid var(--border)', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <Image src="/barrett-henry.png" alt="Barrett Henry, Broker Associate at REMAX Collective, Valrico FL" width={72} height={72} style={{ borderRadius: '50%', flexShrink: 0 }} />
              <div>
                <p className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>Barrett Henry, Broker Associate | REMAX Collective</p>
                <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink-soft)' }}>23+ years of Valrico real estate experience including established south Valrico subdivisions, Bloomingdale HS zone pricing, and pool home valuations. MRP, SRS, e-PRO certified. REMAX Hall of Fame 2024. Barrett can pull Bent Tree Estates-specific comps and confirm HOA status for any address. <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
                <p className="text-xs leading-loose" style={{ color: 'var(--ink-soft)' }}>
                  <Link href="/valrico-real-estate/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Real Estate</Link>{' | '}
                  <Link href="/valrico-fl-homes-for-sale/" className="no-underline" style={{ color: 'var(--accent)' }}>Homes for Sale</Link>{' | '}
                  <Link href="/valrico-school-zones/" className="no-underline" style={{ color: 'var(--accent)' }}>School Zones</Link>{' | '}
                  <Link href="/valrico-fl-home-values/" className="no-underline" style={{ color: 'var(--accent)' }}>Home Values</Link>{' | '}
                  <Link href="/valrico-pool-homes/" className="no-underline" style={{ color: 'var(--accent)' }}>Pool Homes</Link>{' | '}
                  <Link href="/sell-my-home-valrico/" className="no-underline" style={{ color: 'var(--accent)' }}>Sell My Home</Link>{' | '}
                  <Link href="/valrico-first-time-homebuyer/" className="no-underline" style={{ color: 'var(--accent)' }}>First-Time Buyers</Link>{' | '}
                  <Link href="/valrico-market-report/" className="no-underline" style={{ color: 'var(--accent)' }}>Market Report</Link>{' | '}
                  <Link href="/neighborhoods/" className="no-underline" style={{ color: 'var(--accent)' }}>All Neighborhoods</Link>{' | '}
                  <Link href="/about/" className="no-underline" style={{ color: 'var(--accent)' }}>About Barrett</Link>
                </p>
              </div>
            </div>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Bent Tree Estates FAQ</h2>
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
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale-east/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale East</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Bent Tree Estates? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Bent Tree Estates</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Bent Tree Estates?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Bent Tree Info'}</button>
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
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 38 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            {/* Selling CTA */}
            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Bent Tree Estates?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section, not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-white block text-center text-sm">Get your home value</Link>
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
              { "@type": "ListItem", "position": 3, "name": "Bent Tree Estates Homes for Sale", "item": "https://valricoagent.com/neighborhoods/bent-tree-estates/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Bent Tree Estates, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9395, "longitude": -82.2410 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Bent Tree Estates, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Bent Tree Estates, Valrico FL",
            "priceCurrency": "USD",
            "price": "375000-500000",
            "url": "https://valricoagent.com/neighborhoods/bent-tree-estates/",
            "areaServed": { "@type": "Place", "name": "Bent Tree Estates, Valrico FL" },
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
