import type { Metadata } from "next";

// SEO metadata for the Living in Valrico page
export const metadata: Metadata = {
  title: "Living in Valrico FL — Pros, Cons, Schools & Cost (2026)",
  description:
    "What is it really like living in Valrico FL? Schools, 32 neighborhoods, cost of living, commute times, safety, and honest pros/cons from a local REALTOR® with 23+ years experience.",
  openGraph: {
    title: "Living in Valrico FL — Pros, Cons, Schools & Cost (2026)",
    description:
      "What is it really like living in Valrico FL? Schools, 32 neighborhoods, cost of living, commute times, safety, and honest pros/cons from a local REALTOR® with 23+ years experience.",
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
