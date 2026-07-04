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
  title: "Classic Solution | Professional Home Inspection Services",
  description: "Classic Solution is a professional home and property inspection company in India. We provide complete visual, non-destructive health & safety checks including walls, ceilings, floors, electrical, plumbing, damp, seepage, and moisture inspections.",
  keywords: [
    "Home Inspection India",
    "Property Inspection Services",
    "Moisture and Damp Inspection",
    "Electrical Safety Inspection",
    "Thermal Imaging Inspection",
    "Pre-Handover Audits",
    "Construction Finishing Audits",
    "NRI Property Care",
    "RERA Defect Liability Audit"
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
          <main className="flex-grow pt-[103px]">{children}</main>
          <Footer />
          <FloatButtons />
        </SmoothScroll>
      </body>
    </html>
  );
}
