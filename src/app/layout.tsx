import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatButtons from "@/components/FloatButtons";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
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
      className={`${outfit.variable} ${inter.variable} scroll-smooth h-full antialiased`}
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
