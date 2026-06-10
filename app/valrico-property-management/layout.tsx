import type { Metadata } from "next";

// SEO metadata for the Valrico Property Management page
export const metadata: Metadata = {
  title: "Valrico Property Management — 10% Fee, Full-Service Rentals",
  description:
    "Full-service Valrico FL property management for landlords. 10% management fee, in-house maintenance via Best Bay Services, tenant screening, and rent collection. Call (813) 733-7907.",
  openGraph: {
    title: "Valrico Property Management — 10% Fee, Full-Service Rentals",
    description:
      "Full-service Valrico FL property management for landlords. 10% management fee, in-house maintenance via Best Bay Services, tenant screening, and rent collection. Call (813) 733-7907.",
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
