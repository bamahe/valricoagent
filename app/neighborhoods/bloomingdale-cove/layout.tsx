import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloomingdale Cove Homes for Sale - Valrico FL",
  description:
    "Bloomingdale Cove homes for sale in Valrico FL 33596. Sub-neighborhood of Bloomingdale, $375K-$500K, Bloomingdale HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/bloomingdale-cove/" },
  openGraph: {
    title: "Bloomingdale Cove Homes for Sale - Valrico FL",
    description:
      "Sub-neighborhood within Bloomingdale in south Valrico. $375K-$500K. Bloomingdale HS zone. Updated interiors, walkable to shopping. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/bloomingdale-cove/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [
      {
        url: "https://valricoagent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barrett Henry, REALTOR - Valrico FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function BloomingdaleCoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
