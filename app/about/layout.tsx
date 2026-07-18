import type { Metadata } from "next";

// SEO metadata for the About Barrett Henry page
export const metadata: Metadata = {
  title: "Barrett Henry, REALTOR® — Valrico Real Estate Agent",
  description:
    "Meet Barrett Henry, your Valrico FL REALTOR® and Broker Associate with REMAX Collective. 23+ years experience, 32 neighborhoods, e-PRO, MRP, SRS designations. Call (813) 733-7907.",
  openGraph: {
    title: "Barrett Henry, REALTOR® — Valrico Real Estate Agent",
    description:
      "Meet Barrett Henry, your Valrico FL REALTOR® and Broker Associate with REMAX Collective. 23+ years experience, 32 neighborhoods, e-PRO, MRP, SRS designations. Call (813) 733-7907.",
    url: "https://valricoagent.com/about/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
