"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck, Droplets, Search, Zap, Thermometer,
  Wrench, ArrowRight, Shield, Award, Users,
  Building2, Users2, FileText, CheckCircle2, ClipboardCheck
} from "lucide-react";
import PageHero from "@/components/PageHero";

const servicesList = [
  {
    id: "value-chain",
    title: "Serving the Real Estate Value Chain",
    icon: Building2,
    desc: "We provide property quality and safety checks that add value to every player in the industry.",
    points: [
      "For Buyers: Ensures transparency, pricing sanity, and safety compliance before purchase.",
      "For Developers: Identifies quality control gaps and ensures defect-free handover audits.",
      "For Consultants: Increases transaction speed by providing trusted, certified third-party reports."
    ],
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    id: "home-inspection",
    title: "Complete Home & Property Inspection",
    icon: Search,
    desc: "A thorough 150+ point visual, non-destructive examination of the home's key systems.",
    points: [
      "Checks walls, ceilings, and floors for cracks, hollow tiles, and layout alignments.",
      "Examines doors, windows, locks, and balcony slide channels for safety and installation.",
      "Plumbing checks: slopes of bathrooms, water pressure, leaks, and drainage blocks.",
      "Electrical checks: wiring insulation, socket polarities, and switchboard fittings.",
      "Includes detailed software-generated digital reports with color photographs."
    ],
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: "moisture",
    title: "Moisture, Dampness & Seepage (Thermal Imaging)",
    icon: Droplets,
    desc: "Scientific seepage diagnostics to find the root source of dampness without breaking walls.",
    points: [
      "High-resolution infrared thermal cameras reveal temperature differences caused by moisture.",
      "Pinless moisture meters map the exact spread of dampness inside plaster layers.",
      "Detects concealed plumbing leaks, ceiling drip paths, and terrace cracks.",
      "Saves cost by avoiding blind demolition and targeting repairs only at the source point.",
      "Provides actionable damp-proof consulting recommendations."
    ],
    color: "bg-red-50 text-red-600"
  },
  {
    id: "electrical",
    title: "Infrared Electrical Inspections",
    icon: Zap,
    desc: "Protecting lives and properties by detecting hidden electrical fire hazards early.",
    points: [
      "Thermal scans of distribution boards (DBs), breakers, MCBs, and main service panels.",
      "Identifies overloaded circuits, loose connections, and imbalanced phases.",
      "Reveals high-resistance hot spots that could spark fire under load.",
      "Verifies grounding, earthing circuits, and ELCB safety trip functionality."
    ],
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    id: "nri",
    title: "Property Care for NRIs & Corporates",
    icon: Wrench,
    desc: "Peace of mind for property owners living overseas or out of town.",
    points: [
      "Periodic physical health check-ups and safety audits of vacant or rented properties.",
      "Immediate detection of hidden moisture issues, pest entries, or electrical failures.",
      "Detailed visual report with photographs sent directly to owners via email.",
      "Prevents heavy property depreciation due to long-term unattended water leakages."
    ],
    color: "bg-teal-50 text-teal-600"
  },
  {
    id: "construction",
    title: "Construction Finishing Quality Audits",
    icon: ClipboardCheck,
    desc: "Helping developers minimize post-possession complaints and enhance brand reputation.",
    points: [
      "Comprehensive finishing quality audits (tiling hollows, plaster checks, door locks).",
      "Defect inventory mapping conducted block-by-block before handovers.",
      "Ensures developer compliance with RERA's 5-year defect liability requirements.",
      "Protects the developer's brand reputation and increases positive customer review cycles."
    ],
    color: "bg-orange-50 text-orange-600"
  }
];

const stakeholderBenefits = [
  {
    title: "For Home Buyers",
    icon: ShieldCheck,
    points: [
      "Avoid buying properties with expensive, hidden seepage or wiring issues.",
      "Empowers you with negotiation points based on scientific defect reports.",
      "Ensures the safety of your family against structural collapses or fire risks."
    ]
  },
  {
    title: "For Real Estate Developers",
    icon: Building2,
    points: [
      "Assures clients of build quality, boosting conversions and sales velocity.",
      "Reduces high rectification costs by fixing defects before possession handover.",
      "Minimizes RERA defect liability claims and dispute resolution hassles."
    ]
  },
  {
    title: "For Agents & Brokers",
    icon: Users,
    points: [
      "Establishes you as a trustworthy, customer-centric advisory firm.",
      "Validates property health, preventing deals from falling through due to post-sale surprises.",
      "Provides premium value-added checkups to stand out in the competitive market."
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Our Services"
        title="Scientific Inspections & Quality"
        titleHighlight="Diagnostics"
        breadcrumbs={[{ label: "Services" }]}
        subtitle="Visual, non-invasive health & safety audits for houses, offices, and commercial properties using advanced thermal cameras, damp meters, and digital reporting systems."
      />

      {/* ── CORE SERVICES GRID ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">What We Do</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Home & Property Inspections</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Every service is delivered by certified technical engineers using calibrated thermal cameras, moisture sensors, and structured checklist frameworks.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {servicesList.map((svc) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  id={svc.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45 }}
                  className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-premium transition-premium group scroll-mt-28"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className={`h-14 w-14 rounded-2xl ${svc.color} flex items-center justify-center shrink-0`}>
                      <IconComp className="h-7 w-7" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <h3 className="text-lg sm:text-xl font-bold text-primary font-display group-hover:text-secondary transition-colors">
                          {svc.title}
                        </h3>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-secondary hover:bg-secondary-light px-4 py-2 rounded-full transition-all duration-200 w-fit"
                        >
                          Book Inspection <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                      <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light mb-6">{svc.desc}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {svc.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                            <span className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</span>
                            <span>{pt}</span>
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

      {/* ── STAKEHOLDERS WIN-WIN SECTION ── */}
      <section id="win-win" className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12 scroll-mt-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Stakeholder Win-Win</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Win-Win for All Stakeholders</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Certified third-party home testing promotes transparency, protects investments, and reduces disputes in real estate transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stakeholderBenefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-brand-light border border-brand-border/30 rounded-3xl p-6 sm:p-8 hover:shadow-premium transition-premium group flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-primary font-display mb-4">{benefit.title}</h3>
                    <ul className="flex flex-col gap-3">
                      {benefit.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
                          <span className="text-secondary font-bold mr-1.5 shrink-0 mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INSPECTION REPORT INCLUDED ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Deliverables</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Detailed Software-Driven Inspection Reports
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Every property inspection concludes with a professional digital report delivered within 24-48 hours.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              The report contains visual and thermal camera photographs of identified defects, details about moisture spreads, and severity levels (Critical, High, Medium, Low). It provides a precise description of issues alongside our technical recommendations for repairs.
            </p>
          </div>
          <div className="bg-primary text-white p-8 rounded-3xl shadow-premium">
            <h3 className="text-lg font-bold font-display text-secondary mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-secondary" /> Report Components
            </h3>
            <ul className="flex flex-col gap-3.5">
              {[
                "High-resolution color photographs of all identified issues.",
                "Thermal imaging screenshots showing temperature differences.",
                "Severity ratings of hazards (e.g. overloaded circuits).",
                "Clear slope assessments for bathroom & terrace floor drains.",
                "Actionable recommendations for damp-proofing & rewiring works."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  <span className="h-5 w-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-primary px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-4">Book Your Professional Home Inspection Today</h2>
          <p className="text-white/65 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
            Contact our certified technical engineers today to schedule a detailed visual and thermal quality assessment for your property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Inspection
            </Link>
            <Link href="/" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 transition-all duration-300">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
