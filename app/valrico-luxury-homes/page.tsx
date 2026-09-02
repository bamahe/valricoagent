'use client';
import Link from 'next/link';
import Image from 'next/image';
import PropertySearch from '../components/PropertySearch';
import { ContactForm } from '../components/ContactForm';

export default function LuxuryHomes() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>The REMAX Collection</div>
          <h1 className="font-serif text-[clamp(28px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Luxury Homes for Sale - Estates, Golf Course &amp; Waterfront Properties</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Luxury in Valrico is not about marble foyers and crystal chandeliers. It is about space, privacy, and lifestyle. Estate lots in Crestwood, golf course frontage in River Hills, waterfront living on Lake Valrico, and gated security in Diamond Hill and Arista. Barrett Henry, REALTOR&reg; with REMAX Collective handles luxury transactions through The REMAX Collection.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="https://nowtb.com/luxury/" target="_blank" rel="noopener" className="btn-solid">Browse luxury listings on nowtb.com</a>
            <a href="tel:8137337907" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">(813) 733-7907</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '24px 24px 0' }}>
        <div style={{ background: '#fafafa', border: '1px solid #e8e8e8', borderRadius: 10, padding: '20px 24px', marginBottom: 24 }}>
          <p style={{ fontSize: 15, color: '#222', lineHeight: 1.7, margin: 0 }}>
            <strong>Luxury homes in Valrico FL start around $600,000 and extend past $1.2 million, defined by estate-sized lots, privacy, and lifestyle amenities rather than urban proximity. Top luxury neighborhoods include River Hills ($600K-$1M+, guard-gated golf community), Crestwood Estates ($500K-$900K+, estate lots with no CDD fees), and Diamond Hill ($500K-$700K+, gated golf community with resort amenities).</strong>
          </p>
        </div>
      </div>

      {/* PROPERTY SEARCH */}
      <div className="max-w-[1140px] mx-auto px-7 pt-10">
        <PropertySearch defaultCity="Valrico" heading="Valrico Luxury Homes for Sale" defaultMinPrice="1000000" />
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-16 space-y-6" style={{color:'var(--ink-soft)'}}>

        <div className="relative w-full rounded-xl overflow-hidden mb-8" style={{aspectRatio:'16/7'}}>
          <Image
            src="/images/neighborhoods/river-hills-golf-country-club-valrico-fl-entrance.jpg"
            alt="River Hills Golf and Country Club entrance in Valrico FL - guard-gated luxury community"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 1140px"
          />
        </div>

        <h2 className="font-serif text-2xl" style={{color:'var(--ink)'}}>Where luxury lives in Valrico</h2>
        <p className="text-[15px] leading-[1.8]">Valrico&apos;s luxury market starts around $600K and extends past $1.2 million for the most exclusive properties. Unlike South Tampa or Harbour Island, luxury here is defined by lot size, privacy, and community amenities rather than urban proximity. The trade-off is intentional: buyers at this level want space, not density.</p>

        <div className="space-y-8 mt-8">
          <div>
            <h3 className="font-serif text-xl mb-2"><Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--ink)'}}>River Hills, $600K to $1M+ &rarr;</Link></h3>
            <p className="text-[15px] leading-[1.8]">Guard-gated golf community with 1,326 custom homes along the Joe Lee-designed championship course. Golf course frontage lots represent the top tier. The Alafia River trails, country club dining, and social programming create a lifestyle that justifies premium pricing. Most homes are concrete block from the 1980s-2000s with custom builds continuing today. Bloomingdale HS zone.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2"><Link href="/neighborhoods/crestwood-estates/" className="no-underline" style={{color:'var(--ink)'}}>Crestwood Estates, $500K to $900K+ &rarr;</Link></h3>
            <p className="text-[15px] leading-[1.8]">Estate-sized lots, many exceeding half an acre, with custom-built homes in south Valrico. The distinguishing factor is no CDD fees, which saves $150-$300/month compared to newer luxury developments. Multi-acre properties with true privacy are available. Some homes approach and exceed $1 million. Bloomingdale HS zone.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2"><Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{color:'var(--ink)'}}>Diamond Hill, $500K to $700K+ &rarr;</Link></h3>
            <p className="text-[15px] leading-[1.8]">Gated community centered around the Chic Adams par-72 course (6,920 yards). Olympic-sized pool, fitness center, and clubhouse included. Executive homes from 3,000 to 6,000+ square feet with golf course and conservation views. The gated entry and resort amenities position Diamond Hill as a full-lifestyle community.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2"><Link href="/neighborhoods/arista/" className="no-underline" style={{color:'var(--ink)'}}>Arista, $500K to $600K+ &rarr;</Link></h3>
            <p className="text-[15px] leading-[1.8]">Gated new construction between Lake Valrico and Diamond Hill Golf Course. Modern floor plans with upscale finishes. The newest luxury product available in Valrico, appealing to buyers who want contemporary design with gated security.</p>
          </div>
          <div>
            <h3 className="font-serif text-xl mb-2"><Link href="/neighborhoods/lake-valrico/" className="no-underline" style={{color:'var(--ink)'}}>Lake Valrico Waterfront, $450K to $700K+ &rarr;</Link></h3>
            <p className="text-[15px] leading-[1.8]">Custom homes on waterfront lots surrounding Lake Valrico. Some parcels exceed one acre. No HOA in many sections. This is Valrico&apos;s most unique luxury segment: waterfront living with privacy and acreage, minutes from schools and commercial areas.</p>
          </div>
        </div>

        <div className="relative w-full rounded-xl overflow-hidden my-8" style={{aspectRatio:'16/7'}}>
          <Image
            src="/images/neighborhoods/diamond-hill-valrico-fl-entrance.jpg"
            alt="Diamond Hill gated golf community entrance in Valrico FL - luxury living"
            fill
            className="object-cover"
            sizes="(max-width:768px) 100vw, 1140px"
          />
        </div>

        <h2 className="font-serif text-2xl mt-4" style={{color:'var(--ink)'}}>Search luxury listings now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="https://nowtb.com/luxury/" target="_blank" rel="noopener" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow block" style={{borderColor:'var(--border)',color:'var(--ink)'}}>
            <span className="font-serif text-lg block mb-1">All Valrico Luxury</span>
            <span className="text-sm" style={{color:'var(--accent)'}}>$600K+ on nowtb.com &rarr;</span>
          </a>
          <a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow block" style={{borderColor:'var(--border)',color:'var(--ink)'}}>
            <span className="font-serif text-lg block mb-1">All Valrico Homes</span>
            <span className="text-sm" style={{color:'var(--accent)'}}>Full search on nowtb.com &rarr;</span>
          </a>
          <a href="https://nowtb.com/commercial/" target="_blank" rel="noopener" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow block" style={{borderColor:'var(--border)',color:'var(--ink)'}}>
            <span className="font-serif text-lg block mb-1">Investment Properties</span>
            <span className="text-sm" style={{color:'var(--accent)'}}>REMAX Commercial &rarr;</span>
          </a>
          <Link href="/valrico-fl-homes-for-sale/" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow block" style={{borderColor:'var(--border)',color:'var(--ink)'}}>
            <span className="font-serif text-lg block mb-1">All Neighborhoods</span>
            <span className="text-sm" style={{color:'var(--accent)'}}>32 Valrico subdivisions &rarr;</span>
          </Link>
        </div>

        <h2 className="font-serif text-2xl mt-12" style={{color:'var(--ink)'}}>The REMAX Collection</h2>
        <p className="text-[15px] leading-[1.8]">The REMAX Collection is REMAX&apos;s luxury division, providing enhanced marketing for properties that meet luxury thresholds. Collection listings receive premium placement on remax.com, international syndication across 110+ countries, and access to the REMAX global referral network. Barrett Henry, REALTOR&reg; is qualified to list and represent buyers through The Collection for properties across Tampa Bay.</p>
        <p className="text-[15px] leading-[1.8]">Luxury listings receive professional photography, drone aerial video, virtual tours, targeted digital marketing, and placement across <a href="https://nowtb.com" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>nowtb.com</a>, Zillow, Realtor.com, Redfin, REMAX.com, and social media.</p>

        <h2 className="font-serif text-2xl mt-12" style={{color:'var(--ink)'}}>Valrico luxury vs. FishHawk and South Tampa</h2>
        <p className="text-[15px] leading-[1.8]">Buyers at the $600K+ level often compare Valrico to FishHawk Ranch and South Tampa. FishHawk offers newer master-planned luxury with resort amenities but adds CDD fees of $200-$350/month on top of HOA. South Tampa provides urban proximity and walkability but at 2-3x the price per square foot with significantly smaller lots. Valrico occupies the middle: more space and privacy than FishHawk, more value per square foot than South Tampa, with the school zones (Bloomingdale HS, Newsome HS) that families prioritize.</p>
        <p className="text-[15px] leading-[1.8]">For long-term value, Valrico luxury properties have appreciated steadily without the volatility of waterfront or downtown markets. Barrett Henry, REALTOR&reg; can run a detailed comparison for your specific situation. <a href="tel:8137337907" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Call<br/>(813) 733-7907</a>. Thinking of selling your luxury home? <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Get your home value</Link> or read the <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>selling guide</Link>. Also explore <Link href="/valrico-waterfront-homes/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>waterfront properties</Link> and <Link href="/valrico-pool-homes/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>pool homes</Link> in the area.</p>

        <div className="flex gap-5 items-start p-6 rounded-xl border mt-8 mb-6" style={{borderColor:'var(--border)',background:'#fafafa'}}>
          <Image src="/barrett-henry.png" alt="Barrett Henry REALTOR REMAX Collection luxury specialist Valrico FL" width={72} height={72} style={{borderRadius:'50%',flexShrink:0}} />
          <div>
            <p className="font-semibold mb-1" style={{color:'var(--ink)'}}>Barrett Henry, REALTOR&reg; &bull; Broker Associate &bull; REMAX Collection</p>
            <p className="text-sm leading-relaxed mb-2" style={{color:'var(--ink-soft)'}}>24+ years of real estate experience. Qualified to list and represent buyers through The REMAX Collection for luxury properties across Tampa Bay. Serving River Hills, Diamond Hill, Crestwood Estates, and Lake Valrico waterfront properties. Explore <Link href="/valrico-waterfront-homes/" className="no-underline" style={{color:'var(--accent)'}}>waterfront homes</Link>, <Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--accent)'}}>River Hills</Link>, and <Link href="/valrico-pool-homes/" className="no-underline" style={{color:'var(--accent)'}}>pool homes</Link>.</p>
            <a href="tel:8137337907" className="text-sm font-semibold no-underline" style={{color:'var(--accent)'}}>(813) 733-7907</a>
          </div>
        </div>

        <div className="mt-4 p-6 rounded-md text-center" style={{background:'var(--cream-warm)'}}>
          <h3 className="font-serif text-lg mb-2">Considering a luxury home in Valrico?</h3>
          <p className="text-sm mb-4" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR&reg; &middot; REMAX Collection &middot; Broker Associate</p>
          <a href="tel:8137337907" className="btn-solid mr-2">(813) 733-7907</a>
          <a href="https://nowtb.com/luxury/" target="_blank" rel="noopener" className="btn-ghost">View luxury listings</a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://valricoagent.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Valrico Luxury Homes for Sale\", \"item\": \"https://valricoagent.com/valrico-luxury-homes/\"}]}"}} />
      {/* FAQPage schema for AEO */}
      
      {/* Lead Capture Form */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org","@type":"FAQPage","mainEntity":[
          {"@type":"Question","name":"What is the starting price for luxury homes in Valrico FL?","acceptedAnswer":{"@type":"Answer","text":"Luxury homes in Valrico generally start around $500K-$600K and extend past $1.2 million for the most exclusive properties. Gated golf communities like River Hills and Diamond Hill represent the upper end. Barrett Henry, Broker Associate with REMAX Collective, specializes in Valrico luxury real estate through The REMAX Collection. Call (813) 733-7907 for a private showing or market analysis."}},
          {"@type":"Question","name":"What are the best luxury neighborhoods in Valrico?","acceptedAnswer":{"@type":"Answer","text":"The top luxury neighborhoods in Valrico are River Hills (guard-gated golf community, $600K-$1M+), Crestwood Estates (estate-sized lots, no CDD fees, $500K-$900K+), Diamond Hill (gated golf community, $500K-$700K+), Arista (gated new construction, $500K-$600K+), and Lake Valrico waterfront ($450K-$700K+). Barrett Henry with REMAX Collective covers all of these communities. Call (813) 733-7907 or email barrett@nowtb.com."}},
          {"@type":"Question","name":"How does Valrico luxury compare to FishHawk and South Tampa?","acceptedAnswer":{"@type":"Answer","text":"Valrico luxury offers more space and privacy than FishHawk Ranch, which adds CDD fees of $200-$350 per month. South Tampa provides urban walkability but at 2-3x the price per square foot with much smaller lots. Valrico gives you larger lots, strong school zones (Bloomingdale HS, Newsome HS), and better value per square foot. Contact Barrett Henry at (813) 733-7907 for a detailed comparison."}},
          {"@type":"Question","name":"What is The REMAX Collection?","acceptedAnswer":{"@type":"Answer","text":"The REMAX Collection is the luxury division of REMAX, providing enhanced marketing for high-end properties. Collection listings receive premium placement on remax.com, international syndication across 110+ countries, professional photography, drone video, and virtual tours. Barrett Henry, Broker Associate at REMAX Collective, is qualified to list and represent buyers through The Collection. Call (813) 733-7907."}},
          {"@type":"Question","name":"Are there waterfront luxury homes in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Yes. Custom homes on Lake Valrico offer waterfront luxury with lots exceeding one acre, many with no HOA. Prices range from $450K to $700K+. River Hills also has Alafia River frontage properties at $600K-$1.5M+. Barrett Henry with REMAX Collective has 24+ years of real estate experience and knows every waterfront opportunity in Valrico. Call (813) 733-7907 or email barrett@nowtb.com."}}
        ]
      })}} />
    </>
  );
}
