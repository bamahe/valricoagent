import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Cash Offer for Your Valrico Home — Sell Fast, No Repairs',
  description: 'Get a cash offer on your Valrico home in 24 hours. No repairs, no showings, no commission. Close in 7-14 days. Barrett Henry, REMAX Collective.',
};

export default function CashOfferLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
