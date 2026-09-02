'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '../components/ContactForm';

export default function SellMyHome() {
  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Selling in Valrico</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Sell My Home in Valrico FL - Pricing, Prep, and Marketing Plan</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>You don&apos;t need a generic listing agent. You need a Valrico REALTOR® who can price your home based on actual sub-neighborhood data, market it to the right buyers, and negotiate a deal that holds together through closing.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call<br/>(813) 733-7907</a>
            <Link href="/valrico-fl-home-values/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Get my home value first</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>
            <div className="relative w-full rounded-xl overflow-hidden mb-8" style={{aspectRatio:'16/7'}}>
              <Image
                src="/bloomingdale-valrico.jpg"
                alt="Bloomingdale neighborhood Valrico FL - Barrett Henry REMAX Collective sells homes here"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 900px"
              />
            </div>

            <h2 className="font-serif text-2xl mb-4">How I sell Valrico homes</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Every Valrico listing I take gets the same process. It&apos;s not complicated, but most agents skip half of it. Here&apos;s what you get when you list with Barrett Henry, REALTOR&reg; at <a href="https://nowtb.com" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>REMAX Collective</a>.</p>

            <div className="space-y-8 mb-10">
              {[
                ['1. Pricing based on your sub-neighborhood, not Valrico averages','I pull actual closed sales from your specific section of Valrico, not the whole ZIP code, not Hillsborough County averages. There is a real difference between what a 4/2 pool home sells for in Bloomingdale Oaks vs. Bloomingdale Ridge vs. Buckhorn Preserve. I know those differences because I track them every month. Overpricing by 5% means sitting 30+ extra days and eventually selling for less than you would have on day one.'],
                ['2. Preparation plan, what to fix, what to skip','Not every improvement pays off. I walk through your home and tell you exactly what to spend money on (and what not to). In Valrico right now, buyers care most about roof condition, AC age, kitchen updates, and pool cage condition. A $300 pressure wash of the driveway and lanai can change first impressions more than a $5,000 bathroom remodel nobody asked for. Need help with pre-sale repairs? <a href="https://bestvalricohandyman.com" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;text-decoration:none">Best Valrico Handyman</a> handles punch lists, <a href="https://bestvalricohandyman.com/painting" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;text-decoration:none">painting</a>, <a href="https://bestvalricohandyman.com/drywall-repair" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;text-decoration:none">drywall repair</a>, and <a href="https://bestvalricohandyman.com/pressure-washing" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;text-decoration:none">pressure washing</a> to get your home show-ready.'],
                ['3. Professional photography and marketing','Every listing gets professional photos, virtual tour, and optimized online presence. Your home goes on Stellar MLS, Zillow, Realtor.com, Redfin, REMAX.com, and my own sites including <a href="https://nowtb.com/valrico/" target="_blank" rel="noopener" style="color:var(--accent);font-weight:600;text-decoration:none">nowtb.com</a> (which ranks for Valrico real estate searches). Most agents upload phone photos and call it marketing. That is not what happens here.'],
                ['4. Showings and feedback management','I coordinate showings through ShowingTime, follow up with every showing agent for feedback, and report back to you weekly. You know exactly what buyers are saying, not guessing. If feedback reveals a pricing or presentation issue, we adjust fast instead of waiting until day 60 to have the conversation.'],
                ['5. Negotiation, this is where the money is','Multiple offers, inspection negotiations, appraisal gaps, lender delays, title issues - I have been doing this since 2003 and I have seen every scenario. My job is to protect your net proceeds through closing, not just get an offer on the table. The contract is the starting line, not the finish line.'],
                ['6. Closing coordination','I manage the timeline from contract to closing: inspections, appraisals, title work, lender deadlines, and the dozen small things that can derail a deal if nobody is paying attention. You get updates without having to chase me.'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-semibold text-lg mb-2" style={{color:'var(--ink)'}} dangerouslySetInnerHTML={{__html:title}} />
                  <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}} dangerouslySetInnerHTML={{__html:desc}} />
                </div>
              ))}
            </div>

            <div className="relative w-full rounded-xl overflow-hidden my-8" style={{aspectRatio:'16/7'}}>
              <Image
                src="/river-hills-valrico.jpg"
                alt="River Hills luxury homes in Valrico FL - Barrett Henry REALTOR REMAX Collective"
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 900px"
              />
            </div>

            <div className="flex gap-5 items-start p-6 rounded-xl border mb-8" style={{borderColor:'var(--border)',background:'#fafafa'}}>
              <Image src="/barrett-henry.png" alt="Barrett Henry REALTOR Valrico FL - seller representation specialist" width={72} height={72} style={{borderRadius:'50%',flexShrink:0}} />
              <div>
                <p className="font-semibold mb-1" style={{color:'var(--ink)'}}>Barrett Henry, REALTOR&reg; &bull; Broker Associate &bull; REMAX Collective</p>
                <p className="text-sm leading-relaxed mb-2" style={{color:'var(--ink-soft)'}}>24+ years of real estate experience. SRS (Seller Representation Specialist) designation. Serving every Valrico neighborhood in 33594 and 33596. See the <Link href="/valrico-market-report/" className="no-underline" style={{color:'var(--accent)'}}>market report</Link> for current pricing data, <Link href="/valrico-fl-home-values/" className="no-underline" style={{color:'var(--accent)'}}>get your home value</Link>, or explore <Link href="/valrico-cash-offer/" className="no-underline" style={{color:'var(--accent)'}}>cash offer options</Link>.</p>
                <a href="tel:8137337907" className="text-sm font-semibold no-underline" style={{color:'var(--accent)'}}>(813) 733-7907</a>
              </div>
            </div>

            <h2 className="font-serif text-2xl mb-4 mt-10">What sellers in Valrico ask me most</h2>
            <div className="space-y-4">
              {[
                ['How long will it take to sell my Valrico home?','Properly priced homes in Valrico are selling in 30 to 55 days on average as of Q3 2026. Homes priced right from day one sell faster. Overpriced homes sit and eventually sell for less after a price reduction.'],
                ['What does it cost to sell a house in Valrico FL?','Typical seller costs include agent commission, title insurance, documentary stamps, prorated taxes, and any negotiated repairs or credits. Barrett provides a detailed net sheet before you list so there are no surprises.'],
                ['Should I sell or rent my Valrico home?','It depends on your equity position, the rental market in your specific neighborhood, and your long-term plans. Barrett can run the numbers both ways, see the investment property page for rental analysis, and help you make the decision that makes financial sense, not an emotional one.'],
                ['Is now a good time to sell in Valrico FL?','Valrico\'s market is balanced. You won\'t get the frenzy pricing of 2021, but you also won\'t face the falling-knife anxiety of a crashing market. Homes priced accurately are selling. If your home is in good condition and you price it based on current comps, yes, it\'s a reasonable time to sell.'],
                ['What improvements should I make before selling?','Focus on roof, AC, kitchen, and pool cage, those are the items Valrico buyers scrutinize most. Cosmetic updates (paint, landscaping, pressure washing) offer the best ROI. Barrett walks every listing and tells you exactly what to do and what to skip. For repairs and prep work, Best Valrico Handyman (bestvalricohandyman.com) is the local crew Barrett recommends.'],
              ].map(([q,a])=>(
                <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Start with your home value</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Before anything else, you need to know what your Valrico home is actually worth. Barrett Henry, REALTOR® provides a free CMA based on real comps from your sub-neighborhood.</p>
              <Link href="/valrico-fl-home-values/" className="btn-solid block text-center mb-2 text-sm">Get my home value</Link>
              <a href="tel:8137337907" className="btn-ghost block text-center text-sm">(813) 733-7907</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-market-report/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico market report →</Link></li>
                <li><Link href="/blog/valrico-housing-market-q1-2026/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Q3 2026 market data →</Link></li>
                <li><Link href="/neighborhoods/bloomingdale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Bloomingdale neighborhood guide →</Link></li>
                <li><Link href="/valrico-cash-offer/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Get a cash offer instead →</Link></li>
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>What is my home worth? →</Link></li>
                <li><a href="https://bestvalricohandyman.com" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Pre-sale repairs - Best Valrico Handyman →</a></li>
                <li><a href="https://nowtb.com/sell-your-home/" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Sell your home on nowtb.com →</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      {/* Lead Capture Form */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does it take to sell a house in Valrico FL?","acceptedAnswer":{"@type":"Answer","text":"Properly priced homes in Valrico sell in 30 to 55 days on average as of Q3 2026."}},{"@type":"Question","name":"What does it cost to sell a house in Valrico FL?","acceptedAnswer":{"@type":"Answer","text":"Typical costs include agent commission, title insurance, documentary stamps, prorated taxes, and negotiated repairs or credits."}},{"@type":"Question","name":"Is now a good time to sell in Valrico FL?","acceptedAnswer":{"@type":"Answer","text":"Valrico's market is balanced. Homes priced accurately based on current comps are selling in reasonable timeframes."}},{"@type":"Question","name":"What improvements should I make before selling in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Focus on roof, AC, kitchen, and pool cage condition. Cosmetic updates like paint, landscaping, and pressure washing offer the best ROI."}}]})}} />
    </>
  );
}
