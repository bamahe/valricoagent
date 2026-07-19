import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Is Valrico FL Safe? - Crime, Neighborhoods & Safety Overview",
  description:
    "Is Valrico FL safe? Honest safety overview covering crime stats, safest neighborhoods, schools, and why families choose Valrico. Barrett Henry, REMAX.",
  alternates: { canonical: "/is-valrico-safe/" },
  openGraph: {
    title: "Is Valrico FL Safe? - Crime, Neighborhoods & Safety Overview",
    description:
      "Is Valrico FL safe? Honest safety overview covering crime stats, safest neighborhoods, schools, and why families choose Valrico. Barrett Henry, REMAX.",
    url: "https://valricoagent.com/is-valrico-safe/",
    siteName: "ValricoAgent.com",
    type: "website",
    images: [
      {
        url: "https://valricoagent.com/barrett-henry.png",
        width: 600,
        height: 600,
        alt: "Barrett Henry, REALTOR - Valrico FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
};

export default function IsValricoSafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
