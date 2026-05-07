import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico Forest Homes for Sale — Valrico FL 33594",
  description:
    "Valrico Forest homes for sale in Valrico FL 33594. Bloomingdale HS zone, $325K-$450K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/valrico-forest/" },
  openGraph: {
    title: "Valrico Forest Homes for Sale — Valrico FL 33594",
    description:
      "Valrico Forest homes for sale in Valrico FL 33594. Bloomingdale HS zone, $325K-$450K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/valrico-forest/",
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

export default function ValricoForestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
