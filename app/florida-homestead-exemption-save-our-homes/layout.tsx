import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Florida Homestead Exemption & Save Our Homes - Valrico Guide',
  description: "The Florida homestead exemption saves Valrico owners about $50,000 in assessed value. Save Our Homes cap, portability, and deadlines. (813) 733-7907.",
  alternates: { canonical: "/florida-homestead-exemption-save-our-homes/" },
  openGraph: {
    title: "Florida Homestead Exemption & Save Our Homes - Valrico Guide",
    description: "The Florida homestead exemption saves Valrico owners about $50,000 in assessed value. Save Our Homes cap, portability, and deadlines. (813) 733-7907.",
    url: "https://valricoagent.com/florida-homestead-exemption-save-our-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function HomesteadExemptionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
