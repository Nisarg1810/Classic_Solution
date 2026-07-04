import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "RERA Guidelines", href: "/rera" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Complete Home Inspection", href: "/services/home-inspection" },
  { label: "Moisture & Seepage Assessment", href: "/services/moisture-damp" },
  { label: "Electrical Safety Inspections", href: "/services/electrical" },
  { label: "NRI Property Care", href: "/services/nri-property-care" },
  { label: "Construction Finishing", href: "/services/construction-finishing" },
  { label: "Stakeholder Win-Win", href: "/services/stakeholder-benefits" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="h-5 w-5 fill-none stroke-current stroke-[1.8]" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.6 5 12 5 12 5s-4.6 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.9C6.6 19 12 19 12 19s4.6 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 14.5v-5l5.5 2.5-5.5 2.5z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200">

      {/* ── Logo Hero Band ── */}
      <div className="border-b border-neutral-100 py-10 flex flex-col items-center justify-center gap-5 px-6">
        <Link href="/" className="inline-block">
          <div className="relative h-24 w-64 sm:h-28 sm:w-80">
            <Image
              src="/logo.svg"
              alt="MACJ Logo"
              fill
              className="object-contain"
              sizes="320px"
              priority
            />
          </div>
        </Link>

        {/* Tagline */}
        <p className="text-sm text-[#888] text-center max-w-sm leading-relaxed">
          India&apos;s trusted professional home &amp; property inspection company
        </p>

        {/* Social Buttons */}
        <div className="flex items-center gap-3 mt-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center text-[#aaa] hover:text-secondary hover:border-secondary transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Main Columns ── */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 – Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-[#222] tracking-widest uppercase mb-5 pb-2 border-b border-neutral-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-secondary shrink-0" />
                  <Link href={l.href} className="text-[13px] text-[#666] hover:text-secondary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 – Services */}
          <div>
            <h3 className="text-xs font-bold text-[#222] tracking-widest uppercase mb-5 pb-2 border-b border-neutral-100">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.label} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-secondary shrink-0" />
                  <Link href={l.href} className="text-[13px] text-[#666] hover:text-secondary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contact */}
          <div>
            <h3 className="text-xs font-bold text-[#222] tracking-widest uppercase mb-5 pb-2 border-b border-neutral-100">
              Corporate Office
            </h3>
            <div className="flex flex-col gap-4 text-[13px] text-[#666]">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <span className="leading-relaxed pt-1">Raj Palace, Hari Nagar,<br />Rajkot, Gujarat 360005, India</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-secondary" />
                </div>
                <div className="flex flex-col gap-0.5 pt-1">
                  <a href="tel:+917600078862" className="hover:text-secondary transition-colors">76000 78862</a>
                  <a href="tel:+912812990030" className="hover:text-secondary transition-colors">0281 2990030</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-secondary" />
                </div>
                <a href="mailto:classicsolution931@gmail.com" className="hover:text-secondary transition-colors break-all pt-1">
                  classicsolution931@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4 – Working Hours */}
          <div>
            <h3 className="text-xs font-bold text-[#222] tracking-widest uppercase mb-5 pb-2 border-b border-neutral-100">
              Working Hours
            </h3>
            <div className="flex flex-col gap-3 text-[13px] text-[#666]">
              {[
                { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
                { day: "Saturday", time: "9:00 AM – 2:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((row) => (
                <div key={row.day} className="flex flex-col gap-0.5">
                  <span className="font-semibold text-[#444] text-[12px]">{row.day}</span>
                  <span className={row.time === "Closed" ? "text-secondary font-semibold" : ""}>{row.time}</span>
                </div>
              ))}
              <div className="mt-2 pt-3 border-t border-neutral-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[12px] font-bold text-white bg-secondary hover:bg-secondary/90 transition-colors px-4 py-2 rounded-full"
                >
                  Book Inspection
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-neutral-100 py-5 px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#bbb]">
          <p>© {currentYear} Classic Solution. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
