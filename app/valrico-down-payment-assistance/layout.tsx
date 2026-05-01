import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Down Payment Assistance Programs for Valrico, FL Home Buyers | Barrett Henry, REALTOR®',
  description: 'Florida down payment assistance programs available to Valrico buyers. Hometown Heroes, SHIP, FHA, VA, and more. Barrett Henry, REMAX Collective.',
  alternates: { canonical: "/valrico-down-payment-assistance/" },
  openGraph: {
    title: "Down Payment Assistance Programs for Valrico, FL Home Buyers | Barrett Henry, REALTOR®",
    description: "Florida down payment assistance programs available to Valrico buyers. Hometown Heroes, SHIP, FHA, VA, and more. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-down-payment-assistance/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
};

export default function DownPaymentAssistanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
