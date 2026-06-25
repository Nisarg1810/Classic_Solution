"use client";

import { motion } from "framer-motion";
import { Droplet, Layers, AlertTriangle, Bug, ShieldX, Activity, ArrowRight, ArrowDown } from "lucide-react";

interface TimelineStep {
  step: number;
  title: string;
  desc: string;
  icon: React.ComponentType<any>;
  color: string;
}

const dampnessSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Water Enters",
    desc: "Rainwater or plumbing leaks penetrate concrete cracks and gaps.",
    icon: Droplet,
    color: "from-blue-500 to-blue-600",
  },
  {
    step: 2,
    title: "Moisture Spreads",
    desc: "Capillary action pulls water upwards, dispersing it through internal walls.",
    icon: Layers,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    step: 3,
    title: "Paint Starts Peeling",
    desc: "Efflorescence (salt buildup) pushes paint off, causing bubbles and powder.",
    icon: AlertTriangle,
    color: "from-amber-500 to-amber-600",
  },
  {
    step: 4,
    title: "Mold & Fungus Grow",
    desc: "Damp conditions spawn toxic black mold and fungal colonies in 24-48 hours.",
    icon: Bug,
    color: "from-red-400 to-red-500",
  },
  {
    step: 5,
    title: "Structure Weakens",
    desc: "Internal reinforcement rebar rusts, mortar crumbles, and plaster degrades.",
    icon: ShieldX,
    color: "from-red-600 to-red-700",
  },
  {
    step: 6,
    title: "Health Risks Spike",
    desc: "Mold spores trigger severe asthma, respiratory issues, and allergies.",
    icon: Activity,
    color: "from-red-800 to-red-950",
  },
];

export default function DampnessTimeline() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Critical Warning</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary mt-2">How Dampness Spreads & Destroys</h2>
        <p className="text-brand-muted mt-3 text-sm sm:text-base">
          Understanding the progression of water damage helps you intercept the issue before it causes permanent structural damage or health hazards.
        </p>
      </div>

      {/* Timeline flow */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">
        {dampnessSteps.map((stepItem, idx) => {
          const IconComponent = stepItem.icon;
          return (
            <div key={stepItem.step} className="flex flex-col items-center text-center relative group">
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full flex flex-col items-center bg-white border border-brand-border/40 p-6 rounded-3xl shadow-premium relative z-10 transition-premium group-hover:-translate-y-2 group-hover:border-secondary"
              >
                {/* Step number badge */}
                <span className="absolute top-4 right-4 bg-brand-light text-primary font-bold text-xs h-6 w-6 rounded-full flex items-center justify-center border border-brand-border/30">
                  {stepItem.step}
                </span>

                {/* Animated Icon Container */}
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${stepItem.color} text-white flex items-center justify-center shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-bold text-primary font-display mb-2">{stepItem.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{stepItem.desc}</p>
              </motion.div>

              {/* Connecting Arrows for Desktop (Only render between cards) */}
              {idx < 5 && (
                <div className="hidden md:flex absolute top-1/2 left-[calc(100%-12px)] z-20 items-center justify-center text-secondary -translate-y-12">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="h-6 w-6" />
                  </motion.div>
                </div>
              )}

              {/* Connecting Arrows for Mobile (Only render between cards) */}
              {idx < 5 && (
                <div className="flex md:hidden my-3 text-secondary z-20">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowDown className="h-5 w-5" />
                  </motion.div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
