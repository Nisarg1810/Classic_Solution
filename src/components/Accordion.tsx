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
    question: "Why should I inspect my home?",
    answer: "A professional home inspection helps identify hidden issues like water leakage, dampness, structural cracks, and faulty wiring before they become major safety hazards or result in expensive repair bills. It ensures your property remains safe, durable, and holds its market value.",
  },
  {
    question: "When should I schedule an inspection?",
    answer: "It is highly recommended to schedule an inspection in three key scenarios: 1) Before purchasing a new property (Pre-Purchase Assessment), 2) Prior to the monsoon season (Pre-Monsoon Health Check) to catch waterproofing gaps, and 3) Immediately if you notice wall moisture, paint peeling, or structural cracks.",
  },
  {
    question: "How long does a typical home inspection take?",
    answer: "A standard home inspection takes between 3 to 5 hours, depending on the size and layout of the property. Our inspectors thoroughly check the walls, ceiling, plumbing nodes, electrical panels, and balconies using advanced tools without causing any disruption.",
  },
  {
    question: "Do you provide detailed reports?",
    answer: "Yes, we deliver a comprehensive, digital Property Condition Report within 24 to 48 hours. The report includes high-resolution camera images, thermal imaging captures, moisture readings, and step-by-step recommended waterproofing and structural solutions.",
  },
  {
    question: "Can wall dampness affect health?",
    answer: "Yes, absolutely. High moisture levels in walls create the perfect breeding ground for toxic mold and fungus. Mold spores can trigger asthma attacks, skin allergies, respiratory infections, and other severe health issues for kids and elderly family members.",
  },
  {
    question: "Do you inspect individual apartments?",
    answer: "Yes, we inspect individual apartments, builder floors, large luxury villas, independent homes, and commercial properties. We calibrate our testing methods and checklists according to the structural setup of your unit.",
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
            {/* Header / Question Button */}
            <button
              onClick={() => toggleItem(idx)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-primary text-base sm:text-lg focus:outline-none"
            >
              <span className="pr-4">{faq.question}</span>
              <span className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {isOpen ? (
                  <Minus className="h-4 w-4 text-secondary" />
                ) : (
                  <Plus className="h-4 w-4 text-primary" />
                )}
              </span>
            </button>

            {/* Answer Content */}
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
