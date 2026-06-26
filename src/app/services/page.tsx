"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck, Droplets, Search, Zap, Thermometer,
  Wrench, ArrowRight,
  Flame, TrendingDown, Clock, BarChart3, Shield,
  Factory, Sun, Briefcase,
  FileText, Camera, Activity, CheckSquare, Gauge,
  AlertTriangle, Building2,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const services = [
  {
    id: "thermal",
    title: "Thermal Imaging Inspection",
    icon: Thermometer,
    desc: "Advanced infrared thermography to detect hidden heat signatures in electrical systems, machinery, and building envelopes.",
    details: [
      "Detect overheated electrical connections and components",
      "Identify heat loss through walls, roofs, and windows",
      "Locate mechanical hotspots in rotating equipment",
      "Document temperature differentials with precision thermal maps",
      "Suitable for electrical panels, motors, and building envelopes",
    ],
    color: "bg-orange-50 text-orange-600",
  },
  {
    id: "electrical",
    title: "Electrical Hotspot Detection",
    icon: Zap,
    desc: "Pinpoint overloaded circuits, loose connections, and faulty components in switchboards and distribution panels.",
    details: [
      "Thermal scan of MDB, SDB, and distribution panels",
      "Identify loose terminals and corroded connections",
      "Detect phase imbalance and overloaded circuits",
      "Prevent electrical fires before they occur",
      "MCB/fuse condition assessment",
    ],
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    id: "moisture",
    title: "Moisture & Damp Detection",
    icon: Droplets,
    desc: "Non-invasive scanning to locate moisture intrusion, water leaks, and dampness within walls, roofs, and floors.",
    details: [
      "Pinpoint exact source of seepage and damp without breaking walls",
      "Thermal imaging plus pinless moisture meter mapping",
      "Detect plumbing leaks concealed in walls and slabs",
      "Identify roof and terrace leakage points",
      "Mold risk assessment based on moisture levels",
    ],
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: "energy",
    title: "Energy Audit",
    icon: Gauge,
    desc: "Comprehensive evaluation of energy consumption patterns to identify losses and recommend efficiency improvements.",
    details: [
      "Load distribution analysis across all circuits",
      "Power factor correction recommendations",
      "Identify energy-wasting equipment and systems",
      "Calculate estimated cost savings from improvements",
      "Prioritized corrective action plan",
    ],
    color: "bg-green-50 text-green-600",
  },
  {
    id: "property",
    title: "Property Inspection",
    icon: Search,
    desc: "Complete building and property health assessment covering structural, electrical, and envelope systems.",
    details: [
      "Complete inspection of walls, ceilings, floors, doors, windows",
      "Plumbing and electrical system assessment",
      "Damp and moisture mapping",
      "Safety hazard identification",
      "Detailed condition report for buyers or owners",
    ],
    color: "bg-purple-50 text-purple-600",
  },
  {
    id: "industrial",
    title: "Industrial Inspection",
    icon: Factory,
    desc: "Thermal inspection of motors, transformers, compressors, and industrial equipment to prevent unplanned breakdowns.",
    details: [
      "Motor bearing temperature monitoring",
      "Transformer thermal scanning",
      "Compressor and pump hotspot detection",
      "Conveyor belt and drive inspection",
      "Preventive maintenance scheduling recommendations",
    ],
    color: "bg-gray-50 text-gray-600",
  },
  {
    id: "solar",
    title: "Solar Thermal Inspection",
    icon: Sun,
    desc: "Identify underperforming solar panels, faulty cells, and connection hotspots to maximize solar energy output.",
    details: [
      "Panel-by-panel thermal performance analysis",
      "Identify cell-level defects and bypass diode failures",
      "String and combiner box inspection",
      "Soiling and shading loss assessment",
      "ROI-focused performance optimization report",
    ],
    color: "bg-amber-50 text-amber-600",
  },
  {
    id: "maintenance",
    title: "Preventive Maintenance Consulting",
    icon: Wrench,
    desc: "Expert guidance to develop proactive maintenance schedules and strategies that reduce downtime and costs.",
    details: [
      "Customized maintenance schedule development",
      "Priority-based action planning",
      "Maintenance cost benchmarking",
      "Staff training and awareness programs",
      "Ongoing monitoring recommendations",
    ],
    color: "bg-teal-50 text-teal-600",
  },
  {
    id: "reports",
    title: "Digital Inspection Reports",
    icon: FileText,
    desc: "Professional PDF reports with thermal images, temperature analysis, risk ratings, and actionable recommendations.",
    details: [
      "High-resolution thermal and visual images",
      "Temperature readings and acceptable thresholds",
      "Risk severity classification (Critical/High/Medium/Low)",
      "Corrective action recommendations",
      "Ready for compliance documentation",
    ],
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    id: "safety",
    title: "Safety Recommendations",
    icon: ShieldCheck,
    desc: "Detailed safety compliance guidance and corrective action plans based on inspection findings.",
    details: [
      "Identify code violations and safety hazards",
      "Prioritized corrective action list",
      "Compliance gap analysis",
      "Follow-up inspection scheduling",
      "Written safety compliance reports",
    ],
    color: "bg-red-50 text-red-600",
  },
];

const preventionBenefits = [
  { icon: Flame, title: "Prevent Fire Risks", desc: "Detect electrical hotspots and overloaded circuits before they ignite fires." },
  { icon: Zap, title: "Detect Electrical Hotspots", desc: "Reveal dangerously overheated connections and failing components early." },
  { icon: Gauge, title: "Reduce Energy Loss", desc: "Identify energy waste across electrical systems and building envelopes." },
  { icon: Wrench, title: "Avoid Equipment Failure", desc: "Predict and prevent costly mechanical and electrical breakdowns." },
  { icon: TrendingDown, title: "Lower Maintenance Costs", desc: "Fix problems early before they become expensive emergency repairs." },
  { icon: Clock, title: "Increase Asset Life", desc: "Regular thermal inspections extend the lifespan of critical equipment." },
  { icon: BarChart3, title: "Improve Operational Efficiency", desc: "Keep facilities running at peak efficiency with proactive maintenance." },
  { icon: Shield, title: "Ensure Business Continuity", desc: "Avoid unexpected shutdowns that disrupt operations and revenue." },
];

const reportComponents = [
  { icon: Camera, title: "Thermal Images", desc: "High-resolution infrared images showing temperature variations across all inspected areas." },
  { icon: Thermometer, title: "Temperature Analysis", desc: "Precise temperature readings compared against safe operating thresholds." },
  { icon: AlertTriangle, title: "Hotspot Identification", desc: "Clearly marked problem areas with severity classifications and risk levels." },
  { icon: Droplets, title: "Moisture Detection", desc: "Mapped moisture zones with index readings and exact affected areas." },
  { icon: Gauge, title: "Energy Loss Analysis", desc: "Quantified energy waste with estimated cost impact and efficiency gaps." },
  { icon: CheckSquare, title: "Maintenance Recommendations", desc: "Step-by-step corrective actions prioritized by urgency and risk level." },
  { icon: BarChart3, title: "Risk Priority Matrix", desc: "Visual risk assessment matrix ranking all issues by severity and urgency." },
  { icon: FileText, title: "PDF Digital Report", desc: "Professional report ready for management review and compliance documentation." },
];

export default function ServicesPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Our Services"
        title="Professional Thermal Imaging &"
        titleHighlight="Inspection Services"
        subtitle="Comprehensive preventive maintenance solutions designed to protect your assets, improve safety, and reduce operational costs through advanced thermal imaging technology."
        breadcrumbs={[{ label: "Services" }]}
      />

      {/* ── ALL SERVICES ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">What We Offer</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">All Inspection Services</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              From electrical hotspot detection to solar thermal inspection, every service is delivered by certified technical professionals with precision instruments.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  id={svc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-premium transition-premium group"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className={`h-14 w-14 rounded-2xl ${svc.color} flex items-center justify-center shrink-0`}>
                      <IconComp className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                        <h3 className="text-lg sm:text-xl font-bold text-primary font-display">{svc.title}</h3>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary border border-secondary/30 hover:bg-secondary hover:text-white px-4 py-1.5 rounded-full transition-all duration-200 shrink-0"
                        >
                          Book Now <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light mb-4">{svc.desc}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {svc.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-brand-text font-light">
                            <span className="h-4 w-4 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-[8px] font-bold mt-0.5">✓</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY PREVENTIVE MAINTENANCE ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Why It Matters</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Benefits of Preventive Maintenance</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Early detection through thermal imaging prevents catastrophic failures, protects assets, and keeps operations running without interruption.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {preventionBenefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-brand-light border border-brand-border/30 rounded-2xl p-5 hover:shadow-premium transition-premium hover:-translate-y-1 hover:border-secondary group"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <BenefitIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-primary font-display mb-1.5">{benefit.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-light">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET IN REPORTS ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">What You Get</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Professional Digital Inspection Report</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Every inspection concludes with a comprehensive digital report packed with thermal images, analysis data, and actionable recommendations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {reportComponents.map((report, idx) => {
              const ReportIcon = report.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white border border-brand-border/30 rounded-2xl p-5 hover:shadow-premium transition-premium hover:border-secondary group"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <ReportIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary font-display mb-1.5">{report.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-light">{report.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-primary px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">Ready to Book an Inspection?</h2>
          <p className="text-white/65 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
            Contact us today to discuss your requirements and schedule a professional thermal imaging inspection for your facility.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Inspection
            </Link>
            <Link href="/process" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 transition-all duration-300">
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
