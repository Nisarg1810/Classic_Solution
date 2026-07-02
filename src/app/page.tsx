"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets, Search, Zap, Thermometer,
  ArrowRight, PhoneCall, Shield,
  Award, CheckSquare, Eye, FileText,
  Video, Play, ExternalLink, HelpCircle,
  Home as HomeIcon, Layers, AlertTriangle,
  ChevronLeft, ChevronRight
} from "lucide-react";

import HeroSlider from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";

const stats = [
  { value: "8,000+", label: "Inspections Completed" },
  { value: "10+ Cities", label: "PAN India Presence" },
  { value: "InterNACHI", label: "USA Affiliation" },
  { value: "100%", label: "Non-Invasive Diagnostics" },
];

const homeHighlights = [
  {
    title: "Protect your most important investment",
    desc: "A pre-purchase inspection helps uncover seepage, cracks, poor finishing, and hidden service issues before they become expensive surprises.",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/A.jpg",
    link: "/about#macj-india",
  },
  {
    title: "Professional Home Inspections Services",
    desc: "We visually examine accessible areas, systems, and components with specialized tools and software-driven reporting.",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Home-Inspection-Coverage-1024x485.jpg",
    link: "/services/home-inspection",
  },
  {
    title: "Win – Win for all Stake Holders",
    desc: "Buyers, sellers, builders, agents, and lenders all make better decisions when the property's real condition is known.",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/10/For-Home-Owner-Buyer.jpg",
    link: "/services/stakeholder-benefits",
  },
  {
    title: "Advantage RERA",
    desc: "RERA improves transparency and accountability, and inspections support defect documentation and due diligence.",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/10/For-Real-Estate-Developer-1.jpg",
    link: "/rera",
  },
  {
    title: "Company Vision",
    desc: "To make property buying safer and more transparent across India through trained inspectors and consistent quality standards.",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2026/02/MACJ-Future-Cities-02-968x1024.png",
    link: "/about",
  },
  {
    title: "NRI Property Care",
    desc: "We help NRIs monitor, maintain, and protect their properties in India with periodic inspection reports, so you stay informed no matter where you are.",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/02/NRI-Property-Care-1.jpg",
    link: "/services/nri-property-care",
  },
];

const coverageCategories = [
  {
    id: "Home Inspection",
    label: "Home Inspection",
    items: [
      { name: "Bedroom", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/bedroom01-360x240.jpg" },
      { name: "Living Room", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/livingroom-360x240.jpg" },
      { name: "Kitchen", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/kichen02-360x240.jpg" },
      { name: "Bathroom", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/bathroom01-360x240.jpg" },
      { name: "Lobby", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Lobby-Area-Site03-360x240.jpg" },
      { name: "Balcony", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Balconies03-360x240.jpg" },
      { name: "Terrace", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Terrace-360x240.jpg" },
      { name: "Servants Room", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Servants-Room-360x240.jpg" }
    ]
  },
  {
    id: "Areas",
    label: "Areas",
    items: [
      { name: "Bedroom", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/bedroom01-360x240.jpg" },
      { name: "Living Room", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/livingroom-360x240.jpg" },
      { name: "Kitchen", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/kichen02-360x240.jpg" },
      { name: "Bathroom", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/bathroom01-360x240.jpg" },
      { name: "Lobby", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Lobby-Area-Site03-360x240.jpg" },
      { name: "Balcony", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Balconies03-360x240.jpg" },
      { name: "Terrace", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Terrace-360x240.jpg" },
      { name: "Servants Room", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Servants-Room-360x240.jpg" }
    ]
  },
  {
    id: "Elements",
    label: "Elements",
    items: [
      { name: "Wall", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/wall-360x240.jpg" },
      { name: "Ceiling", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/ciling-1-360x240.jpg" },
      { name: "Floor", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/floor-360x240.jpg" },
      { name: "Door", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/door-1-360x240.jpg" },
      { name: "Window", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/window-360x240.jpg" },
      { name: "Plumbing", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/plumbing-360x240.jpg" },
      { name: "Electrical", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/electrical-1-360x240.jpg" },
      { name: "Stair Steps", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Stair-Steps-360x240.jpg" },
      { name: "Exhaust Systems", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Exhaust-Systems01-360x240.jpg" },
      { name: "Countertops", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Countertops01-360x240.jpg" },
      { name: "Cabinets", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Cabinets02-360x240.jpg" },
      { name: "Air Conditioning Systems", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Air-Conditioning-Systems02-360x240.jpg" }
    ]
  },
  {
    id: "Coverage",
    label: "Coverage",
    items: [
      { name: "Material Types", image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Coverage-04-1-360x240.jpg" },
      { name: "Installation & Finishing", image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/Coverage-02-360x240.jpg" },
      { name: "Operations & Functionality", image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/Coverage-03-360x240.jpg" },
      { name: "General Safety", image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/general-360x240.jpg" }
    ]
  },
  {
    id: "3D of Issues",
    label: "3D of Issues",
    items: [
      { name: "Detect the Issue", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/detect-1-360x240.jpg" },
      { name: "Describe the Issue", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/describe-1-360x240.jpg" },
      { name: "Direct the Solution", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Direct-360x240.jpg" },
      { name: "Our Satisfied Customer", image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/customer-1-360x240.jpg" }
    ]
  },
  {
    id: "Common Issues",
    label: "Common Issues",
    items: [
      { name: "Popping of Paint", image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/popping-360x240.jpg" },
      { name: "Visual Image of Wall", image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Portfolio09-360x240.jpg" },
      { name: "Infrared Showing Moisture", image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Portfolio10-360x240.jpg" },
      { name: "Cracked Tiles", image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Portfolio05-360x240.jpg" },
      { name: "Damaged Lock", image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Portfolio06-360x240.jpg" },
      { name: "Improper Gasket Installation", image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Portfolio08-360x240.jpg" },
      { name: "No Grouting in Outlet", image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Portfolio07-360x240.jpg" },
      { name: "Poor Workmanship", image: "https://macj-abuyerschoice.com/wp-content/uploads/2018/12/Portfolio03-360x240.jpg" }
    ]
  },
  {
    id: "Scope of Services",
    label: "Scope of Services",
    items: [
      { name: "Complete Home / Property Inspection", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/01/Scope-of-Services-01-360x240.jpg" },
      { name: "Damp / Seepage Assessment through Thermal Imaging", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/outside-360x240.jpg" },
      { name: "Electrical Inspections of a Home / Property", image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/Scope-of-Services-03-360x240.jpg" },
      { name: "Complete Property Care for NRIs / CCCs", image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/Scope-of-Services-04-1-360x240.jpg" },
      { name: "Construction Finishing Inspection for Developers", image: "https://macj-abuyerschoice.com/wp-content/uploads/2017/01/Scope-of-Services-02-360x240.jpg" }
    ]
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
  const [activeTab, setActiveTab] = useState("Home Inspection");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const activeCategory = coverageCategories.find(c => c.id === activeTab) || coverageCategories[0];
  const items = activeCategory.items;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = window.innerWidth < 768 ? clientWidth * 0.8 : 310;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">

      {/* ── 1. HERO SLIDER ── */}
      <HeroSlider />



      {/* ── 3. HOME HIGHLIGHTS ── */}
      <section className="py-6 sm:py-10 bg-brand-light px-8 sm:px-16 lg:px-28">
        <div className="mx-auto max-w-5xl">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
            {homeHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border/30 rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 group hover:-translate-y-1 flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-brand-light">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
                    unoptimized
                  />
                </div>
                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-bold font-display text-primary mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-text leading-relaxed font-light mb-4 flex-1">
                    {item.desc}
                  </p>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary uppercase tracking-wider group-hover:text-primary transition-colors mt-auto"
                >
                  <span>Read Details</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. HOME INSPECTION COVERAGE ── */}
      <section className="py-14 sm:py-20 bg-[#fbfbfb] px-8 sm:px-16 lg:px-28 border-t border-brand-border/20">
        <div className="mx-auto max-w-5xl">
          {/* Centered Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3.5xl font-bold font-display text-[#333333]">
              Home Inspection Coverage
            </h2>
          </div>

          {/* Navigation Tab Bar + Carousel Buttons */}
          <div className="flex items-center justify-between border-b border-neutral-200 mb-8 pb-0.5 relative">
            {/* Tabs List */}
            <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none pr-8">
              {coverageCategories.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`py-3 px-0.5 text-xs sm:text-sm font-semibold tracking-wide transition-all border-b-2 relative whitespace-nowrap -mb-[2.5px] ${
                    activeTab === tab.id
                      ? "text-[#333333] border-secondary"
                      : "text-[#999999] border-transparent hover:text-[#333333]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1.5 shrink-0 bg-white pl-4">
              <button
                onClick={() => scroll("left")}
                aria-label="Previous items"
                className="h-9 w-9 border border-neutral-200 flex items-center justify-center transition-colors text-neutral-600 hover:bg-neutral-50 hover:text-secondary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Next items"
                className="h-9 w-9 border border-neutral-200 flex items-center justify-center transition-colors text-neutral-600 hover:bg-neutral-50 hover:text-secondary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory pb-4"
          >
            <AnimatePresence mode="wait">
              {items.map((item, idx) => (
                <motion.div
                  key={`${activeTab}-${item.name}-${idx}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-[280px] sm:w-[320px] md:w-[285px] shrink-0 snap-start bg-white border border-[#eaeaea] overflow-hidden shadow-sm hover:shadow-md transition-shadow relative flex flex-col group rounded-sm"
                >
                  {/* Aspect ratio 3:2 matching 360x240 exactly */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-width: 640px) 280px, 320px"
                      unoptimized
                    />
                  </div>
                  {/* Card Footer Block */}
                  <div className="p-4 bg-white border-t border-[#f4f4f4] relative flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-[#333333] transition-colors group-hover:text-secondary">
                      {item.name}
                    </span>
                    {/* Tiny gray corner triangle exactly in the bottom-right corner */}
                    <svg
                      className="absolute bottom-0 right-0 h-3.5 w-3.5 text-neutral-300 fill-current"
                      viewBox="0 0 10 10"
                    >
                      <polygon points="10,0 10,10 0,10" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>







      {/* ── 9. InterNACHI BANNER ── */}
      <section className="py-14 sm:py-20 bg-white px-8 sm:px-16 lg:px-28 border-t border-brand-border/20">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-6">
          <div className="relative h-44 w-44 sm:h-48 sm:w-48">
            <Image
              src="https://macj-abuyerschoice.com/wp-content/uploads/2017/07/intr-nachi.jpg"
              alt="InterNACHI Certified Badge"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary leading-snug text-center">
            International Affiliation with InterNACHI
          </h2>
          <div className="flex flex-col gap-4 text-sm sm:text-base md:text-lg text-brand-text leading-relaxed font-normal text-center max-w-lg mx-auto">
            <p>
              International Association of Certified Home Inspectors(InterNACHI), is the world’s largest inspection trade association. Based in the United States, InterNACHI is both non-profit and federally tax-exempt, and operates in 65 different countries and nine languages. InterNACHI is the inspection industry's largest provider of education and training.
            </p>
            <p className="font-semibold text-secondary text-base sm:text-lg md:text-xl">
              We are the proud member of InterNACHI...
            </p>
          </div>
          <Link
            href="/about/internachi"
            className="px-6 py-2.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-xs uppercase tracking-wider mt-2"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* ── 10. TESTIMONIALS ── */}
      <section className="py-14 sm:py-20 bg-white px-8 sm:px-16 lg:px-28">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Client Reviews</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">What Our Clients Say</h2>
          <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
            Real feedback from homeowners, builders, and developers who verified property quality through our inspections.
          </p>
        </div>
        <Testimonials />
      </section>

      {/* ── 10.5 CLIENT LOGOS ── */}
      <ClientLogos />

      {/* ── 11. CTA SECTION ── */}
      <section className="py-14 sm:py-20 bg-primary px-6 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(211,17,69,0.15),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-5xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
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
