"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, FileText, HelpCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";

const blogs = [
  {
    title: "How to Detect Water Leakage Behind Wall Tiles?",
    desc: "A guide on using thermal infrared cameras and moisture meters to pinpoint source leakages without demolition.",
    date: "June 15, 2026",
    category: "Moisture & Dampness"
  },
  {
    title: "Why New Apartment Handover Audits Are Necessary under RERA?",
    desc: "Understand developer liability guidelines and why pre-handover defect lists protect your investment.",
    date: "May 28, 2026",
    category: "RERA Rules"
  },
  {
    title: "5 Hidden Electrical Fire Hazards in Old Properties",
    desc: "Scans for panel overheating, loose contacts, and poor wire insulation that cause building fires.",
    date: "April 10, 2026",
    category: "Electrical Safety"
  }
];

const caseStudies = [
  {
    title: "Complex Ceiling Seepage at High-rise Apartment, Mumbai",
    problem: "Active dampness appearing in bedroom ceilings; builders could not locate the leak source, pitching blind terrace demolition.",
    solution: "MACJ thermal thermography traced the water route to a faulty drainage joint in the above floor's vertical shaft. Saved heavy terrace repair costs.",
    result: "Targeted repair was done in 1 day; dampness resolved completely."
  },
  {
    title: "Overheating MCB Panel at Diagnostic Centre, Pune",
    problem: "Hospital experienced repeated power trips causing machine downtime.",
    solution: "Infrared hotspot scans revealed a loose connection at the main breaker terminal, running at 94°C.",
    result: "Connection tightened during scheduled maintenance, preventing a breaker blowout fire."
  }
];

const faqs = [
  {
    q: "What is a home inspection?",
    a: "It is a visual, non-destructive checkup of a property's walls, ceiling, flooring, electrical panels, plumbing pressure, and drainage lines, using diagnostic tools like thermal cameras."
  },
  {
    q: "How long does the inspection take?",
    a: "A standard 3BHK residential unit takes approximately 3 to 4 hours to inspect in detail on-site."
  },
  {
    q: "When do I get the report?",
    a: "We deliver a comprehensive software-generated digital PDF report with color photographs and severity levels within 24 to 48 hours."
  },
  {
    q: "Do you perform the repair work?",
    a: "No. MACJ remains an independent third-party quality auditor. We do not sell repairs or chemical products, ensuring our reports are completely unbiased."
  }
];

export default function ResourcesPage() {
  const [activeSec, setActiveSec] = useState<"blogs" | "cases" | "faqs">("blogs");

  return (
    <div className="relative w-full">
      <PageHero
        badge="Knowledge Hub"
        title="Resource Centre &"
        titleHighlight="Knowledge Series"
        subtitle="Learn about property health diagnostics, view real-world case studies, and find answers to frequently asked questions."
        breadcrumbs={[{ label: "Resources" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col gap-10">
          
          {/* Tab Selector */}
          <div className="flex gap-2 p-1.5 bg-white border border-brand-border/40 rounded-full w-full max-w-lg mx-auto shadow-sm">
            <button
              onClick={() => setActiveSec("blogs")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 ${
                activeSec === "blogs" ? "bg-secondary text-white shadow-md" : "text-brand-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              Blogs
            </button>
            <button
              onClick={() => setActiveSec("cases")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 ${
                activeSec === "cases" ? "bg-secondary text-white shadow-md" : "text-brand-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              Case Studies
            </button>
            <button
              onClick={() => setActiveSec("faqs")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-full transition-all duration-300 ${
                activeSec === "faqs" ? "bg-secondary text-white shadow-md" : "text-brand-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              FAQ's
            </button>
          </div>

          {/* Section Render */}
          <div className="min-h-[350px]">
            {activeSec === "blogs" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((b, i) => (
                  <div key={i} className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 hover:shadow-premium transition-premium flex flex-col justify-between group hover:border-secondary">
                    <div>
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-2">{b.category}</span>
                      <h3 className="text-base sm:text-lg font-bold text-primary font-display leading-snug mb-3 group-hover:text-secondary transition-colors">{b.title}</h3>
                      <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed mb-6">{b.desc}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-brand-border/40 pt-4 mt-auto">
                      <span className="text-[10px] text-brand-muted">{b.date}</span>
                      <Link href="/contact" className="text-xs font-bold text-primary hover:text-secondary inline-flex items-center gap-1">
                        Read <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSec === "cases" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((cs, i) => (
                  <div key={i} className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 hover:shadow-premium transition-premium flex flex-col gap-4 border-l-4 border-l-secondary">
                    <h3 className="text-base sm:text-lg font-bold text-primary font-display">{cs.title}</h3>
                    <div className="text-xs sm:text-sm flex flex-col gap-2 font-light text-brand-text">
                      <p><strong>Problem:</strong> {cs.problem}</p>
                      <p><strong>Solution:</strong> {cs.solution}</p>
                      <p className="text-secondary font-medium"><strong>Result:</strong> {cs.result}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeSec === "faqs" && (
              <div className="max-w-3xl mx-auto flex flex-col gap-4">
                {faqs.map((f, i) => (
                  <div key={i} className="bg-white border border-brand-border/30 rounded-2xl p-5 shadow-sm">
                    <h3 className="text-sm sm:text-base font-bold text-primary font-display mb-2 flex items-center gap-2">
                      <HelpCircle className="h-4.5 w-4.5 text-secondary shrink-0" /> {f.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed pl-6">{f.a}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
