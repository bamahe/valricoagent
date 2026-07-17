'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';
import NeighborhoodMap from '../../components/NeighborhoodMap';
import { neighborhoodCoords } from '../../../lib/neighborhood-coords';

export default function TwinLakesPage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'twin-lakes', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'What is the price range for Twin Lakes homes?', a: 'Twin Lakes homes typically sell between $375,000 and $475,000. Pricing depends on whether the home has been updated, square footage, and lot position. Original-condition homes tend to price at the lower end while fully renovated properties push toward the top. Call Barrett Henry at (813) 733-7907 for current Twin Lakes pricing.' },
    { q: 'What school zone is Twin Lakes in?', a: 'Twin Lakes is zoned for Alafia Elementary (or Cimino Elementary depending on address), Burns Middle School, and Bloomingdale High School within the Hillsborough County School District. Bloomingdale High offers AP courses, strong athletics, and career pathways. Barrett Henry can verify the exact zoning for any Twin Lakes address.' },
    { q: 'Does Twin Lakes have an HOA?', a: 'Twin Lakes has a homeowners association that manages community standards. HOA fees vary by section within the neighborhood. Contact Barrett Henry at (813) 733-7907 for current HOA fee details on any specific Twin Lakes property.' },
    { q: 'Are Twin Lakes homes older or newer?', a: 'Twin Lakes has a mix of construction eras. Many homes were built in the 1980s and 1990s, while some sections have seen newer construction or significant renovations. This mix creates opportunity at multiple price points. Updated homes command higher prices, while original-condition properties offer renovation potential at a lower entry price.' },
    { q: 'How far is Twin Lakes from major highways?', a: 'Twin Lakes is roughly 5 miles from the I-75 interchange at Bloomingdale Avenue, about a 12-minute drive. From I-75, downtown Tampa is approximately 25-30 minutes and Lakeland is about 30 minutes via I-4. The Selmon Expressway is also accessible through Brandon.' },
    { q: 'Is Twin Lakes a good investment?', a: 'Twin Lakes offers solid fundamentals for real estate investment: Bloomingdale HS zoning, south Valrico location, and a price point below many neighboring communities. The mix of older and updated homes means there is still upside in buying a less-updated home and adding value through renovation. Barrett Henry can run comps to show recent appreciation trends.' },
    { q: 'What amenities are near Twin Lakes?', a: 'Twin Lakes is close to shopping and dining along Bloomingdale Avenue including Publix, restaurants, banks, and medical offices. Bloomingdale Golfers Club is nearby for golf. Parks, walking trails, and the Alafia River corridor provide outdoor recreation within a short drive.' },
    { q: 'How does Twin Lakes compare to Shetland Ridge?', a: 'Twin Lakes ($375K-$475K) offers a lower entry point than Shetland Ridge ($400K-$550K) while sharing the same Bloomingdale HS zone. Shetland Ridge tends to have slightly larger lots and more consistently updated homes. Twin Lakes appeals to buyers who want the same school zone at a more accessible price.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Twin Lakes Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Twin Lakes is a mixed-era neighborhood in south Valrico (33596) with a blend of original and fully updated homes. Prices from $375K&ndash;$475K. Bloomingdale High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Twin Lakes listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" defaultSubdivisions={["TWIN LAKES PARCELS","TWIN LAKES PARCELS A2 & B2","TWIN LAKES PARCELS D1 D3 & E"]} heading="Twin Lakes Homes for Sale" />
      </div>

      {/* ===== NEIGHBORHOOD MAP ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <NeighborhoodMap
          center={neighborhoodCoords['twin-lakes']}
          neighborhoodName="Twin Lakes"
        />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$375K\u2013$475K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['Mixed era', 'Community type'],
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
            <h2 className="font-serif text-2xl mb-4">About Twin Lakes, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Twin Lakes sits in the 33596 ZIP code along the south Valrico corridor, offering a neighborhood experience that blends older character homes with modern renovations. Unlike communities built in a single phase, Twin Lakes features homes from different construction periods &mdash; giving buyers a wider range of styles, conditions, and price points to choose from within the same streets.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes here typically range from 1,500 to 2,600 square feet with 3 to 4 bedrooms. The older portions of Twin Lakes feature block construction with the solid bones that Florida builders favored in the 1980s and early 1990s &mdash; concrete block walls, tile roofs on some models, and split-plan layouts. Many of these homes have been renovated with updated kitchens, modern flooring, and refreshed owners suites. The newer or fully renovated homes in Twin Lakes feel current without the CDD fees or tight lot spacing of recent subdivisions.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>What makes Twin Lakes practical for buyers is the range of entry points. A home in original condition might price near $375,000, while a comparable floor plan with a full kitchen and bath renovation could list closer to $475,000. That spread creates opportunity for both move-in-ready buyers and those who prefer to add sweat equity. The neighborhood also benefits from its Bloomingdale High School zoning, which supports long-term resale value regardless of the home&apos;s condition when purchased.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Twin Lakes</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Twin Lakes is zoned for <strong>Alafia Elementary</strong> (or <strong>Cimino Elementary</strong> depending on specific address), <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong> through the Hillsborough County School District. Bloomingdale High offers a comprehensive AP program, dual enrollment options, and competitive athletics teams.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>For families weighing school zones, Twin Lakes delivers Bloomingdale HS access at a lower price point than many neighboring communities in the same feeder pattern. That combination of affordability and school quality makes Twin Lakes particularly attractive to young families buying their first home in the Valrico area. See the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Valrico school zone guide</Link> for the full feeder pattern breakdown.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Twin Lakes is situated in south Valrico with easy access to Bloomingdale Avenue and the broader Tampa Bay highway network. Key commute estimates:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (Bloomingdale Ave interchange):</strong> ~5 miles / 12 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 25&ndash;35 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 30&ndash;40 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 30&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 30&ndash;40 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Everyday shopping is close at hand. Publix, Walmart, and a variety of restaurants sit along Bloomingdale Avenue less than 2 miles away. The Winthrop Town Centre shopping area in Riverview is also a short drive south on US-301.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Twin Lakes has a homeowners association that enforces community standards including property maintenance, parking, and exterior modifications. HOA fees vary depending on the section. Most Twin Lakes homes do not carry a CDD assessment since the community predates CDD-financed infrastructure. For specific HOA fee information on a Twin Lakes property, reach out to Barrett Henry at <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Twin Lakes Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Twin Lakes sits at the more accessible end of south Valrico&apos;s pricing spectrum. Here&apos;s a comparison:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Style</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Twin Lakes', '$375K\u2013$475K', 'Mixed era', 'Blend of older and updated, lower entry point'],
                    ['Shetland Ridge', '$400K\u2013$550K', 'Established', 'Larger lots, more consistently updated'],
                    ['Wellington', '$375K\u2013$475K', 'Established', 'Similar pricing, larger lot sizes'],
                    ['Bloomingdale', '$450K\u2013$650K+', 'Master-planned', 'Premium amenities, higher price tier'],
                  ].map(([name, price, style, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{style}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Twin Lakes is a strong value play for buyers who want Bloomingdale HS zoning without the premium of <Link href="/neighborhoods/bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bloomingdale</Link>. If you want bigger lots at a similar price, compare with <Link href="/neighborhoods/wellington/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Wellington</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Twin Lakes Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>First-time buyers who want Bloomingdale HS zoning at an accessible price</li>
              <li>Investors or handy buyers looking for renovation upside</li>
              <li>Families who want a settled neighborhood without new-construction CDD fees</li>
              <li>Commuters heading to Brandon, Tampa, or MacDill via I-75</li>
              <li>Buyers comparing value across the 33596 ZIP code</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Twin Lakes FAQ</h2>
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
              <Link href="/neighborhoods/shetland-ridge/" className="no-underline" style={{ color: 'var(--accent)' }}>Shetland Ridge</Link> &middot;{' '}
              <Link href="/neighborhoods/wellington/" className="no-underline" style={{ color: 'var(--accent)' }}>Wellington</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/valrico-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Valrico Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/valri-park/" className="no-underline" style={{ color: 'var(--accent)' }}>Valri Park</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Ready to see what&apos;s available in Twin Lakes? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Twin Lakes</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What interests you about Twin Lakes?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Twin Lakes Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Twin Lakes?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Real comps from Twin Lakes &mdash; not an algorithm guess.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
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
              { "@type": "ListItem", "position": 3, "name": "Twin Lakes Homes for Sale", "item": "https://valricoagent.com/neighborhoods/twin-lakes/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Twin Lakes, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9385, "longitude": -82.2510 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Twin Lakes, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Twin Lakes, Valrico FL",
            "priceCurrency": "USD",
            "price": "375000-475000",
            "url": "https://valricoagent.com/neighborhoods/twin-lakes/",
            "areaServed": { "@type": "Place", "name": "Twin Lakes, Valrico FL" },
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
