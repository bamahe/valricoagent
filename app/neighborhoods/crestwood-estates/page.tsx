'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function CrestwoodEstatesPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'crestwood-estates', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'How much do homes cost in Crestwood Estates Valrico?', a: 'Homes in Crestwood Estates typically sell between $500,000 and $900,000, with some properties exceeding $900K. These are custom-built estate homes on lots that often exceed half an acre, ranging from 2,500 to 5,000+ square feet. Contact Barrett Henry at (813) 733-7907 for current Crestwood Estates listings.' },
    { q: 'What school zone is Crestwood Estates in?', a: 'Crestwood Estates is zoned for Alafia Elementary (or Cimino Elementary depending on address), Burns Middle School, and Bloomingdale High School in the Hillsborough County School District. Bloomingdale High has strong academics and athletics programs. Barrett Henry can verify the exact school assignment for any address.' },
    { q: 'Does Crestwood Estates have an HOA?', a: 'Crestwood Estates has a minimal HOA structure compared to newer developments. The key differentiator is no CDD fees, which saves homeowners $1,000\u2013$2,500+ per year compared to newer communities. Call Barrett Henry at (813) 733-7907 for specific HOA details on any Crestwood Estates property.' },
    { q: 'Is Crestwood Estates a good neighborhood in Valrico?', a: 'Crestwood Estates is one of the most exclusive residential areas in Valrico. Estate-sized lots, custom-built homes, no CDD fees, and mature landscaping make it the premier option for buyers who want space, privacy, and premium construction without the constraints of a heavily-managed HOA.' },
    { q: 'How far is Crestwood Estates from I-75?', a: 'Crestwood Estates is approximately 4 miles from the I-75 interchange at SR-60 (Brandon Blvd), about an 8 to 10-minute drive. From I-75, downtown Tampa is roughly 25 minutes and Lakeland is about 30 minutes via I-4.' },
    { q: 'Are there CDD fees in Crestwood Estates?', a: 'No. Crestwood Estates does not have CDD fees, which is a major cost advantage over newer Valrico developments. CDD assessments in newer communities can add $1,000 to $2,500+ per year to the property tax bill. This absence of CDD makes Crestwood Estates more affordable on a monthly basis than the purchase price alone suggests.' },
    { q: 'How large are the lots in Crestwood Estates?', a: 'Lots in Crestwood Estates frequently exceed half an acre, with some approaching a full acre. These are among the largest residential lots available in suburban Valrico. The generous lot sizes provide privacy, room for pools, outdoor kitchens, and setbacks from neighbors that are impossible to find in newer construction.' },
    { q: 'How does Crestwood Estates compare to nearby neighborhoods?', a: 'Crestwood Estates ($500K\u2013$900K) is the premium estate option in south Valrico with the largest lots and no CDD. River Hills ($600K\u2013$1.2M+) is the gated luxury alternative with golf amenities. Diamond Hill ($350K\u2013$550K) offers gated golf living at a lower price. Buckhorn Springs Manor ($350K\u2013$550K) has larger lots near the golf club at a lower entry point.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Crestwood Estates Homes for Sale, Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Crestwood Estates is one of Valrico&apos;s most exclusive residential areas, featuring estate-sized lots and custom-built homes in south Valrico (33596). Prices from $500K&ndash;$900K+. Bloomingdale High School zone. No CDD fees. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Crestwood Estates listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" heading="Crestwood Estates Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['crestwood-estates']}
          neighborhoodName="Crestwood Estates"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$500K\u2013$900K+', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Estate / Luxury', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Crestwood Estates, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Crestwood Estates is the kind of neighborhood that serious buyers discover when they realize they want more than what typical Valrico subdivisions offer. Located in south Valrico (33596), this exclusive enclave features estate-sized lots, many exceeding half an acre, with custom-built homes that range from upscale family residences to properties approaching and exceeding $900,000.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from 2,500 to 5,000+ square feet with custom layouts, premium finishes, and generous setbacks from the street. Unlike cookie-cutter developments, each home in Crestwood Estates has its own architectural identity. You will find custom tile work, upgraded cabinetry, owners suites with sitting areas and spa-style bathrooms, and outdoor living spaces that take full advantage of the oversized lots, resort-style pools, outdoor kitchens, and screened enclosures are common.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>A defining advantage of Crestwood Estates is the absence of CDD fees. Newer Valrico developments routinely tack on $1,000 to $2,500+ per year in CDD assessments on top of property taxes. Crestwood Estates avoids that entirely, which makes the effective cost of ownership more competitive than the sticker price suggests. Mature oak canopy, established landscaping, and the privacy of oversized lots give Crestwood Estates an atmosphere that takes decades to develop, something no new construction can replicate.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Crestwood Estates</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Crestwood Estates falls within the Hillsborough County School District and is zoned for <strong>Alafia Elementary</strong> (or <strong>Cimino Elementary</strong> depending on address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale High offers strong AP coursework, athletics, and a variety of extracurricular programs.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The Bloomingdale High School zone supports strong property values throughout south Valrico. For families considering Crestwood Estates, the school zone combined with the estate lot sizes creates a value proposition that competes directly with the best sections of River Hills and FishHawk Ranch at a different price-to-space ratio. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Crestwood Estates is positioned in south Valrico with access to both the Bloomingdale and Buckhorn commercial corridors. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~4 miles / 8&ndash;10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~19 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~23 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12 minutes</li>
              <li><strong>Lakeland:</strong> ~26 miles / 30 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~26 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Despite its estate feel, Crestwood Estates is not remote. Publix, Winn-Dixie, and dining options along Bloomingdale Avenue are minutes away. The location delivers the privacy of estate living with the convenience of suburban commercial access, a combination that is hard to find in Hillsborough County.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Crestwood Estates has a minimal HOA structure that maintains basic community standards without the heavy restrictions of newer developments. Monthly HOA fees are modest. The standout financial advantage is zero CDD fees, a savings of $1,000&ndash;$2,500+ per year compared to newer Valrico communities. This no-CDD status makes Crestwood Estates more cost-effective on a monthly basis than many properties priced $100K&ndash;$200K lower. Barrett Henry can confirm exact HOA details for any Crestwood Estates property, call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Crestwood Estates Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Crestwood Estates occupies the premium tier of south Valrico real estate. Here&apos;s how it stacks up:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>CDD</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Crestwood Estates', '$500K\u2013$900K+', 'No', 'Estate lots, custom builds, no CDD'],
                    ['River Hills', '$600K\u2013$1.2M+', 'No', 'Gated golf community, country club'],
                    ['Diamond Hill', '$350K\u2013$550K', 'Varies', 'Gated golf community, smaller lots'],
                    ['Buckhorn Springs Manor', '$350K\u2013$550K', 'No', 'Larger lots, golf club proximity'],
                  ].map(([name, price, cdd, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{cdd}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>For buyers who want the largest lots and most privacy in Valrico without country club dues, Crestwood Estates is the clear choice. If you want gated golf community amenities, <Link href="/neighborhoods/river-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills</Link> or <Link href="/neighborhoods/diamond-hill/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> deliver that at different price points.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Crestwood Estates Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Executive buyers and professionals who want estate-level privacy in Valrico</li>
              <li>Families who need 4&ndash;6 bedrooms with custom layouts and premium finishes</li>
              <li>Buyers who want to avoid CDD fees and heavy HOA restrictions</li>
              <li>Homeowners relocating from larger metro areas who expect premium lot sizes</li>
              <li>Investors seeking high-value properties with strong appreciation potential</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Crestwood Estates FAQ</h2>
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
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn-preserve/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Preserve</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Crestwood Estates? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Crestwood Estates</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Crestwood Estates?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Crestwood Estates Info'}</button>
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
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 42 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Crestwood Estates?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from Crestwood Estates, not a Zestimate.</p>
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
              { "@type": "ListItem", "position": 3, "name": "Crestwood Estates Homes for Sale", "item": "https://valricoagent.com/neighborhoods/crestwood-estates/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Crestwood Estates, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9430, "longitude": -82.2380 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Crestwood Estates, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Crestwood Estates, Valrico FL",
            "priceCurrency": "USD",
            "price": "500000-900000",
            "url": "https://valricoagent.com/neighborhoods/crestwood-estates/",
            "areaServed": { "@type": "Place", "name": "Crestwood Estates, Valrico FL" },
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
