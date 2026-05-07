import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico vs Riverview FL — Prices, New Construction & Growth Compared",
  description:
    "Valrico vs Riverview FL comparison — home prices, new builds, schools, flood zones, and commute to Tampa. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/valrico-vs-riverview/" },
  openGraph: {
    title: "Valrico vs Riverview FL — Prices, New Construction & Growth Compared",
    description:
      "Valrico vs Riverview FL comparison — home prices, new builds, schools, flood zones, and commute to Tampa. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-vs-riverview/",
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

export default function ValricoVsRiverviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
