'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function BloomingdalePage() {
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
        body: JSON.stringify({ ...form, source: 'valricoagent', neighborhood: 'bloomingdale', intent: 'buy' }),
      });
      setSent(true);
    } catch { setSent(true); }
    setSending(false);
  }

  /* --- FAQ data (also used in schema below) --- */
  const faqs = [
    { q: 'What is the average home price in Bloomingdale Valrico?', a: 'Homes in Bloomingdale range from $300,000 to $500,000. Updated pool homes on larger lots push toward the top of that range, while original-condition homes in the smaller sub-neighborhoods start closer to $300K. Contact Barrett Henry at (813) 733-7907 for current Bloomingdale pricing.' },
    { q: 'What school zone is Bloomingdale in?', a: 'Most of Bloomingdale is zoned for Bloomingdale High School (A-rated, GreatSchools 8/10). Feeder schools include Burns Middle School and elementary schools like Alafia, Cimino, and Brooker. The school zone is one of the primary drivers of home values in this community.' },
    { q: 'Does Bloomingdale have an HOA?', a: 'It depends on the sub-neighborhood. Roughly half of Bloomingdale\'s 32+ sub-neighborhoods have mandatory HOAs with fees typically ranging from $50 to $200 per month. The other half have voluntary associations or no formal HOA. Call Barrett Henry at (813) 733-7907 to check the HOA status for a specific address.' },
    { q: 'Is Bloomingdale a good place to buy in Valrico?', a: 'Bloomingdale is one of the most established neighborhoods in Valrico with strong school zoning, mature landscaping, larger lots, and a wide price range that accommodates first-time buyers through move-up families. The 5,200+ home community offers variety that most Valrico neighborhoods cannot match.' },
    { q: 'How far is Bloomingdale from I-75?', a: 'Bloomingdale is approximately 5 to 7 miles from the I-75 interchange at SR-60 (Brandon Blvd), making it about a 12 to 15 minute drive to the highway. From there, downtown Tampa is roughly 25 to 35 minutes and Lakeland is about 30 minutes.' },
    { q: 'How many sub-neighborhoods are in Bloomingdale?', a: 'Bloomingdale contains 32+ individual sub-neighborhoods including Bloomingdale Oaks, Bloomingdale East, Bloomingdale Cove, and many others. Each varies in price, HOA structure, lot size, and character. Barrett Henry knows every section and can guide you to the one that fits your budget and lifestyle.' },
    { q: 'Are there no-HOA homes in Bloomingdale?', a: 'Yes. Approximately half of Bloomingdale\'s sub-neighborhoods have voluntary or no HOA, making it one of the few large Valrico communities where no-HOA homes are available without leaving the neighborhood. Barrett Henry at (813) 733-7907 can identify which sections have no mandatory HOA.' },
    { q: 'How does Bloomingdale compare to Buckhorn and River Hills?', a: 'Bloomingdale ($300K-$500K) is more affordable than River Hills ($500K-$1M+) and offers a similar price range to Buckhorn ($350K-$500K). Bloomingdale has the largest selection of homes, mature landscaping, and Bloomingdale HS zoning. Buckhorn is zoned for Newsome HS. River Hills offers larger lots and more privacy at a premium.' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Neighborhoods</div>
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">Bloomingdale Homes for Sale &mdash; Valrico FL 33596</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>Bloomingdale is one of the largest planned communities in Tampa Bay with 5,200+ homes across 32+ sub-neighborhoods in south Valrico (33596). Prices from $300K&ndash;$500K. Bloomingdale High School zone. Barrett Henry, REALTOR&reg; with REMAX Collective.</p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">Search Bloomingdale listings</Link>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">What&apos;s my Bloomingdale home worth?</Link>
          </div>
        </div>
      </div>

      {/* ===== QUICK STATS ===== */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['$300K\u2013$500K', 'Price range'],
            ['33596', 'ZIP code'],
            ['Bloomingdale HS', 'High school zone'],
            ['5,200+ homes', 'Largest planned community'],
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
            <h2 className="font-serif text-2xl mb-4">About Bloomingdale, Valrico FL</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale sits in south Valrico along both sides of Bloomingdale Avenue, straddling the Brandon and Valrico line. The Valrico side features slightly larger lots and homes with a more suburban-to-rural transition compared to the Brandon sections. The community was developed primarily through the 1980s and 1990s, with some infill and renovation continuing into the 2000s and 2010s.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>With 32+ individual sub-neighborhoods and approximately 5,200 homes, Bloomingdale is not a single community &mdash; it&apos;s a collection of neighborhoods that share the Bloomingdale name but vary significantly in price, HOA structure, lot size, and feel. Some sections carry mandatory HOAs with strict standards; others are voluntary. This creates flexibility for buyers who want community standards without rigid restrictions.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Prices on the Valrico side generally run $300K to $500K, with updated pool homes on larger lots pushing toward the top of that range. The sheer size of the community means there is almost always inventory available, which gives buyers more negotiating power than they get in smaller neighborhoods where listings are scarce. Barrett Henry has <a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>deep knowledge of every Bloomingdale sub-neighborhood</a> and can tell you which sections hold value strongest.</p>

            {/* --- Schools --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Schools Serving Bloomingdale</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Most of Bloomingdale falls within the Bloomingdale High School attendance zone. Bloomingdale HS is A-rated by Niche, ranked among the top Tampa area public high schools, and carries a GreatSchools rating of 8/10. The school offers AP courses, Cambridge International curriculum, and a Gifted and Talented program. For families, the school zone is often the primary reason they choose Bloomingdale over comparable neighborhoods in Brandon or Riverview.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Feeder schools include <strong>Burns Middle School</strong> and elementary schools like <strong>Alafia Elementary</strong>, <strong>Cimino Elementary</strong>, and <strong>Brooker Elementary</strong>. The school zone adds measurable value &mdash; comparable homes inside the Bloomingdale HS zone consistently sell for more than similar homes zoned for other high schools. Read the <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>full Valrico school zone guide</Link> for details on how zoning affects pricing.</p>

            {/* --- Location & Commute --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Location and Commute</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale Avenue is the primary commercial corridor, with Publix, Winn-Dixie, CVS, restaurants, and professional services all within a few minutes. Key commute times from Bloomingdale:</p>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li><strong>I-75 (SR-60 interchange):</strong> ~6 miles / 12&ndash;15 minutes</li>
              <li><strong>Downtown Tampa:</strong> ~20 miles / 28&ndash;40 minutes via I-75 or Selmon Expressway</li>
              <li><strong>MacDill Air Force Base:</strong> ~24 miles / 35&ndash;45 minutes</li>
              <li><strong>Brandon Town Center:</strong> ~5 miles / 10&ndash;15 minutes</li>
              <li><strong>Lakeland:</strong> ~28 miles / 30&ndash;35 minutes via I-4</li>
              <li><strong>Tampa International Airport:</strong> ~27 miles / 35&ndash;45 minutes</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>HCA Florida Brandon Hospital is a short drive north on Lithia Pinecrest Road. The Lee Roy Selmon Expressway offers a faster route into downtown Tampa during rush hour. Lithia Springs Park, Alafia River State Park, and Alderman&apos;s Ford Nature Preserve are all within a 10 to 15 minute drive south for outdoor recreation.</p>

            {/* --- HOA --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">HOA and Community Structure</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale&apos;s HOA landscape is mixed. Roughly half of the 32+ sub-neighborhoods have mandatory HOAs with fees typically ranging from $50 to $200 per month. The other half have voluntary associations or no formal HOA at all. This makes Bloomingdale one of the few large Valrico communities where <Link href="/valrico-no-hoa-homes/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>no-HOA homes</Link> are available without leaving the neighborhood. Barrett Henry can tell you the exact HOA status for any Bloomingdale address &mdash; call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>

            {/* --- Comparison --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Bloomingdale Compares to Nearby Neighborhoods</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>Bloomingdale&apos;s size and variety make it a benchmark for south Valrico. Here&apos;s how it stacks up:</p>
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
                    ['Bloomingdale', '$300K\u2013$500K', 'Mixed', '5,200+ homes, 32+ sub-neighborhoods'],
                    ['Buckhorn', '$350K\u2013$500K', 'Varies', 'Newsome HS zone, Boyette corridor'],
                    ['Brentwood Hills', '$340K\u2013$475K', 'Yes', 'Community pool, dual ZIP codes'],
                    ['River Hills', '$500K\u2013$1M+', 'Yes', 'Gated, larger lots, golf course'],
                    ['Bloomingdale Oaks', '$350K\u2013$475K', 'Varies', 'Popular Bloomingdale sub-section'],
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
            <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>Bloomingdale&apos;s unmatched variety sets it apart. If you want the same Bloomingdale HS zone at a lower price, check <Link href="/neighborhoods/buckhorn-bloomingdale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Buckhorn Bloomingdale</Link>. For a premium gated experience, look at <Link href="/neighborhoods/river-hills/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>River Hills</Link>.</p>

            {/* --- Who it fits --- */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Bloomingdale Fits Best</h2>
            <ul className="text-[15px] leading-[1.8] mb-6 space-y-2 pl-5 list-disc" style={{ color: 'var(--ink-soft)' }}>
              <li>Families who want Bloomingdale HS zoning with the widest selection of homes in Valrico</li>
              <li>Buyers who want mature landscaping and larger lots versus newer Riverview construction</li>
              <li>First-time buyers looking for affordable entry into a strong school zone</li>
              <li>Homeowners who want a no-HOA option without leaving a recognized community</li>
              <li>Military families stationed at MacDill AFB (35&ndash;45 min commute)</li>
            </ul>

            {/* --- FAQ --- */}
            <h2 className="font-serif text-2xl mb-6 mt-10">Bloomingdale FAQ</h2>
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
              <Link href="/neighborhoods/bloomingdale-oaks/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale Oaks</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale-east/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale East</Link> &middot;{' '}
              <Link href="/neighborhoods/bloomingdale-cove/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale Cove</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn</Link> &middot;{' '}
              <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link> &middot;{' '}
              <Link href="/neighborhoods/bent-tree-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Bent Tree Estates</Link> &middot;{' '}
              <Link href="/neighborhoods/buckhorn-bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn Bloomingdale</Link> &middot;{' '}
              <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link>
            </p>
            <p className="text-[15px] leading-[1.8] mt-6" style={{ color: 'var(--ink-soft)' }}>Looking for homes in Bloomingdale? <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search current listings</Link> or <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>get a free home valuation</Link>.</p>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div className="space-y-6">
            {/* Lead capture form */}
            <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
              <h3 className="font-serif text-lg mb-3">Ask Barrett About Bloomingdale</h3>
              {sent ? (
                <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Thanks! Barrett will reach out within 24 hours. Need faster help? Call <a href="tel:8137337907" className="font-semibold" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input name="name" placeholder="Full name" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="email" type="email" placeholder="Email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm" style={{ borderColor: 'var(--border)' }} />
                  <textarea name="message" placeholder="What are you looking for in Bloomingdale?" rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-3 py-2.5 border rounded text-sm resize-y" style={{ borderColor: 'var(--border)' }} />
                  <button type="submit" disabled={sending} className="btn-solid block w-full text-center text-sm">{sending ? 'Sending...' : 'Get Bloomingdale Info'}</button>
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
              <h3 className="font-serif text-lg text-white mb-3">Selling in Bloomingdale?</h3>
              <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>Free CMA from Barrett Henry, REALTOR&reg;. Actual comps from your sub-neighborhood &mdash; not a Zestimate.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get your home value</Link>
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
              { "@type": "ListItem", "position": 3, "name": "Bloomingdale Homes for Sale", "item": "https://valricoagent.com/neighborhoods/bloomingdale/" },
            ],
          },
          {
            "@type": "Place",
            "name": "Bloomingdale, Valrico FL",
            "address": { "@type": "PostalAddress", "addressLocality": "Valrico", "addressRegion": "FL", "postalCode": "33596", "addressCountry": "US" },
            "geo": { "@type": "GeoCoordinates", "latitude": 27.9412, "longitude": -82.2448 },
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": { "@type": "Place", "name": "Bloomingdale, Valrico FL 33596" },
          },
          {
            "@type": "Offer",
            "name": "Homes for Sale in Bloomingdale, Valrico FL",
            "priceCurrency": "USD",
            "price": "300000-500000",
            "url": "https://valricoagent.com/neighborhoods/bloomingdale/",
            "areaServed": { "@type": "Place", "name": "Bloomingdale, Valrico FL" },
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
