"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle } from "lucide-react";
import PageHero from "@/components/PageHero";

const toolImages = [
  "/images/services/2/1/Group 286.png",
  "/images/services/2/1/Group 280.png",
  "/images/services/2/1/Group 281.png",
  "/images/services/2/1/Group 282.png",
  "/images/services/2/1/Group 283.png",
  "/images/services/2/1/Group 285.png",
  "/images/services/2/1/Group 287.png",
  "/images/services/2/1/Group 288.png",
];

export default function ServicesHomeInspection() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      {/* Page Hero */}
      <PageHero
        badge="Service Details"
        title="Complete Home /"
        titleHighlight="Property Inspection"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Home Inspection" }]}
        subtitle="A thorough point-by-point visual and non-destructive quality checkup of your property's structure, systems, and finishes."
      />

      {/* Main Content Area */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        


        {/* Hero Banner Image */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-premium mb-8 border border-brand-border/20">
          <Image
            src="/images/services/2/001.png"
            alt="Gift a Safe & Healthy Home to your Family"
            width={1240}
            height={314}
            className="w-full h-auto object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Slogan Subheading in Red */}
        <div className="text-left mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-red-600 font-display uppercase tracking-wide leading-tight">
            Know the Health of your Home
          </h3>
          <h4 className="text-lg sm:text-xl font-bold text-red-600 font-display tracking-wide mt-1">
            Get it Inspected...
          </h4>
        </div>

        {/* Narrative Section: What is Home Inspection? */}
        <section className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
            What is Home Inspection?
          </h3>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
            Home Inspection is a non-invasive, visual examination of all accessible areas (systems & components) of a property using modern technology and specialized tools uses normal operating controls, is designed to describe the condition of the systems and components, identifies and reports issues within specific systems and components, reports issues (with relevant pictures) that are both observed and deemed critical by the inspector, generates software driven home inspection reports.
          </p>
        </section>

        {/* Areas & Systems Inspected */}
        <div className="space-y-6 mb-8 text-left">
          {/* Areas Inspected */}
          <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-3">
              Areas Inspected:
            </h3>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Bedrooms | Bathrooms | Living | Dining Area | Alleys | Kitchens | Balconies | Lofts | Servants’ Quarters | Lobby Area | Attached Structure | Exterior (Stairs | Steps | Ramps | Walkways | Railings | Hand rails | Driveways, etc)
            </p>
          </div>

          {/* Systems & Components Inspected */}
          <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-3">
              Systems & Components Inspected:
            </h3>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Walls | Ceilings | Floors | Doors | Windows | Plumbing | Electrical | Stair steps | Stair railing | Cabinets and countertops | Applicable Installed Appliances | Water Supply | Exhaust Systems | Air Conditioning Systems, etc.
            </p>
          </div>
        </div>

        {/* Cutaway House Image */}
        <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm mb-12 text-center">
          <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-brand-border/40 shadow-sm">
            <Image
              src="/images/services/2/Group 272 (1).png"
              alt="Home Inspection Cutaway Diagram"
              width={5364}
              height={3936}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>

        {/* Speciality Tools Section */}
        <section className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-red-600 font-display mb-6">
            Speciality Home Inspection Tools & Technologies
          </h3>

          {/* 2x4 Circular Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-lg md:max-w-2xl mx-auto mb-4">
            {toolImages.map((src, idx) => (
              <div key={idx} className="flex justify-center">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-border/40 bg-brand-light shadow-sm hover:scale-105 hover:border-secondary transition-all duration-300">
                  <Image
                    src={src}
                    alt={`Inspection Tool ${idx + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reporting Parameters */}
        <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 text-left">
          <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
            Reporting Parameters - Condition Details:
          </h3>
          <ul className="space-y-3">
            {["Material types", "Installation & Finishing", "Operations & Functionality", "General safe"].map((param, idx) => (
              <li key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-brand-text font-light">
                <CheckCircle className="h-5 w-5 text-secondary shrink-0" />
                <span>{param}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scope and Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* Properties scope */}
          <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between text-left">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
                All Properties Inspected
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2.5 text-sm sm:text-base text-brand-text font-light">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-primary">Categories: </span>
                    New/ Existing/ Old/ Heritage
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-sm sm:text-base text-brand-text font-light">
                  <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-primary">Types: </span>
                    Homes, Office, Retails, Schools, Warehouse, Shopping Mall, Retail, Factories, Residential projects, Bank, Bust stand, Building, Bungalow etc.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 3D Issues Pyramid Image */}
          <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-brand-border/40 shadow-sm">
              <Image
                src="/images/services/2/Group 289.png"
                alt="3D of Issues Methodology"
                width={1332}
                height={916}
                className="w-full h-auto"
                unoptimized
              />
            </div>
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
            Book An Inspection
          </Link>
        </div>

      </div>
    </div>
  );
}
