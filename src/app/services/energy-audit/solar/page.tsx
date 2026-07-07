"use client";

import Link from "next/link";
import Image from "next/image";
import { Sun, CheckCircle2, Zap, ArrowLeft, PhoneCall } from "lucide-react";
import PageHero from "@/components/PageHero";

const whatWeInspect = [
  { title: "Hotspot & Cell Defect Detection", text: "Infrared thermal camera identifies hotspots, bypassed cells, and micro-cracks in individual panels causing localized power loss." },
  { title: "String Performance Analysis", text: "Measures output voltage and current of each string to isolate shading effects, mismatch losses, and degraded panel groups." },
  { title: "Inverter Efficiency Check", text: "Reviews inverter logs, conversion efficiency, MPPT tracking accuracy, and alarm history for underperformance." },
  { title: "DC Wiring & Earthing Audit", text: "Inspects cable insulation condition, connector joints, earthing continuity, and DC isolator functionality." },
  { title: "Mounting Structure Integrity", text: "Visually checks panel frames, clamps, and mounting rails for corrosion, loose fasteners, and wind load compliance." },
  { title: "Soiling & Shading Loss Estimate", text: "Calculates estimated yield loss from soiling, bird droppings, and partial shading with recommended cleaning frequency." },
];

const whoCanAvail = [
  { role: "Residential Solar Owners", desc: "Verify your rooftop installation is performing as promised by the installer and identify any degraded panels." },
  { role: "Commercial & Industrial Plants", desc: "Large MW-scale plants benefit from drone-assisted thermal scans and string-level performance benchmarking." },
  { role: "Solar EPC Contractors", desc: "Pre-commissioning audits ensure quality workmanship and system performance before client handover." },
  { role: "Banks & Project Finance", desc: "Independent energy yield verification for loan disbursement and project viability assessments." },
  { role: "Real Estate Developers", desc: "Verify rooftop solar performance for IGBC/GRIHA ratings and government green building compliance." },
];

export default function SolarAuditPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Energy Audit"
        title="Solar Panel"
        titleHighlight="Inspection & Audit"
        subtitle="Thermal imaging-based performance assessment of rooftop and ground-mounted solar PV systems — pinpointing every panel losing you money."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Energy Audit", href: "/services/energy-audit" },
          { label: "Solar Panel Inspection" },
        ]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">

          {/* Main block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Infrared PV Diagnostics</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Solar Panels Degrade Silently — We Find What's Costing You
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                After installation, most solar systems are never independently audited. Dust accumulation, micro-cracks from hailstorms, degraded bypass diodes, and shading from newly built structures silently reduce output by 15–30% over time — without triggering any visible alarm.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Classic Solution's solar audit uses FLIR infrared thermal cameras to scan each panel under load. Defective cells appear as temperature anomalies — hot cells, warm strings, and cool open-circuit panels are each a distinct signature our engineers interpret on-site.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                The audit concludes with a prioritised panel-level defect register, yield loss estimate in kWh and ₹, and a corrective action plan to restore full system performance.
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                  Book Solar Audit
                </Link>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&q=80" alt="Solar Panel Inspection" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" alt="Solar Thermal Scan" fill className="object-cover" unoptimized />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">What We Inspect</h3>
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
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Full Solar Audit Checklist</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeInspect.map((item, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl shadow-sm hover:border-secondary transition-all flex gap-3">
                  <Sun className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
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
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Who Should Get a Solar Audit?</h2>
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
