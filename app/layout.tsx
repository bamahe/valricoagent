import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Valrico Realtor | Barrett Henry | REMAX Collective",
    template: "%s | Barrett Henry, Valrico REALTOR",
  },
  description: "Barrett Henry — Valrico realtor and Broker Associate with REMAX Collective. Search homes in 33594 & 33596, explore 32 neighborhoods, get your home value.",
  keywords: "Valrico real estate agent, Valrico realtor, homes for sale Valrico FL, Valrico home values, sell my home Valrico, Valrico REMAX, 33594, 33596, Barrett Henry",
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
    title: "Valrico Realtor | Barrett Henry | REMAX Collective",
    description: "Your Valrico real estate agent with 23+ years experience. Search homes, explore 32 neighborhoods, get your home value. (813) 733-7907.",
    url: "https://valricoagent.com",
    siteName: "ValricoAgent.com",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://valricoagent.com/barrett-henry.png",
        width: 600,
        height: 600,
        alt: "Barrett Henry, REALTOR - Valrico FL Real Estate Agent",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Valrico Realtor | Barrett Henry | REMAX Collective",
    description: "Your Valrico real estate agent with 23+ years experience. (813) 733-7907.",
    images: ["https://valricoagent.com/barrett-henry.png"],
  },
  verification: {
    // Add Google Search Console verification code here after getting it from GSC
    // google: "your-verification-code",
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
        {/* Sitewide RealEstateAgent JSON-LD schema for SEO/AEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["RealEstateAgent", "LocalBusiness"],
              "@id": "https://valricoagent.com/#agent",
              "name": "Barrett Henry, REALTOR®",
              "givenName": "Barrett",
              "familyName": "Henry",
              "jobTitle": "Broker Associate",
              "description": "Barrett Henry is a licensed Broker Associate with RE/MAX Collective specializing in Valrico FL real estate. 23+ years of experience serving ZIP codes 33594 and 33596 across 32 neighborhoods.",
              "url": "https://valricoagent.com",
              "telephone": "(813) 733-7907",
              "email": "barrett@nowtb.com",
              "image": "https://valricoagent.com/barrett-henry.png",
              "priceRange": "$",
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
                { "@type": "City", "name": "Valrico", "containedInPlace": { "@type": "State", "name": "Florida" } },
                { "@type": "City", "name": "Brandon", "containedInPlace": { "@type": "State", "name": "Florida" } },
                { "@type": "City", "name": "Riverview", "containedInPlace": { "@type": "State", "name": "Florida" } },
                { "@type": "City", "name": "Lithia", "containedInPlace": { "@type": "State", "name": "Florida" } },
                { "@type": "City", "name": "Seffner", "containedInPlace": { "@type": "State", "name": "Florida" } }
              ],
              "hasCredential": [
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "license", "name": "Florida Real Estate Broker License", "identifier": { "@type": "PropertyValue", "propertyID": "DBPR License Number", "value": "3313308" } },
                { "@type": "EducationalOccupationalCredential", "name": "e-PRO" },
                { "@type": "EducationalOccupationalCredential", "name": "MRP", "description": "Military Relocation Professional" },
                { "@type": "EducationalOccupationalCredential", "name": "SRS", "description": "Seller Representative Specialist" }
              ],
              "worksFor": { "@type": "Organization", "name": "RE/MAX Collective" },
              "memberOf": { "@type": "Organization", "name": "Suncoast Tampa Association of REALTORS" },
              "slogan": "MOVE WITH CONFIDENCE. Straight Talk. Smart Strategy.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "85"
              },
              "sameAs": [
                "https://nowtb.com",
                "https://valrico.blog",
                "https://www.facebook.com/BarrettHenryREALTOR/",
                "https://www.instagram.com/thenowteam",
                "https://www.linkedin.com/in/barretthenry/",
                "https://www.youtube.com/@nowtampa",
                "https://www.zillow.com/profile/barretthenry",
                "https://www.remax.com/real-estate-agents/barrett-henry-city-state/100112059"
              ]
            })
          }}
        />
        <div className="mx-auto max-w-[1440px] shadow-sm">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
