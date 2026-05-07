import type { Metadata } from "next";

// SEO metadata for the About Barrett Henry page
export const metadata: Metadata = {
  title: "About — Valrico Broker Associate",
  description:
    "Meet Barrett Henry — Valrico FL REALTOR® and Broker Associate with RE/MAX Collective. 23+ years of real estate experience, e-PRO, MRP, SRS designations.",
  openGraph: {
    title: "About — Valrico Broker Associate",
    description:
      "Meet Barrett Henry — Valrico FL REALTOR® and Broker Associate with RE/MAX Collective. 23+ years of real estate experience, e-PRO, MRP, SRS designations.",
    url: "https://valricoagent.com/about/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
