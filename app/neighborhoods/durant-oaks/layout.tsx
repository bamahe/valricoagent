import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Durant Oaks Homes for Sale - Valrico FL 33596",
  description:
    "Durant Oaks homes for sale in Valrico FL 33596. Custom-built homes, $375K-$525K, Bloomingdale HS zone. Mature landscaping, pool views. Call Barrett Henry (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/durant-oaks/" },
  openGraph: {
    title: "Durant Oaks Homes for Sale - Valrico FL 33596",
    description:
      "Durant Oaks custom homes for sale in Valrico FL 33596. $375K-$525K, Bloomingdale HS zone. Barrett Henry, REALTOR® at REMAX Collective. (813) 733-7907.",
    url: "https://valricoagent.com/neighborhoods/durant-oaks/",
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

export default function DurantOaksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
