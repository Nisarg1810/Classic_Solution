"use client";

import Link from "next/link";
import { Heart, Smile, Users, Shield, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function OurGratitude() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="CSR Initiative"
        title="Our Sincere"
        titleHighlight="Gratitude & Giving Back"
        subtitle="To take care of the Health & Long life of Homes through Professional Home Inspection Services, with a humble mission to give back to the community."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Our Gratitude" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
          
          <div className="h-16 w-16 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-4">
            <Heart className="h-8 w-8" />
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
            Caring for Homes, Caring for People
          </h2>

          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-brand-border/30 shadow-premium text-left flex flex-col gap-6 text-brand-muted leading-relaxed font-light text-sm sm:text-base">
            <div>
              <h3 className="text-lg font-bold text-primary font-display mb-3">Healthcare for Slum Elderly</h3>
              <p>
                As part of our commitment to society, the MACJ Team regularly distributes prescribed medicines to the underprivileged elderlies residing in a slum dwelling in Kolkata. Our goal is to make lives a bit easier for the elderly who lack support.
              </p>
            </div>

            <div className="border-t border-brand-border/40 pt-6">
              <h3 className="text-lg font-bold text-primary font-display mb-3">Supporting Dakshini Prayash</h3>
              <p>
                We are proud supporters of **Dakshini Prayash**, an NGO that strives to enable children of the lesser-privileged to overcome economic poverty. More than 400 children receive holistic education, free study materials, uniforms, wholesome midday meals, and complete healthcare facilities. Dakshini Prayash also creates self-reliance opportunities for adults in the community.
              </p>
              <div className="mt-4">
                <a 
                  href="http://www.dakshiniprayas.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-secondary hover:text-primary transition-colors uppercase tracking-wider inline-flex items-center gap-1"
                >
                  Visit dakshiniprayas.org →
                </a>
              </div>
            </div>

            <p className="font-semibold text-primary border-t border-brand-border/40 pt-6 italic">
              "To know even one life has breathed easier because you have lived. This is to have succeeded."
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
