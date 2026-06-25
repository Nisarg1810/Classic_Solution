"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Book Inspection",
    desc: "Schedule online or by phone — we align to your availability.",
  },
  {
    step: "02",
    title: "Expert Site Visit",
    desc: "Certified inspectors arrive with high-tech diagnostic gear.",
  },
  {
    step: "03",
    title: "Advanced Testing",
    desc: "Thermal scanning, moisture detection, plumbing and structural checks.",
  },
  {
    step: "04",
    title: "Digital Report",
    desc: "A structured PDF highlighting dampness, faults and structural issues.",
  },
  {
    step: "05",
    title: "Expert Consultation",
    desc: "We walk you through findings and show exactly where problems lie.",
  },
  {
    step: "06",
    title: "Recommended Solutions",
    desc: "Tailored waterproofing, plumbing and structural recommendations.",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6">
      {/* Left-aligned header — matches reference design */}
      <div className="mb-10 max-w-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-0.5 bg-secondary" />
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">
            Our Methodology
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-primary leading-tight">
          A transparent, step-by-step<br className="hidden sm:block" /> inspection
        </h2>
        <p className="text-brand-muted mt-4 text-sm sm:text-base leading-relaxed">
          From booking to final recommendations — a scientific, thorough diagnostic of your property.
        </p>
      </div>

      {/* 3-column step grid — swipeable on mobile, grid on desktop */}
      <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {processSteps.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            className="flex-shrink-0 w-[75vw] sm:w-auto snap-center flex items-start gap-4"
          >
            {/* Large step number */}
            <span className="text-4xl sm:text-5xl font-black font-display text-primary leading-none select-none shrink-0 w-14">
              {step.step}
            </span>

            {/* Vertical divider */}
            <div className="w-px self-stretch bg-brand-border/60 shrink-0" />

            {/* Text content */}
            <div className="flex flex-col gap-1 pt-0.5">
              <h3 className="text-sm sm:text-base font-bold text-primary font-display leading-snug">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
