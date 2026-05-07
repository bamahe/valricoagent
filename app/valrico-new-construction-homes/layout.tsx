import type { Metadata } from "next";

// SEO metadata for the Valrico New Construction Homes page
export const metadata: Metadata = {
  title: "New Construction Homes in Valrico FL",
  description:
    "Find new construction homes in Valrico FL. Builder communities, floor plans, and why you need a buyer's agent. Barrett Henry, REMAX Collective.",
  openGraph: {
    title: "New Construction Homes in Valrico FL",
    description:
      "Find new construction homes in Valrico FL. Builder communities, floor plans, and why you need a buyer's agent. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-new-construction-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-new-construction-homes/",
  },
};

export default function NewConstructionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
