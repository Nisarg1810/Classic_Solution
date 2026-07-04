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
    titleColor: "text-white text-left",
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
    <div className="relative w-full">
      <section
        className="relative w-full overflow-hidden bg-brand-light"
        style={{ height: "clamp(440px, 80vw, 600px)" }}
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
              className="object-cover object-right md:object-center"
              sizes="100vw"
              unoptimized
            />
            {/* Gradient overlays */}
            {!slide.mobileOnly && (
              <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/30 to-transparent" />
            )}
            {/* Bottom-to-top dark fade for the contact bar area */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="relative z-10 h-full mx-auto max-w-5xl px-8 sm:px-12 lg:px-16 flex items-center pb-8 sm:pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${current}`}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`w-full max-w-[85%] sm:max-w-sm md:max-w-md lg:max-w-xl ${
                slide.mobileOnly ? "block md:hidden text-left" : "block text-left"
              }`}
            >
              {/* Title � fluid scale */}
              <h1
                className={`font-extrabold font-display leading-[1.08] tracking-tight mb-3 sm:mb-5 whitespace-pre-line ${slide.titleColor}`}
                style={{ fontSize: "clamp(1.15rem, 4vw, 2.5rem)" }}
              >
                {slide.title}
              </h1>

              {/* Learn More Button */}
              {slide.cta && (
                <div className="flex gap-3 text-left">
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

        {/* Navigation Arrows � moved to bottom bar */}
      </section>

      {/* Bottom Info Bar � transparent, sits over the hero gradient */}
      <div className="absolute bottom-0 left-0 right-0 z-20 text-white py-4 md:py-5 border-t border-b border-white/25">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">

          {/* -- MOBILE layout (< md): single row � arrows | contact | socials -- */}
          <div className="flex md:hidden items-center justify-between gap-2">
            {/* Arrows */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button onClick={prev} aria-label="Previous slide"
                className="h-8 w-9 bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-200 border border-white/30 rounded">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} aria-label="Next slide"
                className="h-8 w-9 bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all duration-200 border border-white/30 rounded">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Single phone on mobile */}
            <a href="tel:+917600078862" className="flex items-center gap-2 hover:text-secondary transition-colors shrink-0">
              <Phone className="h-4 w-4 text-secondary shrink-0" fill="currentColor" />
              <span className="text-xs font-bold text-white tracking-tight">76000 78862</span>
            </a>

            {/* Social icons (compact) */}
            <div className="flex items-center gap-2.5 shrink-0">
              <a href="https://facebook.com" aria-label="Facebook" className="text-white hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-white hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="text-white hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z"/></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* -- DESKTOP layout (= md): table-style with dividers -- */}
          <div className="hidden md:flex items-stretch justify-between gap-0 overflow-hidden">

            {/* Prev / Next Arrows � square buttons */}
            <div className="flex items-center gap-1.5 pr-5 border-r border-white/25 shrink-0">
              <button onClick={prev} aria-label="Previous slide"
                className="h-9 w-9 bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-all duration-200 border border-white/30">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} aria-label="Next slide"
                className="h-9 w-9 bg-white/20 hover:bg-white/35 text-white flex items-center justify-center transition-all duration-200 border border-white/30">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Contact Cells � table-like with pipe dividers */}
            <div className="flex items-stretch flex-1">

              {/* Phone 1 */}
              <a href="tel:+917600078862"
                className="flex items-center gap-3 px-5 border-r border-white/25 hover:bg-white/5 transition-colors group shrink-0">
                <Phone className="h-5 w-5 text-secondary shrink-0" fill="currentColor" />
                <div className="leading-none">
                  <p className="text-[10px] text-white/60 font-semibold tracking-wide mb-1">Phone number:</p>
                  <p className="text-base font-extrabold text-white tracking-tight group-hover:text-secondary transition-colors">+91 76000 78862</p>
                </div>
              </a>

              {/* Phone 2 */}
              <a href="tel:+912812990030"
                className="flex items-center gap-3 px-5 border-r border-white/25 hover:bg-white/5 transition-colors group shrink-0">
                <Phone className="h-5 w-5 text-secondary shrink-0" fill="currentColor" />
                <div className="leading-none">
                  <p className="text-[10px] text-white/60 font-semibold tracking-wide mb-1">Phone number:</p>
                  <p className="text-base font-extrabold text-white tracking-tight group-hover:text-secondary transition-colors">0281 2990030</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:classicsolution931@gmail.com"
                className="flex items-center gap-3 px-5 border-r border-white/25 hover:bg-white/5 transition-colors group shrink-0">
                <Mail className="h-5 w-5 text-secondary shrink-0" />
                <div className="leading-none">
                  <p className="text-[10px] text-white/60 font-semibold tracking-wide mb-1">E-mail address:</p>
                  <p className="text-sm font-extrabold text-white tracking-tight group-hover:text-secondary transition-colors">classicsolution931@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Social Icons */}
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
              <a href="https://pinterest.com" aria-label="Pinterest" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white/80 hover:text-secondary transition-colors">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

