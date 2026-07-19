import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Florida Homestead Exemption & Save Our Homes - Valrico Guide',
  description: 'How the Florida homestead exemption saves Valrico homeowners ~$50,000 in assessed value. Save Our Homes cap, portability, deadlines, and how to file. Barrett Henry, REMAX Collective. (813) 733-7907.',
  alternates: { canonical: "/florida-homestead-exemption-save-our-homes/" },
  openGraph: {
    title: "Florida Homestead Exemption & Save Our Homes - Valrico Guide",
    description: "How the Florida homestead exemption saves Valrico homeowners ~$50,000 in assessed value. Save Our Homes cap, portability, deadlines, and how to file.",
    url: "https://valricoagent.com/florida-homestead-exemption-save-our-homes/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function HomesteadExemptionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
