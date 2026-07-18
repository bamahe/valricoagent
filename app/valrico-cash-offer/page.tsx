'use client';
import Link from 'next/link';

export default function ValricoCashOffer() {
  return (
    <>
      {/* Hero */}
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Sell Your Home Fast</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Get a Cash Offer on Your Valrico Home</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>24-hour response. Any condition. No obligation. If you need to sell your Valrico home fast &mdash; without repairs, showings, or the uncertainty of waiting for the right buyer &mdash; a cash offer might be the right move.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call Barrett &mdash; (813) 733-7907</a>
            <Link href="/sell-my-home-valrico/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Compare with traditional listing</Link>
          </div>
        </div>
      </div>

      {/* QuickAnswer — for AI/featured snippet extraction */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '24px 24px 0' }}>
        <div style={{ background: '#fafafa', border: '1px solid #e8e8e8', borderRadius: 10, padding: '20px 24px', marginBottom: 24 }}>
          <p style={{ fontSize: 15, color: '#222', lineHeight: 1.7, margin: 0 }}>
            <strong>Yes, you can get a cash offer on your Valrico home. Barrett Henry, REALTOR with REMAX Collective, provides written cash offers within 24 hours based on current market data and comparable sales. Cash sales can close in as little as 7-14 days, require no repairs or showings, and you choose the closing date. Call (813) 733-7907 for a no-obligation cash offer.</strong>
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>
            {/* How It Works */}
            <h2 className="font-serif text-2xl mb-4">How It Works</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Three steps. No surprises.</p>

            <div className="space-y-8 mb-10">
              {[
                ['1. Tell Barrett about your home','Call (813) 733-7907, email barrett@nowtb.com, or fill out the form on the sell-my-home page. Share your address, basic property details, and your timeline. That is all Barrett needs to get started.'],
                ['2. Get a cash offer within 24 hours','Barrett evaluates your property based on current Valrico market data, condition, and comparable sales. You receive a written cash offer within 24 hours &mdash; no obligation, no pressure, no games.'],
                ['3. Close on your timeline','Accept the offer and close in as little as 7-14 days. Or pick a date that works for you &mdash; 30 days, 60 days, whenever you need. You choose the closing date.'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-semibold text-lg mb-2" style={{color:'var(--ink)'}}>{title}</h3>
                  <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Who Should Consider */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Who Should Consider a Cash Offer?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>A cash sale is not the right fit for everyone. But for certain situations, it is the fastest and least stressful path forward.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                ['Inherited property','You inherited a home you do not want to manage, repair, or maintain.'],
                ['Divorce','You need to liquidate quickly as part of a divorce settlement.'],
                ['Relocation','Job transfer or life change requires you to move fast.'],
                ['Deferred maintenance','The house needs major work &mdash; roof, AC, foundation &mdash; and you do not want to invest in repairs.'],
                ['Behind on payments','You are facing foreclosure and need to sell before it goes to auction. See pre-foreclosure options.'],
                ['Tired landlord','You are done being a landlord and want out of a rental property.'],
                ['Hoarder house','The property needs extensive cleanout and you do not have the time or energy.'],
                ['Probate','The estate needs to sell property and distribute proceeds to heirs.'],
              ].map(([title, desc]) => (
                <div key={title} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Cash Offer vs Traditional Listing</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'var(--cream-warm)'}}>
                    <th className="text-left p-3 font-semibold border" style={{borderColor:'var(--border)'}}>Factor</th>
                    <th className="text-left p-3 font-semibold border" style={{borderColor:'var(--border)'}}>Cash Offer</th>
                    <th className="text-left p-3 font-semibold border" style={{borderColor:'var(--border)'}}>Traditional Listing</th>
                  </tr>
                </thead>
                <tbody style={{color:'var(--ink-soft)'}}>
                  <tr>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Speed</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Close in 7-14 days</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>30-60+ days after offer</td>
                  </tr>
                  <tr style={{background:'var(--cream-warm)'}}>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Sale price</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Below market value</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Full market value</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Repairs needed</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>None &mdash; sell AS-IS</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Usually some prep/repairs</td>
                  </tr>
                  <tr style={{background:'var(--cream-warm)'}}>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Showings</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>None</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Multiple over weeks</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Certainty</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>High &mdash; no financing contingency</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Deals can fall through</td>
                  </tr>
                  <tr style={{background:'var(--cream-warm)'}}>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Commission</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>None</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Standard commission applies</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Timeline control</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>You pick the closing date</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Depends on buyer&apos;s lender</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* The Barrett Henry Difference */}
            <h2 className="font-serif text-2xl mb-4 mt-10">The Barrett Henry Difference</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Barrett is not a wholesaler. He is not going to lowball you, lock you into a contract, and then flip your deal to another investor for a fee. Barrett Henry is a licensed REALTOR® and Broker Associate at REMAX Collective with 23+ years of real estate experience.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Here is what makes this different: Barrett shows you <strong>both options</strong>. The cash offer number and what you would likely net from a <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>traditional listing</Link>. Side by side. Real numbers. Then you decide which path makes sense for your situation. Start by checking your <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>current Valrico home value</Link>.</p>

            <div className="rounded-md p-8 mt-4 mb-12" style={{background:'var(--cream-warm)',border:'1px solid var(--border)'}}>
              <p className="text-[15px] leading-[1.8] italic" style={{color:'var(--ink)'}}>&ldquo;I am not going to lowball you and flip your house. I am going to show you real numbers for both paths and let you decide what makes sense for your situation.&rdquo;</p>
              <p className="text-sm mt-2 font-semibold" style={{color:'var(--ink-soft)'}}>— Barrett Henry, REALTOR®</p>
            </div>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap mt-8 mb-12">
              <a href="tel:8137337907" className="btn-solid">Call Barrett &mdash; (813) 733-7907</a>
              <Link href="/sell-my-home-valrico/" className="btn-ghost">Learn about traditional listing</Link>
            </div>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Cash Offer FAQ</h2>
            <div className="space-y-4">
              {[
                ['How much will I get for a cash offer on my Valrico home?','Cash offers are typically 70-85% of market value, depending on condition, location, and repair needs. Barrett provides a transparent breakdown showing how the number is calculated, and compares it to what you would net from a traditional listing after commissions, repairs, and carrying costs.'],
                ['Is there any obligation if I request a cash offer?','None. The cash offer is free, and you are under no pressure to accept. Barrett provides both the cash offer and a traditional listing analysis so you can make an informed decision.'],
                ['Can I get a cash offer if my home needs major repairs?','Yes. Cash offers are designed for properties in any condition &mdash; roof damage, outdated systems, cosmetic issues, code violations, or anything else. No repairs needed from you.'],
                ['How fast can I actually close?','As fast as 7 days if title is clear. Most cash closings happen in 10-14 days. If you need more time, you pick the closing date &mdash; there is no rush from the buyer side.'],
              ].map(([q, a]) => (
                <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Get your cash offer</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR® at REMAX Collective. Cash offer within 24 hours. No obligation. No repairs. No commission.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">Call (813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related</h3>
              <ul className="space-y-2">
                <li><Link href="/sell-my-home-valrico/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Sell my Valrico home (traditional) &rarr;</Link></li>
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Get my Valrico home value &rarr;</Link></li>
                <li><Link href="/valrico-short-sale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Short sale assistance &rarr;</Link></li>
                <li><Link href="/valrico-pre-foreclosure/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Pre-foreclosure help &rarr;</Link></li>
                <li><Link href="/valrico-foreclosures/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico foreclosures &rarr;</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much will I get for a cash offer on my Valrico home?","acceptedAnswer":{"@type":"Answer","text":"Cash offers are typically 70-85% of market value, depending on condition, location, and repair needs. Barrett provides a transparent breakdown and compares it to what you would net from a traditional listing."}},{"@type":"Question","name":"Is there any obligation if I request a cash offer?","acceptedAnswer":{"@type":"Answer","text":"None. The cash offer is free, and you are under no pressure to accept."}},{"@type":"Question","name":"Can I get a cash offer if my home needs major repairs?","acceptedAnswer":{"@type":"Answer","text":"Yes. Cash offers are designed for properties in any condition. No repairs needed from you."}},{"@type":"Question","name":"How fast can I actually close on a cash offer?","acceptedAnswer":{"@type":"Answer","text":"As fast as 7 days if title is clear. Most cash closings happen in 10-14 days. You pick the closing date."}}]})}} />

      {/* RealEstateAgent JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"RealEstateAgent","name":"Barrett Henry","jobTitle":"REALTOR® & Broker Associate","url":"https://valricoagent.com/valrico-cash-offer/","telephone":"(813) 733-7907","email":"barrett@nowtb.com","image":"https://valricoagent.com/barrett-henry.jpg","address":{"@type":"PostalAddress","addressLocality":"Valrico","addressRegion":"FL","addressCountry":"US"},"worksFor":{"@type":"RealEstateOrganization","name":"REMAX Collective"},"description":"Barrett Henry is a REALTOR® and Broker Associate at REMAX Collective with 23+ years of real estate experience. Get a cash offer on your Valrico home in 24 hours."})}} />
    </>
  );
}
