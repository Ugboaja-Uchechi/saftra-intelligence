import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Saftra Intelligence - RFID + AI Solutions for Smart Cities, Logistics, Security & Infrastructure",
  description:
    "Saftra Intelligence builds advanced RFID and AI-powered systems for different industries, including fleet management, logistics, construction, military security, healthcare, warehousing, smart parking, tolling, and smart city infrastructure. Gain real-time visibility, asset intelligence, and automated operations across Africa.",
  keywords: [
    "RFID solutions",
    "AI asset tracking",
    "smart parking",
    "tolling system",
    "fleet management",
    "logistics tracking",
    "construction equipment tracking",
    "military asset security",
    "healthcare RFID",
    "pharmaceutical tracking",
    "warehouse automation",
    "supply chain visibility",
    "RFID in Africa",
    "Saftra Intelligence",
    "UHF RFID",
    "computer vision AI",
    "asset identification",
    "IoT tracking",
    "smart city technology"
  ],
  authors: [{ name: "Saftra Intelligence" }],
  creator: "Saftra Intelligence",
  openGraph: {
    title:
      "Saftra Intelligence - RFID + AI Infrastructure for Africa's Most Critical Industries",
    description:
      "Unified RFID + AI platform powering logistics, smart parking, tolling, military, healthcare, warehousing, and construction visibility across Africa.",
    url: "https://saftraintelligence.com",
    siteName: "Saftra Intelligence",
    // images: [
    //   {
    //     url: "https://your-domain.com/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Saftra Intelligence - RFID + AI Solutions"
    //   }
    // ],
    locale: "en_US",
    type: "website"
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title:
  //     "Saftra Intelligence - RFID + AI Solutions for Smart Cities & Enterprise Operations",
  //   description:
  //     "RFID + Computer Vision solutions for logistics, fleet, construction, military, healthcare, warehousing, and smart city systems.",
  //   images: ["https://your-domain.com/og-image.jpg"]
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} antialiased bg-background`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
