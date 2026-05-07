import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Short Sale Help — Options & Guide',
  description: 'Underwater on your Valrico mortgage? A short sale may be your best option. Barrett Henry has 23+ years of experience navigating short sales with banks.',
  alternates: { canonical: "/valrico-short-sale/" },
  openGraph: {
    title: "Valrico Short Sale Help — Options & Guide",
    description: "Underwater on your Valrico mortgage? A short sale may be your best option. Barrett Henry has 23+ years of experience navigating short sales with banks.",
    url: "https://valricoagent.com/valrico-short-sale/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/barrett-henry.png", width: 600, height: 600, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function ShortSaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
