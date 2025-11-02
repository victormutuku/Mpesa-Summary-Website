import { Outfit } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
