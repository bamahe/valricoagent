import type { Metadata } from "next";

// SEO metadata for the Valrico Realtor page
export const metadata: Metadata = {
  title: "Valrico Realtor | Barrett Henry | REALTOR® & Broker Associate",
  description:
    "Barrett Henry is a trusted Valrico REALTOR® and Broker Associate with RE/MAX Collective. 23+ years of real estate experience serving 33594 and 33596. Straight talk, smart strategy, real results.",
  openGraph: {
    title: "Valrico Realtor | Barrett Henry | REALTOR® & Broker Associate",
    description:
      "Barrett Henry is a trusted Valrico REALTOR® and Broker Associate with RE/MAX Collective. 23+ years of real estate experience serving 33594 and 33596. Straight talk, smart strategy, real results.",
    url: "https://valricoagent.com/valrico-realtor/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
  alternates: {
    canonical: "/valrico-realtor/",
  },
};

export default function ValricoRealtorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
