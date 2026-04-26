import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bloomingdale Homes for Sale | Valrico FL 33596',
  description: 'Search Bloomingdale homes for sale in Valrico FL 33596. 5,200+ homes across 32+ sub-neighborhoods. Bloomingdale HS zone, $300K-$500K. Barrett Henry, Valrico Realtor, RE/MAX Collective.',
};

export default function BloomingdaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
