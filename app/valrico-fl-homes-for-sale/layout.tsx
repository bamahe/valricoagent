import type { Metadata } from "next";

// SEO metadata for the Valrico FL Homes for Sale page
export const metadata: Metadata = {
  title: "Valrico FL Homes for Sale",
  description:
    "Search homes for sale in Valrico FL from Stellar MLS. Browse by neighborhood, price, pool, or school zone. Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "Valrico FL Homes for Sale",
    description:
      "Search homes for sale in Valrico FL from Stellar MLS. Browse by neighborhood, price, pool, or school zone. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-fl-homes-for-sale/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-fl-homes-for-sale/",
  },
};

export default function ValricoHomesForSaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
