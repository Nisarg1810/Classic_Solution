"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "py-3 glassmorphism shadow-premium"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <a
              href="#hero"
              onClick={(e) => handleClick(e, "#hero")}
              className="flex items-center gap-2 group"
            >
              <div className="relative h-12 w-48">
                <Image
                  src="/logo.png"
                  alt="Classic Solution Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm font-medium text-brand-text hover:text-secondary transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:02812990030"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-secondary" />
                <span>0281 2990030</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="rounded-xl bg-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-secondary-light hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Inspection
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center p-2 rounded-lg text-primary md:hidden hover:bg-black/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[72px] z-30 md:hidden glassmorphism shadow-lg border-b border-white/20 p-6 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-base font-semibold text-brand-text hover:text-secondary transition-colors py-2 border-b border-black/5"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-4 mt-2">
              <a
                href="tel:02812990030"
                className="flex items-center justify-center gap-2 text-base font-semibold text-primary py-3 rounded-xl border border-primary/20 hover:bg-primary/5 transition-all"
              >
                <PhoneCall className="h-4 w-4 text-secondary" />
                <span>0281 2990030</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleClick(e, "#contact")}
                className="rounded-xl bg-secondary py-3 text-center text-base font-semibold text-white shadow-md hover:bg-secondary-light transition-all"
              >
                Book Inspection
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
