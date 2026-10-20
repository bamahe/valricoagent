import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloomingdale East Homes for Sale - Valrico FL",
  description:
    "Bloomingdale East homes for sale in Valrico FL 33596. Eastern Bloomingdale, $350K-$500K, Bloomingdale HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/bloomingdale-east/" },
  openGraph: {
    title: "Bloomingdale East Homes for Sale - Valrico FL",
    description:
      "Eastern edge of Bloomingdale in south Valrico. $350K-$500K. Bloomingdale HS zone. Quarter-acre to half-acre lots, 1980s-1990s construction. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/bloomingdale-east/",
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

export default function BloomingdaleEastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
