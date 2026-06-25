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
  const commonSymptoms = [
    "Visual water leaks and active runoffs",
    "Popping or peeling of wall paint",
    "Peeling or bubbling of wallpaper",
    "Damaged electronic appliances",
    "Termite presence in damp structures",
    "Woodwork rot and deterioration",
    "Dark patches on walls or ceilings",
    "Musty odor and damp clothing smell",
    "Visible black mold & mildew growth",
    "Rusting of steel grills & fixtures",
    "Collapsed false ceiling panels",
    "Allergenic infections & skin irritation"
  ];

  const potentialIssues = [
    {
      area: "External Surfaces",
      items: [
        "Major architectural cracking & plaster popping",
        "Deterioration of concrete & internal steel rebar, reducing building lifespan"
      ]
    },
    {
      area: "Inside Your Home",
      items: [
        "Termite infestation rotting furniture and woodwork",
        "Efflorescence (white salt deposits) on walls and stone tiles",
        "Bleaching, flaking, and discoloration of premium wall paint",
        "Molds spreading on carpets, furniture, and storage units"
      ]
    },
    {
      area: "Mechanical & Electronic Issues",
      items: [
        "HVAC system rust, toilet tank condensation, and valve failure",
        "Corrosion of electrical contacts, causing insulation failures & short circuits"
      ]
    }
  ];

  const healthHazards = [
    "Upper respiratory (nasal & throat) symptoms in children",
    "Persistent coughing, wheezing, and skin diseases",
    "Severe asthma triggers in sensitized individuals",
    "Dyspnea (acute shortness of breath)"
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6 text-left">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Critical Warning</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary mt-2">How Dampness Spreads &amp; Destroys</h2>
        <p className="text-brand-muted mt-3 text-sm sm:text-base leading-relaxed">
          Understanding the progression of water damage helps you intercept the issue before it causes permanent structural damage or health hazards.
        </p>
      </div>

      {/* Timeline flow */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative mb-16">
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
                className="w-full flex flex-col items-center bg-white border border-[#f1d6d6] p-6 rounded-3xl shadow-premium relative z-10 transition-premium group-hover:-translate-y-2 group-hover:border-secondary"
              >
                {/* Step number badge */}
                <span className="absolute top-4 right-4 bg-[#fdf4f4] text-secondary font-bold text-xs h-6 w-6 rounded-full flex items-center justify-center border border-[#f1d6d6]">
                  {stepItem.step}
                </span>

                {/* Animated Icon Container */}
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${stepItem.color} text-white flex items-center justify-center shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-bold text-primary font-display mb-2">{stepItem.title}</h3>
                <p className="text-xs text-[#7a6a6a] leading-relaxed">{stepItem.desc}</p>
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

      <hr className="border-[#f1d6d6] my-10" />

      {/* Symptoms & Risks Grid — top two cards side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Symptoms Section */}
        <div className="bg-white border border-[#f1d6d6] p-6 sm:p-8 rounded-3xl h-full">
          <h3 className="text-xl font-bold font-display text-primary mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-secondary" /> Common Symptoms
          </h3>
          <p className="text-xs text-[#7a6a6a] leading-relaxed mb-6 font-light">
            If you notice any of these signs in your home, moisture is already active behind the plaster.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {commonSymptoms.map((sym, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="h-4 w-4 rounded-full bg-secondary/15 text-secondary flex items-center justify-center text-[8px] font-bold mt-0.5 shrink-0">
                  ✓
                </div>
                <span className="text-xs text-brand-text leading-tight">{sym}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Potential Issues card */}
        <div className="bg-white border border-[#f1d6d6] p-6 sm:p-8 rounded-3xl h-full">
          <h3 className="text-xl font-bold font-display text-primary mb-4 flex items-center gap-2">
            <ShieldX className="h-5 w-5 text-secondary" /> Potential Damage Issues
          </h3>
          <div className="space-y-4">
            {potentialIssues.map((issueGroup, groupIdx) => (
              <div key={groupIdx}>
                <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">
                  {issueGroup.area}
                </h4>
                <ul className="space-y-2">
                  {issueGroup.items.map((item, idx) => (
                    <li key={idx} className="text-xs text-[#7a6a6a] flex items-start gap-2 leading-relaxed">
                      <span className="text-secondary font-extrabold text-[10px]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Hazards — full width below */}
      <div className="mt-8 bg-gradient-to-r from-red-950 via-primary-dark to-primary text-white p-6 sm:p-10 rounded-3xl shadow-lg border border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-3 flex items-center gap-2">
              <Activity className="h-6 w-6 text-secondary" /> Health Hazards — Excess Moisture
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
              Too much moisture negatively affects human health. When mold grows, airborne spores can travel through air ducts, posing severe respiratory hazards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {healthHazards.map((haz, index) => (
              <div key={index} className="flex items-start gap-3 bg-white/10 border border-white/10 p-3.5 rounded-2xl">
                <div className="h-5 w-5 rounded-full bg-secondary text-white flex items-center justify-center text-[9px] font-bold shrink-0 shadow mt-0.5">
                  ✓
                </div>
                <span className="text-xs text-white/90 leading-snug font-medium">{haz}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
