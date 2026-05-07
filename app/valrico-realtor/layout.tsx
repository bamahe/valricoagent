import type { Metadata } from "next";

// SEO metadata for the Valrico Realtor page
export const metadata: Metadata = {
  title: "Valrico Realtor — Broker Associate",
  description:
    "Barrett Henry — trusted Valrico REALTOR® and Broker Associate with REMAX Collective. 23+ years experience serving 33594 and 33596. Straight talk, smart strategy.",
  openGraph: {
    title: "Valrico Realtor — Broker Associate",
    description:
      "Barrett Henry — trusted Valrico REALTOR® and Broker Associate with REMAX Collective. 23+ years experience serving 33594 and 33596. Straight talk, smart strategy.",
    url: "https://valricoagent.com/valrico-realtor/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-realtor/",
  },
};

export default function ValricoRealtorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
