import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Northwood Estates Homes for Sale - Valrico FL",
  description:
    "Northwood Estates homes for sale in Valrico FL 33594. Boutique community, $425K-$575K, Newsome HS zone, no CDD fees. Larger lots. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/northwood-estates/" },
  openGraph: {
    title: "Northwood Estates Homes for Sale - Valrico FL",
    description:
      "Boutique community with larger lots in north Valrico. $425K-$575K. Newsome HS zone. No CDD fees. Premium finishes by WestBay. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/northwood-estates/",
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

export default function NorthwoodEstatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
