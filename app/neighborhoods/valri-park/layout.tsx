import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valri Park Homes for Sale — Valrico FL 33594 | Barrett Henry, REALTOR®",
  description:
    "Valri Park homes for sale in Valrico FL 33594. Most affordable neighborhood in 33594, $280K-$375K. Pricing, schools, HOA, commute times, and neighborhood comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/valri-park/" },
  openGraph: {
    title: "Valri Park Homes for Sale — Valrico FL 33594 | Barrett Henry",
    description:
      "Most affordable neighborhood in Valrico 33594. $280K-$375K. Practical homes with renovation potential. Great entry point to the Valrico market. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/valri-park/",
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

export default function ValriParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
