import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bent Tree Estates Homes for Sale - Valrico FL",
  description:
    "Bent Tree Estates homes for sale in Valrico FL 33596. Established neighborhood, $375K-$500K, Bloomingdale HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/bent-tree-estates/" },
  openGraph: {
    title: "Bent Tree Estates Homes for Sale - Valrico FL",
    description:
      "Established subdivision in south Valrico. $375K-$500K. Bloomingdale HS zone. Mature tree canopy, larger lots, 1990s concrete block construction. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/bent-tree-estates/",
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

export default function BentTreeEstatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
