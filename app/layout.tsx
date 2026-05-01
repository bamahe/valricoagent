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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>
        {/* Sitewide LocalBusiness JSON-LD schema for SEO/AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "@id": "https://valricoagent.com/#organization",
              "name": "Barrett Henry, REALTOR®",
              "description": "Valrico FL REALTOR® and Broker Associate with RE/MAX Collective. 23+ years of real estate experience.",
              "url": "https://valricoagent.com",
              "telephone": "(813) 733-7907",
              "email": "barrett@nowtb.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "417 Lithia Pinecrest Rd",
                "addressLocality": "Brandon",
                "addressRegion": "FL",
                "postalCode": "33511",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.9378,
                "longitude": -82.2365
              },
              "areaServed": [
                { "@type": "City", "name": "Valrico" },
                { "@type": "City", "name": "Brandon" },
                { "@type": "City", "name": "Riverview" },
                { "@type": "City", "name": "Lithia" }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "50"
              },
              "sameAs": [
                "https://nowtb.com",
                "https://www.youtube.com/@nowtampa"
              ]
            })
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
