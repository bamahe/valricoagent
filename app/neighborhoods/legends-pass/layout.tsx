import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legends Pass Homes for Sale — Valrico FL 33594",
  description:
    "Legends Pass homes for sale in Valrico FL 33594. Newer construction, $400K-$550K, Newsome HS zone. Modern floor plans near Diamond Hill corridor. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/legends-pass/" },
  openGraph: {
    title: "Legends Pass Homes for Sale — Valrico FL 33594",
    description:
      "Newer construction community in north Valrico. $400K-$550K. Newsome HS zone. Modern floor plans near Diamond Hill corridor. Barrett Henry, REALTOR® at REMAX Collective.",
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
    card: "summary_large_image",
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
