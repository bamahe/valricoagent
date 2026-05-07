import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duncan Groves Homes for Sale — Valrico FL 33594",
  description:
    "Duncan Groves homes for sale in Valrico FL 33594. Bloomingdale HS zone, $350K-$475K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/duncan-groves/" },
  openGraph: {
    title: "Duncan Groves Homes for Sale — Valrico FL 33594",
    description:
      "Duncan Groves homes for sale in Valrico FL 33594. Bloomingdale HS zone, $350K-$475K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/duncan-groves/",
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

export default function DuncanGrovesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
