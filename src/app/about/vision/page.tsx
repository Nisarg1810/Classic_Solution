"use client";

import { Eye } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function CompanyVisionPage() {
  return (
    <div className="relative w-full">
      <PageHero
        title="Our Vision &"
        titleHighlight="Core Values"
        subtitle="At Classic Solution, we are driven by a singular purpose — to make every home in India a safer, healthier, and more transparent investment for every family."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Company Vision" }]}
      />

      {/* -- MISSION STATEMENT -- */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Mission</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Making Transparency the Standard in Indian Real Estate
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                In India, property transactions involve substantial financial stakes, yet buyers historically had no credible mechanism to verify what they were purchasing. Concealed dampness, electrical hot spots, structural hollow tiles — these issues often surfaced only after possession.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                Classic Solution's mission is to change this permanently. We exist to give every homebuyer, developer, NRI investor, and corporate client an independent, science-backed, and documented assessment of the property they are dealing with — before money changes hands.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-3xl shadow-premium">
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-display text-secondary mb-4">Our Vision Statement</h3>
              <blockquote className="text-white/85 text-base sm:text-lg font-light leading-relaxed italic border-l-4 border-secondary pl-4">
                "To make home inspections standard practice across India, promoting quality, durability, and safety in every home — and empowering every buyer with the truth."
              </blockquote>
              <p className="text-white/50 text-xs mt-6 font-light">— Classic Solution Leadership</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
