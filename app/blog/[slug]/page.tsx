import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

// Generate static paths for all published posts
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || '';

  return {
    title: `${title} | ValricoAgent.com`,
    description,
    openGraph: {
      title,
      description,
      url: `https://valricoagent.com/blog/${post.slug}`,
      siteName: 'ValricoAgent.com',
      type: 'article',
      publishedTime: post.publish_date || undefined,
      modifiedTime: post.updated_at,
      authors: ['Barrett Henry'],
      ...(post.og_image || post.featured_image
        ? { images: [{ url: post.og_image || post.featured_image! }] }
        : {}),
    },
    alternates: {
      canonical: `https://valricoagent.com/blog/${post.slug}`,
    },
  };
}

// CTA configs matched to post intent — links match actual site routes
const ctaConfig: Record<string, { headline: string; subtext: string; buttonText: string; buttonLink: string }> = {
  buyer: {
    headline: 'Looking for Homes in Valrico?',
    subtext: 'Get daily listings that match your must-haves. No spam, no portal runaround.',
    buttonText: 'Get Custom Valrico Listings',
    buttonLink: '/valrico-fl-homes-for-sale/',
  },
  seller: {
    headline: 'Thinking About Selling Your Valrico Home?',
    subtext: 'Find out what your home could sell for in today\'s market.',
    buttonText: 'Get Your Free Home Value',
    buttonLink: '/valrico-fl-home-values/',
  },
  valuation: {
    headline: 'What Is Your Valrico Home Worth?',
    subtext: 'Get a custom valuation based on real neighborhood data, not a Zestimate.',
    buttonText: 'Get My Home Value',
    buttonLink: '/valrico-fl-home-values/',
  },
  consultation: {
    headline: 'Ready to Talk Valrico Real Estate?',
    subtext: 'Schedule a free 15-minute strategy call. No pressure, just answers.',
    buttonText: 'Schedule a Call',
    buttonLink: '/#contact',
  },
  relocation: {
    headline: 'Relocating to Valrico?',
    subtext: 'Get our free 2026 Valrico Relocation Packet with neighborhoods, schools, and market data.',
    buttonText: 'Request Relocation Packet',
    buttonLink: '/living-in-valrico/',
  },
  'market-report': {
    headline: 'Want Next Month\'s Valrico Market Update?',
    subtext: 'Get the latest pricing, inventory, and neighborhood trends delivered to your inbox.',
    buttonText: 'Subscribe to Market Updates',
    buttonLink: '/valrico-market-report/',
  },
};

// Simple markdown to HTML converter
function renderMarkdown(content: string): string {
  return content
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold text-gray-900 mt-12 mb-5">$1</h1>')
    // Bold and italic
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-blue-700 underline hover:text-blue-900">$1</a>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li class="ml-6 list-disc text-gray-700 mb-1">$1</li>')
    // Paragraphs (wrap non-tag lines)
    .replace(/^(?!<[hulo]|<li)(.+)$/gm, '<p class="text-gray-700 leading-relaxed mb-4">$1</p>')
    // Wrap adjacent <li> in <ul>
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="mb-6">$1</ul>')
    // Line breaks
    .replace(/\n\n/g, '\n');
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.related_slugs || []);
  const cta = ctaConfig[post.cta_type] || ctaConfig.consultation;

  // Build JSON-LD schema
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': post.schema_type || 'BlogPosting',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Barrett Henry',
      jobTitle: 'REALTOR®, Broker Associate',
      worksFor: { '@type': 'Organization', name: 'RE/MAX Collective' },
    },
    publisher: {
      '@type': 'Organization',
      name: 'ValricoAgent.com',
      url: 'https://valricoagent.com',
    },
    datePublished: post.publish_date,
    dateModified: post.updated_at,
    url: `https://valricoagent.com/blog/${post.slug}`,
    ...(post.featured_image ? { image: post.featured_image } : {}),
    wordCount: post.word_count,
  };

  // Add FAQ schema if present
  if (post.faq_data && post.faq_data.length > 0) {
    jsonLd.mainEntity = post.faq_data.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    }));
  }

  const pillarLabels: Record<string, string> = {
    buyer: 'Buyer Guide',
    agent: 'Your Agent',
    market: 'Market Report',
    seller: 'Seller Guide',
    relocation: 'Living in Valrico',
    comparison: 'Area Comparison',
  };

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{pillarLabels[post.pillar] || post.pillar}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {post.title}
        </h1>

        {/* Meta line */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200">
          <span>Barrett Henry, REALTOR®</span>
          <span>·</span>
          <span>
            {post.publish_date
              ? new Date(post.publish_date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              : 'Draft'}
          </span>
          <span>·</span>
          <span>{post.reading_time} min read</span>
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* CTA Block */}
        <div style={{marginTop:48,padding:32,background:'#f0f4ff',borderRadius:12,border:'1px solid #dbe4f0'}}>
          <h3 style={{fontSize:20,fontWeight:700,color:'#222',marginBottom:8}}>{cta.headline}</h3>
          <p style={{fontSize:14,color:'#555',marginBottom:16}}>{cta.subtext}</p>
          <Link
            href={cta.buttonLink}
            style={{display:'inline-block',padding:'14px 28px',background:'#003da5',color:'#fff',fontSize:14,fontWeight:600,borderRadius:6,textDecoration:'none'}}
          >
            {cta.buttonText}
          </Link>
        </div>

        {/* FAQ section (if present) */}
        {post.faq_data && post.faq_data.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {post.faq_data.map((faq, i) => (
                <div key={i} className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related posts */}
        {related.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Keep Reading</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-xs text-gray-400 uppercase">
                    {pillarLabels[r.pillar] || r.pillar}
                  </span>
                  <h4 className="font-semibold text-gray-900 mt-1">{r.title}</h4>
                  <span className="text-xs text-gray-400 mt-2 block">
                    {r.reading_time} min read
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
