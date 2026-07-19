import type { Metadata } from "next";

// SEO metadata for the Valrico Real Estate Agent page
export const metadata: Metadata = {
  title: "Valrico Real Estate Agent - Local Expert",
  description:
    "Looking for a Valrico real estate agent who knows every neighborhood and price trend? Barrett Henry, local expert for 33594 and 33596.",
  openGraph: {
    title: "Valrico Real Estate Agent - Local Expert",
    description:
      "Looking for a Valrico real estate agent who knows every neighborhood and price trend? Barrett Henry, local expert for 33594 and 33596.",
    url: "https://valricoagent.com/valrico-real-estate-agent/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  alternates: {
    canonical: "/valrico-real-estate-agent/",
  },
};

export default function ValricoRealEstateAgentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
