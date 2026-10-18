import type { Metadata } from "next";

// SEO metadata for the Valrico New Construction Homes page
export const metadata: Metadata = {
  title: "New Construction Homes in Valrico FL - Builders & Prices",
  description:
    "New construction homes for sale in Valrico FL. Compare builder communities, floor plans, prices, and incentives. Free buyer rep. (813) 733-7907.",
  openGraph: {
    title: "New Construction Homes in Valrico FL - Builders & Prices",
    description:
      "New construction homes for sale in Valrico FL. Compare builder communities, floor plans, prices, and incentives. Free buyer rep. (813) 733-7907.",
    url: "https://valricoagent.com/valrico-new-construction-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
  alternates: {
    canonical: "/valrico-new-construction-homes/",
  },
};

export default function NewConstructionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
