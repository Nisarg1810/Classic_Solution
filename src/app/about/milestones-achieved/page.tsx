"use client";

import Link from "next/link";
import { Award, ShieldCheck, MapPin, Users, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

const timelineEvents = [
  {
    year: "2016",
    title: "Master Franchise Launch",
    desc: "MACJServices LLP signed a Master Franchise Agreement with ABCHI USA. This introduced professional third-party diagnostics to India's real estate industry."
  },
  {
    year: "2017",
    title: "East India Scaling",
    desc: "Established the corporate training office and operations hub in Kolkata. Conducted initial quality checkups for prominent local developers."
  },
  {
    year: "2018",
    title: "National Expansion & InterNACHI",
    desc: "Launched franchise branches in Mumbai, Pune, Bangalore, and Gurgaon. Standardized quality checklists and secured international affiliation with InterNACHI USA."
  },
  {
    year: "2020",
    title: "Magicbricks & Pidilite Alliances",
    desc: "Signed exclusive quality assessment partnerships with Magicbricks portal. Aligned with Pidilite Industries (Dr. Fixit) for thermal moisture detection audits."
  },
  {
    year: "2023",
    title: "8,000+ Inspections Milestone",
    desc: "Completed over 8,000 residential and commercial visual inspections, helping buyers claim warranty repairs under state RERA liability windows."
  },
  {
    year: "2026",
    title: "Pioneering Automation Integration",
    desc: "Integrating infrared inspection data directly with developers' pre-handover construction checklists to digitize defect logging."
  }
];

export default function MilestonesAchieved() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Our History"
        title="Milestones Achieved &"
        titleHighlight="Corporate Timeline"
        subtitle="Explore our growth journey from launching the Indo-US collaboration in 2016 to becoming India's most trusted property diagnostics brand."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Milestones" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl flex flex-col gap-10">
          
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Milestones</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">A Timeline of Trust</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              We have spent a decade building standardized methodologies, training engineers, and verifying property safety.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative border-l-2 border-brand-border/80 pl-6 sm:pl-10 ml-4 flex flex-col gap-10">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Circle */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1 h-5 w-5 rounded-full border-4 border-white bg-secondary shadow-md" />
                
                <div className="bg-white p-6 rounded-2xl border border-brand-border/30 shadow-sm hover:shadow-premium transition-all duration-300">
                  <span className="inline-block text-xs font-bold text-secondary uppercase tracking-widest mb-1.5">{event.year}</span>
                  <h3 className="text-lg font-bold text-primary font-display mb-2">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
            >
              Book Inspection Today
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" /> About Main Page
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
