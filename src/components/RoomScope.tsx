"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Bath, ChefHat, Sofa, ShieldAlert, Award, Wrench, Settings } from "lucide-react";

interface AreaChecklist {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  items: string[];
  description: string;
}

const areasData: AreaChecklist[] = [
  {
    id: "bedroom",
    name: "Bedrooms",
    icon: Bed,
    description: "Detailed checks for master, guest, and kids bedrooms to ensure comfort, structural soundness, and proper electrical routing.",
    items: [
      "Wall inspection (structural soundness, cracks, damp spots)",
      "Ceiling plaster, alignment, and false-ceiling sturdiness",
      "Flooring levels, hollow tiles, grout gaps, and baseboards",
      "Doors alignment, locks, hinges, and clearance heights",
      "Windows frames, sliding tracks, sealing, and locking hardware",
      "Balcony railings, floor drainage slope, and weather barriers",
      "Electrical socket connections, switches, AC routing, and safety",
      "Moisture level mapping in internal/external partition walls"
    ]
  },
  {
    id: "bathroom",
    name: "Bathrooms",
    icon: Bath,
    description: "In-depth diagnostic check of wet areas, focusing heavily on waterproofing, hidden moisture, plumbing fixtures, and electrical safety.",
    items: [
      "Wall tiling joints, grout condition, and alignment checks",
      "Ceiling panels and protection from moisture condensation",
      "Floor tiling slope, water flow efficiency, and non-slip finishes",
      "Doors moisture-resistance, frame sealing, and hinges",
      "Window ventilation, exhausts, and exterior louvers",
      "Cabinets alignment, drawers, moisture-proofing, and hinges",
      "Countertops cracks, joint sealant, and support brackets",
      "Electrical socket safety near wet zones, GFCIs, and geyser wiring",
      "Mirrors backing protection and secure mounting checks",
      "Bath Tub sealants, drainage, stability, and faucet fittings",
      "Exhaust Fan suction capacity and noise level check",
      "Showers, Faucets, and Sinks operation and leak checks",
      "Toilets flush mechanism, sealing, floor joints, and shut-off valves",
      "Plumbing lines pressure check, traps, and concealed pipe pathways",
      "Moisture index mapping around wet zones to detect seepage early"
    ]
  },
  {
    id: "kitchen",
    name: "Kitchen",
    icon: ChefHat,
    description: "The core culinary and mechanical hub of the house is inspected for ventilation, water management, cabinet integrity, and safety hazards.",
    items: [
      "Material Types verification (marble, granite, wood, MDF grade)",
      "Installation & Finishing of modular partitions, cabinets, and chimneys",
      "Operations & Functionality of cabinet drawers, soft-close hinges, and slides",
      "General Safety checks (fire safety gaps, gas line routing, socket distance)",
      "Sinks and Faucets pressure flow, drain traps, and under-sink leaks",
      "Countertops joint sealing, leveling, and back-splash finishing",
      "Electrical sockets for heavy appliances (refrigerator, oven, chimney, RO)",
      "Ventilation flow, exhaust efficiency, and chimney duct paths",
      "Gas line connection safety and shut-off accessibility check"
    ]
  },
  {
    id: "living",
    name: "Living Room",
    icon: Sofa,
    description: "Inspects main family gathering zones, looking at space flow, partition walls, main entrance doors, and central electrical distribution.",
    items: [
      "Main Entry door alignment, lock robustness, and doorstop checks",
      "Walls and Ceilings drywall joints, paint finish, and cracks check",
      "Flooring tiles, marble/granite leveling, and hollow spot sounds",
      "Electrical switchboards, socket load capacity, and TV/Internet conduit paths",
      "Windows structural seals, window sills, and weatherproofing",
      "Balcony doors, sliding track smoothness, lock system, and threshold sealing",
      "Moisture checking on walls adjacent to ducts, exterior facades, or toilets",
      "General lighting fixtures, switch panels, and distribution box accessibility"
    ]
  }
];

const parameters = [
  {
    title: "Material Types",
    desc: "Verification of material grade, structural strength, wood, laminate, and glass thickness to ensure it matches project specs.",
    icon: Award
  },
  {
    title: "Installation & Finishing",
    desc: "Rigorous alignment checks, leveling of surfaces, tile hollow sounds, joints sealant quality, paint consistency, and hardware fit.",
    icon: Wrench
  },
  {
    title: "Operations & Functionality",
    desc: "Testing of plumbing pressure, drainage traps, cabinet slides, hinges, window tracks, electrical switches, and appliance sockets.",
    icon: Settings
  },
  {
    title: "General Safety",
    desc: "Verifying earthing safety, socket moisture protection, gas connection pathways, fire-resistant materials, and structural load balance.",
    icon: ShieldAlert
  }
];

export default function RoomScope() {
  const [activeTab, setActiveTab] = useState("bedroom");

  const activeArea = areasData.find((a) => a.id === activeTab) || areasData[0];
  const ActiveIcon = activeArea.icon;

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-6 text-left">
      {/* Parameters Header Card Bar */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-0.5 bg-secondary" />
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">
            Our Parameters
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary leading-tight mb-8">
          The 4 Core Inspection Parameters
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {parameters.map((param, index) => {
            const ParamIcon = param.icon;
            return (
              <div
                key={index}
                className="bg-white border border-brand-border/40 p-5 rounded-2xl shadow-sm hover:shadow-premium transition-premium group"
              >
                <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <ParamIcon className="h-5 w-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-primary font-display mb-2">
                  {param.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  {param.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="border-brand-border/40 my-10" />

      {/* Room-by-Room Interactive Checklists */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-0.5 bg-secondary" />
          <span className="text-secondary font-bold tracking-widest uppercase text-xs">
            What is Inspected
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary leading-tight mb-3">
          Detailed Inspection Checklists
        </h2>
        <p className="text-brand-muted text-sm max-w-2xl mb-8 font-light leading-relaxed">
          We inspect every accessible area, wall, and component. Toggle the tabs below to view our comprehensive checklist details for each room:
        </p>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 mb-8 border-b border-brand-border/30 pb-4">
          {areasData.map((area) => {
            const TabIcon = area.icon;
            const isActive = area.id === activeTab;
            return (
              <button
                key={area.id}
                onClick={() => setActiveTab(area.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 ${
                  isActive
                    ? "bg-primary text-white shadow-md"
                    : "bg-white text-brand-muted border border-brand-border/60 hover:border-primary hover:text-primary"
                }`}
              >
                <TabIcon className="h-4 w-4" />
                <span>{area.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-brand-light border border-brand-border/30 rounded-3xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeArea.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Description & Accent */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 bg-secondary/10 border border-secondary/20 px-3.5 py-1.5 rounded-full text-secondary text-xs font-semibold w-fit">
                  <ActiveIcon className="h-3.5 w-3.5" />
                  <span>Room Inspection Scope</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-primary">
                  {activeArea.name} Audit
                </h3>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                  {activeArea.description}
                </p>
                <div className="h-px w-full bg-brand-border/40 my-2" />
                <p className="text-[11px] font-semibold text-secondary uppercase tracking-widest">
                  Total Parameters: {activeArea.items.length} Points
                </p>
              </div>

              {/* Right Column: List of items */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {activeArea.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-brand-border/40 shadow-sm"
                    >
                      <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-brand-text leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
