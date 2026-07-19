import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shetland Ridge Homes for Sale - Valrico FL 33596",
  description:
    "Shetland Ridge homes for sale in Valrico FL 33596. Established neighborhood, $400K-$550K, Bloomingdale HS zone. Spacious lots with mature trees. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/shetland-ridge/" },
  openGraph: {
    title: "Shetland Ridge Homes for Sale - Valrico FL 33596",
    description:
      "Established neighborhood in south Valrico. $400K-$550K. Bloomingdale HS zone. Spacious lots with mature trees along the Bloomingdale Avenue corridor. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/shetland-ridge/",
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

export default function ShetlandRidgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
