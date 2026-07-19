import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buckhorn Springs Manor Homes - Valrico FL",
  description:
    "Buckhorn Springs Manor homes for sale in Valrico FL 33596. Established subdivision, $350K-$550K, Newsome HS zone. Near Buckhorn Springs Golf Club. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/buckhorn-springs-manor/" },
  openGraph: {
    title: "Buckhorn Springs Manor Homes - Valrico FL",
    description:
      "Established subdivision near Buckhorn Springs Golf Club in south Valrico. $350K-$550K. Newsome HS zone. Larger lots with mature landscaping. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/buckhorn-springs-manor/",
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

export default function BuckhornSpringsManorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
