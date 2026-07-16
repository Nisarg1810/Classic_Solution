"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Zap, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowLeft, 
  AlertOctagon, 
  AlertTriangle, 
  Camera, 
  Lightbulb, 
  Flame, 
  FileText,
  Workflow
} from "lucide-react";
import PageHero from "@/components/PageHero";

const hazards = [
  "Electrocution",
  "Short circuit",
  "Blowing off lamps and electrical components",
  "Fire accidents",
  "Injury / death of person (shock, severe burns, heart attack, or electrocution)",
  "Property damage"
];

const warnings = [
  "Flickering or blinking lights.",
  "Electrical shocks – even a mild tingle.",
  "Sparks or burning odours.",
  "Frequent blown fuses.",
  "MCB (Miniature Circuit Breaker) that trips frequently or sparks during operating.",
  "Overheating – Wires getting heated quickly (though not visible usually), discolored switch plates or outlet covers.",
  "Damaged wire insulation (though not visible usually)."
];

const causes = [
  "Under rated wire Gauge",
  "Overheating wires and electrical components",
  "Unbalanced and over load distribution at phases",
  "Improper position and installation of switch / socket boards"
];

const typicalFaults = [
  {
    title: "Safety Issue",
    caption: "Safety Issue: Double phase power used in single phase switch board.",
    imgSrc: "/images/services/4/Electrical-Safety01 1.png",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Improper Connection",
    caption: "Naked wire used for switch to switch parallel connections, will increase current loss and decrease efficiency.",
    imgSrc: "/images/services/4/Electrical-Safety02 1.png",
    aspect: "aspect-[4/3]"
  },
  {
    title: "Proximity Hazard",
    caption: "Switch socket board close to sink, will get affected due to water splashing during sink use.",
    imgSrc: "/images/services/4/image 110.png",
    aspect: "aspect-[4/3]"
  }
];

const highRiskAreas = [
  "Meter room",
  "Distribution Box in your home / property",
  "High wattage electrical Appliances",
  "Overheating wires",
  "Socket outlets and lighting fittings"
];

const whenToSchedule = [
  "When buying a home / property",
  "If You Have Sudden or Reoccurring Problems",
  "Common Symptoms of Home Electrical Problems – Warning Signals show up as given above",
  "Before Major Home Upgrades / Home Renovations",
  "If You Live in an Older Home",
  "After DIY Electrical Work / Electric Repairs",
  "If You Didn't Get a Proper Inspection Before Buying",
  "Severe weather events / natural calamity damages",
  "When Your Homeowners Insurance Company Requires It"
];

const keyParameters = [
  "Electrical Safety (Our first priority during inspection).",
  "Thorough inspection of the electrical wiring system (Detailed Wiring connection & Wire Gauge).",
  "Inspection of each and every switch / socket boards (Operation and wiring).",
  "Position of installation of electrical fans, light points, switch & socket boards.",
  "Need Based DB / MCB charting (Value added service giving you the exact location of the load distributed from each MCB)",
  "We ensure a home, free of electrical shock & electrical accident, and better service life of electrical equipment along with electrical safety."
];

const scopeOfWork = [
  "General electrical inspection on the present condition of the electrical system comprising of Power / UPS socket, electrical switchboards, D.B accessories, lights, etc.",
  "Inspection of wirings (findings include faulty / loosely connected / old / under gauge wire which may result in electrical leakages and short circuits).",
  "Earthing System inspection.",
  "Three phase Load Distribution.",
  "Inspection of the three-phase meter / sub meter (For ensuring that there is no fault at the meter).",
  "Electrical Safety & Fire safety aspects.",
  "DB Charting (in case required)."
];

export default function ServicesElectrical() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20 text-brand-text">
      {/* 1. Header & Hero */}
      <PageHero
        badge="Safety Audit"
        title="Electrical Inspections of a"
        titleHighlight="Home / Property"
        subtitle="Put Home / Family Safety First when stringing up the lights"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Electrical Inspections" }]}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Navigation Actions */}
        <div className="flex gap-4 mb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
          >
            Book Electrical Scan
          </Link>
        </div>

        {/* Hero Banner Image */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-premium mb-10 border border-brand-border/20 max-h-[380px] flex items-center justify-center bg-white">
          <Image
            src="/images/services/4/thermography-for-electrical-panel 1.png"
            alt="Thermography Scan of an Electrical Panel"
            width={1240}
            height={485}
            className="w-full h-auto object-cover max-h-[380px]"
            priority
            unoptimized
          />
        </div>

        {/* 2. Introduction */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary leading-tight mb-4">
            Electricity is part of our lives but comes with its own hazards:
          </h2>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light mb-4">
            We use it from the moment we wake up and throughout the day and when we are asleep as well. Although we feel intolerable without electricity, the fact is that numerous accidents, mostly fire related, are caused due to electric hazards.
          </p>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light mb-4">
            We sometimes forget how powerful and dangerous electric faults can be, and so though not always but at maximum times we are the ones to be blamed for the electrocution or fire caused by electricity. The simple reason is negligence from our side be it while laying an electrical layout, while supervision of work or during usage e.g. wire connections, wire jointing or wire gauge.
          </p>
          <p className="text-sm sm:text-base text-primary font-semibold leading-relaxed">
            Hence, ensuring that the electrical system at your home or property is upto the mark and safe should be one of your prime concerns.
          </p>
        </section>

        {/* 3. Hazards */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-6 flex items-center gap-2">
            <AlertOctagon className="text-secondary h-6 w-6" /> Electrical damages / hazards
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-light">
            {hazards.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 bg-red-50/20 border border-red-100/50 p-3 rounded-xl">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Symptoms & Warning Signals */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-6">
            Common Symptoms of Home Electrical Problems – Warning Signals
          </h3>
          
          {/* Centered Burnt Socket Image */}
          <div className="relative w-full aspect-[16/10] max-w-lg mx-auto rounded-3xl overflow-hidden shadow-premium mb-6">
            <Image 
              src="/images/services/4/01-3 1.png" 
              alt="Common Warning Signal - Burnt Switch socket outlet" 
              fill 
              className="object-cover" 
              unoptimized 
            />
          </div>

          <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light mb-6">
            Majority of the times general accidents occur due to electrical issues from the symptoms that are in front of us but we generally overlook those things. Some key signs that you need an electrical inspection / repair include:
          </p>

          <ul className="flex flex-col gap-3">
            {warnings.map((warn, i) => (
              <li key={i} className="flex gap-3 bg-brand-light p-4 rounded-xl border border-brand-border/40 text-sm font-light">
                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xs">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{warn}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 5. Causes & Typical Faults Grid */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-6">
            Some Causes of Electrical Fault and Hazards:
          </h3>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-sm font-light">
            {causes.map((cause, i) => (
              <li key={i} className="flex items-start gap-2.5 bg-brand-light p-3 rounded-xl border border-brand-border/30">
                <Zap className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>{cause}</span>
              </li>
            ))}
          </ul>

          {/* 3-Column Image Grid showing Typical Faults */}
          <h4 className="text-lg font-bold font-display text-primary mb-6 text-center">Typical Electrical Issues Documented on Site</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {typicalFaults.map((fault, index) => (
              <div 
                key={index} 
                className="bg-white border border-brand-border/60 rounded-2xl overflow-hidden shadow-sm flex flex-col group"
              >
                <div className={`relative w-full ${fault.aspect} bg-brand-light overflow-hidden`}>
                  <Image 
                    src={fault.imgSrc} 
                    alt={fault.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-103" 
                    unoptimized 
                  />
                </div>
                <div className="p-4 bg-brand-light/30 border-t border-brand-border/40 flex-grow">
                  <p className="text-xs text-brand-text font-light leading-relaxed italic text-center">
                    {fault.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. High Risk Areas */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-6">
            High Risk Areas & Components are:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-light">
            {highRiskAreas.map((area, i) => (
              <li key={i} className="flex items-center gap-2.5 bg-yellow-50/20 border border-yellow-100/50 p-3 rounded-xl">
                <AlertTriangle className="h-4 w-4 text-yellow-600 shrink-0" />
                <span className="font-semibold text-primary">{area}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 7. When to schedule */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-4">
            When to schedule an Electrical Inspection?
          </h3>
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light italic mb-6 border-l-4 border-secondary/40 pl-4 py-1">
            &ldquo;If it ain&apos;t broke, don&apos;t fix it&rdquo; is good advice… sometimes. But when it comes to your home&apos;s electrical system, there are certain circumstances in which it makes sense to schedule a thorough electrical inspection:
          </p>
          <ul className="flex flex-col gap-3">
            {whenToSchedule.map((time, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm font-light">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 8. Key Parameters */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-6 flex items-center gap-2">
            <FileText className="text-secondary h-5 w-5" /> Key Parameters of Our Inspection:
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm font-light">
            {keyParameters.map((param, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>{param}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 8b. Scope of work */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-6 flex items-center gap-2">
            <Workflow className="text-secondary h-5 w-5" /> Scope of Electrical Inspection work
          </h3>
          <ul className="flex flex-col gap-3.5 text-sm font-light">
            {scopeOfWork.map((scope, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                <span>{scope}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 9. Thermal Imaging Technology */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-6">
            Detection of overheated wiring / electrical components through Thermal Imaging technology
          </h3>
          <ul className="flex flex-col gap-4 text-sm font-light mb-8">
            <li className="flex gap-2.5">
              <Flame className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span>Since in the present times, concealed wiring system is used, tracing an overheated wire is difficult that are concealed as well as tracing an overheated wire from a bunch of wires is exhausting but the detection of such wires is possible with Thermal Imaging Technology.</span>
            </li>
            <li className="flex gap-2.5">
              <Flame className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span>Electrical components and equipment generally get heated, but it is hard to trace visually that whether the heating is normal or the equipment is getting overheated. This can also be detected by using thermal imaging technology.</span>
            </li>
          </ul>

          {/* Thermal Hot Wiring Banner */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-brand-border/30 bg-white shadow-premium mb-8 max-h-[360px] flex items-center justify-center">
            <Image
              src="/images/services/4/thermal-hot-wiring.png"
              alt="Thermal image of hot wiring showing high temperatures"
              width={800}
              height={600}
              className="w-full h-auto object-cover max-h-[360px]"
              unoptimized
            />
          </div>

          {/* 2-Column Image Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case 1 */}
            <div className="flex flex-col gap-3 bg-white border border-brand-border/30 rounded-3xl overflow-hidden p-4 sm:p-5 shadow-premium group">
              <div className="relative w-full aspect-[4/3] bg-brand-light rounded-2xl overflow-hidden">
                <Image 
                  src="/images/services/4/electrical-01 1.png" 
                  alt="Visual Image & Infrared Image of overheating M.C.B in Electrical Panel" 
                  fill 
                  className="object-cover" 
                  unoptimized 
                />
              </div>
              <p className="text-xs text-brand-text font-light leading-relaxed text-center italic">
                Visual Image & Infrared Image of overheating M.C.B in Electrical Panel
              </p>
            </div>

            {/* Case 2 */}
            <div className="flex flex-col gap-3 bg-white border border-brand-border/30 rounded-3xl overflow-hidden p-4 sm:p-5 shadow-premium group">
              <div className="relative w-full aspect-[4/3] bg-brand-light rounded-2xl overflow-hidden">
                <Image 
                  src="/images/services/4/electrical-02 1.png" 
                  alt="Visual Image & Infrared Image of overheating wire in Distribution Box" 
                  fill 
                  className="object-cover" 
                  unoptimized 
                />
              </div>
              <p className="text-xs text-brand-text font-light leading-relaxed text-center italic">
                Visual Image & Infrared Image of overheating wire in Distribution Box
              </p>
            </div>
          </div>
        </section>

        {/* 10. Experience */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-4">
            Our experience and expertise – Classic Solution Home Inspections
          </h3>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light mb-4">
            We being a professional home inspection company comprise of experienced technical personnel and we have inspected more than 800 properties at apartments, standalone units, bungalows, Office space and even heritage type buildings where we have been able to detect and provide remedy for numerous electrical problems / issues which have benefitted our customers.
          </p>
          <p className="text-sm sm:text-base text-primary font-semibold leading-relaxed">
            Infact, most of them have rectified there problems / issues as per our advice and are happy and satisfied that they got their home inspection done at the right time.
          </p>
        </section>

        {/* 11. Motto */}
        <section className="mb-8 bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 shadow-sm text-left">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mb-2">
            We inspect your home as our own. Your Safety is our first priority and a proper home inspection is our commitment.
          </h3>
          <h4 className="text-lg font-bold font-display text-secondary mb-6">Our Motto – Customer Satisfaction</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-primary">
            <li className="flex items-center gap-2.5 bg-brand-light p-3 rounded-xl border border-brand-border/30">
              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
              <span>Least Damage</span>
            </li>
            <li className="flex items-center gap-2.5 bg-brand-light p-3 rounded-xl border border-brand-border/30">
              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
              <span>Low Cost Repair</span>
            </li>
            <li className="flex items-center gap-2.5 bg-brand-light p-3 rounded-xl border border-brand-border/30">
              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
              <span>Long term solution</span>
            </li>
            <li className="flex items-center gap-2.5 bg-brand-light p-3 rounded-xl border border-brand-border/30">
              <CheckCircle2 className="h-4 w-4 text-secondary shrink-0" />
              <span>Resulting in Long & Healthy Life of your Properties</span>
            </li>
          </ul>
        </section>

        {/* Call to action panel */}
        <div className="bg-primary rounded-3xl p-8 sm:p-10 text-center text-white relative overflow-hidden mt-12 shadow-premium">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/15 rounded-full filter blur-2xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="max-w-xl mx-auto flex flex-col gap-4 relative z-10">
            <h3 className="text-xl sm:text-2xl font-extrabold font-display leading-tight">
              Schedule Your Certified Electrical Audit
            </h3>
            <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
              Contact Classic Solution Home Inspections today. Protect your assets and ensure the absolute safety of your property with thermal imaging diagnostics.
            </p>
            <div className="mt-3">
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg transition-all text-xs uppercase tracking-wider"
              >
                Request Free Call
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
