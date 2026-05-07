import type { Metadata } from "next";

// SEO metadata for the Valrico Pool Homes page
export const metadata: Metadata = {
  title: "Valrico Pool Homes for Sale",
  description:
    "Search pool homes for sale in Valrico FL. Screened, heated, and saltwater pools across 32 neighborhoods. Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "Valrico Pool Homes for Sale",
    description:
      "Search pool homes for sale in Valrico FL. Screened, heated, and saltwater pools across 32 neighborhoods. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-pool-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-pool-homes/",
  },
};

export default function PoolHomesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
