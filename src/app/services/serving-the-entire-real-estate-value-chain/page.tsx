"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";

const propertyTypes = [
  "New / Existing / Old / Heritage",
  "Homes, Offices, Retail, Schools, Warehouse, Shopping Malls, Retail, Factories, Temple, Residential Projects, etc"
];

const keyFacts = [
  "Over 2,000 Properties inspected",
  "Multiple Home / Property Inspections Done for Individuals"
];

export default function ServingRealEstateValueChain() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      {/* Page Hero */}
      <PageHero
        badge="Real Estate Value Chain"
        title="Serving the Entire"
        titleHighlight="Real Estate Value Chain"
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Serving the Entire Real Estate Value Chain" }
        ]}
        subtitle="Addressing key pain points of all stakeholders in the real estate ecosystem."
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Title Header */}
        <div className="mb-8 text-left">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary font-display leading-tight">
            Serving the Entire Real Estate Value Chain
          </h2>
          <p className="text-sm font-semibold text-brand-muted tracking-wide mt-2">
            Professional Home / Property Inspection Services
          </p>
        </div>

        {/* 1. First Banner Image (Saurashtra & Kutchh First Time) */}
        <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-brand-border/40 mb-10 bg-white">
          <Image
            src="/images/value_chain_1.png"
            alt="Pioneered Professional Home / Property Inspection Services into Saurashtra & Kutchh"
            width={5687}
            height={1506}
            className="w-full h-auto"
            priority
            unoptimized
          />
        </div>

        {/* 2. Second Banner Image (Full Integration in Real Estate Value Chain) */}
        <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-brand-border/40 mb-10 bg-white">
          <Image
            src="/images/value_chain_2.png"
            alt="Full Integration in Real Estate Value Chain Flowchart"
            width={4372}
            height={2248}
            className="w-full h-auto"
            unoptimized
          />
        </div>

        {/* All Types of Properties Inspected Section */}
        <section className="bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm mb-8 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
            All Types of Properties Inspected
          </h3>
          <ul className="space-y-3.5">
            {propertyTypes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                <span className="text-secondary font-bold mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Market Validation – Key Facts Section */}
        <section className="bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm mb-12 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
            Market Validation – Key Facts
          </h3>
          <ul className="space-y-3.5">
            {keyFacts.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Back and Action Buttons */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-t border-brand-border/40 pt-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all text-xs uppercase tracking-widest"
          >
            Book Inspection
          </Link>
        </div>

      </div>
    </div>
  );
}
