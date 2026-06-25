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
import ProcessTimeline from "@/components/ProcessTimeline";
import GalleryMasonry from "@/components/GalleryMasonry";
import Testimonials from "@/components/Testimonials";
import Accordion from "@/components/Accordion";
import ContactForm from "@/components/ContactForm";
import RoomScope from "@/components/RoomScope";
import ElectricalScope from "@/components/ElectricalScope";

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
      <section id="hero" className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center bg-primary overflow-hidden py-12 sm:py-16 px-6 sm:px-8 lg:px-12">
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
                <div className="h-8 w-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm">✓</div>
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
      <section id="about" className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Column: Two-Image Grid — hidden on mobile */}
          <div className="relative items-center justify-center w-full hidden lg:flex">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[480px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <Image
                  src="/images/thermal_camera_check.png"
                  alt="Inspectors carrying out dampness audit check"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <Image
                  src="/images/underground_leak_detector.png"
                  alt="Acoustic water leak detection test"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            {/* Micro card */}
            <div className="absolute -bottom-6 -right-2 bg-primary text-white p-5 rounded-xl shadow-lg max-w-xs border border-white/10 hidden sm:block">
              <p className="text-xl font-bold font-display text-secondary">Certified Audits</p>
              <p className="text-xs text-white/70 mt-1 leading-relaxed font-light">
                Conducted by certified structural &amp; electrical engineers with advanced tools.
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
              Our inspections are led by well-trained, certified civil and electrical engineers dedicated to structural safety. We maintain strict objectivity and ensure our clients' peace of mind through calibrated diagnostic instruments and detailed engineering reviews.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              <div className="flex items-center gap-3 text-brand-text text-sm font-medium">
                <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-[10px]">✓</div>
                <span>Led by certified civil &amp; electrical engineering experts</span>
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

        {/* NEW: MACJ India Journey Timeline & Cities Presence — hidden on mobile */}
        <div className="hidden sm:block mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-brand-border/45">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Credentials</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">MACJ - A Buyer's Choice, India Journey</h3>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Collaborating with a leading American MNC (19 countries, 200+ franchises), here is our journey and footprint across India:
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { year: "2016", title: "Pioneered Services", desc: "Pioneered Professional Home/Property Inspection Services in India from Kolkata." },
              { year: "2018", title: "Dampness Launch", desc: "Launched Value Added Service - Damp/Seepage Inspections addressing key pain points of Indian property owners." },
              { year: "2020", title: "Scale & Association", desc: "Extended services to bungalows, offices, malls, hotels, factories, etc. Led the formation of the Home Inspection Association of India (HIA)." },
              { year: "2022", title: "National Footprint", desc: "Completed over 6,000 property inspections, expanded across 15 major cities with a Pan-India presence." }
            ].map((milestone, idx) => (
              <div key={idx} className="bg-white border border-brand-border/30 p-5 rounded-2xl relative shadow-sm hover:shadow-md transition-all duration-300 pt-7">
                <span className="absolute -top-3.5 left-4 bg-secondary text-white font-extrabold text-xs px-3 py-1 rounded-full shadow-sm">
                  {milestone.year}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-primary font-display mb-1.5">{milestone.title}</h4>
                <p className="text-xs text-brand-muted leading-relaxed font-light">{milestone.desc}</p>
              </div>
            ))}
          </div>

          {/* Cities Bar */}
          <div className="bg-primary text-white p-6 rounded-2xl text-center shadow-md">
            <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">PAN India Presence: Serving 15+ Cities</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2.5 text-xs font-semibold text-white/95 px-2">
              {["Kolkata", "Mumbai", "Pune", "Delhi NCR", "Guwahati", "Ahmedabad", "Rajkot", "Goa", "Surat-Vapi", "Hyderabad", "Jaipur", "Patna", "Siliguri", "Bengaluru", "Vijayawada"].map((city, idx) => (
                <span key={idx} className="inline-flex items-center gap-1.5">
                  <span>{city}</span>
                  {idx < 14 && <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 sm:gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Specialties</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Professional Property Inspection Services</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Select from our range of 7 specialized property audits, designed to locate moisture, verify system safety, evaluate finishing, and protect your investments.
            </p>
          </div>

          <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 w-full pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex-shrink-0 w-[80vw] sm:w-auto snap-center bg-white border border-brand-border/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-premium transition-premium flex flex-col group hover:-translate-y-1 hover:border-secondary"
                >
                  {/* Card Image */}
                  <div className="relative h-40 w-full overflow-hidden bg-brand-light">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
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

      {/* 4.5 ROOM INSPECTION DETAILS — desktop only */}
      <section id="room-scope" className="hidden md:block py-6 sm:py-14 bg-white border-b border-brand-border/10">
        <RoomScope />
      </section>

      {/* 5.1 RERA ADVANTAGE SECTION */}
      <section className="py-6 sm:py-14 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
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
      <section className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 sm:gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Value Chain</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Benefits Across the Property Chain</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Our audits support all stakeholders in the housing value chain, from architects to property buyers.
            </p>
          </div>

          <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* 1. Real Estate Developers */}
            <div className="flex-shrink-0 w-[80vw] sm:w-auto snap-center bg-white border border-brand-border/30 p-6 rounded-3xl shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold font-display">01</div>
                  <span className="text-[10px] bg-secondary/10 text-secondary font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Construction Stage</span>
                </div>
                <h3 className="text-lg font-bold text-primary font-display mb-1.5">Real Estate Developers</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Focus: Quality Check &amp; RERA Regime</p>
                <ul className="space-y-2 text-[11px] text-brand-muted font-light leading-relaxed mb-4">
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Diagnosis of concealed plumbing &amp; electrical lines in walls</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Right wall selection for dry/wet interior finishes to prevent moisture</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Accessibility approach validation for future plumbing maintenance</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Plumbing line &amp; level checks, tile joint grouting audits</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Firefighting equipment layouts &amp; electrical layout illumination</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 2. Property Buyers */}
            <div className="flex-shrink-0 w-[80vw] sm:w-auto snap-center bg-white border border-brand-border/30 p-6 rounded-3xl shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold font-display">02</div>
                  <span className="text-[10px] bg-secondary/10 text-secondary font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Handover &amp; Moving In</span>
                </div>
                <h3 className="text-lg font-bold text-primary font-display mb-1.5">Property Buyers</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Focus: RERA 5-Year Guarantee Claims</p>
                <ul className="space-y-2 text-[11px] text-brand-muted font-light leading-relaxed mb-4">
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Two-phased audit conducted during final stage &amp; handover</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Verification of all structural, electrical, and plumbing installations</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Document structural &amp; workmanship defects scientifically</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Secure leverage to request builders to rectify faults before possession</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Interior Designers */}
            <div className="flex-shrink-0 w-[80vw] sm:w-auto snap-center bg-white border border-brand-border/30 p-6 rounded-3xl shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold font-display">03</div>
                  <span className="text-[10px] bg-secondary/10 text-secondary font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Design &amp; Renovation</span>
                </div>
                <h3 className="text-lg font-bold text-primary font-display mb-1.5">Interior Designers</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Focus: Rework &amp; Delay Avoidance</p>
                <ul className="space-y-2 text-[11px] text-brand-muted font-light leading-relaxed mb-4">
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Identify active dampness zones before wallpaper or wood installations</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Locate structural rebars &amp; conduits to prevent drilling accidents</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Detailed moisture maps ensure aesthetic woodwork is not ruined</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4. Real Estate Brokers & Sellers */}
            <div className="flex-shrink-0 w-[80vw] sm:w-auto snap-center bg-white border border-brand-border/30 p-6 rounded-3xl shadow-sm text-left flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-extrabold font-display">04</div>
                  <span className="text-[10px] bg-secondary/10 text-secondary font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Primary &amp; Resale</span>
                </div>
                <h3 className="text-lg font-bold text-primary font-display mb-1.5">Owner &amp; Sellers</h3>
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-3">Focus: Pre-Sale Valuation Check</p>
                <ul className="space-y-2 text-[11px] text-brand-muted font-light leading-relaxed mb-4">
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Objective property diagnostics build trust and justify valuation</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Avoid transaction failures due to post-purchase leakage complaints</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <span className="text-secondary font-bold">•</span>
                    <span>Establish detailed electrical and dampness maps for older structures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 9. INSPECTION PROCESS */}
      <section id="process" className="py-6 sm:py-14 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <ProcessTimeline />
      </section>

      {/* 9.5 ELECTRICAL SAFETY SCOPE — desktop only */}
      <section id="electrical-scope" className="hidden md:block py-6 sm:py-14 bg-brand-light border-b border-brand-border/10">
        <ElectricalScope />
      </section>

      {/* 10. TECHNOLOGY SECTION */}
      <section className="py-6 sm:py-14 bg-primary text-white px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,43,70,0.8),#081B2E)] pointer-events-none" />

        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 sm:gap-10 relative z-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Advanced Gear</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mt-2">Scientific Tools & Technology</h2>
            <p className="text-white/60 mt-3 text-xs sm:text-sm leading-relaxed font-light">
              We replace guesswork with science. Our engineers check structures using calibrated premium diagnostic instruments.
            </p>
          </div>

          <div className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 w-full pb-4 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {inspectionTools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex-shrink-0 w-[80vw] sm:w-auto snap-center bg-white/5 border border-white/10 hover:border-secondary/40 p-5 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/10 text-left group flex items-start gap-4"
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
      <section id="gallery" className="py-6 sm:py-14 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Case Studies</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Work Inspection Gallery</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            Take a look at our on-site inspection activities, moisture analysis screens, and property checks.
          </p>
        </div>
        <GalleryMasonry />
      </section>

      {/* 12. TESTIMONIALS */}
      <section className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Client Reviews</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">What Our Customers Say</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            Read positive feedback from homeowners who secured their properties and avoided structural problems.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* 13. FAQ ACCORDION */}
      <section id="faq" className="py-6 sm:py-14 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-6">
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
      <section id="contact" className="bg-primary px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">

          {/* Left Side Info — dark navy, white text */}
          <div className="flex flex-col gap-6 text-left py-8 sm:py-14 pr-0 lg:pr-12">
            {/* Red label */}
            <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">
              Reserve Your Slot
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
              Book your home<br />inspection today
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light max-w-md">
              Don't let tiny damp spots or hairline cracks grow into high repair bills. Secure your family's safety with a scientific home health audit.
            </p>

            {/* Phone Box */}
            <a
              href="tel:02812990030"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/20 p-4 rounded-2xl w-fit transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <PhoneCall className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/60 uppercase font-bold tracking-wider">Call our hotline</p>
                <p className="text-lg sm:text-xl font-extrabold font-display text-white tracking-tight">0281 2990030</p>
              </div>
            </a>

            {/* Checkmarks */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border border-secondary/60 text-secondary flex items-center justify-center shrink-0 font-bold text-[10px]">✓</div>
                <span className="text-xs sm:text-sm font-medium text-white/75">100% unbiased third-party property evaluation reports</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border border-secondary/60 text-secondary flex items-center justify-center shrink-0 font-bold text-[10px]">✓</div>
                <span className="text-xs sm:text-sm font-medium text-white/75">Calibrated thermal scanners and moisture trackers</span>
              </div>
            </div>
          </div>

          {/* Right Side: White floating card */}
          <div className="flex items-stretch w-full py-8 sm:py-10">
            <div className="w-full bg-white rounded-3xl shadow-2xl overflow-hidden">
              <ContactForm />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
