import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloomingdale Homes for Sale — Valrico FL 33596",
  description:
    "Bloomingdale homes for sale in Valrico FL 33596. 5,200+ homes, $300K-$500K, Bloomingdale HS zone. Largest planned community in south Valrico. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/bloomingdale/" },
  openGraph: {
    title: "Bloomingdale Homes for Sale — Valrico FL 33596",
    description:
      "5,200+ homes across 32+ sub-neighborhoods in south Valrico. $300K-$500K. Bloomingdale HS zone. Mature landscaping, mixed HOA options. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/bloomingdale/",
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
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function BloomingdaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
