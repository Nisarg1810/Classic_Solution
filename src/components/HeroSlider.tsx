"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2021/11/Macj-Web-Banner-2021-01.jpg",
    badge: "MNC Collaboration",
    title: "MACJ A Buyer's Choice\nHome Inspections",
    titleColor: "text-white",
    desc: "Complete health & safety check-up of properties. Inspected by an experienced team using advanced technology, in collaboration with ABCHI USA.",
    cta: { label: "Book an Inspection", href: "/contact" },
    ctaSecondary: { label: "About Us", href: "/about" },
    textDark: false,
  },
  {
    id: 2,
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2021/11/Macj-Web-Banner-2021-02.jpg",
    badge: "Infrared Inspection",
    title: "Electrical Safety &\nHotspot Detection",
    titleColor: "text-white",
    desc: "Detect overloaded circuits, loose connections, and thermal anomalies in distribution boards and panels using advanced thermal imaging.",
    cta: { label: "Electrical Inspections", href: "/services/electrical" },
    ctaSecondary: { label: "Book Now", href: "/contact" },
    textDark: false,
  },
  {
    id: 3,
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2021/11/Macj-Web-Banner-2021-03.jpg",
    badge: "Moisture Assessment",
    title: "Damp, Seepage &\nLeakage Solutions",
    titleColor: "text-white",
    desc: "Non-destructive moisture mapping with thermal imaging to trace leakage routes in walls, terraces, and ceilings without breakage.",
    cta: { label: "Moisture & Damp", href: "/services/moisture-damp" },
    ctaSecondary: { label: "Book Now", href: "/contact" },
    textDark: false,
  },
  {
    id: 4,
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2021/11/Macj-Web-Banner-2021-04.jpg",
    badge: "For Real Estate Developers",
    title: "Construction Finishing\nInspection",
    titleColor: "text-white",
    desc: "A win-win for developers and buyers. Ensure quality control, defect-free handovers, and compliance with RERA defect liability guidelines.",
    cta: { label: "Developer Services", href: "/services/construction-finishing" },
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
    <section
      className="relative w-full overflow-hidden bg-brand-light"
      style={{ height: "clamp(380px, 60vw, 680px)" }}
    >
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
            className="object-cover object-center"
            sizes="100vw"
            unoptimized
          />
          {/* Gradient: stronger on mobile for readability, fades right on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30 sm:to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-xl"
          >
            {/* Badge */}
            <span
              className={`inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1 sm:py-1.5 rounded-full mb-3 sm:mb-4 ${
                slide.textDark
                  ? "bg-secondary/10 text-secondary border border-secondary/20"
                  : "bg-white/15 text-white border border-white/25"
              }`}
            >
              {slide.badge}
            </span>

            {/* Title — fluid scale */}
            <h1
              className={`font-extrabold font-display leading-[1.1] tracking-tight mb-3 sm:mb-4 whitespace-pre-line ${slide.titleColor}`}
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.75rem)" }}
            >
              {slide.title}
            </h1>

            {/* Description — show on sm+ */}
            <p
              className={`hidden sm:block text-xs sm:text-sm leading-relaxed font-light mb-5 sm:mb-8 max-w-sm ${
                slide.textDark ? "text-brand-muted" : "text-white/80"
              }`}
            >
              {slide.desc}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Link
                href={slide.cta.href}
                className="px-4 sm:px-7 py-2 sm:py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 active:scale-95 text-xs sm:text-sm"
              >
                {slide.cta.label}
              </Link>
              <Link
                href={slide.ctaSecondary.href}
                className={`px-4 sm:px-7 py-2 sm:py-3.5 font-bold rounded-full border transition-all duration-300 active:scale-95 text-xs sm:text-sm ${
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

      {/* Prev / Next Arrows + Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 lg:left-12 z-20 flex items-center gap-2">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/20 hover:bg-white/40 border border-white/30 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-105"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Slide dots */}
        <div className="flex items-center gap-1.5 ml-2 sm:ml-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "next" : "prev")}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 sm:w-6 h-2 bg-secondary"
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
