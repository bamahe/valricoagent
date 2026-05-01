'use client';
import Link from 'next/link';

export default function BestRealtorInValrico() {
  /* JSON-LD structured data: RealEstateAgent + FAQPage */
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Barrett Henry",
      "image": "https://nowtb.com/wp-content/uploads/2026/02/barrett-henry-realtor.jpg",
      "url": "https://valricoagent.com/best-realtor-in-valrico/",
      "telephone": "+1-813-733-7907",
      "email": "barrett@nowtb.com",
      "description": "Barrett Henry is a Broker Associate with REMAX Collective and one of the top-rated realtors in Valrico FL with 23+ years of real estate experience.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "417 Lithia Pinecrest Rd",
        "addressLocality": "Brandon",
        "addressRegion": "FL",
        "postalCode": "33511",
        "addressCountry": "US"
      },
      "areaServed": ["Valrico", "Brandon", "Riverview", "Lithia"],
      "priceRange": "$200K-$1M+",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "50"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is the best realtor in Valrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Barrett Henry is consistently rated one of the best realtors in Valrico FL. He is a Broker Associate with REMAX Collective, holds e-PRO, MRP, and SRS designations, has 23+ years of real estate experience, 50+ five-star reviews, and covers all 32 Valrico neighborhoods across ZIP codes 33594 and 33596."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose a Valrico realtor?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for a realtor who specializes in Valrico specifically — not just Tampa Bay in general. Ask how many homes they have sold in Valrico, whether they know the sub-neighborhoods and school zones, and what designations they hold. A Broker Associate with local expertise will outperform a generalist agent every time."
          }
        },
        {
          "@type": "Question",
          "name": "What does a Broker Associate mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Broker Associate holds a real estate broker license but works under the umbrella of a brokerage (in Barrett's case, REMAX Collective). This means more education, more experience, and a higher level of licensing than a standard sales associate. Barrett has held his Broker Associate license since 2017."
          }
        }
      ]
    }
  ];

  return (
    <>
      {/* Hero section */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Best Realtor in Valrico FL</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>
            Barrett Henry is a Broker Associate with REMAX Collective, has 23+ years of real estate experience, 50+ five-star reviews, and covers every neighborhood in Valrico. Here&apos;s why clients consistently rate him the best realtor in Valrico FL.
          </p>
          <a href="tel:8137337907" className="btn-solid">Call Barrett — (813) 733-7907</a>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[780px] mx-auto px-7 py-16 space-y-6" style={{ color: 'var(--ink-soft)' }}>

        {/* Why Barrett is the best choice */}
        <h2 className="font-serif text-2xl" style={{ color: 'var(--ink)' }}>Why Barrett Henry is the best realtor in Valrico</h2>
        <p className="text-[15px] leading-[1.8]">
          There are hundreds of agents who claim to serve Valrico. Most of them live elsewhere and drive in when a lead comes through a portal. Barrett Henry works this market every single day from the REMAX Collective Brandon office on Lithia Pinecrest Road — five minutes from every Valrico neighborhood. He has been licensed since 2003, holds a Broker Associate license since 2017, and has built a reputation based on straight talk, data-driven pricing, and results.
        </p>
        <p className="text-[15px] leading-[1.8]">
          With 50+ five-star reviews across Google and Zillow, Barrett&apos;s clients consistently highlight his deep local knowledge, responsiveness, and no-pressure approach. Whether you are <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>buying a home in Valrico</Link>, <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>selling your Valrico home</Link>, or investing in rental properties, Barrett brings the experience and credentials that set him apart.
        </p>

        {/* Broker Associate explained */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>What does Broker Associate mean?</h2>
        <p className="text-[15px] leading-[1.8]">
          A Broker Associate holds a Florida real estate broker license — a higher level of licensing than a standard sales associate. It requires additional coursework, more experience, and passing the broker exam. Barrett earned his Broker Associate license in 2017 and operates under REMAX Collective, which means you get broker-level expertise combined with the global reach, referral network, and brand recognition of one of the most recognized names in real estate.
        </p>

        {/* 32 neighborhoods */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>32 Valrico neighborhoods covered</h2>
        <p className="text-[15px] leading-[1.8]">
          Barrett covers every subdivision in ZIP codes 33594 and 33596: <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{ color: 'var(--accent)' }}>Bloomingdale</Link> (5,200+ homes, 32+ sub-neighborhoods), <Link href="/neighborhoods/river-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>River Hills</Link> (gated golf community, $400K-$800K+), <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{ color: 'var(--accent)' }}>Diamond Hill</Link> (gated golf, $350K-$550K+), <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{ color: 'var(--accent)' }}>Buckhorn/Boyette</Link> (Newsome HS zone), <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{ color: 'var(--accent)' }}>Twin Lakes</Link>, <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{ color: 'var(--accent)' }}>Brentwood Hills</Link>, <Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{ color: 'var(--accent)' }}>Crestwood Estates</Link>, Canterbury Oaks, Bent Tree Estates, Crosby Crossings, Duncan Groves, and many more. Plus bordering areas: FishHawk Ranch (Lithia), Brandon, Riverview, and Plant City.
        </p>

        {/* Designations */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Professional designations</h2>
        <p className="text-[15px] leading-[1.8]">Barrett holds designations that directly benefit his clients:</p>
        <ul className="list-disc pl-6 space-y-2 text-[15px] leading-[1.8]">
          <li><strong>Broker Associate</strong> — Higher-level Florida real estate license (since 2017)</li>
          <li><strong>e-PRO</strong> — Certified in digital marketing and technology for real estate</li>
          <li><strong>MRP (Military Relocation Professional)</strong> — Trained to help military families relocate to and from the MacDill AFB / Tampa Bay area</li>
          <li><strong>SRS (Seller Representative Specialist)</strong> — Advanced training in representing home sellers and maximizing net proceeds</li>
        </ul>
        <div className="flex flex-wrap gap-2 my-4">
          {['Broker Associate', 'e-PRO (digital marketing)', 'MRP (military relocation)', 'SRS (seller representation)', 'REMAX Collective', 'REMAX Commercial'].map(c => (
            <span key={c} className="text-xs font-semibold px-2.5 py-1 border rounded" style={{ borderColor: 'var(--border)', color: 'var(--ink-soft)' }}>{c}</span>
          ))}
        </div>

        {/* Services */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {[
            ['Buyers', 'Full buyer representation from search to closing. Barrett previews homes, identifies neighborhood-specific issues, negotiates offers, and manages timelines.', '/valrico-fl-homes-for-sale/'],
            ['Sellers', 'Data-driven pricing, professional photography, MLS syndication, negotiation, and closing coordination. SRS designated.', '/sell-my-home-valrico/'],
            ['Investors', 'Cash-flow analysis, cap rate evaluation, rental portfolio strategy, and multi-family opportunities through REMAX Commercial.', null],
            ['Relocation', 'MRP designated. Barrett helps military families and out-of-state buyers relocate to Valrico and the greater Tampa Bay area.', '/valrico-relocation-guide/'],
          ].map(([t, d, href]) => (
            <div key={t as string} className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>{t}</h3>
              <p className="text-sm leading-relaxed">{d}</p>
              {href && (
                <Link href={href as string} className="text-xs font-semibold mt-2 inline-block no-underline" style={{ color: 'var(--accent)' }}>Learn more &rarr;</Link>
              )}
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>What clients say</h2>
        <div className="space-y-4 mt-4">
          {[
            ['"Barrett knew our Bloomingdale sub-neighborhood inside and out. He priced our home perfectly and we had multiple offers in 3 days."', '— Bloomingdale seller, 5-star Google review'],
            ['"We relocated from out of state and Barrett made the entire process smooth. He knew which streets to avoid, which school zones mattered, and which homes were overpriced. Best realtor we have ever worked with."', '— Valrico buyer, 5-star Zillow review'],
            ['"No pressure, no games. Barrett gave us the data, explained our options, and let us make the decision. Refreshing experience."', '— Buckhorn seller, 5-star Google review'],
          ].map(([quote, attr]) => (
            <div key={attr as string} className="border-l-4 pl-5 py-3" style={{ borderColor: 'var(--accent)' }}>
              <p className="text-[15px] leading-[1.8] italic">{quote}</p>
              <p className="text-xs mt-2 font-semibold" style={{ color: 'var(--ink-muted)' }}>{attr}</p>
            </div>
          ))}
        </div>

        {/* FAQ section */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Frequently asked questions</h2>
        <div className="space-y-4 mt-4">
          {[
            ['Who is the best realtor in Valrico?', 'Barrett Henry is consistently rated one of the best realtors in Valrico FL. He is a Broker Associate with REMAX Collective, holds e-PRO, MRP, and SRS designations, has 23+ years of real estate experience, 50+ five-star reviews, and covers all 32 Valrico neighborhoods across ZIP codes 33594 and 33596.'],
            ['How do I choose a Valrico realtor?', 'Look for a realtor who specializes in Valrico specifically — not just Tampa Bay in general. Ask how many homes they have sold in Valrico, whether they know the sub-neighborhoods and school zones, and what designations they hold. A Broker Associate with local expertise will outperform a generalist agent every time.'],
            ['What does a Broker Associate mean?', 'A Broker Associate holds a Florida real estate broker license — a higher level of licensing than a standard sales associate. It requires additional coursework, more experience, and passing the broker exam. Barrett has held his Broker Associate license since 2017.'],
          ].map(([q, a]) => (
            <div key={q as string} className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-semibold text-base mb-2">{q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{a}</p>
            </div>
          ))}
        </div>

        {/* Internal links */}
        <div className="mt-8 text-[15px] leading-[1.8]">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Explore more:</strong>{' '}
            <Link href="/valrico-realtor/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Valrico REALTOR® services</Link> &middot;{' '}
            <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Search Valrico homes for sale</Link> &middot;{' '}
            <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Valrico home values</Link> &middot;{' '}
            <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Sell my Valrico home</Link>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-md text-center" style={{ background: 'var(--cream-warm)' }}>
          <h3 className="font-serif text-lg mb-2">Ready to work with the best realtor in Valrico?</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--ink-soft)' }}>No pitch, no pressure. Just a straight conversation about your real estate goals.</p>
          <a href="tel:8137337907" className="btn-solid mr-2">(813) 733-7907</a>
          <a href="mailto:barrett@nowtb.com" className="btn-ghost">Email Barrett</a>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema[0]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema[1]) }} />
    </>
  );
}
