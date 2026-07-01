"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Users, CheckCircle2, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function AboutMacjAbchi() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Indo-US Collaboration"
        title="MACJ Services LLP &"
        titleHighlight="ABCHI USA Partnership"
        subtitle="Formed in 2016, this strategic alliance introduced the global standard of professional home and property inspections to the Indian real estate market."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "MACJ - ABCHI Partnership" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">The Story</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Bridging American Systems with Indian Masonry Expertise
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              MACJ Services LLP signed the Master Franchise Agreement with **A Buyer's Choice Home Inspections (ABCHI) USA** in Fort Lauderdale, USA in October 2015, officially launching in 2016. The goal was to solve a major issue in the Indian housing market: the complete lack of third-party property diagnostics.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              As part of this strong strategic alliance, ABCHI USA invested **10% equity** in the legal entity owning the all-India master franchise. Under the global CEO Bill Redfern, MACJ imported structured MNC inspection checklists, advanced software-driven reports, and continuous engineer training to India.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Today, MACJ operates as a premier inspection service across India, bridging scientific diagnosis (like thermal imaging) with local structural builders, ensuring handover transparency and helping homebuyers buy with absolute peace of mind.
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

          {/* Right Block: Structured List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Partnership Highlights</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Defect Warranty Framework", text: "Allows homebuyers to document issues and seek free rectification from builders under state RERA guidelines." },
                { title: "Standardized 150+ Checkpoints", text: "Inspections cover walls, ceiling, tile grouting, electrical DB loads, plumbing pressure, and slope drainage." },
                { title: "Advanced Equipment", text: "Uses premium infrared cameras, pinless digital dampness meters, and thermal sensors for non-destructive checkups." },
                { title: "Nationwide Scaling", text: "Operating across Kolkata, Mumbai, Pune, Bangalore, and Gurgaon, supporting developers, channel partners, and buyers." }
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
                <PhoneCall className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Helpline</p>
                <p className="text-sm font-bold text-primary">+91 85848 55470</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
