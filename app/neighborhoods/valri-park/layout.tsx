import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valri Park Homes for Sale — Valrico FL 33594",
  description:
    "Valri Park homes for sale in Valrico FL 33594. Bloomingdale HS zone, $300K-$425K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/valri-park/" },
  openGraph: {
    title: "Valri Park Homes for Sale — Valrico FL 33594",
    description:
      "Valri Park homes for sale in Valrico FL 33594. Bloomingdale HS zone, $300K-$425K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/valri-park/",
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

export default function ValriParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
