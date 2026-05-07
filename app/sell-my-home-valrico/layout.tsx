import type { Metadata } from "next";

// SEO metadata for the Sell My Home in Valrico page
export const metadata: Metadata = {
  title: "Sell My Home in Valrico FL",
  description:
    "Selling your Valrico home? Expert pricing, marketing, and negotiation from Barrett Henry. Free consultation and net sheet.",
  openGraph: {
    title: "Sell My Home in Valrico FL",
    description:
      "Selling your Valrico home? Expert pricing, marketing, and negotiation from Barrett Henry. Free consultation and net sheet.",
    url: "https://valricoagent.com/sell-my-home-valrico/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/sell-my-home-valrico/",
  },
};

export default function SellMyHomeValricoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
