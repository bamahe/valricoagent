import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico vs Riverview FL - Prices, Growth & New Builds",
  description:
    "Valrico vs Riverview FL comparison, home prices, new builds, schools, flood zones, and commute to Tampa. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/valrico-vs-riverview/" },
  openGraph: {
    title: "Valrico vs Riverview FL - Prices, Growth & New Builds",
    description:
      "Valrico vs Riverview FL comparison, home prices, new builds, schools, flood zones, and commute to Tampa. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-vs-riverview/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [
      {
        url: "https://valricoagent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barrett Henry, REALTOR - Valrico FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function ValricoVsRiverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
