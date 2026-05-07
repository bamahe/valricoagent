import type { Metadata } from "next";

// SEO metadata for the Valrico School Zones page
export const metadata: Metadata = {
  title: "Valrico FL School Zones — Bloomingdale HS & Newsome HS",
  description:
    "Valrico school zone guide: Bloomingdale HS and Newsome HS attendance areas, elementary schools, ratings, and how zones affect home values.",
  openGraph: {
    title: "Valrico FL School Zones — Bloomingdale HS & Newsome HS",
    description:
      "Valrico school zone guide: Bloomingdale HS and Newsome HS attendance areas, elementary schools, ratings, and how zones affect home values.",
    url: "https://valricoagent.com/valrico-school-zones/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-school-zones/",
  },
};

export default function SchoolZonesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
