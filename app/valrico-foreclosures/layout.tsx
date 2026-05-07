import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Foreclosures — Bank-Owned & REO',
  description: 'Find foreclosure homes in Valrico FL. Bank-owned, REO, and pre-foreclosure properties. Barrett Henry, REMAX Collective — 23+ years experience with distressed properties.',
  alternates: { canonical: "/valrico-foreclosures/" },
  openGraph: {
    title: "Valrico Foreclosures — Bank-Owned & REO",
    description: "Find foreclosure homes in Valrico FL. Bank-owned, REO, and pre-foreclosure properties. Barrett Henry, REMAX Collective — 23+ years experience with distressed properties.",
    url: "https://valricoagent.com/valrico-foreclosures/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function ForeclosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
