'use client';
import Link from 'next/link';
import QuickAnswer from '../components/QuickAnswer';

export default function ValricoShortSale() {
  return (
    <>
      {/* Hero */}
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Distressed Property Solutions</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Valrico Short Sale Assistance</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>If you owe more on your Valrico home than it is currently worth, a short sale allows you to sell without going through foreclosure. The bank agrees to accept less than the full mortgage balance, and you move on with significantly less damage to your credit.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call Barrett &mdash; (813) 733-7907</a>
            <a href="https://flforeclosurehelp.com" target="_blank" rel="noopener" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Visit flforeclosurehelp.com</a>
          </div>
        </div>
      </div>

      {/* QuickAnswer — AEO block for AI answer engines */}
      <div className="max-w-[1140px] mx-auto px-7 pt-8">
        <QuickAnswer
          question="What is a short sale in Valrico FL?"
          answer="A short sale is when a homeowner sells their property for less than the mortgage balance and the bank agrees to accept the reduced payoff. Barrett Henry, REALTOR® with REMAX Collective, has 23+ years of real estate experience handling short sales and negotiates deficiency waivers to protect sellers. Confidential consultations are free. Call (813) 733-7907."
        />
      </div>

      {/* Main content */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>
            {/* What Is a Short Sale */}
            <h2 className="font-serif text-2xl mb-4">What Is a Short Sale?</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>A short sale happens when a homeowner sells their property for less than the remaining mortgage balance, and the bank (lender) agrees to accept the reduced payoff. The bank takes a loss, but avoids the cost and timeline of a full foreclosure proceeding.</p>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>For the homeowner, a short sale offers several advantages over foreclosure:</p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>Less credit damage &mdash; a short sale typically impacts your credit score 50-100 points less than a foreclosure</li>
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>Shorter waiting period to buy again &mdash; 2 years after a short sale vs. 3-7 years after foreclosure (depending on loan type)</li>
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>No foreclosure on your public record</li>
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>Potential to negotiate forgiveness of the remaining balance (deficiency waiver)</li>
            </ul>

            {/* Do You Qualify */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Do You Qualify for a Short Sale?</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Banks do not approve short sales for everyone. You generally need to meet these criteria:</p>
            <div className="space-y-4 mb-10">
              {[
                ['Financial hardship','You must demonstrate a legitimate financial hardship &mdash; job loss, divorce, medical bills, death of a co-borrower, business failure, military relocation, or adjustable-rate mortgage reset. The bank will require a hardship letter explaining your situation.'],
                ['Inability to pay','You need to show the bank that you cannot continue making payments. This is documented through bank statements, tax returns, and pay stubs showing income decline or insufficient funds.'],
                ['Property value below mortgage balance','The home must be worth less than what you owe. An appraisal or broker price opinion (BPO) will confirm this. If you have equity, a short sale is not applicable &mdash; you would just sell traditionally.'],
              ].map(([title, desc]) => (
                <div key={title} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* The Short Sale Process */}
            <h2 className="font-serif text-2xl mb-4 mt-10">The Short Sale Process</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Short sales are not quick. The typical timeline is 3 to 6 months from listing to closing. Here is how it works, step by step.</p>

            <div className="space-y-8 mb-10">
              {[
                ['1. Contact Barrett for a confidential consultation','We review your financial situation, mortgage balance, and current home value to determine if a short sale is the right path. No cost, no obligation, no judgment.'],
                ['2. Gather your financial documentation','You will need to provide: hardship letter, last 2 years of tax returns, last 2 months of bank statements, recent pay stubs, a list of monthly expenses, and proof of the hardship (divorce decree, medical bills, termination letter, etc.).'],
                ['3. List the property on the market','Barrett lists your home at current market value. The home needs to be listed and marketed to demonstrate to the bank that the sale price is fair. A real buyer making a real offer is what moves the bank to approve.'],
                ['4. Submit the short sale package to the bank','Once we have a purchase offer, Barrett submits the complete package to your lender: the offer, your financial documents, a hardship letter, and a comparative market analysis showing the home\'s current value. This is where most agents fail &mdash; the package has to be complete and properly formatted for the specific lender\'s requirements.'],
                ['5. Negotiate with the bank','The bank assigns a negotiator who reviews the file, orders a BPO (broker price opinion), and decides whether to approve, counter, or deny. Barrett handles all bank communication, follows up consistently, and escalates when the file stalls. This stage can take 30 to 120 days depending on the lender.'],
                ['6. Close the sale','Once the bank approves, the sale closes like a normal transaction. The bank releases the lien, the buyer gets the property, and you are released from your mortgage obligation (typically with a deficiency waiver, which Barrett negotiates for).'],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h3 className="font-semibold text-lg mb-2" style={{color:'var(--ink)'}}>{title}</h3>
                  <p className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Short Sale vs Foreclosure vs Deed in Lieu</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'var(--cream-warm)'}}>
                    <th className="text-left p-3 font-semibold border" style={{borderColor:'var(--border)'}}>Factor</th>
                    <th className="text-left p-3 font-semibold border" style={{borderColor:'var(--border)'}}>Short Sale</th>
                    <th className="text-left p-3 font-semibold border" style={{borderColor:'var(--border)'}}>Foreclosure</th>
                    <th className="text-left p-3 font-semibold border" style={{borderColor:'var(--border)'}}>Deed in Lieu</th>
                  </tr>
                </thead>
                <tbody style={{color:'var(--ink-soft)'}}>
                  <tr>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Credit impact</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Moderate (50-150 point drop)</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Severe (200+ point drop)</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Moderate to severe</td>
                  </tr>
                  <tr style={{background:'var(--cream-warm)'}}>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Timeline</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>3-6 months</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>6-18 months (Florida)</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>2-4 months</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Deficiency judgment risk</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Can negotiate waiver</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Bank can pursue</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Can negotiate waiver</td>
                  </tr>
                  <tr style={{background:'var(--cream-warm)'}}>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Wait to buy again</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>2 years (FHA/VA)</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>3-7 years</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>2-4 years</td>
                  </tr>
                  <tr>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Public record</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Shows as &quot;settled&quot;</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Shows as &quot;foreclosure&quot;</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Shows as &quot;deed in lieu&quot;</td>
                  </tr>
                  <tr style={{background:'var(--cream-warm)'}}>
                    <td className="p-3 border font-medium" style={{borderColor:'var(--border)',color:'var(--ink)'}}>Control over process</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>You sell on your terms</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>Bank controls everything</td>
                    <td className="p-3 border" style={{borderColor:'var(--border)'}}>You hand over the deed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Barrett's Experience */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Barrett&apos;s Short Sale Experience</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Barrett Henry has been handling short sales for over 20 years. He knows how to package files for specific lenders, how to escalate stalled negotiations, and how to get deficiency waivers included in the approval. Most importantly, he knows how to set realistic expectations so you are not blindsided by the timeline or process.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Every short sale starts with a confidential phone call. No judgment, no pressure, just honest information about your options. If a short sale is not the right fit, you may also consider a <Link href="/valrico-cash-offer/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>cash offer for a quick sale</Link>, or read about <Link href="/valrico-pre-foreclosure/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>other pre-foreclosure options</Link>. If you have equity, a <Link href="/sell-my-home-valrico/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>traditional sale</Link> may net you more. Check your <Link href="/valrico-fl-home-values/" className="font-semibold no-underline" style={{color:'var(--accent)'}}>current home value</Link> to understand where you stand.</p>

            {/* CTA */}
            <div className="rounded-md p-8 mt-8 mb-12" style={{background:'var(--cream-warm)',border:'1px solid var(--border)'}}>
              <p className="text-[15px] leading-[1.8] font-semibold mb-2" style={{color:'var(--ink)'}}>If you are behind on payments, call Barrett before it goes to foreclosure.</p>
              <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>There may be options you do not know about. The earlier you call, the more options you have.</p>
              <div className="flex gap-3 flex-wrap">
                <a href="tel:8137337907" className="btn-solid">Call Barrett &mdash; (813) 733-7907</a>
                <a href="https://flforeclosurehelp.com" target="_blank" rel="noopener" className="btn-ghost">flforeclosurehelp.com</a>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Short Sale FAQ</h2>
            <div className="space-y-4">
              {[
                ['Will I owe money after a short sale?','It depends on whether the bank issues a deficiency waiver. Barrett negotiates for a full deficiency waiver on every short sale, meaning the bank forgives the difference between the sale price and the mortgage balance. Most lenders agree to this to avoid the cost of foreclosure.'],
                ['How long does a short sale take in Florida?','Most short sales take 3 to 6 months from listing to closing. The biggest variable is bank response time. Some lenders respond in 30 days, others take 90+. Barrett follows up aggressively to keep the file moving.'],
                ['Can I still live in my home during a short sale?','Yes. You can live in the home throughout the short sale process. You do not need to move out until the sale closes.'],
                ['Will a short sale affect my ability to buy a home later?','Yes, but less than a foreclosure. With an FHA loan, you can buy again 2 years after a short sale (with re-established credit). After a foreclosure, the waiting period is 3 years for FHA and up to 7 years for conventional loans.'],
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
              <h3 className="font-serif text-lg mb-3">Confidential consultation</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR® at REMAX Collective. 23+ years of real estate experience. Short sale consultations are free, private, and no-obligation.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">Call (813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-pre-foreclosure/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Pre-foreclosure help &rarr;</Link></li>
                <li><Link href="/valrico-foreclosures/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico foreclosure homes &rarr;</Link></li>
                <li><Link href="/valrico-cash-offer/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Get a cash offer &rarr;</Link></li>
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>What is my home worth? &rarr;</Link></li>
                <li><Link href="/sell-my-home-valrico/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Sell my home (traditional) &rarr;</Link></li>
                <li><a href="https://flforeclosurehelp.com" target="_blank" rel="noopener" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>flforeclosurehelp.com &rarr;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQPage JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Will I owe money after a short sale?","acceptedAnswer":{"@type":"Answer","text":"It depends on whether the bank issues a deficiency waiver. Barrett negotiates for a full deficiency waiver on every short sale, meaning the bank forgives the difference between the sale price and the mortgage balance."}},{"@type":"Question","name":"How long does a short sale take in Florida?","acceptedAnswer":{"@type":"Answer","text":"Most short sales take 3 to 6 months from listing to closing. The biggest variable is bank response time."}},{"@type":"Question","name":"Can I still live in my home during a short sale?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can live in the home throughout the short sale process. You do not need to move out until the sale closes."}},{"@type":"Question","name":"Will a short sale affect my ability to buy a home later?","acceptedAnswer":{"@type":"Answer","text":"Yes, but less than a foreclosure. With an FHA loan, you can buy again 2 years after a short sale. After a foreclosure, the waiting period is 3 to 7 years depending on loan type."}}]})}} />

      {/* RealEstateAgent JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"RealEstateAgent","name":"Barrett Henry","jobTitle":"REALTOR® & Broker Associate","url":"https://valricoagent.com/valrico-short-sale/","telephone":"(813) 733-7907","email":"barrett@nowtb.com","image":"https://valricoagent.com/barrett-henry.jpg","address":{"@type":"PostalAddress","addressLocality":"Valrico","addressRegion":"FL","addressCountry":"US"},"worksFor":{"@type":"RealEstateOrganization","name":"REMAX Collective"},"description":"Barrett Henry is a REALTOR® and Broker Associate at REMAX Collective with 23+ years of real estate experience, specializing in short sales and distressed property solutions in Valrico FL."})}} />

      {/* BreadcrumbList JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://valricoagent.com/" },
          { "@type": "ListItem", "position": 2, "name": "Short Sale Help", "item": "https://valricoagent.com/valrico-short-sale/" },
        ]
      }) }} />
    </>
  );
}
