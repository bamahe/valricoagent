import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lithia Springs Homes for Sale - Valrico FL",
  description:
    "Lithia Springs homes for sale in Valrico FL. Newsome HS zone, $375K-$525K. Nature-adjacent community near Lithia Springs Park. Call Barrett Henry (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/lithia-springs/" },
  openGraph: {
    title: "Lithia Springs Homes for Sale - Valrico FL",
    description:
      "Lithia Springs homes for sale in Valrico FL. Newsome HS zone, $375K-$525K. Barrett Henry, REALTOR® at REMAX Collective. (813) 733-7907.",
    url: "https://valricoagent.com/neighborhoods/lithia-springs/",
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

export default function LithiaSpringsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
