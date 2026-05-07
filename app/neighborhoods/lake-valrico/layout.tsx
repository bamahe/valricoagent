import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lake Valrico Homes for Sale — Valrico FL 33596",
  description:
    "Lake Valrico homes for sale in Valrico FL 33596. Bloomingdale HS zone, $375K-$525K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/lake-valrico/" },
  openGraph: {
    title: "Lake Valrico Homes for Sale — Valrico FL 33596",
    description:
      "Lake Valrico homes for sale in Valrico FL 33596. Bloomingdale HS zone, $375K-$525K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
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
