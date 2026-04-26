'use client';
import Link from 'next/link';

const neighborhoods = [
  // Featured — full detail cards
  { name: 'Bloomingdale', slug: 'bloomingdale', zip: '33596', price: '$300K–$500K', school: 'Bloomingdale HS', note: '5,200+ homes · 32+ sub-neighborhoods' },
  { name: 'River Hills', slug: 'river-hills', zip: '33596', price: '$400K–$800K+', school: 'Bloomingdale HS', note: 'Guard-gated · Joe Lee golf course' },
  { name: 'Diamond Hill', slug: 'diamond-hill', zip: '33594', price: '$350K–$550K+', school: 'Varies', note: 'Gated · Par-72 golf · Olympic pool' },
  { name: 'Buckhorn / Boyette', slug: 'buckhorn', zip: '33596', price: '$350K–$500K', school: 'Newsome HS', note: 'Most affordable Newsome zone entry' },
  { name: 'Twin Lakes', slug: 'twin-lakes', zip: '33596', price: '$375K–$475K', school: 'Bloomingdale HS', note: 'Lake views · Larger homes · Est. 1998' },
  { name: 'Brentwood Hills', slug: 'brentwood-hills', zip: '33594/96', price: '$340K–$475K', school: 'Bloomingdale HS', note: 'Community pool · Sidewalks · Family' },
  { name: 'Crestwood Estates', slug: 'crestwood-estates', zip: '33596', price: '$500K–$900K+', school: 'Bloomingdale HS', note: 'Estate lots · Custom homes · No CDD' },
  { name: 'Bloomingdale East', slug: 'bloomingdale-east', zip: '33596', price: '$350K–$500K', school: 'Bloomingdale HS', note: 'Larger lots · Rural transition' },
  { name: 'Bloomingdale Oaks', slug: 'bloomingdale-oaks', zip: '33596', price: '$350K–$475K', school: 'Bloomingdale HS', note: 'Most popular Bloomingdale section' },
  { name: 'Canterbury Oaks', slug: 'canterbury-oaks', zip: '33596', price: '$350K–$475K', school: 'Bloomingdale HS', note: 'HOA · Pool · Tennis amenities' },
  { name: 'Bent Tree Estates', slug: 'bent-tree-estates', zip: '33596', price: '$375K–$500K', school: 'Bloomingdale HS', note: 'Mature trees · Larger lots · Quiet' },
  { name: 'Buckhorn Preserve', slug: 'buckhorn-preserve', zip: '33596', price: '$350K–$500K', school: 'Newsome HS', note: '419 homes · Park · Disc golf · Trails' },
  { name: 'Buckhorn Springs Manor', slug: 'buckhorn-springs-manor', zip: '33596', price: '$350K–$550K', school: 'Newsome HS', note: 'Near Buckhorn Springs Golf Club' },
  { name: 'Crosby Crossings', slug: 'crosby-crossings', zip: '33596', price: '$370K–$475K', school: 'Bloomingdale HS', note: 'Newer construction · Modern plans' },
  { name: 'Wellington', slug: 'wellington', zip: '33596', price: '$375K–$475K', school: 'Bloomingdale HS', note: 'HOA · Pool · Tennis · Established' },
  { name: 'Shetland Ridge', slug: 'shetland-ridge', zip: '33596', price: '$400K–$550K', school: 'Bloomingdale HS', note: 'Larger homes · Newer construction' },
  { name: 'Duncan Groves', slug: 'duncan-groves', zip: '33596', price: '$350K–$450K', school: 'Bloomingdale HS', note: 'Near Lithia Pinecrest · Parks access' },
  { name: 'Lakemont', slug: 'lakemont', zip: '33596', price: '$350K–$475K', school: 'Bloomingdale HS', note: 'Lake-influenced lots · Quiet streets' },
  { name: 'Bloomingdale Cove', slug: 'bloomingdale-cove', zip: '33596', price: '$375K–$500K', school: 'Bloomingdale HS', note: 'Updated homes · Popular floor plans' },
  { name: 'Buckhorn Bloomingdale', slug: 'buckhorn-bloomingdale', zip: '33596', price: '$300K–$420K', school: 'Bloomingdale HS', note: '~60 homes · Mature oaks · Affordable' },
  { name: 'River Hills Masters', slug: 'river-hills-masters', zip: '33596', price: '$350K–$550K', school: 'Bloomingdale HS', note: 'Within River Hills · Guard-gated' },
  { name: 'Savannah Landings', slug: 'savannah-landings', zip: '33596', price: '$300K–$375K', school: 'Bloomingdale HS', note: 'Townhomes · HOA maintained · Affordable' },
  { name: 'Kings Mill', slug: 'kings-mill', zip: '33596', price: '$275K–$350K', school: 'Bloomingdale HS', note: 'Townhomes · Gated · Lowest Valrico entry' },
  { name: 'Lake Valrico Area', slug: 'lake-valrico', zip: '33594', price: '$350K–$500K', school: 'Varies', note: 'Waterfront · 1+ acre lots · No HOA options' },
  { name: 'Legends Pass', slug: 'legends-pass', zip: '33594', price: '$400K–$550K', school: 'Varies', note: 'Newer homes · Near Diamond Hill' },
  { name: 'Valrico Oaks', slug: 'valrico-oaks', zip: '33594', price: '$350K–$500K', school: 'Varies', note: 'Established · Near SR-60 corridor' },
  { name: 'Valrico Hills', slug: 'valrico-hills', zip: '33594', price: '$325K–$425K', school: 'Varies', note: 'Older established · Affordable entry' },
  { name: 'Valri Park', slug: 'valri-park', zip: '33594', price: '$280K–$375K', school: 'Varies', note: 'Most affordable Valrico address' },
  { name: 'Arista', slug: 'arista', zip: '33594', price: '$425K–$575K', school: 'Varies', note: 'Gated · New construction · Upscale' },
  { name: 'Valrico Forest', slug: 'valrico-forest', zip: '33594', price: '$400K–$525K', school: 'Varies', note: 'Newest Craftsman-style homes' },
  { name: 'Heritage Crest', slug: 'heritage-crest', zip: '33594', price: '$400K–$500K', school: 'Varies', note: 'New construction · Modern designs' },
  { name: 'Northwood Estates', slug: 'northwood-estates', zip: '33594', price: '$425K–$575K', school: 'Varies', note: 'WestBay homes · No CDD · Boutique' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <div className="max-w-[1140px] mx-auto px-7 pt-[72px] pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          <div>
            <h1 className="font-serif text-[clamp(30px,5vw,42px)] leading-[1.18] tracking-tight mb-5" style={{ color: 'var(--ink)' }}>
              Your Valrico real estate agent who actually knows the market.
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--ink-soft)', maxWidth: 480 }}>
              Barrett Henry is a Broker Associate with <a href="https://nowtb.com" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>RE/MAX Collective</a> and the Valrico realtor families in 33594 and 33596 trust when it&apos;s time to buy, sell, or figure out what their home is really worth. No scripts. No runaround. Just 23 years of doing this for a living.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/valrico-fl-home-values/" className="btn-solid">What&apos;s my home worth?</Link>
              <Link href="/valrico-fl-homes-for-sale/" className="btn-ghost">Search Valrico homes</Link>
            </div>
          </div>
          <div className="bg-[var(--cream-warm)] rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://nowtb.com/wp-content/uploads/2026/01/Barrett-Henry-Real-Estate-Agent-600.webp" alt="Barrett Henry, Valrico Real Estate Agent, RE/MAX Collective" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 mt-14 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          {[['23+','Years in real estate'],['5.0','Google rating'],['33594 & 33596','Valrico zip codes served'],['RE/MAX','Collective · Brandon office']].map(([num,label]) => (
            <div key={label}><span className="font-serif text-[26px] block" style={{ color: 'var(--ink)' }}>{num}</span><span className="text-[13px]" style={{ color: 'var(--ink-muted)' }}>{label}</span></div>
          ))}
        </div>

        {/* Logo strip */}
        <div className="mt-10 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex items-center gap-10 flex-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="/" aria-label="Home — Valrico Realtor">
              <img src="https://nowtb.com/wp-content/uploads/2026/02/REMAX_Logo_Barrett_Henry__Black_.png" alt="Barrett Henry RE/MAX Collective — Home" className="h-[42px] w-auto hover:opacity-80 transition-opacity" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://nowtb.com/luxury/" target="_blank" rel="noopener" aria-label="RE/MAX Collection Luxury on nowtb.com">
              <img src="https://nowtb.com/wp-content/uploads/2026/02/The-REMAX-Collection-Logo-RGB-White.webp" alt="The RE/MAX Collection — Luxury Homes" className="h-[48px] w-auto hover:opacity-80 transition-opacity" style={{ filter: 'invert(1) brightness(.35)' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="https://nowtb.com/commercial/" target="_blank" rel="noopener" aria-label="RE/MAX Commercial on nowtb.com">
              <img src="https://nowtb.com/wp-content/uploads/2026/02/REMAX-Commercial-RGB-White.webp" alt="RE/MAX Commercial" className="h-[44px] w-auto hover:opacity-80 transition-opacity" style={{ filter: 'invert(1) brightness(.35)' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </a>
          </div>
          <div className="mt-4 flex items-center gap-4 flex-wrap">
            <span className="text-[13px] font-semibold" style={{ color: 'var(--ink-soft)' }}>e-PRO · MRP · SRS · Broker Associate</span>
            <span className="text-[13px]" style={{ color: 'var(--ink-muted)' }}>·</span>
            <a href="https://nowtb.com/about/" className="text-[13px] font-semibold no-underline" style={{ color: 'var(--accent)' }}>Full bio on nowtb.com →</a>
          </div>
        </div>
      </div>

      {/* MARKET */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-[72px]" id="market">
          <div className="eyebrow">Valrico Market · Q1 2026</div>
          <h2 className="sec-title">What&apos;s happening in Valrico right now</h2>
          <p className="sec-intro">Valrico&apos;s market is holding steady. No city taxes, strong school zones, and consistent buyer demand keep the 33594 and 33596 zip codes competitive without the chaos of 2021. <a href="https://nowtb.com/valrico/" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>Full Valrico market details on nowtb.com →</a></p>
          {/*
            === MARKET DATA AUTOMATION PLACEHOLDER ===
            When automation is set up, replace the inline array below with:
              import marketData from '@/data/valrico-market.json';
              Then map over marketData.stats

            Expected JSON structure (/public/data/valrico-market.json):
            {
              "updated": "April 2026",
              "source": "Stellar MLS via nowtb.com",
              "stats": [
                { "val": "~$415K", "label": "Median sale price", "note": "Stable year-over-year" },
                { "val": "$210–$220", "label": "Price per square foot", "note": "Varies by subdivision" },
                { "val": "30–55 days", "label": "Typical days on market", "note": "Depends on pricing" },
                { "val": "$300K–$1M+", "label": "Price range across Valrico", "note": "Starter homes to River Hills estates" }
              ]
            }
            See /scripts/scrape-market-data.md for full pipeline docs.
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['~$415K','Median sale price','Stable year-over-year'],
              ['$210–$220','Price per square foot','Varies by subdivision'],
              ['30–55 days','Typical days on market','Depends on pricing'],
              ['$300K–$1M+','Price range across Valrico','Starter homes to River Hills estates'],
            ].map(([val,label,note]) => (
              <div key={label} className="bg-white rounded-md p-6 border" style={{ borderColor: 'var(--border)' }}>
                <span className="font-serif text-[28px] block mb-1" style={{ color: 'var(--ink)' }}>{val}</span>
                <span className="text-[13px] block mb-2.5" style={{ color: 'var(--ink-muted)' }}>{label}</span>
                <span className="text-xs px-2 py-1 rounded inline-block" style={{ color: 'var(--ink-muted)', background: 'var(--cream)' }}>{note}</span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[12px] text-center" style={{ color: 'var(--ink-muted)' }}>
            Market data updated April 2026 · Sourced from Stellar MLS via <a href="https://nowtb.com/valrico/" className="no-underline" style={{ color: 'var(--accent)' }}>nowtb.com</a> · Numbers reflect 33594 &amp; 33596 zip codes
          </p>
        </div>
      </div>

      {/* NEIGHBORHOODS */}
      <div className="max-w-[1200px] mx-auto px-7 py-[72px]" id="neighborhoods">
        <div className="eyebrow">Every Valrico Neighborhood</div>
        <h2 className="sec-title">32 neighborhoods. One REALTOR® who knows them all.</h2>
        <p className="sec-intro">Valrico is not one market. It&apos;s dozens of distinct neighborhoods across 33594 and 33596, each with its own price range, school zone, and character. Barrett Henry, REALTOR® covers every one.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {neighborhoods.map((h) => (
            <Link key={h.slug} href={`/neighborhoods/${h.slug}/`} className="border rounded-md overflow-hidden bg-white hover:shadow-md transition-shadow no-underline group" style={{ borderColor: 'var(--border)', color: 'inherit' }}>
              <div className="p-5">
                <div className="font-serif text-[17px] mb-0.5 group-hover:text-[var(--accent)] transition-colors">{h.name}</div>
                <div className="text-[12px] mb-3" style={{ color: 'var(--ink-muted)' }}>{h.zip} · {h.school}</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-serif text-[18px] font-bold" style={{ color: 'var(--ink)' }}>{h.price}</span>
                </div>
                <div className="text-[12px] leading-relaxed" style={{ color: 'var(--ink-muted)' }}>{h.note}</div>
              </div>
              <div className="px-5 py-2.5 text-[12px] font-semibold group-hover:bg-[var(--cream)] transition-colors" style={{ borderTop: '1px solid var(--border-light)', color: 'var(--accent)' }}>
                View {h.name.split(' /')[0].split(' Area')[0]} homes →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* BORDERING AREAS */}
      <div className="py-[72px]" style={{ background: 'var(--blue-deep)' }}>
        <div className="max-w-[1140px] mx-auto px-7 mb-6">
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,.5)' }}>Bordering Communities</div>
          <h2 className="sec-title text-white">We sell here too</h2>
          <p className="sec-intro" style={{ color: 'rgba(255,255,255,.65)' }}>These communities border Valrico, share school zones, and overlap in lifestyle. Barrett works all of them.</p>
        </div>
        <div className="max-w-[1140px] mx-auto px-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            ['FishHawk Ranch','Lithia 33547. Premier master-planned, Newsome HS zone. $450K–$800K+. Resort pools, trails, village center. Technically Lithia, but Valrico buyers always compare.'],
            ['Lithia','33547. Acreage properties, equestrian lots, newer subdivisions. South of Valrico along Lithia Pinecrest. Alafia River State Park access.'],
            ['Brandon','33511 / 33510. Valrico\'s western neighbor. More commercial, lower entry price, Westfield Brandon Mall corridor. Many buyers consider both.'],
            ['Riverview','33569 / 33579. South of Valrico along US-301. Rapid growth, newer construction, Sumner corridor. Different feel but overlapping buyer pool.'],
            ['Plant City','33563 / 33566 / 33567. East of Valrico via SR-60 and Dover. Strawberry capital, more rural character, lower price points. Buyers who want acreage often cross-shop Valrico and Plant City.'],
            ['Dover','33527. North of Valrico along Valrico Rd. Rural character, larger lots, Sydney/Dover conservation area. Popular with buyers wanting privacy and acreage while staying close to Valrico\'s schools and commercial corridor.'],
          ].map(([name, desc]) => (
            <div key={name} className="p-6 rounded-md border border-white/[.12] hover:border-white/[.3] transition-colors">
              <h4 className="font-serif text-[17px] text-white mb-1.5">{name}</h4>
              <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(255,255,255,.55)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SCHOOLS */}
      <div style={{ background: 'var(--cream-warm)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-[72px]" id="schools">
          <div className="eyebrow">Schools</div>
          <h2 className="sec-title">School zones drive Valrico home values</h2>
          <p className="sec-intro">More than almost any other factor, your school zone determines what your Valrico home is worth and who wants to buy it.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { badge: '8', bg: 'var(--blue-mid)', name: 'Bloomingdale High School', type: 'Public · Grades 9-12 · 2,300+ students · 33596', desc: 'A-rated by Niche. Ranked #13 among Tampa area public high schools. AP courses, Cambridge International curriculum, Gifted program. Serves most of 33596 including Bloomingdale, River Hills, Brentwood Hills, and Twin Lakes.' },
              { badge: 'A', bg: '#065f46', name: 'Newsome High School', type: 'Public · Grades 9-12 · 3,100+ students · South 33596', desc: 'Among Hillsborough County\'s top-performing high schools. Serves the Buckhorn/Boyette corridor and FishHawk Ranch. Strong STEM programs. Being in the Newsome zone adds measurable value to homes in south Valrico.' },
              { badge: 'B+', bg: '#6b21a8', name: 'Burns Middle School', type: 'Public · Grades 6-8 · Bloomingdale Ave, Valrico', desc: 'Feeds into Bloomingdale HS. Serves central and north Valrico neighborhoods including Bloomingdale proper and Brentwood Hills.' },
              { badge: 'MS', bg: '#92400e', name: 'Mulrennan Middle School', type: 'Public · Grades 6-8 · Durant Rd, Valrico', desc: 'Feeds into Newsome HS. Serves south Valrico and the Buckhorn corridor.' },
            ].map((s) => (
              <div key={s.name} className="flex gap-[18px] p-6 bg-white rounded-md border" style={{ borderColor: 'var(--border)' }}>
                <div className="shrink-0 w-[50px] h-[50px] rounded-md flex flex-col items-center justify-center text-white font-serif text-xl font-bold" style={{ background: s.bg }}>{s.badge}</div>
                <div>
                  <h4 className="text-base font-semibold mb-0.5">{s.name}</h4>
                  <div className="text-xs mb-1.5" style={{ color: 'var(--ink-muted)' }}>{s.type}</div>
                  <div className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm" style={{ color: 'var(--ink-muted)' }}>Elementary schools: Alafia, Cimino, Brooker, Lithia Springs. <Link href="/valrico-school-zones/" className="no-underline" style={{ color: 'var(--accent)' }}>Full Valrico school zone guide →</Link></p>
        </div>
      </div>

      {/* LIFESTYLE */}
      <div className="max-w-[1140px] mx-auto px-7 py-[72px]">
        <div className="eyebrow">Living in Valrico</div>
        <h2 className="sec-title">What it&apos;s actually like here</h2>
        <p className="sec-intro">Valrico is 15 miles east of downtown Tampa but feels like a different world. Bigger lots, less traffic, better schools, and real outdoor space. For community events and local happenings, visit <a href="https://valrico.blog" target="_blank" rel="noopener" className="font-semibold no-underline" style={{ color: 'var(--accent)' }}>valrico.blog</a>.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {[
            {
              title: 'Parks and outdoors',
              intro: 'Some of Hillsborough County\'s best natural areas are within minutes of every Valrico subdivision.',
              items: [
                { name: 'Lithia Springs Park', desc: '72° natural spring, camping, hiking', url: 'https://www.hillsboroughcounty.org/en/residents/recreation-and-culture/parks-and-facilities/regional-parks/lithia-springs-park' },
                { name: 'Alafia River State Park', desc: 'Mountain biking, equestrian trails', url: 'https://www.floridastateparks.org/parks-and-trails/alafia-river-state-park' },
                { name: "Alderman's Ford Preserve", desc: 'Kayaking, fishing, nature trails', url: 'https://www.hillsboroughcounty.org/en/residents/recreation-and-culture/parks-and-facilities/nature-preserves/aldermans-ford-preserve' },
                { name: 'Bloomingdale East Park', desc: 'Playgrounds, sports fields', url: 'https://www.hillsboroughcounty.org/en/residents/recreation-and-culture/parks-and-facilities/find-a-park' },
                { name: 'Stearns Road Park', desc: 'Basketball, volleyball, walking paths', url: 'https://www.hillsboroughcounty.org/en/residents/recreation-and-culture/parks-and-facilities/find-a-park' },
              ],
            },
            {
              title: 'Dining and shopping',
              intro: 'Valrico runs on two main commercial corridors: SR-60 (east-west) and Bloomingdale Avenue.',
              items: [
                { name: 'Bullfrog Creek Brewing', desc: 'Veteran-owned, trivia, live music', url: 'https://bullfrogcreekbrewing.com' },
                { name: 'SR-60 restaurant row', desc: 'Casual dining toward Brandon', url: 'https://maps.google.com/?q=SR-60+restaurants+Valrico+FL' },
                { name: 'Bloomingdale Ave corridor', desc: 'Publix, restaurants, services', url: 'https://maps.google.com/?q=Bloomingdale+Ave+Valrico+FL' },
                { name: 'Westfield Brandon Mall', desc: '10-15 minutes west of Valrico', url: 'https://www.westfield.com/brandon' },
                { name: 'Ybor City & South Howard', desc: '20 min for Tampa nightlife', url: 'https://www.visittampabay.com/neighborhoods/ybor-city/' },
              ],
            },
            {
              title: 'Golf and recreation',
              intro: 'Two gated golf course communities plus public options. Community pools common across HOA neighborhoods.',
              items: [
                { name: 'River Hills Country Club', desc: 'Joe Lee 18-hole championship', url: 'https://www.riverhillscc.com' },
                { name: 'Diamond Hill Golf Club', desc: 'Par-72, 6,920 yards (Chic Adams)', url: 'https://www.diamondhillgc.com' },
                { name: 'Buckhorn Springs Golf Club', desc: 'Semi-private 18-hole course', url: 'https://www.buckhornspringsgolfclub.com' },
                { name: 'Bloomingdale Golfers Club', desc: 'Public course near south Valrico', url: 'https://www.bloomingdalegolfersclub.com' },
                { name: 'FishHawk amenity centers', desc: 'Resort pools, sports courts', url: 'https://www.fishhawkcdd.org' },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="font-serif text-lg mb-2.5">{col.title}</h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--ink-soft)' }}>{col.intro}</p>
              <ul className="list-none space-y-2">
                {col.items.map((item) => (
                  <li key={item.name} className="text-sm pl-3.5 relative" style={{ color: 'var(--ink-soft)' }}>
                    <span className="absolute left-0 font-bold" style={{ color: 'var(--accent)' }}>·</span>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-semibold no-underline hover:underline" style={{ color: 'var(--ink)' }}>{item.name}</a>
                    <span style={{ color: 'var(--ink-muted)' }}> — {item.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* BLOG */}
      <div style={{ background: 'var(--cream)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-[72px]" id="blog">
          <div className="eyebrow">Blog</div>
          <h2 className="sec-title">Valrico real estate, written by someone who sells here</h2>
          <p className="sec-intro">Market updates, neighborhood comparisons, school zone breakdowns, and the kind of local detail you won&apos;t find on Zillow.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { href: '/blog/valrico-housing-market-q1-2026/', tag: 'Market Report', title: 'Valrico housing market Q1 2026: what the numbers actually mean', desc: 'Median prices, inventory shifts, days on market by neighborhood, and what it all means for 33594 and 33596.', date: 'April 2026' },
              { href: '/blog/bloomingdale-vs-buckhorn-valrico/', tag: 'Neighborhood', title: 'Bloomingdale vs. Buckhorn: two Valrico corridors, different tradeoffs', desc: 'Price points, school zones, HOA differences, lot sizes, and which one fits depending on what you\'re looking for.', date: 'April 2026' },
              { href: '/blog/valrico-school-zones-home-values/', tag: 'Schools', title: 'How Bloomingdale HS and Newsome HS zones affect what your Valrico home is worth', desc: 'School zoning is the single biggest price driver in Valrico. Here\'s exactly how it works.', date: 'April 2026' },
            ].map((post) => (
              <Link key={post.href} href={post.href} className="border rounded-md overflow-hidden bg-white no-underline hover:shadow-md transition-shadow" style={{ borderColor: 'var(--border)', color: 'inherit' }}>
                <div className="h-40 flex items-center justify-center relative" style={{ background: 'var(--cream-warm)' }}>
                  <span className="absolute top-2.5 left-2.5 text-[11px] font-semibold uppercase tracking-wider text-white px-2.5 py-1 rounded" style={{ background: 'var(--blue-deep)' }}>{post.tag}</span>
                  <span className="text-[13px]" style={{ color: 'var(--ink-muted)' }}>{post.tag} content</span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-[17px] leading-snug mb-2">{post.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>{post.desc}</p>
                </div>
                <div className="px-5 py-3 border-t text-xs" style={{ borderColor: 'var(--border-light)', color: 'var(--ink-muted)' }}>Barrett Henry · {post.date}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* RE/MAX COMMERCIAL */}
      <div style={{ background: 'var(--cream-warm)' }}>
        <div className="max-w-[1140px] mx-auto px-7 py-[72px]" id="commercial">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 items-center">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://nowtb.com/wp-content/uploads/2026/02/REMAX-Commercial-RGB-White.webp" alt="RE/MAX Commercial" className="h-20 w-auto mb-7" style={{ filter: 'invert(1) brightness(.3)' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <h2 className="sec-title">Valrico commercial real estate agent</h2>
              <p className="text-[15px] leading-[1.75] mb-4" style={{ color: 'var(--ink-soft)' }}>Barrett Henry is also a RE/MAX Commercial practitioner handling investment properties, retail spaces, multi-family units, and land in the Valrico and Brandon corridor. Whether you&apos;re building a rental portfolio, looking for your next business location, or evaluating a commercial opportunity in east Hillsborough County, you get the same straight-talk approach.</p>
              <p className="text-[15px] leading-[1.75] mb-6" style={{ color: 'var(--ink-soft)' }}>Most Valrico commercial deals happen between agents who also know the residential side. That cross-market knowledge matters when you&apos;re evaluating a mixed-use property, a multi-family conversion, or land with development potential along the SR-60 or Bloomingdale Avenue corridors.</p>
              <a href="https://nowtb.com/commercial/" className="btn-solid text-sm py-2.5 px-5">View commercial listings on nowtb.com →</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Office & Retail','Valrico Road, SR-60, and Bloomingdale Ave commercial corridors'],
                ['Multi-Family','Duplexes, triplexes, and small apartment buildings in east Hillsborough'],
                ['Land & Development','Vacant lots, acreage, and infill parcels in Valrico and surrounding areas'],
                ['Investment','Cash-flow analysis, cap rates, and rental portfolio strategy for Valrico investors'],
              ].map(([title, desc]) => (
                <div key={title} className="p-6 border rounded-md bg-white" style={{ borderColor: 'var(--border)' }}>
                  <div className="font-serif text-xl mb-1">{title}</div>
                  <div className="text-sm" style={{ color: 'var(--ink-muted)' }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20" style={{ background: 'var(--blue-deep)' }}>
        <div className="max-w-[700px] mx-auto px-7 text-center">
          <h2 className="font-serif text-[30px] text-white mb-3.5">Ready to talk Valrico?</h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,.75)' }}>Whether you&apos;re selling, buying, or just trying to figure out what your home is worth in this market, I&apos;ll give you a straight answer. No pressure, no pitch.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="tel:8137337907" className="px-8 py-7 rounded-md border border-white/[.15] bg-white/[.07] text-white text-center no-underline hover:bg-white/[.12] transition-colors">
              <strong className="font-serif text-[17px] block mb-1">(813) 733-7907</strong>
              <span className="text-[13px]" style={{ color: 'rgba(255,255,255,.6)' }}>Call or text Barrett directly</span>
            </a>
            <a href="mailto:barrett@nowtb.com" className="px-8 py-7 rounded-md border border-white/[.15] bg-white/[.07] text-white text-center no-underline hover:bg-white/[.12] transition-colors">
              <strong className="font-serif text-[17px] block mb-1">barrett@nowtb.com</strong>
              <span className="text-[13px]" style={{ color: 'rgba(255,255,255,.6)' }}>Email anytime</span>
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="max-w-[1140px] mx-auto px-7 py-[72px]" id="about">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="rounded-md overflow-hidden" style={{ background: 'var(--cream-warm)', aspectRatio: '3/4', maxHeight: 480 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://nowtb.com/wp-content/uploads/2026/01/Barrett-Henry-Real-Estate-Agent-600.webp" alt="Barrett Henry, REALTOR® - Valrico FL Real Estate Agent" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="eyebrow">Your Valrico REALTOR®</div>
            <h2 className="sec-title">Barrett Henry</h2>
            <div className="flex flex-wrap gap-2 my-4">
              {['Broker Associate','e-PRO','MRP','SRS','RE/MAX Collective'].map(c => (
                <span key={c} className="text-xs font-semibold px-2.5 py-1 border rounded" style={{ borderColor: 'var(--border)', color: 'var(--ink-soft)' }}>{c}</span>
              ))}
            </div>
            <div className="space-y-3.5" style={{ color: 'var(--ink-soft)' }}>
              <p className="text-[15px] leading-[1.75]">I&apos;ve been selling real estate since 2003. I&apos;m a Broker Associate with <a href="https://nowtb.com" className="no-underline" style={{ color: 'var(--accent)' }}>RE/MAX Collective</a>, and I run <a href="https://nowtb.com/about/" className="no-underline" style={{ color: 'var(--accent)' }}>The NOW Team</a> out of our Brandon office on Lithia Pinecrest Road, about five minutes from every Valrico neighborhood on the map above.</p>
              <p className="text-[15px] leading-[1.75]">Valrico is where I work every day. Not occasionally, not when a lead comes in from a portal. Every day. I know which Bloomingdale sub-neighborhoods hold value strongest, which streets in Buckhorn flood and which don&apos;t, what the real difference is between a River Hills golf lot and a Diamond Hill golf lot, and why the Newsome HS zone commands a premium that most agents can&apos;t quantify for you.</p>
              <p className="text-[15px] leading-[1.75]">I&apos;m not going to give you a script. I&apos;m going to tell you what your home is actually worth, what a realistic timeline looks like, and what you need to do to get the best outcome. If you&apos;re buying, I&apos;ll show you the neighborhoods that fit your budget and your life, not just whatever came up first on Zillow.</p>
            </div>
            <div className="mt-5 text-[13px] font-bold tracking-[.12em]" style={{ color: 'var(--accent)' }}>MOVE WITH CONFIDENCE.</div>
            <div className="text-[13px] font-semibold tracking-[.08em] mt-1" style={{ color: 'var(--ink-muted)' }}>Straight talk. Smart strategy.</div>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org",
        "@type":"RealEstateAgent",
        "name":"Barrett Henry - Valrico Realtor | Valrico Real Estate Agent | Valrico RE/MAX",
        "description":"Barrett Henry is a Valrico FL real estate agent and Broker Associate with RE/MAX Collective, specializing in residential and commercial real estate across Valrico zip codes 33594 and 33596.",
        "url":"https://valricoagent.com",
        "telephone":"(813) 733-7907",
        "email":"barrett@nowtb.com",
        "address":{"@type":"PostalAddress","streetAddress":"417 Lithia Pinecrest Rd","addressLocality":"Brandon","addressRegion":"FL","postalCode":"33511","addressCountry":"US"},
        "geo":{"@type":"GeoCoordinates","latitude":27.9342,"longitude":-82.2528},
        "areaServed":[
          {"@type":"City","name":"Valrico","address":{"@type":"PostalAddress","addressRegion":"FL"}},
          {"@type":"Place","name":"Bloomingdale, Valrico FL"},
          {"@type":"Place","name":"FishHawk Ranch, Lithia FL"},
          {"@type":"Place","name":"Buckhorn, Valrico FL"},
          {"@type":"Place","name":"River Hills, Valrico FL"},
          {"@type":"Place","name":"Diamond Hill, Valrico FL"}
        ],
        "parentOrganization":{"@type":"RealEstateAgent","name":"RE/MAX Collective","url":"https://www.remaxcollective.com"},
        "aggregateRating":{"@type":"AggregateRating","ratingValue":"5.0","reviewCount":"85","bestRating":"5"}
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage",
        "mainEntity":[
          {"@type":"Question","name":"What zip codes cover Valrico FL?","acceptedAnswer":{"@type":"Answer","text":"Valrico is covered by zip codes 33594 (north Valrico, near the Brandon border) and 33596 (south Valrico, including Bloomingdale, Buckhorn, and River Hills). Valrico is an unincorporated community in Hillsborough County with no strict municipal boundaries."}},
          {"@type":"Question","name":"What are the best neighborhoods in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Top Valrico neighborhoods include Bloomingdale (5,200+ homes, $300K-$500K), River Hills Country Club (gated golf community, $400K-$800K+), Diamond Hill (gated golf community, $350K-$550K+), Buckhorn/Boyette corridor (newer construction, Newsome HS zone, $350K-$500K), Twin Lakes ($375K-$475K), and Brentwood Hills ($340K-$475K). FishHawk Ranch in bordering Lithia is also closely connected to the Valrico market."}},
          {"@type":"Question","name":"How much do homes cost in Valrico FL?","acceptedAnswer":{"@type":"Answer","text":"As of early 2026, the median home price in Valrico ranges from approximately $400K to $430K, with a price per square foot around $210-$220. Starter homes begin in the low $300Ks, move-up homes run $400K-$600K, and luxury properties in River Hills and south Valrico estate lots can exceed $700K to over $1 million."}},
          {"@type":"Question","name":"What schools serve Valrico FL?","acceptedAnswer":{"@type":"Answer","text":"Valrico is served by Hillsborough County Public Schools. The two primary high schools are Bloomingdale High School (A-rated, 8/10 GreatSchools, serving most of 33596) and Newsome High School (A-rated, serving south Valrico and the Buckhorn/Boyette corridor). Key middle schools include Burns MS and Mulrennan MS."}}
        ]
      })}} />
    </>
  );
}
