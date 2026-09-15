"use client";

import Link from "next/link";
import Image from "next/image";
import { Radar, Check, ArrowLeft, PhoneCall, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";

const gprSteps = [
  {
    step: "1",
    title: "DATA COLLECTION (TRANSMIT)",
    image: "/images/services/gpr/gpr_step1.png",
    desc: "The GPR antenna transmits high-frequency electromagnetic waves into the ground.",
  },
  {
    step: "2",
    title: "REFLECTION (RETURN SIGNALS)",
    image: "/images/services/gpr/gpr_step2.png",
    desc: "Waves reflect back when they hit objects or boundaries with different material properties.",
  },
  {
    step: "3",
    title: "DATA COLLECTION (RECEIVE)",
    image: "/images/services/gpr/gpr_step5.png",
    desc: "Reflected signals are received by the antenna and recorded by the GPR system.",
  },
  {
    step: "4",
    title: "DATA PROCESSING",
    image: "/images/services/gpr/gpr_step3.png",
    desc: "Raw data is processed to remove noise, improve clarity and enhance reflections.",
  },
  {
    step: "5",
    title: "DATA INTERPRETATION",
    image: "/images/services/gpr/gpr_step4.png",
    desc: "Interpreters analyze the processed data to identify and mark possible subsurface features.",
  },
  {
    step: "6",
    title: "RESULTS & REPORTING",
    image: "/images/services/gpr/gpr_step6.png",
    desc: "Results are compiled into reports with images, depth information, maps and interpretations.",
  },
];

const applications = [
  "Residential Buildings",
  "Commercial Buildings",
  "Industrial Facilities",
  "Hospitals",
  "Schools & Universities",
  "Bridges & Flyovers",
  "Highways & Roads",
  "Airports",
  "Metro & Railway Projects",
  "Warehouses",
  "Shopping Malls",
  "Solar Plants",
  "Infrastructure Projects",
];

const whyChooseGpr = [
  "100% Non-Destructive Inspection",
  "No Digging Required",
  "Fast & Accurate Results",
  "Safe for Existing Structures",
  "Reduces Construction Risks",
  "Prevents Damage to Hidden Utilities",
  "Saves Time & Cost",
  "High Accuracy Mapping",
  "Digital Reports with Images",
  "Suitable for New & Existing Buildings",
];

const benefits = [
  {
    title: "Prevent Damage",
    desc: "Prevent accidental damage during drilling or excavation.",
  },
  {
    title: "Locate Utilities",
    desc: "Locate hidden pipes, cables, and reinforcement before construction.",
  },
  {
    title: "Project Safety",
    desc: "Improve project safety and planning.",
  },
  {
    title: "Cost Efficiency",
    desc: "Reduce repair costs and delays.",
  },
  {
    title: "Informed Engineering",
    desc: "Support informed engineering and maintenance decisions.",
  },
];

export default function GPRPage() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      <PageHero
        badge="Non-Destructive Testing"
        title="Energy audit:"
        titleHighlight="GPR Survey Services"
        subtitle="Accurate Subsurface Imaging to Protect Your Project, Budget, and Team."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Non-Destructive Testing", href: "/services" },
          { label: "GPR Services" },
        ]}
      />

      <section className="py-10 sm:py-20 bg-brand-light px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl flex flex-col gap-12 sm:gap-24">

          {/* Main GPR Survey Banner Image */}
          <div className="w-full relative aspect-[1200/550] sm:aspect-[1200/469] rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border/40 shadow-premium bg-white">
            <Image
              src="/images/services/gpr/gpr_banner.jpg"
              alt="GPR Survey Banner"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </div>

          {/* Section 1: Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Advanced Radar Diagnostics
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Ground Penetrating Radar (GPR) Survey Services
              </h2>
              <p className="text-xs sm:text-base text-brand-text leading-relaxed font-light">
                Ground Penetrating Radar (GPR) is a non-destructive testing (NDT) technology that uses
                high-frequency electromagnetic waves to detect and map objects, utilities, and structural
                elements hidden beneath the ground or inside concrete without causing any damage.
              </p>
              <p className="text-xs sm:text-base text-brand-muted leading-relaxed font-light">
                It provides fast, accurate, and reliable subsurface information, making it ideal for
                construction, infrastructure, property inspections, and engineering projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
                <Link href="/contact" className="text-center px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                  Book GPR Survey
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-brand-border/30 shadow-premium flex flex-col gap-5 sm:gap-6">
              <div className="flex items-center gap-4 border-b border-brand-border pb-4">
                <div className="h-10 w-10 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <Radar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-primary">Subsurface Safety</h3>
                  <p className="text-[11px] sm:text-xs text-brand-muted font-light mt-0.5">Locate features up to 30+ feet deep.</p>
                </div>
              </div>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                GPR provides a safe window into slabs, soils, and concrete in real-time, eliminating the risk of cutting live cables or active utility pipes.
              </p>
              <div className="bg-brand-light border border-brand-border/40 p-4 rounded-xl flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Helpline</p>
                  <p className="text-xs sm:text-sm font-bold text-primary">76000 78862</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: How GPR Works (6-Step Infographic) */}
          <div className="border-t border-brand-border/40 pt-12 sm:pt-24">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 flex flex-col gap-2">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                NDT Workflow
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary">
                How Ground Penetrating Radar Works
              </h2>
              <p className="text-xs sm:text-base text-brand-muted font-light leading-relaxed">
                The complete lifecycle of GPR data acquisition, processing, interpretation, and reporting.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
              {gprSteps.map((step, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 overflow-hidden shadow-premium flex flex-col group hover:border-secondary transition-all duration-300">
                  {/* Step Image */}
                  <div className="relative aspect-[528/706] w-full bg-white">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                      priority={idx < 2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Applications */}
          <div className="border-t border-brand-border/40 pt-12 sm:pt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Applications List */}
              <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                  Field Usages
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                  Applications
                </h2>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {applications.map((app, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-brand-text">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Applications Image */}
              <div className="lg:col-span-6 flex flex-col gap-4 items-center justify-center">
                <div className="relative aspect-square w-full max-w-[460px] rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border/30 shadow-premium group">
                  <Image
                    src="/images/services/gpr/gpr_applications.jpg"
                    alt="Technician using GPR cart on asphalt"
                    fill
                    sizes="(max-width: 768px) 100vw, 460px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs sm:text-sm font-bold text-primary">On-site Utility Mapping</p>
                  <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 leading-relaxed font-light">
                    Real-time mapping of structural conduits and pipes on structural sites.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Section 5: Why Choose GPR? */}
          <div className="border-t border-brand-border/40 pt-12 sm:pt-24">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 flex flex-col gap-2">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Safety &amp; Precision
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary">
                Why Choose GPR?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {whyChooseGpr.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3.5 bg-white p-3.5 sm:p-4 rounded-xl border border-brand-border/20 shadow-sm hover:border-secondary transition-all">
                  <span className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Benefits */}
          <div className="border-t border-brand-border/40 pt-12 sm:pt-24">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 flex flex-col gap-2">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Value Added
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary">
                Key Benefits of GPR
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-border/40 p-6 sm:p-7 rounded-3xl shadow-sm hover:shadow-premium hover:border-secondary/40 transition-all duration-300 flex flex-col gap-3 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-11 w-11 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-primary/35">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-primary leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-brand-text font-normal leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA & Booking Block */}
          <div className="border-t border-brand-border/40 pt-10 flex flex-col sm:flex-row gap-6 items-center justify-between bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-border/20 shadow-premium">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                <PhoneCall className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Need a scanner team on-site?</p>
                <p className="text-sm sm:text-lg font-bold text-primary">Call Helpline: 76000 78862</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/contact" className="flex-1 sm:flex-initial text-center px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                Book GPR Scan
              </Link>
              <Link href="/services" className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                <ArrowLeft className="h-4 w-4" /> All Services
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
