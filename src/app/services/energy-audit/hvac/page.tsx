"use client";

import Link from "next/link";
import Image from "next/image";
import { Wind, CheckCircle2, Thermometer, ArrowLeft, PhoneCall } from "lucide-react";
import PageHero from "@/components/PageHero";

const whatWeInspect = [
  { title: "Coil Cleanliness & Fouling Assessment", text: "Evaporator and condenser coils are inspected for dust fouling, bio-film, and scale deposits that degrade heat transfer efficiency." },
  { title: "Refrigerant Charge Verification", text: "Checks system superheat and subcooling against manufacturer specs to detect over- or under-charged systems hurting compressor life and COP." },
  { title: "Airflow Balance & Distribution", text: "Measures supply and return air quantities at each diffuser and grille to identify rooms with poor cooling or cross-contamination." },
  { title: "Duct Leakage & Insulation Check", text: "Identifies duct leakage points, damaged insulation, and flexible duct kinks causing cooling loss before it reaches the occupied space." },
  { title: "Drain & Condensate System Audit", text: "Checks drain pan cleanliness, slope, and drain line flow to prevent water overflow, mold growth, and indoor air quality issues." },
  { title: "Controls, BMS & Scheduling Audit", text: "Reviews thermostat setpoints, BMS programming, occupancy scheduling, and setback strategies to eliminate unnecessary runtime." },
];

const whoCanAvail = [
  { role: "Residential Buildings", desc: "Split ACs and multi-split systems that haven't been serviced or checked for refrigerant charge loss and coil fouling." },
  { role: "Corporate Offices", desc: "VRF/VRV and centralised chiller plants where comfort complaints and high energy bills indicate system imbalance." },
  { role: "Hotels & Hospitality", desc: "24×7 HVAC loads where even 10% efficiency improvement represents significant annual savings and guest comfort." },
  { role: "Hospitals & Labs", desc: "Critical HVAC systems where airflow balance, filtration, and temperature control are non-negotiable for operations." },
  { role: "Industrial Facilities", desc: "Process cooling, cleanrooms, and server rooms where HVAC failures cause production losses or equipment damage." },
  { role: "Green Building Projects", desc: "HVAC energy performance baselines are required for LEED, IGBC, and GRIHA certification submissions." },
];

export default function HVACAuditPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Energy Audit"
        title="HVAC Inspection"
        subtitle="Comprehensive inspection of air conditioning and ventilation systems — improving cooling efficiency, reducing energy bills, and extending equipment lifespan."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Energy Audit", href: "/services/energy-audit" },
          { label: "HVAC Inspection" },
        ]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">

          {/* Main block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">HVAC Performance Diagnostics</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                HVAC Consumes 40–60% of Your Building's Energy Bill
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                Air conditioning and ventilation systems are the single largest energy consumer in most Indian buildings. Yet they are rarely audited beyond annual filter cleaning. Dirty coils, refrigerant leaks, blocked drains, and incorrect thermostat settings quietly compound costs year after year.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Classic Solution's HVAC audit covers split ACs, VRF/VRV systems, central chillers, air handling units (AHUs), fan coil units (FCUs), and ducted systems. Our engineers carry refrigerant manifold gauges, airflow anemometers, thermographic cameras, and data loggers for a complete system health picture.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                The report delivers a defect-priority list, energy saving estimate in kWh and ₹, maintenance recommendations, and an equipment replacement ROI schedule — actionable immediately by your facility team.
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                  Book HVAC Audit
                </Link>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Air-Conditioning-Systems02-360x240.jpg" alt="HVAC AC Unit Inspection" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Exhaust-Systems01-360x240.jpg" alt="Exhaust Duct Audit" fill className="object-cover" unoptimized />
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
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Full HVAC Audit Checklist</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeInspect.map((item, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl shadow-sm hover:border-secondary transition-all flex gap-3">
                  <Thermometer className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
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
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Who Needs an HVAC Audit?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whoCanAvail.map((item, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-6 rounded-2xl shadow-sm hover:border-secondary transition-all">
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                    <Wind className="h-5 w-5" />
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
