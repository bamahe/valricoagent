import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Foreclosure Homes — Bank-Owned & REO Properties',
  description: 'Find foreclosure homes in Valrico FL. Bank-owned, REO, and pre-foreclosure properties. Barrett Henry, REMAX Collective — 23+ years experience with distressed properties.',
  alternates: { canonical: "/valrico-foreclosures/" },
  openGraph: {
    title: "Valrico Foreclosure Homes — Bank-Owned & REO Properties",
    description: "Find foreclosure homes in Valrico FL. Bank-owned, REO, and pre-foreclosure properties. Barrett Henry, REMAX Collective — 23+ years experience with distressed properties.",
    url: "https://valricoagent.com/valrico-foreclosures/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
};

export default function ForeclosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
