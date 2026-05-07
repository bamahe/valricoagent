import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buckhorn Homes for Sale — Valrico FL 33594",
  description:
    "Buckhorn homes for sale in Valrico FL 33594. Newsome HS zone, $350K-$500K. Neighborhood guide with pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/buckhorn/" },
  openGraph: {
    title: "Buckhorn Homes for Sale — Valrico FL 33594",
    description:
      "Buckhorn homes for sale in Valrico FL 33594. Newsome HS zone, $350K-$500K. Neighborhood guide with pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/buckhorn/",
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

export default function BuckhornLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
