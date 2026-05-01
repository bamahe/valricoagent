import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cash Offer for Your Valrico Home — Sell Fast, No Repairs',
  description: 'Get a cash offer on your Valrico home in 24 hours. No repairs, no showings, no commission. Close in 7-14 days. Barrett Henry, REMAX Collective.',
  alternates: { canonical: "/valrico-cash-offer/" },
  openGraph: {
    title: "Cash Offer for Your Valrico Home — Sell Fast, No Repairs",
    description: "Get a cash offer on your Valrico home in 24 hours. No repairs, no showings, no commission. Close in 7-14 days. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-cash-offer/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
};

export default function CashOfferLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
