"use client";

import { Eye, Target, ShieldCheck, CheckCircle2, Zap, BarChart2, Globe, Award, Leaf, Building2 } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const visionGoals = [
  {
    icon: Award,
    text: "Become the leading home and commercial property inspection company in India.",
  },
  {
    icon: Eye,
    text: "Be recognized as the industry leader in thermal imaging and advanced non-destructive testing (NDT) inspections.",
  },
  {
    icon: Zap,
    text: "Introduce AI-powered inspection and automated digital reporting for faster, more accurate results.",
  },
  {
    icon: Globe,
    text: "Expand services across all major cities in India through trained and certified inspection professionals.",
  },
  {
    icon: ShieldCheck,
    text: "Promote preventive maintenance to reduce property failures, repair costs, and safety risks.",
  },
  {
    icon: BarChart2,
    text: "Invest continuously in advanced inspection equipment and international certifications.",
  },
  {
    icon: CheckCircle2,
    text: "Build long-term trust through honesty, professionalism, innovation, and customer satisfaction.",
  },
  {
    icon: Leaf,
    text: "Support sustainable and energy-efficient buildings by identifying hidden defects and energy losses.",
  },
  {
    icon: Building2,
    text: "Become the preferred inspection partner for homeowners, real estate developers, financial institutions, insurance companies, industries, and government organizations.",
  },
];

const technologies = [
  "Thermal Imaging",
  "AI-Powered Inspection Systems",
  "Drones",
  "Ground Penetrating Radar (GPR)",
  "Moisture Detection",
  "Sewer Inspection Cameras",
  "Digital Reporting",
  "Predictive Analytics",
];

export default function CompanyVisionPage() {
  return (
    <div className="relative w-full">
      <PageHero
        title="Our Vision &"
        titleHighlight="Core Values"
        subtitle="At Classic Solution, our vision is to become India's most trusted and technologically advanced home and property inspection company, setting new standards for quality, safety, and innovation."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Company Vision" }]}
      />

      {/* -- VISION STATEMENT -- */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Vision</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
                Transforming Property Inspection Across India
              </h2>
              <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                At Classic Solution, our vision is to become India's most trusted and technologically advanced home and property inspection company, setting new standards for quality, safety, and innovation in the inspection industry.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                We are committed to transforming the way properties are inspected by integrating cutting-edge technologies. Our long-term vision is to provide complete property health assessment services that help homeowners, businesses, builders, architects, banks, insurance companies, and real estate professionals make informed decisions with confidence.
              </p>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
                We aspire to build a nationwide network of certified inspectors who follow internationally recognised inspection standards while delivering transparent, accurate, and unbiased reports.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-3xl shadow-premium flex flex-col gap-6">
              <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-display text-secondary">Our Vision Statement</h3>
              <blockquote className="text-white/85 text-base sm:text-lg font-light leading-relaxed italic border-l-4 border-secondary pl-4">
                "To make home inspections standard practice across India, promoting quality, durability, and safety in every home — and empowering every buyer with the truth."
              </blockquote>
              <p className="text-white/50 text-xs font-light">— Classic Solution Leadership</p>

              {/* Technologies */}
              <div className="border-t border-white/20 pt-5">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Technologies We Deploy</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold bg-white/10 text-white/80 px-3 py-1 rounded-full border border-white/15 tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- VISION GOALS -- */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Vision Goals</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">
              What We Are Working Towards
            </h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Nine clear goals that define where Classic Solution is headed — and how we plan to reshape property inspection in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visionGoals.map((goal, idx) => (
              <div
                key={idx}
                className="bg-brand-light border border-brand-border/30 rounded-3xl p-6 hover:border-secondary/40 hover:shadow-premium transition-all duration-300 flex gap-4 items-start"
              >
                <div className="h-11 w-11 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <goal.icon className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-sm text-brand-text leading-relaxed font-light mt-0.5">{goal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- OUR COMMITMENT -- */}
      <section className="py-14 sm:py-20 bg-primary px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center gap-6">
            <div className="h-14 w-14 rounded-2xl bg-secondary/20 flex items-center justify-center">
              <Target className="h-7 w-7 text-secondary" />
            </div>
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Commitment</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white leading-tight max-w-2xl">
              A Future Where Every Property Is Inspected
            </h2>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed font-light max-w-2xl">
              We envision a future where every property is inspected before purchase, handover, renovation, or maintenance — ensuring safety, quality, and peace of mind. Through innovation, integrity, and continuous improvement, Classic Solution aims to redefine the inspection industry and become the benchmark for excellence in home and property inspection services across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
              >
                Book an Inspection
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 border border-white/30 hover:border-white/60 text-white font-bold rounded-full transition-all text-xs uppercase tracking-wider"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
