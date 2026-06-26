import type { Metadata } from "next";
import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatButtons from "@/components/FloatButtons";
import SmoothScroll from "@/components/SmoothScroll";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["500", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Classic Solution | Thermal Imaging & Preventive Maintenance Services",
  description: "Classic Solution is a technology-driven preventive maintenance company specialising in thermal imaging inspection, electrical hotspot detection, moisture detection, energy audits, and building inspections. Prevent costly failures before they happen.",
  keywords: [
    "Thermal Imaging Inspection",
    "Preventive Maintenance",
    "Electrical Hotspot Detection",
    "Infrared Inspection",
    "Energy Audit",
    "Moisture Detection",
    "Industrial Inspection",
    "Building Inspection",
    "Solar Panel Inspection",
    "Fire Hazard Prevention",
    "Electrical Safety Inspection",
    "Property Inspection Rajkot"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-brand-text">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-[88px] md:pt-[100px]">{children}</main>
          <Footer />
          <FloatButtons />
        </SmoothScroll>
      </body>
    </html>
  );
}
