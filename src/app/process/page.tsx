"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera, Zap, Droplets, Gauge, Activity, FileText,
  CheckSquare, AlertTriangle, Thermometer, BarChart3,
  Calendar, Users, Search, ClipboardList, Shield,
  PhoneCall,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ProcessTimeline from "@/components/ProcessTimeline";

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

const inspectionTools = [
  { name: "Thermal Imaging Camera", desc: "Advanced infrared cameras detecting heat variations with precision to reveal electrical hotspots and energy leaks.", icon: Camera },
  { name: "Electrical Hotspot Detector", desc: "Specialized thermal sensors for detecting overloaded circuits, loose connections, and failing components in panels.", icon: Zap },
  { name: "Pinless Moisture Meter", desc: "Radiofrequency scanning to chart exact moisture levels inside walls and structural elements without surface damage.", icon: Droplets },
  { name: "Energy Analyzer", desc: "Power quality analyzers to measure energy consumption, load balancing, and inefficiencies across electrical systems.", icon: Gauge },
  { name: "Ultrasonic Testing Device", desc: "Detects equipment faults, pressure leaks, and bearing failures through high-frequency acoustic emission analysis.", icon: Activity },
  { name: "Digital Report Software", desc: "Professional reporting platform generating structured PDF reports with thermal images and risk matrices.", icon: FileText },
];

const advantages = [
  { icon: Shield, title: "Non-Invasive Methods", desc: "Zero damage to your property — all inspections use advanced scanning technology that requires no drilling, cutting, or demolition." },
  { icon: Search, title: "Detect Hidden Problems", desc: "Thermal imaging reveals problems invisible to the naked eye — concealed moisture, hot circuits, and energy leaks behind walls and ceilings." },
  { icon: ClipboardList, title: "Actionable Reports", desc: "Our reports are not just documents — they include step-by-step corrective actions ranked by severity so you know exactly what to fix first." },
  { icon: Calendar, title: "Long-Term Maintenance Plan", desc: "Beyond fixing current issues, we help you build a preventive maintenance schedule that protects your facility for years." },
  { icon: Users, title: "Certified Technical Team", desc: "Our engineers are experienced thermal imaging professionals who understand electrical, mechanical, and building systems." },
  { icon: CheckSquare, title: "Fast Report Delivery", desc: "Receive your complete digital inspection report within 24-48 hours of the site visit — ready for management review." },
];

export default function ProcessPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="How It Works"
        title="Our Transparent"
        titleHighlight="Inspection Process"
        subtitle="From the first call to the final preventive maintenance plan — a scientific, thorough, and completely non-invasive diagnostic of your facility."
        breadcrumbs={[{ label: "Inspection Process" }]}
      />

      {/* ── PROCESS TIMELINE ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <ProcessTimeline />
        </div>
      </section>

      {/* ── WHAT YOU RECEIVE ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">What You Receive</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Professional Digital Inspection Report</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Every inspection concludes with a comprehensive digital report packed with thermal images, analysis data, and actionable recommendations — delivered within 24-48 hours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
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

      {/* ── TECHNOLOGY USED ── */}
      <section className="py-14 sm:py-20 bg-primary text-white px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(15,43,70,0.8),#081B2E)] pointer-events-none" />
        <div className="mx-auto max-w-5xl flex flex-col items-center gap-10 relative z-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Tools We Use</span>
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

      {/* ── OUR ADVANTAGES ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Why Our Process</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Advantages of Our Approach</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Our inspection methodology is designed to deliver maximum value — complete detection, zero disruption, and clear actionable guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.07 }}
                  className="bg-white border border-brand-border/30 rounded-2xl p-6 hover:shadow-premium transition-premium hover:border-secondary group"
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

      {/* ── CTA ── */}
      <section className="py-14 bg-primary px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/65 text-sm sm:text-base font-light">
              Schedule your inspection today. Our team will visit your facility, conduct a thorough thermal scan, and deliver a comprehensive report within 24-48 hours.
            </p>
            <a
              href="tel:+912812990030"
              className="flex items-center gap-4 bg-white/10 hover:bg-white/15 border border-white/20 p-4 rounded-2xl w-fit transition-all duration-300 group mt-6"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 shadow-lg">
                <PhoneCall className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-[10px] text-white/60 uppercase font-bold tracking-wider">Call our hotline</p>
                <p className="text-lg sm:text-xl font-extrabold font-display text-white tracking-tight">0281 2990030</p>
              </div>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              Book Inspection
            </Link>
            <Link href="/services" className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 transition-all duration-300 text-center">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
