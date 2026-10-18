import type { Metadata } from "next";

// SEO metadata for the Valrico Real Estate hub page
export const metadata: Metadata = {
  title: "Valrico Real Estate - Homes & Market Data",
  description:
    "Valrico FL real estate: homes for sale, market reports, neighborhood guides, and home values from Barrett Henry, REALTOR®. Call (813) 733-7907.",
  openGraph: {
    title: "Valrico Real Estate - Homes & Market Data",
    description:
      "Valrico FL real estate: homes for sale, market reports, neighborhood guides, and home values from Barrett Henry, REALTOR®. Call (813) 733-7907.",
    url: "https://valricoagent.com/valrico-real-estate/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
  alternates: {
    canonical: "/valrico-real-estate/",
  },
};

export default function ValricoRealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
