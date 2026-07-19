'use client';
import Link from 'next/link';
import FAQSchema from '../components/FAQSchema';

/**
 * Neighborhoods Hub Page, lists all 32 Valrico neighborhoods
 * as a grid of cards with price ranges, school zones, and links.
 */

/* ── Neighborhood data for the card grid ── */
const neighborhoods = [
  { name: 'Bloomingdale', slug: 'bloomingdale', price: '$300K–$500K', school: 'Bloomingdale HS', homes: '5,200+', highlight: 'Largest planned community in Valrico' },
  { name: 'River Hills', slug: 'river-hills', price: '$500K–$1M+', school: 'Newsome HS', homes: '900+', highlight: 'Gated luxury with golf course' },
  { name: 'Diamond Hill', slug: 'diamond-hill', price: '$350K–$550K+', school: 'Bloomingdale HS', homes: '200+', highlight: 'Large lots, no HOA options' },
  { name: 'Buckhorn', slug: 'buckhorn', price: '$350K–$500K', school: 'Newsome HS', homes: '1,500+', highlight: 'Boyette corridor, newer builds' },
  { name: 'Crestwood Estates', slug: 'crestwood-estates', price: '$600K–$1M+', school: 'Newsome HS', homes: '150+', highlight: 'Estate-sized lots, luxury homes' },
  { name: 'Twin Lakes', slug: 'twin-lakes', price: '$375K–$475K', school: 'Newsome HS', homes: '300+', highlight: 'Lakefront living, family-friendly' },
  { name: 'Arista', slug: 'arista', price: '$380K–$500K', school: 'Newsome HS', homes: '250+', highlight: 'New construction community' },
  { name: 'Brentwood Hills', slug: 'brentwood-hills', price: '$350K–$500K', school: 'Newsome HS', homes: '400+', highlight: 'Community pool, dual ZIP codes' },
  { name: 'Bloomingdale Oaks', slug: 'bloomingdale-oaks', price: '$350K–$475K', school: 'Bloomingdale HS', homes: '300+', highlight: 'Popular Bloomingdale sub-section' },
  { name: 'Bloomingdale East', slug: 'bloomingdale-east', price: '$300K–$450K', school: 'Bloomingdale HS', homes: '250+', highlight: 'Affordable Bloomingdale entry' },
  { name: 'Bloomingdale Cove', slug: 'bloomingdale-cove', price: '$320K–$460K', school: 'Bloomingdale HS', homes: '200+', highlight: 'Quiet cul-de-sac streets' },
  { name: 'Lake Valrico', slug: 'lake-valrico', price: '$300K–$475K', school: 'Bloomingdale HS', homes: '200+', highlight: 'Waterfront lots available' },
  { name: 'Buckhorn Preserve', slug: 'buckhorn-preserve', price: '$350K–$500K', school: 'Newsome HS', homes: '300+', highlight: 'Nature preserve views' },
  { name: 'Valri Park', slug: 'valri-park', price: '$300K–$450K', school: 'Bloomingdale HS', homes: '200+', highlight: 'Established neighborhood, mature trees' },
  { name: 'Buckhorn Springs Manor', slug: 'buckhorn-springs-manor', price: '$325K–$475K', school: 'Newsome HS', homes: '150+', highlight: 'Buckhorn corridor convenience' },
  { name: 'Bent Tree Estates', slug: 'bent-tree-estates', price: '$350K–$500K', school: 'Newsome HS', homes: '150+', highlight: 'Larger lots, semi-rural feel' },
  { name: 'Buckhorn Bloomingdale', slug: 'buckhorn-bloomingdale', price: '$300K–$475K', school: 'Bloomingdale HS', homes: '200+', highlight: 'Bloomingdale HS zone at lower price' },
  { name: 'Canterbury Oaks', slug: 'canterbury-oaks', price: '$325K–$475K', school: 'Bloomingdale HS', homes: '150+', highlight: 'Quiet streets, mature landscaping' },
  { name: 'Crosby Crossings', slug: 'crosby-crossings', price: '$300K–$450K', school: 'Bloomingdale HS', homes: '150+', highlight: 'Affordable family neighborhood' },
  { name: 'Duncan Groves', slug: 'duncan-groves', price: '$300K–$475K', school: 'Bloomingdale HS', homes: '100+', highlight: 'No HOA, larger lots' },
  { name: 'Heritage Crest', slug: 'heritage-crest', price: '$380K–$500K', school: 'Newsome HS', homes: '200+', highlight: 'Newer construction, modern layouts' },
  { name: 'Kings Mill', slug: 'kings-mill', price: '$325K–$475K', school: 'Bloomingdale HS', homes: '150+', highlight: 'Established community with pool' },
  { name: 'Lakemont', slug: 'lakemont', price: '$325K–$475K', school: 'Bloomingdale HS', homes: '200+', highlight: 'Lake views, family-oriented' },
  { name: 'Legends Pass', slug: 'legends-pass', price: '$300K–$450K', school: 'Bloomingdale HS', homes: '100+', highlight: 'Compact community, low fees' },
  { name: 'Northwood Estates', slug: 'northwood-estates', price: '$325K–$500K', school: 'Bloomingdale HS', homes: '100+', highlight: 'Spacious lots, 33594 ZIP' },
  { name: 'River Hills Masters', slug: 'river-hills-masters', price: '$450K–$800K', school: 'Newsome HS', homes: '100+', highlight: 'Golf course community section' },
  { name: 'Savannah Landings', slug: 'savannah-landings', price: '$350K–$500K', school: 'Newsome HS', homes: '150+', highlight: 'Newer homes, community amenities' },
  { name: 'Shetland Ridge', slug: 'shetland-ridge', price: '$300K–$450K', school: 'Bloomingdale HS', homes: '100+', highlight: 'Quiet subdivision, no-frills' },
  { name: 'Valrico Forest', slug: 'valrico-forest', price: '$380K–$500K', school: 'Newsome HS', homes: '200+', highlight: 'New construction available' },
  { name: 'Valrico Hills', slug: 'valrico-hills', price: '$300K–$450K', school: 'Bloomingdale HS', homes: '150+', highlight: 'Affordable, close to shopping' },
  { name: 'Valrico Oaks', slug: 'valrico-oaks', price: '$300K–$450K', school: 'Bloomingdale HS', homes: '150+', highlight: 'Oak-canopy streets, no HOA' },
  { name: 'Wellington', slug: 'wellington', price: '$350K–$500K', school: 'Newsome HS', homes: '200+', highlight: 'Well-maintained, community pool' },
];

/* ── FAQ items for the FAQ section + schema ── */
const faqItems = [
  {
    question: 'What are the best neighborhoods in Valrico FL?',
    answer: 'The best Valrico neighborhood depends on your priorities. Bloomingdale ($300K–$500K) is the largest with 5,200+ homes and Bloomingdale HS zoning. River Hills ($500K–$1M+) is gated luxury with a golf course. Buckhorn ($350K–$500K) offers Newsome HS zoning along the Boyette corridor. Diamond Hill ($350K–$550K+) has large lots with no HOA. Barrett Henry covers all 32 neighborhoods and matches buyers to the right fit. Call (813) 733-7907.',
  },
  {
    question: 'How many neighborhoods are in Valrico FL?',
    answer: 'Valrico has 32 distinct neighborhoods and subdivisions spread across ZIP codes 33594 and 33596. These range from large planned communities like Bloomingdale (5,200+ homes) to smaller subdivisions like Shetland Ridge and Legends Pass. Each has its own character, price range, HOA structure, and school zoning.',
  },
  {
    question: 'What is the cheapest neighborhood in Valrico?',
    answer: 'Entry-level Valrico neighborhoods start around $275K–$300K. Bloomingdale East, Valrico Hills, Valrico Oaks, and Crosby Crossings offer some of the most affordable homes in the area. These neighborhoods provide solid value with access to top-rated schools and suburban amenities without the premium pricing of gated communities.',
  },
  {
    question: 'What is the most expensive neighborhood in Valrico?',
    answer: 'River Hills and Crestwood Estates are Valrico\'s most expensive neighborhoods, with homes ranging from $500K to over $1 million. River Hills is a gated community with a golf course, larger lots, and mature landscaping. Crestwood Estates features estate-sized lots and custom-built luxury homes near the Boyette corridor.',
  },
  {
    question: 'Which Valrico neighborhoods have no HOA?',
    answer: 'Several Valrico neighborhoods have no mandatory HOA, including Diamond Hill, Duncan Groves, and portions of Bloomingdale. About half of Bloomingdale\'s 32+ sub-neighborhoods operate with voluntary or no HOA. No-HOA homes appeal to buyers who want fewer restrictions and no monthly fees. Barrett Henry can identify every no-HOA option, call (813) 733-7907.',
  },
  {
    question: 'What school zones cover Valrico neighborhoods?',
    answer: 'Valrico neighborhoods are primarily zoned for two high schools: Bloomingdale High School (western Valrico - Bloomingdale, Lake Valrico, Valri Park, and others) and Newsome High School (eastern and southern Valrico - Buckhorn, River Hills, Arista, Twin Lakes, and others). School zoning is the single biggest price driver in Valrico real estate.',
  },
];

export default function NeighborhoodsHubPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <div style={{ background: 'var(--blue-deep)' }} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          {/* Eyebrow text */}
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,.5)' }}>Valrico Real Estate</div>

          {/* H1, primary keyword first */}
          <h1 className="font-serif text-[clamp(26px,4vw,38px)] leading-tight tracking-tight mb-4">
            Valrico FL Neighborhoods, 32 Communities, One Local Expert
          </h1>

          {/* Hero paragraph */}
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{ color: 'rgba(255,255,255,.75)' }}>
            Barrett Henry, REALTOR&reg; and Broker Associate with REMAX Collective, covers every neighborhood in Valrico. From Bloomingdale to River Hills to Buckhorn, 32 communities across ZIP codes 33594 and 33596. Browse them all below and find the one that fits your budget, lifestyle, and school zone.
          </p>

          {/* CTA buttons */}
          <div className="flex gap-3 flex-wrap">
            <Link href="/valrico-fl-homes-for-sale/" className="btn-solid">
              <span className="material-icons" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6 }}>search</span>
              Search All Valrico Homes
            </Link>
            <a href="tel:8137337907" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">
              <span className="material-icons" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6 }}>phone</span>
              (813) 733-7907
            </a>
          </div>
        </div>
      </div>

      {/* ═══ QUICK ANSWER (AEO) ═══ */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '8px 24px 0' }}>
        <div style={{ background: '#fafafa', border: '1px solid #e8e8e8', borderRadius: 10, padding: '20px 24px', marginBottom: 24 }}>
          <p style={{ fontSize: 15, color: '#222', lineHeight: 1.7, margin: 0 }}>
            <strong>Valrico, Florida has 32 neighborhoods across two ZIP codes (33594 and 33596).</strong> Bloomingdale is the largest (5,200+ homes, $300K–$500K). River Hills and Crestwood Estates are luxury options ($500K–$1M+). Buckhorn and Arista offer newer construction with Newsome HS zoning. Diamond Hill provides large lots with no HOA. Barrett Henry, REALTOR® with REMAX Collective, covers all 32, call <a href="tel:8137337907" style={{ color: '#003da5', fontWeight: 600 }}>(813) 733-7907</a>.
          </p>
        </div>
      </div>

      {/* ═══ QUICK STATS ═══ */}
      <div style={{ background: 'var(--cream, #faf8f5)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-12 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['32', 'Neighborhoods'],
            ['$275K–$1M+', 'Price range'],
            ['33594 & 33596', 'ZIP codes'],
            ['2 High Schools', 'Bloomingdale & Newsome'],
          ].map(([v, l]) => (
            <div key={l} className="bg-white rounded-md p-5 border" style={{ borderColor: 'var(--border)' }}>
              <span className="font-serif text-2xl block mb-1" style={{ color: 'var(--ink)' }}>{v}</span>
              <span className="text-sm" style={{ color: 'var(--ink-muted, #999)' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ ALL 32 NEIGHBORHOODS GRID ═══ */}
      <section className="max-w-[1140px] mx-auto px-7 py-16">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <h2 className="font-serif text-[clamp(22px,3vw,30px)] mb-3" style={{ color: 'var(--ink)' }}>
            Every Valrico Neighborhood - At a Glance
          </h2>
          <p className="text-[15px] leading-relaxed max-w-[640px] mx-auto" style={{ color: 'var(--ink-soft)' }}>
            Click any neighborhood for a detailed guide with pricing, schools, HOA info, commute times, and who it fits best. Barrett knows every section of every community.
          </p>
        </div>

        {/* Card grid, 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {neighborhoods.map((n) => (
            <Link
              key={n.slug}
              href={`/neighborhoods/${n.slug}/`}
              className="block rounded-lg border p-5 no-underline transition-all hover:shadow-md hover:-translate-y-0.5"
              style={{ borderColor: 'var(--border)', background: '#fff' }}
            >
              {/* Neighborhood name */}
              <h3 className="font-serif text-lg mb-2" style={{ color: 'var(--ink)' }}>
                {n.name}
              </h3>

              {/* Price + school badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#fafafa', color: '#003da5' }}>
                  <span className="material-icons" style={{ fontSize: 14 }}>attach_money</span>
                  {n.price}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: '#f0fdf4', color: '#166534' }}>
                  <span className="material-icons" style={{ fontSize: 14 }}>school</span>
                  {n.school}
                </span>
              </div>

              {/* Highlight line */}
              <p className="text-sm mb-2" style={{ color: 'var(--ink-soft)' }}>
                {n.highlight}
              </p>

              {/* Homes count + arrow */}
              <div className="flex items-center justify-between">
                <span className="text-xs" style={{ color: 'var(--ink-muted, #999)' }}>{n.homes} homes</span>
                <span className="material-icons text-sm" style={{ color: 'var(--accent, #003da5)' }}>arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ HOW BARRETT HELPS ═══ */}
      <section style={{ background: 'var(--cream, #faf8f5)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14 items-start">
            {/* Left content */}
            <div>
              <h2 className="font-serif text-[clamp(22px,3vw,28px)] mb-5" style={{ color: 'var(--ink)' }}>
                How Does Barrett Henry Help You Choose the Right Valrico Neighborhood?
              </h2>
              <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>
                Picking a neighborhood in Valrico is not just about price. School zoning, HOA structure, lot size, flood zone risk, commute routes, and resale trends all factor in. Barrett Henry brings 23+ years of real estate experience to every conversation, and he will tell you the truth about each neighborhood, including the ones he would not recommend for your situation.
              </p>
              <p className="text-[15px] leading-[1.8] mb-4" style={{ color: 'var(--ink-soft)' }}>
                Most agents cover a wide area and know a little about everywhere. Barrett specializes in Valrico. He knows which sub-neighborhoods inside Bloomingdale hold value strongest, which sections of Buckhorn are in flood zones, and which streets in River Hills back up to the golf course. That level of detail protects your investment.
              </p>
              <p className="text-[15px] leading-[1.8] mb-6" style={{ color: 'var(--ink-soft)' }}>
                Whether you are a first-time buyer looking for affordable homes with strong schools, a growing family that needs more space, or an investor targeting rental-friendly neighborhoods, Barrett matches you with the right community. No pressure, no runaround. Call <a href="tel:8137337907" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>(813) 733-7907</a> or <Link href="/get-help/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>send a message</Link>.
              </p>

              {/* What Barrett covers checklist */}
              <div className="space-y-3">
                {[
                  ['Sub-neighborhood pricing', 'Comps from your specific section, not ZIP code averages'],
                  ['School zone guidance', 'Bloomingdale HS vs. Newsome HS zoning mapped to every street'],
                  ['HOA research', 'Mandatory, voluntary, or no HOA, verified before you offer'],
                  ['Flood zone checks', 'FEMA zone status and insurance cost estimates for any address'],
                  ['Investment analysis', 'Rental yield, appreciation trends, and tenant demand by neighborhood'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3 items-start">
                    <span className="material-icons mt-0.5 flex-shrink-0" style={{ fontSize: 20, color: 'var(--accent, #003da5)' }}>check_circle</span>
                    <p className="text-[14px] leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                      <strong style={{ color: 'var(--ink)' }}>{title}</strong>, {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar - CTA card */}
            <div className="space-y-6">
              {/* Phone CTA */}
              <div className="rounded-md p-6" style={{ background: 'var(--blue-deep, #003da5)' }}>
                <h3 className="font-serif text-lg text-white mb-3">Talk to Barrett About Neighborhoods</h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,.7)' }}>
                  Not sure which Valrico neighborhood fits? Barrett will walk you through the options based on your budget, schools, and lifestyle, no pressure.
                </p>
                <a href="tel:8137337907" className="btn-solid block text-center text-sm mb-3">
                  <span className="material-icons" style={{ fontSize: 16, verticalAlign: 'middle', marginRight: 6 }}>phone</span>
                  Call (813) 733-7907
                </a>
                <Link href="/get-help/" className="btn-ghost block text-center text-sm">Send a Message</Link>
              </div>

              {/* Quick links */}
              <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)' }}>
                <h3 className="font-serif text-lg mb-3" style={{ color: 'var(--ink)' }}>Valrico Resources</h3>
                <ul className="space-y-2">
                  {[
                    ['Search all Valrico homes', '/valrico-fl-homes-for-sale/'],
                    ['What\'s my home worth?', '/valrico-fl-home-values/'],
                    ['Valrico school zone guide', '/valrico-school-zones/'],
                    ['First-time buyer guide', '/valrico-first-time-homebuyer/'],
                    ['Valrico market report', '/valrico-market-report/'],
                    ['No-HOA homes', '/valrico-no-hoa-homes/'],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>
                        {label} &rarr;
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Selling CTA */}
              <div className="rounded-md p-6 border" style={{ borderColor: 'var(--border)', background: 'var(--cream-warm, #fdf8f0)' }}>
                <h3 className="font-serif text-lg mb-3" style={{ color: 'var(--ink)' }}>Selling Your Valrico Home?</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--ink-soft)' }}>
                  Free CMA based on actual closed comps in your subdivision, not a Zestimate.
                </p>
                <Link href="/valrico-fl-home-values/" className="btn-solid block text-center text-sm">Get Your Home Value</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCHOOL ZONE BREAKDOWN ═══ */}
      <section className="max-w-[1140px] mx-auto px-7 py-16">
        <h2 className="font-serif text-[clamp(22px,3vw,28px)] mb-3 text-center" style={{ color: 'var(--ink)' }}>
          Valrico Neighborhoods by School Zone
        </h2>
        <p className="text-[15px] text-center mb-10 max-w-[640px] mx-auto" style={{ color: 'var(--ink-soft)' }}>
          School zoning is the single biggest price driver in Valrico. Here is how the 32 neighborhoods split between the two high school zones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bloomingdale HS zone */}
          <div className="rounded-lg border p-6" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-icons" style={{ fontSize: 28, color: '#003da5' }}>school</span>
              <h3 className="font-serif text-xl" style={{ color: 'var(--ink)' }}>Bloomingdale High School Zone</h3>
            </div>
            <ul className="space-y-2">
              {neighborhoods.filter(n => n.school === 'Bloomingdale HS').map(n => (
                <li key={n.slug}>
                  <Link href={`/neighborhoods/${n.slug}/`} className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>
                    {n.name}
                  </Link>
                  <span className="text-xs ml-2" style={{ color: 'var(--ink-muted, #999)' }}>{n.price}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsome HS zone */}
          <div className="rounded-lg border p-6" style={{ borderColor: 'var(--border)' }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-icons" style={{ fontSize: 28, color: '#166534' }}>school</span>
              <h3 className="font-serif text-xl" style={{ color: 'var(--ink)' }}>Newsome High School Zone</h3>
            </div>
            <ul className="space-y-2">
              {neighborhoods.filter(n => n.school === 'Newsome HS').map(n => (
                <li key={n.slug}>
                  <Link href={`/neighborhoods/${n.slug}/`} className="text-sm no-underline hover:underline" style={{ color: 'var(--accent)' }}>
                    {n.name}
                  </Link>
                  <span className="text-xs ml-2" style={{ color: 'var(--ink-muted, #999)' }}>{n.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center mt-8">
          <Link href="/valrico-school-zones/" className="font-semibold text-sm no-underline" style={{ color: 'var(--accent)' }}>
            Full Valrico School Zone Guide &rarr;
          </Link>
        </p>
      </section>

      {/* ═══ BLUE CTA BANNER ═══ */}
      <section style={{ background: 'linear-gradient(135deg, #003da5, #001f5c)', padding: '56px 0', textAlign: 'center' }}>
        <div className="max-w-[1140px] mx-auto px-7">
          <h2 className="font-serif text-[clamp(20px,3vw,28px)] text-white mb-3">
            Not Sure Which Valrico Neighborhood Fits?
          </h2>
          <p className="text-[15px] mb-7 max-w-[560px] mx-auto" style={{ color: 'rgba(255,255,255,.7)' }}>
            Tell Barrett your budget, school preference, and must-haves. He will narrow 32 neighborhoods down to the 2 or 3 that actually match, and tell you which ones to avoid.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="tel:8137337907" className="btn-solid">
              <span className="material-icons" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6 }}>phone</span>
              Call (813) 733-7907
            </a>
            <Link href="/get-help/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">
              <span className="material-icons" style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 6 }}>email</span>
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTION ═══ */}
      <FAQSchema
        heading="Valrico Neighborhoods - Frequently Asked Questions"
        items={faqItems}
      />

      {/* ═══ EXPLORE MORE ═══ */}
      <section className="max-w-[1140px] mx-auto px-7 py-12">
        <h2 className="font-serif text-2xl mb-4" style={{ color: 'var(--ink)' }}>Explore More Valrico Resources</h2>
        <p className="text-[15px] leading-[1.8]" style={{ color: 'var(--ink-soft)' }}>
          <Link href="/valrico-fl-homes-for-sale/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Search Homes</Link> &middot;{' '}
          <Link href="/valrico-fl-home-values/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Home Values</Link> &middot;{' '}
          <Link href="/valrico-school-zones/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>School Zones</Link> &middot;{' '}
          <Link href="/sell-my-home-valrico/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Sell My Home</Link> &middot;{' '}
          <Link href="/valrico-market-report/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Market Report</Link> &middot;{' '}
          <Link href="/valrico-first-time-homebuyer/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>First-Time Buyers</Link> &middot;{' '}
          <Link href="/valrico-no-hoa-homes/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>No-HOA Homes</Link> &middot;{' '}
          <Link href="/valrico-pool-homes/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Pool Homes</Link> &middot;{' '}
          <Link href="/valrico-property-management/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Property Management</Link> &middot;{' '}
          <Link href="/blog/" className="no-underline font-semibold" style={{ color: 'var(--accent)' }}>Blog</Link>
        </p>
      </section>

      {/* ═══ SCHEMA: BreadcrumbList + RealEstateAgent ═══ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
              { "@type": "ListItem", "position": 2, "name": "Neighborhoods", "item": "https://valricoagent.com/neighborhoods/" },
            ],
          },
          {
            "@type": "RealEstateAgent",
            "name": "Barrett Henry",
            "telephone": "(813) 733-7907",
            "email": "barrett@nowtb.com",
            "url": "https://valricoagent.com",
            "jobTitle": "Broker Associate",
            "description": "Barrett Henry is a licensed Broker Associate with REMAX Collective covering all 32 Valrico FL neighborhoods. 23+ years of real estate experience. Specializes in Bloomingdale, River Hills, Buckhorn, Diamond Hill, and all Valrico communities.",
            "image": "https://valricoagent.com/barrett-henry.png",
            "worksFor": { "@type": "Organization", "name": "REMAX Collective" },
            "areaServed": {
              "@type": "City",
              "name": "Valrico",
              "containedInPlace": { "@type": "State", "name": "Florida" },
            },
            "hasCredential": [
              { "@type": "EducationalOccupationalCredential", "name": "Florida Real Estate Broker License" },
              { "@type": "EducationalOccupationalCredential", "name": "e-PRO" },
              { "@type": "EducationalOccupationalCredential", "name": "MRP", "description": "Military Relocation Professional" },
              { "@type": "EducationalOccupationalCredential", "name": "SRS", "description": "Seller Representative Specialist" },
            ],
            "sameAs": [
              "https://nowtb.com",
              "https://valrico.blog",
              "https://www.facebook.com/BarrettHenryREALTOR/",
              "https://www.instagram.com/thenowteam",
              "https://www.linkedin.com/in/barretthenry/",
            ],
          },
          {
            "@type": "WebPage",
            "name": "Valrico FL Neighborhoods, 32 Communities, One Local Expert",
            "url": "https://valricoagent.com/neighborhoods/",
            "description": "Explore all 32 Valrico FL neighborhoods with price ranges, school zones, and detailed guides. Barrett Henry, REALTOR® with REMAX Collective. (813) 733-7907.",
            "breadcrumb": { "@id": "https://valricoagent.com/neighborhoods/#breadcrumb" },
          },
        ],
      }) }} />
    </>
  );
}
