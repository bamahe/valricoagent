import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloomingdale Oaks Homes for Sale - Valrico FL",
  description:
    "Bloomingdale Oaks homes for sale in Valrico FL 33596. Top Bloomingdale sub-neighborhood, $350K-$475K, Bloomingdale HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/bloomingdale-oaks/" },
  openGraph: {
    title: "Bloomingdale Oaks Homes for Sale - Valrico FL",
    description:
      "Top Bloomingdale sub-neighborhood in south Valrico. $350K-$475K. Bloomingdale HS zone. Sidewalks, pool homes, strong name recognition. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/bloomingdale-oaks/",
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

export default function BloomingdaleOaksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
