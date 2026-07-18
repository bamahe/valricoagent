import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crestwood Estates Homes for Sale — Valrico FL",
  description:
    "Crestwood Estates homes for sale in Valrico FL 33596. Premium estates, $500K-$900K+, Bloomingdale HS zone. No CDD fees, custom builds. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/crestwood-estates/" },
  openGraph: {
    title: "Crestwood Estates Homes for Sale — Valrico FL",
    description:
      "Premium estate neighborhood in south Valrico. $500K-$900K+. Bloomingdale HS zone. Estate-sized lots, custom builds, no CDD fees. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/crestwood-estates/",
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

export default function CrestwoodEstatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
