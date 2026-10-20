import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Hill Homes for Sale - Valrico FL 33594",
  description:
    "Diamond Hill homes for sale in Valrico FL 33594. Golf-adjacent neighborhood with large lots and no HOA options, $350K-$550K. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/diamond-hill/" },
  openGraph: {
    title: "Diamond Hill Homes for Sale - Valrico FL 33594",
    description:
      "Golf-adjacent neighborhood in Valrico with large lots and no HOA options. $350K-$550K. Olympic pool, fitness center, and clubhouse near Diamond Hill Golf Club. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/diamond-hill/",
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

export default function DiamondHillLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
