'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{position:'relative',background:'linear-gradient(135deg,#003da5 0%,#001f5c 100%)',color:'#fff',padding:'80px 0 60px',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,background:"url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=70') center/cover",opacity:.15}} />
        <div style={{position:'relative',zIndex:2,maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'center'}}>
          <div>
            <h1 style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:'clamp(28px,3.5vw,42px)',fontWeight:700,lineHeight:1.3,marginBottom:16}}>Your Trusted Valrico Realtor — <em style={{color:'#ffd700',fontStyle:'italic'}}>Buy, Sell, or Invest with Confidence!</em></h1>
            <h2 style={{fontSize:16,fontWeight:300,lineHeight:1.7,opacity:.8,marginBottom:28}}>Whether you&apos;re buying your dream home, selling for top dollar, or building your investment portfolio — Barrett Henry has the neighborhood-level knowledge and straight-talk approach that gets results. 32 neighborhoods. Two ZIP codes. One REALTOR® who knows them all. <Link href="/valrico-first-time-homebuyer/" style={{color:'#ffd700',textDecoration:'none',fontWeight:500}}>First-time buyers start here</Link>.</h2>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Link href="/valrico-fl-homes-for-sale/" style={{padding:'14px 28px',fontSize:14,fontWeight:600,borderRadius:6,background:'#fff',color:'#003da5',textDecoration:'none',boxShadow:'0 2px 8px rgba(0,0,0,.25)',display:'flex',alignItems:'center',gap:8}}><span className="material-icons" style={{fontSize:20}}>search</span> Search Valrico Homes</Link>
              <Link href="/valrico-fl-home-values/" style={{padding:'14px 28px',fontSize:14,fontWeight:600,borderRadius:6,background:'#cc0000',color:'#fff',textDecoration:'none'}}>What&apos;s My Home Worth?</Link>
              <a href="#contact" style={{padding:'14px 28px',fontSize:14,fontWeight:600,borderRadius:6,background:'rgba(255,255,255,.15)',color:'#fff',border:'1px solid rgba(255,255,255,.3)',textDecoration:'none',display:'flex',alignItems:'center',gap:8}}><span className="material-icons" style={{fontSize:20}}>event</span> Schedule A Call</a>
            </div>
          </div>
          <div style={{textAlign:'center'}}>
            <img src="/barrett-henry.png" alt="Barrett Henry, REALTOR®" style={{maxWidth:380,margin:'0 auto',filter:'drop-shadow(0 8px 32px rgba(0,0,0,.4))'}} />
            <div style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:22,fontWeight:700,textAlign:'center',marginTop:16}}>Straight Talk. Smart Strategy.<br/>Real Results.</div>
            <div style={{textAlign:'center',fontSize:14,opacity:.7,marginTop:4}}>23+ Years Experience · Broker Associate · RE/MAX Collective</div>
          </div>
        </div>
      </section>

      {/* ICON ROW */}
      <section style={{padding:'56px 0',borderBottom:'1px solid #e5e5e5'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:32,textAlign:'center'}}>
            {[
              ['search','Search Homes','Browse every active listing in Valrico. Updated directly from Stellar MLS.','/valrico-fl-homes-for-sale/','Start Search →'],
              ['trending_up','Sell Your Home','Strategic pricing from actual sub-neighborhood comps. Professional marketing. Sharp negotiation.','/sell-my-home-valrico/','Selling Guide →'],
              ['attach_money',"What's My Home Worth?",'Free CMA from actual closed comps in your section of Valrico. Not a Zestimate.','/valrico-fl-home-values/','Get Your Value →'],
              ['map','32 Neighborhoods','Detailed guides for every Valrico subdivision with pricing, schools, and who fits best.','/#neighborhoods','Explore →'],
              ['school','School Zones','Bloomingdale HS & Newsome HS zones. See how school zoning affects your home value.','/valrico-school-zones/','School Guide →'],
              ['business','Property Management','Full-service rental management for Valrico landlords. 10% fee, in-house maintenance.','/valrico-property-management/','Learn More →'],
            ].map(([icon,title,desc,href,cta])=>(
              <div key={title}>
                <span className="material-icons" style={{fontSize:40,color:'#003da5',marginBottom:12}}>{icon}</span>
                <h3 style={{fontSize:15,fontWeight:600,marginBottom:6}}>{title}</h3>
                <p style={{fontSize:13,color:'#555',lineHeight:1.5}}>{desc}</p>
                <Link href={href} style={{fontSize:13,fontWeight:600,color:'#003da5',marginTop:8,display:'inline-block'}}>{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS — BUYERS & SELLERS */}
      <section style={{padding:'40px 0',background:'#f7f7f7',borderBottom:'1px solid #e5e5e5'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16,textAlign:'center'}}>
            {[
              ['First-Time Buyer Guide','/valrico-first-time-homebuyer/'],
              ['Down Payment Assistance','/valrico-down-payment-assistance/'],
              ['Relocation Guide','/valrico-relocation-guide/'],
              ['Market Report','/valrico-market-report/'],
              ['VA Loan Homes','/valrico-va-loan-homes/'],
              ['Investment Properties','/valrico-investment-property/'],
              ['Cash Offer','/valrico-cash-offer/'],
              ['55+ Communities','/valrico-55-plus-communities/'],
            ].map(([title,href])=>(
              <Link key={title} href={href} style={{padding:'12px 16px',background:'#fff',borderRadius:8,fontSize:13,fontWeight:500,color:'#003da5',border:'1px solid #e5e5e5',textDecoration:'none'}}>{title}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* SELLER CTA */}
      <section style={{padding:'56px 0',background:'#003da5',color:'#fff',textAlign:'center'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <span className="material-icons" style={{fontSize:48,marginBottom:12,opacity:.8}}>insights</span>
          <h2 style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:24,marginBottom:8}}>Thinking About Selling Your Valrico Home?</h2>
          <p style={{fontSize:14,opacity:.7,marginBottom:24,maxWidth:600,margin:'0 auto 24px'}}>Valrico median home prices are around $415K with well-priced homes selling in 30-55 days. Barrett provides a free, no-obligation home valuation based on actual recent sales in your specific subdivision.</p>
          <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/valrico-fl-home-values/" style={{padding:'14px 32px',background:'#fff',color:'#003da5',fontWeight:600,fontSize:14,borderRadius:6,textDecoration:'none'}}>Get My Home Value — Free</Link>
            <Link href="/sell-my-home-valrico/" style={{padding:'14px 32px',border:'2px solid rgba(255,255,255,.4)',color:'#fff',fontWeight:500,fontSize:14,borderRadius:6,textDecoration:'none'}}>Read the Selling Guide</Link>
          </div>
        </div>
      </section>

      {/* WHY SELLERS CHOOSE BARRETT */}
      <section style={{padding:'56px 0',borderBottom:'1px solid #e5e5e5'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'center'}}>
            <div>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'#cc0000',marginBottom:8}}>For Sellers</div>
              <h2 style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:28,fontWeight:700,marginBottom:16,lineHeight:1.3}}>Why Valrico Sellers Choose Barrett Henry</h2>
              <div style={{fontSize:14,color:'#555',lineHeight:1.8}}>
                {[
                  ['Sub-neighborhood pricing','your CMA uses comps from your section, not all of 33596'],
                  ['Professional photography & marketing','MLS, Zillow, Realtor.com, Redfin, RE/MAX.com, social media, targeted digital ads'],
                  ['23+ years of negotiation','protecting your net, not just closing the deal'],
                  ['In-house maintenance','Best Bay Services handles pre-listing repairs fast and at fair cost'],
                  ['Honest advice','if selling isn\'t your best move right now, Barrett will tell you'],
                ].map(([title,desc])=>(
                  <p key={title} style={{marginBottom:12}}>
                    <span className="material-icons" style={{fontSize:18,verticalAlign:'middle',marginRight:8,color:'#003da5'}}>check_circle</span>
                    <strong>{title}</strong> — {desc}
                  </p>
                ))}
              </div>
              <div style={{marginTop:20,display:'flex',gap:12,flexWrap:'wrap'}}>
                <Link href="/sell-my-home-valrico/" style={{padding:'12px 24px',background:'#003da5',color:'#fff',fontSize:13,fontWeight:600,borderRadius:6,textDecoration:'none'}}>Full Selling Guide →</Link>
                <Link href="/valrico-fl-home-values/" style={{padding:'12px 24px',border:'1px solid #e5e5e5',color:'#222',fontSize:13,fontWeight:600,borderRadius:6,textDecoration:'none'}}>Get My Home Value</Link>
              </div>
            </div>
            <div style={{background:'#f7f7f7',borderRadius:12,padding:36,border:'1px solid #e5e5e5'}}>
              <h3 style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:20,marginBottom:20,textAlign:'center'}}>Valrico Market Snapshot</h3>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,textAlign:'center'}}>
                {[['~$415K','Median Sale Price'],['$210–220','Price Per Sq Ft'],['30–55','Days on Market'],['+3.4%','Year-over-Year']].map(([val,label])=>(
                  <div key={label} style={{padding:16,background:'#fff',borderRadius:8,border:'1px solid #e5e5e5'}}>
                    <div style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:28,fontWeight:700,color:'#003da5'}}>{val}</div>
                    <div style={{fontSize:11,color:'#555',marginTop:4}}>{label}</div>
                  </div>
                ))}
              </div>
              <p style={{textAlign:'center',fontSize:11,color:'#555',marginTop:16}}>Q1 2026 · Stellar MLS · 33594 &amp; 33596</p>
              <Link href="/valrico-market-report/" style={{display:'block',textAlign:'center',marginTop:12,fontSize:13,fontWeight:600,color:'#003da5'}}>Full Market Report →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{padding:'56px 0',background:'#f7f7f7'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:32}}>
            <h2 style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:24,fontWeight:700}}>
              <span className="material-icons" style={{verticalAlign:'middle',marginRight:8,color:'#003da5'}}>article</span>
              Latest From The Blog
            </h2>
            <Link href="/blog/" style={{fontSize:13,fontWeight:600,color:'#003da5'}}>Read More Posts →</Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24}}>
            {[
              {img:'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=75',title:'Valrico Housing Market Q1 2026: What the Numbers Mean',desc:'Median prices, inventory shifts, days on market by neighborhood, and what it means for buyers and sellers.',href:'/blog/valrico-housing-market-q1-2026/'},
              {img:'https://images.unsplash.com/photo-1575517111478-7f6afd0973db?w=600&q=75',title:'Bloomingdale vs. Buckhorn: Two Corridors, Different Tradeoffs',desc:'Price points, school zones, HOA differences, lot sizes, and which one fits.',href:'/blog/bloomingdale-vs-buckhorn-valrico/'},
              {img:'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=75',title:'How School Zones Affect What Your Valrico Home Is Worth',desc:'School zoning is the single biggest price driver in Valrico.',href:'/valrico-school-zones/'},
            ].map(post=>(
              <div key={post.title} style={{background:'#fff',borderRadius:8,overflow:'hidden',border:'1px solid #e5e5e5',transition:'.3s'}}>
                <img src={post.img} alt={post.title} style={{width:'100%',height:180,objectFit:'cover'}} />
                <div style={{padding:20}}>
                  <h3 style={{fontSize:15,fontWeight:600,marginBottom:8,lineHeight:1.4}}><Link href={post.href} style={{color:'#222'}}>{post.title}</Link></h3>
                  <p style={{fontSize:13,color:'#555',lineHeight:1.6}}>{post.desc}</p>
                  <Link href={post.href} style={{fontSize:12,fontWeight:600,color:'#003da5',marginTop:12,display:'inline-block'}}>Continue Reading →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section style={{padding:'56px 0'}} id="neighborhoods">
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <span className="material-icons" style={{fontSize:36,color:'#003da5',marginBottom:8}}>location_city</span>
          <h2 style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:24,marginBottom:8}}>Valrico Neighborhoods</h2>
          <p style={{fontSize:14,color:'#555',marginBottom:24}}>Click below to explore detailed guides for your favorite Valrico neighborhoods.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:12}}>
            {[
              ['Bloomingdale','/neighborhoods/bloomingdale/'],
              ['River Hills','/neighborhoods/river-hills/'],
              ['Diamond Hill','/neighborhoods/diamond-hill/'],
              ['Buckhorn / Boyette','/neighborhoods/buckhorn/'],
              ['Crestwood Estates','/neighborhoods/crestwood-estates/'],
              ['Twin Lakes','/neighborhoods/twin-lakes/'],
              ['Arista','/neighborhoods/arista/'],
              ['Brentwood Hills','/neighborhoods/brentwood-hills/'],
              ['Bloomingdale Oaks','/neighborhoods/bloomingdale-oaks/'],
              ['Lake Valrico','/neighborhoods/lake-valrico/'],
              ['Buckhorn Preserve','/neighborhoods/buckhorn-preserve/'],
              ['Valri Park','/neighborhoods/valri-park/'],
            ].map(([name,href])=>(
              <Link key={name} href={href} style={{display:'flex',alignItems:'center',gap:10,padding:'14px 18px',background:'#f7f7f7',borderRadius:8,fontSize:14,fontWeight:500,color:'#222',border:'1px solid transparent',textDecoration:'none'}}>
                <span className="material-icons" style={{fontSize:20,color:'#003da5'}}>arrow_forward</span> {name}
              </Link>
            ))}
          </div>
          <p style={{textAlign:'center',marginTop:20}}>
            <Link href="/#neighborhoods" style={{fontWeight:600,fontSize:14,color:'#003da5'}}>
              <span className="material-icons" style={{verticalAlign:'middle',fontSize:18}}>arrow_forward</span> View All 32 Neighborhoods
            </Link>
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{padding:'56px 0',background:'#f7f7f7',textAlign:'center'}}>
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <span className="material-icons" style={{fontSize:36,color:'#003da5',marginBottom:8}}>format_quote</span>
          <h2 style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:24,marginBottom:24}}>What Clients Say</h2>
          <div style={{maxWidth:700,margin:'0 auto',fontSize:15,lineHeight:1.8,color:'#555',fontStyle:'italic',position:'relative',padding:'0 40px'}}>
            Barrett made the entire process smooth from start to finish. He knows Valrico inside and out — every neighborhood, every school zone, every price trend. He gave us honest advice, never pushed us, and helped us find exactly the right home in Bloomingdale for our family. We couldn&apos;t have asked for a better REALTOR®.
            <div style={{marginTop:20,fontWeight:600,color:'#222',fontStyle:'normal'}}>— Valrico Home Buyer, 2025</div>
          </div>
          <a href="https://nowtb.com/testimonials/" target="_blank" rel="noopener" style={{marginTop:16,display:'inline-block',fontSize:13,fontWeight:600,color:'#003da5'}}>Read More Reviews →</a>
          <div style={{marginTop:24,display:'flex',gap:16,justifyContent:'center',flexWrap:'wrap'}}>
            <Link href="/valrico-realtor/" style={{fontSize:13,fontWeight:600,color:'#003da5',textDecoration:'none'}}>About Barrett →</Link>
            <Link href="/valrico-real-estate-agent/" style={{fontSize:13,fontWeight:600,color:'#003da5',textDecoration:'none'}}>Why Local Expertise Matters →</Link>
            <Link href="/living-in-valrico/" style={{fontSize:13,fontWeight:600,color:'#003da5',textDecoration:'none'}}>Living in Valrico →</Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section style={{padding:'56px 0'}} id="contact">
        <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
          <span className="material-icons" style={{fontSize:36,color:'#003da5',marginBottom:8}}>mail</span>
          <h2 style={{fontFamily:"'Merriweather',Georgia,serif",fontSize:24,marginBottom:8}}>Get In Touch</h2>
          <p style={{fontSize:14,color:'#555',marginBottom:24}}>Send a message or schedule a call. Happy to help.</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
            <div>
              <h3 style={{fontSize:18,fontWeight:600,marginBottom:16}}>Barrett Henry, REALTOR®</h3>
              <p style={{fontSize:14,color:'#555',marginBottom:12,lineHeight:1.6}}>
                <span className="material-icons" style={{fontSize:18,verticalAlign:'middle',marginRight:6,color:'#003da5'}}>business</span>
                RE/MAX Collective — Brandon Office<br/>417 Lithia Pinecrest Rd, Brandon FL 33511
              </p>
              <p style={{fontSize:14,color:'#555',marginBottom:12}}>
                <span className="material-icons" style={{fontSize:18,verticalAlign:'middle',marginRight:6,color:'#003da5'}}>phone</span>
                <a href="tel:8137337907" style={{color:'#003da5',fontWeight:500,textDecoration:'none'}}>(813) 733-7907</a>
              </p>
              <p style={{fontSize:14,color:'#555',marginBottom:12}}>
                <span className="material-icons" style={{fontSize:18,verticalAlign:'middle',marginRight:6,color:'#003da5'}}>phone</span>
                The NOW Team: <a href="tel:8132604663" style={{color:'#003da5',fontWeight:500,textDecoration:'none'}}>(813) 260-4663</a>
              </p>
              <p style={{fontSize:14,color:'#555',marginBottom:12}}>
                <span className="material-icons" style={{fontSize:18,verticalAlign:'middle',marginRight:6,color:'#003da5'}}>email</span>
                <a href="mailto:barrett@nowtb.com" style={{color:'#003da5',fontWeight:500,textDecoration:'none'}}>barrett@nowtb.com</a>
              </p>
              <p style={{fontSize:14,color:'#555',marginBottom:12}}>
                <span className="material-icons" style={{fontSize:18,verticalAlign:'middle',marginRight:6,color:'#003da5'}}>language</span>
                <a href="https://nowtb.com" target="_blank" rel="noopener" style={{color:'#003da5',fontWeight:500,textDecoration:'none'}}>nowtb.com</a>
              </p>
              <p style={{marginTop:16,fontSize:13,color:'#555'}}><strong>Also serving from:</strong><br/>Tampa: 14310 N Dale Mabry Hwy Ste 100<br/>Largo: 11200 Seminole Blvd Ste 202</p>
              <p style={{marginTop:16,fontSize:13,color:'#555'}}><strong>Designations:</strong> e-PRO, MRP, SRS<br/><strong>Broker Associate</strong> · 23+ Years Experience</p>
              <div style={{marginTop:16}}>
                <p style={{fontSize:13,fontWeight:600,color:'#222',marginBottom:8}}>Explore Valrico Resources:</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                  {[
                    ['Pool Homes','/valrico-pool-homes/'],
                    ['Waterfront','/valrico-waterfront-homes/'],
                    ['Luxury Homes','/valrico-luxury-homes/'],
                    ['New Construction','/valrico-new-construction-homes/'],
                    ['No HOA','/valrico-no-hoa-homes/'],
                    ['Foreclosures','/valrico-foreclosures/'],
                    ['Short Sale Help','/valrico-short-sale/'],
                    ['Pre-Foreclosure','/valrico-pre-foreclosure/'],
                  ].map(([label,href])=>(
                    <Link key={label} href={href} style={{fontSize:12,color:'#003da5',textDecoration:'none',padding:'4px 10px',background:'#f7f7f7',borderRadius:4,border:'1px solid #e5e5e5'}}>{label}</Link>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                  <div>
                    <label style={{display:'block',fontSize:13,fontWeight:500,marginBottom:4,color:'#222'}}>First Name</label>
                    <input type="text" placeholder="First name" style={{width:'100%',padding:'12px 14px',border:'1px solid #e5e5e5',borderRadius:6,fontSize:14}} />
                  </div>
                  <div>
                    <label style={{display:'block',fontSize:13,fontWeight:500,marginBottom:4,color:'#222'}}>Last Name</label>
                    <input type="text" placeholder="Last name" style={{width:'100%',padding:'12px 14px',border:'1px solid #e5e5e5',borderRadius:6,fontSize:14}} />
                  </div>
                </div>
                <div>
                  <label style={{display:'block',fontSize:13,fontWeight:500,marginBottom:4,color:'#222'}}>Phone</label>
                  <input type="tel" placeholder="(555) 555-5555" style={{width:'100%',padding:'12px 14px',border:'1px solid #e5e5e5',borderRadius:6,fontSize:14}} />
                </div>
                <div>
                  <label style={{display:'block',fontSize:13,fontWeight:500,marginBottom:4,color:'#222'}}>Email</label>
                  <input type="email" placeholder="you@email.com" style={{width:'100%',padding:'12px 14px',border:'1px solid #e5e5e5',borderRadius:6,fontSize:14}} />
                </div>
                <div>
                  <label style={{display:'block',fontSize:13,fontWeight:500,marginBottom:4,color:'#222'}}>Message</label>
                  <textarea placeholder="How can Barrett help you?" style={{width:'100%',padding:'12px 14px',border:'1px solid #e5e5e5',borderRadius:6,fontSize:14,height:100,resize:'vertical'}} />
                </div>
                <div>
                  <label style={{display:'block',fontSize:13,fontWeight:500,marginBottom:4,color:'#222'}}>Best time to call</label>
                  <select style={{width:'100%',padding:'12px 14px',border:'1px solid #e5e5e5',borderRadius:6,fontSize:14}}>
                    <option>ASAP</option><option>Morning</option><option>Afternoon</option><option>Evening</option>
                  </select>
                </div>
                <button type="button" style={{padding:'14px 32px',background:'#003da5',color:'#fff',fontSize:14,fontWeight:600,border:'none',borderRadius:6,cursor:'pointer'}}>
                  <span className="material-icons" style={{fontSize:18,verticalAlign:'middle',marginRight:6}}>send</span> Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEMA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":[{"@type":"RealEstateAgent","name":"Barrett Henry","description":"Valrico FL REALTOR® and Broker Associate with RE/MAX Collective. 23+ years experience serving 33594 and 33596.","url":"https://valricoagent.com","telephone":"(813) 733-7907","email":"barrett@nowtb.com","address":{"@type":"PostalAddress","streetAddress":"417 Lithia Pinecrest Rd","addressLocality":"Brandon","addressRegion":"FL","postalCode":"33511","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":27.9378,"longitude":-82.2365},"areaServed":{"@type":"City","name":"Valrico, FL"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"5.0","reviewCount":"50"}},{"@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who is the best Valrico REALTOR?","acceptedAnswer":{"@type":"Answer","text":"Barrett Henry is a Broker Associate with RE/MAX Collective serving Valrico FL (33594 and 33596) with 23+ years of real estate experience."}},{"@type":"Question","name":"What are Valrico home prices in 2026?","acceptedAnswer":{"@type":"Answer","text":"Valrico median home prices are approximately $415K as of Q1 2026, with prices ranging from $275K in entry-level neighborhoods to over $1M in River Hills and Crestwood Estates."}}]}]})}} />
    </>
  );
}
