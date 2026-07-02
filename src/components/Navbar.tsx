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
      { name: "MACJ - ABCHI India", href: "/about/about-macj-abchi" },
      { name: "ABCHI USA", href: "/about/about-abchi-usa" },
      { name: "Management Profile", href: "/about/about-macj-india" },
      { name: "Milestones", href: "/about/milestones-achieved" },
      { name: "Gratitude", href: "/about/our-gratitude" },
      { name: "InterNACHI Affiliation", href: "/about/internachi" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Real Estate Value Chain", href: "/services/value-chain" },
      { name: "Complete Home Inspection", href: "/services/home-inspection" },
      { name: "Moisture & Seepage (Thermal)", href: "/services/moisture-damp" },
      { name: "Electrical Inspections", href: "/services/electrical" },
      { name: "NRI Property Care", href: "/services/nri-property-care" },
      { name: "Construction Finishing", href: "/services/construction-finishing" },
      { name: "Stakeholder Win-Win", href: "/services/stakeholder-benefits" },
    ],
  },
  {
    name: "News",
    href: "#",
    dropdown: [
      { name: "Home Inspection News", href: "/news#home-inspection" },
      { name: "RERA Updates", href: "/rera" },
      { name: "MACJ Gallery", href: "/gallery" },
      { name: "Magicbricks Alliance", href: "/news#magicbricks" },
      { name: "Pidilite Alliance", href: "/news#pidilite" },
    ],
  },
  {
    name: "Our Clients",
    href: "#",
    dropdown: [
      { name: "Testimonials", href: "/#testimonials" },
      { name: "Our Clients", href: "/news" },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-premium`}
      >

        {/* Main Navigation Row */}
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-3">
          <div className="flex items-center justify-between relative">
            {/* Logo Row */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Link href="/" className="flex items-center gap-3 group py-1">
                <div className="relative h-14 w-40 sm:h-16 sm:w-48">
                  <Image
                    src="/logo.svg"
                    alt="Classic Solution Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === "#") {
                          e.preventDefault();
                          setOpenDropdown(openDropdown === link.name ? null : link.name);
                        }
                      }}
                      className={`flex items-center gap-1 text-base font-extrabold px-3.5 py-2 rounded-lg transition-colors relative group ${
                        isActive(link.href)
                          ? "text-secondary"
                          : "text-brand-text hover:text-secondary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-3 w-3 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
                      <span
                        className={`absolute bottom-0 left-2 right-2 h-0.5 bg-secondary transition-all duration-300 ${
                          isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </Link>
                    <AnimatePresence>
                      {openDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-premium border border-brand-border/30 py-1.5 z-50"
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
                    key={link.name}
                    href={link.href}
                    className={`text-base font-extrabold px-3.5 py-2 rounded-lg transition-colors relative group ${"icon" in link && link.icon ? "flex items-center" : ""} ${
                      isActive(link.href)
                        ? "text-secondary"
                        : "text-brand-text hover:text-secondary"
                    }`}
                    aria-label={link.name}
                  >
                    {"icon" in link && link.icon ? (
                      <Home className="h-5 w-5" />
                    ) : (
                      link.name
                    )}
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-0.5 bg-secondary transition-all duration-300 ${
                        isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                )
              )}
            </nav>


            {/* Mobile Hamburger */}
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-40 md:hidden"
            />
            {/* Drawer Container */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-x-0 top-[64px] z-50 md:hidden bg-white shadow-xl border-b border-brand-border/60 p-6 flex flex-col gap-5 max-h-[calc(100vh-64px)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="border-b border-black/5 last:border-0 pb-1">
                    {link.dropdown ? (
                      <button
                        onClick={() =>
                          setExpandedMobileMenu(
                            expandedMobileMenu === link.name ? null : link.name
                          )
                        }
                        className="w-full flex items-center justify-between text-base font-semibold py-3 px-3 rounded-xl transition-colors text-brand-text hover:text-secondary"
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
                        className={`block text-base font-semibold py-3 px-3 rounded-xl transition-colors ${
                          isActive(link.href)
                            ? "text-secondary bg-secondary/5"
                            : "text-brand-text hover:text-secondary hover:bg-brand-light"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                    
                    {/* Dropdown Items for Mobile */}
                    <AnimatePresence initial={false}>
                      {link.dropdown && expandedMobileMenu === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden pl-4 flex flex-col gap-0.5 mt-1 mb-2 bg-brand-light/50 rounded-xl"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="text-sm text-brand-muted hover:text-secondary py-2.5 px-4 rounded-lg transition-colors flex items-center gap-1"
                            >
                              <span>•</span>
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>
              

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
