import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bloomingdale Homes for Sale | Valrico FL 33596',
  description: 'Search Bloomingdale homes for sale in Valrico FL 33596. 5,200+ homes across 32+ sub-neighborhoods. Bloomingdale HS zone, $300K-$500K. Barrett Henry, Valrico Realtor, RE/MAX Collective.',
  alternates: { canonical: "/neighborhoods/bloomingdale/" },
  openGraph: {
    title: "Bloomingdale Homes for Sale | Valrico FL 33596",
    description: "Search Bloomingdale homes for sale in Valrico FL 33596. 5,200+ homes across 32+ sub-neighborhoods. Bloomingdale HS zone, $300K-$500K. Barrett Henry, Valrico Realtor, RE/MAX Collective.",
    url: "https://valricoagent.com/neighborhoods/bloomingdale/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
};

export default function BloomingdaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
