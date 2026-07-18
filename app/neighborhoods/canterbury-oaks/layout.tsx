import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Canterbury Oaks Homes for Sale — Valrico FL",
  description:
    "Canterbury Oaks homes for sale in Valrico FL 33596. Community pool and tennis, $350K-$475K, Bloomingdale HS zone. Established neighborhood. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/canterbury-oaks/" },
  openGraph: {
    title: "Canterbury Oaks Homes for Sale — Valrico FL",
    description:
      "Established community with pool and tennis in south Valrico. $350K-$475K. Bloomingdale HS zone. Mid-1990s to 2000s construction with HOA-maintained amenities. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/canterbury-oaks/",
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

export default function CanterburyOaksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
