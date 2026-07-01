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
    value: "+91 85848 55470",
    href: "tel:+918584855470",
    sub: "Mon-Sat, 10 AM – 6 PM",
  },
  {
    icon: Phone,
    label: "Corporate Office",
    value: "033 4068 7162",
    href: "tel:03340687162",
    sub: "Kolkata, West Bengal",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@macj.in",
    href: "mailto:info@macj.in",
    sub: "We reply within 24 hours",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 10:00 AM – 6:00 PM",
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
        titleHighlight="Contact MACJ Team"
        subtitle="Have a question about home health check-ups or ready to book your property inspection? Fill out the form or reach our national helpline."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── CONTACT DETAILS STRIP ── */}
      <section className="py-12 sm:py-16 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
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
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5947765103444!2d88.3516599760773!3d22.55684697950269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277051df52b47%3A0xe9dfa5db0c6ffce2!2sJawaharlal%20Nehru%20Rd%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MACJ Corporate Office Location"
                />
              </div>
              <p className="text-xs text-brand-muted mt-2">
                3rd Floor, 30D, Jawaharlal Nehru Road, Taltala, Kolkata, West Bengal 700016
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full bg-white border border-brand-border/30 rounded-3xl shadow-premium overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── PAN INDIA SERVICE GRID NOTE ── */}
      <section className="py-12 bg-primary px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">PAN India Franchise Presence</h2>
          <p className="text-white/65 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            MACJ operates across major Indian metropolitan areas including Kolkata, Mumbai, Pune, Bengaluru, and Gurgaon. Get in touch to schedule a technician visit at your project site.
          </p>
        </div>
      </section>
    </div>
  );
}
