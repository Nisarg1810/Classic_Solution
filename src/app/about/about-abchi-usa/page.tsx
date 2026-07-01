"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Shield, Award, Users, CheckCircle2, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function AboutAbchiUsa() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="ABCHI Corporate USA"
        title="A Buyer's Choice Home"
        titleHighlight="Inspections, USA"
        subtitle="About the multinational parent franchise. Headquartered in Florida, USA, ABCHI is one of the world's fastest-growing home inspection companies."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "ABCHI USA" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Multinational Presence</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              One of North America's Leading Inspection Franchises
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Founded by real estate veteran **Bill Redfern**, A Buyer's Choice Home Inspections (ABCHI) started in North America as a way to standardize and professionalize pre-purchase home assessments. Redfern recognized that homebuyers, sellers, and realtors required a consistent, high-integrity service.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Under his direction, the business model scaled rapidly. Within only two years of launching its franchise model, ABCHI became Canada's largest home inspection network. Today, the corporation is headquartered in Florida, USA, and has franchises across the United States, Chile, Europe, New Zealand, and India.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              ABCHI relies on proprietary checklist software and advanced diagnostic training. This ensures that every inspector delivers a thorough, standardized, easy-to-read report, making the closing transaction transparent and seamless.
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/about/about-macj-abchi"
                className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                India Partnership
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" /> About Main Page
              </Link>
            </div>
          </div>

          {/* Right Block: Global Footprint */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Global Brand Features</h3>
            
            {/* Scraped Images Grid */}
            <div className="grid grid-cols-2 gap-3 mb-2">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-brand-border/40">
                <Image
                  src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/1.-Bill-Redfern-CEO-Founder-ABCHI.jpg"
                  alt="Bill Redfern - Founder ABCHI"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-brand-border/40">
                <Image
                  src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/2.-ABCHI-1.jpg"
                  alt="ABCHI USA Head Office"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            <ul className="flex flex-col gap-4">
              {[
                { title: "Florida Headquarters", text: "Headquartered in Fort Lauderdale, Florida, managing corporate standards and training frameworks." },
                { title: "Multinational Franchise Support", text: "Over 200 franchises globally across North America, South America, Europe, and Asia." },
                { title: "Insured & Certified Inspectors", text: "All inspectors are rigorously trained, carrying global insurance standards for property audits." },
                { title: "Standardized Technical Curriculums", text: "Continuous education covering electrical loads, building envelope, roofing, and structural diagnostics." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 leading-relaxed font-light">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-brand-light border border-brand-border/40 p-4 rounded-xl flex items-center gap-4 mt-2">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <Globe className="h-4 w-4 text-secondary animate-spin-slow" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Parent Corporation</p>
                <a href="https://abuyerschoice.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-1">
                  abuyerschoice.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
