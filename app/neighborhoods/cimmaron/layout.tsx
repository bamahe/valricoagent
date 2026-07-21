import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cimmaron Homes for Sale - Valrico FL 33594",
  description:
    "Cimmaron homes for sale in Valrico FL 33594. Exclusive 19-home community, no HOA, $450K-$650K, Newsome HS zone. Call Barrett Henry (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/cimmaron/" },
  openGraph: {
    title: "Cimmaron Homes for Sale - Valrico FL 33594",
    description:
      "Cimmaron homes for sale in Valrico FL 33594. Custom homes on wooded lots near Buckhorn Springs Golf. No HOA, $450K-$650K. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/cimmaron/",
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

export default function CimmaronLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
