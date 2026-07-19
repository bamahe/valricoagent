import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico Forest Homes for Sale - Valrico FL 33594",
  description:
    "Valrico Forest homes for sale in Valrico FL 33594. Wooded lots, $400K-$525K, Newsome HS zone. Spacious tree-canopied lots with natural privacy. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/valrico-forest/" },
  openGraph: {
    title: "Valrico Forest Homes for Sale - Valrico FL 33594",
    description:
      "Tree-canopied neighborhood in north Valrico. $400K-$525K. Newsome HS zone. Spacious wooded lots with natural privacy. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/valrico-forest/",
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

export default function ValricoForestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
