import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valrico Open Houses This Weekend — Tour Homes in 33594 & 33596",
  description:
    "Find Valrico FL open houses this weekend. Tour homes in Bloomingdale, Buckhorn, River Hills and more. Barrett Henry, REMAX Collective.",
  alternates: { canonical: "/valrico-open-houses/" },
  openGraph: {
    title: "Valrico Open Houses This Weekend — Tour Homes in 33594 & 33596",
    description:
      "Find Valrico FL open houses this weekend. Tour homes in Bloomingdale, Buckhorn, River Hills and more. Barrett Henry, REMAX Collective.",
    url: "https://valricoagent.com/valrico-open-houses/",
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

export default function ValricoOpenHousesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
