import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico Oaks Homes for Sale - Valrico FL 33594",
  description:
    "Valrico Oaks homes for sale in Valrico FL 33594. Newsome HS zone, $350K-$500K. Established homes without CDD fees. Search listings today. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/valrico-oaks/" },
  openGraph: {
    title: "Valrico Oaks Homes for Sale - Valrico FL 33594",
    description:
      "Value entry to the Newsome HS zone in Valrico 33594. $350K-$500K. Established homes without CDD fees. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/valrico-oaks/",
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

export default function ValricoOaksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
