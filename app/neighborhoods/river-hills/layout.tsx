import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "River Hills Homes for Sale — Valrico FL 33596 | Barrett Henry, REALTOR®",
  description:
    "River Hills homes for sale in Valrico FL 33596. Premier gated golf community, $400K-$800K+, Bloomingdale HS zone. Guard gate, country club, Alafia River trails. Neighborhood guide with pricing, schools, HOA, and comparisons. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/river-hills/" },
  openGraph: {
    title: "River Hills Homes for Sale — Valrico FL 33596 | Barrett Henry",
    description:
      "Valrico's premier gated golf community. $400K-$800K+. Bloomingdale HS zone. 24/7 guard gate, 18-hole championship course, country club, Alafia River trails. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/river-hills/",
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

export default function RiverHillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
