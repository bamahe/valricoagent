import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lakemont Homes for Sale — Valrico FL 33596 | Barrett Henry, REALTOR®",
  description:
    "Lakemont homes for sale in Valrico FL 33596. Established neighborhood, $350K-$475K, Bloomingdale HS zone. Lake-influenced lots, mature landscaping. Neighborhood guide with pricing, schools, HOA, and comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/lakemont/" },
  openGraph: {
    title: "Lakemont Homes for Sale — Valrico FL 33596 | Barrett Henry",
    description:
      "Established single-family neighborhood in south Valrico. $350K-$475K. Bloomingdale HS zone. Lake-influenced lots and mature oak canopy. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/lakemont/",
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

export default function LakemontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
