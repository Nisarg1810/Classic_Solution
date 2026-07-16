"use client";

import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck, CheckCircle2, Building2, PhoneCall, ArrowLeft, ShieldCheck, Heart, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/PageHero";

const inspectionProcessPhases = [
  "We can come in a bit before finishing stage (when the structure is ready but finishing has not started or started but delivery has not begun) and give a function wise – apartment wise inspection reports or the full inspection report. These functions would typically be civil, flooring, woodwork, window, plumbing, electrical, etc.",
  "These reports will then be given to respective contractors / departments who will correct the respective issues.",
  "Developers can take the decision of correction parameters.",
  "Our team will then go and verify the corrections done and give you a status report.",
  "Ofcourse, the inspection process and scope can be tailored to developers’ needs and requirements.",
  "This will give developers peace of mind and confidence and ensure desired finishing of the units and minimal customer complaints."
];

const developerBenefits = [
  "It is not possible for developers or their senior management to continuously monitor each and very apartment and / or each & every aspect of construction.",
  "Developers / Senior Management are dependent on their contractors’ / shop floor managers to ensure cohesive construction and finishing of dream homes.",
  "Home Inspection can provide a third-party audit on behalf of the developers as a quality assurance on the construction and finishing of units.",
  "Home inspections can save developers substantial money and effort by assuring quality control over work done by contractors even when they are not actually on-site.",
  "With enactment of Real Estate Regulation and Development Act, 2016, It can provide further assurance to developers on quality control of the homes being built by them.",
  "Give developers peace of mind by assuring that the construction is being done correctly.",
  "Add to their credibility and professionalism. Help their brands to grow.",
  "We maintain strict confidentiality and report only to the persons instructed by the real estate developers / promoters."
];

const inspectionImages = [
  { src: "/images/services/7/image 86.png", alt: "Electrical distribution panel inspection scan" },
  { src: "/images/services/7/image 90.png", alt: "Circuit breaker terminal board thermal audit" },
  { src: "/images/services/7/image 88.png", alt: "Large transformer thermal load inspection" },
  { src: "/images/services/7/image 89.png", alt: "HV insulator station connection scan" },
  { src: "/images/services/7/image 87.png", alt: "High voltage power line substation thermal scan" }
];

export default function ServicesConstructionFinishing() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      <PageHero
        badge="Developer Quality Checks"
        title="Construction Finishing Inspection"
        titleHighlight="for Real Estate Developers"
        subtitle="Building or Home Inspection before Buying"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Construction Finishing" }]}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Navigation Actions */}
        <div className="flex gap-4 mb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
          >
            Request Developer Audit
          </Link>
        </div>

        {/* Feature Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {/* Main Large Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[300px] rounded-3xl overflow-hidden border border-brand-border/20 shadow-premium bg-white group hover:scale-[1.01] transition-all duration-300">
            <Image
              src="/images/services/7/image 86.png"
              alt="Electrical distribution panel inspection scan"
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>

          {/* 2x2 Grid for other 4 images */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/20 shadow-sm bg-white group hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/images/services/7/image 90.png"
                alt="Circuit breaker terminal board thermal audit"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/20 shadow-sm bg-white group hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/images/services/7/image 88.png"
                alt="Large transformer thermal load inspection"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/20 shadow-sm bg-white group hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/images/services/7/image 89.png"
                alt="HV insulator station connection scan"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/20 shadow-sm bg-white group hover:scale-[1.02] transition-all duration-300">
              <Image
                src="/images/services/7/image 87.png"
                alt="High voltage power line substation thermal scan"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* 1. Value Added Services: The Inspection Process */}
        <section className="mb-10 bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-premium text-left">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs">Value Added Services</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary leading-tight mt-1 mb-4">
            The Inspection Process
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light mb-6">
            In terms of our experience of providing services to real estate developers, the following process has been normally advised by our developer customers. Typically, we would do inspections in 2 to 3 phased manners:
          </p>
          <ul className="flex flex-col gap-4 text-xs sm:text-sm text-brand-text">
            {inspectionProcessPhases.map((phase, idx) => (
              <li key={idx} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <p className="font-light leading-relaxed">{phase}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 2. Benefits to Real Estate Developers */}
        <section className="mb-12 bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-premium text-left">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs">Partnership Advantages</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary leading-tight mt-1 mb-4">
            Benefits to Real Estate Developers
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light mb-6 border-b border-brand-border pb-4">
            We become the eyes and ears of developers and help in the following ways:
          </p>
          <ul className="flex flex-col gap-4 text-xs sm:text-sm text-brand-text">
            {developerBenefits.map((benefit, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{idx + 1}</div>
                <p className="font-light leading-relaxed">{benefit}</p>
              </li>
            ))}
          </ul>
        </section>

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
            Book Developer Audit
          </Link>
        </div>

      </div>
    </div>
  );
}
