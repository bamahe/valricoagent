import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '55+ Communities Near Valrico FL',
  description: '55+ communities and active adult living near Valrico FL. Sun City Center, Valencia Lakes, single-story homes, homestead exemption, healthcare, and retirement lifestyle. Barrett Henry, REALTOR®, REMAX Collective.',
  alternates: { canonical: "/valrico-55-plus-communities/" },
  openGraph: {
    title: "55+ Communities Near Valrico FL",
    description: "55+ communities and active adult living near Valrico FL. Sun City Center, Valencia Lakes, single-story homes, homestead exemption, healthcare, and retirement lifestyle. Barrett Henry, REALTOR®, REMAX Collective.",
    url: "https://valricoagent.com/valrico-55-plus-communities/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function FiftyFivePlusLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
