import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico vs Brandon FL - Prices, Schools & Lifestyle",
  description:
    "Compare Valrico and Brandon FL side by side, median prices, school ratings, commute times, taxes, and lifestyle. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/valrico-vs-brandon/" },
  openGraph: {
    title: "Valrico vs Brandon FL - Prices, Schools & Lifestyle",
    description:
      "Compare Valrico and Brandon FL side by side, median prices, school ratings, commute times, taxes, and lifestyle. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-vs-brandon/",
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

export default function ValricoVsBrandonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
