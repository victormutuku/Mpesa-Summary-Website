import { Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "SpendAnalysis - Track your spending",
  description: "SpendAnalyis is an expenditure tracking application that gives you a summary of your daily and monthly spending on Mpesa.",
  keywords: [
    "spend tracking",
    "Expenditure tracking",
    "Mpesa",
  ],
  icons: {
    icon: '/icon.png',
    // shortcut: '/favicon.ico',
    // apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Google tag (gtag.js) */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-BPFZ9Y2WXG"
        strategy="afterInteractive"
        onError={(e) => {
          console.error('Error loading Google Analytics:', e);
        }}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        onLoad={() => {
          console.log('Google Analytics loaded successfully');
        }}
        onError={(e) => {
          console.error('Error initializing Google Analytics:', e);
        }}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BPFZ9Y2WXG', {
              page_path: window.location.pathname,
              debug_mode: true
            });
          `
        }}
      />
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
