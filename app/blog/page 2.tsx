'use client';
import Link from 'next/link';

export default function BlogIndex() {
  const posts = [
    { slug: 'valrico-housing-market-q1-2026', title: 'Valrico housing market Q1 2026: what the numbers actually mean', excerpt: 'Median prices, inventory shifts, days on market by neighborhood, and what it means for buyers and sellers in 33594 and 33596.', tag: 'Market Report', date: 'April 2026' },
    { slug: 'bloomingdale-vs-buckhorn-valrico', title: 'Bloomingdale vs. Buckhorn: two Valrico corridors, different tradeoffs', excerpt: 'Price points, school zones, HOA differences, lot sizes, and which one fits depending on what you are looking for.', tag: 'Neighborhood', date: 'April 2026' },
  ];

  return (
    <>
      <div style={{background:'var(--blue-deep)'}} className="text-white py-16 px-7">
        <div className="max-w-[780px] mx-auto">
          <h1 className="font-serif text-[clamp(28px,4vw,38px)] leading-tight tracking-tight mb-4">Valrico Real Estate Blog</h1>
          <p className="text-lg leading-relaxed" style={{color:'rgba(255,255,255,.75)'}}>Market reports, neighborhood comparisons, school zone analysis, and seller tips from Barrett Henry, REALTOR&reg; with RE/MAX Collective. Updated regularly with local Valrico data.</p>
        </div>
      </div>
      <div className="max-w-[780px] mx-auto px-7 py-16">
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="block border rounded-md p-6 no-underline hover:shadow-md transition-shadow" style={{borderColor:'var(--border)',color:'inherit'}}>
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-1 rounded" style={{background:'var(--blue-deep)',color:'#fff'}}>{post.tag}</span>
              <h2 className="font-serif text-xl mt-3 mb-2">{post.title}</h2>
              <p className="text-sm mb-3" style={{color:'var(--ink-soft)'}}>{post.excerpt}</p>
              <span className="text-xs" style={{color:'var(--ink-muted)'}}>Barrett Henry &middot; {post.date}</span>
            </Link>
          ))}
        </div>
        <div className="mt-12 p-6 rounded-md text-center" style={{background:'var(--cream-warm)'}}>
          <h3 className="font-serif text-lg mb-2">Want more Valrico market insights?</h3>
          <p className="text-sm mb-4" style={{color:'var(--ink-soft)'}}>Barrett Henry, REALTOR&reg; publishes monthly Valrico market data and neighborhood analysis.</p>
          <a href="tel:8137337907" className="btn-solid mr-2">(813) 733-7907</a>
          <Link href="/valrico-market-report/" className="btn-ghost">Market Report</Link>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:"{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://valricoagent.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Valrico Real Estate Blog\", \"item\": \"https://valricoagent.com/blog/\"}]}"}} />
    </>
  );
}
