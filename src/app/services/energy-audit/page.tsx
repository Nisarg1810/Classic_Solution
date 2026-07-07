"use client";

import Link from "next/link";
import { Sun, Zap, Wind, CheckCircle2, ArrowLeft, PhoneCall } from "lucide-react";
import PageHero from "@/components/PageHero";

const auditTypes = [
  {
    id: "solar",
    icon: Sun,
    badge: "Solar Panel Inspection",
    title: "Solar Panel Energy Audit",
    heading: "Maximise Returns from Your Solar Investment",
    desc1:
      "Solar panels degrade silently. Dust accumulation, micro-cracks, hotspots, and shading losses reduce output without triggering any visible alarm. Classic Solution's solar inspection uses infrared thermal imaging and I-V curve tracing to identify underperforming panels.",
    desc2:
      "We assess panel cleanliness, string configuration losses, inverter efficiency, mounting structural integrity, and DC wiring quality — delivering a full performance report so you can restore and protect your investment.",
    points: [
      { title: "Hotspot Detection", text: "Thermal camera identifies hotspots and bypassed cells in individual panels." },
      { title: "String Performance Analysis", text: "Measures output of each string to locate shading, mismatch, or degraded panels." },
      { title: "Inverter & Wiring Audit", text: "Checks inverter logs, earthing adequacy, and DC cable condition." },
      { title: "Cleaning & Maintenance Report", text: "Delivers a prioritised action plan to restore full system yield." },
    ],
    cta: "Book Solar Audit",
  },
  {
    id: "electrical",
    icon: Zap,
    badge: "Electrical Utilities Audit",
    title: "Electrical Energy Audit",
    heading: "Cut Energy Waste with Scientific Load Analysis",
    desc1:
      "Most homes and commercial properties waste 15–30% of electrical energy due to poor load distribution, outdated wiring, power factor issues, and inefficient appliances. Classic Solution auditors analyse your entire electrical infrastructure.",
    desc2:
      "We use power quality analysers, thermal cameras on distribution boards, and load loggers to map consumption patterns, identify energy hogs, and recommend cost-saving corrective measures — all without shutting down your operations.",
    points: [
      { title: "Power Quality Analysis", text: "Measures voltage, current, harmonics, and power factor at the main incomer." },
      { title: "Thermal Scan of DB Panels", text: "Detects overloaded circuits, loose connections, and unbalanced phases." },
      { title: "Load Profiling", text: "Logs real-time consumption of each feeder to identify peak demand wastage." },
      { title: "Energy Saving Report", text: "Quantifies savings potential with recommended retrofit actions and ROI estimates." },
    ],
    cta: "Book Electrical Audit",
  },
  {
    id: "hvac",
    icon: Wind,
    badge: "HVAC Inspection",
    title: "HVAC Energy Audit",
    heading: "HVAC Systems: India's Largest Energy Consumer",
    desc1:
      "Air conditioning and ventilation typically account for 40–60% of a building's energy bill. Dirty coils, refrigerant leaks, choked filters, and incorrect thermostat settings silently inflate costs year after year.",
    desc2:
      "Classic Solution's HVAC audit covers split ACs, VRF/VRV systems, central chillers, AHUs, and ducting. We inspect refrigerant charge, coil condition, drain health, airflow balance, and controls programming to maximise efficiency and extend equipment life.",
    points: [
      { title: "Coil & Filter Condition Check", text: "Assesses fouling levels and recommends cleaning frequency based on load." },
      { title: "Refrigerant Charge Verification", text: "Detects over- or under-charged systems reducing COP and compressor life." },
      { title: "Airflow & Duct Leakage Test", text: "Maps supply and return airflow balance; identifies duct leakage points." },
      { title: "Controls & Scheduling Audit", text: "Reviews BMS/thermostat programming to eliminate unnecessary runtime." },
    ],
    cta: "Book HVAC Audit",
  },
];

export default function EnergyAuditPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Energy Audit"
        title="Energy Audit &"
        titleHighlight="Inspection Services"
        subtitle="Scientific energy diagnostics for Solar, Electrical Utilities, and HVAC systems — reducing waste, cutting bills, and extending asset life."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Energy Audit" }]}
      />

      {/* Tab-style anchor nav */}
      <div className="sticky top-[100px] z-30 bg-white border-b border-brand-border/40 shadow-sm">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 flex gap-1 overflow-x-auto py-2">
          {[
            { label: "Solar Panel", href: "#solar" },
            { label: "Electrical Utilities", href: "#electrical" },
            { label: "HVAC", href: "#hvac" },
          ].map((tab) => (
            <a
              key={tab.href}
              href={tab.href}
              className="whitespace-nowrap px-5 py-2 rounded-full text-xs font-bold text-brand-text hover:text-secondary hover:bg-secondary/5 border border-transparent hover:border-secondary/20 transition-all"
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {auditTypes.map((audit, sectionIdx) => (
        <section
          key={audit.id}
          id={audit.id}
          className={`py-14 sm:py-20 px-6 sm:px-8 lg:px-12 ${sectionIdx % 2 === 0 ? "bg-brand-light" : "bg-white"}`}
        >
          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                {audit.badge}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                {audit.heading}
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">{audit.desc1}</p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">{audit.desc2}</p>
              <div className="flex gap-4 mt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
                >
                  {audit.cta}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <audit.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">
                {audit.title} — What We Inspect
              </h3>
              <ul className="flex flex-col gap-4">
                {audit.points.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="bg-brand-light border border-brand-border/40 p-4 rounded-xl flex items-center gap-4 mt-2">
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
        </section>
      ))}
    </div>
  );
}
