import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heritage Crest Homes for Sale — Valrico FL 33594",
  description:
    "Heritage Crest homes for sale in Valrico FL 33594. Newsome HS zone, $400K-$550K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/heritage-crest/" },
  openGraph: {
    title: "Heritage Crest Homes for Sale — Valrico FL 33594",
    description:
      "Heritage Crest homes for sale in Valrico FL 33594. Newsome HS zone, $400K-$550K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/heritage-crest/",
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

export default function HeritageCrestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
