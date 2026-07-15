"use client";

import { motion } from "framer-motion";
import {
  Phone, Mail, MapPin, Clock, MessageSquare, CheckSquare,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const contactDetails = [
  {
    icon: Phone,
    label: "National Helpline",
    value: "76000 78862",
    href: "tel:+917600078862",
    sub: "Mon-Sat, 9:30 AM – 7:30 PM",
  },
  {
    icon: Phone,
    label: "Telephone",
    value: "0281 2990030",
    href: "tel:+912812990030",
    sub: "Office line",
  },
  {
    icon: Mail,
    label: "Email",
    value: "classicsolution931@gmail.com",
    href: "mailto:classicsolution931@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:30 AM – 7:30 PM",
    href: null,
    sub: "Sunday: Closed",
  },
];

const servicesOffered = [
  "Complete Home Inspection",
  "Moisture & Seepage Diagnostics",
  "Infrared Electrical Inspection",
  "NRI Property Care checkup",
  "Construction Finishing Audit",
  "Pre-Handover Quality check",
  "Waterproofing & Damp Consulting"
];

export default function ContactPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Get In Touch"
        title="Schedule an Inspection or"
        titleHighlight="Contact Classic Solution Team"
        subtitle="Have a question about home health check-ups or ready to book your property inspection? Fill out the form or reach our national helpline."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── CONTACT DETAILS STRIP ── */}
      <section className="py-12 sm:py-16 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white border border-brand-border/30 rounded-2xl p-5 hover:shadow-premium transition-premium hover:border-secondary group"
                >
                  <div className="h-11 w-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-bold text-brand-muted uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-semibold text-primary hover:text-secondary transition-colors leading-snug block mb-1">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-primary leading-snug mb-1">{item.value}</p>
                  )}
                  <p className="text-xs text-brand-muted">{item.sub}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + INFO ── */}
      <section className="py-14 sm:py-20 bg-white px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Left: Info */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Why Contact Us</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2 leading-tight">
                Secure Your Property Value Today
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light mt-3">
                Don't sign key-handover checklists without checking structural, electrical, and plumbing safety. We provide certified digital checkup reports within 24-48 hours.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-primary font-display mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-secondary" />
                Services You Can Book
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {servicesOffered.map((svc, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-brand-text">
                    <CheckSquare className="h-4 w-4 text-secondary shrink-0" />
                    {svc}
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-base font-bold text-primary font-display mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                Corporate Head Office
              </h3>
              <div className="w-full rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                  <iframe
                    src="https://www.google.com/maps?q=Raj%20Palace,%20Hari%20Nagar,%20Rajkot,%20Gujarat%203600005,%20India&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Classic Solution Rajkot Corporate Office Location"
                />
              </div>
              <p className="text-xs text-brand-muted mt-2">
                Raj Palace, Hari Nagar, Rajkot, Gujarat 360005, India
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full bg-white border border-brand-border/30 rounded-3xl shadow-premium overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </section>


    </div>
  );
}
