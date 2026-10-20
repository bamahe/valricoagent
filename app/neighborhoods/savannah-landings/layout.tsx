import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Savannah Landings Homes for Sale - Valrico FL",
  description:
    "Savannah Landings townhomes for sale in Valrico FL 33596. Affordable community, $300K-$375K, Bloomingdale HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/savannah-landings/" },
  openGraph: {
    title: "Savannah Landings Homes for Sale - Valrico FL",
    description:
      "Affordable townhome community in south Valrico. $300K-$375K. Bloomingdale HS zone. HOA-maintained exteriors, community amenities. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/savannah-landings/",
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

export default function SavannahLandingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
