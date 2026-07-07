"use client";

import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";



export default function AboutPage() {
  return (
    <div className="relative w-full">
      <PageHero
        title="Pioneers of Professional Home"
        titleHighlight="Inspection in India"
        subtitle="Formed in collaboration with ABCHI USA, Classic Solution brings world-class diagnostic inspections to the Indian property sector, helping buyers, developers, and corporate clients verify quality and safety."
        breadcrumbs={[{ label: "About" }, { label: "Company Details" }]}
      />

      {/* -- 1. Classic Solution & ABCHI INDIA PARTNERSHIP -- */}
      <section id="Classic Solution-india" className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">The Partnership</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Indo-US Collaboration for Safer Properties
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Classic SolutionServices LLP entered into a master franchise agreement with **A Buyer's Choice Home Inspections (ABCHI)**, USA, to introduce the concept of professional, certified home check-ups to the Indian market.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              In India, real estate transactions are major investments, yet properties often suffer from concealed dampness, electrical hot spots, or hollow tile backings. Our visual, non-destructive home checkups replace guesswork with science, ensuring transparency between developers, buyers, and lenders.
            </p>
            <div className="bg-white p-5 rounded-2xl border border-brand-border/40 shadow-sm">
              <p className="text-xs font-semibold text-secondary uppercase tracking-widest">Our Vision</p>
              <p className="text-xs sm:text-sm text-primary font-medium mt-1 leading-relaxed">
                "To make home inspections standard practice across India, promoting quality, durability, and safety in every home."
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            <h3 className="text-lg font-bold font-display text-primary">Why We Brought ABCHI to India</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Standardized Checklists", text: "Over 150+ predefined checkpoints covering walls, ceilings, switchboards, and plumbing traps." },
                { title: "Expert Training", text: "Inspectors are trained directly by certified trainers under USA frameworks." },
                { title: "Defect Tracking Software", text: "Detailed software-driven PDF reports containing visual proof and severity levels." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-primary">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 leading-relaxed font-light">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
