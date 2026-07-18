import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buckhorn Homes for Sale — Valrico FL 33596",
  description:
    "Buckhorn homes for sale in Valrico FL 33596. Boyette corridor, $350K-$500K, Newsome HS zone. Most affordable entry into Newsome High. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/buckhorn/" },
  openGraph: {
    title: "Buckhorn Homes for Sale — Valrico FL 33596",
    description:
      "Boyette corridor in south Valrico. $350K-$500K. Newsome HS zone. Affordable alternative to FishHawk with no CDD in many sections. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/buckhorn/",
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

export default function BuckhornLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
