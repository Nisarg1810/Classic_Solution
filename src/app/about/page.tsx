"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck, Award, Users, MapPin, Clock,
  Briefcase, Globe, Heart, Shield, CheckCircle2
} from "lucide-react";
import PageHero from "@/components/PageHero";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    desc: "We deliver objective, unbiased assessments. We represent our clients' best interests by reporting true facts with scientific backing."
  },
  {
    icon: Globe,
    title: "Global Standards",
    desc: "Through our ABCHI USA collaboration, we adopt the highest international inspection methodologies and continuous examiner certifications."
  },
  {
    icon: Users,
    title: "Customer Centricity",
    desc: "We explain issues in simple terms, deliver detailed software-driven PDF reports, and provide post-inspection guidance to resolve problems."
  }
];

const teamProfiles = [
  {
    name: "Ravindra Chamaria",
    role: "Promoter & Strategic Advisor",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Ravindra-Chamaria.jpg",
    desc: "A visionary entrepreneur and the Chairman of Infinity Group. He has been a pioneer in creating IT infrastructure in East India (Infinity Benchmark, Think Tank) and drives MACJ's strategic scaling across India."
  },
  {
    name: "Bill Redfern",
    role: "Founder, ABCHI USA",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/1.-Bill-Redfern-CEO-Founder-ABCHI.jpg",
    desc: "An international franchise expert who founded A Buyer's Choice Home Inspections in North America. Under his leadership, the firm became a multinational powerhouse, expanding into the US, Canada, South America, Europe, and India."
  },
  {
    name: "Mahendra Sureka",
    role: "Director & CEO, MACJ India",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2025/04/MS.jpg",
    desc: "A senior business leader with decades of executive experience in real estate and service sectors. He spearheads the Indian operations, engineering training, and quality management frameworks."
  }
];

const milestonesList = [
  { year: "2016", title: "Inception & MNC Alignment", desc: "MACJ Services LLP partnered with A Buyer's Choice USA to launch professional inspections in India." },
  { year: "2018", title: "InterNACHI Affiliation", desc: "Standardized all diagnostic processes and secured official affiliation with InterNACHI USA." },
  { year: "2020", title: "National Alliances", desc: "Signed nationwide inspection alliances with Magicbricks and Dr. Fixit Pidilite." },
  { year: "2023", title: "8,000+ Inspections", desc: "Successfully completed health & safety check-ups for over 8,000 properties across major Indian metros." }
];

export default function AboutPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="About MACJ India"
        title="Pioneers of Professional Home"
        titleHighlight="Inspection in India"
        subtitle="Formed in collaboration with ABCHI USA, MACJ brings world-class diagnostic inspections to the Indian property sector, helping buyers, developers, and corporate clients verify quality and safety."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* ── 1. MACJ & ABCHI INDIA PARTNERSHIP ── */}
      <section id="macj-india" className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">The Partnership</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              Indo-US Collaboration for Safer Properties
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              MACJServices LLP entered into a master franchise agreement with **A Buyer's Choice Home Inspections (ABCHI)**, USA, to introduce the concept of professional, certified home check-ups to the Indian market.
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              In India, real estate transactions are major investments, yet properties often suffer from concealed dampness, electrical hot spots, or hollow tile backings. Our visual, non-destructive home checkups replace guesswork with science, ensuring transparency between developers, buyers, and lenders.
            </p>
            <div className="bg-white p-5 rounded-2xl border border-brand-border/40 shadow-sm">
              <p className="text-xs font-semibold text-secondary uppercase tracking-widest">Our Vision</p>
              <p className="text-xs sm:text-sm text-primary font-medium mt-1 leading-relaxed">
                "To make home inspections standard practice across India, promoting quality, durability, and safety in every home."
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border/30 shadow-premium flex flex-col gap-6">
            <h3 className="text-lg font-bold font-display text-primary">Why We Brought ABCHI to India</h3>
            <ul className="flex flex-col gap-4">
              {[
                { title: "Standardized Checklists", text: "Over 150+ predefined checkpoints covering walls, ceilings, switchboards, and plumbing traps." },
                { title: "Expert Training", text: "Inspectors are trained directly by certified trainers under USA frameworks." },
                { title: "Defect Tracking Software", text: "Detailed software-driven PDF reports containing visual proof and severity levels." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-primary">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-brand-muted mt-0.5 leading-relaxed font-light">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 2. ABCHI USA CORPORATE PROFILE ── */}
      <section id="abchi-usa" className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-gradient-to-br from-primary to-primary-dark text-white p-8 rounded-3xl shadow-premium lg:order-2">
            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
              <Globe className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold font-display mb-3">About ABCHI, USA</h3>
            <p className="text-white/70 leading-relaxed text-sm font-light mb-4">
              Founded in North America, **A Buyer's Choice Home Inspections (ABCHI)** is one of the world's largest home inspection franchise networks. It has grown rapidly across the United States, Canada, Chile, Central Europe, New Zealand, and India.
            </p>
            <p className="text-white/70 leading-relaxed text-sm font-light">
              ABCHI's mission is to offer a consistent, high-standard, professional property check-up experience to home buyers. Their inspectors are fully certified, insured, and equipped with the industry's best reporting softwares.
            </p>
          </div>
          <div className="flex flex-col gap-5 lg:order-1">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Global Footprint</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              An International Brand of Trust
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              By aligning with ABCHI USA, MACJ brings global trust and certified quality checks to the domestic real estate industry. We adhere to the international code of standards, introducing systematic and digital inspections.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <div className="text-center p-3 bg-brand-light rounded-2xl border border-brand-border/40">
                <p className="text-xl font-extrabold text-secondary font-display">19+</p>
                <p className="text-[9px] text-brand-muted uppercase font-bold tracking-wide mt-0.5">Years Global</p>
              </div>
              <div className="text-center p-3 bg-brand-light rounded-2xl border border-brand-border/40">
                <p className="text-xl font-extrabold text-secondary font-display">4+</p>
                <p className="text-[9px] text-brand-muted uppercase font-bold tracking-wide mt-0.5">Continents</p>
              </div>
              <div className="text-center p-3 bg-brand-light rounded-2xl border border-brand-border/40">
                <p className="text-xl font-extrabold text-secondary font-display">200+</p>
                <p className="text-[9px] text-brand-muted uppercase font-bold tracking-wide mt-0.5">Franchises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. MANAGEMENT & PROMOTER PROFILES ── */}
      <section id="management" className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Leaders</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Management & Partners Profile</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              MACJ is led by experienced corporate leaders and real estate promoters dedicated to elevating housing safety and construction finishing quality in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamProfiles.map((person, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border/30 rounded-3xl overflow-hidden hover:shadow-premium transition-premium group flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={person.imageUrl}
                    alt={person.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-base font-bold text-white font-display mb-0.5">{person.name}</h3>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-widest">{person.role}</p>
                  </div>
                </div>
                <div className="p-5 flex-grow">
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. MILESTONES ACHIEVED ── */}
      <section id="milestones" className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Journey</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Milestones Achieved</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {milestonesList.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-light border border-brand-border/30 rounded-3xl p-6 relative hover:border-secondary transition-colors"
              >
                <span className="text-3xl font-extrabold text-secondary/35 font-display block mb-2">{item.year}</span>
                <h3 className="text-sm sm:text-base font-bold text-primary font-display mb-2">{item.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. InterNACHI AFFILIATION ── */}
      <section id="internachi" className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Certified Excellence</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight">
              International Association of Certified Home Inspectors (InterNACHI)
            </h2>
            <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
              MACJ is internationally affiliated with **InterNACHI, USA**, the world's largest association of property inspectors. 
            </p>
            <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light">
              InterNACHI provides core certifications, strict Codes of Ethics, and standard inspection procedures. This affiliation ensures that our diagnostic checklists, thermal scanning parameters, and reporting formats are globally validated and compliant.
            </p>
          </div>
          <div className="bg-primary text-white p-8 rounded-3xl shadow-premium flex flex-col gap-4">
            <h3 className="text-lg font-bold font-display text-secondary">Our InterNACHI Assurances</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Strict compliance with USA Code of Ethics",
                "Non-invasive testing methodologies only",
                "Rigorous regular training & examinations for engineers",
                "Objective, transparent assessments for all stakeholders"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                  <span className="h-5 w-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 6. GRATITUDE SECTION ── */}
      <section id="gratitude" className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center max-w-2xl">
          <div className="h-12 w-12 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 mx-auto">
            <Heart className="h-6 w-6" />
          </div>
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Gratitude</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">A Sincere Thank You</h2>
          <p className="text-brand-muted mt-4 text-xs sm:text-sm leading-relaxed font-light">
            We express our deepest gratitude to our initial real estate developer clients, banking partners, real estate agents, and above all, the thousands of homeowners who trusted MACJ to inspect their dream homes. Your feedback inspires us to expand nationwide and continue delivering excellence.
          </p>
        </div>
      </section>

    </div>
  );
}
