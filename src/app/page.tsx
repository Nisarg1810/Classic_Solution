"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck, Droplets, Search, Zap, Thermometer,
  Wrench, ArrowRight, PhoneCall,
  Flame, TrendingDown, Clock, BarChart3, Shield,
  Building2, Heart, Factory, Sun, Briefcase,
  Package, BookOpen, ShoppingBag, HomeIcon,
  FileText, Camera, Activity, CheckSquare, Gauge, Settings, Users, AlertTriangle,
} from "lucide-react";

import Particles from "@/components/Particles";
import ProcessTimeline from "@/components/ProcessTimeline";
import GalleryMasonry from "@/components/GalleryMasonry";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

const preventionBenefits = [
  { icon: Flame, title: "Prevent Fire Risks", desc: "Detect electrical hotspots and overloaded circuits before they ignite fires." },
  { icon: Zap, title: "Detect Electrical Hotspots", desc: "Reveal dangerously overheated connections and failing components early." },
  { icon: Gauge, title: "Reduce Energy Loss", desc: "Identify energy waste across electrical systems and building envelopes." },
  { icon: Wrench, title: "Avoid Equipment Failure", desc: "Predict and prevent costly mechanical and electrical breakdowns." },
  { icon: TrendingDown, title: "Lower Maintenance Costs", desc: "Fix problems early before they become expensive emergency repairs." },
  { icon: Clock, title: "Increase Asset Life", desc: "Regular thermal inspections extend the lifespan of critical equipment." },
  { icon: BarChart3, title: "Improve Operational Efficiency", desc: "Keep facilities running at peak efficiency with proactive maintenance." },
  { icon: Shield, title: "Ensure Business Continuity", desc: "Avoid unexpected shutdowns that disrupt operations and revenue." },
];

const services = [
  { title: "Thermal Imaging Inspection", icon: Thermometer, desc: "Advanced infrared thermography to detect hidden heat signatures in electrical systems, machinery, and building envelopes." },
  { title: "Electrical Hotspot Detection", icon: Zap, desc: "Pinpoint overloaded circuits, loose connections, and faulty components in switchboards and distribution panels." },
  { title: "Moisture Detection", icon: Droplets, desc: "Non-invasive scanning to locate moisture intrusion, water leaks, and dampness within walls, roofs, and floors." },
  { title: "Energy Audit", icon: Gauge, desc: "Comprehensive evaluation of energy consumption patterns to identify losses and recommend efficiency improvements." },
  { title: "Property Inspection", icon: Search, desc: "Complete building and property health assessment covering structural, electrical, and envelope systems." },
  { title: "Industrial Inspection", icon: Factory, desc: "Thermal inspection of motors, transformers, compressors, and industrial equipment to prevent unplanned breakdowns." },
  { title: "Solar Thermal Inspection", icon: Sun, desc: "Identify underperforming solar panels, faulty cells, and connection hotspots to maximize solar energy output." },
  { title: "Preventive Maintenance Consulting", icon: Wrench, desc: "Expert guidance to develop proactive maintenance schedules and strategies that reduce downtime and costs." },
  { title: "Digital Inspection Reports", icon: FileText, desc: "Professional PDF reports with thermal images, temperature analysis, risk ratings, and actionable recommendations." },
  { title: "Safety Recommendations", icon: ShieldCheck, desc: "Detailed safety compliance guidance and corrective action plans based on inspection findings." },
];


const inspectionTools = [
  { name: "Thermal Imaging Camera", desc: "Advanced infrared cameras detecting heat variations with precision to reveal electrical hotspots and energy leaks.", icon: Camera },
  { name: "Electrical Hotspot Detector", desc: "Specialized thermal sensors for detecting overloaded circuits, loose connections, and failing components in panels.", icon: Zap },
  { name: "Pinless Moisture Meter", desc: "Radiofrequency scanning to chart exact moisture levels inside walls and structural elements without surface damage.", icon: Droplets },
  { name: "Energy Analyzer", desc: "Power quality analyzers to measure energy consumption, load balancing, and inefficiencies across electrical systems.", icon: Gauge },
  { name: "Ultrasonic Testing Device", desc: "Detects equipment faults, pressure leaks, and bearing failures through high-frequency acoustic emission analysis.", icon: Activity },
  { name: "Digital Report Software", desc: "Professional reporting platform generating structured PDF reports with thermal images and risk matrices.", icon: FileText },
];

const reportComponents = [
  { icon: Camera, title: "Thermal Images", desc: "High-resolution infrared images showing temperature variations across all inspected areas." },
  { icon: Thermometer, title: "Temperature Analysis", desc: "Precise temperature readings compared against safe operating thresholds." },
  { icon: AlertTriangle, title: "Hotspot Identification", desc: "Clearly marked problem areas with severity classifications and risk levels." },
  { icon: Droplets, title: "Moisture Detection", desc: "Mapped moisture zones with index readings and exact affected areas." },
  { icon: Gauge, title: "Energy Loss Analysis", desc: "Quantified energy waste with estimated cost impact and efficiency gaps." },
  { icon: CheckSquare, title: "Maintenance Recommendations", desc: "Step-by-step corrective actions prioritized by urgency and risk level." },
  { icon: BarChart3, title: "Risk Priority Matrix", desc: "Visual risk assessment matrix ranking all issues by severity and urgency." },
  { icon: FileText, title: "PDF Digital Report", desc: "Professional report ready for management review and compliance documentation." },
];

const whyChooseUs = [
  "Professional Thermal Imaging Equipment",
  "Certified Inspection Process",
  "Accurate Digital Reports",
  "Experienced Technical Team",
  "Quick Turnaround",
  "Preventive Maintenance Expertise",
  "Reliable Support",
  "Affordable Solutions",
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
        <Particles />
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_background.png"
            alt="Classic Solution Thermal Imaging Inspection"
            fill
            priority
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary/95 to-transparent" />
        </div>

        <div className="relative z-20 mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-white text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/20 px-4 py-1.5 rounded-full text-secondary text-xs sm:text-sm font-semibold w-fit backdrop-blur-sm"
            >
              <Thermometer className="h-4 w-4" />
              <span>Technology-Driven Preventive Maintenance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight"
            >
              Prevent Problems <br />
              Before They Become <br />
              <span className="text-secondary font-semibold">Costly</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base text-white/80 leading-relaxed max-w-xl font-light"
            >
              Advanced Thermal Imaging &amp; Preventive Maintenance Solutions for Safer, More Efficient Properties.
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
                Book an Inspection
              </button>
              <button
                onClick={() => handleScrollTo("#contact")}
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 backdrop-blur-sm transition-all duration-300 active:scale-95"
              >
                Contact Us
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[340px] aspect-[4/5] rounded-[24px] overflow-hidden border border-white/10 shadow-premium"
            >
              <Image
                src="/images/thermal_camera_check.png"
                alt="Professional inspector using thermal imaging camera"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 to-transparent" />
            </motion.div>

            {/* Floating Badges — Desktop */}
            <div className="hidden xl:block">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -top-4 -left-6 bg-white/95 text-primary p-3.5 rounded-2xl shadow-premium flex items-center gap-3 border border-brand-border/20 backdrop-blur-sm"
              >
                <div className="h-8 w-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center font-bold text-sm">✓</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-brand-muted uppercase">Technology</p>
                  <p className="text-xs font-extrabold font-display">Infrared Cameras</p>
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
                  <p className="text-xs font-extrabold font-display">24-48hr PDF Report</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="absolute bottom-6 -left-8 bg-white/95 text-primary p-3.5 rounded-2xl shadow-premium flex items-center gap-3 border border-brand-border/20 backdrop-blur-sm"
              >
                <div className="h-8 w-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-sm">✓</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-brand-muted uppercase">Expertise</p>
                  <p className="text-xs font-extrabold font-display">Certified Engineers</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}
                className="absolute bottom-12 -right-6 bg-white/95 text-primary p-3.5 rounded-2xl shadow-premium flex items-center gap-3 border border-brand-border/20 backdrop-blur-sm"
              >
                <div className="h-8 w-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-sm">✓</div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-brand-muted uppercase">Outcome</p>
                  <p className="text-xs font-extrabold font-display">Risk Assessment</p>
                </div>
              </motion.div>
            </div>

            {/* Mobile Badges */}
            <div className="grid grid-cols-2 gap-3 mt-6 xl:hidden w-full max-w-[340px]">
              {[
                "Infrared Cameras",
                "24-48hr Reports",
                "Certified Team",
                "Risk Assessment",
              ].map((label) => (
                <div key={label} className="flex items-center gap-2 bg-white/5 border border-white/10 p-2.5 rounded-xl text-left">
                  <span className="text-secondary font-bold text-sm">✓</span>
                  <span className="text-xs font-semibold text-white/90">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY FEATURES STRIP */}
      <section className="relative z-30 bg-white py-8 border border-brand-border/20 shadow-premium mt-[-30px] mx-6 sm:mx-8 lg:mx-12 rounded-2xl max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            { icon: Camera, label: "Professional Grade", sub: "Thermal Equipment" },
            { icon: FileText, label: "Digital Reports", sub: "Delivered in 24-48hrs" },
            { icon: ShieldCheck, label: "Certified Process", sub: "Inspection Standards" },
            { icon: Wrench, label: "Preventive Focus", sub: "Maintenance Plans" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-2 text-center border-r last:border-0 border-brand-border/30 px-2">
                <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm font-extrabold font-display text-primary">{item.label}</p>
                <p className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section id="about" className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative items-center justify-center w-full hidden lg:flex">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[480px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <Image
                  src="/images/thermal_camera_check.png"
                  alt="Thermal imaging inspection in progress"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <Image
                  src="/images/underground_leak_detector.png"
                  alt="Advanced diagnostic inspection equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-2 bg-primary text-white p-5 rounded-xl shadow-lg max-w-xs border border-white/10 hidden sm:block">
              <p className="text-xl font-bold font-display text-secondary">Technology-Driven</p>
              <p className="text-xs text-white/70 mt-1 leading-relaxed font-light">
                Using advanced thermal imaging to uncover hidden risks before they become costly failures.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">About Us</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Technology-Driven Preventive Maintenance for Safer Properties
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Classic Solution helps businesses identify hidden risks before they become expensive failures using advanced thermal imaging technology. Our inspections improve safety, reliability, and energy efficiency while reducing maintenance costs.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              We serve hotels, hospitals, industrial plants, commercial buildings, and more — providing professional digital analysis reports with thermal images, risk assessments, and actionable preventive maintenance plans.
            </p>
            <div className="flex flex-col gap-2.5 mt-2">
              {[
                "Advanced thermal imaging & non-destructive inspection technology",
                "Professional digital analysis reports with risk assessment",
                "Preventive maintenance plans to reduce operational costs",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-brand-text text-sm font-medium">
                  <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center text-[10px]">✓</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY PREVENTIVE MAINTENANCE MATTERS */}
      <section id="prevention" className="py-6 sm:py-14 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 sm:gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Why It Matters</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Why Preventive Maintenance Matters</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Early detection through thermal imaging prevents catastrophic failures, protects assets, and keeps operations running without interruption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
            {preventionBenefits.map((benefit, idx) => {
              const BenefitIcon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-brand-light border border-brand-border/30 rounded-2xl p-5 hover:shadow-premium transition-premium hover:-translate-y-1 hover:border-secondary group"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <BenefitIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-primary font-display mb-1.5">{benefit.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-light">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 sm:gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Services</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Professional Inspection Services</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Comprehensive thermal imaging and preventive maintenance solutions designed to protect your assets and reduce operational risks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 w-full">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="bg-white border border-brand-border/30 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-premium transition-premium flex flex-col group hover:-translate-y-1 hover:border-secondary"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-primary font-display leading-snug mb-1.5">{svc.title}</h3>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed font-light flex-1">{svc.desc}</p>
                  <button
                    onClick={() => handleScrollTo("#contact")}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold text-secondary uppercase tracking-wider mt-3 group-hover:text-primary transition-colors"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. INSPECTION PROCESS */}
      <section id="process" className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <ProcessTimeline />
      </section>

      {/* 8. TECHNOLOGY SECTION */}
      <section id="technology" className="py-6 sm:py-14 bg-primary text-white px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,43,70,0.8),#081B2E)] pointer-events-none" />
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 sm:gap-10 relative z-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Advanced Gear</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mt-2">Scientific Tools & Technology</h2>
            <p className="text-white/60 mt-3 text-xs sm:text-sm leading-relaxed font-light">
              We replace guesswork with science. Our engineers use calibrated premium diagnostic instruments for precise, reliable results.
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

      {/* 9. REPORTS SECTION */}
      <section id="reports" className="py-6 sm:py-14 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-8 sm:gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">What You Get</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Professional Digital Inspection Report</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Every inspection concludes with a comprehensive digital report packed with thermal images, analysis data, and actionable recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 w-full">
            {reportComponents.map((report, idx) => {
              const ReportIcon = report.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-brand-light border border-brand-border/30 rounded-2xl p-5 hover:shadow-premium transition-premium hover:border-secondary group"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <ReportIcon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary font-display mb-1.5">{report.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed font-light">{report.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. WHY CHOOSE US */}
      <section id="why-us" className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[24px] overflow-hidden border border-brand-border/30 shadow-premium">
              <Image
                src="/images/metal_detector_drilling.png"
                alt="Classic Solution inspection team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Why Choose Us</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Why Choose Classic Solution
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              We combine cutting-edge thermal imaging technology with certified engineering expertise to deliver unmatched preventive maintenance solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyChooseUs.map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 text-brand-text text-sm font-medium">
                  <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold">✓</div>
                  <span>{reason}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 w-fit mt-2"
            >
              Book an Inspection
            </button>
          </div>
        </div>
      </section>

      {/* 11. GALLERY */}
      <section id="gallery" className="py-6 sm:py-14 bg-white px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Case Studies</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Inspection Work Gallery</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            A look at our on-site thermal imaging activities, electrical inspections, moisture analysis, and property checks.
          </p>
        </div>
        <GalleryMasonry />
      </section>

      {/* 12. TESTIMONIALS */}
      <section className="py-6 sm:py-14 bg-brand-light px-6 sm:px-8 lg:px-12 border-b border-brand-border/10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Client Reviews</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">What Our Clients Say</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            Businesses and facilities that improved safety and reduced maintenance costs through our thermal inspection services.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* 14. CONTACT */}
      <section id="contact" className="bg-primary px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
          <div className="flex flex-col gap-6 text-left py-8 sm:py-14 pr-0 lg:pr-12">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">
              Reserve Your Slot
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white leading-tight">
              Book your inspection today
            </h2>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light max-w-md">
              Don&apos;t let hidden electrical faults, moisture issues, or energy losses put your facility at risk. Get a professional thermal inspection and preventive maintenance plan today.
            </p>
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
            <div className="flex flex-col gap-3">
              {[
                "Professional thermal imaging and digital reports",
                "Risk assessment with preventive maintenance plan",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full border border-secondary/60 text-secondary flex items-center justify-center shrink-0 font-bold text-[10px]">✓</div>
                  <span className="text-xs sm:text-sm font-medium text-white/75">{item}</span>
                </div>
              ))}
            </div>
          </div>

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
