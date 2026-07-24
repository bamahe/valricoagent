'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';
import Image from 'next/image';

export default function AristaPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'arista', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Arista Valrico?', a: 'Homes in Arista typically sell between $425,000 and $575,000. Prices vary based on square footage, lot position, and upgrades. Arista features newer construction with modern floor plans and upscale finishes. Contact Barrett Henry at (813) 733-7907 for current Arista pricing.' },
    { q: 'What school zone is Arista in?', a: 'Arista is zoned for Mintz Elementary, Mulrennan Middle, and Newsome High School in the Hillsborough County School District. Newsome High is one of the top-rated high schools in the Tampa Bay area. Barrett Henry can verify the exact school assignment for any Arista address.' },
    { q: 'Does Arista have an HOA?', a: 'Yes. Arista is a gated community with a mandatory HOA. The HOA maintains the gated entrance, common areas, and community standards. HOA fees are typically in the $150\u2013$250 per month range. Call Barrett Henry at (813) 733-7907 for current HOA fee details.' },
    { q: 'Is Arista a good neighborhood in Valrico?', a: 'Arista is one of the more premium gated communities in north Valrico. It offers newer construction, modern floor plans, and a secure gated entrance between Diamond Hill Golf Course and Lake Valrico. The Newsome High School zone adds long-term value.' },
    { q: 'How far is Arista from I-75?', a: 'Arista is approximately 4 miles from the I-75 interchange at SR-60 (Brandon Blvd), making it about a 10-minute drive to the highway. From there, downtown Tampa is roughly 25 minutes and Lakeland is about 30 minutes.' },
    { q: 'Are there CDD fees in Arista?', a: 'Some sections of Arista may carry a Community Development District (CDD) assessment in addition to the HOA fee. CDD fees are baked into your property tax bill and typically run $1,000\u2013$2,500 per year. Barrett Henry can pull the exact CDD amount for any specific Arista address.' },
    { q: 'What year were Arista homes built?', a: 'Arista homes were primarily built in the mid-2010s to early 2020s, making them some of the newer construction available in the Valrico 33594 ZIP code. Most homes feature modern open floor plans, granite or quartz countertops, and energy-efficient systems.' },
    { q: 'How does Arista compare to nearby Valrico neighborhoods?', a: 'Arista ($425K\u2013$575K) is a gated, newer-construction alternative to nearby Diamond Hill ($400K\u2013$700K+), Crestwood Estates ($350K\u2013$500K), and Canterbury Oaks ($300K\u2013$425K). Arista offers gated security and more modern floor plans, while Diamond Hill has larger lots and Canterbury Oaks is more affordable.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Arista Homes for Sale, Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Arista is a gated community of newer construction homes between Diamond Hill Golf Course and Lake Valrico in north Valrico (33594). Prices from $425K&ndash;$575K. Newsome High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Arista listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["ARISTA","83P | ARISTA"]} heading="Arista Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['arista']}
          neighborhoodName="Arista"
        />
      </div>

      {/* ===== COMMUNITY PHOTO ===== */}
      <div className="max-w-[1140px] mx-auto px-7 pt-10 pb-0">
        <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/7' }}>
          <Image
            src="/images/neighborhoods/diamond-hill-valrico-fl-entrance.jpg"
            alt="Arista neighborhood north Valrico FL - community entrance near Diamond Hill"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
        </div>
        <p className="text-xs mt-2 mb-0" style={{ color: 'var(--ink-muted)' }}>North Valrico community entrance - Arista is located near Diamond Hill Golf Course, Valrico FL 33594</p>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$425K\u2013$575K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Newsome HS', 'High school zone'],
            ['Gated', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Arista, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Arista is a gated community of sizable homes located between Diamond Hill Golf Course and Lake Valrico in north Valrico (33594). Built primarily from the mid-2010s through the early 2020s, Arista features some of the newest construction available in the Valrico area. The community offers modern open floor plans with upscale finishes including granite or quartz countertops, stainless steel appliances, and energy-efficient systems.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes in Arista range from 3 to 5 bedrooms with approximately 1,800 to 3,200 square feet of living space. The gated entrance provides both real and perceived security value, a meaningful selling point for families and professionals. The location between two of north Valrico&apos;s most recognizable landmarks (the golf course and the lake) provides scenic surroundings without the premium of direct waterfront or golf course frontage.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Most Arista homes were built by regional builders and feature owner&apos;s suites on the first floor, open kitchens, and covered lanais. The community maintains a well-kept appearance through its HOA, which manages the gated entrance, common areas, and landscaping standards. For buyers who want newer construction in Valrico without building from scratch, Arista is one of the top options in the 33594 ZIP code.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Arista</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Arista falls within the Hillsborough County School District and is zoned for <strong>Mintz Elementary</strong>, <strong>Mulrennan Middle School</strong>, and <strong>Newsome High School</strong>. Newsome High is consistently rated among the top public high schools in the Tampa Bay area, earning an A grade from the Florida Department of Education and a GreatSchools rating of 8/10. The school offers AP courses, dual enrollment, and athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Newsome High School zone is one of the primary drivers of home values in north Valrico. Comparable homes inside the Newsome zone consistently sell for more than similar homes zoned for other high schools in the area. For families with school-age children, the zoning alone adds meaningful value to an Arista purchase. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* SR-60 road image */}
            <div className="relative w-full rounded-lg overflow-hidden my-8" style={{ aspectRatio: '16/7' }}>
              <Image
                src="/images/neighborhoods/valrico-fl-sr-60-brandon-blvd-corridor.jpg"
                alt="SR-60 Brandon Blvd corridor Valrico FL - main commute route for Arista residents"
                fill
                className="object-cover"
                sizes="(max-width: 1140px) 100vw, 1140px"
              />
            </div>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Arista sits in north Valrico with convenient access to major corridors. Key commute times from Arista:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~18 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~22 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~25 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Daily essentials are within minutes. Publix, Winn-Dixie, and Walmart are all less than 2 miles away along SR-60 (Brandon Blvd). Restaurants, banks, and medical offices line Lithia Pinecrest Road and Bloomingdale Avenue to the south.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Arista has a mandatory HOA that maintains the gated entrance, common areas, and community appearance standards. Monthly HOA fees typically run $150&ndash;$250 depending on the section. Some sections may also carry a CDD (Community Development District) assessment that appears on your property tax bill, typically $1,000&ndash;$2,500 per year. Barrett Henry can pull the exact HOA and CDD amounts for any specific Arista address, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Arista Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Arista is one of several quality neighborhoods in north Valrico. Here&apos;s how it stacks up:</p>
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
                    ['Arista', '$425K\u2013$575K', 'Yes', 'Newer construction, modern floor plans'],
                    ['Diamond Hill', '$400K\u2013$700K+', 'No', 'Larger lots, golf course proximity'],
                    ['Crestwood Estates', '$350K\u2013$500K', 'No', 'Established, no-CDD, mature landscaping'],
                    ['Canterbury Oaks', '$300K\u2013$425K', 'No', 'More affordable, good starter homes'],
                    ['Wellington', '$375K\u2013$525K', 'Partial', 'Mixed era construction, larger lots'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Arista&apos;s gated entrance and newer construction set it apart from most north Valrico options. If you want the same school zone but a lower price point, <Link href="/neighborhoods/canterbury-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> is worth exploring. If you want more land, look at <Link href="/neighborhoods/diamond-hill/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Diamond Hill</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Arista Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want newer construction in the Newsome High School zone</li>
              <li>Professionals commuting to Tampa or Brandon who want gated security</li>
              <li>Buyers who want modern floor plans without building new</li>
              <li>Downsizers from larger Valrico properties who want low-maintenance living</li>
              <li>Military families stationed at MacDill AFB (30&ndash;40 min commute)</li>
            </ul>

            {/* River Hills comparison image */}
            <div className="relative w-full rounded-lg overflow-hidden my-8" style={{ aspectRatio: '16/7' }}>
              <Image
                src="/images/neighborhoods/river-hills-golf-country-club-valrico-fl-entrance.jpg"
                alt="Valrico FL gated community entrance - comparing Arista to other north Valrico neighborhoods"
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
                <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink-soft)' }}>23+ years of Valrico real estate experience including deep knowledge of Arista's gated sections, CDD fees, and HOA rules. MRP, SRS, e-PRO certified. REMAX Hall of Fame 2024. Barrett can verify current HOA amounts and pull Arista-specific comps before you make an offer. <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
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
            <h2 className="font-serif text-2xl mb-6 mt-10">Arista FAQ</h2>
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
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Arista? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Arista</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Arista?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Arista Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Arista?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your section of Arista, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Arista Homes for Sale", "item": "https://valricoagent.com/neighborhoods/arista/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Arista, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9378, "longitude": -82.2365 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Arista, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Arista, Valrico FL",
            "priceCurrency": "USD",
            "price": "425000-575000",
            "url": "https://valricoagent.com/neighborhoods/arista/",
            "areaServed": { "@type": "Place", "name": "Arista, Valrico FL" },
          },
        ],
      }) }} />

      {/* ===== SCHEMA: FAQPage ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "dateModified": "2026-05-10",
        "mainEntity": faqs.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }) }} />
    </>
  );
}
