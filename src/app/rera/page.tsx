"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  ShieldCheck,
  Building,
  Scale,
  Users,
  Compass,
  CheckCircle,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Home,
  CheckSquare,
  Briefcase,
  Key,
  Landmark,
  Layers,
  FileCheck,
  FileText,
  DollarSign,
  HelpCircle,
  FileSpreadsheet,
  AlertCircle,
  Clock,
  Sparkles,
  PhoneCall
} from "lucide-react";
import PageHero from "@/components/PageHero";

// Top 5 Highlight Bullet Points matching the exact document
const topHighlights = [
  {
    prefix: "TRANSPARENCY",
    desc: "Rights to all project details such as land title, sanctioned plans, project approvals, cost of construction, status, etc."
  },
  {
    prefix: "REGISTERED PROJECTS",
    desc: "Developers can advertise, market, sell or offer for sale, any plot, apartment or building on the projects registered with the RERA."
  },
  {
    prefix: "DEVELOPERS LIABILITY FOR DEFECTS",
    desc: "5 years free-of-cost guarantee from structural / workmanship defect or any other quality or provision of services or any other obligations of promoter as per agreement for sale from the date of handing over possession;"
  },
  {
    prefix: "PRIOR APPROVAL FROM BUYERS TO BE TAKEN BY DEVELOPER",
    desc: "If Developer, makes any additions and alterations in the sanctioned plans, layout plans and specifications etc. he needs to take previous consent of at least two-thirds of the allottees."
  },
  {
    prefix: "",
    desc: "Stringent penalties / penal provisions for violation of orders of Appellate Tribunals and Regulatory Authorities."
  }
];

// RERA Objectives
const reraObjectives = [
  {
    id: "01",
    text: "To establish the Real Estate Regulatory Authority (RERA) in each state."
  },
  {
    id: "02",
    text: "Ensure accountability towards allottees (home buyers) and protect their interest."
  },
  {
    id: "03",
    text: "Infuse transparency, ensure fair-play and reduce frauds & delays."
  },
  {
    id: "04",
    text: "Imposing certain responsibilities on both promoter and allottees."
  },
  {
    id: "05",
    text: "Establish regulatory oversight mechanism to enforce contracts."
  },
  {
    id: "06",
    text: "Establish fast-track dispute resolution mechanism."
  },
  {
    id: "07",
    text: "To set up an Appellate Tribunal to hear appeals from the decisions, directions or orders of the RERA."
  }
];

// Key Takeaways of the Act
const keyTakeaways = [
  {
    icon: Landmark,
    title: "State RERA Authority & Tribunals",
    desc: "Establishes Real Estate Regulatory Authority (RERA) in each state for regulation and promotion of the real estate sector and serves as an adjudicating body for speedy dispute redressal."
  },
  {
    icon: DollarSign,
    title: "70% Dedicated Escrow Account",
    desc: "70 percent of customer advances must be deposited into a separate dedicated project account. Withdrawals must be certified by architects, Chartered Accountants (CA), and project engineers to ensure funds are utilized strictly for project completion."
  },
  {
    icon: Building,
    title: "Mandatory Project Registration",
    desc: "Promoter has to mandatorily register the project for all commercial and residential projects where the land is over 500 square meters or includes eight apartments before advertising or selling. Full true disclosure of project, financial, and legal details is compulsory."
  },
  {
    icon: Layers,
    title: "Sale Strictly on Carpet Area",
    desc: "Apartments must be sold only on Carpet Area basis (net usable floor area excluding external walls, service shafts, exclusive balcony/verandah, and open terrace, but including internal partition walls). Every phase is considered a standalone project."
  },
  {
    icon: Users,
    title: "2/3rd Buyer Consent for Plan Changes",
    desc: "The developer cannot make any changes or alterations to the sanctioned plan without the written consent of 2/3rd of the allottees. This prevents developers from arbitrarily changing layouts or escalating project costs."
  },
  {
    icon: Scale,
    title: "Compulsory Grievance Redressal",
    desc: "It is compulsory for every state to establish a State Real Estate Regulatory Authority under the Act, giving allottees a powerful, accessible legal forum for redressal of their grievances."
  },
  {
    icon: ShieldAlert,
    title: "5-Year Free Defect Rectification",
    desc: "The Promoter has to rectify any structural defect, or defect in workmanship, quality, or provision of services brought to notice by the buyer within 5 years from the date of handing over possession."
  },
  {
    icon: Clock,
    title: "Interest Parity for Delays",
    desc: "Both buyers and promoters pay the exact same rate of penal interest for delays. In case of delay, the promoter must pay an interest rate of SBI's highest MCLR + 2% within 45 days of it becoming due."
  }
];

// Homebuyer Rights & Obligations
const buyerRights = [
  {
    title: "Right to Sanctioned Plans & Milestones",
    desc: "A buyer is entitled to know all the Sanctioned plans, Layout Plans of a real estate project in detail, along with stage-wise completion schedules including agreed amenities and services."
  },
  {
    title: "Right to Possession & Project Documents",
    desc: "A buyer is entitled to claim written possession of the house and the common areas as a member of the project, with full rights to obtain all project-related documentation."
  },
  {
    title: "Timely Payment & Interest Parity",
    desc: "A buyer who enters into an agreement for sale is responsible for timely payments as specified. Delays incur interest; equally, promoters pay identical interest if the project or deliverables are delayed."
  },
  {
    title: "Formation of Allottees Association",
    desc: "The buyer shall actively participate in the formation of an association, society, or cooperative body of allottees after taking physical possession of the apartment."
  },
  {
    title: "Possession Timeline (Within 2 Months)",
    desc: "The buyer shall take physical possession of the apartment within a period of two months after the competent authority issues the Occupancy Certificate (OC)."
  }
];

// Promoter Guidelines
const promoterGuidelines = [
  {
    title: "RERA Registration",
    desc: "The promoter is primarily responsible for registering the real estate project with RERA. The builder or promoter is fully accountable for all obligations, responsibilities, and functions under the provisions of the RERA Act."
  },
  {
    title: "Consent for Registered Plan Alterations",
    desc: "If a plan is registered under RERA, it can only be modified with the written consent of two-thirds of the project's buyers. This protects buyers from unilateral layout modifications after agreement signing."
  },
  {
    title: "Public Transparency Portal",
    desc: "Upon registration, promoters receive a dedicated login to upload project specs, quarterly progress, and promoter photos on the public RERA portal. Unregistered projects cannot be advertised. Defaulters are published publicly."
  },
  {
    title: "Elimination of Misuse of Funds (70% Escrow)",
    desc: "70% of money collected from buyers must be placed into a dedicated project bank account and utilized exclusively for construction. Withdrawals are permitted only in proportion to completion, certified by an engineer, architect, and practicing CA. Accounts must be audited annually within 6 months of financial year end."
  }
];

// Promoter Duties & Functions
const promoterDuties = [
  {
    title: "Quarterly Project Webpage Updates",
    desc: "The promoter must quarterly update the project status on the Authority website, including the updated list of booked apartments, plots, and stage completions."
  },
  {
    title: "Ongoing Structural Defect Liability",
    desc: "The promoter's responsibility for structural or workmanship defects continues for 5 years, even after the conveyance deed of all units has been executed to the allottees."
  },
  {
    title: "Procurement of Completion & Occupancy Certificates",
    desc: "The promoter is legally obligated to obtain both the Completion Certificate (CC) and Occupancy Certificate (OC) from competent local authorities and deliver them to allottees or their association."
  },
  {
    title: "Restrictions on Project Transfer & Full Refund",
    desc: "The promoter cannot transfer or assign a project to a third party without 2/3rd allottee consent and prior Authority approval. If the promoter fails to deliver, they must refund the entire amount with interest."
  }
];

// Agent Guidelines
const agentGuidelines = [
  {
    title: "Mandatory Registration with RERA",
    desc: "Every real estate agent must register with RERA to broker, buy, or sell any plot, flat, or building. Operating without registration is illegal."
  },
  {
    title: "Regulatory Oversight & Cancellation Powers",
    desc: "Registered agents remain under continuous scrutiny. The Authority holds statutory powers to revoke or cancel registration if fraudulent practices or violations occur, after due hearing."
  },
  {
    title: "Maintenance of Records & Builder Verification",
    desc: "Agents must maintain comprehensive records, books of accounts, and documentation for every transaction. They are required to conduct background checks on builders to safeguard buyers."
  },
  {
    title: "Strict Ban on Unregistered Projects",
    desc: "Real estate agents are strictly prohibited from facilitating, advertising, or selling properties in projects that are not registered with the Real Estate Regulatory Authority."
  },
  {
    title: "Zero Tolerance for Fraud & Misleading Claims",
    desc: "Agents must refrain from deceptive behavior, must never provide false specifications to buyers, and cannot represent themselves as promoters or make unauthorized commitments."
  },
  {
    title: "Advertising Code Compliance",
    desc: "Under the RERA Act, agents cannot advertise services, amenities, or features that are not explicitly sanctioned in the official project agreement."
  },
  {
    title: "Complete Buyer Document Delivery",
    desc: "Agents must facilitate and ensure the homebuyer receives all lawful documentation related to booking receipts, payment schedules, and project registration details."
  }
];

// State Specific Updates
const stateUpdates = {
  maharashtra: {
    title: "Maharashtra RERA (MahaRERA)",
    established: "March 8, 2017",
    highlights: [
      {
        title: "Proactive Quality Assurance Framework",
        desc: "MahaRERA proposed a pioneering framework requiring developers to submit bi-yearly quality assurance reports covering structural components, construction material testing, and workmanship."
      },
      {
        title: "Homebuyer Visibility",
        desc: "All submitted quality reports are published on the public MahaRERA portal. This allows buyers to inspect workmanship quality and trace defects before possession is handed over."
      },
      {
        title: "Strict Workmanship Auditing",
        desc: "Developers must employ certified professional engineers and architects to continuously monitor and log quality parameters, minimizing possession-day defect disputes."
      }
    ]
  },
  kerala: {
    title: "Kerala RERA (K-RERA)",
    established: "2019",
    highlights: [
      {
        title: "Mandatory Quarterly Progress Logs",
        desc: "Developers in Kerala must submit and upload detailed progress reports of the construction site on the public K-RERA website every quarter, detailing completion milestones."
      },
      {
        title: "Public Defaulter & Warning List",
        desc: "K-RERA proactively publishes warning lists of developers and projects that fail to comply with registration terms, upload sanctions, or default on deadlines, warning buyers of high-risk transactions."
      },
      {
        title: "Possession Disputes Resolution",
        desc: "Ensures streamlined consumer court-style dispute resolutions directly handled by the K-RERA tribunal within 60 to 90 days."
      }
    ]
  }
};

export default function ReraPage() {
  const [activeStateTab, setActiveStateTab] = useState<"maharashtra" | "kerala">("maharashtra");

  return (
    <div className="relative w-full">
      {/* ── 1. PAGE HERO HEADER (Like other pages) ── */}
      <PageHero
        badge="Real Estate Regulatory Authority"
        title="RERA"
        titleHighlight="Updates & Guidelines"
        subtitle="Real Estate (Regulation and Development) Act, 2016 — Defect liability guarantee, home buyer protections, promoter obligations, and agent governance."
        breadcrumbs={[{ label: "RERA Updates" }]}
      />

      {/* ── 2. HERO FEATURE SECTION (Advantage Home Buyers + HD Banner Image + Core Highlights) ── */}
      <section className="py-8 sm:py-12 bg-white px-4 sm:px-8 lg:px-12 border-b border-brand-border/40">
        <div className="mx-auto max-w-5xl">
          {/* Header Bar like other pages / image 2 */}
          <div className="bg-[#ededed] px-5 py-3 mb-6 rounded-md">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-primary tracking-tight">
              RERA Updates
            </h2>
          </div>

          {/* Subheading Block */}
          <div className="text-left mb-6">
            <h3 className="text-lg sm:text-2xl font-bold font-display text-primary leading-tight">
              Advantage Home Buyers: Real Estate (Regulation & Development) Act, 2016
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-brand-muted font-medium italic mt-1.5">
              Protects the Interest of Home Buyers 5 - years Defect Liability Guarantee
            </p>
          </div>

          {/* Full Width HD Banner Image - Full Size, Zero Crop */}
          <div className="w-full rounded-2xl overflow-hidden shadow-premium border border-brand-border/60 bg-white my-6">
            <Image
              src="/images/rera-advantage-banner.jpg"
              alt="Advantage Home Buyers RERA 2016 City Skyline and Shield Banner"
              width={1920}
              height={1080}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="w-full h-auto block"
            />
          </div>

          {/* Core Highlights Bullet Points directly below banner matching Image 2 */}
          <ul className="space-y-4 my-8 pl-1 sm:pl-2">
            {topHighlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 sm:gap-4 text-left">
                <span className="text-primary font-bold text-xl leading-none mt-0.5 shrink-0">•</span>
                <div className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-brand-text">
                  {item.prefix ? (
                    <>
                      <strong className="font-extrabold text-primary tracking-wide">
                        {item.prefix}
                      </strong>{" "}
                      - {item.desc}
                    </>
                  ) : (
                    <span>{item.desc}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 3. WHAT IS RERA? BACKGROUND & OBJECTIVES ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-4 sm:px-8 lg:px-12 border-b border-brand-border/30">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl mb-10 text-left">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Overview & Background
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight mt-2">
              What is RERA? Or RERA Act?
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full mt-3 mb-6" />
            
            <div className="space-y-4 text-xs sm:text-sm md:text-base text-brand-text leading-relaxed font-light">
              <p>
                The Real Estate sector in India has grown in the last decade but has largely been unregulated from the perspective of consumer – home buyer protection. Though consumer protection laws were available, the recourse available therein was only curative, but not preventive. This affected the overall potential growth of the sector due to absence of professionalism and standardization.
              </p>
              <p>
                And thus this made the Government of India realize that there is a need for a Strong System under which the Whole Real Estate Industry can be regulated. The Real Estate (Regulation and Development) Act, 2016 (RERA) (the Act, from here on) is an initiative by Indian Government to enhance transparency in the real estate related transactions by creating a systematic and a uniform regulatory environment, thereby protecting consumers’ interest and making real estate developers liable for timely completion of projects, as well as to help boost investments in the real estate industry.
              </p>
              <p className="bg-white border-l-4 border-primary p-4 rounded-r-xl text-primary font-medium shadow-sm">
                The RERA Act is a Central Act. It is enacted by an Act of the Parliament seeking protection to home-buyers as well as to help boost investments in the real estate industry. It came into force from <strong>1st May, 2016</strong>, after it was passed in the Rajya Sabha on 10th March, 2016, and in the Lok Sabha on 15th March, 2016. All the sections of the Act came into force with effect from <strong>May 1, 2017</strong>.
              </p>
            </div>
          </div>

          {/* Objectives Card Grid */}
          <div className="mt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary text-white">
                <Compass className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-primary">
                  The Act is intended to achieve the following objectives:
                </h3>
                <p className="text-xs text-brand-muted">Core statutory goals laid out by the Parliament of India</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reraObjectives.map((obj) => (
                <div
                  key={obj.id}
                  className="bg-white border border-brand-border/40 p-5 rounded-2xl shadow-sm hover:shadow-premium hover:border-secondary/50 transition-all duration-300 flex items-start gap-4"
                >
                  <span className="flex items-center justify-center h-8 w-8 rounded-xl bg-secondary/10 text-secondary font-bold text-xs shrink-0 font-display">
                    {obj.id}
                  </span>
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-medium pt-1">
                    {obj.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. KEY TAKEAWAYS OF THE ACT ── */}
      <section className="py-14 sm:py-20 bg-white px-4 sm:px-8 lg:px-12 border-b border-brand-border/30">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Statutory Provisions
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">
              Key Takeaways of the RERA Act
            </h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed">
              Every home buyer, investor, and promoter must understand these fundamental legal mandates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyTakeaways.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-brand-light border border-brand-border/40 rounded-2xl p-6 hover:shadow-premium transition-all duration-300 hover:border-secondary/60 flex flex-col group"
                >
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold font-display text-primary leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light flex-1">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. OBLIGATION & BENEFITS TO HOME BUYERS ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-4 sm:px-8 lg:px-12 border-b border-brand-border/30">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl text-left mb-10">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Consumer Rights & Duties
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight mt-2">
              Key Obligation & Benefits of RERA to Home Buyer
            </h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm md:text-base leading-relaxed font-light">
              RERA has set up fundamental functions for buyers which are laid upon as their statutory rights and reciprocal responsibilities:
            </p>
          </div>

          <div className="space-y-4">
            {buyerRights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border/40 rounded-2xl p-5 sm:p-6 shadow-sm flex items-start gap-4 hover:border-primary transition-all duration-300"
              >
                <div className="h-8 w-8 rounded-full bg-secondary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-display text-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. RERA FOR PROMOTERS & FUNCTIONS / DUTIES ── */}
      <section className="py-14 sm:py-20 bg-white px-4 sm:px-8 lg:px-12 border-b border-brand-border/30">
        <div className="mx-auto max-w-5xl">
          {/* Promoters Guidelines */}
          <div className="mb-16">
            <div className="max-w-3xl text-left mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Developer Accountability
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight mt-2">
                RERA For Promoters
              </h2>
              <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
                Following are the guidelines that are set up by RERA for the promoters:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {promoterGuidelines.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-brand-light border border-brand-border/40 rounded-2xl p-6 shadow-sm hover:shadow-premium transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-bold font-display">
                      {idx + 1}
                    </div>
                    <h3 className="text-base font-bold font-display text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Functions and Duties of a Promoter */}
          <div className="pt-8 border-t border-brand-border/40">
            <div className="max-w-3xl text-left mb-10">
              <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
                Statutory Responsibilities
              </span>
              <h3 className="text-xl sm:text-3xl font-extrabold font-display text-primary leading-tight mt-2">
                Functions and Duties of a Promoter
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {promoterDuties.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-brand-border/40 hover:border-secondary/60 rounded-2xl p-6 transition-all duration-300 flex flex-col gap-2 shadow-sm"
                >
                  <div className="flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-wider">
                    <Briefcase className="h-4 w-4" />
                    <span>Promoter Duty</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold font-display text-primary">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. RERA FOR REAL ESTATE AGENTS ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-4 sm:px-8 lg:px-12 border-b border-brand-border/30">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl text-left mb-10">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Brokers & Channel Partners
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary leading-tight mt-2">
              RERA For Real Estate Agents
            </h2>
            <div className="w-20 h-1 bg-secondary rounded-full mt-3 mb-6" />
            
            <p className="text-xs sm:text-sm md:text-base text-brand-text leading-relaxed font-light">
              The Real Estate agents are the medium between a buyer and a promoter. They have a strong presence in the real estate sector as they have the marketing skills to profitably buy or sell a property. A buyer does not know all the property details and a promoter does not sell his properties himself; thus, a real estate agent’s role is of paramount importance.
            </p>
            <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light mt-3">
              Following are the guidelines for RERA Registration for Agents that a real estate agent must strictly follow:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {agentGuidelines.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border/40 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-premium hover:border-secondary transition-all duration-300 flex items-start gap-4"
              >
                <div className="h-8 w-8 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 text-xs font-bold font-display mt-0.5">
                  {`0${idx + 1}`}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold font-display text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. DEFECT LIABILITY CONNECTION TO HOME INSPECTION ── */}
      <section className="py-14 sm:py-20 bg-white px-4 sm:px-8 lg:px-12 border-b border-brand-border/30">
        <div className="mx-auto max-w-5xl">
          <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-premium">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,0,22,0.25),transparent_60%)] pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Section 14(3) Enforcement
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight text-white">
                  How Professional Home Inspection Secures Your 5-Year RERA Warranty
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light mt-4">
                  RERA mandates that builders rectify structural, electrical, plumbing, and workmanship defects within 30 days free of cost. However, identifying hidden micro-cracks, deep wall moisture, faulty earthing, or seepage requires scientific diagnostic equipment like thermal imaging, non-destructive moisture meters, and air quality sensors.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Scientific Defect Verification</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Legally Valid Snagging Report</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>Thermal Dampness Audit</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-white/90">
                    <CheckCircle className="h-4 w-4 text-secondary shrink-0" />
                    <span>30-Day Builder Repair Snag List</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-full text-center">
                  <p className="text-xs uppercase font-bold text-secondary tracking-wider">
                    Classic Solution Inspection
                  </p>
                  <p className="text-lg font-bold text-white mt-1">
                    Inspect Before Signing Handover
                  </p>
                  <p className="text-xs text-white/70 mt-2 font-light">
                    Get an exhaustive 200+ point property diagnostic report before paying your final milestone installment.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full mt-5 py-3.5 px-6 bg-secondary hover:bg-secondary-light text-white font-bold rounded-xl shadow-lg transition-all duration-300 text-xs sm:text-sm"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>Book Handover Inspection</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. STATEWISE RERA UPDATES TABS ── */}
      <section className="py-14 sm:py-20 bg-brand-light px-4 sm:px-8 lg:px-12 border-b border-brand-border/30">
        <div className="mx-auto max-w-4xl flex flex-col items-center gap-10">
          <div className="text-center max-w-2xl">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">
              Regional Regulatory Bodies
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-primary mt-2">
              State-Specific RERA Updates
            </h2>
            <p className="text-brand-muted mt-3 text-xs sm:text-sm leading-relaxed font-light">
              Explore ongoing RERA rulings and amendments in major states enforcing construction quality monitoring and consumer transparency.
            </p>
          </div>

          {/* Custom Tabs */}
          <div className="flex gap-2 p-1.5 bg-white border border-brand-border/45 rounded-xl w-full max-w-md">
            <button
              onClick={() => setActiveStateTab("maharashtra")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${
                activeStateTab === "maharashtra"
                  ? "bg-primary text-white shadow-md"
                  : "text-brand-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              Maharashtra (MahaRERA)
            </button>
            <button
              onClick={() => setActiveStateTab("kerala")}
              className={`flex-1 py-3 px-4 text-xs sm:text-sm font-bold rounded-lg transition-all duration-300 ${
                activeStateTab === "kerala"
                  ? "bg-primary text-white shadow-md"
                  : "text-brand-muted hover:text-primary hover:bg-black/5"
              }`}
            >
              Kerala (K-RERA)
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="w-full bg-white border border-brand-border/30 rounded-2xl p-6 sm:p-8 min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStateTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-border/40 pb-4 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-primary font-display">
                      {stateUpdates[activeStateTab].title}
                    </h3>
                    <p className="text-xs text-brand-muted mt-1 leading-none">
                      Implementation: <span className="font-semibold text-brand-text">{stateUpdates[activeStateTab].established}</span>
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-full w-fit">
                    Active RERA Council
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {stateUpdates[activeStateTab].highlights.map((hl, i) => (
                    <div key={i} className="bg-brand-light border border-brand-border/30 rounded-xl p-5 shadow-sm hover:border-secondary transition-all duration-300">
                      <p className="text-xs font-extrabold text-secondary font-display mb-1">{`0${i + 1}.`}</p>
                      <h4 className="text-xs sm:text-sm font-bold text-primary font-display leading-snug mb-2">
                        {hl.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-brand-muted leading-relaxed font-light">
                        {hl.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 10. PRE-POSSESSION CTA SECTION ── */}
      <section className="py-14 sm:py-20 bg-primary px-4 sm:px-8 lg:px-12 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(227,0,22,0.2),transparent_60%)] pointer-events-none" />
        <div className="mx-auto max-w-5xl relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl text-left">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs sm:text-sm">
              Don&apos;t Handover Checklist Blindly
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight mt-2">
              Secure Your RERA Defect Warranty Today
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/65 leading-relaxed font-light mt-4 max-w-md">
              Before taking keys or signing possession documents, hire our professional engineering inspection team. We provide a certified checklist of structural, electrical, and plumbing defects to submit to your builder for 100% free rectification.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-8 sm:px-10 py-4 bg-secondary hover:bg-secondary-light text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-center text-xs sm:text-sm"
            >
              Book Pre-Possession Scan
            </Link>
            <Link
              href="/services"
              className="px-8 sm:px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/30 transition-all duration-300 text-center text-xs sm:text-sm"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
