'use client';
import Link from 'next/link';

export default function ValricoRealtor() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Valrico Realtor — Barrett Henry, REALTOR® | RE/MAX Collective</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>Looking for a Valrico realtor who knows the difference between every sub-neighborhood in 33594 and 33596? Barrett Henry is a Broker Associate with RE/MAX Collective, holds e-PRO, MRP, and SRS designations, and has been selling real estate since 2003. Here&apos;s how working with a local Valrico REALTOR® is different from using a portal.</p>
          <a href="tel:8137337907" className="btn-solid">Schedule a free consultation — (813) 733-7907</a>
        </div>
      </div>
      <div className="max-w-[780px] mx-auto px-7 py-16 space-y-6" style={{color:'var(--ink-soft)'}}>
        <h2 className="font-serif text-2xl" style={{color:'var(--ink)'}}>What a Valrico REALTOR® actually does for you</h2>
        <p className="text-[15px] leading-[1.8]">A REALTOR® is not just a licensed agent — it means I&apos;m a member of the National Association of REALTORS® and bound by a Code of Ethics that goes beyond what the state requires. In practical terms, here&apos;s what that means for you as a buyer or seller in Valrico.</p>

        <h3 className="font-serif text-xl mt-8" style={{color:'var(--ink)'}}>For buyers</h3>
        <p className="text-[15px] leading-[1.8]">I don&apos;t just send you listings. I preview properties, identify issues you won&apos;t catch on Zillow, negotiate on your behalf, coordinate inspections, and manage the timeline to closing. I know which Valrico neighborhoods have flooding issues, which ones are zoned for Newsome vs. Bloomingdale HS, and which streets get traffic noise from SR-60. That&apos;s knowledge you can&apos;t get from a website. <Link href="/valrico-fl-homes-for-sale/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Search Valrico homes</Link>. <Link href="/valrico-first-time-homebuyer/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>First-time buyers</Link> — start with the guide. Interested in <Link href="/valrico-va-loan-homes/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>VA loans</Link>? I work with military buyers regularly. Need <Link href="/valrico-down-payment-assistance/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>down payment help</Link>? Multiple programs are available.</p>

        <h3 className="font-serif text-xl mt-8" style={{color:'var(--ink)'}}>For sellers</h3>
        <p className="text-[15px] leading-[1.8]">I price your home based on actual comps from your sub-neighborhood, not the whole ZIP code. I market it with professional photography and syndication across every major portal plus my own <a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Valrico-focused website</a>. And I negotiate to protect your net proceeds through inspection, appraisal, and closing. <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>See the full selling process</Link>. Start with a free <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>home valuation</Link> based on real comps. Need speed? Get a <Link href="/valrico-cash-offer/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>cash offer in 24 hours</Link>. See the latest <Link href="/valrico-market-report/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>market data</Link> for pricing trends.</p>

        <h3 className="font-serif text-xl mt-8" style={{color:'var(--ink)'}}>Credentials</h3>
        <div className="flex flex-wrap gap-2 my-4">
          {['Broker Associate','e-PRO (digital marketing)','MRP (military relocation)','SRS (seller representation)','RE/MAX Collective','RE/MAX Commercial'].map(c=>(<span key={c} className="text-xs font-semibold px-2.5 py-1 border rounded" style={{borderColor:'var(--border)',color:'var(--ink-soft)'}}>{c}</span>))}
        </div>

        <h3 className="font-serif text-xl mt-8" style={{color:'var(--ink)'}}>Valrico neighborhoods I cover</h3>
        <p className="text-[15px] leading-[1.8]">Every subdivision in 33594 and 33596: <Link href="/neighborhoods/bloomingdale/" className="no-underline" style={{color:'var(--accent)'}}>Bloomingdale</Link>, <Link href="/neighborhoods/river-hills/" className="no-underline" style={{color:'var(--accent)'}}>River Hills</Link>, <Link href="/neighborhoods/diamond-hill/" className="no-underline" style={{color:'var(--accent)'}}>Diamond Hill</Link>, <Link href="/neighborhoods/buckhorn/" className="no-underline" style={{color:'var(--accent)'}}>Buckhorn/Boyette</Link>, <Link href="/neighborhoods/twin-lakes/" className="no-underline" style={{color:'var(--accent)'}}>Twin Lakes</Link>, <Link href="/neighborhoods/brentwood-hills/" className="no-underline" style={{color:'var(--accent)'}}>Brentwood Hills</Link>, Canterbury Oaks, Bent Tree Estates, Crosby Crossings, Crestwood Estates, and more. Plus bordering areas: FishHawk Ranch, Lithia, Brandon, Riverview, and Plant City.</p>

        <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Questions to ask before hiring a Valrico REALTOR®</h2>
        <div className="space-y-4 mt-4">
          {[['How many homes have you sold in Valrico specifically?','Not Tampa. Not Hillsborough County. Valrico. Your agent should be able to name recent sales in your specific subdivision.'],['Do you know the difference between the sub-neighborhoods?','In Bloomingdale alone there are 32+ sub-neighborhoods that trade at different price levels. Your agent should know which ones.'],['How do you price homes — algorithm or comps?','If the answer is "Zillow says..." that is the wrong agent. A Valrico REALTOR® pulls actual comparable sales from your section and adjusts for condition, updates, and market timing.'],['What is your marketing plan beyond MLS?','MLS is the minimum. Ask about photography, syndication, local SEO, social media, open houses, and targeted marketing to buyers already looking in Valrico.']].map(([q,a])=>(
            <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
              <h3 className="font-semibold text-base mb-2">{q}</h3>
              <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
            </div>
          ))}
        </div>

        <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Office location</h2>
        <p className="text-[15px] leading-[1.8] mb-4">Barrett Henry, REALTOR&reg; operates from the RE/MAX Collective Brandon office, the closest RE/MAX office to every Valrico neighborhood. Five minutes from Bloomingdale, Buckhorn, Diamond Hill, and Twin Lakes.</p>
        <div className="border rounded-md overflow-hidden mb-4" style={{borderColor:'var(--border)'}}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.5!2d-82.2868!3d27.9258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2cf4e0c0e0001%3A0x1234567890abcdef!2s417+Lithia+Pinecrest+Rd%2C+Brandon%2C+FL+33511!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="280"
            style={{border:0}}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="RE/MAX Collective Brandon Office"
          />
        </div>
        <div className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
          <p className="font-semibold text-base mb-1" style={{color:'var(--ink)'}}>RE/MAX Collective — Brandon Office</p>
          <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>417 Lithia Pinecrest Rd, Brandon, FL 33511</p>
          <p className="text-sm leading-relaxed mb-3" style={{color:'var(--ink-soft)'}}>Barrett Henry: <a href="tel:8137337907" className="no-underline" style={{color:'var(--accent)'}}>(813) 733-7907</a> &middot; <a href="mailto:barrett@nowtb.com" className="no-underline" style={{color:'var(--accent)'}}>barrett@nowtb.com</a><br />The NOW Team: <a href="tel:8132604663" className="no-underline" style={{color:'var(--accent)'}}>(813) 260-4663</a></p>
          <p className="text-xs" style={{color:'var(--ink-muted)'}}>Also serving from: Tampa (14310 N Dale Mabry Hwy Ste 100) &middot; Largo (11200 Seminole Blvd Ste 202)</p>
        </div>

        <h2 className="font-serif text-2xl mt-10" style={{color:'var(--ink)'}}>Services beyond buying and selling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Link href="/valrico-property-management/" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{borderColor:'var(--border)',color:'inherit'}}>
            <h3 className="font-semibold text-base mb-1" style={{color:'var(--ink)'}}>Property Management</h3>
            <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>Full-service rental management for Valrico landlords. 10% fee, in-house maintenance, tenant screening, rent collection.</p>
            <span className="text-xs font-semibold mt-2 inline-block" style={{color:'var(--accent)'}}>ViVi Property Management &rarr;</span>
          </Link>
          <Link href="/valrico-luxury-homes/" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{borderColor:'var(--border)',color:'inherit'}}>
            <h3 className="font-semibold text-base mb-1" style={{color:'var(--ink)'}}>Luxury Real Estate</h3>
            <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>River Hills, Crestwood Estates, Diamond Hill, and waterfront properties through The RE/MAX Collection.</p>
            <span className="text-xs font-semibold mt-2 inline-block" style={{color:'var(--accent)'}}>View luxury homes &rarr;</span>
          </Link>
          <a href="https://nowtb.com/commercial/" target="_blank" rel="noopener" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{borderColor:'var(--border)',color:'inherit'}}>
            <h3 className="font-semibold text-base mb-1" style={{color:'var(--ink)'}}>Commercial Real Estate</h3>
            <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>Office, retail, multi-family, land, and investment properties through RE/MAX Commercial.</p>
            <span className="text-xs font-semibold mt-2 inline-block" style={{color:'var(--accent)'}}>RE/MAX Commercial &rarr;</span>
          </a>
          <a href="https://bestbayservices.com" target="_blank" rel="noopener" className="border rounded-md p-5 no-underline hover:shadow-md transition-shadow" style={{borderColor:'var(--border)',color:'inherit'}}>
            <h3 className="font-semibold text-base mb-1" style={{color:'var(--ink)'}}>Home Services</h3>
            <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>Handyman, HVAC, paint, tile, flooring, smart home, and Airbnb turnover through Best Bay Services.</p>
            <span className="text-xs font-semibold mt-2 inline-block" style={{color:'var(--accent)'}}>Best Bay Services &rarr;</span>
          </a>
        </div>

        <div className="mt-10 p-6 rounded-md text-center" style={{background:'var(--cream-warm)'}}>
          <h3 className="font-serif text-lg mb-2">Ready to work with a Valrico REALTOR® who knows the market?</h3>
          <p className="text-sm mb-4" style={{color:'var(--ink-soft)'}}>No pitch, no pressure. Just a straight conversation about your real estate goals.</p>
          <a href="tel:8137337907" className="btn-solid mr-2">(813) 733-7907</a>
          <a href="mailto:barrett@nowtb.com" className="btn-ghost">Email Barrett</a>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What should I ask a Valrico REALTOR® before hiring them?","acceptedAnswer":{"@type":"Answer","text":"Ask how many homes they've sold in Valrico specifically, whether they know the sub-neighborhoods, how they price homes, and what their marketing plan includes beyond MLS."}},{"@type":"Question","name":"What does a Valrico REALTOR® do for buyers?","acceptedAnswer":{"@type":"Answer","text":"A Valrico REALTOR® previews properties, identifies neighborhood-specific issues, negotiates on your behalf, coordinates inspections, and manages the timeline to closing."}},{"@type":"Question","name":"What designations does Barrett Henry hold?","acceptedAnswer":{"@type":"Answer","text":"Barrett Henry holds e-PRO (digital marketing), MRP (military relocation), and SRS (seller representation) designations, and is a Broker Associate with RE/MAX Collective."}}]})}} />
    </>
  );
}
