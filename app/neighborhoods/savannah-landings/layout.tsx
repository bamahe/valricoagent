import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savannah Landings Homes for Sale — Valrico FL",
  description:
    "Savannah Landings townhomes for sale in Valrico FL 33596. Affordable community, $300K-$375K, Bloomingdale HS zone. HOA-maintained exteriors. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/savannah-landings/" },
  openGraph: {
    title: "Savannah Landings Homes for Sale — Valrico FL",
    description:
      "Affordable townhome community in south Valrico. $300K-$375K. Bloomingdale HS zone. HOA-maintained exteriors, community amenities. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/savannah-landings/",
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

export default function SavannahLandingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
