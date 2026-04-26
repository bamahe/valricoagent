import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'First-Time Home Buyer Guide for Valrico, FL | Barrett Henry, REALTOR®',
  description: 'Everything first-time buyers need to know about buying in Valrico. Down payment options, school zones, neighborhoods by budget, and what to expect. Barrett Henry, REMAX Collective.',
};

export default function FirstTimeBuyerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
