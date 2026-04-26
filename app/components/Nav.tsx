'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [openDD, setOpenDD] = useState<string|null>(null);

  const dropdowns: Record<string, {label:string, items:{href:string,text:string}[]}> = {
    buy: {
      label: 'Buy ▾',
      items: [
        {href:'/valrico-fl-homes-for-sale/',text:'Search All Homes'},
        {href:'/valrico-pool-homes/',text:'Pool Homes'},
        {href:'/valrico-no-hoa-homes/',text:'No HOA Homes'},
        {href:'/valrico-new-construction-homes/',text:'New Construction'},
        {href:'/valrico-luxury-homes/',text:'Luxury Homes'},
        {href:'/homes-for-sale-33594/',text:'33594 Homes'},
        {href:'/homes-for-sale-33596/',text:'33596 Homes'},
      ]
    },
    sell: {
      label: 'Sell ▾',
      items: [
        {href:'/valrico-fl-home-values/',text:"What's My Home Worth?"},
        {href:'/sell-my-home-valrico/',text:'Selling Guide'},
        {href:'/valrico-market-report/',text:'Market Report'},
        {href:'/valrico-property-management/',text:'Property Management'},
      ]
    },
    hoods: {
      label: 'Neighborhoods ▾',
      items: [
        {href:'/neighborhoods/bloomingdale/',text:'Bloomingdale'},
        {href:'/neighborhoods/river-hills/',text:'River Hills'},
        {href:'/neighborhoods/diamond-hill/',text:'Diamond Hill'},
        {href:'/neighborhoods/buckhorn/',text:'Buckhorn / Boyette'},
        {href:'/neighborhoods/crestwood-estates/',text:'Crestwood Estates'},
        {href:'/neighborhoods/twin-lakes/',text:'Twin Lakes'},
        {href:'/#neighborhoods',text:'All 32 →'},
      ]
    },
  };

  return (
    <nav style={{background:'#fff',borderBottom:'1px solid #e5e5e5',position:'sticky',top:0,zIndex:100,boxShadow:'0 2px 8px rgba(0,0,0,.06)'}}>
      <div style={{maxWidth:1200,margin:'0 auto',padding:'0 24px',display:'flex',alignItems:'center',justifyContent:'space-between',height:70}}>
        {/* Brand */}
        <Link href="/" style={{display:'flex',alignItems:'center',gap:12,textDecoration:'none'}}>
          <img src="https://nowtb.com/wp-content/uploads/2026/02/remax-balloon-2025-white.png" alt="RE/MAX" style={{height:38}} onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
          <div style={{lineHeight:1.2}}>
            <strong style={{fontSize:16,color:'#222',display:'block'}}>Barrett Henry</strong>
            <small style={{fontSize:11,color:'#555'}}>REALTOR® · RE/MAX Collective</small>
          </div>
        </Link>

        {/* Links */}
        <div style={{display:'flex',gap:0,alignItems:'center'}} className="hidden lg:flex">
          {Object.entries(dropdowns).map(([key, dd]) => (
            <div key={key} style={{position:'relative'}} onMouseEnter={()=>setOpenDD(key)} onMouseLeave={()=>setOpenDD(null)}>
              <span style={{fontSize:13,fontWeight:500,color:'#222',padding:'24px 16px',cursor:'pointer',display:'block',transition:'.2s'}}>{dd.label}</span>
              {openDD === key && (
                <div style={{position:'absolute',top:'100%',left:0,background:'#fff',border:'1px solid #e5e5e5',borderRadius:6,boxShadow:'0 8px 24px rgba(0,0,0,.1)',minWidth:220,zIndex:200,padding:'8px 0'}}>
                  {dd.items.map(item => (
                    <Link key={item.href} href={item.href} style={{display:'block',padding:'10px 20px',fontSize:13,color:'#222',transition:'.2s'}} onMouseOver={(e)=>{(e.target as HTMLElement).style.background='#f7f7f7';(e.target as HTMLElement).style.color='#003da5'}} onMouseOut={(e)=>{(e.target as HTMLElement).style.background='';(e.target as HTMLElement).style.color='#222'}}>{item.text}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/valrico-school-zones/" style={{fontSize:13,fontWeight:500,color:'#222',padding:'24px 16px'}}>Schools</Link>
          <Link href="/blog/" style={{fontSize:13,fontWeight:500,color:'#222',padding:'24px 16px'}}>Blog</Link>
          <Link href="#contact" style={{fontSize:13,fontWeight:500,color:'#222',padding:'24px 16px'}}>Contact</Link>
        </div>

        {/* CTA */}
        <a href="tel:8137337907" style={{padding:'9px 18px',background:'#cc0000',color:'#fff',fontSize:13,fontWeight:600,borderRadius:6,textDecoration:'none',whiteSpace:'nowrap'}}>(813) 733-7907</a>
      </div>
    </nav>
  );
}
