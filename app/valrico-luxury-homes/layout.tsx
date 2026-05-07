import type { Metadata } from "next";

// SEO metadata for the Valrico Luxury Homes page
export const metadata: Metadata = {
  title: "Valrico Luxury Homes for Sale",
  description:
    "Browse luxury homes for sale in Valrico FL. River Hills, gated communities, and estate properties. Barrett Henry, Broker Associate, REMAX Collective.",
  openGraph: {
    title: "Valrico Luxury Homes for Sale",
    description:
      "Browse luxury homes for sale in Valrico FL. River Hills, gated communities, and estate properties. Barrett Henry, Broker Associate, REMAX Collective.",
    url: "https://valricoagent.com/valrico-luxury-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-luxury-homes/",
  },
};

export default function LuxuryHomesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
