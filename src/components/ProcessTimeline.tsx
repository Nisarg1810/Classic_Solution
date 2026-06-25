"use client";

import { motion } from "framer-motion";
import { ClipboardList, Navigation, Eye, FileSpreadsheet, UserCheck, HeartHandshake } from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Book Inspection",
    desc: "Schedule a convenient date and time online or over the phone. We align with your availability.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Expert Site Visit",
    desc: "Our certified inspectors arrive at your property equipped with high-tech diagnostic gear.",
    icon: Navigation,
  },
  {
    step: "03",
    title: "Advanced Testing",
    desc: "We perform thermal scanning, moisture detection, plumbing analysis, and structural checks.",
    icon: Eye,
  },
  {
    step: "04",
    title: "Detailed Digital Report",
    desc: "You receive a structured PDF report highlighting dampness levels, faults, and structural issues.",
    icon: FileSpreadsheet,
  },
  {
    step: "05",
    title: "Expert Consultation",
    desc: "We explain our findings in detail, answering your questions and showing you exactly where problems lie.",
    icon: UserCheck,
  },
  {
    step: "06",
    title: "Recommended Solutions",
    desc: "Receive customized waterproofing, plumbing, and structural suggestions to keep your home protected.",
    icon: HeartHandshake,
  },
];

export default function ProcessTimeline() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Methodology</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary mt-2">Our Step-by-Step Inspection Process</h2>
        <p className="text-brand-muted mt-3 text-sm sm:text-base">
          From booking to final recommendations, we ensure a transparent, scientific, and thorough diagnostic check of your property.
        </p>
      </div>

      <div className="relative border-l-2 border-brand-border/40 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-0.5 md:before:bg-brand-border/40 pl-6 md:pl-0 flex flex-col gap-12">
        {processSteps.map((step, idx) => {
          const IconComponent = step.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={step.step}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Center Point on Desktop */}
              <div className="absolute -left-[31px] md:left-1/2 md:-translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-secondary border-4 border-white shadow-md z-20" />

              {/* Content Card Box */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className={`w-full md:w-[45%] bg-white border border-brand-border/40 p-6 rounded-3xl shadow-premium hover:shadow-premium-hover transition-premium flex flex-col gap-3 relative ${
                  isEven ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                {/* Big Step Number in Background */}
                <span className="absolute bottom-4 right-6 text-5xl font-black text-brand-light font-display select-none">
                  {step.step}
                </span>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shadow-inner">
                    <IconComponent className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary font-display">{step.title}</h3>
                </div>
                <p className="text-sm text-brand-muted leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
