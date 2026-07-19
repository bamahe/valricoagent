import type { Metadata } from "next";

// SEO metadata for the Valrico Home Values page
export const metadata: Metadata = {
  title: "Valrico Home Values - Free Report",
  description:
    "Get a free Valrico home value report based on real comparable sales in your subdivision. Not a Zestimate, a detailed CMA from local REALTOR® Barrett Henry.",
  openGraph: {
    title: "Valrico Home Values - Free Report",
    description:
      "Get a free Valrico home value report based on real comparable sales in your subdivision. Not a Zestimate, a detailed CMA from local REALTOR® Barrett Henry.",
    url: "https://valricoagent.com/valrico-fl-home-values/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-fl-home-values/",
  },
};

export default function ValricoHomeValuesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
