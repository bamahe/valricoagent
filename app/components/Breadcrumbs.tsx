/**
 * Breadcrumbs, full-width white bar with a home icon then linked ancestors.
 * Server component (no 'use client'), so it ships zero JavaScript.
 *
 * Always pair this with BreadcrumbList JSON-LD on the same page, the visible
 * trail and the structured data have to agree or Google ignores both.
 * Use `breadcrumbSchema()` below so the two can never drift apart.
 *
 * Usage:
 *   <Breadcrumbs items={[{ name: 'Foreclosures', href: '/valrico-foreclosures/' }]} />
 */

import Link from 'next/link';

export interface Crumb {
  /** Label shown to the user and used in the schema */
  name: string;
  /** Absolute path with trailing slash, e.g. "/valrico-foreclosures/" */
  href: string;
}

const SITE = 'https://valricoagent.com';

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ background: '#fff', borderBottom: '1px solid #e8e8e8', padding: '12px 0' }}
    >
      <ol
        style={{
          maxWidth: 1140, margin: '0 auto', padding: '0 24px',
          display: 'flex', alignItems: 'center', flexWrap: 'wrap',
          gap: 6, listStyle: 'none', fontSize: 13, color: '#888',
        }}
      >
        <li style={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#888', display: 'flex', alignItems: 'center' }}>
            {/* Inline home icon, avoids pulling in an icon library */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            {/* Screen readers need the word, sighted users get the icon */}
            <span style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>Home</span>
          </Link>
        </li>

        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span aria-hidden="true" style={{ color: '#ccc' }}>›</span>
              {isLast ? (
                // Current page: bold, not a link, flagged for assistive tech
                <span aria-current="page" style={{ color: '#222', fontWeight: 600 }}>
                  {item.name}
                </span>
              ) : (
                <Link href={item.href} style={{ color: '#003da5' }}>{item.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/**
 * Build the matching BreadcrumbList JSON-LD from the same `items` array.
 * Home is prepended automatically, exactly like the visible trail.
 */
export function breadcrumbSchema(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${SITE}${item.href}`,
      })),
    ],
  };
}
