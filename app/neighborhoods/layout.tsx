/**
 * app/neighborhoods/layout.tsx
 *
 * Layout for the /neighborhoods/ hub page.
 * Sets metadata for the neighborhoods index, title, description, canonical, and OpenGraph.
 */
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Valrico Neighborhoods, 38 Communities in 33594 & 33596',
  description:
    "Explore all 41 Valrico neighborhoods. Compare home prices, school zones, and HOA fees across Bloomingdale, River Hills, and more. (813) 733-7907.",
  alternates: { canonical: '/neighborhoods/' },
  openGraph: {
    title: 'Valrico Neighborhoods, 38 Communities in 33594 & 33596',
    description:
      "Explore all 41 Valrico neighborhoods. Compare home prices, school zones, and HOA fees across Bloomingdale, River Hills, and more. (813) 733-7907.",
    url: 'https://valricoagent.com/neighborhoods/',
    siteName: 'ValricoAgent.com',
    type: 'website',
    images: [
      {
        url: 'https://valricoagent.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Barrett Henry, REALTOR - Valrico FL',
      },
    ],
  },
};

export default function NeighborhoodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
