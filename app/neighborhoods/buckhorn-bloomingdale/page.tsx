'use client';
import Link from 'next/link';
import { useState } from 'react';
import PropertySearch from '../../components/PropertySearch';

export default function BuckhornBloomingdalePage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'buckhorn-bloomingdale', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data --- */
  const faqs = [
    { q: 'How much do homes cost in Buckhorn Bloomingdale?', a: 'Homes in Buckhorn Bloomingdale range from $300,000 to $420,000, making it one of the most affordable neighborhoods in the 33596 ZIP code. Homes are typically 1,300 to 2,200 square feet with 3 to 4 bedrooms. Contact Barrett Henry at (813) 733-7907 for current pricing.' },
    { q: 'What school zone is Buckhorn Bloomingdale in?', a: 'Buckhorn Bloomingdale is zoned for Alafia Elementary, Burns Middle School, and Bloomingdale High School (A-rated, GreatSchools 8/10). The affordable pricing combined with the premium Bloomingdale HS zone makes this one of the best value propositions in south Valrico.' },
    { q: 'Does Buckhorn Bloomingdale have an HOA?', a: 'Buckhorn Bloomingdale is a small community of approximately 60 homes with a more informal neighborhood structure. HOA requirements, if any, tend to be minimal. Contact Barrett Henry at (813) 733-7907 for current HOA details on specific properties.' },
    { q: 'Is Buckhorn Bloomingdale a good neighborhood in Valrico?', a: 'Buckhorn Bloomingdale offers one of the best value propositions in south Valrico: Bloomingdale HS zoning at below-average pricing. The small size (approximately 60 homes) creates a quiet, intimate community with mature trees and low traffic. It is ideal for budget-conscious buyers who want a strong school zone.' },
    { q: 'How far is Buckhorn Bloomingdale from I-75?', a: 'Buckhorn Bloomingdale is approximately 6 miles from the I-75 interchange at SR-60 (Brandon Blvd), which is about a 12 to 16 minute drive. From I-75, downtown Tampa is roughly 25 to 35 minutes and Lakeland is about 30 minutes.' },
    { q: 'How big is the Buckhorn Bloomingdale neighborhood?', a: 'Buckhorn Bloomingdale is a small community of approximately 60 homes. The compact size means less traffic, quieter streets, and a neighborhood where residents know each other. This intimate scale is a distinct advantage for buyers who find larger subdivisions impersonal.' },
    { q: 'What year were Buckhorn Bloomingdale homes built?', a: 'Homes in Buckhorn Bloomingdale were built primarily in the 1980s and 1990s. Construction is standard Florida concrete block with stucco exteriors. Many homes have been updated over the years with modern kitchens, newer roofs, and updated HVAC systems.' },
    { q: 'How does Buckhorn Bloomingdale compare to Bloomingdale Oaks?', a: 'Buckhorn Bloomingdale ($300K-$420K) is significantly more affordable than Bloomingdale Oaks ($350K-$475K). Both share Bloomingdale HS zoning. Bloomingdale Oaks has sidewalks, a stronger community identity, and typically larger homes. Buckhorn Bloomingdale offers the lowest entry price into the school zone with a quieter, more intimate setting.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Buckhorn Bloomingdale Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Buckhorn Bloomingdale is a small community of ~60 homes between the Buckhorn and Bloomingdale corridors in south Valrico (33596). One of the most affordable options in the Bloomingdale HS zone. Prices from $300K&ndash;$420K. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Buckhorn Bloomingdale listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== PROPERTY SEARCH ===== */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <PropertySearch defaultCity="Valrico" heading="Buckhorn-Bloomingdale Area Homes" />
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$300K\u2013$420K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['~60 homes', 'Small community'],
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
            <h2 className="font-serif text-2xl mb-4">About Buckhorn Bloomingdale, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Bloomingdale is a transitional neighborhood of approximately 60 homes situated between the Buckhorn and Bloomingdale corridors in south Valrico (33596). The small size and mature oak canopy create a quiet, intimate residential setting that newer, larger communities cannot replicate. If you want to know your neighbors and live on a street with minimal traffic, this is the kind of neighborhood that delivers.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Homes range from approximately 1,300 to 2,200 square feet with 3 to 4 bedrooms. Construction is standard Florida concrete block from the 1980s and 1990s. Many homes have been updated with modern kitchens, newer roofs, and updated HVAC systems. The smaller home sizes and older construction keep prices lower than neighboring sections, making Buckhorn Bloomingdale the most affordable entry point into the Bloomingdale HS zone.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Mature trees provide natural shade and privacy between lots. The streets are residential-only with no through traffic, which keeps the noise level low and the community feel strong. For buyers who find 5,200-home Bloomingdale overwhelming or newer cookie-cutter developments impersonal, Buckhorn Bloomingdale offers a scaled-down alternative with the same school zone advantage.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Buckhorn Bloomingdale</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Bloomingdale is zoned for <strong>Alafia Elementary</strong>, <strong>Burns Middle School</strong>, and <strong>Bloomingdale High School</strong>. Bloomingdale HS is A-rated by the Florida Department of Education with a GreatSchools rating of 8/10. The school offers AP courses, Cambridge International curriculum, and competitive athletics.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>The affordable pricing combined with the A-rated Bloomingdale HS zone is the core value proposition of Buckhorn Bloomingdale. Comparable school zone access in other neighborhoods costs $50K to $100K more. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Bloomingdale sits between two major corridors, giving residents access to amenities in both directions. Key commute times:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 12&ndash;16 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~21 miles / 28&ndash;40 minutes via I-75</li>
              <li><strong>MacDill Air Force Base:</strong> ~25 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~6 miles / 12&ndash;15 minutes</li>
              <li><strong>Lakeland:</strong> ~27 miles / 28&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~28 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Shopping and dining options are accessible along both Bloomingdale Avenue (west) and Lithia Pinecrest/Boyette Road (south). Publix, Winn-Dixie, restaurants, banks, and medical offices are all within a few minutes. Alafia River State Park and Lithia Springs Park provide outdoor recreation within a 15-minute drive.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Fees</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn Bloomingdale is a small community with a more informal neighborhood structure. HOA requirements, if any, tend to be minimal &mdash; which keeps monthly costs low and gives homeowners more flexibility with their property. There are no CDD assessments in this section. Barrett Henry can confirm the exact HOA status for any Buckhorn Bloomingdale property &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Buckhorn Bloomingdale Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Buckhorn Bloomingdale is the value play in the Bloomingdale HS zone:</p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-[14px] border-collapse" style={{ color: 'var(--ink-soft)' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--ink)' }}>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Neighborhood</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Price Range</th>
                    <th className="text-left py-3 pr-4 font-semibold" style={{ color: 'var(--ink)' }}>Size</th>
                    <th className="text-left py-3 font-semibold" style={{ color: 'var(--ink)' }}>Key Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Buckhorn Bloomingdale', '$300K\u2013$420K', '~60 homes', 'Most affordable, intimate community'],
                    ['Bloomingdale Oaks', '$350K\u2013$475K', 'Medium', 'Sidewalks, stronger name recognition'],
                    ['Bloomingdale', '$300K\u2013$500K', '5,200+ homes', 'Widest selection, mixed HOA'],
                    ['Brentwood Hills', '$340K\u2013$475K', 'Medium', 'Community pool, sidewalks'],
                  ].map(([name, price, size, diff], i) => (
                    <tr key={name} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="py-3 pr-4">
                        {i === 0 ? <strong>{name}</strong> : <Link href={`/neighborhoods/${name!.toLowerCase().replace(/['\s]+/g, '-')}/`} className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>{name}</Link>}
                      </td>
                      <td className="py-3 pr-4">{price}</td>
                      <td className="py-3 pr-4">{size}</td>
                      <td className="py-3">{diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Buckhorn Bloomingdale is the most affordable way into the Bloomingdale HS zone. For more amenities at a similar price, look at <Link href="/neighborhoods/brentwood-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link>. For more home selection, check <Link href="/neighborhoods/bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Bloomingdale</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Buckhorn Bloomingdale Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>First-time buyers who want affordable entry into the Bloomingdale HS zone</li>
              <li>Investors looking for strong school zone access at below-average Valrico pricing</li>
              <li>Buyers who prefer a small, quiet community over large subdivisions</li>
              <li>Downsizers who want to stay in the Bloomingdale school zone at a lower price</li>
              <li>Homeowners who want minimal HOA restrictions and no CDD fees</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Buckhorn Bloomingdale FAQ</h2>
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
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/bent-tree-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Bent Tree Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> &middot;{' '}
              <Link href="/neighborhoods/arista/" className="no-underline" style={{ color: 'var(--accent)' }}>Arista</Link> &middot;{' '}
              <Link href="/neighborhoods/canterbury-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Canterbury Oaks</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Buckhorn Bloomingdale? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Buckhorn Bloomingdale</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Buckhorn Bloomingdale?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Pricing Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Buckhorn Bloomingdale?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your neighborhood &mdash; not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
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
              { "@type": "ListItem", "position": 3, "name": "Buckhorn Bloomingdale Homes for Sale", "item": "https://valricoagent.com/neighborhoods/buckhorn-bloomingdale/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Buckhorn Bloomingdale, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9365, "longitude": -82.2390 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Buckhorn Bloomingdale, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Buckhorn Bloomingdale, Valrico FL",
            "priceCurrency": "USD",
            "price": "300000-420000",
            "url": "https://valricoagent.com/neighborhoods/buckhorn-bloomingdale/",
            "areaServed": { "@type": "Place", "name": "Buckhorn Bloomingdale, Valrico FL" },
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
