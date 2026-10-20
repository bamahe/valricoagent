import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico FL Cost of Living - Housing, Taxes & Expenses",
  description:
    "Full cost of living breakdown for Valrico FL, housing, property taxes, insurance, utilities, and more vs Florida and national averages.",
  alternates: { canonical: "/valrico-cost-of-living/" },
  openGraph: {
    title: "Valrico FL Cost of Living - Housing, Taxes & Expenses",
    description:
      "Full cost of living breakdown for Valrico FL, housing, property taxes, insurance, utilities, and more vs Florida and national averages.",
    url: "https://valricoagent.com/valrico-cost-of-living/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [
      {
        url: "https://valricoagent.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barrett Henry, REALTOR - Valrico FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function ValricoCostOfLivingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
