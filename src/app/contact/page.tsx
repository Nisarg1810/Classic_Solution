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
    label: "Phone",
    value: "0281 2990030",
    href: "tel:02812990030",
    sub: "Mon-Sat, 9 AM – 7 PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "classicsolution931@gmail.com",
    href: "mailto:classicsolution931@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Office 9, Ground Floor, Anmol Complex, Raj Palace Chowk, Sadhu Vaswani Road, Rajkot, Gujarat – 360005",
    href: "https://maps.google.com",
    sub: "Rajkot, Gujarat",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:00 AM – 7:00 PM",
    href: null,
    sub: "Sunday: Closed",
  },
];

const servicesOffered = [
  "Thermal Imaging Inspection",
  "Electrical Hotspot Detection",
  "Moisture Detection",
  "Energy Audit",
  "Property Inspection",
  "Industrial Inspection",
  "Solar Thermal Inspection",
  "Preventive Maintenance Consulting",
];

export default function ContactPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Get In Touch"
        title="Book an Inspection or"
        titleHighlight="Contact Our Team"
        subtitle="Have a question or ready to schedule a thermal imaging inspection? Fill in the form below or reach us directly by phone or email."
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
                Book Your Inspection Today
              </h2>
              <p className="text-sm sm:text-base text-brand-muted leading-relaxed font-light mt-3">
                Don&apos;t let hidden electrical faults, moisture issues, or energy losses put your facility at risk. Get a professional thermal inspection and preventive maintenance plan today.
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
                Our Office Location
              </h3>
              <div className="w-full rounded-2xl overflow-hidden border border-brand-border/30 shadow-premium">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8028795764043!2d70.77484431541018!3d22.28549994974913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca18aa2f89f3%3A0x1a87b3281237e8bb!2sSadhu%20Vaswani%20Rd%2C%20Rajkot%2C%20Gujarat%20360005!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Classic Solution Office Location"
                />
              </div>
              <p className="text-xs text-brand-muted mt-2">
                Office 9, Ground Floor, Anmol Complex, Raj Palace Chowk, Sadhu Vaswani Road, Rajkot, Gujarat – 360005
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="w-full bg-white border border-brand-border/30 rounded-3xl shadow-premium overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── PAN INDIA COVERAGE NOTE ── */}
      <section className="py-10 sm:py-14 bg-primary px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mb-3">PAN India Service Coverage</h2>
          <p className="text-white/65 text-sm sm:text-base max-w-xl mx-auto font-light">
            While we are based in Rajkot, Gujarat, Classic Solution provides inspection services across major cities in India. Contact us to confirm availability at your location.
          </p>
        </div>
      </section>
    </div>
  );
}
