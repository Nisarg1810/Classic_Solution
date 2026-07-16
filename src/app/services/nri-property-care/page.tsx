"use client";

import Link from "next/link";
import Image from "next/image";
import { Wrench, CheckCircle2, PhoneCall, ArrowLeft, FileText, Shield, FileCheck, Info } from "lucide-react";
import PageHero from "@/components/PageHero";

const reraRules = [
  "Depositing 70% of funds collected from buyers in separate bank account (Escrow) & used for project.",
  "Mandatory for all project builders to register with RERA before launching their projects.",
  "Developers to upload on RERA website all project details, including approved layout plan, timelines, cost, sale agreement formats.",
  "No advance (>10%) to be taken by promoter without entering into an agreement for sale.",
  "Proposed project to be developed / completed by promoter in accordance with the sanctioned plans. Any additions and alterations cannot be made without previous consent of allottees.",
  "5 years free-of-cost guarantee from structural / workmanship defect or any other quality or provision of services or any other obligations of promoter as per agreement for sale from the date of handing over possession, it shall be the duty of promoter to rectify such defects without further charge, within thirty days. In the event of promoter's failure to rectify such defects within such time, the aggrieved allottees shall be entitled to receive appropriate compensation in the manner as provided under this Act.",
  "Stringent penalties / penal provisions for developers / agents / buyers for violation of orders of Appellate Tribunals and Regulatory Authorities."
];

const nriMatrix = [
  {
    phase: "Ongoing Construction Supervision",
    core: [
      "Periodic visits to your property and regular progress reports/information to be shared.",
      "Supplementary videos/photos to be shared.",
      "Coordination with developer for rectification matters.",
      "Periodical MIS/Updates."
    ],
    support: [
      "Reference of interior decorators, other vendors/service providers.",
      "Property Finance.",
      "Legal/Documentation.",
      "Other related matters."
    ]
  },
  {
    phase: "Ready to Move-in Properties",
    core: [
      "Pre-handover Inspection.",
      "Coordination with the seller/developer for rectification.",
      "Post rectification verification.",
      "Periodical MIS/Updates."
    ],
    support: [
      "Legal/Documentation.",
      "Property Finance.",
      "Complete the property handover process with the seller including collection of keys, access cards and documents.",
      "Other related matters."
    ]
  },
  {
    phase: "Tenant Management",
    core: [
      "Pre-listing Inspection.",
      "Pre-possession Inspection.",
      "Periodical Monitoring.",
      "Repossession Inspection.",
      "Periodical MIS/Updates."
    ],
    support: [
      "Tenant Search.",
      "Legal/Documentation.",
      "Routine Collection (collection of rent, compliance, other related matters).",
      "Repossession matters.",
      "Other related matters."
    ]
  },
  {
    phase: "Periodical Inspection, Monitoring & Management",
    core: [
      "Periodical (need based) Inspection and Monitoring.",
      "Repair & Maintenance Management.",
      "Periodical MIS/Updates."
    ],
    support: [
      "Coordination with various vendors/service providers.",
      "Other related matters."
    ]
  }
];

export default function ServicesNriCare() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      <PageHero
        badge="Property Management"
        title="Complete Property Care"
        titleHighlight="for NRIs / CCCs"
        subtitle="Providing complete Property Care and Management Services, while you are far away from it. A Single platform for your Home / Property Inspection & Management."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "NRI Property Care" }]}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Navigation Actions */}
        <div className="flex gap-4 mb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
          >
            Book NRI Services
          </Link>
        </div>

        {/* 1. Main Diagram Banner */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-brand-border/30 bg-white shadow-premium p-4 sm:p-6 mb-10">
          <Image
            src="/images/services/5/Group 271.png"
            alt="NRI Services - Complete Home / Property Inspection & Management Diagram"
            width={1200}
            height={560}
            className="w-full h-auto object-contain"
            priority
            unoptimized
          />
        </div>

        {/* Intro statement */}
        <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm mb-10 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-3">
            A Single platform for your Home / Property Inspection & Management.
          </h3>
          <p className="text-xs sm:text-sm text-brand-muted font-light leading-relaxed">
            Classic Solution offers NRIs complete peace of mind by acting as their local technical representatives. Whether your property is under construction, ready to move in, rented out, or vacant, our engineers inspect and manage it periodically with thorough logs.
          </p>
        </div>

        {/* 2. Responsive 4-Column Matrix Grid */}
        <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-6 text-left">
          Our Service Matrix
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {nriMatrix.map((item, idx) => (
            <div key={idx} className="bg-white border border-brand-border/30 rounded-3xl p-5 shadow-premium flex flex-col justify-between text-left h-full">
              <div>
                {/* Header */}
                <h4 className="text-sm sm:text-base font-extrabold text-secondary font-display mb-4 border-b border-brand-border pb-2.5 min-h-[50px] flex items-center leading-snug">
                  {item.phase}
                </h4>
                
                {/* Core Inspection */}
                <div className="mb-5">
                  <h5 className="text-[11px] uppercase tracking-wider font-extrabold text-primary mb-2 flex items-center gap-1.5">
                    <FileCheck className="h-3.5 w-3.5 text-secondary" /> Core Inspection
                  </h5>
                  <ul className="space-y-2">
                    {item.core.map((pt, i) => (
                      <li key={i} className="flex gap-2 text-xs text-brand-text font-light leading-relaxed">
                        <span className="text-secondary shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Support Services */}
              <div className="border-t border-brand-border/30 pt-4 mt-auto">
                <h5 className="text-[11px] uppercase tracking-wider font-extrabold text-primary mb-2 flex items-center gap-1.5">
                  <Wrench className="h-3.5 w-3.5 text-secondary" /> Support Services
                </h5>
                <ul className="space-y-2">
                  {item.support.map((pt, i) => (
                    <li key={i} className="flex gap-2 text-xs text-brand-muted font-light leading-relaxed">
                      <span className="text-secondary shrink-0">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 3. RERA Guidelines Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-brand-border/40 pt-12">
          <div className="lg:col-span-8 flex flex-col gap-4 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">RERA Protection</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary leading-tight">
              Advantage Home Buyers: RERA, 2016
            </h2>
            <ul className="flex flex-col gap-4 text-xs sm:text-sm text-brand-text mt-4">
              {reraRules.map((rule, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">{idx + 1}</div>
                  <p className="font-light leading-relaxed">{rule}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* RERA Shield Logo side */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white border border-brand-border/30 rounded-3xl shadow-premium">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4">
              <Image
                src="/images/services/5/Rera-2 3.png"
                alt="Advantage Home Buyers RERA 2016 Shield"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h4 className="text-sm font-bold text-primary font-display text-center">Advantage Home Buyers</h4>
            <p className="text-xs text-brand-muted mt-1 text-center font-light">RERA, 2016 Compliant Audits</p>
          </div>
        </div>

        {/* Back and Action Buttons */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-t border-brand-border/40 pt-8 mt-12">
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
            Book NRI Services
          </Link>
        </div>

      </div>
    </div>
  );
}
