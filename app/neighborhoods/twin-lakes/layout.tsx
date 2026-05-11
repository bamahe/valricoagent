import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twin Lakes Homes for Sale — Valrico FL 33596 | Barrett Henry, REALTOR®",
  description:
    "Twin Lakes homes for sale in Valrico FL 33596. Mix of older and updated homes, $375K-$475K, Bloomingdale HS zone. Pricing, schools, HOA, commute times, and neighborhood comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/twin-lakes/" },
  openGraph: {
    title: "Twin Lakes Homes for Sale — Valrico FL 33596 | Barrett Henry",
    description:
      "Mixed-era neighborhood in south Valrico. $375K-$475K. Bloomingdale HS zone. Blend of original and renovated homes with strong value. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/twin-lakes/",
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

export default function TwinLakesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
