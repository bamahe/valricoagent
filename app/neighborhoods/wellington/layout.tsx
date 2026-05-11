import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellington Homes for Sale — Valrico FL 33596 | Barrett Henry, REALTOR®",
  description:
    "Wellington homes for sale in Valrico FL 33596. Established neighborhood, $375K-$475K, Bloomingdale HS zone. Generous lots with mature trees. Pricing, schools, HOA, commute times, and comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/wellington/" },
  openGraph: {
    title: "Wellington Homes for Sale — Valrico FL 33596 | Barrett Henry",
    description:
      "Established neighborhood in south Valrico. $375K-$475K. Bloomingdale HS zone. Generous lots with mature landscaping. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/wellington/",
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

export default function WellingtonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
