import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 pt-12 sm:pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-10 sm:mb-12">

          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 group py-1">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 bg-white rounded-2xl p-2 shadow-lg flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Classic Solution Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 112px, 128px"
                />
              </div>
            </Link>
            <p className="text-sm text-white/70 mt-2 leading-relaxed font-light">
              MACJ – A Buyer's Choice Home Inspections is India's leading professional home and property inspection company. Formed in collaboration with ABCHI USA, we perform visual, non-destructive health & safety checks of properties using advanced technology and tools.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300 animate-pulse-slow" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300" aria-label="Instagram">
                <svg className="h-4 w-4 fill-none stroke-currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "RERA Guidelines", href: "/rera" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-secondary transition-colors font-light text-white/70">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase mb-6 font-display">Our Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Complete Home Inspection", href: "/services/home-inspection" },
                { label: "Moisture & Seepage Assessment", href: "/services/moisture-damp" },
                { label: "Electrical Safety Inspections", href: "/services/electrical" },
                { label: "NRI Property Care", href: "/services/nri-property-care" },
                { label: "Construction Finishing", href: "/services/construction-finishing" },
                { label: "Stakeholder Win-Win", href: "/services/stakeholder-benefits" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-secondary transition-colors font-light text-white/70">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4 text-sm lg:col-span-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase mb-2 font-display">Corporate Office</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span className="font-light text-white/70">Raj Palace, Hari Nagar, Rajkot, Gujarat 360005, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-secondary shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+917600078862" className="hover:text-secondary transition-colors font-light text-white/70">76000 78862</a>
                <a href="tel:+912812990030" className="hover:text-secondary transition-colors font-light text-white/70">0281 2990030</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-secondary shrink-0" />
              <a href="mailto:classicsolution931@gmail.com" className="hover:text-secondary transition-colors font-light text-white/70">classicsolution931@gmail.com</a>
            </div>
            <div className="flex items-start gap-3 mt-2">
              <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Mon - Sat: 10:00 AM - 6:00 PM</p>
                <p className="text-white/50 text-xs font-light">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="w-full min-h-[240px] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-white/5">
            <p className="text-xs font-bold text-white/60 mb-2 uppercase px-4 pt-2">Rajkot Office Location</p>
              <iframe
                src="https://www.google.com/maps?q=Raj%20Palace,%20Hari%20Nagar,%20Rajkot,%20Gujarat%203600005,%20India&output=embed"
              width="100%"
              height="200px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MACJ Rajkot Corporate Office Map"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© {currentYear} MACJ - A Buyer's Choice Home Inspections. All rights reserved. In association with ABCHI USA.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
