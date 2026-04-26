'use client';
import Link from 'next/link';

/* ── JSON-LD FAQPage schema ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Florida Hometown Heroes program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hometown Heroes provides up to 5% of the loan amount for down payment and closing costs to all W-2 workers in Florida. It's a 0% interest, deferred loan that's forgiven after 5 years of living in the home."
      }
    },
    {
      "@type": "Question",
      "name": "How much down payment do I need for a house in Valrico FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As little as 0% with VA or USDA loans, 3% with conventional HomeReady or Home Possible programs, or 3.5% with FHA. Combined with Hometown Heroes, many Valrico buyers need very little cash out of pocket."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Hillsborough County SHIP program?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SHIP (State Housing Initiatives Partnership) provides up to $50,000 for down payment and closing costs to income-qualifying buyers purchasing a primary residence in Hillsborough County. Income limits apply and funding availability varies."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine down payment assistance programs in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In some cases, yes. Hometown Heroes can be combined with certain loan types. Your lender will advise on which programs stack. Barrett Henry can connect you with lenders experienced in combining assistance programs for Valrico buyers."
      }
    }
  ]
};

/* ── Metadata (exported for Next.js head) ── */
export const metadata = {
  title: "Down Payment Assistance Programs for Valrico, FL Home Buyers | Barrett Henry, REALTOR®",
  description: "Florida down payment assistance programs available to Valrico buyers. Hometown Heroes, SHIP, FHA, VA, and more. Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "Down Payment Assistance Programs for Valrico, FL Home Buyers",
    description: "Hometown Heroes, SHIP, FHA, VA, and conventional low-down-payment programs available to Valrico FL home buyers. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-down-payment-assistance/",
  },
};

export default function DownPaymentAssistance() {
  return (
    <>
      {/* HERO */}
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Down Payment Help</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Down Payment Assistance Programs for Valrico, FL Home Buyers</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>You don&apos;t need 20% down to buy a home in Valrico. Multiple programs exist right now that can cover most — or all — of your out-of-pocket costs. Here&apos;s what&apos;s actually available and how each one works.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call Barrett — (813) 733-7907</a>
            <Link href="/valrico-first-time-homebuyer/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">First-Time Buyer Guide</Link>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>

            {/* HOMETOWN HEROES */}
            <h2 className="font-serif text-2xl mb-4">Florida Hometown Heroes Program</h2>
            <div className="rounded-lg p-6 mb-6 border-2" style={{borderColor:'var(--accent)',background:'var(--cream)'}}>
              <p className="text-sm font-semibold mb-2" style={{color:'var(--accent)'}}>
                <span className="material-icons" style={{fontSize:18,verticalAlign:'middle',marginRight:6}}>star</span>
                This is the program most Valrico buyers should look at first.
              </p>
            </div>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Despite the name, Hometown Heroes is not just for first responders, teachers, or military. It&apos;s available to <strong>all W-2 employees</strong> who work for a Florida-based employer. That includes retail workers, office staff, healthcare employees, restaurant workers — anyone with a W-2.</p>
            <div className="space-y-3 mb-6">
              {[
                ['Amount','Up to 5% of the first mortgage loan amount'],
                ['Interest Rate','0% — no interest accrues'],
                ['Monthly Payments','None — it\'s a deferred second mortgage'],
                ['Forgiveness','Fully forgiven after 5 years of continuous occupancy'],
                ['Who Qualifies','Any W-2 worker employed by a Florida-based employer'],
                ['Income Limit','Varies by county — Hillsborough County limit is generous enough for most working professionals'],
                ['Can Be Used For','Down payment AND closing costs'],
              ].map(([label, val]) => (
                <div key={label} className="flex gap-3 text-[15px]">
                  <span className="font-semibold shrink-0 w-[160px]" style={{color:'var(--ink)'}}>{label}</span>
                  <span style={{color:'var(--ink-soft)'}}>{val}</span>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.8] mb-10" style={{color:'var(--ink-soft)'}}>On a $400,000 Valrico home, Hometown Heroes could provide up to <strong>$20,000</strong> toward your down payment and closing costs. That&apos;s often enough to cover the entire out-of-pocket amount for an FHA or conventional loan. The program is funded by the Florida Housing Finance Corporation and availability depends on state funding — when it&apos;s open, don&apos;t wait.</p>

            {/* SHIP */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Hillsborough County SHIP Program</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>SHIP (State Housing Initiatives Partnership) is a county-administered program that provides down payment and closing cost assistance to income-qualifying buyers in Hillsborough County. Since Valrico is in Hillsborough County, you&apos;re eligible if you meet the income requirements.</p>
            <div className="space-y-3 mb-6">
              {[
                ['Amount','Up to $50,000 for down payment and closing costs'],
                ['Requirements','Must be a primary residence purchase in Hillsborough County'],
                ['Income Limits','Based on AMI (Area Median Income) — varies by household size'],
                ['Repayment','Typically a deferred, forgivable loan with occupancy requirements'],
                ['Availability','Funding cycles open periodically — not always available'],
              ].map(([label, val]) => (
                <div key={label} className="flex gap-3 text-[15px]">
                  <span className="font-semibold shrink-0 w-[160px]" style={{color:'var(--ink)'}}>{label}</span>
                  <span style={{color:'var(--ink-soft)'}}>{val}</span>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.8] mb-10" style={{color:'var(--ink-soft)'}}>SHIP funding comes and goes. When a new funding cycle opens, applications flood in and it closes fast. Barrett works with lenders who track SHIP availability and can move quickly when funding opens. If your income qualifies, this program can make a massive difference — up to $50,000 is not a small number.</p>

            {/* FHA */}
            <h2 className="font-serif text-2xl mb-4 mt-10">FHA Loans — 3.5% Down</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>FHA loans are backed by the Federal Housing Administration and are one of the most popular options for first-time buyers. The lower credit score requirement makes this accessible to buyers who might not qualify for conventional financing.</p>
            <div className="space-y-3 mb-6">
              {[
                ['Down Payment','3.5% with 580+ credit score (10% with 500-579)'],
                ['Credit Score','580+ for standard terms'],
                ['Mortgage Insurance','Required for the life of the loan (MIP)'],
                ['Loan Limits','$498,257 for a single-family home in Hillsborough County (2026)'],
                ['Best For','Buyers with lower credit scores or limited savings'],
              ].map(([label, val]) => (
                <div key={label} className="flex gap-3 text-[15px]">
                  <span className="font-semibold shrink-0 w-[160px]" style={{color:'var(--ink)'}}>{label}</span>
                  <span style={{color:'var(--ink-soft)'}}>{val}</span>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.8] mb-10" style={{color:'var(--ink-soft)'}}>The downside of FHA: mortgage insurance premium (MIP) stays for the life of the loan. With conventional loans, PMI drops off at 20% equity. Many buyers start with FHA, build equity, then refinance to conventional to drop the insurance. On a $400K home, FHA requires <strong>$14,000 down</strong>.</p>

            {/* VA */}
            <h2 className="font-serif text-2xl mb-4 mt-10">VA Loans — 0% Down for Veterans</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>If you&apos;re a veteran, active-duty service member, or qualifying spouse, VA loans are the single best mortgage product available. Period.</p>
            <div className="space-y-3 mb-6">
              {[
                ['Down Payment','0% — zero down payment required'],
                ['PMI','None — no private mortgage insurance'],
                ['Interest Rates','Typically lower than conventional or FHA'],
                ['Funding Fee','One-time fee (can be rolled into the loan) — waived for disabled vets'],
                ['Best For','Any qualifying veteran or active-duty military buying in Valrico'],
              ].map(([label, val]) => (
                <div key={label} className="flex gap-3 text-[15px]">
                  <span className="font-semibold shrink-0 w-[160px]" style={{color:'var(--ink)'}}>{label}</span>
                  <span style={{color:'var(--ink-soft)'}}>{val}</span>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.8] mb-10" style={{color:'var(--ink-soft)'}}>No down payment. No PMI. Lower rates. There is no better deal in mortgage lending. Tampa Bay has a large military and veteran population — MacDill AFB is 30 minutes from Valrico. If you qualify for VA, use it. Barrett works with VA-experienced lenders who know how to close these smoothly.</p>

            {/* CONVENTIONAL 3% */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Conventional 3% Down Programs</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>Two programs let you put just 3% down on a conventional loan:</p>
            <div className="space-y-4 mb-10">
              <div className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>Fannie Mae HomeReady</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>3% down for buyers earning at or below 80% of area median income. Allows non-borrower household income to help qualify. PMI is reduced compared to standard conventional loans and cancels at 20% equity.</p>
              </div>
              <div className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>Freddie Mac Home Possible</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>Similar to HomeReady — 3% down with income limits. Allows co-borrowers who don&apos;t live in the home. Flexible sources for down payment including gifts, grants, and employer assistance programs. PMI cancels at 20% equity.</p>
              </div>
            </div>

            {/* HOW MUCH TABLE */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Much Do You Actually Need?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Here&apos;s what different down payment percentages look like on typical Valrico home prices. These are down payment amounts only — closing costs (roughly 2-3% of the purchase price) are additional.</p>

            {/* Down payment comparison table */}
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{background:'var(--blue-deep)',color:'#fff'}}>
                    <th className="text-left py-3 px-4 font-semibold rounded-tl-md">Purchase Price</th>
                    <th className="text-center py-3 px-4 font-semibold">3% Down</th>
                    <th className="text-center py-3 px-4 font-semibold">3.5% Down (FHA)</th>
                    <th className="text-center py-3 px-4 font-semibold">5% Down</th>
                    <th className="text-center py-3 px-4 font-semibold rounded-tr-md">0% (VA/USDA)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['$300,000','$9,000','$10,500','$15,000','$0'],
                    ['$400,000','$12,000','$14,000','$20,000','$0'],
                    ['$500,000','$15,000','$17,500','$25,000','$0'],
                  ].map(([price, three, fha, five, zero], i) => (
                    <tr key={price} style={{background: i % 2 === 0 ? 'var(--cream)' : '#fff', borderBottom:'1px solid var(--border)'}}>
                      <td className="py-3 px-4 font-semibold" style={{color:'var(--ink)'}}>{price}</td>
                      <td className="py-3 px-4 text-center" style={{color:'var(--ink-soft)'}}>{three}</td>
                      <td className="py-3 px-4 text-center" style={{color:'var(--ink-soft)'}}>{fha}</td>
                      <td className="py-3 px-4 text-center" style={{color:'var(--ink-soft)'}}>{five}</td>
                      <td className="py-3 px-4 text-center font-semibold" style={{color:'var(--accent)'}}>{zero}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[15px] leading-[1.8] mb-10" style={{color:'var(--ink-soft)'}}>With Hometown Heroes covering up to 5% of the loan amount, a buyer purchasing a $400,000 Valrico home could receive up to $20,000 — enough to cover the full down payment on an FHA loan <em>and</em> a chunk of closing costs. Combine that with seller concessions (which Barrett can negotiate), and you might need very little cash to close.</p>

            {/* CTA */}
            <div className="rounded-lg p-8 mt-10 text-center" style={{background:'var(--blue-deep)',color:'#fff'}}>
              <h2 className="font-serif text-2xl mb-3">Find Out What You Qualify For</h2>
              <p className="text-[15px] leading-relaxed mb-6" style={{color:'rgba(255,255,255,.75)',maxWidth:540,margin:'0 auto 24px'}}>Barrett Henry has 23+ years of real estate experience and works with lenders who specialize in down payment assistance programs for Valrico buyers. One call and you&apos;ll know exactly what&apos;s available to you.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="tel:8137337907" className="inline-block py-3 px-8 bg-white font-semibold text-[15px] rounded no-underline" style={{color:'var(--accent)'}}>Call (813) 733-7907</a>
                <a href="mailto:barrett@nowtb.com" className="inline-block py-3 px-8 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Email Barrett</a>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                ['What is the Florida Hometown Heroes program?','Hometown Heroes provides up to 5% of the loan amount for down payment and closing costs. It\'s available to all W-2 workers in Florida — not just first responders. The loan is 0% interest with no monthly payments and is forgiven after 5 years of living in the home.'],
                ['How much down payment do I need for a house in Valrico FL?','As little as 0% with VA or USDA loans, 3% with conventional HomeReady or Home Possible programs, or 3.5% with FHA. Most first-time buyers in Valrico use FHA or conventional 3% down, often combined with Hometown Heroes assistance.'],
                ['What is the Hillsborough County SHIP program?','SHIP provides up to $50,000 for down payment and closing costs to income-qualifying buyers in Hillsborough County. Income limits apply based on household size and area median income. Funding opens in cycles and fills up fast.'],
                ['Can I combine down payment assistance programs in Florida?','In some cases, yes. Hometown Heroes can be combined with certain loan types. Your lender will advise on which programs can stack. Barrett can connect you with lenders experienced in combining assistance programs for Valrico buyers.'],
              ].map(([q, a]) => (
                <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
                </div>
              ))}
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett First</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR® at REMAX Collective, works with lenders who specialize in down payment assistance for Valrico buyers. One conversation and you&apos;ll know exactly what programs you qualify for.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">Call (813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-first-time-homebuyer/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>First-time buyer guide →</Link></li>
                <li><Link href="/valrico-fl-homes-for-sale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Search Valrico homes for sale →</Link></li>
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>What&apos;s my home worth? →</Link></li>
                <li><Link href="/valrico-market-report/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico market report →</Link></li>
                <li><Link href="/sell-my-home-valrico/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Sell my Valrico home →</Link></li>
              </ul>
            </div>
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Quick Comparison</h3>
              <div className="space-y-3">
                {[
                  ['Hometown Heroes','Up to 5%, forgiven'],
                  ['SHIP','Up to $50K'],
                  ['FHA','3.5% down'],
                  ['VA','0% down'],
                  ['Conv. HomeReady','3% down'],
                  ['Conv. Home Possible','3% down'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span style={{color:'var(--ink-soft)'}}>{label}</span>
                    <span className="font-semibold" style={{color:'var(--ink)'}}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
    </>
  );
}
