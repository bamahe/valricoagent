import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VA Loan Homes in Valrico FL - Zero Down',
  description: 'Find VA loan eligible homes in Valrico FL. Zero down, no PMI, VA appraisal process, Hillsborough County loan limits, MacDill AFB proximity. Barrett Henry, REALTOR®, REMAX Collective.',
  alternates: { canonical: "/valrico-va-loan-homes/" },
  openGraph: {
    title: "VA Loan Homes in Valrico FL - Zero Down",
    description: "Find VA loan eligible homes in Valrico FL. Zero down, no PMI, VA appraisal process, Hillsborough County loan limits, MacDill AFB proximity. Barrett Henry, REALTOR®, REMAX Collective.",
    url: "https://valricoagent.com/valrico-va-loan-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function VALoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
