import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bent Tree Estates Homes for Sale — Valrico FL 33596",
  description:
    "Bent Tree Estates homes for sale in Valrico FL 33596. Newsome HS zone, $400K-$550K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/bent-tree-estates/" },
  openGraph: {
    title: "Bent Tree Estates Homes for Sale — Valrico FL 33596",
    description:
      "Bent Tree Estates homes for sale in Valrico FL 33596. Newsome HS zone, $400K-$550K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/bent-tree-estates/",
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

export default function BentTreeEstatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
