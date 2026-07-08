"use client";

import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck, CheckCircle2, Building2, PhoneCall, ArrowLeft, ShieldCheck, Heart, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/PageHero";

const inspectionProcessPhases = [
  {
    title: "1. Pre-Finishing Stage Inspection",
    desc: "We inspect when the structure is ready but finishing has not started or started but delivery has not begun. We provide apartment-wise/function-wise reports covering civil, flooring, woodwork, window, plumbing, and electrical lines."
  },
  {
    title: "2. Contractor Rectification & Coordination",
    desc: "These reports are handed over to respective contractors/departments so they can correct the highlighted issues. Developers retain complete decision control over all correction parameters."
  },
  {
    title: "3. Verification & Handover Audit",
    desc: "Our engineering team visits again to verify the corrections done, logging a final status report to ensure minimal customer complaints and absolute quality."
  }
];

const developerBenefits = [
  "We serve as the independent eyes and ears of developers - monitoring each and every apartment unit.",
  "Reduced dependency on contractors, floor managers, supervisors, and floor workers to guarantee quality.",
  "Acts as a professional third-party audit on the builder's behalf for quality assurance on unit construction and finishing.",
  "Saves developers substantial money, time, and effort by ensuring contractors correct mistakes before handovers.",
  "Provides robust quality control checks aligned with RERA guidelines, protecting developers under the 5-year defect liability window.",
  "Enhances developer credibility, professionalism, and group brand reputation.",
  "Strict confidentiality: We only report findings directly to the persons authorized by the developers / promoters."
];

const stakeholderWinWin = [
  {
    role: "For Real Estate Developers",
    points: [
      "Provides quality assurance on construction and finishing, reducing pre-handover complaint loops.",
      "Ensures compliance with RERA's 5-year defect liability warranty.",
      "Third-party audits help group brand reputation and build long-term trust."
    ]
  },
  {
    role: "For Interior Designers & Home Furnishings",
    points: [
      "Helps read structure conditions, identifying hidden moisture/dampness before starting wood work.",
      "Ensures durability of custom furniture, cabinets, and premium paint finishes.",
      "Aids in designing beautiful, problem-free interiors that home owners love."
    ]
  },
  {
    role: "For Home Owners & Buyers",
    points: [
      "Protects one of the largest life investments, ensuring a safe and durable home.",
      "Identifies hidden defects to enable price negotiations or request seller repairs before purchase.",
      "Provides a clean checklist to request builder repairs before taking keys."
    ]
  },
  {
    role: "For Real Estate Agents",
    points: [
      "Provides verified reports to make buyers feel confident, accelerating sales.",
      "Helps sellers understand potential issues, enabling realistic price settings.",
      "Builds broker credibility and increases referral business from satisfied buyers."
    ]
  },
  {
    role: "For Home Sellers",
    points: [
      "Identifies minor issues before they become major problems, preventing visual interior damages.",
      "Increases property value and helps earn a better bargaining platform.",
      "Prevents recurring defects that could harm the seller's reputation in the market."
    ]
  }
];

export default function ServicesConstructionFinishing() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Developer Quality Checks"
        title="Construction Finishing &"
        titleHighlight="Win-Win Stakeholders Page"
        subtitle="Third-party quality audits for real estate developers and independent property inspections that create a win-win scenario across the entire real estate value chain."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Construction Finishing" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">
          
          {/* Main Narrative Block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Block: Narrative */}
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Construction Finishing Inspection</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Building or Home Inspection Before Handover
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                For developers, ensuring cohesive construction finishing across hundreds of units is an enormous challenge. Minor defects in flooring, woodwork, plumbing, or electrical connections can lead to friction with buyers and negative customer reviews.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Our third-party quality audits serve as a professional check, giving developers peace of mind, minimizing customer complaints, and safeguarding their brand credibility.
              </p>

              <div className="flex gap-4 mt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
                >
                  Inquire Developer Audits
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
                >
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            {/* Right Block: Photos & Value Added Services */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Countertops01-360x240.jpg" alt="Countertop Quality" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Cabinets02-360x240.jpg" alt="Cabinet Finishing Check" fill className="object-cover" unoptimized />
                </div>
              </div>

              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Value Added Services: The Inspection Process</h3>
              <ul className="flex flex-col gap-4 text-xs sm:text-sm text-brand-text">
                {inspectionProcessPhases.map((phase, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-primary">{phase.title}</h4>
                      <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 leading-relaxed font-light">{phase.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits to Developers */}
          <div className="border-t border-brand-border/40 pt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Developer Benefits</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary leading-tight">
                Why Developers Partner with Classic Solution
              </h2>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                We become the eyes and ears of developers, monitoring contractors, and helping teams maintain quality control standards prior to keys delivery.
              </p>
              <div className="bg-white border border-brand-border/30 rounded-2xl p-5 shadow-sm mt-2 flex items-center gap-3">
                <Building2 className="h-10 w-10 text-secondary shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-primary">Pre-Handover Verification</h4>
                  <p className="text-[11px] text-brand-muted mt-0.5">Ensures RERA-compliant structural and workmanship finishes.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col gap-5">
              <h3 className="text-base sm:text-lg font-bold font-display text-primary border-b pb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-secondary" /> Quality Control & Brand Protection
              </h3>
              <ul className="flex flex-col gap-4 text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                {developerBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <div className="h-2 w-2 rounded-full bg-secondary shrink-0 mt-2" />
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Win-Win for All Stakeholders */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Win-Win Framework</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">
                Win-Win for All Stakeholders
              </h2>
              <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
                A professional property inspection benefits all parties involved in the real estate value chain — for your protection, get a home inspection!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stakeholderWinWin.map((stakeholder, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 rounded-3xl p-6 shadow-sm hover:shadow-premium transition-all duration-300">
                  <h3 className="text-base font-bold text-primary font-display border-b pb-2 mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" /> {stakeholder.role}
                  </h3>
                  <ul className="flex flex-col gap-3 text-xs text-brand-text">
                    {stakeholder.points.map((pt, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                        <p className="font-light leading-relaxed">{pt}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
