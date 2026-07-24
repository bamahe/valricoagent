'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';
import Image from 'next/image';

export default function BloomingdaleOaksPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'bloomingdale-oaks', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Bloomingdale Oaks?', a: 'Homes in Bloomingdale Oaks typically sell between $350,000 and $475,000. Pool homes command a $20K-$40K premium over non-pool comparables. Updated homes with modern kitchens and bathrooms sell at the higher end. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is Bloomingdale Oaks in?', a: 'Bloomingdale Oaks is zoned for Cimino Elementary, Burns Middle School, and Bloomingdale High School. Bloomingdale HS is A-rated with a GreatSchools rating of 8/10. The consistent school zoning makes this one of the most stable sections for resale value in Valrico.' },
    { q: 'Does Bloomingdale Oaks have an HOA?', a: 'HOA structure in Bloomingdale Oaks follows the broader Bloomingdale community model. Some sections have mandatory HOAs while others are voluntary. Barrett Henry at (813) 733-7907 can confirm the current HOA status and fees for any specific Bloomingdale Oaks property.' },
    { q: 'Is Bloomingdale Oaks a good neighborhood in Valrico?', a: 'Bloomingdale Oaks is one of the most sought-after sub-neighborhoods in Bloomingdale. It is known for sidewalks throughout, strong resale value, and established community character. Pool homes and updated interiors are common. It is a popular choice for families moving up from Brandon.' },
    { q: 'How far is Bloomingdale Oaks from shopping?', a: 'Bloomingdale Oaks is within 2 to 3 minutes of the Bloomingdale Avenue commercial corridor, which includes Publix, Winn-Dixie, CVS, restaurants, and professional services. Brandon Town Center is approximately 5 miles west, about a 10 to 12 minute drive.' },
    { q: 'What size are homes in Bloomingdale Oaks?', a: 'Homes in Bloomingdale Oaks typically range from 1,600 to 2,800 square feet with 3 to 5 bedrooms. Most are single-story concrete block construction from the 1980s and 1990s. Updated homes with granite or quartz countertops, stainless appliances, and LVP flooring are the standard buyers expect.' },
    { q: 'Do Bloomingdale Oaks homes hold their value?', a: 'Bloomingdale Oaks has consistently strong resale metrics. The combination of Bloomingdale HS zoning, sidewalks, community identity, and well-maintained homes creates steady demand. Pool homes in particular hold value well. Barrett Henry can pull comparable sales data for any Bloomingdale Oaks property.' },
    { q: 'How does Bloomingdale Oaks compare to Buckhorn?', a: 'Bloomingdale Oaks ($350K-$475K, Bloomingdale HS) offers established character with sidewalks and mature landscaping. Buckhorn ($350K-$500K, Newsome HS) offers a mix of established and newer construction along the Boyette corridor. The main difference is school zone: Bloomingdale HS vs Newsome HS. Both are A-rated.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Bloomingdale Oaks Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Bloomingdale Oaks is one of the most recognizable and sought-after sub-neighborhoods within the Bloomingdale community in south Valrico (33596). Prices from $350K&ndash;$475K. Bloomingdale HS zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Bloomingdale Oaks listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["BLOOMINGDALE OAKS EXECUTIVE PA"]} heading="Bloomingdale Oaks Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['bloomingdale-oaks']}
          neighborhoodName="Bloomingdale Oaks"
        />
      </div>

      {/* ===== COMMUNITY PHOTO ===== */}
      <div className="max-w-[1140px] mx-auto px-7 pt-10 pb-0">
        <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/7' }}>
          <Image
            src="/images/neighborhoods/valrico-fl-bloomingdale-avenue-td-bank.jpg"
            alt="Bloomingdale Avenue Valrico FL - shopping and services near Bloomingdale Oaks"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1140px) 100vw, 1140px"
          />
        </div>
        <p className="text-xs mt-2 mb-0" style={{ color: 'var(--ink-muted)' }}>Bloomingdale Avenue - daily shopping and services within minutes of Bloomingdale Oaks, Valrico FL 33596</p>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$350K\u2013$475K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Established', 'Sidewalks throughout'],
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
            <h2 className="font-serif text-2xl mb-4">About Bloomingdale Oaks, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Oaks is one of the most recognizable and sought-after sub-neighborhoods within the broader Bloomingdale community. Located in south Valrico (33596), it features well-maintained streets with sidewalks, mature landscaping, and a mix of updated and original homes from the 1980s and 1990s. The sidewalks throughout the neighborhood make it one of the more walkable sections of Bloomingdale, a feature that families with young children consistently value.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Pool homes are especially common here and consistently command a $20K to $40K premium over non-pool comparables. Homes typically range from 1,600 to 2,800 square feet with 3 to 5 bedrooms. Updated kitchens with granite or quartz countertops, stainless appliances, and LVP flooring are the standard buyers expect in this section. Original homes with 1990s finishes still sell but at a measurable discount per square foot.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>What sets Bloomingdale Oaks apart from other Bloomingdale sub-neighborhoods is its name recognition and community identity. Buyers specifically search for &ldquo;Bloomingdale Oaks&rdquo; rather than just &ldquo;Bloomingdale,&rdquo; which creates organic demand that supports resale values. The streets feel cared for, the homes are well-maintained, and the neighborhood has a distinct personality that newer subdivisions struggle to replicate.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Bloomingdale Oaks</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Oaks is zoned for <strong>Cimino Elementary</strong>, <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale HS is A-rated by the Florida Department of Education with a GreatSchools rating of 8/10. The school offers AP courses, Cambridge International curriculum, and competitive athletics programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The consistent school zoning and strong community identity make Bloomingdale Oaks one of the most stable sections for resale value in all of Valrico. Families specifically target this section because the school zone is confirmed and consistent, no boundary surprises. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* SR-60 road image */}
            <div className="relative w-full rounded-lg overflow-hidden my-8" style={{ aspectRatio: '16/7' }}>
              <Image
                src="/images/neighborhoods/valrico-fl-sr-60-brandon-blvd-corridor.jpg"
                alt="SR-60 Brandon Blvd corridor Valrico FL - highway access from Bloomingdale Oaks"
                fill
                className="object-cover"
                sizes="(max-width: 1140px) 100vw, 1140px"
              />
            </div>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Oaks is centrally positioned within the Bloomingdale community with quick access to the commercial corridor. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 12&ndash;15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;38 minutes via I-75 or Selmon</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10&ndash;12 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 30&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Publix, Winn-Dixie, CVS, and a range of restaurants and services are within 2 to 3 minutes along Bloomingdale Avenue. The Lee Roy Selmon Expressway provides a faster route into downtown Tampa during rush hour. HCA Florida Brandon Hospital is a short drive north.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>HOA structure in Bloomingdale Oaks follows the broader Bloomingdale community model, which varies by section. The sidewalks and well-maintained common areas suggest some level of community management. Barrett Henry can confirm the exact HOA status and fees for any specific Bloomingdale Oaks property, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Bloomingdale Oaks Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Oaks is one of the most popular Bloomingdale sections. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Sidewalks</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Bloomingdale Oaks', '$350K\u2013$475K', 'Yes', 'Best name recognition, strong resale'],
                    ['Bloomingdale Cove', '$375K\u2013$500K', 'Partial', 'More updated interiors, central'],
                    ['Bloomingdale East', '$350K\u2013$500K', 'No', 'Larger lots, eastern edge privacy'],
                    ['Buckhorn Bloomingdale', '$300K\u2013$420K', 'No', 'Most affordable in 33596'],
                    ['Brentwood Hills', '$340K\u2013$475K', 'Yes', 'Community pool, dual ZIP codes'],
                  ].map(([name, price, walks, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{walks}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Oaks&apos; sidewalks and strong identity make it a top choice. For a lower entry price in the same school zone, look at <Link href="/neighborhoods/buckhorn-bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Bloomingdale</Link>. For a community pool, check <Link href="/neighborhoods/brentwood-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Bloomingdale Oaks Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want the classic Bloomingdale experience with sidewalks and strong resale value</li>
              <li>Buyers moving up from Brandon rentals or smaller starter homes</li>
              <li>Homeowners who want an established community identity over generic newer construction</li>
              <li>Pool home seekers who want screened pools in a walkable neighborhood</li>
              <li>Professionals commuting to Tampa or Brandon who value reliable school zoning</li>
            </ul>

            {/* Buckhorn Preserve comparison image */}
            <div className="relative w-full rounded-lg overflow-hidden my-8" style={{ aspectRatio: '16/7' }}>
              <Image
                src="/images/neighborhoods/buckhorn-preserve-valrico-fl-entrance-sign.jpg"
                alt="South Valrico FL community entrance - comparing Bloomingdale Oaks to nearby neighborhoods"
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
                <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--ink-soft)' }}>23+ years of Valrico real estate experience including the Bloomingdale Oaks corridor, pool home valuations, and Bloomingdale HS zone pricing. MRP, SRS, e-PRO certified. REMAX Hall of Fame 2024. Barrett knows the price differences between sections inside Bloomingdale Oaks. <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a></p>
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
            <h2 className="font-serif text-2xl mb-6 mt-10">Bloomingdale Oaks FAQ</h2>
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
              <Link href="/neighborhoods/bloomingdale-cove/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale Cove</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale-east/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale East</Link> &middot;{' '}
              <Link href="/neighborhoods/bent-tree-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Bent Tree Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Bloomingdale Oaks? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Bloomingdale Oaks</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Bloomingdale Oaks?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Oaks Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Bloomingdale Oaks?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Bloomingdale Oaks, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Bloomingdale Oaks Homes for Sale", "item": "https://valricoagent.com/neighborhoods/bloomingdale-oaks/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Bloomingdale Oaks, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9405, "longitude": -82.2460 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Bloomingdale Oaks, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Bloomingdale Oaks, Valrico FL",
            "priceCurrency": "USD",
            "price": "350000-475000",
            "url": "https://valricoagent.com/neighborhoods/bloomingdale-oaks/",
            "areaServed": { "@type": "Place", "name": "Bloomingdale Oaks, Valrico FL" },
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
