import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Valrico Realtor | Valrico Real Estate Agent | Barrett Henry | RE/MAX Collective",
    template: "%s | Valrico Realtor | Barrett Henry",
  },
  description: "Barrett Henry is the Valrico realtor and Valrico real estate agent you can trust. Broker Associate with RE/MAX Collective serving 33594 and 33596. Search Valrico homes for sale, explore neighborhoods, and get your home value.",
  keywords: "Valrico real estate agent, Valrico realtor, homes for sale Valrico FL, Valrico home values, sell my home Valrico, Valrico RE/MAX, 33594, 33596",
  metadataBase: new URL("https://valricoagent.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Valrico Realtor | Barrett Henry | RE/MAX Collective",
    description: "Your Valrico real estate agent with 23+ years experience. Search homes, explore neighborhoods, get your home value.",
    url: "https://valricoagent.com",
    siteName: "ValricoAgent.com",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
