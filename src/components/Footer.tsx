import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white/70 py-10 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-8 border-b border-white/5">
          
          {/* Column 1: Company Logo & Description */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="inline-block py-1">
              <div className="relative h-10 w-32 bg-white rounded-md p-1.5 flex items-center justify-center">
                <Image
                  src="/logo.svg"
                  alt="Classic Solution Logo"
                  fill
                  className="object-contain p-0.5"
                  sizes="128px"
                />
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light max-w-sm">
              MACJ – A Buyer's Choice Home Inspections is India's leading professional home and property inspection company. Formed in collaboration with ABCHI USA, we perform visual, non-destructive health & safety checks of properties.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-2">
              <a href="https://facebook.com" className="text-white/50 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a href="https://x.com" className="text-white/50 hover:text-white transition-colors" aria-label="Twitter">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="text-white/50 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4 fill-none stroke-currentColor stroke-[2]" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-white/50 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "RERA Guidelines", href: "/rera" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors font-light text-white/60">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                { label: "Complete Home Inspection", href: "/services/home-inspection" },
                { label: "Moisture & Seepage Assessment", href: "/services/moisture-damp" },
                { label: "Electrical Safety Inspections", href: "/services/electrical" },
                { label: "NRI Property Care", href: "/services/nri-property-care" },
                { label: "Construction Finishing", href: "/services/construction-finishing" },
                { label: "Stakeholder Win-Win", href: "/services/stakeholder-benefits" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors font-light text-white/60">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="md:col-span-3 flex flex-col gap-3 text-xs sm:text-sm">
            <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-1">Corporate Office</h3>
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
              <span className="font-light text-white/60">Raj Palace, Hari Nagar, Rajkot, Gujarat 360005, India</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
              <div className="flex flex-col font-light text-white/60">
                <a href="tel:+917600078862" className="hover:text-white transition-colors">76000 78862</a>
                <a href="tel:+912812990030" className="hover:text-white transition-colors">0281 2990030</a>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="h-4.5 w-4.5 text-secondary shrink-0" />
              <a href="mailto:classicsolution931@gmail.com" className="hover:text-white transition-colors font-light text-white/60">classicsolution931@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
          <p>© {currentYear} MACJ - A Buyer's Choice Home Inspections. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
