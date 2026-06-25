"use client";

import { motion } from "framer-motion";
import { Zap, AlertTriangle, Eye, Activity, ShieldCheck, HelpCircle } from "lucide-react";

export default function ElectricalScope() {
  const hazards = [
    { title: "Short Circuit", desc: "Caused by insulation breakdown, overloading, or water contact." },
    { title: "Electrocution", desc: "Hazard of shock due to lack of proper grounding/earthing checks." },
    { title: "Blowing off Components", desc: "Sudden voltage surges due to unbalanced phase distribution." },
    { title: "Fire Accidents", desc: "Severe risk when overloaded cables overheat inside PVC conduits." },
    { title: "Injury & Property Damage", desc: "Substandard wiring leads to equipment failures and risk to life." }
  ];

  const causes = [
    "Substandard/under-rated wire gauge installations",
    "Overheating of concealed wires and circuit components",
    "Unbalanced load distribution across electrical phases",
    "Improper positioning or damp-prone installation of switchboards"
  ];

  const scopes = [
    "General condition check of Power & UPS sockets, switchboards, and distribution boards",
    "Comprehensive Earthing System & Ground Impedance inspection",
    "Balanced Three-Phase Load Distribution validation",
    "Safety & Fire safety audits of switchboard placements",
    "Concealed wiring checks for physical or heat degradation",
    "Inspection of the three-phase meter and sub-meter connections",
    "Custom DB (Distribution Board) Charting on need basis"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6 text-left">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Card: Hazards & Causes */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#fdf4f4] to-[#fffcfc] border border-[#f1d6d6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <span className="text-secondary font-bold uppercase text-[10px] tracking-wider block">Electrical Safety</span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-primary">Damages &amp; Hazards</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#7a6a6a] leading-relaxed mb-6 font-light">
              Electricity is a core part of our lives, but substandard execution comes with severe safety risks.
            </p>

            {/* List of Hazards */}
            <div className="space-y-4 mb-6">
              {hazards.map((haz, index) => (
                <div key={index} className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-primary">{haz.title}</h4>
                    <p className="text-[11px] text-[#7a6a6a] leading-relaxed">{haz.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Causes */}
          <div className="border-t border-[#f1d6d6] pt-6 mt-2">
            <h4 className="text-xs sm:text-sm font-extrabold font-display text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-secondary" /> Key Causes of Damage
            </h4>
            <ul className="space-y-2">
              {causes.map((cause, index) => (
                <li key={index} className="text-xs text-[#7a6a6a] flex items-start gap-2 leading-relaxed">
                  <span className="text-secondary font-bold text-[10px]">•</span>
                  <span>{cause}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Card: Scope of Work */}
        <div className="lg:col-span-7 bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Zap className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <span className="text-secondary font-bold uppercase text-[10px] tracking-wider block">Diagnostics</span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-primary">Inspection Scope of Work</h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6 font-light">
              Our engineers conduct comprehensive inspections on the overall electrical infrastructure of your property using calibrated testers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {scopes.map((scope, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-brand-light p-3.5 rounded-xl border border-brand-border/40"
                >
                  <div className="h-5 w-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                    ✓
                  </div>
                  <span className="text-xs font-semibold text-primary leading-relaxed">
                    {scope}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-brand-border/30 pt-6 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-secondary" />
              <div>
                <p className="text-xs font-bold text-primary font-display">Safety First Philosophy</p>
                <p className="text-[10px] text-brand-muted">Calibrated testing of all switches and distribution hubs.</p>
              </div>
            </div>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-xs font-bold rounded-full transition-all duration-300 active:scale-95 shrink-0"
            >
              Book Electrical Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
