"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Briefcase, Award, CheckCircle2, PhoneCall, ArrowLeft } from "lucide-react";
import PageHero from "@/components/PageHero";

const executives = [
  {
    name: "Mahendra Sureka",
    role: "Director & CEO, MACJ",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2025/04/MS.jpg",
    bio: "Chartered Accountant with 25+ years of Professional/ Entrepreneurial Experience. Pioneered Home/ Property Inspection Services Industry in India. Management Consulting Experience of over 20 years. Leadership role in largest developer of IT/ ITES Buildings in Eastern India."
  },
  {
    name: "India's First Woman Inspector",
    role: "Lead Inspector & Trainer",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "First certified Woman Home Inspector in India with experience of over 5,000 Inspections & Expertise in Thermographic Inspection of Properties, also has completed 'Professional Real Estate Inspection Certification Program' of ICA, USA and International Association of Certified Home Inspectors course."
  },
  {
    name: "Rohit Drolia",
    role: "Partner & Operations Head",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "With decades of experience in construction and construction materials, he has also been part of one of Kolkata�s leading real estate companies for procurements. He governs operations, field inspections, and report auditing."
  },
  {
    name: "Yash Sureka",
    role: "Southern Region Lead - Bangalore",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "With over eight years of experience in real estate, Yash leads the Southern Region in Bangalore. A BBA LLB graduate from NLU Odisha, he is a Certified Professional Inspector from InterNACHI USA and former President of BNI India chapter."
  },
  {
    name: "Ayush Sureka",
    role: "Strategic Growth Partner",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "A young serial entrepreneur who is an exhilarating example of dreaming big and making it happen. He is a pioneer in strategising and scaling up multiple businesses, and a highly successful BNI Executive Director."
  }
];

const mentors = [
  {
    name: "Ravindra Chamaria",
    role: "Promoter & Chairman, Infinity Group",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Ravindra-Chamaria.jpg",
    bio: "A serial entrepreneur who pioneered the 'Intelligent Building' concept for the IT/ITES real estate development in Kolkata. Vice chairman for Akshaya Patra advisory board, feeding 1.4 million children daily."
  },
  {
    name: "CREDAI Founder Member",
    role: "Advisor & Construction Vet",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "One of the most successful real estate builders in Eastern India, he has been a founding member of CREDAI, an apex body of builders in West Bengal. Group activities span internet services, supply chain, and education."
  },
  {
    name: "JS Group Chairman",
    role: "Industrial Advisor",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "For over three decades, he has steered the 110-year-old JS Group to industrial marketing pre-eminence across 40 countries. He is also actively associated with philanthropic endeavors Dakshini Prayash."
  },
  {
    name: "TiE Kolkata President",
    role: "Corporate Mentor",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "Serves on boards of numerous reputed companies. Formerly served as President of the Bengal Chamber of Commerce & Industry, and MD of various power generation and consultancy organizations."
  },
  {
    name: "Heritage Commission Expert",
    role: "Architectural Advisor",
    imageUrl: "https://macj-abuyerschoice.com/v2/wp-content/uploads/2015/10/blank-avatar.jpg",
    bio: "With over 35 years of experience in architecture, urban design, and conservation. He is a visiting faculty at ETH Zurich, advisor to National Institute of Advanced Studies, and member of West Bengal Heritage Commission."
  }
];

const regionalPartners = [
  {
    name: "KVK Gas Founder",
    role: "East India Partner",
    bio: "Over 25 years of business experience in industrial gas plant manufacturing. Serves as VP of All India Industrial Gas Manufacturers Association and panelist on the Bureau of Indian Standards."
  },
  {
    name: "Rohit Sethi",
    role: "North India Partner",
    bio: "MBA in Marketing and Finance with diversified operational experience across Retail, Advertising, FMCG, and logistics distribution systems."
  },
  {
    name: "Prateek Agarwal",
    role: "West India Partner",
    bio: "MBA in Logistics & Supply Chain from SP Jain Singapore. A serial entrepreneur managing Prateek Minerals and diversified retail and FMCG portfolios."
  }
];

export default function AboutMACJIndia() {
  return (
    <div className="relative w-full">
      <PageHero
        badge="MACJ Corporate"
        title="Promoters, Partners &"
        titleHighlight="Management Profiles"
        subtitle="Meet the seasoned corporate leaders, industrial mentors, and regional franchise partners driving professional home inspections across India."
        breadcrumbs={[{ label: "About Us", href: "/about" }, { label: "Management Profiles" }]}
      />

      <section className="py-14 sm:py-20 bg-brand-light px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl flex flex-col gap-16">
          
          {/* Executive Section */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Executive Team</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Core Leadership & Technical Officers</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {executives.map((person, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 hover:shadow-premium transition-premium flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-brand-border/40 bg-slate-50">
                      <Image
                        src={person.imageUrl}
                        alt={person.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-primary font-display mb-1">{person.name}</h3>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 leading-snug">{person.role}</p>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mentorship Board Section */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Advisory & Support</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Mentorship Board</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mentors.map((person, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 hover:shadow-premium transition-premium flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5 border border-brand-border/40 bg-slate-50">
                      <Image
                        src={person.imageUrl}
                        alt={person.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-primary font-display mb-1">{person.name}</h3>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 leading-snug">{person.role}</p>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Partners Section */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Regional Footprint</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary mt-2">Regional Franchise Partners</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionalPartners.map((person, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 hover:shadow-premium transition-premium flex flex-col group justify-between"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary font-display mb-1">{person.name}</h3>
                    <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-4 leading-snug">{person.role}</p>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4 mt-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
            >
              Contact Board Office
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" /> About Main Page
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
