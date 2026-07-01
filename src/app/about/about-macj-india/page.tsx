"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, Award, CheckCircle2, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

const profiles = [
  {
    name: "Ravindra Chamaria",
    role: "Promoter & Chairman, Infinity Group",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Ravindra-Chamaria.jpg",
    bio: "A prominent industrialist and the visionary Chairman of Infinity Group. He pioneered IT infrastructure development in East India (creating iconic structures like Infinity Benchmark) and guides MACJ's pan-India expansion and franchisee networks."
  },
  {
    name: "Bill Redfern",
    role: "Founder, ABCHI USA",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/1.-Bill-Redfern-CEO-Founder-ABCHI.jpg",
    bio: "An international entrepreneur and franchising authority who founded A Buyer's Choice Home Inspections in Florida. He established the global standards, inspection certifications, and licensing programs utilized by MACJ."
  },
  {
    name: "Mahendra Sureka",
    role: "Director & CEO, MACJ India",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2025/04/MS.jpg",
    bio: "A seasoned executive with over 30 years of management experience in real estate and financial sectors. He leads the operational growth, technician training curriculum, and engineering diagnostics protocols in India."
  },
  {
    name: "Arvind Kumar Bhotica",
    role: "Partner & Financial Advisor",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2025/04/AKB.jpg",
    bio: "Brings extensive experience in corporate finance, project management, and compliance frameworks. He governs corporate governance and partnership setups."
  },
  {
    name: "Rohit Drolia",
    role: "Partner & Operations Head",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "An operations specialist managing project execution, site inspector alignments, customer relations, and software reporting delivery schedules."
  }
];

export default function AboutMacjIndia() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Management Profiles"
        title="Our Promoters &"
        titleHighlight="Corporate Partners"
        subtitle="Meet the team of seasoned business leaders, industry pioneers, and corporate advisors behind MACJ - A Buyer's Choice Home Inspections."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Management Profiles" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col gap-10">
          
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Leadership team</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Executive Leadership Profiles</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Our directors and advisors bring combined experience across real estate, global franchising, finance, and visual diagnostic technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((person, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 hover:shadow-premium transition-premium group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-brand-border/40">
                    <Image
                      src={person.imageUrl}
                      alt={person.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary font-display mb-1">{person.name}</h3>
                  <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 leading-snug">{person.role}</p>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
            >
              Contact Director's Office
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
