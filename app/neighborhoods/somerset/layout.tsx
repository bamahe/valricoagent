import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Somerset Homes for Sale - Valrico FL 33594",
  description:
    "Somerset homes for sale in Valrico FL 33594. Established community with mature trees, $300K-$450K, Bloomingdale HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/somerset/" },
  openGraph: {
    title: "Somerset Homes for Sale - Valrico FL 33594",
    description:
      "Established community in Valrico with mature trees and affordable pricing. $300K-$450K. Bloomingdale HS zone. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/somerset/",
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

export default function SomersetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
