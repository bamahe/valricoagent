import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Housing Market Q1 2026: Prices, Trends, and What It Means',
  description: 'Valrico FL housing market Q1 2026 report. Median prices ~$415K, 30-55 days on market, 33594 vs 33596 breakdown. Barrett Henry, Valrico Realtor, RE/MAX Collective.',
};

export default function MarketReportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
