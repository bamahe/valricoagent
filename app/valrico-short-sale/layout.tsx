import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico Short Sale Help — Sell Your Home for Less Than You Owe',
  description: 'Underwater on your Valrico mortgage? A short sale may be your best option. Barrett Henry has 23+ years of experience navigating short sales with banks.',
  alternates: { canonical: "/valrico-short-sale/" },
  openGraph: {
    title: "Valrico Short Sale Help — Sell Your Home for Less Than You Owe",
    description: "Underwater on your Valrico mortgage? A short sale may be your best option. Barrett Henry has 23+ years of experience navigating short sales with banks.",
    url: "https://valricoagent.com/valrico-short-sale/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
};

export default function ShortSaleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
