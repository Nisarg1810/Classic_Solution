"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ClientLogos from "@/components/ClientLogos";

const allianceDetails = [
  {
    id: "magicbricks",
    name: "Strategic Alliance with Magicbricks Portal",
    desc: "Classic Solution signed a memorandum of alliance with Magicbricks, India's leading online property search portal, to offer exclusive home testing services to their premium buyers.",
    points: [
      "Allows premium property buyers on Magicbricks to add visual inspections to their cart.",
      "Reassures buyers with certified, third-party structural and moisture scan reports.",
      "Integrates inspection data directly to help determine fair property market values.",
    ],
    accentClass: "border-l-4 border-l-red-500",
    images: [
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2021/03/Main-Banner.jpg", alt: "Classic Solution Magicbricks Alliance Launch" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2021/03/MB-03.jpg", alt: "Magicbricks Property Portal Integration" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2021/03/MB-04.jpg", alt: "Classic Solution Magicbricks Partnership" },
    ],
  },
  {
    id: "pidilite",
    name: "Waterproofing Collaboration with Pidilite (Dr. Fixit)",
    desc: "Aligned with Pidilite Industries, makers of Dr. Fixit waterproofing solutions, to provide high-resolution thermal imaging dampness assessments paired with certified waterproofing remediation.",
    points: [
      "Fills the gap between seepage detection and chemical waterproofing remedies.",
      "Allows Classic Solution engineers to pinpoint leaks, while Dr. Fixit certified applicators execute targeted remedies.",
      "Ensures the building envelope remains durable and moisture-free for years.",
    ],
    accentClass: "border-l-4 border-l-blue-500",
    images: [
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2023/07/Pidilite-Training-Session-1-250x188.jpeg", alt: "Pidilite Classic Solution Training Session 1" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2023/07/Pidilite-Training-Session-2-250x188.jpeg", alt: "Pidilite Classic Solution Training Session 2" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2023/07/Pidilite-Training-Session-3-250x188.jpeg", alt: "Pidilite Classic Solution Training Session 3" },
    ],
  },
];


const clientCategories = [
  { title: "Individual Home Buyers", desc: "Buyers purchasing apartments, villas, and independent houses — pre-handover and resale inspections." },
  { title: "Real Estate Developers", desc: "Builders using Classic Solution for third-party quality audits and defect-free possession to reduce customer complaints." },
  { title: "Banking & NBFC Institutions", desc: "Lenders requiring property condition reports for home loan disbursement and risk assessment." },
  { title: "Real Estate Agents", desc: "Channel partners recommending Classic Solution to build trust and facilitate faster, dispute-free property transactions." },
  { title: "NRI Investors", desc: "Non-resident Indians investing remotely in Indian real estate — requiring trustworthy independent eyes on the ground." },
  { title: "Corporate & Commercial", desc: "Offices, retail spaces, warehouses, and corporate campuses requiring electrical and structural safety audits." },
];

export default function OurClientsPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Our Clients"
        title="Trusted By Thousands"
        titleHighlight="Across India"
        subtitle="From individual homebuyers to India's largest property portals — Classic Solution is the inspection partner of choice for quality, transparency, and safety."
        breadcrumbs={[{ label: "Our Clients" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">

          {/* Client logo marquee */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Our Client Base</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Companies That Trust Classic Solution</h2>
            </div>
            <div className="bg-white rounded-3xl border border-brand-border/30 shadow-sm overflow-hidden">
              <ClientLogos />
            </div>
          </div>

          {/* Who we serve */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Client Segments</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Who We Serve</h2>
              <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
                Our clients span the entire real estate ecosystem — buyers, sellers, lenders, developers, and investors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {clientCategories.map((cat, idx) => (
                <div key={idx} className="bg-white border border-brand-border/30 p-6 rounded-2xl shadow-sm hover:border-secondary transition-all flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-primary font-display mb-1.5">{cat.title}</h3>
                    <p className="text-xs text-brand-muted leading-relaxed font-light">{cat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Alliances */}
          <div className="border-t border-brand-border/40 pt-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Partnerships</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Brand Partnerships & Alliances</h2>
              <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
                We collaborate with top-tier developers, property platforms, and material science experts to verify property safety standards across India.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {allianceDetails.map((partner) => (
                <div
                  key={partner.id}
                  id={partner.id}
                  className={`bg-white border border-brand-border/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 scroll-mt-28 ${partner.accentClass}`}
                >
                  <div className="flex flex-col gap-6 p-6 sm:p-8">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-3">{partner.name}</h3>
                      <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light mb-6">{partner.desc}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {partner.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                            <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {partner.images.map((img, i) => (
                        <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-brand-border/30">
                          <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary text-white p-8 sm:p-12 rounded-3xl shadow-premium text-center max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-secondary mb-3">Read What Our Clients Say</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6 max-w-xl mx-auto">
              Thousands of clients have shared their Classic Solution inspection experience. Read verified testimonials from homebuyers and investors across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/testimonials" className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider inline-flex items-center gap-2">
                View Testimonials <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="px-8 py-3.5 border border-white/30 hover:border-white/60 text-white font-bold rounded-full transition-all text-xs uppercase tracking-wider">
                Book Inspection
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
