'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function ValriParkPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'valri-park', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'What is the price range for Valri Park homes?', a: 'Valri Park homes typically sell between $280,000 and $375,000, making it one of the most affordable neighborhoods in the Valrico 33594 ZIP code. Pricing depends on condition, updates, and lot size. Contact Barrett Henry at (813) 733-7907 for current Valri Park pricing and available homes.' },
    { q: 'What school zone is Valri Park in?', a: 'Valri Park school zoning varies by address within the neighborhood. Some homes zone for Newsome High School while others may zone differently depending on the specific street. Barrett Henry can verify the exact school assignment for any Valri Park address — call (813) 733-7907.' },
    { q: 'Is Valri Park the cheapest neighborhood in 33594?', a: 'Valri Park is one of the most affordable options within the Valrico 33594 ZIP code. Homes starting near $280,000 offer an entry point well below the 33594 median. For buyers who want to be in the 33594 ZIP without stretching their budget, Valri Park is worth serious consideration.' },
    { q: 'Does Valri Park have an HOA?', a: 'Valri Park has a homeowners association. HOA fees are generally modest compared to newer gated communities. Contact Barrett Henry at (813) 733-7907 for current HOA fee details on a specific Valri Park property.' },
    { q: 'What size are Valri Park homes?', a: 'Most Valri Park homes range from 1,200 to 2,000 square feet with 3 to 4 bedrooms. The floor plans are efficient and practical. Lot sizes are standard for the era, with fenced backyards being common throughout the neighborhood.' },
    { q: 'How far is Valri Park from I-75?', a: 'Valri Park is approximately 3-4 miles from the I-75 interchange at SR-60 (Brandon Blvd), roughly an 8-10 minute drive. Downtown Tampa is about 25-30 minutes from there, and Lakeland is roughly 30 minutes via I-4.' },
    { q: 'When were Valri Park homes built?', a: 'The majority of Valri Park homes were built in the 1970s and 1980s. Many have been updated over the years with new roofs, updated kitchens, and modern flooring. The older construction means no CDD fees and generally lower HOA costs compared to newer communities.' },
    { q: 'How does Valri Park compare to Valrico Hills?', a: 'Valri Park ($280K-$375K) offers a lower entry point than Valrico Hills ($325K-$425K). Both are in the 33594 ZIP code. Valrico Hills tends to have slightly larger homes and higher price ceilings. Valri Park appeals to budget-conscious buyers who want the Valrico address without the higher cost of surrounding neighborhoods.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Valri Park Homes for Sale &mdash; Valrico FL 33594</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Valri Park is one of the most affordable neighborhoods in the Valrico 33594 ZIP code. Prices from $280K&ndash;$375K. Practical homes with renovation potential. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Valri Park listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["VALRI","VALRI FOREST","VALRI FOREST PH 1 & 2"]} heading="Valri Park Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['valri-park']}
          neighborhoodName="Valri Park"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$280K\u2013$375K', 'Price range'],
            ['33594', 'ZIP code'],
            ['Varies', 'High school zone'],
            ['Affordable', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Valri Park, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valri Park is the entry point to Valrico&apos;s 33594 ZIP code. In a market where many Valrico neighborhoods start above $350,000, Valri Park gives buyers a path into the area at price points that begin near $280,000. The neighborhood consists primarily of homes built in the 1970s and 1980s &mdash; concrete block construction with the no-nonsense floor plans that were standard for the era. Three-bedroom, two-bath layouts dominate, though you&apos;ll find some 4-bedroom options as well.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>What Valri Park lacks in flash, it makes up for in practicality. Homes here tend to be 1,200 to 2,000 square feet &mdash; enough space for a family without the maintenance burden (or price tag) of a 2,500+ square foot home. Many properties have been updated with newer kitchens, updated bathrooms, and modern flooring. Others remain in closer-to-original condition, offering renovation opportunity for buyers who want to build instant equity through improvements.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The neighborhood&apos;s affordability relative to the rest of 33594 is its defining advantage. Buyers who might be priced out of <Link href="/neighborhoods/valrico-forest/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico Forest</Link> or <Link href="/neighborhoods/arista/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Arista</Link> can still get a Valrico address with a 33594 ZIP in Valri Park. That ZIP code carries weight for school options, community identity, and resale positioning.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Valri Park</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valri Park&apos;s school zoning varies by address within the neighborhood. Some homes fall within the Newsome High School feeder pattern while others may be assigned to a different high school. Elementary and middle school assignments also depend on the specific location within Valri Park.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Because zoning boundaries can split through neighborhoods like Valri Park, verifying the exact school assignment before making an offer is critical. Barrett Henry can pull the verified zoning for any Valri Park address &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>. For a broader overview of Valrico school assignments, see the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico school zone guide</Link>.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valri Park is centrally located in Valrico with quick access to SR-60 (Brandon Blvd) and the I-75 corridor. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~3&ndash;4 miles / 8&ndash;10 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~17 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~21 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~4 miles / 8 minutes</li>
              <li><strong>Lakeland:</strong> ~25 miles / 28&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~24 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>SR-60 (Brandon Blvd) runs nearby with every big-box retailer, grocery store, and service you could need. Publix, Aldi, Walmart, Home Depot, and dozens of restaurants are all within a 5-minute drive.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valri Park has a homeowners association with generally modest fees that cover community standards enforcement and basic common area maintenance. No CDD assessments apply since the neighborhood was built well before CDD financing became common. The low fee structure is another reason Valri Park appeals to budget-conscious buyers. For exact HOA amounts, call Barrett Henry at <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Valri Park Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Valri Park is the value leader in 33594. Here&apos;s how the numbers compare:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>ZIP</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Valri Park', '$280K\u2013$375K', '33594', 'Most affordable in 33594, renovation potential'],
                    ['Valrico Hills', '$325K\u2013$425K', '33594', 'Slightly larger, established mid-range'],
                    ['Valrico Oaks', '$350K\u2013$500K', '33594', 'Newsome HS zone, higher finishes'],
                    ['Valrico Forest', '$400K\u2013$525K', '33594', 'Wooded lots, Newsome HS, premium tier'],
                  ].map(([name, price, zip, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{zip}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Valri Park is the clear choice for buyers who want a 33594 address at the lowest available price point. If you can stretch your budget, <Link href="/neighborhoods/valrico-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico Hills</Link> offers slightly more home. For Newsome HS zoning specifically, look at <Link href="/neighborhoods/valrico-oaks/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Valri Park Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>First-time buyers who want a Valrico 33594 address on a budget</li>
              <li>Investors looking for rental properties or fix-and-flip opportunities</li>
              <li>Downsizers who want a smaller, manageable home at a low price point</li>
              <li>Buyers priced out of more expensive 33594 neighborhoods</li>
              <li>Anyone who values low HOA fees and no CDD assessments</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Valri Park FAQ</h2>
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
              <Link href="/neighborhoods/valrico-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-forest/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Forest</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Valri Park? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Browse current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Valri Park</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Valri Park?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Valri Park Info'}</button>
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
                <li><Link href="/neighborhoods/" className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>All 32 neighborhoods &rarr;</Link></li>
              </ul>
            </div>

            {/* Selling CTA */}
            <div className="rounded-md p-6" style={{ background: 'var(--blue-deep)' }}>
              <h3 className="font-serif text-lg text-white mb-3">Selling in Valri Park?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual neighborhood comps &mdash; not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-white block text-center text-sm">Get your home value</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ===== SCHEMA: BreadcrumbList + Place + GeoCoordinates + RealEstateAgent + Offer ===== */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
              { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://valricoagent.com/neighborhoods/" },
              { "@type": "ListItem", "position": 3, "name": "Valri Park Homes for Sale", "item": "https://valricoagent.com/neighborhoods/valri-park/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Valri Park, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33594", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9520, "longitude": -82.2340 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Valri Park, Valrico FL 33594" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Valri Park, Valrico FL",
            "priceCurrency": "USD",
            "price": "280000-375000",
            "url": "https://valricoagent.com/neighborhoods/valri-park/",
            "areaServed": { "@type": "Place", "name": "Valri Park, Valrico FL" },
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
