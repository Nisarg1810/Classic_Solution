"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap, CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, AlertOctagon, HelpCircle, AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";

const hazards = [
  "Accidental electrocutions & severe burns",
  "Concealed short circuits leading to fire",
  "Blowing off lamps & sensitive electronic components",
  "Property degradation due to wiring overheating",
  "Unbalanced phase loads causing voltage surges"
];

const warnings = [
  "Flickering or blinking lights in room units",
  "Mild tingle / electric shock when touching appliances",
  "Burning odors or smoke smell from outlets",
  "Frequent breaker (MCB) trips or switchboard sparks",
  "Discolored outlet covers or hot switch plates",
  "Damaged or brittle wire insulation"
];

const causes = [
  "Under-rated wire gauge used during construction",
  "Concealed wires running hot inside plaster channels",
  "Improperly distributed load across three phases",
  "Naked wire connections used inside switchboards",
  "Switch/socket boards installed too close to water sinks",
  "Double-phase power feed connected to single-phase board"
];

const whenToSchedule = [
  "When buying / renting a new property",
  "If you experience recurring breaker trips",
  "Before launching major home renovations",
  "If the property is older than 10-15 years",
  "After completing DIY electrical repairs",
  "If required by your property insurance company"
];

export default function ServicesElectrical() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Safety Audit"
        title="Electrical Inspections of a"
        titleHighlight="Property & Distribution Panels"
        subtitle="Prevent electrical fire hazards. We scan distribution switchboards, wiring, and breaker loads using advanced thermal imaging technology."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Electrical Inspections" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">
          
          {/* Main Narrative Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Block: Narrative */}
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Electrical Safety First</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Detecting Thermal Anomalies Before Sparks Occur
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                Over 80% of accidental building fires originate from electrical faults like loose contacts, circuit overloading, or sub-standard wiring insulation. Because these faults occur behind switchboard panels, they are invisible until they spark.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Classic Solution conducts visual and thermal scans of your distribution boards (MDBs, SDBs) and major appliance circuits under normal working loads. Our thermal cameras identify localized hot spots caused by high electrical resistance.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                We verify the socket wiring polarity (checking for inverted phase/neutrals), inspect grounding earthing resistance values, and test Earth Leakage Circuit Breakers (ELCBs) to ensure they trip immediately in case of leakage.
              </p>

              <div className="flex gap-4 mt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
                >
                  Book Electrical Scan
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            {/* Right Block: Points */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              {/* Electrical Inspection Photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/electrical-1-360x240.jpg" alt="Electrical Panel Thermal Scan" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Direct-360x240.jpg" alt="Direct Electrical Inspection" fill className="object-cover" unoptimized />
                </div>
              </div>

              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">What is Checked?</h3>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "Switchboard & Breaker Thermography", text: "Thermal scans identify loose terminals, overloaded breakers, or imbalanced phases in distribution panels." },
                  { title: "Grounding & Earthing Safety", text: "Measures phase-earth voltages to ensure grounding works, preventing shocks on appliance bodies." },
                  { title: "Wiring Insulation Checks", text: "Inspects conduit placements, wiring gauge suitability, and potential insulation heat damage." },
                  { title: "ELCB Trip Testing", text: "Ensures residual current breakers trip properly under leakage, securing human life safety." }
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
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Safety Guarantee</p>
                  <p className="text-sm font-bold text-primary">Certified safety compliance checks</p>
                </div>
              </div>
            </div>

          </div>

          {/* Dangers & Warning Signs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-border/40 pt-14">
            
            {/* Dangers */}
            <div className="bg-red-50/20 border border-red-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-red-100 text-secondary flex items-center justify-center shrink-0">
                  <AlertOctagon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-primary font-display">Electrical Hazards & Damages</h3>
              </div>
              <ul className="flex flex-col gap-3 mt-2 text-xs sm:text-sm text-brand-text">
                {hazards.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold">�</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warnings */}
            <div className="bg-yellow-50/20 border border-yellow-100 rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-primary font-display">Common Warning Signals</h3>
              </div>
              <ul className="flex flex-col gap-3 mt-2 text-xs sm:text-sm text-brand-text">
                {warnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-yellow-600 font-bold">�</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Common Causes */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Technical Faults</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">What Causes Electrical Failures?</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {causes.map((cause, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl shadow-sm hover:border-secondary transition-all">
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">{cause}</p>
                </div>
              ))}
            </div>
          </div>

          {/* When to Schedule */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Scheduling</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">When to Schedule an Inspection?</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {whenToSchedule.map((time, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-4 rounded-xl shadow-sm text-center">
                  <p className="text-xs sm:text-sm font-semibold text-primary">{time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
