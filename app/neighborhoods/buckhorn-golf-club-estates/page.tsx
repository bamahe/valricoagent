'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';
import Image from 'next/image';

export default function BuckhornGolfClubEstatesPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'buckhorn-golf-club-estates', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Buckhorn Golf Club Estates?', a: 'Homes in Buckhorn Golf Club Estates typically sell between $350,000 and $550,000. Prices vary based on golf course views, lot size, and interior upgrades. Homes with direct views of Buckhorn Springs Golf & Country Club command a premium. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is Buckhorn Golf Club Estates in?', a: 'Buckhorn Golf Club Estates is zoned for Newsome High School in the Hillsborough County School District. Newsome High is consistently rated among the top public high schools in the Tampa Bay area with an A grade from the Florida Department of Education. Barrett Henry can verify the exact school assignment for any address in the community.' },
    { q: 'Does Buckhorn Golf Club Estates have golf course views?', a: 'Yes. Buckhorn Golf Club Estates offers views of Buckhorn Springs Golf & Country Club, the oldest private golf club in the Brandon/Valrico area (established 1965). Many homes in the community have direct sightlines to the fairways. Living here does not require a golf club membership, but the proximity is a major draw for golf enthusiasts.' },
    { q: 'What is the owner-occupancy rate in Buckhorn Golf Club Estates?', a: 'Buckhorn Golf Club Estates has approximately 82% owner-occupancy, which is above the national average. This means the vast majority of residents are homeowners rather than renters, which typically supports property values, community upkeep, and neighborhood stability. The average household size is 2.8 people.' },
    { q: 'Is Buckhorn Golf Club Estates a good investment?', a: 'Buckhorn Golf Club Estates benefits from Newsome HS zoning, golf course proximity, and high owner-occupancy (82%). These three factors tend to support long-term property values. The $350K-$550K price range also hits the sweet spot for Valrico buyers who want quality without luxury pricing. Call Barrett Henry at (813) 733-7907 for a detailed investment analysis.' },
    { q: 'How far is Buckhorn Golf Club Estates from I-75?', a: 'Buckhorn Golf Club Estates is approximately 5 miles from the I-75 interchange at SR-60 (Brandon Blvd), making it about a 12-minute drive to the highway. From there, downtown Tampa is roughly 30 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'What size homes are in Buckhorn Golf Club Estates?', a: 'Buckhorn Golf Club Estates features medium to large single-family homes with 3 to 5 bedrooms. Most homes were built in the established era of the neighborhood and offer solid construction with mature landscaping. Square footage varies but many homes are in the 1,800 to 3,000+ sqft range.' },
    { q: 'How does Buckhorn Golf Club Estates compare to nearby neighborhoods?', a: 'Buckhorn Golf Club Estates ($350K-$550K) offers golf course views at a mid-range price. Nearby Cimmaron ($450K-$650K) has larger custom homes with no HOA. River Hills ($500K-$1M+) is the luxury gated option. Buckhorn ($350K-$500K) offers similar pricing along the Boyette corridor without golf course proximity.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Buckhorn Golf Club Estates Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Buckhorn Golf Club Estates offers views of Buckhorn Springs Golf &amp; Country Club, the oldest private golf club in the Brandon/Valrico area (est. 1965). Medium to large single-family homes, 3&ndash;5 bedrooms. Prices from $350K&ndash;$550K. Newsome High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Buckhorn Golf Club Estates listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["BUCKHORN GOLF CLUB ESTATES","BUCKHORN GOLF CLUB EST"]} heading="Buckhorn Golf Club Estates Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['buckhorn-golf-club-estates']}
          neighborhoodName="Buckhorn Golf Club Estates"
        />
      </div>

      {/* ===== COMMUNITY PHOTO ===== */}
      <div className="max-w-[1140px] mx-auto px-7 pt-10 pb-0">
        <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/7' }}>
          <Image
            src="/images/neighborhoods/river-hills-golf-country-club-valrico-fl-entrance.jpg"
            alt="Buckhorn Golf Club Estates Valrico FL - golf community entrance in south Valrico"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
        </div>
        <p className="text-xs mt-2 mb-0" style={{ color: 'var(--ink-muted)' }}>Golf community entrance in south Valrico - Buckhorn Golf Club Estates sits adjacent to Buckhorn Springs Golf Club, Valrico FL 33596</p>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$550K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['82%', 'Owner-occupied'],
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
            <h2 className="font-serif text-2xl mb-4">About Buckhorn Golf Club Estates, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Golf Club Estates is an established neighborhood in Valrico (33596) that offers something most subdivisions cannot: views of Buckhorn Springs Golf &amp; Country Club, the oldest private golf club in the Brandon/Valrico area. Founded in 1965, the club has been a landmark for decades, and homes along its perimeter enjoy fairway views and a parklike setting that no new construction can replicate.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>The community features medium to large single-family homes with 3 to 5 bedrooms. Construction is solid, lots are well-maintained, and the mature landscaping provides shade and character. With 82% owner-occupancy and an average household size of 2.8 people, this is a stable, family-oriented neighborhood where residents take pride in their properties.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn Golf Club Estates sits in the Newsome High School zone, one of the most sought-after school assignments in Hillsborough County. Combined with golf course proximity and mid-range pricing ($350K&ndash;$550K), this neighborhood hits a sweet spot for families, professionals, and retirees who want quality living without luxury-tier pricing.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Buckhorn Golf Club Estates</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Golf Club Estates falls within the Hillsborough County School District and is zoned for <strong>Newsome High School</strong>. Newsome High is consistently rated among the top public high schools in the Tampa Bay area, earning an A grade from the Florida Department of Education and a GreatSchools rating of 8/10. The school offers AP courses, dual enrollment, and competitive athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome High School zone is one of the primary drivers of home values in this part of Valrico. Comparable homes inside the Newsome zone consistently sell for more than similar homes zoned for other high schools. For families with school-age children, the zoning adds meaningful value to a Buckhorn Golf Club Estates purchase. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* Bloomingdale Avenue image */}
            <div className="relative w-full rounded-lg overflow-hidden my-8" style={{ aspectRatio: '16/7' }}>
              <Image
                src="/images/neighborhoods/valrico-fl-bloomingdale-avenue-td-bank.jpg"
                alt="Bloomingdale Avenue Valrico FL - daily services corridor near Buckhorn Golf Club Estates"
                fill
                className="object-cover"
                sizes="(max-width: 1140px) 100vw, 1140px"
              />
            </div>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Golf Club Estates is centrally located in Valrico with convenient access to major corridors. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 30&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily essentials are within minutes. Publix, Winn-Dixie, restaurants, and medical offices are all accessible along the Lithia Pinecrest Road and Bloomingdale Avenue corridors. Buckhorn Springs Golf &amp; Country Club is right next door for those who enjoy the game.</p>

            {/* --- Golf Course --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Buckhorn Springs Golf &amp; Country Club</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Established in 1965, Buckhorn Springs Golf &amp; Country Club is the oldest private golf club in the Brandon/Valrico area. The course is an 18-hole layout that has been a community fixture for over 60 years. Living in Buckhorn Golf Club Estates does not require a club membership, but the proximity and views are a significant lifestyle perk. Many residents enjoy watching golfers from their lanais or walking the perimeter paths. The club itself offers memberships for those who want regular access to the course and clubhouse.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Buckhorn Golf Club Estates Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Golf Club Estates is one of several quality neighborhoods in the Valrico area. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Golf Views</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Buckhorn Golf Club Estates', '$350K\u2013$550K', 'Yes', 'Golf course views, 82% owner-occupied'],
                    ['Cimmaron', '$450K\u2013$650K', 'Near', '19 custom homes, no HOA, larger lots'],
                    ['River Hills', '$500K\u2013$1M+', 'Yes', 'Gated luxury, own golf course'],
                    ['Buckhorn', '$350K\u2013$500K', 'No', 'Boyette corridor, newer builds'],
                    ['Durant Oaks', '$375K\u2013$525K', 'No', 'Custom-built, mature landscaping'],
                  ].map(([name, price, golf, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{golf}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn Golf Club Estates offers golf course views at a price point well below <Link href="/neighborhoods/river-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills</Link>, which has its own course but starts at $500K+. If you want larger custom homes nearby without HOA, look at <Link href="/neighborhoods/cimmaron/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Cimmaron</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Buckhorn Golf Club Estates Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Golf enthusiasts who want fairway views without country club membership fees</li>
              <li>Families who want Newsome High School zoning at a mid-range price</li>
              <li>Buyers who prefer established neighborhoods with mature landscaping</li>
              <li>Retirees looking for a quiet community with golf course proximity</li>
              <li>Investors seeking high owner-occupancy (82%) neighborhoods with stable values</li>
            </ul>

            {/* Buckhorn Preserve comparison image */}
            <div className="relative w-full rounded-lg overflow-hidden my-8" style={{ aspectRatio: '16/7' }}>
              <Image
                src="/images/neighborhoods/buckhorn-preserve-valrico-fl-entrance-sign.jpg"
                alt="South Valrico FL community entrance - comparing Buckhorn Golf Club Estates to nearby neighborhoods"
                fill
                className="object-cover"
                sizes="(max-width: 1140px) 100vw, 1140px"
              />
            </div>

            {/* EEAT author block */}
            <div className="rounded-md p-6 mt-4 mb-6" style={{ background: 'var(--cream-warm)', border: '1px solid var(--border)', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <Image src="/barrett-henry.png" alt="Barrett Henry, Broker Associate at REMAX Collective, Valrico FL" width={72} height={72} style={{ borderRadius: '50%', flexShrink: 0 }} />
              <div>
                <p className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>Barrett Henry, Broker Associate | REMAX Collective</p>
                <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink-soft)' }}>23+ years of Valrico real estate experience including golf community pricing in south Valrico and detailed knowledge of Buckhorn Springs Golf Club adjacencies. MRP, SRS, e-PRO certified. REMAX Hall of Fame 2024. Barrett can pull specific Buckhorn Golf Club Estates comps. <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
                <p className="text-xs leading-loose" style={{ color: 'var(--ink-soft)' }}>
                  <Link href="/valrico-real-estate/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Real Estate</Link>{' | '}
                  <Link href="/valrico-fl-homes-for-sale/" className="no-underline" style={{ color: 'var(--accent)' }}>Homes for Sale</Link>{' | '}
                  <Link href="/valrico-school-zones/" className="no-underline" style={{ color: 'var(--accent)' }}>School Zones</Link>{' | '}
                  <Link href="/valrico-fl-home-values/" className="no-underline" style={{ color: 'var(--accent)' }}>Home Values</Link>{' | '}
                  <Link href="/valrico-luxury-homes/" className="no-underline" style={{ color: 'var(--accent)' }}>Luxury Homes</Link>{' | '}
                  <Link href="/sell-my-home-valrico/" className="no-underline" style={{ color: 'var(--accent)' }}>Sell My Home</Link>{' | '}
                  <Link href="/valrico-first-time-homebuyer/" className="no-underline" style={{ color: 'var(--accent)' }}>First-Time Buyers</Link>{' | '}
                  <Link href="/valrico-market-report/" className="no-underline" style={{ color: 'var(--accent)' }}>Market Report</Link>{' | '}
                  <Link href="/neighborhoods/" className="no-underline" style={{ color: 'var(--accent)' }}>All Neighborhoods</Link>{' | '}
                  <Link href="/about/" className="no-underline" style={{ color: 'var(--accent)' }}>About Barrett</Link>
                </p>
              </div>
            </div>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Buckhorn Golf Club Estates FAQ</h2>
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
              <Link href="/neighborhoods/cimmaron/" className="no-underline" style={{ color: 'var(--accent)' }}>Cimmaron</Link> &middot;{' '}
              <Link href="/neighborhoods/durant-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Durant Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/copper-ridge/" className="no-underline" style={{ color: 'var(--accent)' }}>Copper Ridge</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Buckhorn Golf Club Estates? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Buckhorn Golf Club Estates</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Buckhorn Golf Club Estates?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Buckhorn Golf Club Estates Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Buckhorn Golf Club Estates?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Buckhorn Golf Club Estates, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Buckhorn Golf Club Estates Homes for Sale", "item": "https://valricoagent.com/neighborhoods/buckhorn-golf-club-estates/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Buckhorn Golf Club Estates, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9030, "longitude": -82.2660 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Buckhorn Golf Club Estates, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Buckhorn Golf Club Estates, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-550000",
            "url": "https://valricoagent.com/neighborhoods/buckhorn-golf-club-estates/",
            "areaServed": { "@type": "Place", "name": "Buckhorn Golf Club Estates, Valrico FL" },
          },
        ],
      }) }} />

      {/* ===== SCHEMA: FAQPage ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "dateModified": "2026-07-17",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }) }} />
    </>
  );
}
