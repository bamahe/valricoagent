import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Foreclosure Homes — Bank-Owned & REO Properties',
  description: 'Find foreclosure homes in Valrico FL. Bank-owned, REO, and pre-foreclosure properties. Barrett Henry, REMAX Collective — 23+ years experience with distressed properties.',
};

export default function ForeclosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
