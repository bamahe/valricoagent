import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eagles Landing Homes for Sale - Valrico FL 33596",
  description:
    "Eagles Landing homes for sale in Valrico FL 33596. Newer construction community near Boyette Road, $375K-$525K, Newsome HS zone. Call (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/eagles-landing/" },
  openGraph: {
    title: "Eagles Landing Homes for Sale - Valrico FL 33596",
    description:
      "Newer construction community near Boyette Road in Valrico. $375K-$525K. Newsome HS zone. Modern floor plans and community amenities. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/eagles-landing/",
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

export default function EaglesLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
