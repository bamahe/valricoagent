import type { Metadata } from "next";

// SEO metadata for the Best Realtor in Valrico page
export const metadata: Metadata = {
  title: "Best Realtor in Valrico FL | Barrett Henry | RE/MAX Collective",
  description:
    "Why Barrett Henry is rated the best realtor in Valrico FL. 23+ years experience, Broker Associate, 50+ five-star reviews, and deep Valrico neighborhood expertise.",
  openGraph: {
    title: "Best Realtor in Valrico FL | Barrett Henry | RE/MAX Collective",
    description:
      "Why Barrett Henry is rated the best realtor in Valrico FL. 23+ years experience, Broker Associate, 50+ five-star reviews, and deep Valrico neighborhood expertise.",
    url: "https://valricoagent.com/best-realtor-in-valrico/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
  alternates: {
    canonical: "/best-realtor-in-valrico/",
  },
};

export default function BestRealtorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
