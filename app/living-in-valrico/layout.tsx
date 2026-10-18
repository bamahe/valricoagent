import type { Metadata } from "next";

// SEO metadata for the Living in Valrico page
export const metadata: Metadata = {
  title: "Living in Valrico FL - Pros, Cons, Schools & Cost (2026)",
  description:
    "What is living in Valrico FL really like? Schools, neighborhoods, cost of living, commutes, safety, and honest pros and cons. Call (813) 733-7907.",
  openGraph: {
    title: "Living in Valrico FL - Pros, Cons, Schools & Cost (2026)",
    description:
      "What is living in Valrico FL really like? Schools, neighborhoods, cost of living, commutes, safety, and honest pros and cons. Call (813) 733-7907.",
    url: "https://valricoagent.com/living-in-valrico/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
  alternates: {
    canonical: "/living-in-valrico/",
  },
};

export default function LivingInValricoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
