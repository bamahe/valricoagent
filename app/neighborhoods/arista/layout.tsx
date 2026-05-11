import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arista Homes for Sale — Valrico FL 33594 | Barrett Henry, REALTOR®",
  description:
    "Arista homes for sale in Valrico FL 33594. Gated community, $425K-$575K, Newsome HS zone. Neighborhood guide with pricing, schools, HOA, commute times, and comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/arista/" },
  openGraph: {
    title: "Arista Homes for Sale — Valrico FL 33594 | Barrett Henry",
    description:
      "Gated community in north Valrico. $425K-$575K. Newsome HS zone. Newer construction between Diamond Hill Golf Course and Lake Valrico. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/arista/",
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

export default function AristaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
