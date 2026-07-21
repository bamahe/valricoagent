import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Copper Ridge Homes for Sale - Valrico FL 33596",
  description:
    "Copper Ridge homes for sale in Valrico FL 33596. HOA community, $375K-$525K, Newsome HS zone. Conservation lots, built 1997-2004. Call Barrett Henry (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/copper-ridge/" },
  openGraph: {
    title: "Copper Ridge Homes for Sale - Valrico FL 33596",
    description:
      "Copper Ridge homes for sale in Valrico FL 33596. HOA community near FishHawk, $375K-$525K, Newsome HS zone. Barrett Henry, REALTOR® at REMAX Collective. (813) 733-7907.",
    url: "https://valricoagent.com/neighborhoods/copper-ridge/",
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

export default function CopperRidgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
