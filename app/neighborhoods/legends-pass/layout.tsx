import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legends Pass Homes for Sale — Valrico FL 33594",
  description:
    "Legends Pass homes for sale in Valrico FL 33594. Newsome HS zone, $375K-$500K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/legends-pass/" },
  openGraph: {
    title: "Legends Pass Homes for Sale — Valrico FL 33594",
    description:
      "Legends Pass homes for sale in Valrico FL 33594. Newsome HS zone, $375K-$500K. Pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/legends-pass/",
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

export default function LegendsPassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
