import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crosby Crossings Homes for Sale — Valrico FL 33594",
  description:
    "Crosby Crossings homes for sale in Valrico FL 33594. Newsome HS zone, $400K-$550K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/crosby-crossings/" },
  openGraph: {
    title: "Crosby Crossings Homes for Sale — Valrico FL 33594",
    description:
      "Crosby Crossings homes for sale in Valrico FL 33594. Newsome HS zone, $400K-$550K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/crosby-crossings/",
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

export default function CrosbyCrossingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
