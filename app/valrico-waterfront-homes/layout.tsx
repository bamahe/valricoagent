import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Waterfront & Lake Homes in Valrico FL',
  description: 'Find waterfront and lake homes in Valrico FL. Lake Valrico, pond-front lots, water-view properties, flood zone info, and price premiums. Barrett Henry, REALTOR®, REMAX Collective.',
  alternates: { canonical: "/valrico-waterfront-homes/" },
  openGraph: {
    title: "Waterfront & Lake Homes in Valrico FL",
    description: "Find waterfront and lake homes in Valrico FL. Lake Valrico, pond-front lots, water-view properties, flood zone info, and price premiums. Barrett Henry, REALTOR®, REMAX Collective.",
    url: "https://valricoagent.com/valrico-waterfront-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
};

export default function WaterfrontLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
