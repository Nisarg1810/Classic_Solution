"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Quote, CheckCircle2, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

const testimonials = [
  {
    id: 1,
    name: "Priyanka Jalan",
    role: "Home Buyer",
    location: "Residential Property, Kolkata",
    rating: 5,
    comment: "Classic Solution's inspection before my flat purchase revealed several hidden seepage issues and electrical concerns. The professional report helped me negotiate better and fix issues before moving in. Best money spent!",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Priyanka_Jalan.jpg",
    service: "Complete Home Inspection",
  },
  {
    id: 2,
    name: "Mayur Trebrewal",
    role: "Property Investor",
    location: "Residential Complex, Mumbai",
    rating: 5,
    comment: "We had seepage issues for years. Classic Solution used thermal imaging to locate the exact source without breaking any walls. Their detailed report and consulting made the repair targeted and affordable.",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/mayur_tebrewal.jpg",
    service: "Moisture & Damp Inspection",
  },
  {
    id: 3,
    name: "Swajan Datta",
    role: "Homeowner",
    location: "Apartment, Pune",
    rating: 5,
    comment: "The Classic Solution team was extremely professional and thorough. They found hollow tiles, electrical anomalies, and moisture infiltration that the builder had never disclosed. The report saved us from a very costly mistake.",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Swajan_Datta.jpg",
    service: "Pre-Handover Inspection",
  },
  {
    id: 4,
    name: "Vivek Jaiswal",
    role: "New Home Buyer",
    location: "New Flat, Hyderabad",
    rating: 5,
    comment: "Classic Solution's pre-handover inspection was eye-opening. They identified over 40 defects with photographic evidence, categorized by severity. The builder had to fix everything before handover — worth every rupee.",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Vivek_Jaiswal.jpg",
    service: "Pre-Handover Inspection",
  },
  {
    id: 5,
    name: "Sanjeev Gupta",
    role: "Corporate Client",
    location: "Office Property, Delhi",
    rating: 5,
    comment: "Excellent service. The thermal imaging inspection identified overheated panels in our office complex before a potential electrical failure. Their team was knowledgeable and the report crystal clear.",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Sanjeev_Gupta.jpg",
    service: "Electrical Inspection",
  },
];


export default function TestimonialsPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Client Stories"
        title="What Our Clients"
        titleHighlight="Say About Us"
        subtitle="Real feedback from homeowners, investors, and corporate clients who trusted Classic Solution to inspect their most important asset."
        breadcrumbs={[{ label: "Our Clients" }, { label: "Testimonials" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">

          {/* Testimonials grid */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Client Reviews</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Verified Client Testimonials</h2>
              <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
                Every review is from a real client who engaged Classic Solution for a property inspection service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white border border-brand-border/30 rounded-3xl p-6 shadow-sm hover:shadow-premium hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between relative"
                >
                  <div className="absolute right-5 top-5 text-primary/8">
                    <Quote className="h-12 w-12" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 text-[#FBBF24]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  {/* Service tag */}
                  <span className="inline-block text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full mb-4 w-fit">
                    {t.service}
                  </span>

                  {/* Comment */}
                  <p className="text-brand-text text-xs sm:text-sm leading-relaxed italic mb-6 relative z-10 flex-grow">
                    &ldquo;{t.comment}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-brand-border/30 pt-4 mt-auto">
                    <div className="relative h-11 w-11 shrink-0 rounded-full overflow-hidden border-2 border-secondary shadow-sm">
                      <Image src={t.imageUrl} alt={t.name} fill className="object-cover" unoptimized />
                    </div>
                    <div>
                      <h4 className="text-primary font-bold text-sm font-display">{t.name}</h4>
                      <p className="text-[10px] text-brand-muted leading-snug">{t.role} · {t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-8 sm:p-12 rounded-3xl shadow-premium text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-secondary mb-3">Ready to Inspect Your Property?</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6 max-w-xl mx-auto">
              Join thousands of satisfied clients who made their biggest investment with confidence. Book your inspection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider">
                Book an Inspection
              </Link>
              <Link href="/our-clients" className="px-8 py-3.5 border border-white/30 hover:border-white/60 text-white font-bold rounded-full transition-all text-xs uppercase tracking-wider">
                View Our Clients
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
