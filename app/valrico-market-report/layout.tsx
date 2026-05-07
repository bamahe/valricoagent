import type { Metadata } from "next";

// SEO metadata for the Valrico Market Report page
export const metadata: Metadata = {
  title: "Valrico FL Housing Market Report 2026",
  description:
    "Valrico real estate market data: median prices, days on market, inventory, and trends for 33594 and 33596. Updated by Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "Valrico FL Housing Market Report 2026",
    description:
      "Valrico real estate market data: median prices, days on market, inventory, and trends for 33594 and 33596. Updated by Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-market-report/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-market-report/",
  },
};

export default function MarketReportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
