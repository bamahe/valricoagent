'use client';

/**
 * BlogFilter, client component for filtering blog posts by pillar/category.
 * Renders clickable filter buttons and a filterable post grid.
 */

import { useState } from 'react';
import Link from 'next/link';

// Pillar label + color mapping
const pillarStyles: Record<string, { label: string; color: string; activeColor: string }> = {
  buyer: { label: 'Buyer Guide', color: 'bg-blue-100 text-blue-800', activeColor: 'bg-blue-700 text-white' },
  agent: { label: 'Your Agent', color: 'bg-indigo-100 text-indigo-800', activeColor: 'bg-indigo-700 text-white' },
  market: { label: 'Market Report', color: 'bg-green-100 text-green-800', activeColor: 'bg-green-700 text-white' },
  seller: { label: 'Seller Guide', color: 'bg-amber-100 text-amber-800', activeColor: 'bg-amber-700 text-white' },
  relocation: { label: 'Living in Valrico', color: 'bg-purple-100 text-purple-800', activeColor: 'bg-purple-700 text-white' },
  comparison: { label: 'Area Comparison', color: 'bg-rose-100 text-rose-800', activeColor: 'bg-rose-700 text-white' },
};

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  pillar: string;
  publish_date: string | null;
  reading_time: number;
  featured_image: string | null;
  featured_image_alt: string | null;
}

interface Pillar {
  id: string;
  label: string;
}

interface BlogFilterProps {
  posts: Post[];
  pillars: Pillar[];
}

export default function BlogFilter({ posts, pillars }: BlogFilterProps) {
  // Track active filter, null means show all
  const [activePillar, setActivePillar] = useState<string | null>(null);

  // Filter posts based on active pillar
  const filteredPosts = activePillar
    ? posts.filter((post) => post.pillar === activePillar)
    : posts;

  return (
    <>
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-10">
        {/* "All" button */}
        <button
          onClick={() => setActivePillar(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
            activePillar === null
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All ({posts.length})
        </button>

        {/* Pillar filter buttons */}
        {pillars.map((p) => {
          const count = posts.filter((post) => post.pillar === p.id).length;
          if (count === 0) return null;
          const style = pillarStyles[p.id] || {
            label: p.label,
            color: 'bg-gray-100 text-gray-800',
            activeColor: 'bg-gray-700 text-white',
          };
          return (
            <button
              key={p.id}
              onClick={() => setActivePillar(activePillar === p.id ? null : p.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                activePillar === p.id ? style.activeColor : style.color
              }`}
            >
              {style.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Results count when filtered */}
      {activePillar && (
        <p className="text-sm text-gray-500 mb-6">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
          {' '}in {pillarStyles[activePillar]?.label || activePillar}
        </p>
      )}

      {/* Post grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => {
          const style = pillarStyles[post.pillar] || {
            label: post.pillar,
            color: 'bg-gray-100 text-gray-800',
            activeColor: 'bg-gray-700 text-white',
          };
          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Featured image */}
              {post.featured_image ? (
                <img
                  src={post.featured_image}
                  alt={post.featured_image_alt || post.title}
                  className="h-48 w-full object-cover"
                />
              ) : (
                <div className="h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <span className="text-5xl opacity-30">🏠</span>
                </div>
              )}

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

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-xl mb-2">No posts found in this category</p>
          <p>Try selecting a different filter above.</p>
        </div>
      )}
    </>
  );
}
