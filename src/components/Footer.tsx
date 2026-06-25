import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="flex items-center gap-1.5 py-1">
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                Classic <span className="text-[#ff5a66]">Solution</span>
              </span>
            </div>
            <p className="text-sm text-white/75 mt-2 leading-relaxed">
              Classic Solution introducing services first time in Gujarat as a Regional Owner and Team Franchisee of American MNC company A Buyer's Choice Home Inspection, USA & MACJ. We help you identify hidden structural, electrical, and water problems before they turn into costly repairs.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300" aria-label="Instagram">
                <svg className="h-4 w-4 fill-none stroke-currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#hero" className="hover:text-secondary transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-secondary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">Services</a>
              </li>
              <li>
                <a href="#process" className="hover:text-secondary transition-colors">Inspection Process</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-secondary transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info - Rajkot */}
          <div className="flex flex-col gap-4 text-sm lg:col-span-4">
            <h3 className="text-base font-semibold text-white tracking-wider uppercase mb-2 font-display">Saurashtra &amp; Kutchh Office</h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span>Office - 9 Ground Floor, Anmol Complex, Raj Palace Chowk, Sadhu Vaswani Road, Rajkot, Gujarat - 360005</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-secondary shrink-0" />
              <a href="tel:02812990030" className="hover:text-secondary transition-colors">0281 2990030</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-secondary shrink-0" />
              <a href="mailto:classicsolution931@gmail.com" className="hover:text-secondary transition-colors">classicsolution931@gmail.com</a>
            </div>
            <div className="flex items-start gap-3 mt-2">
              <Clock className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-white/60">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Single Map Layout */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="w-full min-h-[240px] rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-white/5">
            <p className="text-xs font-bold text-white/60 mb-2 uppercase px-4 pt-2">Rajkot Office Location Map</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8028795764043!2d70.77484431541018!3d22.28549994974913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca18aa2f89f3%3A0x1a87b3281237e8bb!2sSadhu%20Vaswani%20Rd%2C%20Rajkot%2C%20Gujarat%20360005!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="200px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rajkot Office Location Map"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <p>© {currentYear} Classic Solution. All rights reserved. Regional Owner &amp; Franchisee of MACJ - A Buyer's Choice.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-secondary">Privacy Policy</a>
            <a href="#" className="hover:text-secondary">Terms of Service</a>
            <a href="#" className="hover:text-secondary">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
