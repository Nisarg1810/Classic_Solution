"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ShieldCheck, Droplets, AlertTriangle, Search, Clock, Zap, Thermometer, 
  Wrench, Home as HomeIcon, Layers, ArrowRight, ShieldAlert, Camera, Eye, PhoneCall
} from "lucide-react";

// Subcomponents
import Particles from "@/components/Particles";
import AnimatedCounter from "@/components/AnimatedCounter";
import DampnessTimeline from "@/components/DampnessTimeline";
import ProcessTimeline from "@/components/ProcessTimeline";
import GalleryMasonry from "@/components/GalleryMasonry";
import Testimonials from "@/components/Testimonials";
import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";

// Services Data
const services = [
  {
    title: "Under-Construction Inspection (3-Phase)",
    icon: Clock,
    desc: "A comprehensive three-stage checkup performed during structure, masonry/plumbing rough-in, and pre-handover finishing stages.",
    image: "/images/hero_background.png",
  },
  {
    title: "Pre-Delivery & Finishing Inspection",
    icon: ShieldCheck,
    desc: "Rigorous quality audits of construction finishing, doors, windows, paint, and fittings before builders hand over units.",
    image: "/images/metal_detector_drilling.png",
  },
  {
    title: "Full Diagnostic Property Inspection",
    icon: Search,
    desc: "An end-to-end two-phase scientific diagnostic evaluation of a property's complete electrical, plumbing, and structural health.",
    image: "/images/video_borescope_test.png",
  },
  {
    title: "Dampness, Seepage & Leakage Inspection",
    icon: Droplets,
    desc: "Scientific mapping of damp spots, high moisture zones, and seepage lines using non-invasive thermal infrared cameras.",
    image: "/images/thermal_camera_check.png",
  },
  {
    title: "Electrical, Solar Energy & Safety Inspection",
    icon: Zap,
    desc: "Verification of wire gauge, load distributions, panel safety, DB charts, earthing, and solar panel structures to eliminate hazards.",
    image: "/images/underground_leak_detector.png",
  },
  {
    title: "Interior Design & Renovation Inspection",
    icon: Wrench,
    desc: "Pre & post-renovation scans to identify concealed lines, avoid drilling accidents, and check walls before installing wallpaper or paneling.",
    image: "/images/video_borescope_test.png",
  },
  {
    title: "NRI Property Care & Complete Management",
    icon: HomeIcon,
    desc: "Complete property inspection, periodic health maintenance, and structured remote reporting audits for non-resident Indian owners.",
    image: "/images/hero_background.png",
  }
];

// Technology Tools Data
const inspectionTools = [
  { name: "Thermal Imaging Camera", desc: "Infrared heat mapping to detect cold water pockets, seepage points, and leakage zones behind walls.", icon: Camera },
  { name: "Video Borescope Probe", desc: "Flexible high-resolution camera probe to inspect dark, hard-to-reach drywall cavities and plumbing shafts.", icon: Eye },
  { name: "Underground Leak Detector", desc: "Acoustic sensor rod to pinpoint plumbing line leaks under pressure without breaking floors.", icon: Search },
  { name: "Wall Scanner & Rebar Finder", desc: "Locates concealed steel rebars, metal conduits, and live electrical cables before drilling work.", icon: Layers },
  { name: "Pinless Moisture Meter", desc: "Radiofrequency scanning to chart exact water index inside masonry and plaster layers.", icon: Thermometer },
  { name: "Electrical Circuit Tester", desc: "Voltage testers, ground impedance meters, and phase load checkers to secure main DB distributions.", icon: Zap },
];

export default function Home() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* 1. HERO SECTION */}
      <section id="hero" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        {/* Animated Particles */}
        <Particles />

        {/* Background Image & Gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_background.png"
            alt="Modern luxury house inspected by Classic Solution"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/95 to-transparent" />
        </div>

        {/* Content Box */}
        <div className="relative z-20 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-white text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/20 px-4 py-1.5 rounded-full text-secondary text-xs sm:text-sm font-semibold w-fit backdrop-blur-sm"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>1st Time in Saurashtra &amp; Kutchh</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight"
            >
              Protect Your Home <br />
              Before Problems Become <br />
              <span className="text-secondary font-semibold">Expensive Repairs</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl font-light"
            >
              Professional Property Inspections, Dampness &amp; Leakage Detection, and Pre-Delivery Finishing Checks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <button
                onClick={() => handleScrollTo("#contact")}
                className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                Book Inspection
              </button>
              <button
                onClick={() => handleScrollTo("#contact")}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 active:scale-95"
              >
                Get Free Consultation
              </button>
            </motion.div>
          </div>

          {/* Right Column: Graphic Inspector Image & Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            {/* Main Image Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 shadow-premium"
            >
              <Image
                src="/images/thermal_camera_check.png"
                alt="Professional Inspector using thermal camera on walls"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </motion.div>

            {/* Floating Badges */}
            <div className="hidden xl:block">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 bg-white/95 text-primary p-3.5 rounded-2xl shadow-premium flex items-center gap-3 border border-brand-border/20 backdrop-blur-sm"
              >
                <div className="h-8 w-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center font-bold text-sm">✓</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-brand-muted uppercase">Standards</p>
                  <p className="text-xs font-extrabold font-display">Certified Inspection</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="absolute top-1/4 -right-8 bg-white/95 text-primary p-3.5 rounded-2xl shadow-premium flex items-center gap-3 border border-brand-border/20 backdrop-blur-sm"
              >
                <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">✓</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-brand-muted uppercase">Reports</p>
                  <p className="text-xs font-extrabold font-display">Detailed PDF Report</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="absolute bottom-6 -left-8 bg-white/95 text-primary p-3.5 rounded-2xl shadow-premium flex items-center gap-3 border border-brand-border/20 backdrop-blur-sm"
              >
                <div className="h-8 w-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-sm">✓</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-brand-muted uppercase">Crew</p>
                  <p className="text-xs font-extrabold font-display">Expert Team</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
                className="absolute bottom-12 -right-6 bg-white/95 text-primary p-3.5 rounded-2xl shadow-premium flex items-center gap-3 border border-brand-border/20 backdrop-blur-sm"
              >
                <div className="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">✓</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-brand-muted uppercase">Assurance</p>
                  <p className="text-xs font-extrabold font-display">Trusted Service</p>
                </div>
              </motion.div>
            </div>

            {/* Mobile / Tablet Badges (Inline, clean layout) */}
            <div className="grid grid-cols-2 gap-3 mt-6 xl:hidden w-full max-w-[340px]">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl text-left">
                <span className="text-secondary font-bold text-sm">✓</span>
                <span className="text-xs font-semibold text-white/90">Certified Audit</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl text-left">
                <span className="text-secondary font-bold text-sm">✓</span>
                <span className="text-xs font-semibold text-white/90">Detailed PDF</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl text-left">
                <span className="text-secondary font-bold text-sm">✓</span>
                <span className="text-xs font-semibold text-white/90">Expert Crew</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl text-left">
                <span className="text-secondary font-bold text-sm">✓</span>
                <span className="text-xs font-semibold text-white/90">Trusted Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION */}
      <section className="relative z-30 bg-white py-10 border border-brand-border/20 shadow-premium mt-[-30px] mx-6 sm:mx-8 lg:mx-12 rounded-2xl max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">
          <div className="flex flex-col gap-1 border-r last:border-0 border-brand-border/30">
            <AnimatedCounter target={6000} suffix="+" />
            <p className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider mt-1">Properties Inspected</p>
          </div>
          <div className="flex flex-col gap-1 border-r last:border-0 border-brand-border/30">
            <AnimatedCounter target={19} suffix="+" />
            <p className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider mt-1">Countries Present</p>
          </div>
          <div className="flex flex-col gap-1 border-r last:border-0 border-brand-border/30">
            <AnimatedCounter target={200} suffix="+" />
            <p className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider mt-1">Franchises Worldwide</p>
          </div>
          <div className="flex flex-col gap-1">
            <AnimatedCounter target={100} suffix="%" />
            <p className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider mt-1">Unbiased Audits</p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" className="py-16 sm:py-24 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Column: Two-Image Grid showing action + InterNACHI Certificate */}
          <div className="relative flex items-center justify-center w-full">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[480px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <Image
                  src="/images/thermal_camera_check.png"
                  alt="Inspectors carrying out dampness audit check"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium bg-white p-2">
                <Image
                  src="/images/internachi_certification.png"
                  alt="InterNACHI Certified Professional Inspector Certificate"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* Micro card */}
            <div className="absolute -bottom-6 -right-2 bg-primary text-white p-5 rounded-xl shadow-lg max-w-xs border border-white/10 hidden sm:block">
              <p className="text-xl font-bold font-display text-secondary">InterNACHI CPI</p>
              <p className="text-xs text-white/70 mt-1 leading-relaxed font-light">
                Operations led by certified inspector Dev Smitkumar Kaneria (Member ID available).
              </p>
            </div>
          </div>

          {/* Right Column: About Info */}
          <div className="flex flex-col gap-5 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">About Us</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Leading Scientific Property Diagnostics in Saurashtra &amp; Kutchh
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Classic Solution introduces professional home and property inspection services to Saurashtra &amp; Kutchh (Rajkot office), in collaboration with leading American MNC company A Buyer's Choice Home Inspection and MACJ.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Our operations are led by <strong>Dev Smitkumar Kaneria</strong>, a Certified Professional Inspector (CPI) credentialed by the International Association of Certified Home Inspectors (InterNACHI). We maintain strict objectivity and ensure our client's safety through calibrated diagnostic instruments.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-3 text-brand-text text-sm font-medium">
                <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-[10px]">✓</div>
                <span>InterNACHI Certified Professional Inspector (CPI) Dev Smitkumar Kaneria</span>
              </div>
              <div className="flex items-center gap-3 text-brand-text text-sm font-medium">
                <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-[10px]">✓</div>
                <span>100% objective, independent third-party property audits</span>
              </div>
              <div className="flex items-center gap-3 text-brand-text text-sm font-medium">
                <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-[10px]">✓</div>
                <span>Full digital report with moisture index maps delivered within 48 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-16 sm:py-24 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-12 sm:gap-16">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Specialties</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Professional Property Inspection Services</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Select from our range of 7 specialized property audits, designed to locate moisture, verify system safety, evaluate finishing, and protect your investments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white border border-brand-border/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-premium flex flex-col group hover:-translate-y-1 hover:border-secondary"
                >
                  {/* Card Image */}
                  <div className="relative h-40 w-full overflow-hidden bg-brand-light">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                    
                    {/* Floating Icon */}
                    <div className="absolute top-3 left-3 h-8 w-8 rounded-lg bg-white text-primary flex items-center justify-center shadow-md">
                      <IconComp className="h-4 w-4 text-secondary" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex flex-col flex-1 gap-3 justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-primary font-display leading-snug">{svc.title}</h3>
                      <p className="text-xs text-brand-muted leading-relaxed mt-1.5 font-light">{svc.desc}</p>
                    </div>

                    <button
                      onClick={() => handleScrollTo("#contact")}
                      className="inline-flex items-center gap-1.5 text-[10px] font-bold text-secondary uppercase tracking-wider group-hover:text-primary transition-colors mt-1"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5.1 RERA ADVANTAGE SECTION */}
      <section className="py-16 sm:py-24 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          {/* Left Column: RERA Badge & Explanations */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[320px] aspect-square rounded-[24px] overflow-hidden border border-brand-border/30 shadow-premium p-8 bg-brand-light flex flex-col items-center justify-center gap-6">
              <div className="h-20 w-20 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <ShieldAlert className="h-12 w-12" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-extrabold font-display text-primary">RERA Act, 2016</h3>
                <p className="text-sm font-bold text-secondary uppercase tracking-wider mt-1">Advantage Home Buyers</p>
              </div>
              <div className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow">
                5 Year Guarantee
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">RERA Rights</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Claim Your RERA Quality Guarantee
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Under the path-breaking <strong>Real Estate Regulation &amp; Development Act (RERA, India), 2016</strong>, promoters are legally bound to provide a <strong>5-year free-of-cost guarantee</strong> from structural defects, workmanship defects, or quality failures from the date of handing over possession.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Our professional property inspections help buyers enforce this guarantee by deploying a structured <strong>3D of Issues</strong> approach:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
              <div className="border border-brand-border/40 p-4 rounded-xl bg-brand-light">
                <p className="font-bold font-display text-primary text-sm uppercase">1. DETECT</p>
                <p className="text-xs text-brand-muted mt-1 font-light">Locate hidden leakage, hollow tiles, faulty wiring, and plumbing errors.</p>
              </div>
              <div className="border border-brand-border/40 p-4 rounded-xl bg-brand-light">
                <p className="font-bold font-display text-primary text-sm uppercase">2. DESCRIBE</p>
                <p className="text-xs text-brand-muted mt-1 font-light">Document issues scientifically inside a digital PDF report with moisture indexes.</p>
              </div>
              <div className="border border-brand-border/40 p-4 rounded-xl bg-brand-light">
                <p className="font-bold font-display text-primary text-sm uppercase">3. DIRECT</p>
                <p className="text-xs text-brand-muted mt-1 font-light">Present standard, unbiased reports to developers to rectify issues before possession.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.2 REAL ESTATE VALUE CHAIN SECTION */}
      <section className="py-16 sm:py-24 bg-brand-light px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-12 sm:gap-16">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Value Chain</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Benefits Across the Property Chain</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Our audits support all stakeholders in the housing value chain, from architects to property buyers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <div className="bg-white border border-brand-border/30 p-6 rounded-2xl shadow-sm text-left flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">01</div>
              <div>
                <h3 className="text-base font-bold text-primary font-display mb-1">Real Estate Developers</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  Serves as a reliable third-party audit to ensure contractor quality control, minimize workmanship defects, and build brand credibility.
                </p>
              </div>
            </div>

            <div className="bg-white border border-brand-border/30 p-6 rounded-2xl shadow-sm text-left flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">02</div>
              <div>
                <h3 className="text-base font-bold text-primary font-display mb-1">Property Buyers</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  Enables peace of mind, verifies system functionality (plumbing, electricals, structure), and provides grounds to claim RERA defects.
                </p>
              </div>
            </div>

            <div className="bg-white border border-brand-border/30 p-6 rounded-2xl shadow-sm text-left flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">03</div>
              <div>
                <h3 className="text-base font-bold text-primary font-display mb-1">Architects &amp; Designers</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  Locates concealed electrical/plumbing lines and maps dampness indices to secure structures before wallpaper or cabinetry installations.
                </p>
              </div>
            </div>

            <div className="bg-white border border-brand-border/30 p-6 rounded-2xl shadow-sm text-left flex flex-col gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">04</div>
              <div>
                <h3 className="text-base font-bold text-primary font-display mb-1">Real Estate Brokers</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">
                  Facilitates transparent transactions, delivers objective property health valuations, and builds lifetime buyer trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOW DAMPNESS SPREADS */}
      <section className="py-16 sm:py-24 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <DampnessTimeline />
      </section>



      {/* 9. INSPECTION PROCESS */}
      <section id="process" className="py-16 sm:py-24 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <ProcessTimeline />
      </section>

      {/* 10. TECHNOLOGY SECTION */}
      <section className="py-16 sm:py-24 bg-primary text-white px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,43,70,0.8),#081B2E)] pointer-events-none" />

        <div className="mx-auto max-w-7xl flex flex-col items-center gap-12 sm:gap-16 relative z-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Advanced Gear</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mt-2">Scientific Tools & Technology</h2>
            <p className="text-white/60 mt-3 text-xs sm:text-sm leading-relaxed font-light">
              We replace guesswork with science. Our engineers check structures using calibrated premium diagnostic instruments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {inspectionTools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/5 border border-white/10 hover:border-secondary/40 p-5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 text-left group flex items-start gap-4"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <ToolIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-display mb-1">{tool.name}</h3>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{tool.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. GALLERY */}
      <section id="gallery" className="py-16 sm:py-24 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Case Studies</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Work Inspection Gallery</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            Take a look at our on-site inspection activities, moisture analysis screens, and property checks.
          </p>
        </div>
        <GalleryMasonry />
      </section>

      {/* 12. TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-brand-light px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Client Reviews</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">What Our Customers Say</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            Read positive feedback from homeowners who secured their properties and avoided structural problems.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* 13. FAQ ACCORDION */}
      <section id="faq" className="py-16 sm:py-24 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Got Questions?</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Frequently Asked Questions</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Have doubts about processes, timings, or reporting formats? We have compiled the answers for you below.
            </p>
          </div>
          <Accordion />
        </div>
      </section>

      {/* 14. CALL TO ACTION & CONTACT FORM */}
      <section id="contact" className="py-16 sm:py-24 bg-brand-light px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side Info */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Reserve Your Slot</span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-primary leading-tight">
              Book Your Professional Home Inspection Today
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Don't wait for tiny damp spots or minor cracks to develop into high repair bills. Secure your family's safety and property value with scientific home health audits.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <a
                href="tel:02812990030"
                className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-brand-border/30 hover:border-secondary hover:shadow-md transition-all duration-300 w-fit"
              >
                <div className="h-9 w-9 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 animate-pulse">
                  <PhoneCall className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] text-brand-muted uppercase font-bold">Call our Hotline</p>
                  <p className="text-sm sm:text-base font-extrabold font-display text-primary">0281 2990030</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-brand-text">
                <div className="h-5 w-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 font-bold text-[10px]">✓</div>
                <span className="text-xs sm:text-sm font-medium">100% unbiased third party property evaluation reports.</span>
              </div>
              <div className="flex items-center gap-3 text-brand-text">
                <div className="h-5 w-5 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 font-bold text-[10px]">✓</div>
                <span className="text-xs sm:text-sm font-medium">Calibrated testing tools like thermal scanners and moisture trackers.</span>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Form */}
          <div className="lg:col-span-6 w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
