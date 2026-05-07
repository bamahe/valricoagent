import type { Metadata } from "next";

// SEO metadata for the Valrico No HOA Homes page
export const metadata: Metadata = {
  title: "Valrico Homes with No HOA",
  description:
    "Find homes with no HOA in Valrico FL. No deed restrictions, no monthly fees. Browse non-HOA neighborhoods in 33594 and 33596. Barrett Henry, REMAX.",
  openGraph: {
    title: "Valrico Homes with No HOA",
    description:
      "Find homes with no HOA in Valrico FL. No deed restrictions, no monthly fees. Browse non-HOA neighborhoods in 33594 and 33596. Barrett Henry, REMAX.",
    url: "https://valricoagent.com/valrico-no-hoa-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-no-hoa-homes/",
  },
};

export default function NoHoaHomesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
