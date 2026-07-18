import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buckhorn Preserve Homes for Sale — Valrico FL",
  description:
    "Buckhorn Preserve homes for sale in Valrico FL 33596. Gated community, $350K-$500K, Newsome HS zone. Park, playground, and walking trails. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/buckhorn-preserve/" },
  openGraph: {
    title: "Buckhorn Preserve Homes for Sale — Valrico FL",
    description:
      "Gated community in south Valrico Buckhorn corridor. $350K-$500K. Newsome HS zone. Community park with playground, disc golf, and walking trails. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/buckhorn-preserve/",
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

export default function BuckhornPreserveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
