"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  FileCheck,
  Building,
  Scale,
  Users,
  Compass,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ArrowDownToLine,
  Home,
  CheckSquare
} from "lucide-react";
import PageHero from "@/components/PageHero";

// General RERA rules
const generalRules = [
  {
    icon: ShieldAlert,
    title: "Defect Liability Period (Section 14(3))",
    desc: "Developers are legally bound to rectify any structural defects, quality issues, or workmanship faults reported by the homebuyer within 5 years of possession. The builder must repair the defect free of cost within 30 days."
  },
  {
    icon: Building,
    title: "Standardized Carpet Area",
    desc: "Properties must be sold strictly on a net usable 'Carpet Area' basis (excluding external walls, shafts, balcony/verandah, and open terrace; but including internal partition walls) to eliminate deceptive pricing."
  },
  {
    icon: Scale,
    title: "70% Escrow Project Funding",
    desc: "Developers must deposit 70% of customer advances into a dedicated project bank account. Withdrawals are certified by architects, engineers, and CAs in proportion to the percentage of construction completion."
  },
  {
    icon: Compass,
    title: "Project Plan Alterations",
    desc: "Developers cannot modify the sanctioned plans, structural designs, or layouts after bookings without the written consent of at least two-thirds (2/3) of the project's homebuyers."
  },
  {
    icon: Users,
    title: "Interest Parity for Delays",
    desc: "In case of project delays, developers must pay interest on delayed possession at the exact same penal rate (typically SBI highest MCLR + 2%) that homebuyers are charged for payment defaults."
  },
  {
    icon: FileCheck,
    title: "Mandatory Agent Registration",
    desc: "Real estate brokers and agents must register with the state's RERA regulatory body to operate legally and represent developer properties."
  }
];

// State specific details
const stateUpdates = {
  maharashtra: {
    title: "Maharashtra RERA (MahaRERA)",
    established: "March 8, 2017",
    highlights: [
      {
        title: "Proactive Quality Assurance Framework",
        desc: "MahaRERA proposed a pioneering framework requiring developers to submit bi-yearly quality assurance reports covering structural components, construction material testing, and workmanship."
      },
      {
        title: "Homebuyer Visibility",
        desc: "All submitted quality reports are published on the public MahaRERA portal. This allows buyers to inspect workmanship quality and trace defects before possession is handed over."
      },
      {
        title: "Strict Workmanship Auditing",
        desc: "Developers must employ certified professional engineers and architects to continuously monitor and log quality parameters, minimizing possession-day defect disputes."
      }
    ]
  },
  kerala: {
    title: "Kerala RERA (K-RERA)",
    established: "2019",
    highlights: [
      {
        title: "Mandatory Quarterly Progress Logs",
        desc: "Developers in Kerala must submit and upload detailed progress reports of the construction site on the public K-RERA website every quarter, detailing completion milestones."
      },
      {
        title: "Public Defaulter & Warning List",
        desc: "K-RERA proactively publishes warning lists of developers and projects that fail to comply with registration terms, upload sanctions, or default on deadlines, warning buyers of high-risk transactions."
      },
      {
        title: "Possession Disputes Resolution",
        desc: "Ensures streamlined consumer court-style dispute resolutions directly handled by the K-RERA tribunal within 60 to 90 days."
      }
    ]
  }
};

export default function ReraPage() {
  const [activeStateTab, setActiveStateTab] = useState<"maharashtra" | "kerala">("maharashtra");

  return (
    <div className="relative w-full">
      <PageHero
        badge="RERA & Property Inspection"
        title="RERA Guidelines &"
        titleHighlight="Defect Liability Rules"
        subtitle="Understand your legal rights as a homebuyer under the Real Estate Regulation & Development Act, 2016, and learn how home inspections help enforce developer warranty commitments."
        breadcrumbs={[{ label: "RERA Guidelines" }]}
      />

      {/* ── 1. INTRODUCTION ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">RERA Act, 2016</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Empowering Homebuyers with Legal Transparency & Quality Guarantees
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              The Real Estate (Regulation and Development) Act, 2016, is a landmark legislation passed by the Parliament of India to establish transparency, accountability, and efficiency in the real estate sector. 
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              RERA protects the interests of consumers in the real estate sector and establishes an adjudicating mechanism for speedy dispute redressal. One of the most powerful provisions of the RERA Act is the introduction of a builder-backed warranty period, legally binding developers to maintain structural stability.
            </p>
            
            {/* Quick Scope Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="flex items-start gap-3 bg-white border border-brand-border/30 rounded-xl p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary font-display">Applicability</h4>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed mt-0.5">Applies to residential & commercial projects with land exceeding 500 sqm or having more than 8 apartments.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white border border-brand-border/30 rounded-xl p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary font-display">Consumer Protection</h4>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed mt-0.5">Strict compliance check stops developer fund diversion and standardized layouts prevent carpet area fraud.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square max-w-md mx-auto rounded-[24px] overflow-hidden border border-brand-border/40 shadow-premium bg-white p-8 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center justify-center p-3 rounded-2xl bg-secondary/10 text-secondary mb-5">
                  <Scale className="h-8 w-8" />
                </span>
                <h3 className="text-xl font-extrabold text-primary font-display leading-tight">Home Inspection is Your Key to RERA Protection</h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mt-3 font-light">
                  RERA mandates a 5-year developer warranty against structural issues. However, finding hidden dampness, electrical hazards, or structural micro-cracks requires specialized thermal cameras, moisture sensors, and technical inspection experts.
                </p>
              </div>
              <div className="border-t border-brand-border/40 pt-4 mt-6">
                <p className="text-[11px] font-bold text-secondary uppercase tracking-wider">Classic Solution Advantage</p>
                <p className="text-xs text-brand-text font-medium mt-1">We identify defect lists before handover so you can claim free repairs under RERA Section 14(3).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. DEFECT LIABILITY BLOCK (Section 14(3)) ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,44,84,0.03),transparent_50%)] pointer-events-none" />
        <div className="mx-auto max-w-5xl text-center flex flex-col items-center gap-10">
          <div className="max-w-3xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">RERA Section 14(3)</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">
              The 5-Year Structural Defect & Workmanship Liability
            </h2>
            <p className="text-brand-muted mt-3 text-sm leading-relaxed font-light">
              Under Section 14(3) of the Real Estate (Regulation and Development) Act, 2016, the developer is bound to rectify structural defects, quality issues, or workmanship faults reported within 5 years of possession.
            </p>
          </div>

          <div className="w-full bg-brand-light border border-brand-border/30 rounded-[24px] p-6 sm:p-10 shadow-premium text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold w-fit">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span>What Constitutes a Defect?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-primary leading-tight">
                Defects Eligible for Free Rectification under RERA
              </h3>
              <ul className="space-y-3 mt-2 text-xs sm:text-sm text-brand-text">
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 text-[10px] mt-0.5">✓</div>
                  <span><strong>Structural Defects:</strong> Foundation cracks, slab bending, concrete deterioration, dampness weakening reinforcement beams.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 text-[10px] mt-0.5">✓</div>
                  <span><strong>Workmanship Faults:</strong> Defective plastering, incorrect tiling, misaligned masonry, sub-standard joinery, or leaking sanitary fixtures.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 text-[10px] mt-0.5">✓</div>
                  <span><strong>Quality of Services:</strong> Inoperative electrical systems, faulty main distribution panels, unsafe wiring gauge, poor ventilation/exhaust pipes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 text-[10px] mt-0.5">✓</div>
                  <span><strong>Execution Timeline:</strong> Promoters must rectify these faults within <strong>30 days</strong> of notice, free of cost. If they fail, homebuyers are entitled to compensation.</span>
                </li>
              </ul>
            </div>
            
            <div className="md:col-span-5 bg-white border border-brand-border/40 p-6 rounded-2xl shadow-sm flex flex-col gap-4">
              <h4 className="text-sm font-extrabold text-primary font-display uppercase tracking-wider">How to Secure Your Rights</h4>
              <p className="text-xs text-brand-muted leading-relaxed font-light">
                Claiming defects requires documented proof. A home inspection report provides professional, legally-valid evidence:
              </p>
              <div className="flex flex-col gap-2.5">
                {[
                  "Thermal images of hidden dampness and structural issues",
                  "Electrical hotspot check sheets & safety diagnostics",
                  "Plumbing leakage source identification using precision sensors",
                  "Formal Inspection Report to present to the developer or RERA court"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-brand-text">
                    <CheckSquare className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. CORE PROVISIONS GRID ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12 border-t border-brand-border/30">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">RERA Protections</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Key Provisions for Property Buyers</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              RERA has introduced structural safeguards to hold builders accountable and ensure prompt delivery of residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {generalRules.map((rule, idx) => {
              const IconComponent = rule.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white border border-brand-border/30 rounded-2xl p-5 hover:shadow-premium transition-premium flex flex-col group hover:-translate-y-1 hover:border-secondary"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary font-display leading-snug mb-2">{rule.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-light flex-1">{rule.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. STATEWISE RERA UPDATES TABS ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12 border-t border-brand-border/30">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Regional Regulations</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">State-Specific RERA Updates</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Explore recent RERA rulings and amendments in major states ensuring enhanced construction quality monitoring.
            </p>
          </div>

          {/* Custom Tabs */}
          <div className="flex gap-2 p-1.5 bg-brand-light border border-brand-border/40 rounded-xl w-full max-w-md">
            <button
              onClick={() => setActiveStateTab("maharashtra")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${
                activeStateTab === "maharashtra"
                  ? "bg-primary text-white shadow-md"
                  : "text-brand-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              Maharashtra (MahaRERA)
            </button>
            <button
              onClick={() => setActiveStateTab("kerala")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${
                activeStateTab === "kerala"
                  ? "bg-primary text-white shadow-md"
                  : "text-brand-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              Kerala (K-RERA)
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="w-full bg-brand-light border border-brand-border/30 rounded-2xl p-6 sm:p-8 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStateTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-border/40 pb-4 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-primary font-display">
                      {stateUpdates[activeStateTab].title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 leading-none">
                      Implementation: <span className="font-semibold text-brand-text">{stateUpdates[activeStateTab].established}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full w-fit">
                    Active RERA Council
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {stateUpdates[activeStateTab].highlights.map((hl, i) => (
                    <div key={i} className="bg-white border border-brand-border/30 rounded-xl p-5 shadow-sm hover:border-secondary transition-all duration-300">
                      <p className="text-xs font-extrabold text-secondary font-display mb-1">{`0${i + 1}.`}</p>
                      <h4 className="text-xs sm:text-sm font-bold text-primary font-display leading-snug mb-2">
                        {hl.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed font-light">
                        {hl.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 5. PRE-POSSESSION CTA SECTION ── */}
      <section className="py-14 sm:py-20 bg-primary px-6 sm:px-8 lg:px-12 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,0,22,0.2),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl text-left">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">Don&apos;t Handover Checklist Blindly</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mt-2">
              Secure Your RERA Defect Warranty Today
            </h2>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light mt-4 max-w-md">
              Before taking keys or signing possession documents, hire our professional engineering inspection team. We provide a certified checklist of structural, electrical, and plumbing defects to submit to your builder.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Book Pre-Possession Scan
            </Link>
            <Link
              href="/services#property"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 transition-all duration-300 text-center"
            >
              Property Audits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
