import type { Metadata } from "next";

// SEO metadata for the Valrico FL Homes for Sale page
export const metadata: Metadata = {
  title: "Homes for Sale in Valrico FL, 33594 & 33596 Listings (2026)",
  description:
    "Browse every Valrico FL home for sale, updated daily from Stellar MLS. Filter by neighborhood, price, pool, no-HOA, and school zone. (813) 733-7907.",
  openGraph: {
    title: "Homes for Sale in Valrico FL, 33594 & 33596 Listings (2026)",
    description:
      "Browse every Valrico FL home for sale, updated daily from Stellar MLS. Filter by neighborhood, price, pool, no-HOA, and school zone. (813) 733-7907.",
    url: "https://valricoagent.com/valrico-fl-homes-for-sale/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
  alternates: {
    canonical: "/valrico-fl-homes-for-sale/",
  },
};

export default function ValricoHomesForSaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
