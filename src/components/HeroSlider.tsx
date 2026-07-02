"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react";

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
      style={{ height: "clamp(240px, 56vw, 460px)" }}
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
      <div className="relative z-10 h-full mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 flex items-center pb-8 sm:pb-12">
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
              className={`font-extrabold font-display leading-[1.08] tracking-tight mb-3 sm:mb-5 whitespace-pre-line ${slide.titleColor}`}
              style={{ fontSize: "clamp(1rem, 2.8vw, 2.5rem)" }}
            >
              {slide.title}
            </h1>

            {/* Learn More Button */}
            {slide.cta && (
              <div className={`flex gap-3 ${slide.mobileOnly ? "justify-center" : ""}`}>
                <Link
                  href={slide.cta.href}
                  className="px-6 py-2.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-xs uppercase tracking-wider"
                >
                  {slide.cta.label}
                </Link>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows positioned above the bottom bar */}
      <div className="absolute bottom-12 sm:bottom-16 left-4 sm:left-12 lg:left-16 z-20 flex items-center gap-1.5">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="h-8 w-10 bg-white/70 hover:bg-white text-black flex items-center justify-center transition-all duration-200 shadow-sm"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="h-8 w-10 bg-white/70 hover:bg-white text-black flex items-center justify-center transition-all duration-200 shadow-sm"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Bottom Info Bar Overlay (matching the screenshot exactly) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/90 to-black/50 text-white py-1.5 border-t border-white/5 hidden md:block">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center justify-between text-[10px] sm:text-xs">
          <div className="flex items-center gap-6">
            <a href="tel:+917600078862" className="hover:text-secondary flex items-center gap-2 transition-colors">
              <span className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                <Phone className="h-3 w-3 fill-current" />
              </span>
              <div>
                <p className="text-[9px] text-white/55 leading-none">Phone number:</p>
                <p className="font-bold mt-0.5">76000 78862</p>
              </div>
            </a>
            <a href="tel:+912812990030" className="hover:text-secondary flex items-center gap-2 transition-colors">
              <span className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                <Phone className="h-3 w-3 fill-current" />
              </span>
              <div>
                <p className="text-[9px] text-white/55 leading-none">Phone number:</p>
                <p className="font-bold mt-0.5">0281 2990030</p>
              </div>
            </a>
            <a href="mailto:classicsolution931@gmail.com" className="hover:text-secondary flex items-center gap-2 transition-colors">
              <span className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
                <Mail className="h-3 w-3 fill-current" />
              </span>
              <div>
                <p className="text-[9px] text-white/55 leading-none">E-mail address:</p>
                <p className="font-bold mt-0.5">classicsolution931@gmail.com</p>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
            <span>•</span>
            <a href="#" className="hover:text-secondary transition-colors">X</a>
            <span>•</span>
            <a href="#" className="hover:text-secondary transition-colors">YouTube</a>
            <span>•</span>
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <span>•</span>
            <a href="#" className="hover:text-secondary transition-colors">Pinterest</a>
            <span>•</span>
            <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
