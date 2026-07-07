import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lake Valrico Homes for Sale — Valrico FL 33594",
  description:
    "Lake Valrico area homes for sale in Valrico FL 33594. Waterfront and lakefront properties, $350K-$500K, large lots, no HOA. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/lake-valrico/" },
  openGraph: {
    title: "Lake Valrico Homes for Sale — Valrico FL 33594",
    description:
      "Waterfront and lakefront properties in north Valrico. $350K-$500K. Large lots, no HOA restrictions. Fishing, kayaking, and privacy. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/lake-valrico/",
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

export default function LakeValricoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
