'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';
import Image from 'next/image';

export default function BrentwoodHillsPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'brentwood-hills', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data --- */
  const faqs = [
    { q: 'How much do homes cost in Brentwood Hills Valrico?', a: 'Homes in Brentwood Hills typically sell between $340,000 and $475,000. Pricing depends on square footage, updates, pool status, and which section of the community (33594 vs 33596 side). Contact Barrett Henry at (813) 733-7907 for current Brentwood Hills pricing.' },
    { q: 'What school zone is Brentwood Hills in?', a: 'Brentwood Hills is zoned for Bloomingdale High School (A-rated, GreatSchools 8/10). Feeder schools include Alafia or Cimino Elementary and Burns Middle School. Because the community straddles two ZIP codes, Barrett Henry can confirm the exact school assignment for any specific address.' },
    { q: 'Does Brentwood Hills have an HOA?', a: 'Yes, Brentwood Hills has a mandatory HOA that maintains the community pool, common areas, and enforces community standards. The community pool is one of the main draws for families. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Does Brentwood Hills have a community pool?', a: 'Yes. The HOA-maintained community pool is one of Brentwood Hills\' biggest selling points. It provides families a recreation amenity without the cost of maintaining a private pool. During Florida\'s 9-month warm season, the pool sees heavy use from neighborhood families.' },
    { q: 'Is Brentwood Hills in the 33594 or 33596 ZIP code?', a: 'Brentwood Hills straddles both the 33594 and 33596 ZIP codes. Some addresses fall in 33594 (north Valrico) and others in 33596 (south Valrico). This does not affect school zoning, the entire community is in the Bloomingdale HS zone. Barrett Henry can confirm which ZIP code applies to a specific address.' },
    { q: 'How far is Brentwood Hills from I-75?', a: 'Brentwood Hills is approximately 5 to 6 miles from the I-75 interchange at SR-60 (Brandon Blvd), making it about a 10 to 14 minute drive to the highway. The central Valrico location provides good access to both I-75 and the Lee Roy Selmon Expressway.' },
    { q: 'Are there sidewalks in Brentwood Hills?', a: 'Yes. Brentwood Hills features sidewalks throughout the community, which makes it popular with families who have young children. Combined with the community pool and Bloomingdale HS zoning, the sidewalks contribute to the family-oriented character of the neighborhood.' },
    { q: 'How does Brentwood Hills compare to Bloomingdale?', a: 'Brentwood Hills ($340K-$475K) is slightly more affordable than Bloomingdale proper ($300K-$500K upper end) and offers a community pool that most Bloomingdale sub-neighborhoods lack. Both share Bloomingdale HS zoning. Bloomingdale has 5,200+ homes and more variety; Brentwood Hills is smaller and more cohesive with a distinct community identity.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Brentwood Hills Homes for Sale, Valrico FL 33594 / 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Brentwood Hills is a family-oriented community straddling the 33594 and 33596 ZIP codes in Valrico. Community pool, sidewalks throughout, Bloomingdale HS zone. Prices from $340K&ndash;$475K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Brentwood Hills listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["BRENTWOOD HILLS TR A UNIT 2","BRENTWOOD HILLS TR D E UNIT","BRENTWOOD HILLS TRCT A UN 1","BRENTWOOD HILLS TRCT B UN 2"]} heading="Brentwood Hills Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['brentwood-hills']}
          neighborhoodName="Brentwood Hills"
        />
      </div>

      {/* ===== COMMUNITY PHOTO ===== */}
      {/* Image removed: buckhorn-preserve entrance photo does not belong on Brentwood Hills page */}

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$340K\u2013$475K', 'Price range'],
            ['33594 / 33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Community pool', 'HOA amenity'],
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
            <h2 className="font-serif text-2xl mb-4">About Brentwood Hills, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Brentwood Hills is a family-oriented community straddling the 33594 and 33596 ZIP codes in Valrico. The neighborhood features sidewalks throughout, a community pool maintained by the HOA, and proximity to the Bloomingdale Avenue commercial corridor. These three features, sidewalks, pool, and walkable shopping, combine to create one of the most practical family neighborhoods in the Valrico area.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes are primarily single-family with 3 to 5 bedrooms built through the 1990s and 2000s. Construction is typical Florida concrete block with stucco exteriors. Many homes have been updated with modern kitchens, impact-rated windows, and renovated bathrooms. The neighborhood layout keeps traffic slow and residential streets quiet, most streets are cul-de-sacs or loops rather than through roads.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The community sits within walking distance of the Bloomingdale Avenue commercial corridor, giving residents quick access to Publix, Winn-Dixie, restaurants, banks, and professional services without needing a car for every errand. During Florida&apos;s 9-month warm season, the community pool becomes a focal point for families, and the HOA-maintained common areas keep the neighborhood looking consistent and well-kept.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Brentwood Hills</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Brentwood Hills is zoned for <strong>Alafia Elementary</strong> or <strong>Cimino Elementary</strong> (depending on exact address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale HS is A-rated by the Florida Department of Education with a GreatSchools rating of 8/10.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The straddling of two ZIP codes does not affect school zoning, the entire Brentwood Hills community feeds into the Bloomingdale HS zone. Barrett Henry can confirm the exact ZIP and school assignment for any Brentwood Hills address. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* Image removed: Bloomingdale Avenue road photo filler does not belong on Brentwood Hills page */}

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Brentwood Hills&apos; central Valrico position provides balanced access to major commute routes. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 10&ndash;14 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~19 miles / 26&ndash;38 minutes via I-75 or Selmon</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 33&ndash;43 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~4 miles / 8&ndash;12 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 30&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~26 miles / 34&ndash;44 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale Avenue commercial corridor is within walking distance. Publix, Winn-Dixie, CVS, and a range of restaurants and professional services are all within minutes. HCA Florida Brandon Hospital is accessible via Lithia Pinecrest Road to the north. The Lee Roy Selmon Expressway offers a faster Tampa commute during rush hour.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Brentwood Hills has a mandatory HOA that maintains the community pool, common areas, and enforces community standards that keep property values consistent. The pool is the HOA&apos;s primary amenity and a major draw for families. HOA fees cover pool maintenance, common area landscaping, and community management. Barrett Henry can provide the current HOA fee amount for any Brentwood Hills property, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Brentwood Hills Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Brentwood Hills offers a unique combination of amenities at its price point:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Pool</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Brentwood Hills', '$340K\u2013$475K', 'Community', 'Sidewalks + community pool + walkable'],
                    ['Bloomingdale', '$300K\u2013$500K', 'Private only', '5,200+ homes, widest selection'],
                    ['Bloomingdale Oaks', '$350K\u2013$475K', 'Private only', 'Sidewalks, strong resale identity'],
                    ['Buckhorn Bloomingdale', '$300K\u2013$420K', 'No', 'Most affordable in 33596'],
                  ].map(([name, price, pool, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{pool}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Brentwood Hills is the rare Valrico neighborhood that offers a community pool, sidewalks, and Bloomingdale HS zoning together. For more home selection, look at <Link href="/neighborhoods/bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bloomingdale</Link>. For the lowest entry price in the school zone, check <Link href="/neighborhoods/buckhorn-bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Bloomingdale</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Brentwood Hills Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want sidewalks, a community pool, and Bloomingdale HS zoning in one package</li>
              <li>First-time buyers and young families looking for an established community with recreational amenities</li>
              <li>Buyers who prioritize walkable commercial access over large lot size</li>
              <li>Homeowners who want community standards without excessive HOA fees</li>
              <li>Military families stationed at MacDill AFB (33&ndash;43 min commute) who want school stability</li>
            </ul>

            {/* Image removed: SR-60 road photo filler does not belong on Brentwood Hills page */}

            {/* EEAT author block */}
            <div className="rounded-md p-6 mt-4 mb-6" style={{ background: 'var(--cream-warm)', border: '1px solid var(--border)', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <Image src="/barrett-henry.png" alt="Barrett Henry, Broker Associate at REMAX Collective, Valrico FL" width={72} height={72} style={{ borderRadius: '50%', flexShrink: 0 }} />
              <div>
                <p className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>Barrett Henry, Broker Associate | REMAX Collective</p>
                <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink-soft)' }}>23+ years of Valrico real estate experience including Brentwood Hills' dual ZIP code sections, community pool pricing, and the south Valrico 33596 market. MRP, SRS, e-PRO certified. REMAX Hall of Fame 2024. Barrett can tell you which Brentwood Hills section fits your budget. <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
                <p className="text-xs leading-loose" style={{ color: 'var(--ink-soft)' }}>
                  <Link href="/valrico-real-estate/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Real Estate</Link>{' | '}
                  <Link href="/valrico-fl-homes-for-sale/" className="no-underline" style={{ color: 'var(--accent)' }}>Homes for Sale</Link>{' | '}
                  <Link href="/valrico-school-zones/" className="no-underline" style={{ color: 'var(--accent)' }}>School Zones</Link>{' | '}
                  <Link href="/valrico-fl-home-values/" className="no-underline" style={{ color: 'var(--accent)' }}>Home Values</Link>{' | '}
                  <Link href="/valrico-new-construction-homes/" className="no-underline" style={{ color: 'var(--accent)' }}>New Construction</Link>{' | '}
                  <Link href="/sell-my-home-valrico/" className="no-underline" style={{ color: 'var(--accent)' }}>Sell My Home</Link>{' | '}
                  <Link href="/valrico-first-time-homebuyer/" className="no-underline" style={{ color: 'var(--accent)' }}>First-Time Buyers</Link>{' | '}
                  <Link href="/valrico-market-report/" className="no-underline" style={{ color: 'var(--accent)' }}>Market Report</Link>{' | '}
                  <Link href="/neighborhoods/" className="no-underline" style={{ color: 'var(--accent)' }}>All Neighborhoods</Link>{' | '}
                  <Link href="/about/" className="no-underline" style={{ color: 'var(--accent)' }}>About Barrett</Link>
                </p>
              </div>
            </div>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Brentwood Hills FAQ</h2>
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
              <Link href="/neighborhoods/bent-tree-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Bent Tree Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn-bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Brentwood Hills? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Brentwood Hills</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Brentwood Hills?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Brentwood Info'}</button>
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
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 38 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Brentwood Hills?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Brentwood Hills, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Brentwood Hills Homes for Sale", "item": "https://valricoagent.com/neighborhoods/brentwood-hills/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Brentwood Hills, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9455, "longitude": -82.2420 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Brentwood Hills, Valrico FL" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Brentwood Hills, Valrico FL",
            "priceCurrency": "USD",
            "price": "340000-475000",
            "url": "https://valricoagent.com/neighborhoods/brentwood-hills/",
            "areaServed": { "@type": "Place", "name": "Brentwood Hills, Valrico FL" },
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
