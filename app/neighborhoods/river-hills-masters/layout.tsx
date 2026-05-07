import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "River Hills Masters Homes for Sale — Valrico FL 33596",
  description:
    "River Hills Masters homes for sale in Valrico FL 33596. Newsome HS zone, $450K-$700K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/river-hills-masters/" },
  openGraph: {
    title: "River Hills Masters Homes for Sale — Valrico FL 33596",
    description:
      "River Hills Masters homes for sale in Valrico FL 33596. Newsome HS zone, $450K-$700K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/river-hills-masters/",
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

export default function RiverHillsMastersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
