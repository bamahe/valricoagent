import type { Metadata } from "next";

// SEO metadata for the Valrico FL Homes for Sale page
export const metadata: Metadata = {
  title: "Valrico FL Homes for Sale | Search Listings | Barrett Henry REALTOR®",
  description:
    "Search all homes for sale in Valrico FL updated daily from Stellar MLS. Browse by neighborhood, price, pool, school zone, and more. Barrett Henry, RE/MAX Collective.",
  openGraph: {
    title: "Valrico FL Homes for Sale | Search Listings | Barrett Henry REALTOR®",
    description:
      "Search all homes for sale in Valrico FL updated daily from Stellar MLS. Browse by neighborhood, price, pool, school zone, and more. Barrett Henry, RE/MAX Collective.",
    url: "https://valricoagent.com/valrico-fl-homes-for-sale/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
  alternates: {
    canonical: "/valrico-fl-homes-for-sale/",
  },
};

export default function ValricoHomesForSaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
