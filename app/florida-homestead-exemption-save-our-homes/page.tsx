'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ContactForm } from '../components/ContactForm';

/* ── JSON-LD FAQPage schema ── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does the Florida homestead exemption save Valrico homeowners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The homestead exemption reduces your home's assessed value by up to $50,000 for property tax purposes. On a Valrico home assessed at $400,000, that means you only pay taxes on $350,000. The exact dollar savings depends on the local millage rate, but most Valrico homeowners save roughly $1,000 to $1,300 per year."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Save Our Homes cap in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Save Our Homes is a 1992 constitutional amendment that limits how much your home's assessed value can increase each year, the lesser of 3% or the Consumer Price Index (CPI). This protects long-term homeowners from rapid tax increases even when market values rise sharply."
      }
    },
    {
      "@type": "Question",
      "name": "What is homestead portability in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Portability lets you transfer up to $500,000 of your Save Our Homes benefit from your old Florida homestead to a new one. If you've built up years of capped savings, you can carry that advantage to your next home anywhere in Florida. You must file within 3 years of abandoning the old homestead using form DR-501T."
      }
    },
    {
      "@type": "Question",
      "name": "When is the deadline to file for homestead exemption in Florida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official deadline is March 1 of the tax year for which you're applying. However, Florida law allows a 3-year lookback window, you can file a late application and receive the exemption retroactively for up to 3 prior years if you were eligible but didn't file."
      }
    },
    {
      "@type": "Question",
      "name": "Can I lose my homestead exemption if I rent out my Valrico home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you rent out your entire home and it's no longer your primary residence, you lose the homestead exemption. Renting a room while still living there typically doesn't disqualify you. If you move out and rent the whole property, the exemption is removed and your assessed value resets to full market value."
      }
    },
    {
      "@type": "Question",
      "name": "How do I file for homestead exemption in Hillsborough County?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "File through the Hillsborough County Property Appraiser (HCPA) at hcpafl.org. You can apply online or visit their office. You'll need your recorded deed, Florida driver's license or ID showing the property address, Social Security number, and vehicle registration (if applicable). Barrett Henry can walk you through the process, call (813) 733-7907."
      }
    }
  ]
};

export default function FloridaHomesteadExemption() {
  return (
    <>
      {/* HERO */}
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[1140px] mx-auto">
          <div className="text-xs font-semibold tracking-widest uppercase mb-2.5" style={{color:'rgba(255,255,255,.5)'}}>Homeowner Guide</div>
          <h1 className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-tight mb-4">Florida Homestead Exemption & Save Our Homes Guide</h1>
          <p className="text-lg leading-relaxed max-w-[640px] mb-6" style={{color:'rgba(255,255,255,.75)'}}>The homestead exemption and Save Our Homes cap are two of the biggest financial advantages of owning a home in Florida. Together, they can save Valrico homeowners thousands every year in property taxes, but only if you file correctly and understand how the system works.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="tel:8137337907" className="btn-solid">Call<br/>(813) 733-7907</a>
            <Link href="/valrico-fl-homes-for-sale/" className="inline-block py-3 px-7 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Search Valrico Homes</Link>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="max-w-[1140px] mx-auto px-7 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-14">
          <div>

            {/* Community photo */}
            <div className="relative w-full rounded-lg overflow-hidden mb-10" style={{aspectRatio:'16/7'}}>
              <Image src="/bloomingdale-valrico.jpg" alt="Bloomingdale community in Valrico FL - homestead exemption applies to primary residences like these" fill className="object-cover" sizes="(max-width: 780px) 100vw, 780px" />
            </div>

            {/* THE SHORT VERSION */}
            <h2 className="font-serif text-2xl mb-4">The Short Version</h2>
            <p className="text-[15px] leading-[1.8] mb-4" style={{color:'var(--ink-soft)'}}>If you own a home in Valrico (or anywhere in Florida) and it&apos;s your primary residence, you need to know these three things:</p>
            <ul className="space-y-3 mb-10 pl-5 list-disc">
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><strong style={{color:'var(--ink)'}}>Homestead Exemption:</strong> Reduces your assessed value by up to $50,000, saving you roughly $1,000 to $1,300 per year in property taxes on a typical Valrico home.</li>
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><strong style={{color:'var(--ink)'}}>Save Our Homes:</strong> Caps your annual assessment increase at 3% or CPI (whichever is lower), even if your market value jumps 15% in a year. The longer you own, the more you save.</li>
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><strong style={{color:'var(--ink)'}}>Portability:</strong> When you sell and buy another Florida home, you can transfer up to $500,000 of your Save Our Homes benefit to the new property using form DR-501T.</li>
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><strong style={{color:'var(--ink)'}}>Deadline:</strong> File by March 1 through the <a href="https://www.hcpafl.org" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Hillsborough County Property Appraiser</a>. Missed it? You have a 3-year lookback window to file retroactively.</li>
            </ul>

            {/* WHAT IS THE HOMESTEAD EXEMPTION */}
            <h2 className="font-serif text-2xl mb-4 mt-10">What Is the Florida Homestead Exemption?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>The homestead exemption is a constitutional tax break for Florida homeowners who use the property as their primary residence. It reduces the taxable assessed value of your home by up to $50,000.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Here&apos;s how the $50,000 breaks down:</p>
            <div className="space-y-4 mb-10">
              <div className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>First $25,000 - Applies to All Tax Levies</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>The first $25,000 of the exemption applies to all property taxes, including school district taxes. This kicks in on the first $25,000 of your home&apos;s assessed value.</p>
              </div>
              <div className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>Next $25,000 - No Exemption</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>The assessed value between $25,001 and $50,000 gets no exemption. You pay full taxes on that portion.</p>
              </div>
              <div className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>Second $25,000 - Non-School Taxes Only</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>The assessed value between $50,001 and $75,000 gets an additional $25,000 exemption, but only for non-school taxes (county, city, water management district). This second exemption was added by Florida voters in 2008.</p>
              </div>
            </div>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>For a Valrico home assessed at $400,000, the exemption means you pay taxes on roughly $350,000 instead. According to the <a href="https://www.hcpafl.org" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Hillsborough County Property Appraiser</a>, this saves most homeowners between $1,000 and $1,300 annually depending on the combined millage rate.</p>

            {/* WHAT IS SAVE OUR HOMES */}
            <h2 className="font-serif text-2xl mb-4 mt-10">What Is Save Our Homes?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Save Our Homes is an amendment to the Florida Constitution passed by voters in 1992. It limits how much the assessed value of your homestead property can increase each year to the lesser of:</p>
            <ul className="space-y-2 mb-6 pl-5 list-disc">
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}><strong style={{color:'var(--ink)'}}>3%</strong>, or</li>
              <li className="text-[15px] leading-[1.8]" style={{color:'var(--ink-soft)'}}>The <strong style={{color:'var(--ink)'}}>Consumer Price Index (CPI)</strong> change for the year</li>
            </ul>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>This is where the real savings happen for long-term homeowners. While your home&apos;s market value might jump 10% or 15% in a hot year, your assessed value can only go up 3% at most.</p>

            {/* Example box */}
            <div className="rounded-lg p-6 mb-10" style={{background:'var(--cream-warm)',border:'1px solid var(--border)'}}>
              <h3 className="font-semibold text-base mb-3" style={{color:'var(--ink)'}}>Example: Save Our Homes in Action</h3>
              <p className="text-sm leading-relaxed mb-3" style={{color:'var(--ink-soft)'}}>Say you bought a Valrico home in 2018 with a just market value of $300,000. By 2026, the market value has risen to $475,000. Without Save Our Homes, you&apos;d pay taxes on $475,000.</p>
              <p className="text-sm leading-relaxed mb-3" style={{color:'var(--ink-soft)'}}>With Save Our Homes, your assessed value has been capped at ~3% per year. After 8 years of capped increases, your assessed value might be around $380,000, a gap of roughly $95,000 between assessed and market value.</p>
              <p className="text-sm leading-relaxed font-semibold" style={{color:'var(--ink)'}}>That $95,000 gap means you&apos;re saving roughly $1,900+ per year in property taxes compared to a new buyer of the same home. The longer you own, the wider the gap grows.</p>
            </div>

            {/* Neighborhood image */}
            <div className="relative w-full rounded-lg overflow-hidden my-8" style={{aspectRatio:'16/7'}}>
              <Image src="/images/roads/valrico-fl-sr-60-brandon-blvd-corridor.jpg" alt="SR-60 corridor in Valrico FL - Hillsborough County homestead exemption applies to all Valrico homes" fill className="object-cover" sizes="(max-width: 780px) 100vw, 780px" />
            </div>

            {/* WHAT HAPPENS WHEN YOU SELL */}
            <h2 className="font-serif text-2xl mb-4 mt-10">What Happens When You Sell?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>When you sell your homestead property, the Save Our Homes cap resets. The new buyer&apos;s assessed value starts at the full purchase price (market value). All those years of capped increases you enjoyed? Gone for the new owner, they start fresh.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>This is why property taxes can jump significantly for a new buyer compared to what the previous owner was paying. A Valrico home that the prior owner paid $3,500 per year in taxes on might cost the new buyer $6,000+ for the exact same house, because the assessment resets.</p>
            <p className="text-[15px] leading-[1.8] mb-10" style={{color:'var(--ink-soft)'}}>Important for sellers: this doesn&apos;t affect your sale price. Save Our Homes is a tax benefit, not a lien. But it&apos;s something every buyer needs to factor into their budget, and Barrett makes sure buyers understand the real tax picture before making an offer.</p>

            {/* MID-ARTICLE CTA */}
            <div className="rounded-lg p-8 mt-2 mb-10 text-center" style={{background:'var(--blue-deep)',color:'#fff'}}>
              <h2 className="font-serif text-2xl mb-3">Have Questions About Your Property Taxes?</h2>
              <p className="text-[15px] leading-relaxed mb-6" style={{color:'rgba(255,255,255,.75)',maxWidth:540,margin:'0 auto 24px'}}>Barrett Henry has 24+ years of real estate experience and helps Valrico homeowners understand homestead exemptions, portability, and tax strategy. Straight answers, no pressure.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="tel:8137337907" className="inline-block py-3 px-8 bg-white font-semibold text-[15px] rounded no-underline" style={{color:'var(--accent)'}}>Call<br/>(813) 733-7907</a>
                <a href="mailto:barrett@nowtb.com" className="inline-block py-3 px-8 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Email Barrett</a>
              </div>
            </div>

            {/* River Hills image */}
            <div className="relative w-full rounded-lg overflow-hidden my-8" style={{aspectRatio:'16/7'}}>
              <Image src="/river-hills-valrico.jpg" alt="River Hills community in Valrico FL - long-term homeowners here benefit most from Save Our Homes cap" fill className="object-cover" sizes="(max-width: 780px) 100vw, 780px" />
            </div>

            {/* PORTABILITY */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How Does Homestead Portability Work?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Portability is the mechanism that lets you transfer your Save Our Homes benefit from one Florida homestead to another. Florida voters approved portability in 2008, and it&apos;s one of the most valuable, and most misunderstood, tax benefits available.</p>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>You can port (transfer) up to <strong>$500,000</strong> of the difference between your assessed value and market value. The math works differently depending on whether you&apos;re buying a more expensive or less expensive home.</p>

            <div className="space-y-4 mb-10">
              <div className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>Upsizing (New Home Costs More)</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>If you&apos;re buying a more expensive home, you transfer the full dollar amount of your Save Our Homes benefit. Example: if you had $95,000 in accumulated savings, you subtract $95,000 from the new home&apos;s assessed value. A $500,000 new home would be assessed at $405,000.</p>
              </div>
              <div className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>Downsizing (New Home Costs Less)</h3>
                <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>If you&apos;re buying a less expensive home, you transfer a proportional amount. The formula: (SOH benefit / old market value) x new market value. Example: $95,000 benefit on a $475,000 home = 20% savings. Buy a $350,000 home, and you port 20% = $70,000 off the new assessed value.</p>
              </div>
            </div>
            <p className="text-[15px] leading-[1.8] mb-10" style={{color:'var(--ink-soft)'}}>Portability works anywhere in Florida, you can move from Valrico to Jacksonville, Naples, or Pensacola and keep your benefit. You must file within <strong>3 years</strong> of leaving your old homestead. Use <strong>form DR-501T</strong> (Transfer of Homestead Assessment Difference) and file it with the property appraiser in the county where your new home is located.</p>

            {/* DEADLINES */}
            <h2 className="font-serif text-2xl mb-4 mt-10">What Are the Filing Deadlines?</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Getting the timing right matters. Miss the deadline and you could lose a year of tax savings, or more.</p>

            <div className="space-y-4 mb-10">
              {[
                ['March 1 - Annual Filing Deadline', 'The homestead exemption application (form DR-501) must be filed by March 1 of the tax year you want the exemption to apply. If you close on a Valrico home in January, file immediately, don\'t wait.'],
                ['3-Year Lookback Window', 'Forgot to file? Florida allows a late filing for up to 3 prior tax years. You\'ll need to prove you were eligible during those years (primary residence, Florida ID showing the address). Contact the Hillsborough County Property Appraiser to file retroactively.'],
                ['Portability, 3-Year Transfer Window', 'You must establish a new homestead and file for portability within 3 calendar years of January 1 of the year you abandoned the old homestead. After 3 years, the benefit expires permanently.'],
                ['January 1 - Assessment Date', 'Your homestead status is determined as of January 1 each year. You must own and occupy the home as your primary residence on January 1 to receive the exemption for that tax year.'],
              ].map(([title, desc]) => (
                <div key={title} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* HOW TO FILE */}
            <h2 className="font-serif text-2xl mb-4 mt-10">How to File for Homestead Exemption in Hillsborough County</h2>
            <p className="text-[15px] leading-[1.8] mb-6" style={{color:'var(--ink-soft)'}}>Filing is straightforward. Here are the 6 steps for Valrico homeowners.</p>

            <div className="space-y-4 mb-10">
              {[
                ['1. Close on Your Home', 'The deed must be recorded in your name with the Hillsborough County Clerk of Court. This happens automatically at closing.'],
                ['2. Update Your Florida ID', 'Get a Florida driver\'s license or state ID showing your new Valrico address. The property appraiser uses this to verify primary residence. You\'ll also want to update your vehicle registration.'],
                ['3. Visit hcpafl.org or the HCPA Office', 'The Hillsborough County Property Appraiser accepts online applications at hcpafl.org. You can also apply in person at their Tampa office. Online is faster.'],
                ['4. Complete Form DR-501', 'This is the standard homestead exemption application. You\'ll provide your name, property address, Social Security number, and proof of residency (FL ID, deed, utility bill).'],
                ['5. File Form DR-501T (If Porting)', 'If you\'re transferring Save Our Homes benefit from a previous Florida homestead, file form DR-501T at the same time. You\'ll need the parcel number and county of your old property.'],
                ['6. Confirm Approval', 'The HCPA will process your application and send confirmation. Your TRIM (Truth in Millage) notice in August will reflect the exemption. If something looks wrong, contact the HCPA before the September deadline to dispute.'],
              ].map(([title, desc]) => (
                <div key={title} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2" style={{color:'var(--ink)'}}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{desc}</p>
                </div>
              ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="rounded-lg p-8 mt-10 text-center" style={{background:'var(--blue-deep)',color:'#fff'}}>
              <h2 className="font-serif text-2xl mb-3">Buying or Selling in Valrico?</h2>
              <p className="text-[15px] leading-relaxed mb-6" style={{color:'rgba(255,255,255,.75)',maxWidth:540,margin:'0 auto 24px'}}>Barrett Henry helps Valrico buyers and sellers navigate homestead exemptions, portability, and every other detail that affects your bottom line. 24+ years of real estate experience. No fluff, no runaround.</p>
              <div className="flex gap-3 justify-center flex-wrap">
                <a href="tel:8137337907" className="inline-block py-3 px-8 bg-white font-semibold text-[15px] rounded no-underline" style={{color:'var(--accent)'}}>Call<br/>(813) 733-7907</a>
                <a href="mailto:barrett@nowtb.com" className="inline-block py-3 px-8 border-[1.5px] border-white/40 text-white font-semibold text-[15px] rounded no-underline hover:border-white">Email Barrett</a>
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-serif text-2xl mb-4 mt-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                ['How much does the Florida homestead exemption save Valrico homeowners?', 'The homestead exemption reduces your assessed value by up to $50,000. On a typical Valrico home, that saves roughly $1,000 to $1,300 per year in property taxes depending on the combined millage rate.'],
                ['What is the Save Our Homes cap in Florida?', 'Save Our Homes is a 1992 constitutional amendment that limits annual assessment increases to the lesser of 3% or the Consumer Price Index (CPI). This protects long-term homeowners from rapid tax increases even when market values rise sharply.'],
                ['What is homestead portability in Florida?', 'Portability lets you transfer up to $500,000 of your Save Our Homes benefit from your old Florida homestead to a new one. You must file within 3 years of abandoning the old homestead using form DR-501T with the new county\'s property appraiser.'],
                ['When is the deadline to file for homestead exemption?', 'March 1 of the tax year you\'re applying for. Florida also allows a 3-year lookback, you can file late and receive the exemption retroactively for up to 3 prior years if you were eligible.'],
                ['Can I lose my homestead exemption if I rent out my home?', 'If you rent out the entire home and it\'s no longer your primary residence, yes, you lose the exemption and your assessed value resets to full market value. Renting a room while still living there typically doesn\'t disqualify you.'],
                ['How do I file for homestead exemption in Hillsborough County?', 'File through the Hillsborough County Property Appraiser at hcpafl.org. You\'ll need your recorded deed, Florida ID showing the property address, and Social Security number. You can apply online or in person.'],
              ].map(([q, a]) => (
                <div key={q} className="border rounded-md p-5" style={{borderColor:'var(--border)'}}>
                  <h3 className="font-semibold text-base mb-2">{q}</h3>
                  <p className="text-sm leading-relaxed" style={{color:'var(--ink-soft)'}}>{a}</p>
                </div>
              ))}
            </div>

            {/* EEAT author block */}
            <div className="rounded-md p-6 mt-10" style={{background:'var(--cream-warm)',border:'1px solid var(--border)',display:'flex',gap:20,alignItems:'flex-start'}}>
              <Image src="/barrett-henry.png" alt="Barrett Henry, Broker Associate at REMAX Collective" width={72} height={72} style={{borderRadius:'50%',flexShrink:0}} />
              <div>
                <p className="font-semibold text-base mb-1" style={{color:'var(--ink)'}}>Barrett Henry, Broker Associate | REMAX Collective</p>
                <p className="text-sm leading-relaxed mb-2" style={{color:'var(--ink-soft)'}}>24+ years of real estate experience. MRP, SRS, e-PRO certified. REMAX Hall of Fame 2024. Barrett helps Valrico buyers and sellers understand homestead exemptions, portability, and how property taxes affect every transaction. <a href="tel:8137337907" className="font-semibold no-underline" style={{color:'var(--accent)'}}>(813) 733-7907</a></p>
                <p className="text-xs leading-loose" style={{color:'var(--ink-soft)'}}>
                  <Link href="/valrico-fl-home-values/" className="no-underline" style={{color:'var(--accent)'}}>Home Values</Link>{' | '}
                  <Link href="/valrico-fl-homes-for-sale/" className="no-underline" style={{color:'var(--accent)'}}>Homes for Sale</Link>{' | '}
                  <Link href="/valrico-first-time-homebuyer/" className="no-underline" style={{color:'var(--accent)'}}>First-Time Buyers</Link>{' | '}
                  <Link href="/sell-my-home-valrico/" className="no-underline" style={{color:'var(--accent)'}}>Sell My Home</Link>{' | '}
                  <Link href="/valrico-market-report/" className="no-underline" style={{color:'var(--accent)'}}>Market Report</Link>{' | '}
                  <Link href="/valrico-investment-property/" className="no-underline" style={{color:'var(--accent)'}}>Investment Property</Link>{' | '}
                  <Link href="/valrico-down-payment-assistance/" className="no-underline" style={{color:'var(--accent)'}}>Down Payment Help</Link>{' | '}
                  <Link href="/valrico-relocation-guide/" className="no-underline" style={{color:'var(--accent)'}}>Relocation Guide</Link>{' | '}
                  <Link href="/neighborhoods/" className="no-underline" style={{color:'var(--accent)'}}>All Neighborhoods</Link>{' | '}
                  <Link href="/about/" className="no-underline" style={{color:'var(--accent)'}}>About Barrett</Link>
                </p>
              </div>
            </div>

            {/* FREE RESOURCES */}
            <div className="mt-10 p-6 rounded-lg" style={{background:'var(--cream)',border:'1px solid var(--border)'}}>
              <h3 className="font-semibold text-base mb-3" style={{color:'var(--ink)'}}>Official Resources</h3>
              <ul className="space-y-2">
                <li className="text-sm" style={{color:'var(--ink-soft)'}}><a href="https://www.hcpafl.org" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Hillsborough County Property Appraiser (HCPA)</a> - File homestead exemption, look up parcel info, check assessed values</li>
                <li className="text-sm" style={{color:'var(--ink-soft)'}}><a href="https://floridarevenue.com/property/Pages/Forms.aspx" target="_blank" rel="noopener" className="font-semibold no-underline" style={{color:'var(--accent)'}}>Florida DOR - Property Tax Forms</a> - DR-501 (homestead application), DR-501T (portability transfer)</li>
                <li className="text-sm" style={{color:'var(--ink-soft)'}}>HUD Housing Counseling: <a href="tel:18005694287" className="font-semibold no-underline" style={{color:'var(--accent)'}}>1-800-569-4287</a></li>
              </ul>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            {/* Contact box */}
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)',background:'var(--cream-warm)'}}>
              <h3 className="font-serif text-lg mb-3">Talk to Barrett</h3>
              <p className="text-sm mb-4 leading-relaxed" style={{color:'var(--ink-soft)'}}>Have questions about homestead exemptions, portability, or how property taxes affect your buying or selling decision? Barrett Henry has 24+ years of real estate experience and knows Valrico inside out.</p>
              <a href="tel:8137337907" className="btn-solid block text-center mb-2 text-sm">Call<br/>(813) 733-7907</a>
              <a href="mailto:barrett@nowtb.com" className="btn-ghost block text-center text-sm">Email Barrett</a>
            </div>

            {/* Related Pages */}
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Related Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/valrico-fl-home-values/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico home values →</Link></li>
                <li><Link href="/valrico-first-time-homebuyer/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>First-time buyer guide →</Link></li>
                <li><Link href="/valrico-fl-homes-for-sale/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Search Valrico homes for sale →</Link></li>
                <li><Link href="/sell-my-home-valrico/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Sell my Valrico home →</Link></li>
                <li><Link href="/valrico-market-report/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Valrico market report →</Link></li>
                <li><Link href="/valrico-investment-property/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Investment property guide →</Link></li>
                <li><Link href="/valrico-down-payment-assistance/" className="text-sm no-underline hover:underline" style={{color:'var(--accent)'}}>Down payment assistance →</Link></li>
              </ul>
            </div>

            {/* Quick Numbers */}
            <div className="rounded-md p-6 border" style={{borderColor:'var(--border)'}}>
              <h3 className="font-serif text-lg mb-3">Key Numbers</h3>
              <div className="space-y-3">
                {[
                  ['Homestead Exemption', 'Up to $50,000'],
                  ['SOH Annual Cap', '3% or CPI'],
                  ['Portability Max', '$500,000'],
                  ['Filing Deadline', 'March 1'],
                  ['Late Filing Window', '3 years'],
                  ['Portability Window', '3 years'],
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

      {/* JSON-LD FAQPage schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />

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
          { "@type": "ListItem", "position": 2, "name": "Homestead Exemption & Save Our Homes", "item": "https://valricoagent.com/florida-homestead-exemption-save-our-homes/" },
        ]
      }) }} />
    </>
  );
}
