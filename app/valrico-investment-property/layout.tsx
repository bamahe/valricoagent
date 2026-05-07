import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Investment Properties — Rentals',
  description: 'Explore Valrico FL investment properties including rental homes, townhomes, and multi-family opportunities. Average rents, cap rates, best neighborhoods for investors. Barrett Henry, REALTOR®, REMAX Collective.',
  alternates: { canonical: "/valrico-investment-property/" },
  openGraph: {
    title: "Valrico Investment Properties — Rentals",
    description: "Explore Valrico FL investment properties including rental homes, townhomes, and multi-family opportunities. Average rents, cap rates, best neighborhoods for investors. Barrett Henry, REALTOR®, REMAX Collective.",
    url: "https://valricoagent.com/valrico-investment-property/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function InvestmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
