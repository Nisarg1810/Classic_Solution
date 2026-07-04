"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormFields {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}

const serviceOptions = [
  "Thermal Imaging Inspection",
  "Electrical Hotspot Detection",
  "Moisture Detection",
  "Energy Audit",
  "Property Inspection",
  "Industrial Inspection",
  "Solar Thermal Inspection",
  "Preventive Maintenance Consulting",
  "Digital Inspection Report",
  "Safety Recommendations",
];

export default function ContactForm() {
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!fields.name.trim()) newErrors.name = "Full name is required.";

    if (!fields.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!fields.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(fields.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (10+ digits).";
    }

    if (!fields.service) newErrors.service = "Please select a service.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFields({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="w-full bg-white border border-brand-border/40 p-8 sm:p-10 rounded-3xl shadow-premium relative overflow-hidden">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6 border border-green-200 shadow-sm">
              <CheckCircle2 className="h-10 w-10 animate-bounce" />
            </div>
            <h3 className="text-2xl font-bold font-display text-primary">Inspection Booked Successfully!</h3>
            <p className="text-brand-muted mt-3 max-w-sm text-sm sm:text-base">
              Thank you for choosing MACJ. One of our inspection coordinators will contact you shortly to confirm your scheduled visit.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-2.5 bg-primary hover:bg-primary-light text-white text-sm font-semibold rounded-full shadow transition-all duration-300 hover:scale-105"
            >
              Book Another Inspection
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-6"
            noValidate
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-primary">Schedule a site inspection</h3>
              <p className="text-xs sm:text-sm text-secondary mt-1 font-medium">
                Get a free phone consultation and lock in an appointment.
              </p>
            </div>

            {status === "error" && (
              <div className="bg-red-50 text-red-700 text-xs sm:text-sm p-4 rounded-xl border border-red-200 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <span>Something went wrong. Please check your network and try again.</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-primary uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                    errors.name ? "border-red-500 focus:border-red-500" : "border-brand-border/60 focus:border-secondary"
                  }`}
                />
                {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name}</span>}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-bold text-primary uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={fields.phone}
                  onChange={handleChange}
                  placeholder="Mobile number"
                  className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                    errors.phone ? "border-red-500 focus:border-red-500" : "border-brand-border/60 focus:border-secondary"
                  }`}
                />
                {errors.phone && <span className="text-xs text-red-500 font-semibold">{errors.phone}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-bold text-primary uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={fields.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-brand-border/60 focus:border-secondary"
                }`}
              />
              {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-xs font-bold text-primary uppercase tracking-wider">Required Service</label>
              <select
                id="service"
                name="service"
                value={fields.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-secondary/20 bg-white transition-all ${
                  errors.service ? "border-red-500 focus:border-red-500" : "border-brand-border/60 focus:border-secondary"
                }`}
              >
                <option value="">-- Select Service Type --</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <span className="text-xs text-red-500 font-semibold">{errors.service}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-bold text-primary uppercase tracking-wider">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={fields.message}
                onChange={handleChange}
                rows={3}
                placeholder="Tell us about your facility or specific concern"
                className="w-full px-4 py-3 rounded-xl border text-sm sm:text-base border-brand-border/60 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all text-secondary placeholder:text-secondary/50"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 w-full py-4 bg-secondary hover:bg-secondary-light disabled:bg-secondary/60 text-white font-bold text-base rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none hover:-translate-y-0.5 active:translate-y-0"
            >
              {status === "submitting" ? "Processing Booking..." : "Submit Booking Request"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
