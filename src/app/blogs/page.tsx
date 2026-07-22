"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User, Tag, BookOpen } from "lucide-react";
import PageHero from "@/components/PageHero";

const blogPosts = [
  {
    id: 1,
    title: "How Home Inspection solves the problems of Waterproofing Companies?",
    date: "February 12, 2022",
    author: "Classic Solution Editorial",
    category: "Technical Insights",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2022/02/How-Home-Inspection-solves-the-problems-of-Waterproofing-Companies-600x400-1.jpg",
    summary: "Thermal imaging and pinless moisture meters allow home inspectors to pinpoint hidden leaks, saving waterproofing contractors time and preventing guesswork repairs.",
    content: "Waterproofing without thermal detection often leads to temporary fixes. With advanced infrared imaging, inspectors identify the exact water ingress origin inside walls and ceilings before applying expensive chemical treatments."
  },
  {
    id: 2,
    title: "Why Pre-Handover Inspection is Critical for New Apartment Buyers",
    date: "January 28, 2023",
    author: "Classic Solution Team",
    category: "Home Buying Guide",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/07-540x378.jpg",
    summary: "Discover why inspecting your property before final possession saves buyers millions in post-handover repair headaches.",
    content: "Even brand new apartments often hide hollow tiles, faulty wiring connections, plumbing seepage, and improper door/window sealing. A professional audit ensures builder rectifications before move-in."
  },
  {
    id: 3,
    title: "Understanding Electrical Safety & Thermal Anomalies in Residential Properties",
    date: "October 15, 2022",
    author: "Electrical Audit Division",
    category: "Safety & Maintenance",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/01/Scope-of-Services-03-360x240.jpg",
    summary: "Overloaded circuits and loose electrical terminals produce invisible heat signatures that can lead to electrical fires.",
    content: "Infrared thermography scans electrical distribution boards to highlight loose connections and unbalanced loads long before trip-outs or short circuits occur."
  }
];

export default function BlogsPage() {
  return (
    <div className="relative w-full bg-brand-light min-h-screen pb-20">
      <PageHero
        badge="Knowledge Center"
        title="Blogs & Expert"
        titleHighlight="Home Insights"
        subtitle="Articles, technical guides, and advice on home inspections, property health, and maintenance."
        breadcrumbs={[{ label: "Blogs" }]}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-brand-border/30 rounded-3xl overflow-hidden shadow-sm hover:shadow-premium transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute top-3 left-3 bg-secondary text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-brand-muted mb-3 font-light">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-secondary" />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="text-base font-bold font-display text-primary leading-snug mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-xs text-brand-text font-light leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-border/20 flex items-center justify-between">
                  <span className="text-xs text-brand-muted font-medium flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-secondary" />
                    {post.author}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-secondary uppercase tracking-wider group-hover:text-primary transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
