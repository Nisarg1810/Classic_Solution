"use client";

import Link from "next/link";
import { Users, CheckCircle2, ShieldCheck, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesStakeholders() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Property Synergy"
        title="Home Inspection: Win-Win"
        titleHighlight="for all Stakeholders"
        subtitle="Learn how independent property checkups add value, create trust, and protect investments for buyers, developers, and realtors."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Stakeholder Benefits" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Shared Value</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Promoting Transparency and Quality in Indian Housing
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Historically, property deals in India often resulted in disputes over dampness seepage, hollow tiles, or electrical switchboard safety during handover inspections. Real estate transactions require trust.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              By introducing standardized, independent diagnostics, MACJ creates a neutral, fact-based dialogue. We do not sell repairs or chemical products, ensuring our diagnostic outputs are objective.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Whether you are a buyer seeking safety assurance, a developer protecting against RERA warranty claims, or an agent building trust, a home inspection report is a vital tool.
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                Inquire Inspection
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
            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">How Everyone Wins</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Home Buyers Win", text: "Allows buyers to scan for structural and moisture faults before finalizing payments, avoiding repair bills." },
                { title: "Developers Win", text: "Allows construction supervisors to log and fix finishing anomalies early, decreasing pre-handover complaint loops." },
                { title: "Real Estate Agents Win", text: "Helps brokers advise properties with verified facts, avoiding deals falling through due to post-sale damp surprises." },
                { title: "Property Durability Wins", text: "Improves overall build standards, durability, and safety across the real estate sector." }
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
                <Users className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">National Alignment</p>
                <p className="text-sm font-bold text-primary">Serving buyers, developers & brokers PAN India</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
