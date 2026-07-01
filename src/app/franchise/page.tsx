"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Award, Shield, Briefcase, CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const franchiseBenefits = [
  "MNC Collaboration support and international brand trust (ABCHI USA).",
  "Intensive technical and marketing training programs for inspectors & managers.",
  "Exclusive territories in major Indian cities.",
  "Access to proprietary digital reporting softwares and diagnostic parameters.",
  "Unbiased third-party business model with zero local material conflict."
];

export default function FranchisePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative w-full">
      <PageHero
        badge="Business Opportunity"
        title="Franchise & Career"
        titleHighlight="Opportunities"
        subtitle="Join India's fastest-growing home inspection network. We support technical entrepreneurs to establish certified property care businesses."
        breadcrumbs={[{ label: "Franchise & Careers" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Block: Opportunities */}
          <div className="flex flex-col gap-6 text-left">
            <span id="opportunity" className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm scroll-mt-28">Franchise Program</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Start Your Certified Property Inspection Franchise
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Real estate safety checks are growing rapidly in India due to RERA quality mandates and increased homebuyer awareness. Starting a MACJ franchise allows you to capitalize on this rising sector.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              We provide complete backend support including technical training on thermal diagnostics, software templates, customer query routing tools, and localized branding guidelines.
            </p>

            <h3 id="careers" className="text-lg font-bold font-display text-primary mt-4 scroll-mt-28 flex items-center gap-2 border-t border-brand-border/40 pt-6">
              <Briefcase className="h-5 w-5 text-secondary" /> Career Opportunities
            </h3>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
              We are continuously looking for motivated civil engineers, electrical technicians, and business development executives to join our local diagnostic squads. If you are passionate about visual diagnostics, apply today.
            </p>
            <a href="mailto:info@macj.in" className="text-xs font-bold text-secondary uppercase tracking-wider hover:text-primary flex items-center gap-1">
              Email Your Resume to info@macj.in <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Right Block: Franchise Application Form */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            <h3 className="text-lg font-bold font-display text-primary border-b border-brand-border pb-3">Franchise Benefits & Query</h3>
            
            <ul className="flex flex-col gap-2.5">
              {franchiseBenefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text font-light">
                  <span className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-5 rounded-2xl text-center flex flex-col items-center gap-3">
                <p className="text-sm font-bold text-green-700">Thank you for your interest!</p>
                <p className="text-xs text-green-600 font-light">Our franchise coordinators will email you detail sheets shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3.5 border-t border-brand-border/40 pt-5 mt-2">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">Inquire About Franchise</p>
                
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full bg-brand-light border border-brand-border/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-text focus:outline-none focus:border-secondary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-brand-light border border-brand-border/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-text focus:outline-none focus:border-secondary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  required
                  className="w-full bg-brand-light border border-brand-border/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-text focus:outline-none focus:border-secondary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Proposed Franchise City"
                  required
                  className="w-full bg-brand-light border border-brand-border/60 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-text focus:outline-none focus:border-secondary transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white text-xs font-bold uppercase tracking-wider py-3 rounded-full shadow transition-all duration-300"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
