"use client";

import Link from "next/link";
import { Heart, Smile, Users, Shield, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function OurGratitude() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Thank You"
        title="Our Sincere"
        titleHighlight="Gratitude"
        subtitle="Acknowledging the builders, developers, consultants, and thousands of homeowners who trusted us to help secure their real estate investments."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Our Gratitude" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
          
          <div className="h-16 w-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
            <Heart className="h-8 w-8" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
            Appreciating Our Early Believers
          </h2>

          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-brand-border/30 shadow-premium text-left flex flex-col gap-6 text-brand-muted leading-relaxed font-light text-sm sm:text-base">
            <p>
              When MACJ Services LLP launched in 2016, "Home Inspection" was a completely new concept in India. Properties were bought based on trust, visual finishing, and builders' reputations. There were no standard tools or professional checklists to measure structural safety, dampness source routes, or electrical hazards.
            </p>
            <p>
              We want to express our deepest appreciation to our **early adopter real estate developers** who welcomed our quality control audits on their construction sites. Their willingness to rectify hidden defects before posession handovers established a new benchmark for trust in Indian real estate.
            </p>
            <p>
              We are equally grateful to our **banking partners and channel real estate advisors** who recommended our property checkups to their clients. Your recommendation helped buyers avoid high-risk transactions.
            </p>
            <p className="font-semibold text-primary">
              Above all, we thank the thousands of individual homebuyers who trusted MACJ to inspect their dream homes. Your reviews, queries, and encouragement are the reasons why we have expanded to multiple cities across India.
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
            >
              Book Inspection Today
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" /> About Main Page
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
