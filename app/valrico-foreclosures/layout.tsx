import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Valrico FL Foreclosures for Sale - Bank-Owned Homes (2026)',
  description: "Search bank-owned, REO, short sale, and auction homes in Valrico FL, live from Stellar MLS. Free foreclosure buying help. Call (813) 733-7907.",
  alternates: { canonical: "/valrico-foreclosures/" },
  openGraph: {
    title: "Valrico FL Foreclosures for Sale - Bank-Owned Homes (2026)",
    description: "Search bank-owned, REO, short sale, and auction homes in Valrico FL, live from Stellar MLS. Free foreclosure buying help. Call (813) 733-7907.",
    url: "https://valricoagent.com/valrico-foreclosures/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function ForeclosuresLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
