import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Hill Homes for Sale — Valrico FL 33594 | Barrett Henry, REALTOR®",
  description:
    "Diamond Hill homes for sale in Valrico FL 33594. Gated golf community, $350K-$550K, school zone varies by section. Resort amenities, Olympic pool, golf course. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/diamond-hill/" },
  openGraph: {
    title: "Diamond Hill Homes for Sale — Valrico FL 33594 | Barrett Henry",
    description:
      "Gated golf community in Valrico. $350K-$550K. Resort-style amenities including Olympic pool, fitness center, and clubhouse. Diamond Hill Golf Club. Barrett Henry, REALTOR® at REMAX Collective.",
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
