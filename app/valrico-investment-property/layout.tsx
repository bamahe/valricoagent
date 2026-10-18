import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Investment Properties - Rentals',
  description: "Valrico FL investment properties: rental homes, townhomes, and multi-family. See average rents, cap rates, and top investor areas. Call (813) 733-7907.",
  alternates: { canonical: "/valrico-investment-property/" },
  openGraph: {
    title: "Valrico Investment Properties - Rentals",
    description: "Valrico FL investment properties: rental homes, townhomes, and multi-family. See average rents, cap rates, and top investor areas. Call (813) 733-7907.",
    url: "https://valricoagent.com/valrico-investment-property/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function InvestmentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
