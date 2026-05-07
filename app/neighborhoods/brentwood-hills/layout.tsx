import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brentwood Hills Homes for Sale — Valrico FL 33596",
  description:
    "Brentwood Hills homes for sale in Valrico FL 33596. Bloomingdale HS zone, $350K-$450K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/brentwood-hills/" },
  openGraph: {
    title: "Brentwood Hills Homes for Sale — Valrico FL 33596",
    description:
      "Brentwood Hills homes for sale in Valrico FL 33596. Bloomingdale HS zone, $350K-$450K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
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
