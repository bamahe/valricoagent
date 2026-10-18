import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VA Loan Homes in Valrico FL - Zero Down',
  description: "VA loan eligible homes in Valrico FL. Zero down, no PMI, VA appraisal steps, Hillsborough County limits, MacDill AFB commute. (813) 733-7907.",
  alternates: { canonical: "/valrico-va-loan-homes/" },
  openGraph: {
    title: "VA Loan Homes in Valrico FL - Zero Down",
    description: "VA loan eligible homes in Valrico FL. Zero down, no PMI, VA appraisal steps, Hillsborough County limits, MacDill AFB commute. (813) 733-7907.",
    url: "https://valricoagent.com/valrico-va-loan-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function VALoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
