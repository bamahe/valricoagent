import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buckhorn Springs Manor Homes for Sale — Valrico FL 33596 | Barrett Henry, REALTOR®",
  description:
    "Buckhorn Springs Manor homes for sale in Valrico FL 33596. Established subdivision, $350K-$550K, Newsome HS zone. Near Buckhorn Springs Golf Club. Neighborhood guide with pricing, schools, HOA, and comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/buckhorn-springs-manor/" },
  openGraph: {
    title: "Buckhorn Springs Manor Homes for Sale — Valrico FL 33596 | Barrett Henry",
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
    card: "summary",
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
