import type { Metadata } from "next";

// SEO metadata for the Valrico Real Estate hub page
export const metadata: Metadata = {
  title: "Valrico Real Estate | Homes, Market Data & Expert Guidance",
  description:
    "Everything you need to know about Valrico FL real estate: homes for sale, market reports, neighborhood guides, home values, and expert guidance from Barrett Henry.",
  openGraph: {
    title: "Valrico Real Estate | Homes, Market Data & Expert Guidance",
    description:
      "Everything you need to know about Valrico FL real estate: homes for sale, market reports, neighborhood guides, home values, and expert guidance from Barrett Henry.",
    url: "https://valricoagent.com/valrico-real-estate/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
  alternates: {
    canonical: "/valrico-real-estate/",
  },
};

export default function ValricoRealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
