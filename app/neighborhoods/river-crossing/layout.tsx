import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "River Crossing Homes for Sale - Valrico FL 33596",
  description:
    "River Crossing homes for sale in Valrico FL 33596. Waterfront community near the Alafia River, $375K-$550K, Newsome HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/river-crossing/" },
  openGraph: {
    title: "River Crossing Homes for Sale - Valrico FL 33596",
    description:
      "Waterfront community near the Alafia River in Valrico. $375K-$550K. Newsome HS zone. Nature views and conservation areas. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/river-crossing/",
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

export default function RiverCrossingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
