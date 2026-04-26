import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Down Payment Assistance Programs for Valrico, FL Home Buyers | Barrett Henry, REALTOR®',
  description: 'Florida down payment assistance programs available to Valrico buyers. Hometown Heroes, SHIP, FHA, VA, and more. Barrett Henry, REMAX Collective.',
};

export default function DownPaymentAssistanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
