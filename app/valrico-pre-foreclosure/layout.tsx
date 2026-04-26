import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pre-Foreclosure Help in Valrico FL — Stop Foreclosure Before It Starts',
  description: 'Behind on your Valrico mortgage? You have options before foreclosure. Short sale, loan modification, forbearance. Barrett Henry can help — call (813) 733-7907.',
};

export default function PreForeclosureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
