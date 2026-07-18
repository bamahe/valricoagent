import type { Metadata } from "next";

// SEO metadata for the Valrico FL Homes for Sale page
export const metadata: Metadata = {
  title: "Homes for Sale in Valrico FL — 33594 & 33596 Listings (2026)",
  description:
    "Browse every home for sale in Valrico FL updated daily from Stellar MLS. Filter by neighborhood, price, pool homes, no-HOA, and school zone. Free search from Barrett Henry, REALTOR®.",
  openGraph: {
    title: "Homes for Sale in Valrico FL — 33594 & 33596 Listings (2026)",
    description:
      "Browse every home for sale in Valrico FL updated daily from Stellar MLS. Filter by neighborhood, price, pool homes, no-HOA, and school zone. Free search from Barrett Henry, REALTOR®.",
    url: "https://valricoagent.com/valrico-fl-homes-for-sale/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-fl-homes-for-sale/",
  },
};

export default function ValricoHomesForSaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
