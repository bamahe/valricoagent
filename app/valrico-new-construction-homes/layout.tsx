import type { Metadata } from "next";

// SEO metadata for the Valrico New Construction Homes page
export const metadata: Metadata = {
  title: "New Construction Homes in Valrico FL — Communities & Prices (2026)",
  description:
    "Search new construction homes for sale in Valrico FL. See builder communities, floor plans, prices, and incentives. Free buyer representation from Barrett Henry, REALTOR®.",
  openGraph: {
    title: "New Construction Homes in Valrico FL — Communities & Prices (2026)",
    description:
      "Search new construction homes for sale in Valrico FL. See builder communities, floor plans, prices, and incentives. Free buyer representation from Barrett Henry, REALTOR®.",
    url: "https://valricoagent.com/valrico-new-construction-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-new-construction-homes/",
  },
};

export default function NewConstructionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
