"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Thermal Imaging Inspection?",
    answer: "Thermal imaging inspection uses infrared cameras to detect heat variations invisible to the naked eye. It identifies electrical hotspots, overloaded circuits, moisture intrusion, energy loss, and equipment faults — all without any invasive procedures. It is one of the most accurate and non-destructive diagnostic tools available for preventive maintenance.",
  },
  {
    question: "How often should preventive maintenance inspections be done?",
    answer: "For most commercial and industrial facilities, we recommend a thermal inspection at least once a year. High-risk environments such as manufacturing plants, hospitals, and data centres benefit from inspections every 6 months. After any major electrical upgrade or equipment installation, an immediate post-installation inspection is also advisable.",
  },
  {
    question: "Who needs Thermal Inspection?",
    answer: "Any facility that relies on electrical systems, mechanical equipment, or building infrastructure can benefit from thermal inspection. This includes hotels, hospitals, commercial buildings, residential societies, industrial plants, manufacturing units, warehouses, offices, solar power plants, shopping malls, and educational institutions.",
  },
  {
    question: "What industries benefit most from Thermal Imaging?",
    answer: "Industries with continuous operations and high electrical loads benefit the most — manufacturing plants, data centres, hospitals, hotels, and industrial facilities. However, any building or facility with switchboards, electrical panels, HVAC systems, or solar installations will gain significant value from a thermal inspection and preventive maintenance report.",
  },
  {
    question: "How long does a thermal inspection take?",
    answer: "Inspection duration depends on the size and complexity of the facility. A standard commercial building inspection typically takes 2 to 4 hours. Large industrial plants or campuses may require a full day or multiple visits. Our team works efficiently to minimise disruption to your operations.",
  },
  {
    question: "What does the Digital Inspection Report include?",
    answer: "Our professional PDF report includes: high-resolution thermal images, precise temperature readings and comparisons against safe thresholds, hotspot identification with severity ratings, moisture detection maps, energy loss analysis, a risk priority matrix, step-by-step maintenance recommendations, and a tailored preventive maintenance plan for your facility.",
  },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full max-w-3xl flex flex-col gap-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
              isOpen
                ? "border-secondary bg-brand-light shadow-md"
                : "border-brand-border/60 bg-white hover:border-primary/50"
            }`}
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-primary text-base sm:text-lg focus:outline-none"
            >
              <span className="pr-4">{faq.question}</span>
              <span className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/5 text-primary transition-colors duration-300">
                {isOpen ? (
                  <Minus className="h-4 w-4 text-secondary" />
                ) : (
                  <Plus className="h-4 w-4 text-primary" />
                )}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 text-sm sm:text-base text-brand-muted border-t border-brand-border/20 pt-4 leading-relaxed bg-white">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
