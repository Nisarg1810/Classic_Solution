"use client";

import Link from "next/link";
import Image from "next/image";
import { Droplets, CheckCircle2, Thermometer, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesMoistureDamp() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Thermal Imaging"
        title="Moisture, Dampness & Seepage"
        titleHighlight="Diagnostics via Infrared"
        subtitle="Detect the root source of water leaks, concealed dampness, and seepage paths scientifically without cracking open walls."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Moisture & Damp" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Infrared Thermography</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Locating Seepage Trails Before Demolition
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Water seepage is one of the most frustrating problems for property owners. Often, the damp spot appears on a wall, but the actual leakage point is located meters away in a toilet joint or terrace boundary.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Classic Solution replaces guesswork with scientific diagnostics. We scan surfaces using **infrared thermal imaging cameras**, which measure micro-temperature differences. Because wet plaster holds a lower temperature, the camera maps the exact seepage trail.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              We verify the thermal anomalies using **pinless electronic moisture meters**, mapping the moisture spread index inside ceilings, slabs, and tiles. This targets repairs only at the source point, saving high civil demolition costs.
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                Book Dampness Scan
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" /> All Services
              </Link>
            </div>
          </div>

          {/* Right Block: Technology */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            {/* Thermal Imaging Photos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2019/01/popping-360x240.jpg" alt="Moisture Wall Detection" fill className="object-cover" unoptimized />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Coverage-04-1-360x240.jpg" alt="Ceiling Leak Detection" fill className="object-cover" unoptimized />
              </div>
            </div>

            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Why Use Thermal Diagnostics?</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "No Initial Breakage", text: "Maps the moisture spread behind wall plaster and flooring tiles without drilling." },
                { title: "Plumbing Leak Tracing", text: "Traces leakages in pipe joints, bathroom traps, vertical shafts, and ceiling slabs." },
                { title: "Actionable Consulting", text: "We do not sell waterproofing chemicals, giving you 100% unbiased repair reports." },
                { title: "Early Mold Prevention", text: "Detects hidden condensation zones, preventing early mold growth and air quality health hazards." }
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
                <Thermometer className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Diagnostic Equipment</p>
                <p className="text-sm font-bold text-primary">Flir Infrared Thermal Cameras</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
