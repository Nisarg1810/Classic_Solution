import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About – Company Details", href: "/about" },
  { label: "About – Company Vision", href: "/about/vision" },
  { label: "Blogs", href: "/blogs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "RERA Updates", href: "/rera" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Clients – Testimonials", href: "/testimonials" },
  { label: "Our Clients", href: "/our-clients" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Complete Home / Property Inspection", href: "/services/home-inspection" },
  { label: "Moisture / Damp / Seepage Inspections", href: "/services/moisture-damp" },
  { label: "Electrical Inspections", href: "/services/electrical" },
  { label: "Complete Property Care for NRIs", href: "/services/nri-property-care" },
  { label: "Construction Finishing & Win–Win", href: "/services/construction-finishing" },
  { label: "Energy Audit – Solar Panel", href: "/services/energy-audit/solar" },
  { label: "Energy Audit – Electrical Utilities", href: "/services/energy-audit/electrical" },
  { label: "Energy Audit – HVAC Inspection", href: "/services/energy-audit/hvac" },
  { label: "Ground Penetrating Radar (GPR)", href: "/services/gpr" },
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
      <div className="border-b border-neutral-100 py-6 flex flex-col items-center justify-center gap-3 px-6">
        <Link href="/" className="inline-block">
          <div className="relative h-16 w-52 sm:h-20 sm:w-64">
            <Image
              src="/logo.svg"
              alt="Classic Solution Logo"
              fill
              className="object-contain"
              sizes="256px"
              priority
            />
          </div>
        </Link>



        {/* Social Buttons */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="h-8 w-8 rounded-full border border-neutral-200 flex items-center justify-center text-[#bbb] hover:text-secondary hover:border-secondary transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Main Columns ── */}
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Col 1 – Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-[#222] tracking-widest uppercase mb-3 pb-1.5 border-b border-neutral-100">
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              {quickLinks.map((l) => (
                <li key={l.label} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-secondary shrink-0" />
                  <Link href={l.href} className="text-sm text-[#666] hover:text-secondary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2 – Services */}
          <div>
            <h3 className="text-sm font-bold text-[#222] tracking-widest uppercase mb-3 pb-1.5 border-b border-neutral-100">
              Our Services
            </h3>
            <ul className="space-y-1.5">
              {services.map((l) => (
                <li key={l.label} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-secondary shrink-0" />
                  <Link href={l.href} className="text-sm text-[#666] hover:text-secondary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Contact */}
          <div>
            <h3 className="text-sm font-bold text-[#222] tracking-widest uppercase mb-3 pb-1.5 border-b border-neutral-100">
              Corporate Office
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-[#666]">
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-md bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="h-3 w-3 text-secondary" />
                </div>
                <span className="leading-relaxed">Raj Palace, Hari Nagar,<br />Rajkot, Gujarat 360005, India</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-md bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="h-3 w-3 text-secondary" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <a href="tel:+917600078862" className="hover:text-secondary transition-colors">76000 78862</a>
                  <a href="tel:+912812990030" className="hover:text-secondary transition-colors">0281 2990030</a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-6 w-6 rounded-md bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="h-3 w-3 text-secondary" />
                </div>
                <a href="mailto:classicsolution931@gmail.com" className="hover:text-secondary transition-colors break-all">
                  classicsolution931@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 4 – Working Hours */}
          <div>
            <h3 className="text-sm font-bold text-[#222] tracking-widest uppercase mb-3 pb-1.5 border-b border-neutral-100">
              Working Hours
            </h3>
            <div className="flex flex-col gap-2 text-sm text-[#666]">
              {[
                { day: "Monday – Saturday", time: "9:30 AM – 7:30 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((row) => (
                <div key={row.day} className="flex justify-between items-center">
                  <span className="font-semibold text-[#444] text-sm">{row.day}</span>
                  <span className={row.time === "Closed" ? "text-secondary font-semibold" : ""}>{row.time}</span>
                </div>
              ))}
              <div className="mt-1 pt-2 border-t border-neutral-100">
                <Link
                  href="/contact"
                   className="inline-flex items-center gap-1.5 text-sm font-bold text-white bg-secondary hover:bg-secondary/90 transition-colors px-4 py-2 rounded-full"
                >
                  Book Inspection
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-neutral-100 py-3 px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#bbb]">
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
