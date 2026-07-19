'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function CanterburyOaksPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'canterbury-oaks', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Canterbury Oaks Valrico?', a: 'Homes in Canterbury Oaks typically sell between $350,000 and $475,000. Most homes range from 1,500 to 2,600 square feet with 3 to 5 bedrooms. Pricing varies by lot position, pool status, and interior updates. Contact Barrett Henry at (813) 733-7907 for current Canterbury Oaks pricing.' },
    { q: 'What school zone is Canterbury Oaks in?', a: 'Canterbury Oaks is zoned for Alafia Elementary (or Cimino Elementary depending on address), Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale High is a well-regarded public high school. Barrett Henry can verify the exact school assignment for any Canterbury Oaks address.' },
    { q: 'Does Canterbury Oaks have an HOA?', a: 'Yes. Canterbury Oaks has a mandatory HOA that maintains the community pool, tennis courts, common areas, and enforces architectural standards. Monthly HOA fees typically run $75\u2013$175, which includes pool and tennis access. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Is Canterbury Oaks a good neighborhood in Valrico?', a: 'Canterbury Oaks is one of the most established and well-maintained communities in south Valrico. The community pool, tennis courts, and active HOA keep property values stable. The Bloomingdale High School zone and central location add long-term appeal for families.' },
    { q: 'How far is Canterbury Oaks from I-75?', a: 'Canterbury Oaks is approximately 4 miles from the I-75 interchange at SR-60 (Brandon Blvd), about an 8 to 10-minute drive. From I-75, downtown Tampa is roughly 25 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'Does Canterbury Oaks have a community pool?', a: 'Yes. Canterbury Oaks features a community pool and tennis courts maintained by the HOA. Pool and tennis access is included in the monthly HOA fee. The pool area serves as a social hub for the community, particularly during summer months. Barrett Henry at (813) 733-7907 can provide details on current amenity access.' },
    { q: 'What year were Canterbury Oaks homes built?', a: 'Canterbury Oaks homes were primarily built in the mid-1990s through early 2000s. The construction is well-established with mature landscaping throughout the community. Many homeowners have updated kitchens, bathrooms, and flooring over the years, so the level of renovation varies property to property.' },
    { q: 'How does Canterbury Oaks compare to nearby neighborhoods?', a: 'Canterbury Oaks ($350K\u2013$475K) offers pool and tennis amenities in the Bloomingdale HS zone. Crosby Crossings ($370K\u2013$475K) has newer construction in the same school zone but without pool amenities. Buckhorn Preserve ($350K\u2013$500K) has community park amenities in the Newsome HS zone. Duncan Groves ($350K\u2013$450K) is a more affordable option in the Bloomingdale zone.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Canterbury Oaks Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Canterbury Oaks is an established community with pool and tennis amenities in south Valrico (33596). Prices from $350K&ndash;$475K. Bloomingdale High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Canterbury Oaks listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" heading="Canterbury Oaks Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['canterbury-oaks']}
          neighborhoodName="Canterbury Oaks"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$475K', 'Price range'],
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
            <h2 className="font-serif text-2xl mb-4">About Canterbury Oaks, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Canterbury Oaks is one of south Valrico&apos;s most well-rounded established communities. Tucked into the 33596 ZIP code, the neighborhood delivers something many Valrico subdivisions lack, a community pool and tennis courts maintained through the HOA. For families who want recreational amenities without a private club membership, Canterbury Oaks checks that box at a mid-range price point.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Canterbury Oaks range from 1,500 to 2,600 square feet with 3 to 5 bedrooms. Built primarily in the mid-1990s through early 2000s, the homes feature traditional Florida floor plans with split bedroom layouts, tile roofs, and screened lanais. The community has a settled, well-maintained appearance driven by consistent HOA standards. Curb appeal is uniform throughout, which protects property values across the board.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Many Canterbury Oaks homes have been updated over the years with modern kitchens, quartz countertops, and luxury vinyl plank flooring. Pool homes are available but represent a smaller portion of the inventory. The lots are standard suburban size with enough room for screened pool additions. For buyers who want a proven, established neighborhood with active community amenities, Canterbury Oaks remains one of south Valrico&apos;s strongest options under $475K.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Canterbury Oaks</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Canterbury Oaks falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong> (or <strong>Cimino Elementary</strong> depending on the specific address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale High is a well-regarded public high school with strong academics, athletics, and extracurricular programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale High School zone covers much of south Valrico and portions of the Bloomingdale area. While the Newsome zone commands the highest premium, the Bloomingdale zone still drives solid home values and is preferred by many families for its location and school offerings. Barrett Henry can verify the exact school assignment for any Canterbury Oaks address. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Canterbury Oaks is centrally located in south Valrico with quick access to commercial corridors in multiple directions. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 8&ndash;10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~19 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12 minutes</li>
              <li><strong>Lakeland:</strong> ~26 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~26 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Everyday shopping is close. Publix, Winn-Dixie, and Walmart are within a few minutes along Bloomingdale Avenue and Lithia Pinecrest Road. The Bloomingdale commercial corridor provides restaurants, banks, medical offices, and retail within a short drive.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Canterbury Oaks has a mandatory HOA that maintains the community pool, tennis courts, common areas, and neighborhood appearance standards. Monthly HOA fees typically run $75&ndash;$175, which includes access to the pool and tennis facilities. Canterbury Oaks does not carry CDD fees, keeping the total monthly cost of ownership lower than many newer Valrico developments. Barrett Henry can confirm the exact HOA fee for any Canterbury Oaks property, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Canterbury Oaks Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Canterbury Oaks is one of the best amenity-driven communities in south Valrico at its price point. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Pool/Tennis</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Canterbury Oaks', '$350K\u2013$475K', 'Yes', 'Community pool & tennis, Bloomingdale HS'],
                    ['Crosby Crossings', '$370K\u2013$475K', 'No', 'Newer construction, Bloomingdale HS zone'],
                    ['Buckhorn Preserve', '$350K\u2013$500K', 'No', 'Gated, community park, Newsome HS zone'],
                    ['Duncan Groves', '$350K\u2013$450K', 'No', 'More affordable, near parks and trails'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Canterbury Oaks is the go-to for pool and tennis amenities in south Valrico. If you want newer construction in the same school zone, <Link href="/neighborhoods/crosby-crossings/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Crosby Crossings</Link> offers that. If you want gated security with the Newsome HS zone, <Link href="/neighborhoods/buckhorn-preserve/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Preserve</Link> is the move.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Canterbury Oaks Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want community pool and tennis access included in their HOA</li>
              <li>Buyers seeking established neighborhoods with predictable property standards</li>
              <li>First-time buyers entering the south Valrico market under $475K</li>
              <li>Professionals who want a short commute to I-75 and Brandon commercial areas</li>
              <li>Military families stationed at MacDill AFB (30&ndash;40 min commute)</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Canterbury Oaks FAQ</h2>
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
              <Link href="/neighborhoods/buckhorn-preserve/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Preserve</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Canterbury Oaks? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Canterbury Oaks</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Canterbury Oaks?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Canterbury Oaks Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Canterbury Oaks?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Canterbury Oaks, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Canterbury Oaks Homes for Sale", "item": "https://valricoagent.com/neighborhoods/canterbury-oaks/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Canterbury Oaks, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9445, "longitude": -82.2352 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Canterbury Oaks, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Canterbury Oaks, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-475000",
            "url": "https://valricoagent.com/neighborhoods/canterbury-oaks/",
            "areaServed": { "@type": "Place", "name": "Canterbury Oaks, Valrico FL" },
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
