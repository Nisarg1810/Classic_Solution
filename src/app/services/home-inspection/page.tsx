"use client";

import Link from "next/link";
import Image from "next/image";
import { Search, CheckCircle2, FileText, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesHomeInspection() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Property Diagnosis"
        title="Complete Home &"
        titleHighlight="Property Inspection"
        subtitle="A thorough 150+ point visual, non-destructive checkup of your property's ceilings, walls, flooring, electrical sockets, and plumbing traps."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Home Inspection" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Technical Diagnostics</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              150+ Checkpoints Covering Structural, Electrical, and Plumbing core elements
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              A Complete Home Inspection is an objective visual review of the physical structure and utility components of a property. Our inspectors examine everything from visual slab crack indicators to switchboard load imbalances.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Unlike quick handovers, we systematically run diagnostic tests. We measure slopes of floors to ensure water flows into bathroom drain traps, scan wall boundaries for thermal moisture differences, and test power outlet polarities.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              All findings are logged into our proprietary software, generating a detailed digital PDF report with color photographs, highlighting issues according to risk levels (Critical, High, Medium, Low).
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                Book Inspection
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" /> All Services
              </Link>
            </div>
          </div>

          {/* Right Block: Checkpoints */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            {/* Inspection Photo Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/electrical-1-360x240.jpg" alt="Electrical Panel Inspection" fill className="object-cover" unoptimized />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Stair-Steps-360x240.jpg" alt="Stair Steps Inspection" fill className="object-cover" unoptimized />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Countertops01-360x240.jpg" alt="Countertop Quality Check" fill className="object-cover" unoptimized />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/outside-360x240.jpg" alt="Property Exterior Check" fill className="object-cover" unoptimized />
              </div>
            </div>

            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Inspection Checklist Scope</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Wall & Ceiling Finishings", text: "Maps paint peeling, plaster hairline cracks, ceiling slopes, and window frame sealings." },
                { title: "Plumbing & Sanitaries", text: "Checks washbasin drainage traps, tile hollows, plumbing joint leakages, and water slope lines." },
                { title: "Electrical Circuits", text: "Checks socket polarity configurations, grounding lines, wiring safety, and switch panel heat loads." },
                { title: "Balconies & Open Spaces", text: "Audits railing safety heights, terrace slope waterproofing, and sliding door locks." }
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
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Report Format</p>
                <p className="text-sm font-bold text-primary">PDF digital report with photos in 24-48 Hours</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
