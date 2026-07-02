"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets, Search, Zap, Thermometer,
  ArrowRight, PhoneCall, Shield,
  Award, CheckSquare, Eye, FileText,
  Video, Play, ExternalLink, HelpCircle
} from "lucide-react";

import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";

const stats = [
  { value: "8,000+", label: "Inspections Completed" },
  { value: "10+ Cities", label: "PAN India Presence" },
  { value: "InterNACHI", label: "USA Affiliation" },
  { value: "100%", label: "Non-Invasive Diagnostics" },
];

const pillars = [
  {
    title: "Protect Your Investment",
    desc: "A home is the most expensive purchase most people make. Our inspection reveals the true health of the property, helping you buy with absolute confidence.",
    link: "/about#macj-india",
    bg: "from-blue-50 to-indigo-50 border-blue-100"
  },
  {
    title: "Professional Inspections",
    desc: "We perform complete visual checkups of all structural, electrical, and plumbing elements using advanced thermal cameras, damp meters, and leakage trace tools.",
    link: "/services#home-inspection",
    bg: "from-red-50 to-orange-50 border-red-100"
  },
  {
    title: "Thriving Global Expertise",
    desc: "Formed in collaboration with A Buyer's Choice USA, MACJ brings world-class American standards and certified methodologies to India's real estate sector.",
    link: "/about#abchi-usa",
    bg: "from-slate-50 to-blue-50 border-slate-100"
  }
];

const alliances = [
  {
    name: "Magicbricks Alliance",
    desc: "MACJ has partnered with Magicbricks (India's leading property portal) to offer exclusive, trusted home inspection services to premium buyers and renters.",
    logo: "https://macj-abuyerschoice.com/wp-content/uploads/2021/03/magicbricks.jpg",
    link: "/news#magicbricks"
  },
  {
    name: "Pidilite Alignment",
    desc: "Aligned with Pidilite Industries (makers of Dr. Fixit) to offer professional thermal imaging-based seepage and dampness inspections with expert repair consulting.",
    logo: "https://macj-abuyerschoice.com/wp-content/uploads/2023/08/1-2.png",
    link: "/news#pidilite"
  }
];

const coverageTabs = [
  {
    id: "bedroom",
    label: "Bedroom & Living Room",
    items: [
      "Check ceiling & walls for dampness, seepage, and paint peeling.",
      "Inspect doors and windows for alignment, lock safety, and thermal leakage.",
      "Scan electrical switchboards, sockets, and AC points with infrared cameras for hotspots.",
      "Examine floor tiles or wooden flooring for cracks, hollow spaces, and levelling defects.",
      "Audit balcony sliding doors, railings, and slope drainage."
    ]
  },
  {
    id: "bathroom",
    label: "Bathroom Diagnostics",
    items: [
      "Check wall tiles for hollow backings or grouting gaps.",
      "Inspect washbasins, counters, and sanitary fixtures for cracks & proper mounting.",
      "Check all plumbing joints, stopcocks, and traps for active leakages using damp meters.",
      "Audit shower slopes and floor drain grids to prevent stagnant water.",
      "Verify geyser electrical grounding and functional exhaust ventilation."
    ]
  },
  {
    id: "kitchen",
    label: "Kitchen Inspection",
    items: [
      "Test counter-top granite/slabs for hairline cracks and alignment.",
      "Verify utility sink plumbing and trap drainage for blockage-free flows.",
      "Check modular cabinets for smooth operation and moisture damage.",
      "Verify microwave, chimney, and water purifier electrical outlets.",
      "Inspect gas pipeline paths, ventilation slots, and safety compliance."
    ]
  },
  {
    id: "structural",
    label: "Structure & Core Elements",
    items: [
      "Examine column joints, structural beams, and slab ceilings for hairline cracks.",
      "Measure concrete cover and moisture levels inside plaster layers.",
      "Identify thermal bridging and insulation gaps in exterior facades.",
      "Verify safety railings, parapet walls, and terrace waterproofing barriers.",
      "Map underground and overhead water storage tanks for seepages."
    ]
  }
];

const videosList = [
  {
    title: "MACJ A Buyer's Choice Corporate Overview",
    desc: "Learn about the USA-India franchise alignment and our vision to create a safer property market.",
    embedId: "example1", // standard layout
    duration: "2:45"
  },
  {
    title: "Live Seepage Detection Demo",
    desc: "Watch our engineers detect hidden bathroom wall leakages using thermal infrared scanners.",
    embedId: "example2",
    duration: "4:20"
  },
  {
    title: "Step-by-Step Home Inspection Process",
    desc: "A walkthrough of our 150+ point property health checklist from exterior envelope to switchboards.",
    embedId: "example3",
    duration: "5:12"
  }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("bedroom");

  return (
    <div className="relative w-full">

      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider />

      {/* ── 2. STATS BAR ── */}
      <section className="relative z-30 bg-white py-6 sm:py-8 border border-brand-border/20 shadow-premium mt-[-24px] sm:mt-[-30px] mx-3 sm:mx-8 lg:mx-12 rounded-2xl max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 text-center md:border-r last:border-0 border-brand-border/30 px-1 sm:px-2">
              <p className="text-lg sm:text-xl md:text-2xl font-extrabold font-display text-secondary leading-tight">{stat.value}</p>
              <p className="text-[9px] sm:text-[10px] md:text-xs font-bold text-brand-muted uppercase tracking-wider mt-0.5 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. INTRO PILLARS (Protect Investment, Professional, USA Alliance) ── */}
      <section className="py-10 sm:py-16 bg-brand-light px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Welcome to MACJ</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">
              India's Premier Home Inspection Company
            </h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              We help developers, home buyers, and real estate consultants verify property health and safety through state-of-the-art diagnostic instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${pillar.bg} border rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-premium transition-all duration-300 group hover:-translate-y-1`}
              >
                <div>
                  <h3 className="text-lg font-bold font-display text-primary mb-3">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light mb-6">
                    {pillar.desc}
                  </p>
                </div>
                <Link
                  href={pillar.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider group-hover:text-primary transition-colors mt-auto"
                >
                  <span>Read Details</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT MACJ & MNC PARTNERSHIP ── */}
      <section id="partnership" className="py-10 sm:py-16 bg-white px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-brand-border/30 shadow-premium">
              <Image
                src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/MACJ-ABCHI-Partnership.jpg"
                alt="MACJ ABCHI USA Indo partnership"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-2 bg-primary text-white p-5 rounded-2xl shadow-lg border border-white/10 hidden sm:block max-w-xs">
              <p className="text-lg font-bold font-display text-secondary">Global Standards</p>
              <p className="text-xs text-white/70 mt-1 leading-relaxed font-light">
                Applying USA standard home checkup methodologies adapted specifically to Indian weather conditions & masonry structures.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">MNC Collaboration</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              MACJ Services LLP & A Buyer's Choice USA Partnership
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              MACJ was founded in 2016 to introduce professional home inspections to India. We signed a master franchise agreement with **A Buyer's Choice Home Inspections (ABCHI)**, USA, a global leader in home inspection services operating in multiple countries.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              This collaboration brings structured methodologies, advanced software-driven reports, and continuous engineer training to India, raising the bar for property health checks.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              {[
                "Certified by InterNACHI USA inspectors",
                "Thermal imaging infrared seepage diagnostic technology",
                "Defect assessment compliant with RERA regulations",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-brand-text text-sm font-medium">
                  <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-[10px] shrink-0">✓</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/about#macj-india"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-fit"
            >
              Learn More About Partnership
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 5. INTERACTIVE COVERAGE TABS ── */}
      <section className="py-10 sm:py-16 bg-brand-light px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Inspection Scope</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">What We Inspect</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              A brief list of checkpoints we examine during our comprehensive 150+ point property health scan.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Tabs Selector */}
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-brand-border pb-4">
              {coverageTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-secondary text-white shadow-md scale-105"
                      : "bg-white text-brand-text border border-brand-border/40 hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="flex flex-col gap-4 justify-center">
                    <h3 className="text-lg sm:text-xl font-bold font-display text-primary">
                      {coverageTabs.find((t) => t.id === activeTab)?.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                      Our certified engineers pay close attention to structural, electrical, and plumbing elements in these areas to protect your safety and investment.
                    </p>
                    <Link
                      href="/services#home-inspection"
                      className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-white text-xs font-bold rounded-full transition-all duration-300 w-fit"
                    >
                      View Comprehensive Scope <ExternalLink className="h-3 w-3" />
                    </Link>
                  </div>
                  <ul className="flex flex-col gap-3 justify-center">
                    {coverageTabs.find((t) => t.id === activeTab)?.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                        <span className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. VIDEO RESOURCES SECTION ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Video Guides</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">See How We Inspect</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Watch our detailed visual guides explaining home checks, thermal scan technology, and defect detection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videosList.map((vid, idx) => (
              <div
                key={idx}
                className="bg-brand-light border border-brand-border/30 rounded-3xl overflow-hidden hover:shadow-premium transition-premium flex flex-col group"
              >
                <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center group-hover:opacity-95 transition-opacity">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1),rgba(0,0,0,0.5))]" />
                  {/* Visual placeholder for player */}
                  <div className="relative h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                  <span className="absolute bottom-2.5 right-2.5 bg-black/75 px-2 py-0.5 rounded text-[10px] font-bold text-white tracking-wide">
                    {vid.duration}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-primary font-display leading-snug mb-2 group-hover:text-secondary transition-colors">
                      {vid.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed font-light mb-4">
                      {vid.desc}
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/@macjabuyerschoice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-wider mt-auto hover:text-secondary transition-colors"
                  >
                    <span>Watch Video</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ADVANTAGE RERA & MILESTONES ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-left order-2 lg:order-1">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">RERA Act Advantage</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Protect Your Rights Under RERA Defect Liability Clause
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Under RERA (Section 14(3)), real estate developers are liable for structural defects and quality issues for **5 years** from the date of handing over possession. 
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Our professional inspection report provides detailed documentation of seepage, plumbing leaks, hollow tiles, and electrical hot spots, giving you a legally backed proof to claim repairs from builders before the defect liability window closes.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/rera"
                className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm"
              >
                RERA Guidelines
              </Link>
              <Link
                href="/about#milestones"
                className="px-6 py-3 bg-white border border-brand-border hover:bg-brand-light text-primary font-bold rounded-full shadow-sm transition-all duration-300 text-sm"
              >
                Our Milestones
              </Link>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 max-w-[480px] mx-auto">
              <div className="bg-white rounded-3xl p-6 border border-brand-border/40 shadow-sm flex flex-col justify-center items-center text-center">
                <Shield className="h-10 w-10 text-secondary mb-3 animate-float" />
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-primary">5 Years</h3>
                <p className="text-[10px] sm:text-xs text-brand-muted uppercase font-bold tracking-wider mt-1">RERA Liability Period</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-brand-border/40 shadow-sm flex flex-col justify-center items-center text-center">
                <Award className="h-10 w-10 text-secondary mb-3 animate-float-delayed" />
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-primary">8,000+</h3>
                <p className="text-[10px] sm:text-xs text-brand-muted uppercase font-bold tracking-wider mt-1">Inspections Done</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. ALLIANCES SECTION (Magicbricks, Pidilite) ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Strategic Partnerships</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Trusted By National Brands</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              We align with leading real estate portals and waterproofing brands to offer reliable testing nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alliances.map((partner, idx) => (
              <div
                key={idx}
                className="bg-brand-light border border-brand-border/30 rounded-3xl overflow-hidden hover:shadow-premium transition-premium group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/7] overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-sm font-bold font-display text-white">
                    {partner.name}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light mb-6">
                    {partner.desc}
                  </p>
                  <Link
                    href={partner.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider group-hover:text-primary transition-colors"
                  >
                    <span>Alliance details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. InterNACHI BANNER ── */}
      <section className="py-12 bg-primary text-white px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(211,17,69,0.15),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">International Affiliation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight mt-1">
              Affiliated with InterNACHI, USA
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mt-2">
              All MACJ inspectors undergo rigorous training and adhere strictly to the Standards of Practice and Code of Ethics of the **International Association of Certified Home Inspectors (InterNACHI) USA**.
            </p>
          </div>
          <Link
            href="/about#internachi"
            className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 shrink-0 text-sm"
          >
            Verify Credentials
          </Link>
        </div>
      </section>

      {/* ── 10. TESTIMONIALS ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Client Reviews</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">What Our Clients Say</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            Real feedback from homeowners, builders, and developers who verified property quality through our inspections.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* ── 11. CTA SECTION ── */}
      <section className="py-14 sm:py-20 bg-primary px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(211,17,69,0.15),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">Get Started Today</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mt-2">
              Book Your Property Health Inspection
            </h2>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light mt-4 max-w-md">
              Protect your home from seepage, moisture damages, electrical failures, and building safety risks. Get in touch with our certified engineers today.
            </p>
            <a
              href="tel:+917600078862"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/25 p-4 rounded-2xl w-fit transition-all duration-300 group mt-6"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <PhoneCall className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/60 uppercase font-bold tracking-wider">National Helpline</p>
                <p className="text-lg sm:text-xl font-extrabold font-display text-white tracking-tight">76000 78862</p>
              </div>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              Book Inspection
            </Link>
            <Link
              href="/services"
              className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 transition-all duration-300 text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
