import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arista Homes for Sale — Valrico FL 33596",
  description:
    "Arista homes for sale in Valrico FL 33596. Newsome HS zone, $450K-$600K. Neighborhood guide with pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/neighborhoods/arista/" },
  openGraph: {
    title: "Arista Homes for Sale — Valrico FL 33596",
    description:
      "Arista homes for sale in Valrico FL 33596. Newsome HS zone, $450K-$600K. Neighborhood guide with pricing, schools, and HOA details. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/arista/",
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

export default function AristaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
