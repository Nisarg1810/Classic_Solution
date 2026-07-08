"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero-slide-1.png",
    alt: "Complete Home / Property Inspection & Safety Audit",
    title: "Health & Safety Checkup of Homes / Offices along with Solutions",
    link: "/services/home-inspection"
  },
  {
    id: 2,
    image: "/images/hero-slide-2.png",
    alt: "Construction Finishing Audit for Real Estate Developers",
    title: "Construction-Finishing Inspection for Real Estate Developers and Builders",
    link: "/services/construction-finishing"
  },
  {
    id: 3,
    image: "/images/hero-slide-3.png",
    alt: "Moisture & Damp Seepage Inspection",
    title: "Damp / Seepage Assessment with Solutions through Thermal Imaging Technology",
    link: "/services/moisture-damp"
  },
  {
    id: 4,
    image: "/images/hero-slide-4.png",
    alt: "Ground Penetrating Radar (GPR) Subsurface Scan",
    title: "GPR Survey - Ground Penetrating Radar Survey & Subsurface Imaging",
    link: "/services/gpr"
  },
  {
    id: 5,
    image: "/images/hero-slide-5.png",
    alt: "Solar Panel Diagnostics",
    title: "Solar Panel Inspection Services & Efficiency Assessment",
    link: "/services/energy-audit/solar"
  },
  {
    id: 6,
    image: "/images/hero-slide-6.png",
    alt: "HVAC & Electrical Energy Audit",
    title: "Energy Audit Services - Solar panel inspection, Electrical utilities and HVAC",
    link: "/services/energy-audit"
  },
];

const SLIDE_INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const goTo = useCallback(
    (index: number, dir: "next" | "prev" = "next") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 700);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, "next");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, "prev");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const imageVariants = {
    enter: (dir: string) => ({
      x: dir === "next" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: string) => ({
      x: dir === "next" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* ── MOBILE ONLY CONTACT SECTION (stacked vertically above slider) ── */}
      <div className="flex md:hidden flex-col gap-4 px-6 py-5 bg-white border-b border-brand-border/30">
        {/* Phone 1 */}
        <a href="tel:+917600078862" className="flex items-center gap-4 group">
          <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
            <Phone className="h-5 w-5 fill-current" />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Phone number:</p>
            <p className="text-sm font-extrabold text-primary group-hover:text-secondary transition-colors">+91 76000 78862</p>
          </div>
        </a>

        {/* Phone 2 */}
        <a href="tel:02812990030" className="flex items-center gap-4 group">
          <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
            <Phone className="h-5 w-5 fill-current" />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">Phone number:</p>
            <p className="text-sm font-extrabold text-primary group-hover:text-secondary transition-colors">0281 2990030</p>
          </div>
        </a>

        {/* Email */}
        <a href="mailto:classicsolution931@gmail.com" className="flex items-center gap-4 group">
          <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
            <Mail className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] text-brand-muted uppercase font-bold tracking-wider">E-mail address:</p>
            <p className="text-sm font-extrabold text-primary group-hover:text-secondary transition-colors break-all">classicsolution931@gmail.com</p>
          </div>
        </a>

        {/* Social media icons (matches grey color scheme in screenshot) */}
        <div className="flex items-center gap-3 pt-2 pl-1 border-t border-brand-border/30">
          {[
            { name: "Facebook", href: "https://facebook.com", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
            { name: "X", href: "https://x.com", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
            { name: "YouTube", href: "https://youtube.com", path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z" },
            { name: "Instagram", href: "https://instagram.com", svg: true },
            { name: "LinkedIn", href: "https://linkedin.com", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" }
          ].map((item, idx) => (
            <a key={idx} href={item.href} aria-label={item.name} className="text-brand-muted hover:text-secondary transition-colors">
              {item.svg ? (
                <svg className="h-5 w-5 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              ) : (
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d={item.path} />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* ── HERO SLIDER BLOCK ── */}
      <div className="relative w-full overflow-hidden bg-brand-light">
        
        {/* Slider Container - aspect ratio based for mobile to prevent image squeeze */}
        <div 
          className="relative w-full overflow-hidden bg-brand-light aspect-[2.4/1] md:h-[500px] lg:h-[580px]"
        >
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={`img-${current}`}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority
                className="object-contain md:object-cover object-center bg-brand-blue-gradient md:bg-transparent"
                sizes="100vw"
              />
              {/* Bottom gradient fade for desktop to ensure text readability */}
              <div className="hidden md:block absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation Arrows (Overlaying edges on mobile & desktop) */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center pointer-events-none z-10">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="h-9 w-9 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all border border-white/20 rounded pointer-events-auto shadow-md"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="h-9 w-9 bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-all border border-white/20 rounded pointer-events-auto shadow-md"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* ── DESKTOP ONLY BOTTOM INFO BAR (sits over desktop slider overlay) ── */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 z-20 text-white py-4 md:py-5 border-t border-b border-white/25 bg-black/20 backdrop-blur-[2px]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10 flex items-stretch justify-between gap-0 overflow-hidden">
            {/* Arrows */}
            <div className="flex items-center gap-1.5 pr-5 border-r border-white/25 shrink-0">
              <button onClick={prev} aria-label="Previous slide"
                className="h-9 w-9 bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-all duration-200 border border-white/30 rounded">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} aria-label="Next slide"
                className="h-9 w-9 bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-all duration-200 border border-white/30 rounded">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Desktop Contact Details */}
            <div className="flex items-stretch flex-1">
              <a href="tel:+917600078862" className="flex items-center gap-3 px-5 border-r border-white/25 hover:bg-white/5 transition-colors group shrink-0">
                <Phone className="h-5 w-5 text-secondary shrink-0" fill="currentColor" />
                <div className="leading-none text-left">
                  <p className="text-[10px] text-white/60 font-semibold tracking-wide mb-1">Phone number:</p>
                  <p className="text-base font-extrabold text-white tracking-tight group-hover:text-secondary transition-colors">+91 76000 78862</p>
                </div>
              </a>

              <a href="tel:02812990030" className="flex items-center gap-3 px-5 border-r border-white/25 hover:bg-white/5 transition-colors group shrink-0">
                <Phone className="h-5 w-5 text-secondary shrink-0" fill="currentColor" />
                <div className="leading-none text-left">
                  <p className="text-[10px] text-white/60 font-semibold tracking-wide mb-1">Phone number:</p>
                  <p className="text-base font-extrabold text-white tracking-tight group-hover:text-secondary transition-colors">0281 2990030</p>
                </div>
              </a>

              <a href="mailto:classicsolution931@gmail.com" className="flex items-center gap-3 px-5 border-r border-white/25 hover:bg-white/5 transition-colors group shrink-0">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <div className="leading-none text-left">
                  <p className="text-[10px] text-white/60 font-semibold tracking-wide mb-1">E-mail address:</p>
                  <p className="text-sm font-extrabold text-white tracking-tight group-hover:text-secondary transition-colors">classicsolution931@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Desktop Socials */}
            <div className="flex items-center gap-3 pl-4 shrink-0">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://x.com" aria-label="X / Twitter" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z"/></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── MOBILE ONLY OVERLAY DETAILS (placed vertically below image as shown in screenshot) ── */}
      <div className="flex md:hidden flex-col items-center text-center px-6 py-8 bg-brand-light gap-5 border-t border-brand-border/20">
        <h3 className="text-base sm:text-lg font-bold font-display text-primary leading-snug px-2">
          {slide.title}
        </h3>
        <Link
          href={slide.link}
          className="px-8 py-3 bg-secondary hover:bg-secondary-light text-white font-extrabold rounded-none shadow-md transition-all text-xs uppercase tracking-wider"
        >
          Learn More
        </Link>
      </div>

    </div>
  );
}
