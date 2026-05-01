import type { Metadata } from "next";

// SEO metadata for the About Barrett Henry page
export const metadata: Metadata = {
  title: "About Barrett Henry | Valrico REALTOR® & Broker Associate",
  description:
    "Meet Barrett Henry — Valrico FL REALTOR® and Broker Associate with RE/MAX Collective. 23+ years of real estate experience, e-PRO, MRP, SRS designations.",
  openGraph: {
    title: "About Barrett Henry | Valrico REALTOR® & Broker Associate",
    description:
      "Meet Barrett Henry — Valrico FL REALTOR® and Broker Associate with RE/MAX Collective. 23+ years of real estate experience, e-PRO, MRP, SRS designations.",
    url: "https://valricoagent.com/about/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
  alternates: {
    canonical: "/about/",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
