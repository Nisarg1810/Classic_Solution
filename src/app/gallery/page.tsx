"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import GalleryMasonry from "@/components/GalleryMasonry";

export default function GalleryPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Our Work"
        title="Inspection Work"
        titleHighlight="Gallery"
        subtitle="A look at our on-site thermal imaging activities, electrical inspections, moisture analysis, and property checks. Real work, real results."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      {/* ── GALLERY ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Case Studies & Work</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">On-Site Inspection Photos</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Browse through our inspection photos — from thermal imaging scans to moisture detection, electrical panel assessments, and more.
            </p>
          </div>
          <GalleryMasonry />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-primary px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">Seen Enough? Let&apos;s Inspect Your Facility.</h2>
          <p className="text-white/65 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
            Our team is ready to conduct a professional thermal inspection of your property and deliver a detailed digital report.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Inspection
            </Link>
            <Link href="/process" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 transition-all duration-300">
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
