"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

// Import Swiper styles
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
    name: "Rajesh Sharma",
    role: "Homeowner",
    location: "Satellite, Ahmedabad",
    rating: 5,
    comment: "Classic Solution did a fantastic job detecting leakage in our penthouse roof. The inspector arrived with high-tech thermal cameras and found a damp spot inside the kitchen wall that we didn't even know existed. Their report was highly detailed. Saved us lakhs in repairs!",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Vikram Malhotra",
    role: "Property Investor",
    location: "Kalawad Road, Rajkot",
    rating: 5,
    comment: "I always hire Classic Solution before finalising any property purchase. Their home inspections are extremely scientific. They check electrical panels, moisture in walls, plumbing pressure, and even hairline concrete cracks. The digital report holds a lot of trust.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Priyanka Patel",
    role: "Villa Owner",
    location: "Akota, Vadodara",
    rating: 5,
    comment: "Pre-monsoon inspection by Classic Solution is a must for our villa every year. They check the roof waterproofing and bathroom dampness levels using moisture testing meters. The consultants recommended very effective solutions that solved our dampness problems completely.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Anil Desai",
    role: "Apartment Owner",
    location: "Vesu, Surat",
    rating: 5,
    comment: "Severe damp wall issues were affecting our children's health. Classic Solution came in, conducted moisture scanning and mold checking, and pin-pointed the plumbing leak originating from the apartment above. Highly professional team, transparent pricing, and fast service.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-6xl px-6 py-6 mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="w-full pb-14"
      >
        {testimonials.map((test) => (
          <SwiperSlide key={test.id} className="h-auto">
            <div className="flex flex-col justify-between h-full bg-brand-light border border-brand-border/40 p-8 rounded-3xl shadow-premium relative group transition-all duration-300 hover:shadow-premium-hover">
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 text-primary/10">
                <Quote className="h-16 w-16" />
              </div>

              {/* Review Stars */}
              <div className="flex gap-1 mb-6 text-[#FBBF24]">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-brand-text text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                &ldquo;{test.comment}&rdquo;
              </p>

              {/* Author Metadata */}
              <div className="flex items-center gap-4 border-t border-brand-border/30 pt-6 mt-auto">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-secondary shadow-sm">
                  <Image
                    src={test.imageUrl}
                    alt={test.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-primary font-bold text-base font-display">{test.name}</h4>
                  <p className="text-xs text-brand-muted">{test.role} • {test.location}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
