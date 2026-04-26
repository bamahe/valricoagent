import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Investment Properties — Rental & Multi-Family Opportunities',
  description: 'Explore Valrico FL investment properties including rental homes, townhomes, and multi-family opportunities. Average rents, cap rates, best neighborhoods for investors. Barrett Henry, REALTOR®, REMAX Collective.',
};

export default function InvestmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
