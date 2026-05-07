import type { Metadata } from "next";

// SEO metadata for the Valrico Property Management page
export const metadata: Metadata = {
  title: "Valrico Property Management — Rental Management for Landlords",
  description:
    "Full-service Valrico FL property management. 10% fee, in-house maintenance, tenant screening, rent collection. Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "Valrico Property Management — Rental Management for Landlords",
    description:
      "Full-service Valrico FL property management. 10% fee, in-house maintenance, tenant screening, rent collection. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-property-management/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-property-management/",
  },
};

export default function PropertyManagementLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
