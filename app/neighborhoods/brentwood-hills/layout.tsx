import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brentwood Hills Homes for Sale — Valrico FL 33594/33596 | Barrett Henry, REALTOR®",
  description:
    "Brentwood Hills homes for sale in Valrico FL (33594/33596). Community pool, sidewalks, $340K-$475K, Bloomingdale HS zone. Family neighborhood with walkable shopping. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/brentwood-hills/" },
  openGraph: {
    title: "Brentwood Hills Homes for Sale — Valrico FL | Barrett Henry",
    description:
      "Family community straddling 33594/33596 in Valrico. $340K-$475K. Bloomingdale HS zone. Community pool, sidewalks, walkable to Bloomingdale Ave shopping. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/brentwood-hills/",
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

export default function BrentwoodHillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
