import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twin Lakes Homes for Sale — Valrico FL 33596",
  description:
    "Twin Lakes homes for sale in Valrico FL 33596. Bloomingdale HS zone, $350K-$475K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/twin-lakes/" },
  openGraph: {
    title: "Twin Lakes Homes for Sale — Valrico FL 33596",
    description:
      "Twin Lakes homes for sale in Valrico FL 33596. Bloomingdale HS zone, $350K-$475K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
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
