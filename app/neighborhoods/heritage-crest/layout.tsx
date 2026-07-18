import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heritage Crest Homes for Sale — Valrico FL 33594",
  description:
    "Heritage Crest homes for sale in Valrico FL 33594. New construction, $400K-$500K, Newsome HS zone. Modern energy-efficient floor plans. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/heritage-crest/" },
  openGraph: {
    title: "Heritage Crest Homes for Sale — Valrico FL 33594",
    description:
      "New construction community in north Valrico. $400K-$500K. Newsome HS zone. Modern builder homes with open floor plans and energy-efficient construction. Barrett Henry, REALTOR® at REMAX Collective.",
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
    card: "summary_large_image",
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
