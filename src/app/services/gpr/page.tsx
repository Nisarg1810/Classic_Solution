"use client";

import Link from "next/link";
import Image from "next/image";
import { Radar, CheckCircle2, Layers, ArrowLeft, PhoneCall, Building2, ShieldCheck, Zap, HelpCircle } from "lucide-react";
import PageHero from "@/components/PageHero";

const whatWeDetect = [
  {
    title: "Public & Private Utilities",
    text: "Water lines, gas mains, electrical conduits, fiber optics, and PVC/clay pipes.",
  },
  {
    title: "Concrete Embedded Elements",
    text: "Rebar layouts, post-tension cables, conduits, and structural beams.",
  },
  {
    title: "Subsurface Anomalies",
    text: "Hidden structural voids, sinkholes, soil washouts, and old foundations.",
  },
  {
    title: "Environmental Hazards",
    text: "Buried storage tanks (USTs) and forgotten septic systems.",
  },
];

const ndtBenefits = [
  {
    title: "Zero Destruction",
    desc: "Eliminate the need for exploratory digging or concrete test scores.",
  },
  {
    title: "Real-Time Data",
    desc: "Receive immediate on-site visual markings and comprehensive digital mapping reports.",
  },
  {
    title: "Cost & Time Savings",
    desc: "Prevent catastrophic utility strikes and keep your project moving on schedule.",
  },
  {
    title: "Versatility",
    desc: "Proven accuracy across commercial construction sites, industrial facilities, and residential properties.",
  },
];

export default function GPRPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Non-Destructive Testing"
        title="Ground Penetrating Radar"
        titleHighlight="(GPR) Services"
        subtitle="Accurate Subsurface Imaging to Protect Your Project, Budget, and Team."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "GPR Services" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">

          {/* Main block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">NDT Concrete Scanning</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Scan Concrete Slabs, Asphalt & Soil Without Structural Damage
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light font-medium text-secondary">
                Striking a hidden utility line, rebar grid, or structural cable can instantly derail your project timeline, trigger massive financial liabilities, and put your field crew at severe safety risk.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Our state-of-the-art Ground Penetrating Radar (GPR) service provides a fast, precise, and completely non-destructive window into what lies beneath the surface. Using advanced electromagnetic radar pulses, our certified technicians scan concrete slabs, asphalt, and soil to map out subsurface obstacles in real time — all without any digging, drilling, or structural damage.
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                  Book GPR Scan
                </Link>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2022/02/How-Home-Inspection-solves-the-problems-of-Waterproofing-Companies-600x400-1.jpg" alt="GPR Concrete Scan Action" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2019/02/Damp-Seepage-Case-Study-MACJ.jpg" alt="Subsurface Slab Analysis" fill className="object-cover" unoptimized />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Why Choose NDT?</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                Ground Penetrating Radar is fully non-destructive and safe for occupied workspaces. It needs access from one side only, making it clean, quick, and highly precise.
              </p>
              <div className="bg-brand-light border border-brand-border/40 p-4 rounded-xl flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Helpline</p>
                  <p className="text-sm font-bold text-primary">76000 78862</p>
                </div>
              </div>
            </div>
          </div>

          {/* What we detect */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">What We Scan</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">What We Detect &amp; Locate</h2>
              <p className="text-brand-muted mt-2 text-xs sm:text-sm font-light">High-resolution subsurface mapping for both metallic and non-metallic objects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {whatWeDetect.map((item, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-6 rounded-3xl shadow-sm hover:border-secondary transition-all flex flex-col gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                    <Radar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary font-display mb-1">{item.title}</h3>
                    <p className="text-xs text-brand-muted font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NDT Benefits Grid */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">NDT Approach</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Why Choose Our NDT Approach?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {ndtBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl shadow-sm hover:border-secondary transition-all flex flex-col gap-2">
                  <div className="h-10 w-10 rounded-2xl bg-primary/10 text-secondary flex items-center justify-center shrink-0 mb-2">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary font-display">{benefit.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-light">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Block */}
          <div className="border-t border-brand-border/40 pt-14 bg-primary text-white p-8 sm:p-12 rounded-[32px] text-center flex flex-col items-center gap-6 shadow-premium">
            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Layers className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold font-display max-w-xl leading-tight">
              Don&apos;t Leave Your Project to Guesswork
            </h3>
            <p className="text-white/70 text-xs sm:text-sm max-w-lg leading-relaxed font-light">
              Contact our team today to schedule an expert on-site GPR scan before you cut, core, or excavate.
            </p>
            <Link href="/contact" className="px-8 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full text-xs uppercase tracking-wider transition-all shadow-md">
              Schedule GPR Scan
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
