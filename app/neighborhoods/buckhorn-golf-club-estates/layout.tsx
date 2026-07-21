import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buckhorn Golf Club Estates Homes for Sale - Valrico FL 33596",
  description:
    "Buckhorn Golf Club Estates homes for sale in Valrico FL 33596. Golf course community, $350K-$550K, Newsome HS zone. Call Barrett Henry (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/buckhorn-golf-club-estates/" },
  openGraph: {
    title: "Buckhorn Golf Club Estates Homes for Sale - Valrico FL 33596",
    description:
      "Buckhorn Golf Club Estates homes for sale in Valrico FL 33596. Newsome HS zone, $350K-$550K. Barrett Henry, REALTOR® at REMAX Collective. (813) 733-7907.",
    url: "https://valricoagent.com/neighborhoods/buckhorn-golf-club-estates/",
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

export default function BuckhornGolfClubEstatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
