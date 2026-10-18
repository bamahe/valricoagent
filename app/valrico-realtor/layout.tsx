import type { Metadata } from "next";

// SEO metadata for the Valrico Realtor page
export const metadata: Metadata = {
  title: "Valrico Realtor - Barrett Henry, Broker Associate (2026)",
  description:
    "Barrett Henry, top-rated Valrico REALTOR® and Broker Associate at REMAX Collective. 23+ years of real estate experience. Call (813) 733-7907.",
  openGraph: {
    title: "Valrico Realtor - Barrett Henry, Broker Associate (2026)",
    description:
      "Barrett Henry, top-rated Valrico REALTOR® and Broker Associate at REMAX Collective. 23+ years of real estate experience. Call (813) 733-7907.",
    url: "https://valricoagent.com/valrico-realtor/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
  alternates: {
    canonical: "/valrico-realtor/",
  },
};

export default function ValricoRealtorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
