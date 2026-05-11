import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "River Hills Masters Homes for Sale — Valrico FL 33596 | Barrett Henry, REALTOR®",
  description:
    "River Hills Masters homes for sale in Valrico FL 33596. Guard-gated golf community section, $350K-$550K, Bloomingdale HS zone. Neighborhood guide with pricing, schools, HOA, commute times, and comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/river-hills-masters/" },
  openGraph: {
    title: "River Hills Masters Homes for Sale — Valrico FL 33596 | Barrett Henry",
    description:
      "Section within River Hills gated golf community. $350K-$550K. Bloomingdale HS zone. Guard gate, trails, country club access at a lower price point. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/river-hills-masters/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [
      {
        url: "https://valricoagent.com/barrett-henry.png",
        width: 600,
        height: 600,
        alt: "Barrett Henry, REALTOR - Valrico FL",
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function RiverHillsMastersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
