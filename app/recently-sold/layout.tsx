import type { Metadata } from 'next';

// This page is a client component (it fetches sold listings with useEffect),
// and client components cannot export metadata. A sibling layout supplies it.
export const metadata: Metadata = {
  title: 'Recently Sold Homes in Valrico FL - Real Sale Prices',
  description: "See recently sold homes in Valrico FL with real closing prices from Stellar MLS. Know what homes actually sell for. Call (813) 733-7907.",
  alternates: { canonical: '/recently-sold/' },
  openGraph: {
    title: 'Recently Sold Homes in Valrico FL - Real Sale Prices',
    description: "See recently sold homes in Valrico FL with real closing prices from Stellar MLS. Know what homes actually sell for. Call (813) 733-7907.",
    url: 'https://valricoagent.com/recently-sold/',
    siteName: 'ValricoAgent.com',
    type: 'website',
    images: [{ url: 'https://valricoagent.com/og-image.png', width: 1200, height: 630, alt: 'Recently sold homes in Valrico FL' }],
  },
  twitter: { card: 'summary_large_image', images: ['https://valricoagent.com/og-image.png'] },
};

export default function RecentlySoldLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
