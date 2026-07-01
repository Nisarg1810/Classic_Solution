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
    title: "Health & Safety Checkup of\nHomes / Offices alongwith Solutions",
    titleColor: "text-white text-center sm:text-left",
    cta: { label: "Learn More", href: "/services" },
    mobileOnly: true,
  },
  {
    id: 2,
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2021/11/Macj-Web-Banner-2021-02.jpg",
    title: "Damp / Seepage Assessment\nwith Solutions through\nThermal Imaging Technology",
    titleColor: "text-white",
    cta: { label: "Learn More", href: "/services/moisture-damp" },
    mobileOnly: false,
  },
  {
    id: 3,
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2021/11/Macj-Web-Banner-2021-03.jpg",
    title: "Electrical Inspections of a\nHome / Property",
    titleColor: "text-[#00245d]",
    cta: { label: "Learn More", href: "/services/electrical" },
    mobileOnly: false,
  },
  {
    id: 4,
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2021/11/Macj-Web-Banner-2021-04.jpg",
    title: "Construction Finishing Inspection\nfor Real Estate Developers",
    titleColor: "text-white",
    cta: { label: "Learn More", href: "/services/construction-finishing" },
    mobileOnly: false,
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
          {/* Transparent gradient overlay to enhance readability on overlay text, if slide contains desktop text */}
          {!slide.mobileOnly && (
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${current}`}
            variants={textVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-xl ${
              slide.mobileOnly ? "block md:hidden mx-auto text-center" : "block"
            }`}
          >
            {/* Title — fluid scale */}
            <h1
              className={`font-extrabold font-display leading-[1.1] tracking-tight mb-5 whitespace-pre-line ${slide.titleColor}`}
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 3.25rem)" }}
            >
              {slide.title}
            </h1>

            {/* Learn More Button */}
            {slide.cta && (
              <div className={`flex gap-3 ${slide.mobileOnly ? "justify-center" : ""}`}>
                <Link
                  href={slide.cta.href}
                  className="px-6 sm:px-8 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-xs sm:text-sm uppercase tracking-wider"
                >
                  {slide.cta.label}
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows + Dots */}
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

        {/* Dots */}
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
