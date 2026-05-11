import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crosby Crossings Homes for Sale — Valrico FL 33596 | Barrett Henry, REALTOR®",
  description:
    "Crosby Crossings homes for sale in Valrico FL 33596. Newer construction, $370K-$475K, Bloomingdale HS zone. Modern floor plans with contemporary finishes. Barrett Henry, REMAX Collective. (813) 733-7907.",
  alternates: { canonical: "/neighborhoods/crosby-crossings/" },
  openGraph: {
    title: "Crosby Crossings Homes for Sale — Valrico FL 33596 | Barrett Henry",
    description:
      "Newer construction community in south Valrico. $370K-$475K. Bloomingdale HS zone. Open-concept floor plans with modern finishes. Barrett Henry, REALTOR® at REMAX Collective.",
    url: "https://valricoagent.com/neighborhoods/crosby-crossings/",
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

export default function CrosbyCrossingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
