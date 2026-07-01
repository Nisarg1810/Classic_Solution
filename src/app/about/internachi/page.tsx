"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, CheckCircle2, Award, BookOpen, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function AboutInternachi() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Accredited & Certified"
        title="International Affiliation with"
        titleHighlight="InterNACHI, USA"
        subtitle="All MACJ inspectors undergo certified technical training and adhere strictly to InterNACHI's global Code of Ethics and Standards of Practice."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "InterNACHI Affiliation" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">International Standards</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              World's Largest Association of Certified Home Inspectors
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              The **International Association of Certified Home Inspectors (InterNACHI) USA** is the leading non-profit association of property inspectors worldwide. It offers educational courses, standard visual checklists, and certification parameters to maintain quality.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              By maintaining a strict alignment with InterNACHI USA, MACJ ensures that every engineer on site follows standardized checkup procedures. Our inspection checklists are updated yearly to reflect global guidelines adapted to local Indian building styles.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              InterNACHI's **Code of Ethics** demands that inspectors remain independent third-party assessors. This means MACJ does not sell repair works or waterproofing chemicals, ensuring that our reports are completely objective and trustworthy.
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                Book Inspection
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" /> About Main Page
              </Link>
            </div>
          </div>

          {/* Right Block: Core Assurances */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            {/* InterNACHI Badge */}
            <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-border/40">
              <Image
                src="https://macj-abuyerschoice.com/wp-content/uploads/2017/07/intr-nachi.jpg"
                alt="InterNACHI USA Certification Badge"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Our Standards of Practice</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Standardized Diagnostics", text: "Inspections cover walls, ceiling finishes, electrical breakers, plumbing traps, and insulation parameters." },
                { title: "Continuous Engineer Testing", text: "MACJ inspectors must pass regular online exams covering electrical calculations and seepage routes." },
                { title: "No Repair Pitching", text: "We do not offer repair contractors, ensuring we maintain zero conflict of interest." },
                { title: "Structured PDF Formats", text: "Deliver digital reports indicating severity levels (Critical, High, Medium, Low) for developer rectifications." }
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
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                <Shield className="h-4 w-4 text-secondary" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">InterNACHI USA Profile</p>
                <a href="https://nachi.org" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-primary hover:text-secondary flex items-center gap-1">
                  nachi.org
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
