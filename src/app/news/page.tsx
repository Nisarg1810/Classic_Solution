"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ShieldAlert, CheckCircle2, PhoneCall, ArrowRight, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";

const allianceDetails = [
  {
    id: "magicbricks",
    name: "Strategic Alliance with Magicbricks Portal",
    desc: "MACJ signed a memorandum of alliance with Magicbricks, India's leading online property search portal, to offer exclusive home testing services.",
    points: [
      "Allows premium property buyers on Magicbricks to add visual inspections to their cart.",
      "Reassures buyers with certified, third-party structural and moisture scan reports.",
      "Integrates inspection data directly to help determine fair property market values."
    ],
    color: "border-l-4 border-l-red-500 bg-red-50/10",
    images: [
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2021/03/Main-Banner.jpg", alt: "MACJ Magicbricks Alliance Launch" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2021/03/MB-03.jpg", alt: "Magicbricks Property Portal Integration" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2021/03/MB-04.jpg", alt: "MACJ Magicbricks Partnership" },
    ]
  },
  {
    id: "pidilite",
    name: "Waterproofing Collaboration with Pidilite (Dr. Fixit)",
    desc: "Aligned with Pidilite Industries (makers of Dr. Fixit waterproofing solutions) to provide high-resolution thermal imaging dampness assessments.",
    points: [
      "Fills the gap between seepage detection and chemical waterproofing remedies.",
      "Allows MACJ engineers to pinpoint leaks, while Dr. Fixit certified applicators execute targeted remedies.",
      "Ensures the building envelope remains durable and moisture-free for years."
    ],
    color: "border-l-4 border-l-blue-500 bg-blue-50/10",
    images: [
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2023/07/Pidilite-Training-Session-1-250x188.jpeg", alt: "Pidilite MACJ Training Session 1" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2023/07/Pidilite-Training-Session-2-250x188.jpeg", alt: "Pidilite MACJ Training Session 2" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2023/07/Pidilite-Training-Session-3-250x188.jpeg", alt: "Pidilite MACJ Training Session 3" },
      { src: "https://macj-abuyerschoice.com/wp-content/uploads/2023/07/Pidilite-Training-Session-4-250x188.jpeg", alt: "Pidilite MACJ Training Session 4" },
    ]
  }
];

export default function NewsPage() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="Press Releases"
        title="News, Updates &"
        titleHighlight="Corporate Alliances"
        subtitle="Stay updated with our latest media releases, real estate regulatory updates, and strategic collaborations."
        breadcrumbs={[{ label: "News & Alliances" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex flex-col gap-12">
          
          <div className="text-center max-w-2xl mx-auto mb-4">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Partnerships</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">Brand Partnerships & Alliances</h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              We collaborate with top-tier developers, property platforms, and material science experts to verify property safety standards across India.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {allianceDetails.map((partner) => (
              <div
                key={partner.id}
                id={partner.id}
                className={`bg-white border border-brand-border/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 scroll-mt-28 ${partner.color}`}
              >
                <div className="flex flex-col gap-6 p-6 sm:p-8">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary font-display mb-3">
                      {partner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light mb-6">
                      {partner.desc}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {partner.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                          <span className="h-5 w-5 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alliance Photos */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {partner.images.map((img, i) => (
                      <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-brand-border/30">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white p-6 sm:p-10 rounded-3xl shadow-premium text-center max-w-3xl mx-auto mt-6">
            <h3 className="text-lg sm:text-xl font-bold font-display text-secondary mb-3">RERA Regulatory Updates</h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mb-6">
              Read how state real estate authorities (MahaRERA, K-RERA, etc.) are mandating bi-yearly quality checks and holding developers liable for structural stability.
            </p>
            <Link
              href="/rera"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full transition-all text-xs uppercase tracking-wider shadow-md"
            >
              Go to RERA Guidelines <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
