"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

export default function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative bg-primary overflow-hidden py-10 sm:py-14 md:py-20 px-4 sm:px-8 lg:px-12">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,0,22,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,44,84,0.9),transparent_70%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs text-white/50 mb-4 sm:mb-5 flex-wrap"
          >
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1 sm:gap-1.5">
                <ChevronRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white/30" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-secondary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80 font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Badge */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/25 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-secondary text-[10px] sm:text-xs font-bold tracking-wider uppercase mb-3 sm:mb-4 backdrop-blur-sm"
          >
            {badge}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-display text-white leading-tight max-w-3xl"
        >
          {title}{" "}
          {titleHighlight && (
            <span className="text-secondary">{titleHighlight}</span>
          )}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/65 leading-relaxed max-w-2xl font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
