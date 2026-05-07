import type { Metadata } from "next";

// SEO metadata for the Living in Valrico page
export const metadata: Metadata = {
  title: "Living in Valrico FL — What It's Really Like",
  description:
    "What is it like living in Valrico FL? Schools, neighborhoods, cost of living, commute, and lifestyle. Honest guide from Barrett Henry, local REALTOR.",
  openGraph: {
    title: "Living in Valrico FL — What It's Really Like",
    description:
      "What is it like living in Valrico FL? Schools, neighborhoods, cost of living, commute, and lifestyle. Honest guide from Barrett Henry, local REALTOR.",
    url: "https://valricoagent.com/living-in-valrico/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/living-in-valrico/",
  },
};

export default function LivingInValricoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
