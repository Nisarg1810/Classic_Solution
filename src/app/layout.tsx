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
  title: "Classic Solution | Premium Home Inspection & protection Services",
  description: "Classic Solution is a professional home inspection and home protection company. We help homeowners identify hidden structural and water problems using scientific diagnostic tools before they become expensive repairs.",
  keywords: [
    "Home Inspection",
    "House Inspection",
    "Pre Monsoon Inspection",
    "Damp Wall Inspection",
    "Leakage Detection",
    "Home Health Check",
    "Moisture Testing",
    "Property Inspection",
    "Waterproofing Inspection",
    "Home Safety Inspection"
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
          <main className="flex-grow pt-[72px] md:pt-[88px]">{children}</main>
          <Footer />
          <FloatButtons />
        </SmoothScroll>
      </body>
    </html>
  );
}
