import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buckhorn Springs Manor Homes for Sale — Valrico FL 33594",
  description:
    "Buckhorn Springs Manor homes for sale in Valrico FL 33594. Newsome HS zone, $350K-$475K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/buckhorn-springs-manor/" },
  openGraph: {
    title: "Buckhorn Springs Manor Homes for Sale — Valrico FL 33594",
    description:
      "Buckhorn Springs Manor homes for sale in Valrico FL 33594. Newsome HS zone, $350K-$475K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/buckhorn-springs-manor/",
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

export default function BuckhornSpringsManorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
