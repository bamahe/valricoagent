import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'VA Loan Homes in Valrico FL — Zero Down for Veterans',
  description: 'Find VA loan eligible homes in Valrico FL. Zero down, no PMI, VA appraisal process, Hillsborough County loan limits, MacDill AFB proximity. Barrett Henry, REALTOR®, REMAX Collective.',
};

export default function VALoanLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
