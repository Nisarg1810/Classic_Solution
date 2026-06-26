"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Camera, Zap, Droplets, Gauge, Activity, FileText,
  ShieldCheck, Wrench, CheckSquare, ArrowRight,
  Award, Users, MapPin, Clock,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const whyChooseUs = [
  "Professional Thermal Imaging Equipment",
  "Certified Inspection Process",
  "Accurate Digital Reports",
  "Experienced Technical Team",
  "Quick Turnaround — 24 to 48 Hours",
  "Preventive Maintenance Expertise",
  "Reliable Post-Inspection Support",
  "Affordable, Transparent Pricing",
];

const inspectionTools = [
  { name: "Thermal Imaging Camera", desc: "Advanced infrared cameras detecting heat variations with precision to reveal electrical hotspots and energy leaks.", icon: Camera },
  { name: "Electrical Hotspot Detector", desc: "Specialized thermal sensors for detecting overloaded circuits, loose connections, and failing components in panels.", icon: Zap },
  { name: "Pinless Moisture Meter", desc: "Radiofrequency scanning to chart exact moisture levels inside walls and structural elements without surface damage.", icon: Droplets },
  { name: "Energy Analyzer", desc: "Power quality analyzers to measure energy consumption, load balancing, and inefficiencies across electrical systems.", icon: Gauge },
  { name: "Ultrasonic Testing Device", desc: "Detects equipment faults, pressure leaks, and bearing failures through high-frequency acoustic emission analysis.", icon: Activity },
  { name: "Digital Report Software", desc: "Professional reporting platform generating structured PDF reports with thermal images and risk matrices.", icon: FileText },
];

const milestones = [
  { icon: ShieldCheck, title: "Certified Process", desc: "All inspections follow certified non-invasive testing standards ensuring accurate, reliable findings." },
  { icon: Award, title: "Trusted By Businesses", desc: "Hotels, hospitals, factories and commercial establishments across Gujarat trust Classic Solution." },
  { icon: Users, title: "Expert Team", desc: "Our engineers bring specialized thermal imaging and preventive maintenance expertise to every site." },
  { icon: MapPin, title: "PAN India Coverage", desc: "Serving clients across major cities with on-site professional inspection services." },
  { icon: Clock, title: "Fast Report Delivery", desc: "Detailed PDF reports with thermal images and recommendations delivered within 24-48 hours." },
  { icon: Wrench, title: "End-to-End Support", desc: "From inspection to implementing corrective actions, we guide you every step of the way." },
];

const propertyTypes = [
  "Hotels & Hospitality",
  "Hospitals & Healthcare",
  "Industrial Plants",
  "Commercial Buildings",
  "Data Centers",
  "Educational Institutions",
  "Residential Complexes",
  "Government Buildings",
  "Warehouses & Logistics",
  "Shopping Malls & Retail",
  "Solar Farms",
  "Manufacturing Units",
];

export default function AboutPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="About Classic Solution"
        title="Technology-Driven Preventive"
        titleHighlight="Maintenance Experts"
        subtitle="Classic Solution is a technology-driven preventive maintenance company specialising in thermal imaging inspection, electrical hotspot detection, moisture detection, energy audits, and property inspection."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* ── WHO WE ARE ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[480px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <Image src="/images/thermal_camera_check.png" alt="Thermal imaging inspection in progress" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium mt-8">
                <Image src="/images/underground_leak_detector.png" alt="Advanced diagnostic equipment" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-6 left-4 bg-secondary text-white p-5 rounded-xl shadow-lg">
              <p className="text-2xl font-extrabold font-display">500+</p>
              <p className="text-sm font-bold opacity-80">Inspections Completed</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Who We Are</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Gujarat&apos;s Leading Thermal Inspection Company
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              Classic Solution was founded with a single mission: to help businesses prevent costly equipment failures, fire hazards, and structural damage through proactive inspection using advanced thermal imaging technology.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Unlike traditional maintenance approaches that react after failure, we detect hidden problems — electrical hotspots, moisture intrusion, energy leaks, and mechanical faults — before they escalate. Our non-invasive methods mean zero damage to your property, and our comprehensive digital reports give you a clear actionable roadmap.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              Based in Rajkot, Gujarat, we serve clients across India — from hotels and hospitals to industrial plants and solar farms. Every inspection is conducted by trained technical professionals using calibrated precision instruments.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-fit"
            >
              Book an Inspection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Purpose</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Mission & Vision</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-primary text-white p-8 rounded-3xl shadow-premium"
            >
              <div className="h-12 w-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Our Mission</h3>
              <p className="text-white/75 leading-relaxed text-sm font-light">
                To deliver technology-driven, non-invasive inspection services that help businesses detect hidden risks early, reduce maintenance costs, prevent failures, and improve operational safety. We aim to make preventive maintenance accessible, accurate, and actionable for every facility.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-secondary text-white p-8 rounded-3xl shadow-premium"
            >
              <div className="h-12 w-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Our Vision</h3>
              <p className="text-white/85 leading-relaxed text-sm font-light">
                To be India&apos;s most trusted thermal imaging and preventive maintenance company — known for precision, professionalism, and a genuine commitment to protecting our clients&apos; properties and equipment from preventable failures and losses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Why Choose Us</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              What Sets Classic Solution Apart
            </h2>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              We combine cutting-edge thermal imaging technology with certified engineering expertise to deliver unmatched preventive maintenance solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyChooseUs.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="flex items-center gap-3 text-brand-text text-sm font-medium"
                >
                  <div className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold">✓</div>
                  <span>{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-brand-border/30 shadow-premium">
              <Image src="/images/metal_detector_drilling.png" alt="Classic Solution inspection team at work" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES / CREDENTIALS ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Credentials</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Why Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="bg-brand-light border border-brand-border/30 rounded-2xl p-6 hover:shadow-premium transition-premium hover:border-secondary group"
                >
                  <div className="h-11 w-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-primary font-display mb-2">{item.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY TOOLS ── */}
      <section className="py-14 sm:py-20 bg-primary text-white px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,43,70,0.8),#081B2E)] pointer-events-none" />
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-10 relative z-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Advanced Gear</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white mt-2">Scientific Tools & Technology</h2>
            <p className="text-white/60 mt-3 text-xs sm:text-sm leading-relaxed font-light">
              We replace guesswork with science. Our engineers use calibrated premium diagnostic instruments for precise, reliable results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
            {inspectionTools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
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

      {/* ── PROPERTY TYPES ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Who We Serve</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Property Types We Inspect</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              From small offices to large industrial facilities, our thermal inspection services are designed for every type of property.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {propertyTypes.map((type, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white border border-brand-border/30 rounded-xl px-4 py-3 text-sm font-medium text-brand-text hover:border-secondary hover:text-secondary hover:shadow-sm transition-all duration-200 flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                {type}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-primary px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white mb-4">Ready to Schedule an Inspection?</h2>
          <p className="text-white/65 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
            Contact us today to discuss your requirements and book a professional thermal imaging inspection for your property.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              Book Inspection
            </Link>
            <Link href="/services" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 transition-all duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
