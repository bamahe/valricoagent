import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brentwood Hills Homes for Sale - Valrico FL",
  description:
    "Brentwood Hills homes for sale in Valrico FL. Community pool, sidewalks, $340K-$475K, Bloomingdale HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/brentwood-hills/" },
  openGraph: {
    title: "Brentwood Hills Homes for Sale - Valrico FL",
    description:
      "Family community straddling 33594/33596 in Valrico. $340K-$475K. Bloomingdale HS zone. Community pool, sidewalks, walkable to Bloomingdale Ave shopping. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/brentwood-hills/",
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

export default function BrentwoodHillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
