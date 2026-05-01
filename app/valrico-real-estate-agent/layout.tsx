import type { Metadata } from "next";

// SEO metadata for the Valrico Real Estate Agent page
export const metadata: Metadata = {
  title: "Valrico Real Estate Agent | Why Local Expertise Matters | Barrett Henry",
  description:
    "Looking for a Valrico real estate agent who knows every neighborhood, school zone, and price trend? Barrett Henry is the local expert for 33594 and 33596 with 23+ years experience.",
  openGraph: {
    title: "Valrico Real Estate Agent | Why Local Expertise Matters | Barrett Henry",
    description:
      "Looking for a Valrico real estate agent who knows every neighborhood, school zone, and price trend? Barrett Henry is the local expert for 33594 and 33596 with 23+ years experience.",
    url: "https://valricoagent.com/valrico-real-estate-agent/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
  alternates: {
    canonical: "/valrico-real-estate-agent/",
  },
};

export default function ValricoRealEstateAgentLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
