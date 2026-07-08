"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/", icon: true },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "Company Details", href: "/about" },
      { name: "Company Vision", href: "/about/vision" },
    ],
  },
  {
    name: "Our Services",
    href: "/services",
    dropdown: [
      { name: "Complete Home / Property Inspection", href: "/services/home-inspection" },
      { name: "Moisture / Damp / Leakage / Seepage Inspections (Thermal)", href: "/services/moisture-damp" },
      { name: "Electrical Inspections of a Home / Property", href: "/services/electrical" },
      { name: "Complete Property Care for NRIs / CCCs", href: "/services/nri-property-care" },
      { name: "Construction Finishing & Win–Win for Stake Holders", href: "/services/construction-finishing" },
      { name: "Energy Audit – Solar Panel Inspection", href: "/services/energy-audit/solar" },
      { name: "Energy Audit – Electrical Utilities", href: "/services/energy-audit/electrical" },
      { name: "Energy Audit – HVAC Inspection", href: "/services/energy-audit/hvac" },
      { name: "Ground Penetrating Radar (GPR) Services", href: "/services/gpr" },
    ],
  },
  {
    name: "News",
    href: "#",
    dropdown: [
      { name: "Home Inspection News", href: "/news#home-inspection" },
      { name: "RERA Updates", href: "/rera" },
      { name: "Gallery", href: "/gallery" },
    ],
  },
  {
    name: "Our Clients",
    href: "/our-clients",
    dropdown: [
      { name: "Testimonials", href: "/testimonials" },
      { name: "Our Clients", href: "/our-clients" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
    setExpandedMobileMenu(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "#") return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
          scrolled ? "shadow-md" : "shadow-premium"
        }`}
      >
        {/* Main Navigation Row */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between md:grid md:grid-cols-3 h-[100px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center shrink-0 group py-1">
              <div className="relative h-[84px] w-48 min-[360px]:w-52 min-[400px]:w-60">
                <Image
                  src="/logo.svg"
                  alt="Classic Solution Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden md:flex items-center justify-center gap-1">
              {navLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">

                  {/* Divider after Home icon */}
                  {index === 1 && (
                    <span className="mx-3 h-5 w-px bg-gray-200 inline-block shrink-0" />
                  )}

                  {link.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.name ? null : link.name)
                        }
                        className={`flex items-center gap-1 text-base font-bold px-3 py-2 rounded-lg transition-colors relative group whitespace-nowrap ${
                          isActive(link.href)
                            ? "text-secondary"
                            : "text-brand-text hover:text-secondary"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`h-4 w-4 opacity-60 transition-transform duration-200 ${
                            openDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                        <span
                          className={`absolute bottom-0.5 left-2 right-2 h-[2px] bg-secondary rounded-full transition-all duration-300 ${
                            isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.97 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-brand-border/30 py-2 z-50"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block px-4 py-2.5 text-sm font-medium text-brand-text hover:text-secondary hover:bg-brand-light transition-colors"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 text-base font-bold px-3 py-2 rounded-lg transition-colors relative group whitespace-nowrap ${
                        isActive(link.href)
                          ? "text-secondary"
                          : "text-brand-text hover:text-secondary"
                      }`}
                      aria-label={link.name}
                    >
                      {"icon" in link && link.icon ? (
                        <Home className="h-7 w-7" />
                      ) : (
                        link.name
                      )}
                      <span
                        className={`absolute bottom-0.5 left-2 right-2 h-[2px] bg-secondary rounded-full transition-all duration-300 ${
                          isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                  )}
                </div>
              ))}


            </nav>

            {/* ── Mobile Hamburger ── */}
            <div className="flex items-center justify-end gap-3">

              {/* Desktop Book Inspection button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-xs uppercase tracking-wider whitespace-nowrap"
              >
                Book Inspection
              </Link>

              {/* Mobile hamburger */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center justify-center p-2 rounded-lg text-primary hover:bg-black/5 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-[3px] bg-gradient-to-r from-primary via-secondary to-primary opacity-90" />
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-0 top-[103px] z-50 md:hidden bg-white shadow-xl border-b border-brand-border/60 flex flex-col max-h-[calc(100vh-103px)] overflow-y-auto"
            >
              <nav className="flex flex-col px-4 py-4 gap-0.5">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-black/5 last:border-0">
                    {link.dropdown ? (
                      <button
                        onClick={() =>
                          setExpandedMobileMenu(
                            expandedMobileMenu === link.name ? null : link.name
                          )
                        }
                        className="w-full flex items-center justify-between text-sm font-semibold py-3 px-3 rounded-xl transition-colors text-brand-text hover:text-secondary hover:bg-brand-light"
                      >
                        <span>{link.name}</span>
                        <ChevronRight
                          className={`h-4 w-4 text-brand-muted transition-transform duration-300 ${
                            expandedMobileMenu === link.name ? "rotate-90 text-secondary" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 text-sm font-semibold py-3 px-3 rounded-xl transition-colors ${
                          isActive(link.href)
                            ? "text-secondary bg-secondary/5"
                            : "text-brand-text hover:text-secondary hover:bg-brand-light"
                        }`}
                      >
                        {"icon" in link && link.icon && (
                          <Home className="h-4 w-4 shrink-0" />
                        )}
                        {link.name}
                      </Link>
                    )}

                    {/* Mobile dropdown items */}
                    <AnimatePresence initial={false}>
                      {link.dropdown && expandedMobileMenu === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden pl-4 flex flex-col gap-0.5 mb-2 bg-brand-light/50 rounded-xl mx-1"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-brand-muted hover:text-secondary py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2"
                            >
                              <span className="text-secondary text-xs">›</span>
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="px-4 pt-4 pb-2 border-t border-brand-border/30">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-sm uppercase tracking-wider"
                >
                  Book Inspection
                </Link>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
