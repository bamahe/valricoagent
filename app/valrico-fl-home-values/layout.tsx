import type { Metadata } from "next";

// SEO metadata for the Valrico Home Values page
export const metadata: Metadata = {
  title: "What Is My Valrico Home Worth? | Free Home Value Report | Barrett Henry",
  description:
    "Get a free Valrico home value report based on real comparable sales in your subdivision. Not a Zestimate — a detailed CMA from local REALTOR® Barrett Henry.",
  openGraph: {
    title: "What Is My Valrico Home Worth? | Free Home Value Report | Barrett Henry",
    description:
      "Get a free Valrico home value report based on real comparable sales in your subdivision. Not a Zestimate — a detailed CMA from local REALTOR® Barrett Henry.",
    url: "https://valricoagent.com/valrico-fl-home-values/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
  alternates: {
    canonical: "/valrico-fl-home-values/",
  },
};

export default function ValricoHomeValuesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
