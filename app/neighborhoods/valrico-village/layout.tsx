import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico Village Homes for Sale - Valrico FL",
  description:
    "Valrico Village homes for sale in Valrico FL. Bloomingdale HS zone, $280K-$400K. Established community with mature landscaping. Call Barrett Henry (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/valrico-village/" },
  openGraph: {
    title: "Valrico Village Homes for Sale - Valrico FL",
    description:
      "Valrico Village homes for sale in Valrico FL. Bloomingdale HS zone, $280K-$400K. Barrett Henry, REALTOR® at REMAX Collective. (813) 733-7907.",
    url: "https://valricoagent.com/neighborhoods/valrico-village/",
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

export default function ValricoVillageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
