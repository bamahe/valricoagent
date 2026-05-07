import type { Metadata } from "next";

// SEO metadata for the 33596 Homes for Sale page
export const metadata: Metadata = {
  title: "Homes for Sale in 33596 — Valrico FL",
  description:
    "Search homes for sale in ZIP code 33596, Valrico FL. River Hills, Diamond Hill, and west Valrico neighborhoods. Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "Homes for Sale in 33596 — Valrico FL",
    description:
      "Search homes for sale in ZIP code 33596, Valrico FL. River Hills, Diamond Hill, and west Valrico neighborhoods. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/homes-for-sale-33596/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/homes-for-sale-33596/",
  },
};

export default function Homes33596Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
