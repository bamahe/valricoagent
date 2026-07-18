import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico vs Brandon FL — Home Prices, Schools & Lifestyle Compared",
  description:
    "Compare Valrico and Brandon FL side by side — median prices, school ratings, commute times, taxes, and lifestyle. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/valrico-vs-brandon/" },
  openGraph: {
    title: "Valrico vs Brandon FL — Home Prices, Schools & Lifestyle Compared",
    description:
      "Compare Valrico and Brandon FL side by side — median prices, school ratings, commute times, taxes, and lifestyle. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-vs-brandon/",
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

export default function ValricoVsBrandonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
