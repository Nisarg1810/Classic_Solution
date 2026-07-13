"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const areasInspected = [
  "Bedrooms",
  "Bathrooms",
  "Living Area",
  "Dining Area",
  "Alleys",
  "Kitchens",
  "Balconies",
  "Lofts",
  "Servants' Quarters",
  "Lobby Area",
  "Attached Structure",
  "Exterior (Stairs | Steps | Ramps | Walkways | Railings | Hand rails | Driveways, etc.)"
];

const systemsInspected = [
  "Walls",
  "Ceilings",
  "Floors",
  "Doors",
  "Windows",
  "Plumbing",
  "Electrical",
  "Stair steps",
  "Stair railing",
  "Cabinets and countertops",
  "Applicable Installed Appliances",
  "Water Supply",
  "Exhaust Systems",
  "Air Conditioning Systems, etc."
];

const reportingParameters = [
  "Material types",
  "Installation & Finishing",
  "Operations & Functionality",
  "General safety"
];

const propertiesInspected = {
  types: ["New", "Existing", "Old", "Heritage"],
  locations: [
    "Homes",
    "Office",
    "Retails",
    "Schools",
    "Warehouse",
    "Shopping Mall",
    "Factories",
    "Residential projects",
    "Bank",
    "Bus stand",
    "Building",
    "Bungalow etc."
  ]
};

const specialtyTools = [
  { name: "Infrared Thermal Camera", desc: "Detects hidden dampness, water leaks, and electrical panel hot spots without damage." },
  { name: "Digital Moisture Meter", desc: "Measures sub-surface moisture levels in wood, plaster, and concrete structures." },
  { name: "Video Borescope", desc: "Inspects inside wall cavities, pipelines, and other hard-to-reach void areas." },
  { name: "Laser Distance Measure", desc: "Provides high-precision dimensional measurements and area calculations." },
  { name: "Combustible Gas Detector", desc: "Ensures safety by scanning for gas leaks in utility pipes and joints." },
  { name: "Digital Clamp Meter", desc: "Checks electrical current, circuit overloading, and voltage stability." },
  { name: "Wall Scanner", desc: "Locates hidden framing studs, water pipes, and live electrical cables behind drywall." },
  { name: "Anemometer & Air Monitor", desc: "Measures air velocity, temperature, and HVAC system ventilation efficiency." },
  { name: "Coating Thickness Gauge", desc: "Checks the thickness and consistency of protective coatings and paint finishes." }
];

export default function ServicesHomeInspection() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      {/* Page Hero */}
      <PageHero
        badge="Service Details"
        title="Complete Home &"
        titleHighlight="Property Inspection"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Home Inspection" }]}
        subtitle="A thorough point-by-point visual and non-destructive quality checkup of your property's structure, systems, and finishes."
      />

      {/* Main Content Area */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Section 1 Title styled as in the PDF */}
        <div className="mb-6 text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-primary font-display flex items-center gap-2">
            <span className="text-secondary font-extrabold">1.</span> Complete Home/Property Inspection:
          </h2>
        </div>

        {/* Banner Card: Gift a Safe & Healthy Home to your Family */}
        <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-premium p-6 sm:p-8 lg:p-12 mb-10 flex flex-col md:flex-row items-center gap-8 border border-white/10">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left / Top - Hand holding house image */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10 shrink-0">
            <Image
              src="/images/hand_house_banner.png"
              alt="Hand holding a house with clouds"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </div>

          {/* Right / Bottom - Text Slogan */}
          <div className="flex flex-col text-left text-white max-w-md md:pl-4">
            <span className="text-lg sm:text-xl font-medium tracking-wide text-blue-200">
              Gift a
            </span>
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-[#c6f432] my-2 drop-shadow-sm">
              Safe & Healthy
            </span>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-wide text-white leading-tight">
              Home to your <span className="text-yellow-300">Family</span>
            </span>
            <p className="mt-4 text-xs sm:text-sm text-blue-100/70 font-light leading-relaxed">
              Ensure peace of mind with a professional health checkup of your property using state-of-the-art non-destructive diagnostic tools.
            </p>
          </div>
        </div>

        {/* Slogan Subheading in Red */}
        <div className="text-left mb-12">
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-red-600 font-display uppercase leading-tight">
            Know the Health of your Home
          </h3>
          <h4 className="text-xl sm:text-2xl font-bold text-red-500/90 font-display tracking-wide mt-1">
            Get it Inspected...
          </h4>
        </div>

        {/* Narrative Section: What is Home Inspection? */}
        <section className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
            What is Home Inspection?
          </h3>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light text-justify">
            Home Inspection is a non-invasive, visual examination of all accessible areas (systems & components) of a property using modern technology and specialized tools uses normal operating controls, is designed to describe the condition of the systems and components, identifies and reports issues within specific systems and components, reports issues (with relevant pictures) that are both observed and deemed critical by the inspector, generates software driven home inspection reports.
          </p>
        </section>

        {/* Two Columns for Scope: Areas and Systems */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Areas Inspected */}
          <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
                Areas Inspected:
              </h3>
              <div className="flex flex-wrap gap-2">
                {areasInspected.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs sm:text-sm text-brand-text bg-brand-light border border-brand-border/40 px-3 py-1.5 rounded-full hover:border-secondary hover:text-secondary transition-all"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Systems & Components */}
          <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
                Systems & Components Inspected:
              </h3>
              <div className="flex flex-wrap gap-2">
                {systemsInspected.map((system, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center text-xs sm:text-sm text-brand-text bg-brand-light border border-brand-border/40 px-3 py-1.5 rounded-full hover:border-secondary hover:text-secondary transition-all"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3D House Layout Diagram */}
        <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm mb-12 text-center">
          <h3 className="text-base sm:text-lg font-bold text-brand-muted font-display mb-4 uppercase tracking-wider">
            Property Areas Covered in Detail
          </h3>
          <div className="relative aspect-[16/10] w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-brand-border/50 shadow-md">
            <Image
              src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Home-Inspection-Coverage-1024x485.jpg"
              alt="Home Inspection Coverage Cutaway Diagram"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Specialty Tools & Technologies Section */}
        <section className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-primary font-display mb-6 border-b border-brand-border pb-3 text-left">
            Speciality Home Inspection Tools & Technologies
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Tools Grid Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-brand-light border border-brand-border/30 rounded-full p-4 overflow-hidden shadow-inner flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-border/60">
                  <Image
                    src="/images/speciality_tools_grid.png"
                    alt="Specialty Tools Grid"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* List of Specialty Tools with Details */}
            <div className="flex flex-col gap-4 text-left">
              <p className="text-xs sm:text-sm text-brand-muted mb-2 leading-relaxed">
                Our technicians deploy calibrated sensors and advanced thermal diagnostic equipments to detect anomalies unseen to the naked eye.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {specialtyTools.map((tool, idx) => (
                  <div key={idx} className="p-3 bg-brand-light border border-brand-border/20 rounded-xl hover:shadow-sm transition-all">
                    <h4 className="text-xs sm:text-sm font-bold text-primary flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {tool.name}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-brand-muted mt-1 leading-relaxed font-light">
                      {tool.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Parameters, Properties, and the Issues Pyramid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column: Lists */}
          <div className="flex flex-col gap-8">
            {/* Condition Details parameters */}
            <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm text-left">
              <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
                Reporting Parameters - Condition Details:
              </h3>
              <ul className="space-y-3">
                {reportingParameters.map((param, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-brand-text font-light">
                    <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                    <span>{param}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Properties scope */}
            <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm text-left">
              <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-4 border-b border-brand-border pb-3">
                All Properties Inspected
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-xs uppercase font-bold text-brand-muted tracking-wider mb-2">Condition Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {propertiesInspected.types.map((type, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20 rounded-md">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase font-bold text-brand-muted tracking-wider mb-2">Commercial & Residential Spaces</h4>
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                    {propertiesInspected.locations.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom SVG Issues Pyramid */}
          <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-center items-center">
            <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-6 border-b border-brand-border pb-3 w-full text-center">
              Our Core Methodology
            </h3>

            {/* Premium SVG Pyramid */}
            <div className="w-full max-w-sm">
              <svg viewBox="0 0 500 370" className="w-full drop-shadow-xl overflow-visible">
                {/* Layer 1: Red Top Triangle */}
                <g className="hover:scale-[1.02] origin-[250px_90px] transition-transform duration-300 cursor-pointer group">
                  <polygon
                    points="250,20 206,90 294,90"
                    fill="#ef4444"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text x="250" y="55" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle" className="font-display">3D</text>
                  <text x="250" y="75" fill="#ffffff" fontSize="11" fontWeight="extrabold" textAnchor="middle" letterSpacing="1">OF ISSUES</text>
                  <title>3D of Issues: Visualizing depth, severity, and urgency of defects.</title>
                </g>

                {/* Layer 2: Orange Trapezoid */}
                <g className="hover:scale-[1.02] origin-[250px_135px] transition-transform duration-300 cursor-pointer group">
                  <polygon
                    points="200,100 300,100 344,170 156,170"
                    fill="#f97316"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text x="250" y="140" fill="#ffffff" fontSize="13" fontWeight="black" textAnchor="middle" letterSpacing="0.5" className="font-display">DETECT THE ISSUES</text>
                  <title>Detect: Scientific tools search and locate the root problems.</title>
                </g>

                {/* Layer 3: Blue Trapezoid */}
                <g className="hover:scale-[1.02] origin-[250px_215px] transition-transform duration-300 cursor-pointer group">
                  <polygon
                    points="150,180 350,180 394,250 106,250"
                    fill="#0ea5e9"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text x="250" y="220" fill="#ffffff" fontSize="13" fontWeight="black" textAnchor="middle" letterSpacing="0.5" className="font-display">DESCRIBE THE ISSUES</text>
                  <title>Describe: Clear reporting with photos, metrics, and risk levels.</title>
                </g>

                {/* Layer 4: Green Trapezoid */}
                <g className="hover:scale-[1.02] origin-[250px_295px] transition-transform duration-300 cursor-pointer group">
                  <polygon
                    points="100,260 400,260 444,330 56,330"
                    fill="#84cc16"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                  <text x="250" y="300" fill="#ffffff" fontSize="13" fontWeight="black" textAnchor="middle" letterSpacing="0.5" className="font-display">DIRECT THE ISSUES</text>
                  <title>Direct: Clear recommendations and specifications for corrective actions.</title>
                </g>
              </svg>
            </div>
            
            <p className="text-[11px] sm:text-xs text-brand-muted mt-6 text-center font-light leading-relaxed max-w-xs">
              Hover over the stacked layers of our pyramid methodology to view their underlying principles of inspection audits.
            </p>
          </div>

        </div>

        {/* Back and Action Buttons */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-t border-brand-border/40 pt-8 mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all text-xs uppercase tracking-widest"
          >
            Book An Inspection
          </Link>
        </div>

      </div>
    </div>
  );
}
