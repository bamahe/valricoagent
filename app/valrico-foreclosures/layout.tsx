import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico FL Foreclosures for Sale — Bank-Owned Homes (2026)',
  description: 'Search foreclosure homes for sale in Valrico FL. Bank-owned, REO, and pre-foreclosure listings updated daily. Get expert help from Barrett Henry, REALTOR® — 23+ years experience.',
  alternates: { canonical: "/valrico-foreclosures/" },
  openGraph: {
    title: "Valrico FL Foreclosures for Sale — Bank-Owned Homes (2026)",
    description: "Search foreclosure homes for sale in Valrico FL. Bank-owned, REO, and pre-foreclosure listings updated daily. Get expert help from Barrett Henry, REALTOR® — 23+ years experience.",
    url: "https://valricoagent.com/valrico-foreclosures/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function ForeclosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
