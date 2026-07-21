import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import MobileBottomBar from "./components/MobileBottomBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Valrico Realtor | Barrett Henry | REMAX Collective",
    template: "%s | ValricoAgent.com",
  },
  description: "Barrett Henry - Valrico realtor and Broker Associate with REMAX Collective. Search homes in 33594 & 33596, explore 38 neighborhoods, get your home value.",
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
    description: "Your Valrico real estate agent with 23+ years experience. Search homes, explore 38 neighborhoods, get your home value. (813) 733-7907.",
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
    card: "summary_large_image",
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
        {/* Skip link for keyboard/screen reader users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#003da5] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {/* GA4 + Clarity, only load after cookie consent is accepted */}
        {(process.env.NEXT_PUBLIC_GA_ID || process.env.NEXT_PUBLIC_CLARITY_ID) && (
          <script dangerouslySetInnerHTML={{__html:`
(function(){
  var ga='${process.env.NEXT_PUBLIC_GA_ID||''}';
  var cl='${process.env.NEXT_PUBLIC_CLARITY_ID||''}';
  function loadAnalytics(){
    var p=localStorage.getItem('cookie-prefs');
    if(!p)return;
    try{var c=JSON.parse(p)}catch(e){return}
    if(!c.analytics)return;
    if(ga&&!window._gaLoaded){
      window._gaLoaded=true;
      var s=document.createElement('script');
      s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id='+ga;
      document.head.appendChild(s);
      window.dataLayer=window.dataLayer||[];
      window.gtag=function(){dataLayer.push(arguments)};
      window.gtag('js',new Date());window.gtag('config',ga);
    }
    if(cl&&!window._clLoaded){
      window._clLoaded=true;
      (function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",cl);
    }
  }
  loadAnalytics();
  window.addEventListener('cookie-consent-changed',loadAnalytics);
})();
          `.trim()}} />
        )}
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        {/* Sticky mobile bottom bar - Call + Text buttons, hidden on desktop */}
        <MobileBottomBar />
        {/* Cookie consent banner, shows on first visit, dismissible */}
        <CookieConsent />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
