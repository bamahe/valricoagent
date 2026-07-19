import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kings Mill Homes for Sale - Valrico FL 33596",
  description:
    "Kings Mill townhomes for sale in Valrico FL 33596. Gated community, $275K-$350K, Bloomingdale HS zone. Most affordable Valrico entry point. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/kings-mill/" },
  openGraph: {
    title: "Kings Mill Homes for Sale - Valrico FL 33596",
    description:
      "Gated townhome community in south Valrico. $275K-$350K. Bloomingdale HS zone. Most affordable entry into the Valrico market. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/kings-mill/",
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

export default function KingsMillLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
