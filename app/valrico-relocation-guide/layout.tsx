import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Relocating to Valrico FL - Relocation Guide',
  description: "Moving to Valrico FL? Relocation guide covering cost of living, no state income tax, schools, neighborhoods, and buying remotely. Call (813) 733-7907.",
  alternates: { canonical: "/valrico-relocation-guide/" },
  openGraph: {
    title: "Relocating to Valrico FL - Relocation Guide",
    description: "Moving to Valrico FL? Relocation guide covering cost of living, no state income tax, schools, neighborhoods, and buying remotely. Call (813) 733-7907.",
    url: "https://valricoagent.com/valrico-relocation-guide/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [{ url: "https://valricoagent.com/og-image.png", width: 1200, height: 630, alt: "Barrett Henry, REALTOR - Valrico FL" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/og-image.png"],
  },
};

export default function RelocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
