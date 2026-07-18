import type { Metadata } from "next";

// SEO metadata for the 33594 Homes for Sale page
export const metadata: Metadata = {
  title: "Homes for Sale in 33594 — Valrico FL",
  description:
    "Search homes for sale in ZIP code 33594, Valrico FL. Bloomingdale, Buckhorn, and east Valrico neighborhoods. Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "Homes for Sale in 33594 — Valrico FL",
    description:
      "Search homes for sale in ZIP code 33594, Valrico FL. Bloomingdale, Buckhorn, and east Valrico neighborhoods. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/homes-for-sale-33594/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/homes-for-sale-33594/",
  },
};

export default function Homes33594Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
