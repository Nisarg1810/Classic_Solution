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
    title: "Schedule Inspection",
    desc: "Book online or by phone — we align the visit to your schedule and facility requirements.",
  },
  {
    step: "02",
    title: "Site Visit",
    desc: "Our certified engineers arrive on-site with professional thermal imaging and diagnostic equipment.",
  },
  {
    step: "03",
    title: "Thermal Imaging Scan",
    desc: "Comprehensive infrared scanning of electrical systems, equipment, building envelope, and critical areas.",
  },
  {
    step: "04",
    title: "Data Analysis",
    desc: "Captured thermal data is analyzed to identify hotspots, moisture zones, and energy loss patterns.",
  },
  {
    step: "05",
    title: "Digital Report Generation",
    desc: "A structured PDF report is created with thermal images, temperature readings, and annotated findings.",
  },
  {
    step: "06",
    title: "Risk Assessment",
    desc: "All identified issues are rated by severity using a risk priority matrix — critical to low risk.",
  },
  {
    step: "07",
    title: "Practical Recommendations",
    desc: "Clear, actionable corrective measures are provided for each identified issue with priority guidance.",
  },
  {
    step: "08",
    title: "Preventive Maintenance Plan",
    desc: "A tailored long-term maintenance schedule is delivered to keep your facility safe and efficient.",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-6">
      <div className="mb-10 max-w-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-0.5 bg-secondary" />
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">
            Our Methodology
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-primary leading-tight">
          A transparent, step-by-step<br className="hidden sm:block" /> inspection process
        </h2>
        <p className="text-brand-muted mt-4 text-sm sm:text-base leading-relaxed">
          From booking to preventive maintenance plan — a scientific, thorough diagnostic of your facility.
        </p>
      </div>

      <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {processSteps.map((step, idx) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: idx * 0.07 }}
            className="flex-shrink-0 w-[75vw] sm:w-auto snap-center flex items-start gap-4"
          >
            <span className="text-4xl sm:text-5xl font-black font-display text-primary leading-none select-none shrink-0 w-14">
              {step.step}
            </span>
            <div className="w-px self-stretch bg-brand-border/60 shrink-0" />
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
