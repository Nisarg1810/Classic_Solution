"use client";

import Link from "next/link";
import Image from "next/image";
import { Wrench, CheckCircle2, MapPin, PhoneCall, ArrowLeft, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ServicesNriCare() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Property Management"
        title="Complete Property Care for"
        titleHighlight="NRIs & Corporate Clients"
        subtitle="Keep your vacant or rented properties in optimal health with our periodic visual audits and diagnostic reports."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "NRI Property Care" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Narrative */}
          <div className="flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Long Distance Peace of Mind</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Protecting Your Asset Value While You Are Away
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Non-Resident Indians (NRIs) and corporate institutions own valuable real estate assets in Indian cities that often remain locked, vacant, or leased out for long durations without technical checkups.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              During this time, a minor concealed plumbing joint leak or terrace waterproofing crack can cause extensive dampness damage. Over months, this dampness ruins paint, weakens ceiling concrete, and depreciates property value heavily.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              MACJ provides systematic **Property Care checks**. Our technical engineers visit the property periodically, run safety and moisture checks, verify key lines, and send a comprehensive visual digital log report directly to your inbox.
            </p>

            <div className="flex gap-4 mt-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                Inquire NRI Services
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
            {/* Property Care Photos */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/outside-360x240.jpg" alt="Property Exterior Care" fill className="object-cover" unoptimized />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src="https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Portfolio09-360x240.jpg" alt="NRI Property Report" fill className="object-cover" unoptimized />
              </div>
            </div>

            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">What Services are Covered?</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Periodic Visual Inspections", text: "Regular site visits to inspect ceiling, windows, and outer walls for structural defects or dampness signs." },
                { title: "Plumbing Pressure & Leak Audits", text: "Verifies water supply and checks bathroom traps, drain pipes, and utility valves." },
                { title: "Electrical Safety Inspections", text: "Checks distribution boxes and switches to verify no short circuit anomalies have occurred." },
                { title: "Digital Progress Logs", text: "Provides complete visual progress maps with high-quality color photos sent directly via email." }
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
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Report Format</p>
                <p className="text-sm font-bold text-primary">Direct digital visual emails & logs</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
