import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Down Payment Assistance - Valrico FL',
  description: 'Florida down payment assistance programs available to Valrico buyers. Hometown Heroes, SHIP, FHA, VA, and more. Barrett Henry, REMAX Collective.',
  alternates: { canonical: "/valrico-down-payment-assistance/" },
  openGraph: {
    title: "Down Payment Assistance - Valrico FL",
    description: "Florida down payment assistance programs available to Valrico buyers. Hometown Heroes, SHIP, FHA, VA, and more. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-down-payment-assistance/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function DownPaymentAssistanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
