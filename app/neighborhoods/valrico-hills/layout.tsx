import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico Hills Homes for Sale — Valrico FL 33594 | Barrett Henry, REALTOR®",
  description:
    "Valrico Hills homes for sale in Valrico FL 33594. Established mid-range neighborhood, $325K-$425K. Pricing, schools, HOA, commute times, and neighborhood comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/valrico-hills/" },
  openGraph: {
    title: "Valrico Hills Homes for Sale — Valrico FL 33594 | Barrett Henry",
    description:
      "Established mid-range neighborhood in Valrico 33594. $325K-$425K. Solid homes with mature landscaping and convenient commute access. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/valrico-hills/",
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

export default function ValricoHillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
