import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Relocating to Valrico FL — Complete Relocation Guide',
  description: 'Moving to Valrico FL from out of state? Complete relocation guide covering cost of living, no state income tax, schools, neighborhoods, weather, and how to buy remotely. Barrett Henry, REALTOR®, REMAX Collective.',
  alternates: { canonical: "/valrico-relocation-guide/" },
  openGraph: {
    title: "Relocating to Valrico FL — Complete Relocation Guide",
    description: "Moving to Valrico FL from out of state? Complete relocation guide covering cost of living, no state income tax, schools, neighborhoods, weather, and how to buy remotely. Barrett Henry, REALTOR®, REMAX Collective.",
    url: "https://valricoagent.com/valrico-relocation-guide/",
    siteName: "ValricoAgent.com",
    type: "website",
  },
};

export default function RelocationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
