"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap, CheckCircle2, BarChart2, ArrowLeft, PhoneCall } from "lucide-react";
import PageHero from "@/components/PageHero";

const whatWeInspect = [
  { title: "Power Quality Analysis", text: "Measures voltage fluctuations, current harmonics, power factor, and neutral loading at the main incomer panel." },
  { title: "Thermal Scan of Distribution Boards", text: "Infrared camera detects overloaded breakers, loose terminal connections, and unbalanced three-phase loads." },
  { title: "Load Profiling & Demand Logging", text: "Loggers installed on feeders record real-time consumption to identify peak demand spikes and idle loads." },
  { title: "Wiring Condition Assessment", text: "Checks cable sizing adequacy, insulation aging, earthing continuity, and compliance with IS 732 wiring standards." },
  { title: "Lighting & Equipment Efficiency", text: "Audits installed lamps, motors, and appliances for energy efficiency class and replacement ROI calculations." },
  { title: "Energy Saving Action Plan", text: "Quantifies savings potential in kWh and ₹ per annum, with prioritised retrofit actions and payback period." },
];

const whoCanAvail = [
  { role: "Residential Complexes", desc: "Common area lighting, lifts, pumps, and DG sets — all major consumers that can be optimised with a load audit." },
  { role: "Commercial Offices", desc: "Air conditioning, lighting, and IT equipment typically comprise 80% of office energy spend — all auditable." },
  { role: "Industrial Facilities", desc: "Motors, compressors, and process equipment are profiled under actual load to identify energy hogs." },
  { role: "Hospitality & Retail", desc: "Hotels and malls have 24×7 loads — even 5% savings translate to significant annual cost reductions." },
  { role: "Facility Managers", desc: "Periodic audits ensure consumption stays within benchmarks and compliance with BEE norms is maintained." },
  { role: "Green Building Consultants", desc: "Baseline energy audits are mandatory for IGBC, GRIHA, and LEED certification submissions." },
];

export default function ElectricalAuditPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Energy Audit"
        title="Electrical Utilities"
        titleHighlight="Energy Audit"
        subtitle="Scientific load analysis and power quality assessment — identifying waste, reducing bills, and ensuring electrical safety across residential, commercial, and industrial properties."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Energy Audit", href: "/services/energy-audit" },
          { label: "Electrical Utilities" },
        ]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">

          {/* Main block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Power & Load Diagnostics</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Most Properties Waste 15–30% of Electrical Energy Undetected
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                Poor load distribution, outdated wiring, low power factor, and inefficient appliances quietly inflate electricity bills every month. Without a scientific audit, these losses remain invisible — paid for, but never identified.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Classic Solution auditors deploy power quality analysers, thermal cameras on live distribution boards, and sub-metering loggers to map your entire electrical consumption profile. We identify every circuit, every feeder, and every load that is performing below standard.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                The audit delivers a detailed report with colour-coded panel thermal images, load graphs, power factor correction recommendations, and a ranked list of energy-saving measures with exact ROI calculations.
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                  Book Electrical Audit
                </Link>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/electrical-1-360x240.jpg" alt="Electrical Panel Inspection" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Direct-360x240.jpg" alt="Electrical Thermal Scan" fill className="object-cover" unoptimized />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Audit Scope</h3>
              <ul className="flex flex-col gap-4">
                {whatWeInspect.slice(0, 4).map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 leading-relaxed font-light">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
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

          {/* Full checklist */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Complete Scope</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Full Electrical Audit Checklist</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeInspect.map((item, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl shadow-sm hover:border-secondary transition-all flex gap-3">
                  <BarChart2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-xs text-brand-muted font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who can avail */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Target Clients</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Who Needs an Electrical Energy Audit?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whoCanAvail.map((item, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-6 rounded-2xl shadow-sm hover:border-secondary transition-all">
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-primary font-display mb-2">{item.role}</h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
