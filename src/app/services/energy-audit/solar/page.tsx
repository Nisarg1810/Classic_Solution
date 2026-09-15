"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, PhoneCall } from "lucide-react";
import PageHero from "@/components/PageHero";

const whyThermalImportant = [
  "Increase power generation",
  "Improve system efficiency",
  "Detect hidden faults early",
  "Prevent expensive repairs",
  "Reduce energy losses",
  "Increase equipment lifespan",
  "Prevent electrical fires",
  "Support warranty claims",
  "Improve return on investment (ROI)",
  "Reduce unplanned downtime",
];

const inspectionServicesSolar = [
  "Residential Rooftop Solar Systems",
  "Commercial Solar Installations",
  "Industrial Solar Plants",
  "Utility Scale Solar Farms",
  "Ground Mounted Solar Plants",
  "Floating Solar Projects",
  "Car Parking Solar Canopies",
  "Solar Street Lighting Systems",
];

export default function SolarAuditPage() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden">
      <PageHero
        badge="Coming Soon"
        title="Coming Soon:"
        titleHighlight="Energy Audit: Solar Panel Thermal Inspection"
        subtitle="Maximize Solar Performance with Advanced Infrared Thermography — Identify Hidden Defects, Prevent Outages, and Secure High Yields."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Energy Audit", href: "/services/energy-audit" },
          { label: "Solar Panel Thermal Inspection (Coming Soon)" },
        ]}
      />

      <section className="py-10 sm:py-20 bg-brand-light px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-8 sm:gap-14">

          {/* Coming Soon Alert Banner */}
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <p className="text-xs sm:text-sm font-bold text-amber-900">
                Coming Soon: Energy Audit – Solar Panel Thermal Inspection is currently preparing for launch.
              </p>
            </div>
            <span className="text-[10px] sm:text-xs uppercase font-extrabold tracking-wider text-amber-800 bg-amber-200/70 px-3 py-1 rounded-full shrink-0">
              Launching Soon
            </span>
          </div>

          {/* Banner Image */}
          <div className="w-full relative aspect-[1377/600] sm:aspect-[1377/539] rounded-2xl sm:rounded-3xl overflow-hidden border border-brand-border/40 shadow-premium bg-white">
            <Image
              src="/images/services/solar/solar_banner.png"
              alt="Solar Panel Inspection Services Banner"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
              priority
            />
          </div>

          {/* Section 1: Overview */}
          <div className="flex flex-col gap-4 sm:gap-5 text-left max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary leading-tight">
              Maximize Solar Performance with Advanced Thermal Imaging
            </h2>
            <p className="text-xs sm:text-base text-brand-text leading-relaxed font-light">
              Solar panels are a long-term investment, but hidden defects can significantly reduce energy
              production, shorten system life, and create electrical safety risks. Our Solar Panel Thermal
              Inspection service uses advanced infrared thermography to identify invisible problems before
              they lead to costly failures.
            </p>
            <p className="text-xs sm:text-base text-brand-muted leading-relaxed font-light">
              At Classic Solution, we perform non-destructive thermal inspections for residential,
              commercial, industrial, and utility-scale solar power systems. Our certified inspection process
              helps owners, EPC contractors, facility managers, and maintenance teams improve system
              reliability, increase energy output, and reduce maintenance costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
              <Link href="/contact" className="text-center px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                Book Solar Scan
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                <ArrowLeft className="h-4 w-4" /> All Services
              </Link>
            </div>
          </div>

          {/* Section 2: Why Thermal Inspection is Important */}
          <div className="border-t border-brand-border/40 pt-10 sm:pt-14 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary mb-2">
                Why Thermal Inspection is Important
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: Bullet List */}
              <div className="lg:col-span-7 bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-border/30 shadow-premium">
                <ul className="flex flex-col gap-3">
                  {whyThermalImportant.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-brand-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: 2 Stacked Images */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
                <div className="relative aspect-[611/348] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-brand-border/30 shadow-md bg-white">
                  <Image
                    src="/images/services/solar/solar_technicians.png"
                    alt="Technicians performing solar thermal inspection"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[609/391] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-brand-border/30 shadow-md bg-white">
                  <Image
                    src="/images/services/solar/solar_hand_thermal.png"
                    alt="Hand holding thermal imaging camera at solar panels"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Our Inspection Services */}
          <div className="border-t border-brand-border/40 pt-10 sm:pt-14 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary mb-2">
                Our Inspection Services
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Left Column: Bullet List + Graphic */}
              <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
                <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-border/30 shadow-premium">
                  <ul className="flex flex-col gap-3">
                    {inspectionServicesSolar.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-brand-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Thermal vs EL Image Graphic */}
                <div className="bg-white p-4 rounded-2xl sm:rounded-3xl border border-brand-border/30 shadow-premium flex flex-col items-center gap-3">
                  <div className="relative aspect-[400/330] w-full max-w-[360px] rounded-xl overflow-hidden bg-white">
                    <Image
                      src="/images/services/solar/solar_thermal_vs_el.png"
                      alt="Thermal Image vs EL Image comparison graphic"
                      fill
                      sizes="360px"
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-brand-muted text-center">
                    Thermal Image vs. EL Image Diagnostics (Inactive String Identification)
                  </p>
                </div>
              </div>

              {/* Right Column: 2 Stacked Images */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
                <div className="relative aspect-[554/450] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-brand-border/30 shadow-md bg-white">
                  <Image
                    src="/images/services/solar/solar_farm_thermal.png"
                    alt="Solar farm with thermal imaging insets"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[521/347] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-brand-border/30 shadow-md bg-white">
                  <Image
                    src="/images/services/solar/solar_meter.png"
                    alt="Fluke solar irradiance meter test"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* CTA & Booking Block */}
          <div className="border-t border-brand-border/40 pt-10 flex flex-col sm:flex-row gap-6 items-center justify-between bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-border/20 shadow-premium">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                <PhoneCall className="h-5 w-5 animate-pulse" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Ready to audit your solar PV setup?</p>
                <p className="text-sm sm:text-lg font-bold text-primary">Call Helpline: 76000 78862</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link href="/contact" className="flex-1 sm:flex-initial text-center px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                Book Solar Audit
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
