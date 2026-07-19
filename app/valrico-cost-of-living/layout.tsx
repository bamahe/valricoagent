import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost of Living in Valrico FL - Housing, Taxes & Monthly Expenses",
  description:
    "Full cost of living breakdown for Valrico FL, housing, property taxes, insurance, utilities, and more vs Florida and national averages.",
  alternates: { canonical: "/valrico-cost-of-living/" },
  openGraph: {
    title: "Cost of Living in Valrico FL - Housing, Taxes & Monthly Expenses",
    description:
      "Full cost of living breakdown for Valrico FL, housing, property taxes, insurance, utilities, and more vs Florida and national averages.",
    url: "https://valricoagent.com/valrico-cost-of-living/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [
      {
        url: "https://valricoagent.com/barrett-henry.png",
        width: 600,
        height: 600,
        alt: "Barrett Henry, REALTOR - Valrico FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function ValricoCostOfLivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
