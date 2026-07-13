"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";

const methodology = {
  ts: ["Latest Tools", "Technology", "Expert & Trained Team"],
  ds: ["Detect the Issue", "Describe the Source", "Direct the Solution"],
  ls: ["Least Cost", "Least Destructive", "Long term Solutions"]
};

const portfolioList = [
  "1 Bed-room apartment to a 20 Bed-room palace type Bungalow",
  "to the projects of leading Real Estate Developers",
  "to Offices, Hospitals, Malls, Warehouses, Factories",
  "to 5 star Hotels",
  "to Properties of India’s top Businessmen & Celebrities."
];

const causesImages = [
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/1.jpg",
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/2.jpg",
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/3.jpg",
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/4.jpg",
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/5.jpg",
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/6.jpg",
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/7.jpg",
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/10/Macj-Blog-Images-02.jpg",
  "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/9.jpg"
];

const symptoms = [
  "Visual Leak",
  "Popping/ Peeling of Paint",
  "Peeling of Wallpaper",
  "Termite Presence",
  "Woodwork Deterioration",
  "Darker Patch in Wall/ Ceiling",
  "Mold Growth",
  "Rust",
  "Collapsed False Ceiling"
];

const circularSymptoms = [
  { name: "Mold", img: "https://macj-abuyerschoice.com/wp-content/uploads/2017/12/symptoms01.png" },
  { name: "Woodwork Deterioration", img: "https://macj-abuyerschoice.com/wp-content/uploads/2017/12/symptoms02.png" },
  { name: "Dark Patches in Walls", img: "https://macj-abuyerschoice.com/wp-content/uploads/2017/12/symptoms03.png" },
  { name: "Collapsed False Ceiling", img: "https://macj-abuyerschoice.com/wp-content/uploads/2017/12/symptoms04.png" }
];

const deliverables = [
  "Moisture mapping using Thermal Imaging Technology.",
  "Inspection of the related Plumbing Systems / Shafts / Peripheral Areas.",
  "Identifying the reason & exact source of Moisture / Damp / Seepage / Leakage.",
  "Solution recommendations."
];

export default function ServicesMoistureDamp() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      {/* Page Hero */}
      <PageHero
        badge="Seepage Diagnostics"
        title="Moisture, Dampness & Seepage"
        titleHighlight="Diagnostics via Infrared"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Moisture & Damp" }]}
        subtitle="Flir infrared thermography and pinless moisture mapping to find the root source of dampness."
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Title and Subtitle matching the reference page header */}
        <div className="mb-8 text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary font-display leading-tight">
            Moisture/ Damp / Seepage / Leakage Inspections with Solutions through Thermal Imaging Technology
          </h2>
          <p className="text-sm sm:text-base font-semibold text-brand-muted tracking-wide mt-2">
            For Moisture / Dampness / Leakage / Seepage Assessment
          </p>
        </div>

        {/* 1. Hero Banner Image */}
        <div className="relative w-full aspect-[22/9] rounded-2xl overflow-hidden shadow-sm border border-brand-border/40 mb-6 bg-white">
          <Image
            src="/images/moisture_1.png"
            alt="Moisture damp banner"
            fill
            className="object-contain"
            priority
            unoptimized
          />
        </div>

        {/* Silent Killer Text Blocks */}
        <div className="text-left mb-10 bg-white border border-brand-border/30 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary font-display mb-3">
            Moisture or Dampness in a property is a Silent Killer – It is as destructive to a property, as cancer is to human body.
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            It is the single most important agent of building deterioration.<br />
            Causes severe damage to External & Internal surface, and also Electrical & Mechanical problems.
          </p>
        </div>

        {/* 2. Damage Graphic Banner */}
        <div className="relative w-full aspect-[22/9] rounded-2xl overflow-hidden shadow-sm border border-brand-border/40 mb-6 bg-white">
          <Image
            src="/images/moisture_2.png"
            alt="Causes severe damage to property diagram"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Sick Building Syndrome Text Block */}
        <div className="text-left mb-10 bg-white border border-brand-border/30 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary font-display mb-2">
            It creates Sick Building Syndrome – serious human health hazard, being the source of sleeping diseases like respiratory problems, allergies, asthma & skin diseases.
          </h3>
        </div>

        {/* 3. Demon/Health Graphic Banner */}
        <div className="relative w-full aspect-[22/9] rounded-2xl overflow-hidden shadow-sm border border-brand-border/40 mb-6 bg-white">
          <Image
            src="/images/moisture_3.png"
            alt="Moisture a silent demon"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Indian Properties Damage Text Block */}
        <div className="text-left mb-10 bg-white border border-brand-border/30 rounded-2xl p-6 shadow-sm">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-primary font-display mb-2">
            Almost all properties in India whether new or old get damaged due to Moisture / Damp / Seepage / Leakage. If the exact source of damp / seepage is not rectified, the problem becomes cancerous, it always comes back.
          </h3>
        </div>

        {/* 4. WhatsApp / Solutions Ribbon Image */}
        <div className="relative w-full aspect-[22/3] rounded-xl overflow-hidden shadow-sm border border-brand-border/40 mb-6 bg-white">
          <Image
            src="https://macj-abuyerschoice.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-03-at-15.00.42-1.jpeg"
            alt="Presently all related solutions are High Cost Destructive Short Term ribbon"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Specialist Doctor Text block */}
        <div className="text-left mb-10 bg-white border border-brand-border/30 rounded-2xl p-6 shadow-sm">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary font-display mb-3">
            For the first time in India, we have introduced your Property’s Specialist Doctor
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            We are the first and best company in India which can find the exact source of a damp or a concealed seepage or leakage through non-destructive methods.
          </p>
        </div>

        {/* 5. Stethoscope Banner Image */}
        <div className="relative w-full aspect-[22/9] rounded-2xl overflow-hidden shadow-sm border border-brand-border/40 mb-6 bg-white">
          <Image
            src="/images/moisture_4.png"
            alt="Property doctor stethoscope diagram"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* 3T, 3D, and 3Ls Framework */}
        <section className="bg-white border border-brand-border/30 rounded-2xl p-6 shadow-sm mb-10 text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 3 Ts */}
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border/20">
              <h4 className="text-sm font-bold text-primary mb-3">We use our <b>3 T</b>s</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-muted font-light">
                {methodology.ts.map((t, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-secondary font-bold">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 Ds */}
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border/20">
              <h4 className="text-sm font-bold text-primary mb-3">To do the <b>3 D</b>s</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-muted font-light">
                {methodology.ds.map((d, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-secondary font-bold">•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3 Ls */}
            <div className="p-4 bg-brand-light rounded-xl border border-brand-border/20">
              <h4 className="text-sm font-bold text-primary mb-3">Resulting in <b>3 L</b>s</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-brand-muted font-light">
                {methodology.ls.map((l, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    <span className="text-secondary font-bold">•</span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Skyline Skyline Banner Image */}
        <div className="relative w-full aspect-[22/9] rounded-2xl overflow-hidden shadow-sm border border-brand-border/40 mb-6 bg-white">
          <Image
            src="/images/moisture_5.png"
            alt="Skyline property coverage diagram"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Coverage List */}
        <section className="bg-white border border-brand-border/30 rounded-2xl p-6 shadow-sm mb-10 text-left">
          <h3 className="text-base sm:text-lg font-bold text-primary font-display mb-3">
            From:
          </h3>
          <ul className="space-y-2 mb-6">
            {portfolioList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text font-light">
                <span className="text-secondary font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-base sm:text-lg font-bold text-primary text-center pt-4 border-t border-brand-border/30">
            We have inspected it all.......
          </div>
        </section>

        {/* Causes of Damp & Seepage Title & Grid */}
        <section className="bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm mb-10 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-6 border-b border-brand-border pb-3">
            Causes of Damp & Seepage
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {causesImages.map((src, idx) => (
              <div key={idx} className="relative aspect-[7/8] w-full rounded-xl overflow-hidden border border-brand-border/40 shadow-sm bg-white">
                <Image
                  src={src}
                  alt={`Damp cause example ${idx + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </section>

        {/* Common Symptoms checklist and Circular image preview grid */}
        <section className="bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm mb-10 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-6 border-b border-brand-border pb-3">
            Common Symptoms
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Checklist */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {symptoms.map((sym, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-brand-text font-light">
                  <span className="text-red-500 font-bold">•</span>
                  <span>{sym}</span>
                </li>
              ))}
            </ul>

            {/* Circular previews */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
              {circularSymptoms.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-brand-border/40 shadow-sm bg-white">
                    <Image src={item.img} alt={item.name} fill className="object-cover" unoptimized />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-primary text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* One Stop Solution Key List */}
        <section className="bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm mb-10 text-left">
          <h3 className="text-base sm:text-lg font-bold text-primary font-display mb-6 border-b border-brand-border pb-3">
            We present a One Stop Solution – Moisture Intrusion Inspections through Thermal Imaging Technology
          </h3>
          <ul className="space-y-3.5">
            {deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 7. Footer Blog/Family Banner Image (Replaced with Group 270 logo) */}
        <div className="relative w-full aspect-[22/9] rounded-2xl overflow-hidden shadow-sm border border-brand-border/40 mb-12 bg-white">
          <Image
            src="/images/moisture_group_270.png"
            alt="Dream to make each home safe and healthy family banner logo"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Back and Action Buttons */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-t border-brand-border/40 pt-8 mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all text-xs uppercase tracking-widest"
          >
            Book Inspection
          </Link>
        </div>

      </div>
    </div>
  );
}
