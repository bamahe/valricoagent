import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Hill Homes for Sale — Valrico FL 33594",
  description:
    "Diamond Hill homes for sale in Valrico FL 33594. Newsome HS zone, $600K-$800K+. Neighborhood guide with pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/diamond-hill/" },
  openGraph: {
    title: "Diamond Hill Homes for Sale — Valrico FL 33594",
    description:
      "Diamond Hill homes for sale in Valrico FL 33594. Newsome HS zone, $600K-$800K+. Neighborhood guide with pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/diamond-hill/",
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

export default function DiamondHillLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
