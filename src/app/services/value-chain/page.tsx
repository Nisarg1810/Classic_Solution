"use client";

import Link from "next/link";
import { Building2, Users2, Shield, CheckCircle2, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesValueChain() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Real Estate Ecosystem"
        title="Serving the Entire Real"
        titleHighlight="Estate Value Chain"
        subtitle="Third-party property inspections provide transparency, reduce disputes, and verify construction safety standards for all real estate stakeholders."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Value Chain" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Ecosystem Services</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Quality Assurance for Every Stakeholder
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Real estate transaction structures are complex, involving multiple parties. Without standardized, objective property diagnostics, miscommunication regarding finishes, seepage source paths, and wiring defects are common.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Classic Solution serves as an independent, certified third-party reviewer. We assess properties using standard scientific parameters, creating a win-win scenario for buyers, developers, channel partners, and lenders.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              By introducing structured property checkups, we establish transparent handovers, helping developers verify quality control guidelines and enabling buyers to invest with absolute clarity.
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

          {/* Right Block: Stakeholders */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Value Additions</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "For Home Buyers", text: "Identifies hidden seepages, hot points, or tiling hollows, preventing heavy repair bills later." },
                { title: "For Real Estate Developers", text: "Identifies finishing defects before possession handover, increasing customer satisfaction ratings." },
                { title: "For Channel Advisors & Brokers", text: "Helps advise clients with third-party verified facts, closing deals faster with transparency." },
                { title: "For Lenders & Insurers", text: "Checks the general durability, structure, and risk vectors before funding large assets." }
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
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Helpline</p>
                <p className="text-sm font-bold text-primary">76000 78862</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
