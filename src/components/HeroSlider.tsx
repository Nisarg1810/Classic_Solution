"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/hero_background.png",
    badge: "Technology-Driven Inspection",
    title: "Thermal Imaging &\nPreventive Maintenance",
    titleColor: "text-primary",
    desc: "Advanced infrared inspection to detect hidden electrical hotspots, moisture, and energy losses — before they become costly failures.",
    cta: { label: "Book an Inspection", href: "/contact" },
    ctaSecondary: { label: "Our Services", href: "/services" },
    textDark: true,
  },
  {
    id: 2,
    image: "/images/thermal_camera_check.png",
    badge: "Electrical Safety",
    title: "Electrical Hotspot\nDetection",
    titleColor: "text-white",
    desc: "Pinpoint overloaded circuits, loose connections, and faulty components in switchboards and panels — prevent electrical fires.",
    cta: { label: "Learn More", href: "/services#electrical" },
    ctaSecondary: { label: "Book Now", href: "/contact" },
    textDark: false,
  },
  {
    id: 3,
    image: "/images/underground_leak_detector.png",
    badge: "Moisture Detection",
    title: "Damp & Seepage\nAssessment",
    titleColor: "text-white",
    desc: "Non-invasive moisture scanning to locate hidden water leaks, damp walls, and seepage without any drilling or demolition.",
    cta: { label: "Learn More", href: "/services#moisture" },
    ctaSecondary: { label: "Book Now", href: "/contact" },
    textDark: false,
  },
  {
    id: 4,
    image: "/images/metal_detector_drilling.png",
    badge: "Property Inspection",
    title: "Complete Property\nHealth Check-Up",
    titleColor: "text-white",
    desc: "Comprehensive inspection of walls, ceilings, floors, electrical systems, and plumbing — a complete health report for your property.",
    cta: { label: "Learn More", href: "/services#property" },
    ctaSecondary: { label: "Book Now", href: "/contact" },
    textDark: false,
  },
];

const SLIDE_INTERVAL = 5000;

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

  const textVariants = {
    enter: { opacity: 0, y: 24 },
    center: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
  };

  return (
    <section className="relative w-full h-[480px] sm:h-[560px] lg:h-[680px] overflow-hidden bg-brand-light">
      {/* Background Images */}
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
            alt={slide.title.replace("\n", " ")}
            fill
            priority
            className="object-cover"
          />
          {/* Overlay: gradient from left so text is legible */}
          <div
            className={`absolute inset-0 ${
              slide.textDark
                ? "bg-gradient-to-r from-white/90 via-white/70 to-transparent"
                : "bg-gradient-to-r from-primary/85 via-primary/60 to-transparent"
            }`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-xl"
          >
            {/* Badge */}
            <span
              className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${
                slide.textDark
                  ? "bg-secondary/10 text-secondary border border-secondary/20"
                  : "bg-white/15 text-white border border-white/25"
              }`}
            >
              {slide.badge}
            </span>

            {/* Title */}
            <h1
              className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-[1.1] tracking-tight mb-4 whitespace-pre-line ${slide.titleColor}`}
            >
              {slide.title}
            </h1>

            {/* Description */}
            <p
              className={`text-sm sm:text-base leading-relaxed font-light mb-8 max-w-md ${
                slide.textDark ? "text-brand-muted" : "text-white/80"
              }`}
            >
              {slide.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={slide.cta.href}
                className="px-7 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 text-sm"
              >
                {slide.cta.label}
              </Link>
              <Link
                href={slide.ctaSecondary.href}
                className={`px-7 py-3.5 font-bold rounded-full border transition-all duration-300 active:scale-95 text-sm ${
                  slide.textDark
                    ? "border-primary text-primary hover:bg-primary hover:text-white"
                    : "border-white/40 text-white hover:bg-white/15"
                }`}
              >
                {slide.ctaSecondary.label}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev / Next Arrows */}
      <div className="absolute bottom-6 left-6 sm:left-8 lg:left-12 z-20 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Slide dots */}
        <div className="flex items-center gap-1.5 ml-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-secondary"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          key={`progress-${current}`}
          className="h-full bg-secondary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: SLIDE_INTERVAL / 1000, ease: "linear" }}
        />
      </div>
    </section>
  );
}
