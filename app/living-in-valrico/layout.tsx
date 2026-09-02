import type { Metadata } from "next";

// SEO metadata for the Living in Valrico page
export const metadata: Metadata = {
  title: "Living in Valrico FL - Pros, Cons, Schools & Cost (2026)",
  description:
    "What is it really like living in Valrico FL? Schools, 38 neighborhoods, cost of living, commute times, safety, and honest pros/cons from a local REALTOR® with 24+ years of real estate experience.",
  openGraph: {
    title: "Living in Valrico FL - Pros, Cons, Schools & Cost (2026)",
    description:
      "What is it really like living in Valrico FL? Schools, 38 neighborhoods, cost of living, commute times, safety, and honest pros/cons from a local REALTOR® with 24+ years of real estate experience.",
    url: "https://valricoagent.com/living-in-valrico/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/living-in-valrico/",
  },
};

export default function LivingInValricoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
