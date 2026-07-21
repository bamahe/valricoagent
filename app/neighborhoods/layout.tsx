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
    'Explore all 42 Valrico neighborhoods. Compare home prices, school zones, HOA fees, and lifestyle across Bloomingdale, River Hills, Buckhorn, Diamond Hill, and more.',
  alternates: { canonical: '/neighborhoods/' },
  openGraph: {
    title: 'Valrico Neighborhoods, 38 Communities in 33594 & 33596',
    description:
      'Explore all 42 Valrico neighborhoods. Compare home prices, school zones, HOA fees, and lifestyle across Bloomingdale, River Hills, Buckhorn, Diamond Hill, and more.',
    url: 'https://valricoagent.com/neighborhoods/',
    siteName: 'ValricoAgent.com',
    type: 'website',
    images: [
      {
        url: 'https://valricoagent.com/barrett-henry.png',
        width: 600,
        height: 600,
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
