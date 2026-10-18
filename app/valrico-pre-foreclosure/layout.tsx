import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pre-Foreclosure Help - Valrico FL',
  description: "Behind on your Valrico mortgage? You still have options: short sale, loan modification, forbearance. Call (813) 733-7907, free and confidential.",
  alternates: { canonical: "/valrico-pre-foreclosure/" },
  openGraph: {
    title: "Pre-Foreclosure Help - Valrico FL",
    description: "Behind on your Valrico mortgage? You still have options: short sale, loan modification, forbearance. Call (813) 733-7907, free and confidential.",
    url: "https://valricoagent.com/valrico-pre-foreclosure/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function PreForeclosureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
