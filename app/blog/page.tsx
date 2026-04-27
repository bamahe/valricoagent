import { getPublishedPosts, getPillars } from '@/lib/supabase';
import Link from 'next/link';
import type { Metadata } from 'next';

export const revalidate = 3600; // Re-check every hour for new scheduled posts

export const metadata: Metadata = {
  title: 'Valrico Real Estate Blog | Barrett Henry | ValricoAgent.com',
  description:
    'Expert insights on Valrico FL real estate: market reports, neighborhood guides, buying and selling tips from local REALTOR® Barrett Henry.',
  openGraph: {
    title: 'Valrico Real Estate Blog | Barrett Henry',
    description:
      'Expert insights on Valrico FL real estate: market reports, neighborhood guides, buying and selling tips.',
    url: 'https://valricoagent.com/blog',
    siteName: 'ValricoAgent.com',
    type: 'website',
  },
};

// Pillar label + color mapping
const pillarStyles: Record<string, { label: string; color: string }> = {
  buyer: { label: 'Buyer Guide', color: 'bg-blue-100 text-blue-800' },
  agent: { label: 'Your Agent', color: 'bg-indigo-100 text-indigo-800' },
  market: { label: 'Market Report', color: 'bg-green-100 text-green-800' },
  seller: { label: 'Seller Guide', color: 'bg-amber-100 text-amber-800' },
  relocation: { label: 'Living in Valrico', color: 'bg-purple-100 text-purple-800' },
  comparison: { label: 'Area Comparison', color: 'bg-rose-100 text-rose-800' },
};

export default async function BlogIndex() {
  const [posts, pillars] = await Promise.all([getPublishedPosts(), getPillars()]);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Valrico Real Estate Blog
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Market reports, neighborhood guides, and straight-talk advice for
          buyers and sellers in Valrico, FL from Barrett Henry, REALTOR®.
        </p>
      </div>

      {/* Pillar filters */}
      <div className="flex flex-wrap gap-2 mb-10">
        <span className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium">
          All ({posts.length})
        </span>
        {pillars.map((p: any) => {
          const count = posts.filter((post) => post.pillar === p.id).length;
          if (count === 0) return null;
          const style = pillarStyles[p.id] || {
            label: p.label,
            color: 'bg-gray-100 text-gray-800',
          };
          return (
            <span
              key={p.id}
              className={`px-4 py-2 rounded-full text-sm font-medium ${style.color}`}
            >
              {style.label} ({count})
            </span>
          );
        })}
      </div>

      {/* Post grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const style = pillarStyles[post.pillar] || {
            label: post.pillar,
            color: 'bg-gray-100 text-gray-800',
          };
          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <span className="text-5xl opacity-30">🏠</span>
              </div>

              <div className="p-5">
                {/* Pillar badge */}
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3 ${style.color}`}
                >
                  {style.label}
                </span>

                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-2 line-clamp-2">
                  {post.title}
                </h2>

                {post.excerpt && (
                  <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center text-xs text-gray-400 gap-3">
                  <span>
                    {post.publish_date
                      ? new Date(post.publish_date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : 'Draft'}
                  </span>
                  <span>·</span>
                  <span>{post.reading_time} min read</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl mb-2">No posts published yet</p>
          <p>Check back soon for Valrico real estate insights.</p>
        </div>
      )}
    </main>
  );
}
