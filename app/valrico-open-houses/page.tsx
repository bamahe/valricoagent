'use client';
import Link from 'next/link';
import Image from 'next/image';
import PropertySearch from '../components/PropertySearch';
import { ContactForm } from '../components/ContactForm';

export default function ValricoOpenHouses() {
  return (
    <>
      {/* --- Hero --- */}
      <section style={{background:'linear-gradient(135deg,#003da5 0%,#001f5c 100%)',color:'#fff',padding:'64px 0'}}>
        <div style={{maxWidth:900,margin:'0 auto',padding:'0 24px'}}>
          <h1 style={{fontFamily:'Merriweather,serif',fontSize:'clamp(26px,4vw,38px)',lineHeight:1.25,marginBottom:16}}>Valrico Open Houses This Weekend - Tour Homes in 33594 & 33596</h1>
          <p style={{fontSize:17,lineHeight:1.7,maxWidth:640,marginBottom:24,color:'rgba(255,255,255,.75)'}}>Open houses are the fastest way to get a feel for Valrico&apos;s neighborhoods, compare floor plans, and see what your budget actually buys. Barrett Henry, REALTOR&reg; with REMAX Collective, can set up private showings for any Valrico listing, not just the ones holding open houses.</p>
          <a href="tel:8137337907" className="btn-solid">(813) 733-7907 - Schedule a Showing</a>
        </div>
      </section>

      {/* PROPERTY SEARCH, homes first */}
      <div className="max-w-[900px] mx-auto px-6 pt-8">
        <PropertySearch defaultCity="Valrico" heading="Valrico Open Houses" />
      </div>

      {/* --- Main content --- */}
      <section style={{padding:'64px 0',background:'#fff'}}>
        <div style={{maxWidth:780,margin:'0 auto',padding:'0 24px'}}>

          {/* Community photo */}
          <div className="relative w-full rounded-lg overflow-hidden mb-10" style={{aspectRatio:'16/7'}}>
            <Image src="/bloomingdale-valrico.jpg" alt="Bloomingdale community entrance in Valrico FL - popular area for open houses" fill className="object-cover" sizes="(max-width: 780px) 100vw, 780px" />
          </div>

          {/* How to find open houses */}
          <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,fontWeight:700,color:'#003da5',marginBottom:16}}>How to find Valrico open houses</h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>Open house schedules in Valrico change weekly and are posted on the Stellar MLS, which feeds directly to Zillow, Realtor.com, and Redfin. Most Valrico open houses happen on Saturdays and Sundays between 12:00 PM and 3:00 PM, though some agents offer weekday evening showings.</p>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>The most reliable way to get notified of upcoming open houses is to work directly with a local agent. Barrett Henry monitors the MLS daily and can alert you to open houses in your target neighborhoods and price range before they are widely advertised. Many open houses are announced just 24 to 48 hours in advance, and the best properties in popular neighborhoods like <Link href="/neighborhoods/bloomingdale/" style={{color:'#003da5',fontWeight:600,textDecoration:'none'}}>Bloomingdale</Link> and <Link href="/neighborhoods/river-hills/" style={{color:'#003da5',fontWeight:600,textDecoration:'none'}}>River Hills</Link> often go under contract the same weekend.</p>

          {/* Why attend */}
          <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,fontWeight:700,color:'#003da5',marginBottom:16,marginTop:40}}>Why attend open houses in Valrico</h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>Online listings give you photos and square footage. Open houses give you context. Walking through a Valrico home in person reveals things photos cannot: the sound of traffic (or silence), the quality of natural light, the slope of the lot, the condition of neighboring properties, and the general feel of the street.</p>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>For buyers who are still deciding between neighborhoods, a Saturday spent visiting three or four open houses across different parts of Valrico is worth more than hours of online research. You will quickly develop a sense of which areas match your lifestyle and which ones do not.</p>

          {/* Road image */}
          <div className="relative w-full rounded-lg overflow-hidden my-8" style={{aspectRatio:'16/7'}}>
            <Image src="/images/roads/valrico-fl-sr-60-brandon-blvd-corridor.jpg" alt="SR-60 Brandon Blvd corridor in Valrico FL - main access road for home tours" fill className="object-cover" sizes="(max-width: 780px) 100vw, 780px" />
          </div>

          {/* Best neighborhoods to tour */}
          <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,fontWeight:700,color:'#003da5',marginBottom:16,marginTop:40}}>Best Valrico neighborhoods to tour</h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>Different neighborhoods suit different budgets and priorities. Here are the areas where open houses tend to be most active and informative:</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:16,marginBottom:24}}>
            {[
              ['Bloomingdale','$350K-$550K','A-rated schools, established community, active resale market. Open houses here give you the best baseline for understanding Valrico pricing.','/neighborhoods/bloomingdale/'],
              ['Buckhorn / Boyette','$375K-$600K','Mix of newer and established homes. Zoned for Newsome HS. This corridor has some of the most diverse inventory in Valrico.','/neighborhoods/buckhorn/'],
              ['River Hills','$500K-$900K+','Gated community, large lots, premium pricing. Open houses here are less frequent but worth attending if your budget allows.','/neighborhoods/river-hills/'],
              ['North Valrico (33594)','$275K-$400K','More affordable entry points. Older homes with renovation potential. First-time buyers should start their open house tour here.','/homes-for-sale-33594/'],
            ].map(([name,price,desc,href])=>(
              <div key={name} style={{border:'1px solid #e5e7eb',borderRadius:8,padding:20}}>
                <h3 style={{fontSize:17,fontWeight:600,marginBottom:4,color:'#003da5'}}>
                  <Link href={href} style={{color:'#003da5',textDecoration:'none'}}>{name}</Link>
                </h3>
                <p style={{fontSize:13,fontWeight:600,color:'#666',marginBottom:8}}>{price}</p>
                <p style={{fontSize:14,lineHeight:1.7,color:'#555'}}>{desc}</p>
              </div>
            ))}
          </div>

          {/* What to bring */}
          <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,fontWeight:700,color:'#003da5',marginBottom:16,marginTop:40}}>What to bring to an open house</h2>
          <ul style={{fontSize:15,lineHeight:2,color:'#333',paddingLeft:20,marginBottom:16}}>
            <li><strong>Your phone:</strong> Take photos and video of every room. You will visit multiple homes and they will blur together by Sunday evening.</li>
            <li><strong>A tape measure:</strong> If you have specific furniture that needs to fit, measure the rooms. Listing photos are shot with wide-angle lenses that make rooms look larger.</li>
            <li><strong>Pre-approval letter:</strong> If you are serious about buying, having your pre-approval ready signals to the listing agent that you are a qualified buyer. This matters in competitive situations.</li>
            <li><strong>A checklist:</strong> Note the roof condition, AC age, water heater age, window type, and flooring condition. These are the big-ticket items that affect your true cost of ownership.</li>
            <li><strong>Questions for the agent:</strong> Ask how long the home has been on the market, whether there are other offers, what is included in the sale (appliances, window treatments), and why the seller is moving.</li>
          </ul>

          {/* Private showings vs open houses */}
          <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,fontWeight:700,color:'#003da5',marginBottom:16,marginTop:40}}>Private showings vs open houses</h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>Open houses are great for browsing, but private showings give you more time and privacy to evaluate a property seriously. With a private showing, Barrett can spend 30 to 45 minutes walking you through the home, pointing out potential issues, and discussing the property&apos;s value relative to comparable recent sales.</p>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>More importantly, a private showing means you are not competing with a crowd of other buyers for the listing agent&apos;s attention. You can open cabinets, test water pressure, check the garage, and inspect the yard without feeling rushed. For any home you are seriously considering, a private showing with your own agent is the smarter move.</p>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>Barrett Henry schedules private showings seven days a week across all Valrico neighborhoods. Same-day showings are often possible for active MLS listings. <a href="tel:8137337907" style={{color:'#003da5',fontWeight:600,textDecoration:'none'}}>Call<br/>(813) 733-7907</a> or <a href="mailto:barrett@nowtb.com" style={{color:'#003da5',fontWeight:600,textDecoration:'none'}}>email barrett@nowtb.com</a> to schedule.</p>

          {/* Open house etiquette */}
          <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,fontWeight:700,color:'#003da5',marginBottom:16,marginTop:40}}>Open house etiquette tips</h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>A few things to keep in mind when attending open houses in Valrico:</p>
          <ul style={{fontSize:15,lineHeight:2,color:'#333',paddingLeft:20,marginBottom:16}}>
            <li>Remove shoes if the seller requests it (many do in Florida due to mud and grass).</li>
            <li>Do not open closed doors without asking the hosting agent first.</li>
            <li>If you are already working with a buyer&apos;s agent, mention it upfront. The open house agent will ask you to sign in, include your agent&apos;s name.</li>
            <li>Do not discuss your budget, timeline, or negotiating strategy within earshot of the listing agent. Save those conversations for your own agent afterward.</li>
            <li>Drive the neighborhood after the open house. Visit at different times of day to assess traffic, noise, and general activity levels.</li>
          </ul>

          {/* River Hills image */}
          <div className="relative w-full rounded-lg overflow-hidden my-8" style={{aspectRatio:'16/7'}}>
            <Image src="/images/neighborhoods/river-hills-golf-country-club-valrico-fl-entrance.jpg" alt="River Hills Golf Country Club entrance in Valrico FL - open house tours available" fill className="object-cover" sizes="(max-width: 780px) 100vw, 780px" />
          </div>

          {/* MLS and listings */}
          <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,fontWeight:700,color:'#003da5',marginBottom:16,marginTop:40}}>Valrico listings updated from Stellar MLS</h2>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>All Valrico home listings pull from the Stellar MLS, which is the regional multiple listing service used by REALTORS&reg; across central Florida. Barrett Henry has direct MLS access and can search for properties by price, square footage, lot size, school zone, pool, age, and dozens of other criteria. <Link href="/valrico-fl-homes-for-sale/" style={{color:'#003da5',fontWeight:600,textDecoration:'none'}}>Browse current Valrico listings</Link> or let Barrett create a custom search tailored to your priorities.</p>
          <p style={{fontSize:15,lineHeight:1.8,color:'#333',marginBottom:16}}>Looking to sell? Open houses are one of the most effective marketing tools for Valrico homes. Barrett&apos;s listing strategy includes targeted open house events, professional photography, and MLS syndication to maximize exposure. <Link href="/sell-my-home-valrico/" style={{color:'#003da5',fontWeight:600,textDecoration:'none'}}>Learn about selling your Valrico home</Link> or <Link href="/valrico-fl-home-values/" style={{color:'#003da5',fontWeight:600,textDecoration:'none'}}>get your home value</Link> to see where you stand.</p>

          {/* FAQ */}
          <h2 style={{fontFamily:'Merriweather,serif',fontSize:24,fontWeight:700,color:'#003da5',marginBottom:16,marginTop:48}}>Frequently asked questions</h2>
          <div style={{display:'flex',flexDirection:'column',gap:16}}>
            {[
              ['Are there open houses in Valrico this weekend?','Open house schedules change weekly. The best way to get current open house listings is to contact Barrett Henry at (813) 733-7907 or search the MLS directly. Most Valrico open houses happen Saturday and Sunday between 12 PM and 3 PM.'],
              ['Do I need a real estate agent to attend an open house?','No. Open houses are open to the public. However, if you are seriously considering buying, having your own buyer\u2019s agent protects your interests. The agent hosting the open house represents the seller, not you.'],
              ['Can I schedule a private showing instead of waiting for an open house?','Yes. Barrett Henry schedules private showings seven days a week for any active MLS listing in Valrico. Same-day showings are often available. Call (813) 733-7907 to schedule.'],
              ['What should I look for at a Valrico open house?','Focus on the big-ticket items: roof condition and age, AC system age, water heater age, window type (single vs double-pane), flooring condition, and any signs of water damage. These items drive your true cost of ownership beyond the purchase price.'],
              ['How fast do Valrico homes sell after an open house?','In popular neighborhoods like Bloomingdale and Buckhorn, well-priced homes frequently receive offers the same weekend as their first open house. Having your pre-approval ready and working with a responsive agent like Barrett Henry gives you the speed advantage needed in competitive situations.'],
            ].map(([q,a])=>(
              <div key={q} style={{border:'1px solid #e5e7eb',borderRadius:8,padding:20}}>
                <h3 style={{fontSize:16,fontWeight:600,marginBottom:8,color:'#111'}}>{q}</h3>
                <p style={{fontSize:14,lineHeight:1.7,color:'#555'}}>{a}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{marginTop:48,padding:32,borderRadius:8,background:'#faf8f5',textAlign:'center'}}>
            <h3 style={{fontFamily:'Merriweather,serif',fontSize:20,marginBottom:8}}>Ready to tour Valrico homes?</h3>
            <p style={{fontSize:14,color:'#555',marginBottom:16}}>Barrett Henry, REALTOR&reg; with REMAX Collective schedules private showings 7 days a week. Skip the crowd, get one-on-one time with every home on your list.</p>
            <a href="tel:8137337907" className="btn-solid" style={{marginRight:8}}>(813) 733-7907</a>
            <a href="mailto:barrett@nowtb.com" className="btn-ghost">Email Barrett</a>
          </div>

          {/* EEAT author block */}
          <div style={{marginTop:40,padding:24,borderRadius:8,background:'#faf8f5',border:'1px solid #e5e7eb',display:'flex',gap:20,alignItems:'flex-start'}}>
            <Image src="/barrett-henry.png" alt="Barrett Henry, Broker Associate at REMAX Collective" width={72} height={72} style={{borderRadius:'50%',flexShrink:0}} />
            <div>
              <p style={{fontWeight:700,color:'#111',marginBottom:4}}>Barrett Henry, Broker Associate | REMAX Collective</p>
              <p style={{fontSize:14,color:'#555',lineHeight:1.7,marginBottom:8}}>24+ years of real estate experience. MRP, SRS, e-PRO certified. REMAX Hall of Fame 2024. Barrett schedules private showings 7 days a week and has deep knowledge of every Valrico neighborhood and open house activity. <a href="tel:8137337907" style={{color:'#003da5',fontWeight:600,textDecoration:'none'}}>(813) 733-7907</a></p>
              <p style={{fontSize:13,color:'#555',lineHeight:2}}>
                <Link href="/valrico-fl-homes-for-sale/" style={{color:'#003da5',textDecoration:'none'}}>Homes for Sale</Link>{' | '}
                <Link href="/valrico-real-estate/" style={{color:'#003da5',textDecoration:'none'}}>Valrico Real Estate</Link>{' | '}
                <Link href="/valrico-market-report/" style={{color:'#003da5',textDecoration:'none'}}>Market Report</Link>{' | '}
                <Link href="/valrico-school-zones/" style={{color:'#003da5',textDecoration:'none'}}>School Zones</Link>{' | '}
                <Link href="/valrico-first-time-homebuyer/" style={{color:'#003da5',textDecoration:'none'}}>First-Time Buyers</Link>{' | '}
                <Link href="/sell-my-home-valrico/" style={{color:'#003da5',textDecoration:'none'}}>Sell My Home</Link>{' | '}
                <Link href="/valrico-fl-home-values/" style={{color:'#003da5',textDecoration:'none'}}>Home Values</Link>{' | '}
                <Link href="/valrico-relocation-guide/" style={{color:'#003da5',textDecoration:'none'}}>Relocation Guide</Link>{' | '}
                <Link href="/neighborhoods/" style={{color:'#003da5',textDecoration:'none'}}>All Neighborhoods</Link>{' | '}
                <Link href="/about/" style={{color:'#003da5',textDecoration:'none'}}>About Barrett</Link>
              </p>
            </div>
          </div>

          {/* Related links */}
          <div style={{marginTop:32,fontSize:14,color:'#555',lineHeight:2}}>
            <strong style={{color:'#111'}}>Related pages:</strong>{' '}
            <Link href="/valrico-fl-homes-for-sale/" style={{color:'#003da5',textDecoration:'none'}}>Valrico Homes for Sale</Link>{' | '}
            <Link href="/valrico-first-time-homebuyer/" style={{color:'#003da5',textDecoration:'none'}}>First-Time Buyer Guide</Link>{' | '}
            <Link href="/valrico-school-zones/" style={{color:'#003da5',textDecoration:'none'}}>School Zones</Link>{' | '}
            <Link href="/neighborhoods/bloomingdale/" style={{color:'#003da5',textDecoration:'none'}}>Bloomingdale</Link>{' | '}
            <Link href="/neighborhoods/buckhorn/" style={{color:'#003da5',textDecoration:'none'}}>Buckhorn</Link>{' | '}
            <Link href="/neighborhoods/river-hills/" style={{color:'#003da5',textDecoration:'none'}}>River Hills</Link>{' | '}
            <Link href="/valrico-vs-brandon/" style={{color:'#003da5',textDecoration:'none'}}>Valrico vs Brandon</Link>{' | '}
            <Link href="/homes-for-sale-33594/" style={{color:'#003da5',textDecoration:'none'}}>Homes in 33594</Link>{' | '}
            <Link href="/homes-for-sale-33596/" style={{color:'#003da5',textDecoration:'none'}}>Homes in 33596</Link>{' | '}
            <Link href="/sell-my-home-valrico/" style={{color:'#003da5',textDecoration:'none'}}>Sell My Home</Link>{' | '}
            <Link href="/about/" style={{color:'#003da5',textDecoration:'none'}}>About Barrett</Link>
          </div>
        </div>
      </section>

      {/* JSON-LD: FAQPage schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org",
        "@type":"FAQPage",
        "mainEntity":[
          {"@type":"Question","name":"Are there open houses in Valrico FL this weekend?","acceptedAnswer":{"@type":"Answer","text":"Schedules change weekly. Contact Barrett Henry at (813) 733-7907 for current open house listings. Most happen Saturday and Sunday 12-3 PM."}},
          {"@type":"Question","name":"Do I need a real estate agent to attend an open house?","acceptedAnswer":{"@type":"Answer","text":"No, open houses are public. But having your own buyer\u2019s agent protects your interests. The hosting agent represents the seller."}},
          {"@type":"Question","name":"Can I schedule a private showing in Valrico?","acceptedAnswer":{"@type":"Answer","text":"Yes. Barrett Henry schedules private showings 7 days a week for any active MLS listing. Same-day showings often available. Call (813) 733-7907."}},
          {"@type":"Question","name":"What should I look for at a Valrico open house?","acceptedAnswer":{"@type":"Answer","text":"Focus on roof condition/age, AC age, water heater age, window type, flooring condition, and signs of water damage. These drive true ownership costs."}},
          {"@type":"Question","name":"How fast do Valrico homes sell after an open house?","acceptedAnswer":{"@type":"Answer","text":"Well-priced homes in popular neighborhoods like Bloomingdale and Buckhorn frequently receive offers the same weekend as their first open house."}}
        ]
      })}} />

      {/* JSON-LD: RealEstateAgent schema */}
      
      {/* Lead Capture Form */}
      <div className="max-w-[1140px] mx-auto px-7 py-12">
        <ContactForm />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({
        "@context":"https://schema.org",
        "@type":"RealEstateAgent",
        "name":"Barrett Henry, REALTOR\u00ae",
        "telephone":"(813) 733-7907",
        "email":"barrett@nowtb.com",
        "url":"https://valricoagent.com",
        "image":"https://valricoagent.com/barrett-henry.png",
        "jobTitle":"Broker Associate",
        "worksFor":{"@type":"Organization","name":"REMAX Collective"},
        "areaServed":{"@type":"City","name":"Valrico"}
      })}} />
    </>
  );
}
