'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '../components/ContactForm';

export default function ValricoRealEstate() {
  /* JSON-LD structured data: RealEstateAgent + FAQPage */
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Barrett Henry",
      "url": "https://valricoagent.com/valrico-real-estate/",
      "telephone": "+1-813-733-7907",
      "email": "barrett@nowtb.com",
      "description": "Barrett Henry is a Broker Associate with REMAX Collective specializing in Valrico FL real estate, homes for sale, market data, neighborhood guides, and expert guidance.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "417 Lithia Pinecrest Rd",
        "addressLocality": "Brandon",
        "addressRegion": "FL",
        "postalCode": "33511",
        "addressCountry": "US"
      },
      "areaServed": ["Valrico", "Brandon", "Riverview", "Lithia"]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Valrico a good place to buy a home?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Valrico is one of the most desirable suburbs in Tampa Bay. It offers A-rated schools (Bloomingdale HS and Newsome HS), larger lot sizes than Brandon or Riverview, no city taxes (unincorporated Hillsborough County), low flood risk (most of Valrico is in Flood Zone X), and easy access to downtown Tampa via the Selmon Expressway. Home values have remained strong compared to surrounding areas."
          }
        },
        {
          "@type": "Question",
          "name": "What are Valrico home prices in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The median home price in Valrico is approximately $415,000 as of 2026. Prices range from the low $300s in older subdivisions to $800K+ in gated golf communities like River Hills and Diamond Hill. Pricing varies significantly by sub-neighborhood, school zone, and lot size. Contact Barrett Henry for a current market analysis specific to your target area."
          }
        },
        {
          "@type": "Question",
          "name": "What ZIP codes are in Valrico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Valrico is served by two ZIP codes: 33594 (northern Valrico, including Bloomingdale and parts of Brandon) and 33596 (southern Valrico, including Buckhorn, Diamond Hill, River Hills, and areas bordering Lithia and Riverview)."
          }
        }
      ]
    }
  ];

  /* Top 8 neighborhoods for the grid */
  const neighborhoods = [
    { name: 'Bloomingdale', href: '/neighborhoods/bloomingdale/', desc: '5,200+ homes, 32+ sub-neighborhoods, A-rated schools' },
    { name: 'River Hills', href: '/neighborhoods/river-hills/', desc: 'Gated golf community, $400K-$800K+' },
    { name: 'Diamond Hill', href: '/neighborhoods/diamond-hill/', desc: 'Gated golf community, $350K-$550K+' },
    { name: 'Buckhorn', href: '/neighborhoods/buckhorn/', desc: 'Newsome HS zone, family-friendly, growing area' },
    { name: 'Twin Lakes', href: '/neighborhoods/twin-lakes/', desc: 'Established community, mature trees, central location' },
    { name: 'Brentwood Hills', href: '/neighborhoods/brentwood-hills/', desc: 'Larger lots, no HOA options, quiet streets' },
    { name: 'Crestwood Estates', href: '/neighborhoods/crestwood-estates/', desc: 'Custom homes, acreage, privacy' },
    { name: 'Canterbury Oaks', href: '/neighborhoods/', desc: 'Well-maintained, active HOA, community pool' },
  ];

  /* Property type links */
  const propertyTypes = [
    { name: 'Pool Homes', href: '/valrico-pool-homes/' },
    { name: 'Luxury Homes', href: '/valrico-luxury-homes/' },
    { name: 'No HOA Homes', href: '/valrico-no-hoa-homes/' },
    { name: 'New Construction', href: '/valrico-new-construction-homes/' },
    { name: 'Waterfront Homes', href: '/valrico-waterfront-homes/' },
    { name: 'VA Loan Homes', href: '/valrico-va-loan-homes/' },
    { name: '33594 Homes', href: '/homes-for-sale-33594/' },
    { name: '33596 Homes', href: '/homes-for-sale-33596/' },
  ];

  return (
    <>
      {/* Hero section */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Valrico Real Estate</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>
            Everything you need to know about Valrico FL real estate: homes for sale, market reports, neighborhood guides, home values, and expert guidance from a Broker Associate who covers every neighborhood in 33594 and 33596.
          </p>
          <a href="tel:8137337907" className="btn-solid">Talk to Barrett, (813) 733-7907</a>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1140px] mx-auto px-7 py-16 space-y-6" style={{ color: 'var(--ink-soft)' }}>

        {/* Intro paragraphs */}
        <h2 className="font-serif text-2xl" style={{ color: 'var(--ink)' }}>Valrico FL real estate overview</h2>
        <p className="text-[15px] leading-[1.8]">
          Valrico is an unincorporated community in eastern Hillsborough County, roughly 15 miles east of downtown Tampa. With A-rated schools, larger lot sizes than neighboring Brandon and Riverview, no city taxes, and easy access to the Selmon Expressway, Valrico has become one of the most sought-after suburbs in Tampa Bay. The market includes everything from starter homes in the low $300s to gated golf course estates over $800K.
        </p>
        <p className="text-[15px] leading-[1.8]">
          Barrett Henry is a Broker Associate with REMAX Collective who has been selling real estate since 2003. He covers all 38+ Valrico neighborhoods and provides <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>data-driven home valuations</Link>, <Link href="/valrico-market-report/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>market analysis</Link>, and hands-on guidance for buyers, sellers, and investors. This page is your hub for everything Valrico real estate.
        </p>

        {/* Search Valrico Homes */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Search Valrico homes for sale</h2>
        <p className="text-[15px] leading-[1.8]">
          Browse current Valrico listings updated directly from the MLS. Filter by price, neighborhood, school zone, pool, lot size, and more. Barrett previews properties, identifies issues you will not catch online, and negotiates on your behalf from search to closing.
        </p>
        <Link href="/valrico-fl-homes-for-sale/" className="inline-block mt-2 font-semibold no-underline" style={{ color: 'var(--accent)' }}>
          Search all Valrico homes for sale &rarr;
        </Link>
        <p className="text-sm mt-2">
          <Link href="/valrico-first-time-homebuyer/" className="no-underline" style={{ color: 'var(--accent)' }}>First-time buyer guide</Link> &middot;{' '}
          <Link href="/valrico-down-payment-assistance/" className="no-underline" style={{ color: 'var(--accent)' }}>Down payment assistance</Link> &middot;{' '}
          <Link href="/valrico-va-loan-homes/" className="no-underline" style={{ color: 'var(--accent)' }}>VA loan homes</Link>
        </p>

        {/* What's Your Home Worth */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>What&apos;s your Valrico home worth?</h2>
        <p className="text-[15px] leading-[1.8]">
          Get a free home valuation based on actual comparable sales from your specific sub-neighborhood, not a ZIP code average or an algorithm guess. Barrett pulls real comps, adjusts for condition and upgrades, and gives you a number you can trust.
        </p>
        <Link href="/valrico-fl-home-values/" className="inline-block mt-2 font-semibold no-underline" style={{ color: 'var(--accent)' }}>
          Get your free home valuation &rarr;
        </Link>

        {/* Sell Your Valrico Home */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Sell your Valrico home</h2>
        <p className="text-[15px] leading-[1.8]">
          Barrett&apos;s selling process includes data-driven pricing based on sub-neighborhood comps, professional photography, MLS syndication across every major portal, targeted marketing, showing management, negotiation, and closing coordination. SRS (Seller Representative Specialist) designated.
        </p>
        <Link href="/sell-my-home-valrico/" className="inline-block mt-2 font-semibold no-underline" style={{ color: 'var(--accent)' }}>
          See the full selling process &rarr;
        </Link>
        <p className="text-sm mt-2">
          Need speed? Get a <Link href="/valrico-cash-offer/" className="no-underline" style={{ color: 'var(--accent)' }}>cash offer in 24 hours</Link> &middot;{' '}
          <Link href="/valrico-short-sale/" className="no-underline" style={{ color: 'var(--accent)' }}>Short sale help</Link> &middot;{' '}
          <Link href="/valrico-foreclosures/" className="no-underline" style={{ color: 'var(--accent)' }}>Foreclosure guidance</Link>
        </p>

        {/* Valrico Market Data */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Valrico market data</h2>
        <p className="text-[15px] leading-[1.8]">
          The Valrico real estate market continues to attract buyers looking for strong schools and suburban living within commuting distance of Tampa. Key stats:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {[
            ['~$415K', 'Median price'],
            ['33594 / 33596', 'ZIP codes'],
            ['32+', 'Neighborhoods'],
            ['A-rated', 'High schools'],
          ].map(([stat, label]) => (
            <div key={label as string} className="border rounded-md p-4 text-center" style={{ borderColor: 'var(--border)' }}>
              <p className="text-lg font-bold" style={{ color: 'var(--ink)' }}>{stat}</p>
              <p className="text-xs mt-1" style={{ color: 'var(--ink-muted)' }}>{label}</p>
            </div>
          ))}
        </div>
        <Link href="/valrico-market-report/" className="inline-block mt-4 font-semibold no-underline" style={{ color: 'var(--accent)' }}>
          View the full Valrico market report &rarr;
        </Link>

        {/* Neighborhood image */}
        <div style={{ position: 'relative', aspectRatio: '16/7', marginTop: 32, marginBottom: 8, borderRadius: 8, overflow: 'hidden' }}>
          <Image src="/bloomingdale-valrico.jpg" alt="Bloomingdale neighborhood in Valrico FL" fill className="object-cover" sizes="(max-width:768px) 100vw, 1140px" />
        </div>

        {/* Explore Neighborhoods */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Explore Valrico neighborhoods</h2>
        <p className="text-[15px] leading-[1.8]">
          Valrico has 32+ distinct neighborhoods across two ZIP codes. Each trades at different price levels depending on school zone, lot size, HOA status, and amenities. Here are the top communities:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {neighborhoods.map(n => (
            <Link key={n.name} href={n.href} className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{ borderColor: 'var(--border)', color: 'inherit' }}>
              <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>{n.name}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{n.desc}</p>
              <span className="text-xs font-semibold mt-2 inline-block" style={{ color: 'var(--accent)' }}>Explore &rarr;</span>
            </Link>
          ))}
        </div>
        <p className="text-sm mt-4">
          <Link href="/neighborhoods/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>View all 38 Valrico neighborhoods &rarr;</Link>
        </p>

        {/* River Hills image */}
        <div style={{ position: 'relative', aspectRatio: '16/7', marginTop: 32, marginBottom: 8, borderRadius: 8, overflow: 'hidden' }}>
          <Image src="/images/neighborhoods/river-hills-golf-country-club-valrico-fl-entrance.jpg" alt="River Hills golf country club Valrico FL" fill className="object-cover" sizes="(max-width:768px) 100vw, 1140px" />
        </div>

        {/* Property Types */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Property types in Valrico</h2>
        <p className="text-[15px] leading-[1.8]">
          Search Valrico homes by property type to find exactly what you are looking for:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {propertyTypes.map(pt => (
            <Link key={pt.name} href={pt.href} className="border rounded-md p-4 text-center no-underline hover:shadow-md transition-shadow" style={{ borderColor: 'var(--border)', color: 'var(--ink)' }}>
              <span className="text-sm font-semibold">{pt.name}</span>
            </Link>
          ))}
        </div>

        {/* Additional resources */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>More Valrico resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link href="/valrico-school-zones/" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{ borderColor: 'var(--border)', color: 'inherit' }}>
            <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>School Zones</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Bloomingdale HS vs. Newsome HS zones, elementary and middle school boundaries, and how zoning affects home values.</p>
            <span className="text-xs font-semibold mt-2 inline-block" style={{ color: 'var(--accent)' }}>School zone guide &rarr;</span>
          </Link>
          <Link href="/living-in-valrico/" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{ borderColor: 'var(--border)', color: 'inherit' }}>
            <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>Living in Valrico</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Cost of living, commute times, parks, dining, and what it is actually like to live here.</p>
            <span className="text-xs font-semibold mt-2 inline-block" style={{ color: 'var(--accent)' }}>Living guide &rarr;</span>
          </Link>
          <Link href="/valrico-relocation-guide/" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{ borderColor: 'var(--border)', color: 'inherit' }}>
            <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>Relocation Guide</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Moving to Valrico from out of state? Everything you need to know about relocating to eastern Hillsborough County.</p>
            <span className="text-xs font-semibold mt-2 inline-block" style={{ color: 'var(--accent)' }}>Relocation guide &rarr;</span>
          </Link>
          <Link href="/valrico-property-management/" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{ borderColor: 'var(--border)', color: 'inherit' }}>
            <h3 className="font-semibold text-base mb-1" style={{ color: 'var(--ink)' }}>Property Management</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>Full-service rental management for Valrico landlords through ViVi Property Management.</p>
            <span className="text-xs font-semibold mt-2 inline-block" style={{ color: 'var(--accent)' }}>Property management &rarr;</span>
          </Link>
        </div>

        {/* FAQ section */}
        <h2 className="font-serif text-2xl mt-10" style={{ color: 'var(--ink)' }}>Valrico real estate FAQ</h2>
        <div className="space-y-4 mt-4">
          {[
            ['Is Valrico a good place to buy a home?', 'Yes. Valrico is one of the most desirable suburbs in Tampa Bay. It offers A-rated schools (Bloomingdale HS and Newsome HS), larger lot sizes than Brandon or Riverview, no city taxes (unincorporated Hillsborough County), low flood risk (most of Valrico is in Flood Zone X), and easy access to downtown Tampa via the Selmon Expressway. Home values have remained strong compared to surrounding areas.'],
            ['What are Valrico home prices in 2026?', 'The median home price in Valrico is approximately $415,000 as of 2026. Prices range from the low $300s in older subdivisions to $800K+ in gated golf communities like River Hills and Diamond Hill. Pricing varies significantly by sub-neighborhood, school zone, and lot size. Contact Barrett Henry for a current market analysis specific to your target area.'],
            ['What ZIP codes are in Valrico?', 'Valrico is served by two ZIP codes: 33594 (northern Valrico, including Bloomingdale and parts of Brandon) and 33596 (southern Valrico, including Buckhorn, Diamond Hill, River Hills, and areas bordering Lithia and Riverview).'],
          ].map(([q, a]) => (
            <div key={q as string} className="border rounded-md p-5" style={{ borderColor: 'var(--border)' }}>
              <h3 className="font-semibold text-base mb-2">{q}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{a}</p>
            </div>
          ))}
        </div>

        {/* Internal link hub */}
        <div className="mt-8 text-[15px] leading-[1.8]">
          <p>
            <strong style={{ color: 'var(--ink)' }}>Quick links:</strong>{' '}
            <Link href="/valrico-realtor/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Your Valrico REALTOR®</Link> &middot;{' '}
            <Link href="/best-realtor-in-valrico/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Best realtor in Valrico</Link> &middot;{' '}
            <Link href="/about/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>About Barrett Henry</Link> &middot;{' '}
            <Link href="/valrico-real-estate-agent/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Valrico real estate agent</Link> &middot;{' '}
            <Link href="/blog/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Blog</Link>
          </p>
        </div>

        {/* EEAT author block */}
        <div className="flex items-center gap-4 p-5 rounded-md border mt-10" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm)' }}>
          <div style={{ position: 'relative', width: 72, height: 72, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <Image src="/barrett-henry.png" alt="Barrett Henry REALTOR Valrico FL" fill className="object-cover" sizes="72px" />
          </div>
          <div>
            <p className="font-semibold text-sm" style={{ color: 'var(--ink)' }}>Barrett Henry, REALTOR® | Broker Associate, REMAX Collective</p>
            <p className="text-xs mt-0.5" style={{ color: 'var(--ink-soft)' }}>23+ years experience · Valrico specialist · e-PRO, MRP, SRS designations</p>
            <p className="text-xs mt-1" style={{ color: 'var(--ink-soft)' }}>Covers all 38+ Valrico neighborhoods in ZIP codes 33594 and 33596</p>
            <a href="tel:8137337907" className="text-xs font-semibold no-underline mt-1 inline-block" style={{ color: 'var(--accent)' }}>(813) 733-7907</a>
          </div>
        </div>

        {/* Bloomingdale Ave image */}
        <div style={{ position: 'relative', aspectRatio: '16/7', marginTop: 24, marginBottom: 8, borderRadius: 8, overflow: 'hidden' }}>
          <Image src="/images/roads/valrico-fl-bloomingdale-avenue-td-bank.jpg" alt="Bloomingdale Avenue Valrico FL real estate corridor" fill className="object-cover" sizes="(max-width:768px) 100vw, 1140px" />
        </div>

        {/* Expanded internal links */}
        <div className="mt-8 text-[15px] leading-[1.8]">
          <p>
            <strong style={{ color: 'var(--ink)' }}>More Valrico resources:</strong>{' '}
            <Link href="/valrico-relocation-guide/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Relocation guide</Link> &middot;{' '}
            <Link href="/living-in-valrico/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Living in Valrico</Link> &middot;{' '}
            <Link href="/valrico-cost-of-living/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Cost of living</Link> &middot;{' '}
            <Link href="/valrico-school-zones/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>School zones</Link> &middot;{' '}
            <Link href="/valrico-vs-brandon/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Valrico vs Brandon</Link> &middot;{' '}
            <Link href="/valrico-vs-riverview/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Valrico vs Riverview</Link> &middot;{' '}
            <Link href="/is-valrico-safe/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Is Valrico safe?</Link> &middot;{' '}
            <Link href="/valrico-investment-property/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Investment properties</Link> &middot;{' '}
            <Link href="/valrico-property-management/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Property management</Link> &middot;{' '}
            <Link href="/valrico-55-plus-communities/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>55+ communities</Link>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-md text-center" style={{ background: 'var(--cream-warm)' }}>
          <h3 className="font-serif text-lg mb-2">Need help with Valrico real estate?</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--ink-soft)' }}>Barrett Henry, REALTOR® &middot; Broker Associate &middot; REMAX Collective &middot; 23+ years experience</p>
          <a href="tel:8137337907" className="btn-solid mr-2">(813) 733-7907</a>
          <a href="mailto:barrett@nowtb.com" className="btn-ghost">Email Barrett</a>
        </div>
      </div>

      {/* JSON-LD structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema[0]) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema[1]) }} />

      {/* BreadcrumbList JSON-LD */}
      
      {/* Lead Capture Form */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
          { "@type": "ListItem", "position": 2, "name": "Valrico Real Estate", "item": "https://valricoagent.com/valrico-real-estate/" },
        ]
      }) }} />
    </>
  );
}
