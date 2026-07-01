"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priyanka Jalan",
    role: "Home Buyer",
    location: "Residential Property, Kolkata",
    rating: 5,
    comment: "MACJ's inspection before my flat purchase revealed several hidden seepage issues and electrical concerns. The professional report helped me negotiate better and fix issues before moving in. Best money spent!",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Priyanka_Jalan.jpg",
  },
  {
    id: 2,
    name: "Mayur Trebrewal",
    role: "Property Investor",
    location: "Residential Complex, Mumbai",
    rating: 5,
    comment: "We had seepage issues for years. MACJ used thermal imaging to locate the exact source without breaking any walls. Their detailed report and consulting made the repair targeted and affordable.",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/mayur_tebrewal.jpg",
  },
  {
    id: 3,
    name: "Swajan Datta",
    role: "Homeowner",
    location: "Apartment, Pune",
    rating: 5,
    comment: "The MACJ team was extremely professional and thorough. They found hollow tiles, electrical anomalies, and moisture infiltration that the builder had never disclosed. The report saved us from a very costly mistake.",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Swajan_Datta.jpg",
  },
  {
    id: 4,
    name: "Vivek Jaiswal",
    role: "New Home Buyer",
    location: "New Flat, Hyderabad",
    rating: 5,
    comment: "MACJ's pre-handover inspection was eye-opening. They identified over 40 defects with photographic evidence, categorized by severity. The builder had to fix everything before handover — worth every rupee.",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Vivek_Jaiswal.jpg",
  },
  {
    id: 5,
    name: "Sanjeev Gupta",
    role: "Corporate Client",
    location: "Office Property, Delhi",
    rating: 5,
    comment: "Excellent service. The thermal imaging inspection identified overheated panels in our office complex before a potential electrical failure. Their team was knowledgeable and the report crystal clear.",
    imageUrl: "https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Sanjeev_Gupta.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 py-6 mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1280: { slidesPerView: 3, spaceBetween: 24 },
        }}
        className="w-full pb-14"
      >
        {testimonials.map((test) => (
          <SwiperSlide key={test.id} className="h-auto">
            <div className="flex flex-col justify-between h-full bg-brand-light border border-brand-border/40 p-5 sm:p-8 rounded-3xl shadow-premium relative group transition-all duration-300 hover:shadow-premium-hover">
              <div className="absolute right-4 sm:right-6 top-4 sm:top-6 text-primary/10">
                <Quote className="h-10 w-10 sm:h-16 sm:w-16" />
              </div>

              <div className="flex gap-1 mb-4 sm:mb-6 text-[#FBBF24]">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                ))}
              </div>

              <p className="text-brand-text text-xs sm:text-sm leading-relaxed italic mb-6 sm:mb-8 relative z-10">
                &ldquo;{test.comment}&rdquo;
              </p>

              <div className="flex items-center gap-3 sm:gap-4 border-t border-brand-border/30 pt-4 sm:pt-6 mt-auto">
                <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 rounded-full overflow-hidden border-2 border-secondary shadow-sm">
                  <Image
                    src={test.imageUrl}
                    alt={test.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm sm:text-base font-display">{test.name}</h4>
                  <p className="text-[10px] sm:text-xs text-brand-muted leading-snug">{test.role} • {test.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
