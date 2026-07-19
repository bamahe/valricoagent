import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Waterfront Homes for Sale - Lake & Pond-Front (2026)',
  description: 'Search waterfront and lake homes for sale in Valrico FL. Lake Valrico, pond-front lots, water views, and flood zone info. Call Barrett Henry (813) 733-7907.',
  alternates: { canonical: "/valrico-waterfront-homes/" },
  openGraph: {
    title: "Valrico Waterfront Homes for Sale - Lake & Pond-Front (2026)",
    description: "Search waterfront and lake homes for sale in Valrico FL. Lake Valrico, pond-front lots, water views, and flood zone info. Call Barrett Henry (813) 733-7907.",
    url: "https://valricoagent.com/valrico-waterfront-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function WaterfrontLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
