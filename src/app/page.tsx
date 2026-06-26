"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Droplets, Search, Zap, Thermometer,
  Wrench, ArrowRight, PhoneCall,
  Flame, TrendingDown, Clock, Shield,
  Factory,
  Gauge,
} from "lucide-react";

import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";

const services = [
  { title: "Thermal Imaging Inspection", icon: Thermometer, desc: "Advanced infrared thermography to detect hidden heat signatures in electrical systems, machinery, and building envelopes.", href: "/services#thermal" },
  { title: "Electrical Hotspot Detection", icon: Zap, desc: "Pinpoint overloaded circuits, loose connections, and faulty components in switchboards and distribution panels.", href: "/services#electrical" },
  { title: "Moisture Detection", icon: Droplets, desc: "Non-invasive scanning to locate moisture intrusion, water leaks, and dampness within walls, roofs, and floors.", href: "/services#moisture" },
  { title: "Energy Audit", icon: Gauge, desc: "Comprehensive evaluation of energy consumption patterns to identify losses and recommend efficiency improvements.", href: "/services#energy" },
  { title: "Property Inspection", icon: Search, desc: "Complete building and property health assessment covering structural, electrical, and envelope systems.", href: "/services#property" },
  { title: "Industrial Inspection", icon: Factory, desc: "Thermal inspection of motors, transformers, compressors, and industrial equipment to prevent unplanned breakdowns.", href: "/services#industrial" },
];

const preventionBenefits = [
  { icon: Flame, title: "Prevent Fire Risks", desc: "Detect electrical hotspots and overloaded circuits before they ignite fires." },
  { icon: Zap, title: "Detect Hotspots", desc: "Reveal dangerously overheated connections and failing components early." },
  { icon: TrendingDown, title: "Lower Costs", desc: "Fix problems early before they become expensive emergency repairs." },
  { icon: Clock, title: "Increase Asset Life", desc: "Regular thermal inspections extend the lifespan of critical equipment." },
];

const stats = [
  { value: "500+", label: "Inspections Completed" },
  { value: "PAN India", label: "Coverage" },
  { value: "24-48 Hrs", label: "Report Delivery" },
  { value: "100%", label: "Non-Invasive Methods" },
];

export default function Home() {
  return (
    <div className="relative w-full">

      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider />

      {/* ── 2. STATS BAR ── */}
      <section className="relative z-30 bg-white py-8 border border-brand-border/20 shadow-premium mt-[-30px] mx-6 sm:mx-8 lg:mx-12 rounded-2xl max-w-7xl xl:mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 text-center border-r last:border-0 border-brand-border/30 px-2">
              <p className="text-xl sm:text-2xl font-extrabold font-display text-secondary">{stat.value}</p>
              <p className="text-[10px] sm:text-xs font-bold text-brand-muted uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. ABOUT TEASER ── */}
      <section id="about" className="py-12 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative items-center justify-center w-full hidden lg:flex">
            <div className="grid grid-cols-2 gap-4 w-full max-w-[480px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <Image src="/images/thermal_camera_check.png" alt="Thermal imaging inspection in progress" fill className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <Image src="/images/underground_leak_detector.png" alt="Advanced diagnostic inspection equipment" fill className="object-cover" />
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
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">About Classic Solution</span>
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
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-fit"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. SERVICES OVERVIEW ── */}
      <section id="services" className="py-12 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Services</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Professional Inspection Services</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Comprehensive thermal imaging and preventive maintenance solutions designed to protect your assets and reduce operational risks.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="bg-brand-light border border-brand-border/30 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-premium transition-premium flex flex-col group hover:-translate-y-1 hover:border-secondary"
                >
                  <div className="h-10 w-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-primary font-display leading-snug mb-1.5">{svc.title}</h3>
                  <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed font-light flex-1">{svc.desc}</p>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold text-secondary uppercase tracking-wider mt-3 group-hover:text-primary transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <Link
            href="/services"
            className="px-8 py-3.5 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-full transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* ── 5. WHY IT MATTERS ── */}
      <section className="py-12 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Why It Matters</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2 mb-4">Why Preventive Maintenance?</h2>
            <p className="text-brand-muted text-sm leading-relaxed font-light mb-8">
              Early detection through thermal imaging prevents catastrophic failures, protects assets, and keeps operations running without interruption.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {preventionBenefits.map((benefit, idx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex items-start gap-3 bg-white border border-brand-border/30 rounded-2xl p-4 hover:shadow-premium transition-premium hover:border-secondary group"
                  >
                    <div className="h-9 w-9 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <BenefitIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-primary font-display">{benefit.title}</h3>
                      <p className="text-xs text-brand-muted leading-relaxed mt-0.5 font-light">{benefit.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="relative w-full lg:w-[420px] shrink-0">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-brand-border/30 shadow-premium">
              <Image
                src="/images/metal_detector_drilling.png"
                alt="Classic Solution inspection team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-white p-4 rounded-xl shadow-lg">
              <p className="text-2xl font-extrabold font-display">500+</p>
              <p className="text-xs font-bold opacity-80">Inspections Done</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS ── */}
      <section className="py-12 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Client Reviews</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">What Our Clients Say</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            Businesses and facilities that improved safety and reduced maintenance costs through our thermal inspection services.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* ── 7. CTA SECTION ── */}
      <section className="py-14 sm:py-20 bg-primary px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,0,22,0.2),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">Get Started Today</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mt-2">
              Book Your Inspection Today
            </h2>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed font-light mt-4 max-w-md">
              Don&apos;t let hidden electrical faults, moisture issues, or energy losses put your facility at risk. Get a professional thermal inspection and preventive maintenance plan today.
            </p>
            <a
              href="tel:02812990030"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/20 p-4 rounded-2xl w-fit transition-all duration-300 group mt-6"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <PhoneCall className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/60 uppercase font-bold tracking-wider">Call our hotline</p>
                <p className="text-lg sm:text-xl font-extrabold font-display text-white tracking-tight">0281 2990030</p>
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
