import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'First-Time Buyer Guide - Valrico FL',
  description: 'Everything first-time buyers need to know about buying in Valrico. Down payment options, school zones, neighborhoods by budget, and what to expect. Barrett Henry, REMAX Collective.',
  alternates: { canonical: "/valrico-first-time-homebuyer/" },
  openGraph: {
    title: "First-Time Buyer Guide - Valrico FL",
    description: "Everything first-time buyers need to know about buying in Valrico. Down payment options, school zones, neighborhoods by budget, and what to expect. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-first-time-homebuyer/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function FirstTimeBuyerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
