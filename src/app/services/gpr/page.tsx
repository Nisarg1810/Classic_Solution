"use client";

import Link from "next/link";
import Image from "next/image";
import { Radar, CheckCircle2, Layers, ArrowLeft, PhoneCall, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";

const whatWeDetect = [
  { title: "Rebar & Post-Tension Cable Location", text: "Precisely maps depth, spacing, and direction of steel reinforcement and PT cables before any drilling, coring, or cutting operation." },
  { title: "Void & Honeycomb Detection", text: "Identifies air voids, honeycombing, and delaminated concrete layers in slabs, walls, columns, and bridge decks." },
  { title: "Embedded Conduit & Pipe Tracing", text: "Safely locates electrical conduits, water pipes, and drainage lines hidden inside concrete before renovation work begins." },
  { title: "Slab Thickness Measurement", text: "Non-destructively measures concrete slab thickness and verifies compliance with structural drawings — no core drilling needed." },
  { title: "Corrosion & Cover Depth", text: "Measures concrete cover over rebar and estimates corrosion risk in chloride-exposed structures like basements and parking decks." },
  { title: "Subsurface Utility Mapping", text: "Produces plan-view maps of all detected utilities, conduits, and anomalies for safe excavation and demolition planning." },
];

const useCases = [
  { title: "Pre-Drilling Safety Scans", desc: "Prevents accidental cutting of live conduits, water pipes, rebar, and post-tension cables during renovation or core drilling." },
  { title: "Bridge & Infrastructure Inspection", desc: "Maps internal rebar corrosion, delamination, and voids in flyovers, parking structures, and bridge decks." },
  { title: "Heritage Building Assessment", desc: "Non-invasive assessment of old concrete structures to plan retrofitting and strengthening safely." },
  { title: "Quality Audit During Construction", desc: "Verifies correct rebar placement and concrete cover depth as per structural design drawings before concreting closes." },
  { title: "Floor Slab Void Detection", desc: "Identifies cavities below raised floors in IT parks, warehouses, and industrial facilities at risk of structural failure." },
  { title: "Basement & Retaining Wall Scans", desc: "Maps moisture ingress paths, void pockets, and embedded services in basement retaining walls and foundations." },
  { title: "Airport & Port Infrastructure", desc: "Runway slab and apron scanning for delamination, rebar corrosion, and subsurface cavity detection." },
  { title: "Forensic Structural Investigation", desc: "Post-failure investigations to determine root causes via subsurface defect mapping in distressed concrete elements." },
];

export default function GPRPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Non-Destructive Testing"
        title="Ground Penetrating Radar"
        titleHighlight="(GPR) Services"
        subtitle="Advanced subsurface scanning that sees through concrete, asphalt, and soil — revealing embedded rebar, conduits, and voids without a single drill hole."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "GPR Services" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">

          {/* Main block */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-6 text-left">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">How GPR Works</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Seeing Inside Concrete Without Breaking It
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                Ground Penetrating Radar transmits high-frequency electromagnetic pulses into a structure. When these pulses encounter a boundary between different materials — rebar in concrete, a void, or a pipe — they reflect back to the antenna and are recorded as a scan profile.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Classic Solution's GPR equipment generates real-time 2D scan profiles and 3D grid maps of the subsurface. Our trained engineers interpret the hyperbolic reflections on-site to precisely locate, depth-grade, and physically mark embedded objects on the actual surface — enabling safe drilling and demolition.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Unlike X-ray scanning, GPR requires access from one side only, uses no ionising radiation, and poses zero health hazards — making it ideal for occupied buildings, live hospitals, and active infrastructure.
              </p>
              <div className="flex gap-4 mt-2">
                <Link href="/contact" className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                  Book GPR Scan
                </Link>
                <Link href="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm">
                  <ArrowLeft className="h-4 w-4" /> All Services
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80" alt="GPR Scan in Action" fill className="object-cover" unoptimized />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80" alt="Concrete Structure Scan" fill className="object-cover" unoptimized />
                </div>
              </div>
              <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">GPR System Capabilities</h3>
              <ul className="flex flex-col gap-4">
                {[
                  { title: "Depth Range", text: "Scans up to 600mm in reinforced concrete; several metres in soil or granular fill." },
                  { title: "Positional Accuracy", text: "Locates embedded objects with ±10mm positional accuracy in horizontal plane." },
                  { title: "3D Grid Mapping", text: "Produces full 3D volumetric maps of complex multi-layer slabs and walls." },
                  { title: "Real-Time On-Site Marking", text: "Detected objects are physically marked on the surface immediately during scanning." },
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
              <div className="bg-brand-light border border-brand-border/40 p-4 rounded-xl flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Helpline</p>
                  <p className="text-sm font-bold text-primary">76000 78862</p>
                </div>
              </div>
            </div>
          </div>

          {/* What we detect */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Detection Scope</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">What GPR Can Find</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {whatWeDetect.map((item, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl shadow-sm hover:border-secondary transition-all flex gap-3">
                  <Radar className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-xs text-brand-muted font-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use cases */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Industry Applications</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Where GPR Scanning Is Critical</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {useCases.map((item, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl shadow-sm hover:border-secondary transition-all flex flex-col gap-3">
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary font-display">{item.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
