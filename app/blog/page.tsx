import { getPublishedPosts, getPillars } from '@/lib/supabase';
import type { Metadata } from 'next';
import BlogFilter from '../components/BlogFilter';

export const dynamic = 'force-dynamic'; // Always fetch fresh data (new posts publish daily)

export const metadata: Metadata = {
  title: 'Valrico Real Estate Blog - Market Reports & Guides',
  description:
    'Expert insights on Valrico FL real estate: market reports, neighborhood guides, buying and selling tips from local REALTOR® Barrett Henry.',
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: 'Valrico Real Estate Blog - Market Reports & Guides',
    description:
      'Expert insights on Valrico FL real estate: market reports, neighborhood guides, buying and selling tips.',
    url: 'https://valricoagent.com/blog/',
    siteName: 'ValricoAgent.com',
    type: 'website',
  },
};

export default async function BlogIndex() {
  const [posts, pillars] = await Promise.all([getPublishedPosts(), getPillars()]);

  // Serialize posts for the client filter component (only the fields it needs)
  const serializedPosts = posts.map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    pillar: post.pillar,
    publish_date: post.publish_date,
    reading_time: post.reading_time,
    featured_image: post.featured_image,
    featured_image_alt: post.featured_image_alt,
  }));

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

      {/* Interactive filter + post grid (client component) */}
      <BlogFilter posts={serializedPosts} pillars={pillars} />

      {posts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl mb-2">No posts published yet</p>
          <p>Check back soon for Valrico real estate insights.</p>
        </div>
      )}
    </main>
  );
}
