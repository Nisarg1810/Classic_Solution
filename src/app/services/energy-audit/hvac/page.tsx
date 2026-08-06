"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Flame, Wind, Snowflake, ArrowLeft, PhoneCall } from "lucide-react";
import PageHero from "@/components/PageHero";

const generalScope = [
  "Complete HVAC System Inspection",
  "Air Conditioning (AC) System Inspection",
  "Heating System Inspection",
  "Ventilation System Assessment",
  "Air Duct Inspection",
  "Indoor Air Quality (IAQ) Assessment",
  "Airflow Measurement"
];

const thermalScope = [
  "Air leakage",
  "Insulation defects",
  "Blocked water in A.C",
  "Refrigerant issues",
  "Uneven cooling",
  "Moisture intrusion",
  "Energy loss",
  "Condensation"
];

export default function HVACAuditPage() {
  return (
    <div className="relative w-full bg-white">
      <PageHero
        badge="Energy Audit"
        title="Energy audit:"
        titleHighlight="HVAC Inspection"
        subtitle="Comprehensive inspection of Heating, Ventilation, and Air Conditioning systems to ensure safety, efficiency, and reliability."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Energy Audit", href: "/services/energy-audit" },
          { label: "HVAC Inspection" },
        ]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl flex flex-col gap-16 sm:gap-24">

          {/* Section 1: Overview and Scope */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                HVAC Performance Diagnostics
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Comprehensive HVAC Inspection Services
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                We provide comprehensive HVAC (Heating, Ventilation, and Air Conditioning) inspection
                services to ensure your systems operate safely, efficiently, and reliably. Our inspections help
                identify hidden defects, energy losses, air quality issues, and maintenance requirements before they
                become costly problems.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Whether for residential, commercial, or industrial properties, our certified inspection process helps
                improve system performance, reduce energy consumption, and extend equipment life.
              </p>

              {/* Scope Bullet Points */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
                {generalScope.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-brand-border/20 shadow-sm hover:border-secondary transition-all">
                    <span className="h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-primary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: "What Does HVAC Stand For" visual box */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <div className="border-2 border-red-600 rounded-3xl bg-white p-7 sm:p-9 shadow-premium max-w-[540px] w-full group hover:border-red-500 transition-all duration-300">
                <h3 className="text-2xl sm:text-3xl font-black text-red-600 text-center uppercase tracking-wide border-b-2 border-red-100 pb-5 mb-7">
                  What Does HVAC Stand For
                </h3>
                
                <div className="flex flex-col gap-6 sm:gap-7">
                  {/* Heating Row */}
                  <div className="flex items-center gap-4 sm:gap-5 border-b border-blue-100 pb-5 sm:pb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-50 text-red-600 font-extrabold text-4xl sm:text-5xl flex items-center justify-center rounded-2xl border-2 border-red-200 shrink-0 shadow-sm">
                      H
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-blue-600">Heating</h4>
                      <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-snug font-light">
                        Refers to systems used to generate and distribute heat
                      </p>
                    </div>
                    <div className="text-blue-600 bg-blue-50 p-3 sm:p-3.5 rounded-xl shrink-0 border border-blue-100">
                      <Flame className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                  </div>

                  {/* Ventilation Row */}
                  <div className="flex items-center gap-4 sm:gap-5 border-b border-blue-100 pb-5 sm:pb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-50 text-red-600 font-extrabold text-4xl sm:text-5xl flex items-center justify-center rounded-2xl border-2 border-red-200 shrink-0 shadow-sm">
                      V
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-blue-600">Ventilation</h4>
                      <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-snug font-light">
                        Associated with systems for circulating and cleaning air
                      </p>
                    </div>
                    <div className="text-blue-600 bg-blue-50 p-3 sm:p-3.5 rounded-xl shrink-0 border border-blue-100">
                      <Wind className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                  </div>

                  {/* Air Conditioning Row */}
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-50 text-red-600 font-extrabold text-2xl sm:text-3xl flex flex-col items-center justify-center rounded-2xl border-2 border-red-200 leading-none shrink-0 shadow-sm">
                      <span>A</span>
                      <div className="w-9 border-t-2 border-red-300 my-1" />
                      <span>C</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg sm:text-xl font-bold text-blue-600">Air Conditioning</h4>
                      <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-snug font-light">
                        Applies to systems used for cooling and dehumidifying air
                      </p>
                    </div>
                    <div className="text-blue-600 bg-blue-50 p-3 sm:p-3.5 rounded-xl shrink-0 border border-blue-100">
                      <Snowflake className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Section 2: Thermal Imaging Inspection */}
          <div className="border-t border-brand-border/40 pt-16 sm:pt-24">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading, List, and Bottom Left Image */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                  Thermal Diagnostics
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                  Thermal Imaging Inspection
                </h2>
                <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                  Our infrared thermal imaging inspection identifies issues that are invisible during a
                  normal visual inspection, including:
                </p>

                {/* Thermal List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {thermalScope.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-brand-text">{item}</span>
                    </li>
                  ))}
                </ul>


              </div>

              {/* Right Column: Airflow Measurement Image */}
              <div className="lg:col-span-6 flex flex-col gap-6 items-center justify-center">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium group">
                  <Image
                    src="/images/services/airflow_measurement_optimized.jpg"
                    alt="Airflow Measurement in HVAC"
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm sm:text-base font-bold text-primary">Airflow Measurement & Velocity Audit</p>
                  <p className="text-xs sm:text-sm text-brand-muted mt-1 leading-relaxed font-light">
                    Measuring velocity, volume, and distribution characteristics across vents.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Section 3: Visual vs Thermal Diagnostic Comparison (PDF Page 2) */}
          <div className="border-t border-brand-border/40 pt-16 sm:pt-24">
            <div className="text-center max-w-2xl mx-auto mb-10 flex flex-col gap-2">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Before / After Thermography
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary">
                Visual vs. Thermal Diagnostic Comparison
              </h2>
              <p className="text-sm sm:text-base text-brand-muted font-light leading-relaxed">
                See how thermal imaging reveals issues like blocked air, temperature anomalies, and leakage that are completely invisible to the naked eye.
              </p>
            </div>

            <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-premium border border-brand-border/30 bg-white">
              <Image
                src="/images/services/group_317.png"
                alt="Visual vs. Thermal Diagnostic Comparison"
                width={5424}
                height={1026}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          </div>

          {/* Section 4: Call to Action & Back Link */}
          <div className="border-t border-brand-border/40 pt-12 flex flex-col sm:flex-row gap-6 items-center justify-between bg-white p-6 sm:p-8 rounded-3xl border border-brand-border/20 shadow-premium">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                <PhoneCall className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Need an expert consult?</p>
                <p className="text-base sm:text-lg font-bold text-primary">Call Helpline: 76000 78862</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Link href="/contact" className="flex-1 sm:flex-initial text-center px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                Book HVAC Audit
              </Link>
              <Link href="/services" className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                <ArrowLeft className="h-4 w-4" /> All Services
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

