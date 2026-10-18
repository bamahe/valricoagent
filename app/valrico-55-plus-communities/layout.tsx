import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '55+ Communities Near Valrico FL',
  description: "55+ and active adult communities near Valrico FL. Compare Sun City Center, Valencia Lakes, single-story homes, and HOA fees. Call (813) 733-7907.",
  alternates: { canonical: "/valrico-55-plus-communities/" },
  openGraph: {
    title: "55+ Communities Near Valrico FL",
    description: "55+ and active adult communities near Valrico FL. Compare Sun City Center, Valencia Lakes, single-story homes, and HOA fees. Call (813) 733-7907.",
    url: "https://valricoagent.com/valrico-55-plus-communities/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function FiftyFivePlusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
