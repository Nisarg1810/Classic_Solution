"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "All Services", href: "/services" },
      { name: "Thermal Imaging", href: "/services#thermal" },
      { name: "Moisture Detection", href: "/services#moisture" },
      { name: "Electrical Inspection", href: "/services#electrical" },
      { name: "Energy Audit", href: "/services#energy" },
    ],
  },
  { name: "Process", href: "/process" },
  { name: "RERA Act", href: "/rera" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen ? "py-2 bg-white/95 backdrop-blur-md shadow-premium border-b border-brand-border/30" : "py-4 bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative h-20 w-72">
                <Image
                  src="/logo.png"
                  alt="Classic Solution Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
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
                      className={`flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-lg transition-colors relative group ${
                        isActive(link.href)
                          ? "text-secondary"
                          : "text-brand-text hover:text-secondary"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="h-3.5 w-3.5 opacity-60 transition-transform duration-200 group-hover:rotate-180" />
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
                          className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-premium border border-brand-border/30 py-1.5 z-50"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="block px-4 py-2.5 text-sm text-brand-text hover:text-secondary hover:bg-brand-light transition-colors"
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
                    className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors relative group ${
                      isActive(link.href)
                        ? "text-secondary"
                        : "text-brand-text hover:text-secondary"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-2 right-2 h-0.5 bg-secondary transition-all duration-300 ${
                        isActive(link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:02812990030"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-secondary" />
                <span>0281 2990030</span>
              </a>
              <Link
                href="/contact"
                className="rounded-xl bg-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-secondary-light hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book Inspection
              </Link>
            </div>

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
              className="fixed inset-x-0 top-[96px] z-50 md:hidden bg-white shadow-xl border-b border-brand-border/60 p-6 flex flex-col gap-5 max-h-[calc(100vh-96px)] overflow-y-auto"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base font-semibold py-3 px-3 rounded-xl border-b border-black/5 transition-colors ${
                        isActive(link.href)
                          ? "text-secondary bg-secondary/5"
                          : "text-brand-text hover:text-secondary hover:bg-brand-light"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="pl-4 flex flex-col gap-0.5 mt-1 mb-2">
                        {link.dropdown.slice(1).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-brand-muted hover:text-secondary py-2 px-3 rounded-lg transition-colors"
                          >
                            → {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="tel:02812990030"
                  className="flex items-center justify-center gap-2 text-base font-semibold text-primary py-3 rounded-xl border border-primary/20 hover:bg-primary/5 transition-all"
                >
                  <PhoneCall className="h-4 w-4 text-secondary" />
                  <span>0281 2990030</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-secondary py-3 text-center text-base font-semibold text-white shadow-md hover:bg-secondary-light transition-all"
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
