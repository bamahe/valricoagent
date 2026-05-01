import type { Metadata } from "next";

// SEO metadata for the Sell My Home in Valrico page
export const metadata: Metadata = {
  title: "Sell My Home in Valrico FL | Seller Guide | Barrett Henry REALTOR®",
  description:
    "Selling your Valrico home? Get expert pricing, professional marketing, and skilled negotiation from Barrett Henry. Free seller consultation and net sheet. RE/MAX Collective.",
  openGraph: {
    title: "Sell My Home in Valrico FL | Seller Guide | Barrett Henry REALTOR®",
    description:
      "Selling your Valrico home? Get expert pricing, professional marketing, and skilled negotiation from Barrett Henry. Free seller consultation and net sheet. RE/MAX Collective.",
    url: "https://valricoagent.com/sell-my-home-valrico/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
  alternates: {
    canonical: "/sell-my-home-valrico/",
  },
};

export default function SellMyHomeValricoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
