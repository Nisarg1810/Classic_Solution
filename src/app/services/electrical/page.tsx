"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap, CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft, AlertOctagon, AlertTriangle, Eye, Activity, Heart, Camera, Home } from "lucide-react";
import PageHero from "@/components/PageHero";

const hazards = [
  "Electrocution",
  "Short circuit",
  "Blowing off lamps and electrical components",
  "Fire accidents",
  "Injury / death of person (shock, severe burns, heart attack, or electrocution)",
  "Property damage"
];

const warnings = [
  "Flickering or blinking lights.",
  "Electrical shocks – even a mild tingle.",
  "Sparks or burning odours.",
  "Frequent blown fuses.",
  "MCB (Miniature Circuit Breaker) that trips frequently or sparks during operating.",
  "Overheating – Wires getting heated quickly (though not visible usually), discolored switch plates or outlet covers.",
  "Damaged wire insulation (though not visible usually)."
];

const causes = [
  "Under rated wire Gauge",
  "Overheating wires and electrical components",
  "Unbalanced and over load distribution at phases",
  "Improper position and installation of switch / socket boards",
  "Safety Issue: Double phase power used in single phase switch board.",
  "Naked wire used for switch to switch parallel connections (increases current loss and decreases efficiency).",
  "Switch socket board close to sink (affected due to water splashing during sink use)."
];

const highRiskAreas = [
  "Meter room",
  "Distribution Box in your home / property",
  "High wattage electrical Appliances",
  "Overheating wires",
  "Socket outlets and lighting fittings"
];

const whenToSchedule = [
  "When buying a home / property",
  "If You Have Sudden or Reoccurring Problems",
  "Common Symptoms of Home Electrical Problems – Warning Signals show up",
  "Before Major Home Upgrades / Home Renovations",
  "If You Live in an Older Home",
  "After DIY Electrical Work / Electric Repairs",
  "If You Didn't Get a Proper Inspection Before Buying",
  "Severe weather events / natural calamity damages",
  "When Your Homeowners Insurance Company Requires It"
];

const keyParameters = [
  "Electrical Safety (Our first priority during inspection).",
  "Thorough inspection of the electrical wiring system (Detailed Wiring connection & Wire Gauge).",
  "Inspection of each and every switch / socket boards (Operation and wiring).",
  "Position of installation of electrical fans, light points, switch & socket boards.",
  "Need Based DB / MCB charting (Value added service giving you the exact location of the load distributed from each MCB)",
  "We ensure a home, free of electrical shock & electrical accident, and better service life of electrical equipment along with electrical safety."
];

const scopeOfWork = [
  "General electrical inspection on the present condition of the electrical system comprising of Power / UPS socket, electrical switchboards, D.B accessories, lights, etc.",
  "Inspection of wirings (findings include faulty / loosely connected / old / under gauge wire which may result in electrical leakages and short circuits).",
  "Earthing System inspection.",
  "Three phase Load Distribution.",
  "Inspection of the three-phase meter / sub meter (For ensuring that there is no fault at the meter).",
  "Electrical Safety & Fire safety aspects.",
  "DB Charting (in case required)."
];

const comparisonCases = [
  {
    title: "Overheating M.C.B in Electrical Panel",
    visualImg: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/electrical-1-360x240.jpg",
    thermalImg: "https://macj-abuyerschoice.com/wp-content/uploads/2017/01/Scope-of-Services-01-360x240.jpg",
    desc: "To the naked eye, the circuit breakers look perfectly normal. The thermal camera reveals a dangerous heat buildup (hot spot) indicating a loose terminal connection or overload."
  },
  {
    title: "Overheating Wire in Distribution Box",
    visualImg: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Direct-360x240.jpg",
    thermalImg: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Coverage-04-1-360x240.jpg",
    desc: "Concealed or bundled wires run hot due to under-gauge wire installation. The thermal scan isolates the single hot wire from the bunch to prevent localized insulation melt and short-circuit fires."
  }
];

export default function ServicesElectrical() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Safety Audit"
        title="Electrical Inspections of a"
        titleHighlight="Home / Property"
        subtitle="Put Home & Family Safety First when stringing up the lights. Verify the health of your distribution panels and wiring systems."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Electrical Inspections" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">
          
          {/* Main Narrative Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Block: Narrative */}
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Put Safety First</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Electricity is Part of Our Lives But Comes with Hazards
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                We use electricity from the moment we wake up, throughout the day, and even when we are asleep. Although we feel intolerable without it, the fact is that numerous accidents, mostly fire related, are caused due to electric hazards. 
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                We sometimes forget how powerful and dangerous electric faults can be. Negligence — whether laying an electrical layout, jointing wires, choosing incorrect wire gauges, or poor supervision — is the main cause. Hence, ensuring that the electrical system at your property is safe should be one of your prime concerns.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Our experience speaks for itself: We have inspected <strong>more than 800 properties</strong> (apartments, standalone units, bungalows, office space, and heritage buildings), detecting and providing remedies for numerous electrical problems to keep families safe.
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

            {/* Right Block: Photos & Diagnostics */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/electrical-1-360x240.jpg" alt="Electrical Panel Thermal Scan" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Direct-360x240.jpg" alt="Direct Electrical Inspection" fill className="object-cover" unoptimized />
                </div>
              </div>

              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Thermal Imaging Diagnostics</h3>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                Since modern properties use concealed wiring systems, tracing an overheated wire or component visually is exhausting. By using thermal imaging technology, we detect anomalies, overloaded breakers, and loose contacts behind walls and distribution panels.
              </p>

              <div className="bg-brand-light border border-brand-border/40 p-4 rounded-xl flex items-center gap-4 mt-2">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                  <Activity className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Motto & Customer Satisfaction</p>
                  <p className="text-sm font-bold text-primary">Least Damage | Low Cost Repair | Long Term Solution</p>
                </div>
              </div>
            </div>

          </div>

          {/* Visual vs Infrared Comparison Showcase */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Comparative Diagnostics</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Visual vs. Infrared Thermal Scan Comparison</h2>
              <p className="text-brand-muted mt-2 text-xs sm:text-sm font-light">See how thermal scans pinpoint safety risks invisible to the naked eye.</p>
            </div>
            
            <div className="flex flex-col gap-10">
              {comparisonCases.map((c, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-4 flex flex-col gap-3 text-left">
                    <h3 className="text-base sm:text-lg font-bold text-primary font-display flex items-center gap-2">
                      <Camera className="h-5 w-5 text-secondary" /> {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">{c.desc}</p>
                  </div>
                  
                  <div className="md:col-span-8 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold text-brand-muted uppercase tracking-widest text-center">Visual View</span>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/40 shadow-sm">
                        <Image src={c.visualImg} alt={`${c.title} Visual`} fill className="object-cover" unoptimized />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest text-center">Infrared Thermal View</span>
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-secondary shadow-sm">
                        <Image src={c.thermalImg} alt={`${c.title} Thermal`} fill className="object-cover" unoptimized />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dangers & Warning Signs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-border/40 pt-14">
            {/* Hazards */}
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
                    <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning Signals */}
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
                    <CheckCircle2 className="h-4 w-4 text-yellow-600 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scope of Work & Key Parameters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-border/40 pt-14">
            {/* Scope */}
            <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-primary font-display border-b pb-2">Scope of Inspection Work</h3>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-brand-text">
                {scopeOfWork.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Home className="h-4 w-4 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Parameters */}
            <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
              <h3 className="text-lg font-bold text-primary font-display border-b pb-2">Key Inspection Parameters</h3>
              <ul className="flex flex-col gap-3 text-xs sm:text-sm text-brand-text">
                {keyParameters.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Home className="h-4 w-4 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Common Causes & High Risk Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-border/40 pt-14">
            {/* Causes */}
            <div>
              <h3 className="text-lg font-bold text-primary font-display mb-4">Causes of Electrical Faults</h3>
              <div className="flex flex-col gap-3">
                {causes.map((cause, idx) => (
                  <div key={idx} className="bg-white border border-brand-border/30 p-4 rounded-xl shadow-sm">
                    <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">{cause}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* High Risk Areas */}
            <div>
              <h3 className="text-lg font-bold text-primary font-display mb-4">High Risk Areas & Components</h3>
              <div className="flex flex-col gap-3">
                {highRiskAreas.map((area, idx) => (
                  <div key={idx} className="bg-white border border-brand-border/30 p-4 rounded-xl shadow-sm flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-secondary shrink-0" />
                    <p className="text-xs sm:text-sm font-semibold text-primary">{area}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* When to Schedule */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Scheduling</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">When to Schedule an Electrical Inspection?</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {whenToSchedule.map((time, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-4 rounded-xl shadow-sm text-center flex items-center justify-center min-h-[70px]">
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
