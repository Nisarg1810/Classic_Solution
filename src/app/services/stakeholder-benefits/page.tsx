"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, CheckCircle2, PhoneCall, ArrowLeft, Heart, Sparkles, ShieldAlert, Award } from "lucide-react";
import PageHero from "@/components/PageHero";

const stakeholders = [
  {
    title: "For Real Estate Developer",
    imgSrc: "/images/services/6/1.png",
    points: [
      "Senior management cannot always monitor construction & quality.",
      "Reduced dependency on contractors / floor managers / supervisors / workers.",
      "Provides a third-party audit on builder behalf as a quality assurance on the construction and finishing of units.",
      "Home inspections can save substantial money and effort by assuring quality control over work done by contractors even when the senior management is not always actually on-site.",
      "Third party Quality check will give further assurance & peace of mind to the developers in the light of the recently enacted RERA wherein developers will have to give 5 years free of cost defects’ liability guarantee to the home buyers from the date of possession.",
      "Will add to project’s value, developers’ credibility and group brand to grow."
    ]
  },
  {
    title: "For Interior Designers / Home Furnishings",
    imgSrc: "/images/services/6/2.png",
    points: [
      "Interior Designers play a key role to create a functional and quality interior environment of homes and make home owners happy.",
      "They read blueprints, building codes and inspection regulations, as well as universal accessibility standards.",
      "Home inspection will go a long way in making them evaluate and understand the conditions of the structure / components / elements of homes e.g., presence of invisible dampness / moisture can be located with thermal imaging technology during the inspection which will help interior designers design the furnishing of home better and ensure longevity of the furniture installed in the home.",
      "Home Inspection will aid them in designing beautiful homes to make home owners happy and realise their dream homes come true.",
      "Home Inspection is an aid in interior designing for ensuring longevity of the elements of a home."
    ]
  },
  {
    title: "For Home Owner / Buyer",
    imgSrc: "/images/services/6/4.png",
    points: [
      "Ensures one of the largest investments that is made in anyone’s lifetime is for most part a solid and safe home.",
      "Reduces risk of unwanted surprises. Extra Level of Security for one’s Future Home.",
      "Helps in Price Negotiations and enables negotiate Seller Repairs.",
      "Helps reveal necessary repairs and unforeseen costs before one buy.",
      "Forecast & Plan for Home Maintenance and potential future expenses.",
      "Helps in Home Renovations.",
      "Home Inspection is Inexpensive."
    ]
  },
  {
    title: "For Real Estate Agents",
    imgSrc: "/images/services/6/5.png",
    points: [
      "It can greatly assist in the sales process by making a buyer feel more confident about the purchase. Realtors can discuss the pros and cons with buyers when they know details about the inspection.",
      "Home Inspection enables realtors to make sellers to understand the health condition / potential issues in their property.",
      "Realtors can Make Recommendations for Repairs. In that way, a seller / buyer can plan to the repair or negotiate on the selling price as per the market status.",
      "Builds credibility, makes agents look more professional, and promotes referrals.",
      "Increased Referrals from Satisfied Customers."
    ]
  },
  {
    title: "For Home Sellers",
    imgSrc: "/images/services/6/3.png",
    points: [
      "A holistic Home Inspection helps identify minor issues which becomes a major one with time.",
      "After investing lakhs of rupees in interiors like paints, wallpapers, furniture etc, when defects arise, the interiors gets damaged completely and there is no way to save them other than replacing it, resulting in a huge unforeseen expenditure.",
      "Investment of approx 0.5% to 1% of property value on repairs, property life can be increased and the maintenance cost can be reduced remarkably.",
      "Increases the longevity of the house and decreases its depreciation rate.",
      "It also earns a better selling platform and bargaining position to the seller.",
      "When a re-sale property is sold out with minor repairing of the issues which were then visible, and hiding it with external beautification and not taking care of the root cause, then in due course of time the problems appear again, which earns a bad name to sellers."
    ]
  }
];

export default function ServicesStakeholders() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      <PageHero
        badge="Property Synergy"
        title="Home Inspection: Win – Win"
        titleHighlight="for all the Stake Holders"
        subtitle="Home Inspection: Win – Win for all the Stake Holders in the entire Real Estate Value Chain"
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Stakeholder Benefits" }]}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10">
        
        {/* Navigation Actions */}
        <div className="flex gap-4 mb-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md transition-all text-xs uppercase tracking-wider"
          >
            Request Stakeholder Consultation
          </Link>
        </div>

        {/* Hero Banner Image */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-premium mb-10 border border-brand-border/20 max-h-[380px] flex items-center justify-center bg-white">
          <Image
            src="/images/services/6/6.png"
            alt="Stakeholders Blueprint Planning and Team Consultation"
            width={1240}
            height={480}
            className="w-full h-auto object-cover max-h-[380px]"
            priority
            unoptimized
          />
        </div>

        {/* Intro statement */}
        <div className="bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-premium text-left mb-12">
          <div className="flex items-center gap-2 mb-3">
            <Award className="h-5 w-5 text-secondary" />
            <h3 className="text-base sm:text-lg font-bold text-secondary uppercase tracking-wider">
              For Your Protection, Get Home Inspection!
            </h3>
          </div>
          <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
            A professional home inspection provides all parties with a clear understanding of the physical condition of the home in order to make a well-informed decision – Home Buyers / Owners, Home Sellers, Builders / Developers, Real Estate Agents / Brokers. It also benefits Home Loan Lenders, Home Insurance Companies, Central Government / State Governments, City Building Departments, etc.
          </p>
        </div>

        {/* Alternating Stakeholder Cards */}
        <h2 className="text-xl sm:text-3xl font-extrabold font-display text-primary text-center mb-10">
          How Everyone Wins in the Real Estate Ecosystem
        </h2>

        <div className="flex flex-col gap-12">
          {stakeholders.map((stakeholder, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center bg-white border border-brand-border/30 rounded-3xl p-6 sm:p-8 shadow-premium`}
              >
                {/* Image side */}
                <div className="w-full lg:w-1/2 relative min-h-[220px] sm:min-h-[280px] rounded-2xl overflow-hidden shadow-sm bg-brand-light shrink-0">
                  <Image 
                    src={stakeholder.imgSrc} 
                    alt={stakeholder.title} 
                    fill 
                    className="object-cover" 
                    unoptimized 
                  />
                </div>

                {/* Points side */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
                  <span className="text-secondary font-bold tracking-wider uppercase text-xs">Benefits Matrix</span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-primary mt-1 mb-6 leading-tight">
                    {stakeholder.title}
                  </h3>
                  <ul className="flex flex-col gap-3.5">
                    {stakeholder.points.map((pt, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-xs sm:text-sm text-brand-text font-light leading-relaxed">
                        <CheckCircle2 className="h-4.5 w-4.5 text-secondary shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back and Action Buttons */}
        <div className="flex flex-wrap justify-between items-center gap-4 border-t border-brand-border/40 pt-8 mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-secondary uppercase tracking-wider border border-primary/20 hover:border-secondary px-5 py-3 rounded-full bg-white shadow-sm transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all text-xs uppercase tracking-widest"
          >
            Book An Inspection
          </Link>
        </div>

      </div>
    </div>
  );
}
