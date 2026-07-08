"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Thermometer, ArrowLeft, Heart, ShieldAlert, Award } from "lucide-react";
import PageHero from "@/components/PageHero";

const coreMethodology = [
  {
    title: "Our 3 Ts",
    points: [
      { name: "Detect the Issue", desc: "Pinpoints hidden anomalies." },
      { name: "Technology", desc: "Scientific scans over guesswork." },
      { name: "Direct the Solution", desc: "Unbiased repair guidance." }
    ]
  },
  {
    title: "Our 3 Ds",
    points: [
      { name: "Latest Tools", desc: "Thermal cameras & moisture meters." },
      { name: "Describe the Source", desc: "Finds root seepage pathways." },
      { name: "Expert & Trained Team", desc: "Certified diagnostic engineers." }
    ]
  },
  {
    title: "Resulting in 3 Ls",
    points: [
      { name: "Least Cost", desc: "Targeted repairs avoid high civil bills." },
      { name: "Least Destructive", desc: "Zero brick-breaking or tearing down." },
      { name: "Long-term Solutions", desc: "Permanent fixes that resolve issues." }
    ]
  }
];

const propertiesCovered = [
  "1 Bedroom Apartment to a 20 Bedroom Palace-type Bungalow",
  "Projects of leading Real Estate Developers",
  "Corporate Offices & Commercial Spaces",
  "Hospitals & Medical Centers",
  "Shopping Malls & Retail Outlets",
  "Warehouses & Factories",
  "5-Star Hotels & Hospitality Suites",
  "Properties of India's top Businessmen & Celebrities"
];

export default function ServicesMoistureDamp() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Thermal Imaging"
        title="Moisture, Dampness & Seepage"
        titleHighlight="Diagnostics via Infrared"
        subtitle="First in Gujarat: Non-destructive moisture and seepage diagnostics to pinpoint leak sources before you break open walls."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Moisture & Damp" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">
          
          {/* Main Narrative Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Block: Narrative */}
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Moisture & Dampness Assessment</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Moisture is a Silent Killer of Your Property
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                Moisture or dampness in a property is a Silent Killer — it is as destructive to a property as cancer is to the human body. It is the single most important agent of building deterioration, causing severe damage to external & internal surfaces, and leading to electrical & mechanical problems.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Moreover, moisture creates <strong>Sick Building Syndrome</strong> — a serious human health hazard. It is a known source of sleeping diseases like respiratory problems, allergies, asthma, and skin issues.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light font-medium text-secondary">
                For the first time in Gujarat, we have introduced your Property's Specialist Doctor. We are the first and best company in India which can find the exact source of a damp or a concealed seepage or leakage through non-destructive methods.
              </p>

              <div className="flex gap-4 mt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
                >
                  Book Dampness Scan
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            {/* Right Block: Photo & Tech Info */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2019/01/popping-360x240.jpg" alt="Moisture Wall Detection" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Coverage-04-1-360x240.jpg" alt="Ceiling Leak Detection" fill className="object-cover" unoptimized />
                </div>
              </div>

              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Why Source Rectification Matters</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                Almost all properties in India, whether new or old, get damaged due to moisture, damp, seepage, and leakage. If the exact source is not rectified, the problem becomes cancerous and always comes back.
              </p>

              <div className="bg-brand-light border border-brand-border/40 p-4 rounded-xl flex items-center gap-4 mt-2">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                  <Thermometer className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Specialist Diagnostics</p>
                  <p className="text-sm font-bold text-primary">Flir Infrared Thermal Cameras</p>
                </div>
              </div>
            </div>

          </div>

          {/* 3T, 3D, 3L Methodology */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Diagnostic Framework</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Our Diagnostic Methodology</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coreMethodology.map((col, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary font-display border-b border-brand-border pb-2 mb-4 text-center">{col.title}</h3>
                  <ul className="flex flex-col gap-3">
                    {col.points.map((pt, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-xs sm:text-sm text-primary">{pt.name}:</strong>
                          <p className="text-xs text-brand-muted font-light leading-relaxed">{pt.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Properties Covered */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Proven Experience</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">We Have Inspected It All</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {propertiesCovered.map((prop, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl shadow-sm text-center flex flex-col justify-center items-center min-h-[90px]">
                  <p className="text-xs sm:text-sm font-semibold text-primary">{prop}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
