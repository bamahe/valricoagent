'use client';
import Link from 'next/link';

export default function ValricoPreForeclosure() {
  return (
    <>
      {/* Hero */}
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Foreclosure Prevention</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Behind on Your Mortgage? You Have Options.</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>If you have missed mortgage payments on your Valrico home, you are not out of options. Pre-foreclosure is a window &mdash; not a dead end. The earlier you act, the more paths you have to protect your credit, keep your home, or sell on your own terms.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call Barrett &mdash; (813) 733-7907</a>
            <a href="https://flforeclosurehelp.com" target="_blank" rel="noopener" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Visit flforeclosurehelp.com</a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>
            {/* What Is Pre-Foreclosure */}
            <h2 className="font-serif text-2xl mb-4">What Is Pre-Foreclosure?</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Pre-foreclosure means you have missed mortgage payments and your lender has filed a lis pendens &mdash; a public notice that foreclosure proceedings have started. But the sale has not happened yet. Your home has not gone to auction. This is your window to act.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>During pre-foreclosure, you still own the home. You still have legal rights. And you still have options that disappear once the foreclosure is finalized. The key is acting before that window closes.</p>
            <p className="text-[15px] leading-[1.8] mb-8" style={{color:'var(--ink-soft)'}}>Many homeowners freeze when they get behind on payments. They stop opening mail, avoid phone calls from the bank, and hope the problem goes away. It does not. But the good news is that banks would rather work with you than foreclose. Foreclosure is expensive for lenders too.</p>

            {/* Your Options */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Your Options</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Depending on your situation, one or more of these paths may be available to you. Barrett can help you evaluate which option fits best.</p>

            <div className="space-y-4 mb-10">
              {[
                ['Loan modification','Your lender adjusts the terms of your mortgage &mdash; lower interest rate, extended term, or reduced principal &mdash; to make payments affordable. You keep the home and stay current on a modified payment. This is usually the first option to explore.'],
                ['Forbearance','The bank temporarily pauses or reduces your payments while you get back on your feet. This is common after job loss, medical emergency, or natural disaster. The missed payments are added to the end of the loan or repaid over time.'],
                ['Short sale','If you owe more than the home is worth, you sell the property for less than the mortgage balance with the bank\'s approval. You avoid foreclosure on your record and typically suffer less credit damage. Barrett has 20+ years of short sale experience. Read the full short sale guide.'],
                ['Sell before auction','If you have equity in the home, you can list and sell it traditionally before the foreclosure sale date. You pay off the mortgage, keep any remaining equity, and avoid foreclosure entirely. See the selling guide for more on listing your home.'],
                ['Deed in lieu of foreclosure','You voluntarily transfer ownership of the home to the bank in exchange for release from the mortgage. This avoids the foreclosure court process but still impacts your credit. It is faster than foreclosure and sometimes comes with relocation assistance.'],
                ['Refinance','If you still have equity and can qualify, refinancing into a new loan with lower payments may solve the problem. This is more feasible in the early stages of delinquency before your credit score drops too far.'],
                ['Bankruptcy (last resort)','Filing Chapter 13 bankruptcy can temporarily halt foreclosure and allow you to catch up on payments through a court-supervised repayment plan. This is a significant legal step and should only be considered after consulting with an attorney.'],
              ].map(([title, desc]) => (
                <div key={title} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Florida Foreclosure Timeline */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Timeline: How Foreclosure Works in Florida</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Florida is a <strong>judicial foreclosure state</strong>, meaning every foreclosure must go through the court system. This makes the process slower than in non-judicial states, which gives you more time to act &mdash; but only if you use that time wisely.</p>

            <div className="space-y-8 mb-10">
              {[
                ['Missed payments (Month 1-3)','After missing 1-3 payments, you will receive late notices and phone calls from your lender. At this stage, loan modification and forbearance are most likely to be approved. This is the best time to call Barrett.'],
                ['Notice of default / demand letter (Month 3-4)','The lender sends a formal demand letter requiring you to cure the default (pay what you owe). This is your last chance to bring the loan current without additional legal proceedings.'],
                ['Lis pendens filed (Month 4-6)','The lender files a lis pendens with the Hillsborough County court, officially starting the foreclosure lawsuit. This becomes public record. You are served with a summons and have 20 days to respond. A short sale can still be initiated at this stage.'],
                ['Court proceedings (Month 6-12)','The case moves through the court system. If you do not respond or contest, the bank can request a summary judgment. If you contest, the timeline extends. During this period, short sales, loan modifications, and deed-in-lieu arrangements are still possible.'],
                ['Final judgment and auction (Month 12-18)','The court issues a final judgment of foreclosure and sets an auction date. The property is sold at auction through the Hillsborough County Clerk of Court. If nobody bids enough, the bank takes ownership (REO).'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-semibold text-lg mb-2" style={{color:'var(--ink)'}}>{title}</h3>
                  <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Why Act Now */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Why You Should Act Now</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Every month of delay limits your options. In the early stages of delinquency, you can potentially modify your loan, sell your home with equity, or negotiate a forbearance. Once a lis pendens is filed and the case goes to court, your options narrow and your credit damage deepens.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>The homeowners who come through foreclosure in the best shape are the ones who picked up the phone early. The ones who waited until the auction date was set had fewer options and worse outcomes.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Barrett Henry has helped homeowners navigate every stage of the foreclosure process for over 20 years. He has seen every situation and can tell you exactly where you stand and what your real options are. You can also <Link href="/valrico-cash-offer/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>get a cash offer within 24 hours</Link> if speed is your priority, or check your <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>current home value</Link> to understand your equity position.</p>

            {/* CTA */}
            <div className="rounded-md p-8 mt-8 mb-12" style={{background:'var(--cream-warm)',border:'1px solid var(--border)'}}>
              <p className="text-[15px] leading-[1.8] font-semibold mb-2" style={{color:'var(--ink)'}}>Call Barrett at (813) 733-7907.</p>
              <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>This conversation is confidential. No judgment. Barrett will review your situation and explain your options in plain English. If you are behind on payments, the worst thing you can do is nothing.</p>
              <div className="flex gap-3 flex-wrap">
                <a href="tel:8137337907" className="btn-solid">Call (813) 733-7907</a>
                <a href="mailto:barrett@nowtb.com" className="btn-ghost">Email barrett@nowtb.com</a>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Pre-Foreclosure FAQ</h2>
            <div className="space-y-4">
              {[
                ['How many payments can I miss before foreclosure starts in Florida?','Most lenders begin the foreclosure process after 3-4 missed payments (90-120 days delinquent). However, some lenders move faster and others move slower. Once a lis pendens is filed with the court, the formal foreclosure has begun.'],
                ['Can I still sell my home if I am in pre-foreclosure?','Yes. You can sell your home at any point before the foreclosure auction. If you have equity, you sell traditionally and pay off the mortgage at closing. If you are underwater, you may qualify for a short sale with lender approval.'],
                ['Will the bank really work with me on a loan modification?','Banks lose money on foreclosures. Most lenders prefer to modify the loan and keep a performing borrower over the cost and timeline of a foreclosure lawsuit. But you have to initiate the process &mdash; the bank will not offer it to you unprompted.'],
                ['Is there any cost to talk to Barrett about my situation?','No. Barrett provides free, confidential consultations for homeowners facing foreclosure or financial hardship. There is no fee and no obligation. Call (813) 733-7907.'],
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
              <h3 className="font-serif text-lg mb-3">Confidential help</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR® at REMAX Collective. 23+ years of real estate experience. Free consultation, no judgment, no obligation.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">Call (813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-short-sale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Short sale assistance &rarr;</Link></li>
                <li><Link href="/valrico-foreclosures/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico foreclosure homes &rarr;</Link></li>
                <li><Link href="/valrico-cash-offer/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Get a cash offer &rarr;</Link></li>
                <li><Link href="/sell-my-home-valrico/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Sell my Valrico home &rarr;</Link></li>
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>What is my home worth? &rarr;</Link></li>
                <li><a href="https://flforeclosurehelp.com" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>flforeclosurehelp.com &rarr;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many payments can I miss before foreclosure starts in Florida?","acceptedAnswer":{"@type":"Answer","text":"Most lenders begin the foreclosure process after 3-4 missed payments (90-120 days delinquent). Once a lis pendens is filed with the court, the formal foreclosure has begun."}},{"@type":"Question","name":"Can I still sell my home if I am in pre-foreclosure?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can sell your home at any point before the foreclosure auction. If you have equity, sell traditionally. If underwater, you may qualify for a short sale."}},{"@type":"Question","name":"Will the bank really work with me on a loan modification?","acceptedAnswer":{"@type":"Answer","text":"Banks lose money on foreclosures. Most lenders prefer to modify the loan and keep a performing borrower over the cost of a foreclosure lawsuit. But you have to initiate the process."}},{"@type":"Question","name":"Is there any cost to talk to Barrett about my situation?","acceptedAnswer":{"@type":"Answer","text":"No. Barrett provides free, confidential consultations for homeowners facing foreclosure or financial hardship. Call (813) 733-7907."}}]})}} />

      {/* RealEstateAgent JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"RealEstateAgent","name":"Barrett Henry","jobTitle":"REALTOR® & Broker Associate","url":"https://valricoagent.com/valrico-pre-foreclosure/","telephone":"(813) 733-7907","email":"barrett@nowtb.com","image":"https://valricoagent.com/barrett-henry.jpg","address":{"@type":"PostalAddress","addressLocality":"Valrico","addressRegion":"FL","addressCountry":"US"},"worksFor":{"@type":"RealEstateOrganization","name":"REMAX Collective"},"description":"Barrett Henry is a REALTOR® and Broker Associate at REMAX Collective with 23+ years of real estate experience, helping Valrico homeowners navigate pre-foreclosure options."})}} />
    </>
  );
}
