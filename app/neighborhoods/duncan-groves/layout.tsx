import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duncan Groves Homes for Sale - Valrico FL 33596",
  description:
    "Duncan Groves homes for sale in Valrico FL 33596. Established subdivision, $350K-$450K, Bloomingdale HS zone. Near Lithia Springs Park. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/duncan-groves/" },
  openGraph: {
    title: "Duncan Groves Homes for Sale - Valrico FL 33596",
    description:
      "Established subdivision in south Valrico near parks and outdoor recreation. $350K-$450K. Bloomingdale HS zone. Affordable entry into south Valrico. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/duncan-groves/",
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

export default function DuncanGrovesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
