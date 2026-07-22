"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Building } from "lucide-react";
import PageHero from "@/components/PageHero";

const caseStudies = [
  {
    id: 1,
    title: "Complex Damp & Seepage Problem Resolution",
    date: "February 9, 2019",
    location: "High-Rise Apartment Complex",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/02/Damp-Seepage-Case-Study-MACJ.jpg",
    problem: "Persistent dampness on master bedroom wall causing paint peeling and toxic mold formation.",
    solution: "Thermal imaging mapped hidden moisture traveling 4 meters horizontally from an adjacent bathroom pipe joint defect.",
    result: "Targeted localized repair saved 85% cost compared to breaking the entire bathroom wall."
  },
  {
    id: 2,
    title: "Pre-Possession Quality Audit for Luxury Villa",
    date: "November 14, 2021",
    location: "Gated Villa Community",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/outside-360x240.jpg",
    problem: "Unidentified structural cracks and terrace waterproofing membrane failure prior to handover.",
    solution: "150+ point visual & thermal inspection identified water pooling and un-grouted drainage outlets.",
    result: "Builder rectified all defects under warranty prior to final sign-off by homeowner."
  },
  {
    id: 3,
    title: "Commercial Office HVAC & Energy Loss Assessment",
    date: "August 20, 2022",
    location: "Commercial IT Park",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/01/Scope-of-Services-01-360x240.jpg",
    problem: "Excessive energy bills and uneven cooling across office conference floors.",
    solution: "Infrared duct inspection discovered air leakage in primary ceiling plenum connections.",
    result: "Sealing duct joints reduced monthly HVAC power consumption by 18%."
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      <PageHero
        badge="Real World Results"
        title="Case Studies &"
        titleHighlight="Inspection Reports"
        subtitle="Explore how our diagnostic thermal imaging and professional audits resolve complex property issues."
        breadcrumbs={[{ label: "Case Studies" }]}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col gap-10">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white border border-brand-border/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 grid grid-cols-1 md:grid-cols-12 group"
            >
              <div className="relative md:col-span-5 min-h-[240px] md:min-h-full overflow-hidden bg-neutral-100">
                <Image
                  src={cs.image}
                  alt={cs.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>

              <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-brand-muted mb-2 font-light">
                    <span className="flex items-center gap-1 font-semibold text-secondary">
                      <Building className="h-3.5 w-3.5" />
                      {cs.location}
                    </span>
                    <span>•</span>
                    <span>{cs.date}</span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold font-display text-primary leading-snug mb-4">
                    {cs.title}
                  </h2>

                  <div className="space-y-3 text-xs sm:text-sm text-brand-text font-light mb-6">
                    <div className="p-3 bg-red-50/50 rounded-xl border border-red-100">
                      <strong className="text-red-700 font-semibold block mb-1">Issue:</strong>
                      {cs.problem}
                    </div>
                    <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
                      <strong className="text-blue-700 font-semibold block mb-1">Diagnostic Solution:</strong>
                      {cs.solution}
                    </div>
                    <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                      <strong className="text-emerald-700 font-semibold block mb-1">Outcome:</strong>
                      {cs.result}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-border/20 flex items-center justify-between">
                  <span className="text-xs text-brand-muted font-medium flex items-center gap-1">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    Verified Inspection Report
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-secondary hover:bg-secondary-light text-white text-xs font-bold rounded-full transition-all uppercase tracking-wider"
                  >
                    <span>Book Audit</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
