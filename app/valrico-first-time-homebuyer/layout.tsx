import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'First-Time Buyer Guide - Valrico FL',
  description: "First-time buyer guide for Valrico FL. Down payment assistance, school zones, neighborhoods by budget, what to expect. Call (813) 733-7907.",
  alternates: { canonical: "/valrico-first-time-homebuyer/" },
  openGraph: {
    title: "First-Time Buyer Guide - Valrico FL",
    description: "First-time buyer guide for Valrico FL. Down payment assistance, school zones, neighborhoods by budget, what to expect. Call (813) 733-7907.",
    url: "https://valricoagent.com/valrico-first-time-homebuyer/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function FirstTimeBuyerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
