import type { Metadata } from "next";

// SEO metadata for the Best Realtor in Valrico page
export const metadata: Metadata = {
  title: "Best Realtor in Valrico FL",
  description:
    "Why Barrett Henry is rated the best realtor in Valrico FL. 23+ years of experience, Broker Associate, 50+ five-star reviews. (813) 733-7907.",
  openGraph: {
    title: "Best Realtor in Valrico FL",
    description:
      "Why Barrett Henry is rated the best realtor in Valrico FL. 23+ years of experience, Broker Associate, 50+ five-star reviews. (813) 733-7907.",
    url: "https://valricoagent.com/best-realtor-in-valrico/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
  alternates: {
    canonical: "/best-realtor-in-valrico/",
  },
};

export default function BestRealtorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
