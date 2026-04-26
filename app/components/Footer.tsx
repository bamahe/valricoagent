import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{background:'#222',color:'#fff',padding:'56px 0 28px'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:48,paddingBottom:40,borderBottom:'1px solid rgba(255,255,255,.08)'}}>
          {/* Brand */}
          <div>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16}}>
              <img src="https://nowtb.com/wp-content/uploads/2026/02/remax-balloon-2025-white.png" alt="RE/MAX" style={{height:36,opacity:.6}} />
              <div>
                <div style={{fontSize:16,fontWeight:700}}>Barrett Henry</div>
                <div style={{fontSize:11,color:'rgba(255,255,255,.35)'}}>REALTOR® · Broker Associate</div>
              </div>
            </div>
            <p style={{fontSize:12,color:'rgba(255,255,255,.35)',lineHeight:1.7}}>RE/MAX Collective<br/>417 Lithia Pinecrest Rd<br/>Brandon, FL 33511</p>
            <p style={{marginTop:12}}><a href="tel:8137337907" style={{fontSize:14,fontWeight:600,color:'rgba(255,255,255,.7)'}}>(813) 733-7907</a></p>
            <p><a href="mailto:barrett@nowtb.com" style={{fontSize:12,color:'rgba(255,255,255,.4)'}}>barrett@nowtb.com</a></p>
            <p style={{marginTop:16,fontSize:10,fontWeight:700,letterSpacing:'.1em',color:'rgba(255,255,255,.2)'}}>MOVE WITH CONFIDENCE.</p>
          </div>
          {/* Links */}
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:32}}>
            <div>
              <h4 style={{fontSize:11,textTransform:'uppercase',letterSpacing:'.12em',color:'rgba(255,255,255,.25)',marginBottom:14,fontWeight:700}}>Buyers</h4>
              <ul style={{listStyle:'none'}}>
                {[
                  ['/valrico-fl-homes-for-sale/','Search Homes'],
                  ['/valrico-pool-homes/','Pool Homes'],
                  ['/valrico-no-hoa-homes/','No HOA Homes'],
                  ['/valrico-new-construction-homes/','New Construction'],
                  ['/valrico-luxury-homes/','Luxury Homes'],
                  ['/homes-for-sale-33594/','33594 Homes'],
                  ['/homes-for-sale-33596/','33596 Homes'],
                  ['/living-in-valrico/','Living in Valrico'],
                ].map(([h,n])=>(
                  <li key={h} style={{marginBottom:6}}><Link href={h} style={{fontSize:12,color:'rgba(255,255,255,.4)',transition:'.2s'}}>{n}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{fontSize:11,textTransform:'uppercase',letterSpacing:'.12em',color:'rgba(255,255,255,.25)',marginBottom:14,fontWeight:700}}>Sellers &amp; Landlords</h4>
              <ul style={{listStyle:'none'}}>
                {[
                  ['/valrico-fl-home-values/',"What's My Home Worth?"],
                  ['/sell-my-home-valrico/','Sell My Home'],
                  ['/valrico-market-report/','Market Report'],
                  ['/valrico-property-management/','Property Management'],
                  ['/valrico-school-zones/','School Zones'],
                  ['/blog/','Blog'],
                ].map(([h,n])=>(
                  <li key={h} style={{marginBottom:6}}><Link href={h} style={{fontSize:12,color:'rgba(255,255,255,.4)',transition:'.2s'}}>{n}</Link></li>
                ))}
              </ul>
              <h4 style={{fontSize:11,textTransform:'uppercase',letterSpacing:'.12em',color:'rgba(255,255,255,.25)',marginTop:20,marginBottom:14,fontWeight:700}}>More</h4>
              <ul style={{listStyle:'none'}}>
                {[
                  ['https://nowtb.com','nowtb.com'],
                  ['https://bestbayservices.com','Best Bay Services'],
                  ['https://valrico.blog','Valrico Blog'],
                ].map(([h,n])=>(
                  <li key={h} style={{marginBottom:6}}><a href={h} target="_blank" rel="noopener" style={{fontSize:12,color:'rgba(255,255,255,.4)',transition:'.2s'}}>{n}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{fontSize:11,textTransform:'uppercase',letterSpacing:'.12em',color:'rgba(255,255,255,.25)',marginBottom:14,fontWeight:700}}>Valrico Neighborhoods</h4>
              <ul style={{listStyle:'none'}}>
                {[
                  ['/neighborhoods/bloomingdale/','Bloomingdale'],
                  ['/neighborhoods/river-hills/','River Hills'],
                  ['/neighborhoods/diamond-hill/','Diamond Hill'],
                  ['/neighborhoods/buckhorn/','Buckhorn / Boyette'],
                  ['/neighborhoods/crestwood-estates/','Crestwood Estates'],
                  ['/neighborhoods/twin-lakes/','Twin Lakes'],
                  ['/neighborhoods/arista/','Arista'],
                  ['/neighborhoods/brentwood-hills/','Brentwood Hills'],
                  ['/neighborhoods/bloomingdale-oaks/','Bloomingdale Oaks'],
                  ['/neighborhoods/lake-valrico/','Lake Valrico'],
                  ['/neighborhoods/buckhorn-preserve/','Buckhorn Preserve'],
                  ['/neighborhoods/valri-park/','Valri Park'],
                  ['/neighborhoods/canterbury-oaks/','Canterbury Oaks'],
                  ['/neighborhoods/kings-mill/','Kings Mill'],
                  ['/neighborhoods/wellington/','Wellington'],
                  ['/neighborhoods/shetland-ridge/','Shetland Ridge'],
                ].map(([h,n])=>(
                  <li key={h} style={{marginBottom:6}}><Link href={h} style={{fontSize:12,color:'rgba(255,255,255,.4)',transition:'.2s'}}>{n}</Link></li>
                ))}
                <li style={{marginBottom:6}}><Link href="/#neighborhoods" style={{fontSize:12,color:'rgba(255,255,255,.6)',fontWeight:600}}>All 32 Neighborhoods →</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',paddingTop:20,fontSize:11,color:'rgba(255,255,255,.15)',flexWrap:'wrap',gap:8}}>
          <span>© 2026 Barrett Henry, REALTOR® · RE/MAX Collective · All Rights Reserved</span>
          <span>Built by <a href="https://vyrabyte.com" target="_blank" rel="noopener" style={{color:'rgba(255,255,255,.2)'}}>Vyrabyte</a></span>
        </div>
      </div>
    </footer>
  );
}
