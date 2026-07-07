import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buckhorn Bloomingdale Homes for Sale — Valrico",
  description:
    "Buckhorn Bloomingdale homes for sale in Valrico FL 33596. Most affordable in Bloomingdale HS zone, $300K-$420K. ~60 homes, mature trees. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/buckhorn-bloomingdale/" },
  openGraph: {
    title: "Buckhorn Bloomingdale Homes for Sale — Valrico",
    description:
      "Affordable entry into Bloomingdale HS zone in south Valrico. $300K-$420K. ~60 homes, mature oaks, minimal HOA. Best value in 33596. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/buckhorn-bloomingdale/",
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

export default function BuckhornBloomingdaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
