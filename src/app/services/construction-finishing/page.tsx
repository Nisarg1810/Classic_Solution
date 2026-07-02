"use client";

import Link from "next/link";
import Image from "next/image";
import { ClipboardCheck, CheckCircle2, Building2, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesConstructionFinishing() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Developer Quality Checks"
        title="Construction Finishing"
        titleHighlight="Inspection for Developers"
        subtitle="Third-party pre-handover quality audits to minimize customer complaints, ensure smooth posessions, and secure RERA defect warranties."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Construction Finishing" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Finishing Audits</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Pre-Handover Defect Mapping and Quality Control Logs
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              For real estate developers, handing over possession is a critical operational phase. Often, minor finishing defects (hollow wall tiles, paint stains, misaligned window panes, or sliding door gaps) cause friction with buyers during handover site walkthroughs.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              MACJ offers structured **Construction Finishing Audits**. Our engineers inspect every room unit before possession. We map finishing quality issues on a room-by-room, unit-by-unit basis using certified checklists.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              This gives developers an internal defect list to rectify beforehand. Correcting defects early is much cheaper and faster than handling disputes or warranty rectification calls during RERA's **5-year defect liability window**.
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

          {/* Right Block: Points */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            {/* Construction Check Photos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Countertops01-360x240.jpg" alt="Countertop Quality" fill className="object-cover" unoptimized />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Cabinets02-360x240.jpg" alt="Cabinet Finishing Check" fill className="object-cover" unoptimized />
              </div>
            </div>

            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Developer Audit Highlights</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Tiling & Grouting Quality checks", text: "Identifies hollow backings in wall and floor tiles to prevent cracking or loosening after handovers." },
                { title: "Plaster Finish & Alignments", text: "Checks wall plane levelling, paint finishes, cracks, and skirting line alignments." },
                { title: "Fixture Fitting Compliance", text: "Examines sanitary mounting tightness, faucet operations, and electrical outlet positions." },
                { title: "Legal Defect Mapping", text: "Aligns finishing quality with RERA Section 14(3) standards to minimize liability risk issues." }
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
                <Building2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Stakeholder Trust</p>
                <p className="text-sm font-bold text-primary">Certified third-party pre-handover reports</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
