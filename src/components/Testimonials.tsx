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
    name: "Rajesh Mehta",
    role: "Facility Manager",
    location: "Hotel Grand, Rajkot",
    rating: 5,
    comment: "Classic Solution's thermal inspection of our electrical panels revealed three critical hotspots that could have caused a serious fire. Their digital report was detailed and professional. The preventive maintenance plan they provided has transformed how we manage our facility.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Dr. Priya Shah",
    role: "Hospital Administrator",
    location: "City Care Hospital, Ahmedabad",
    rating: 5,
    comment: "For a hospital, unplanned electrical downtime is simply not an option. Classic Solution identified overloaded circuits and moisture ingress in our critical care wing using infrared thermography. Their response was fast, professional, and the report was thorough.",
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Suresh Patel",
    role: "Plant Manager",
    location: "Manufacturing Unit, Surat",
    rating: 5,
    comment: "We had two motor failures in six months before engaging Classic Solution. Their thermal scan detected multiple overheating bearings and faulty switchgear. Following their recommendations, we have had zero unplanned breakdowns in the past year. Excellent ROI.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Ankit Desai",
    role: "Property Manager",
    location: "Commercial Complex, Vadodara",
    rating: 5,
    comment: "Classic Solution conducted a complete thermal and moisture inspection of our commercial building. They found hidden water ingress causing damage to the electrical conduits. The risk priority matrix in their report helped us plan repairs efficiently. Highly recommended.",
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
              <div className="absolute right-6 top-6 text-primary/10">
                <Quote className="h-16 w-16" />
              </div>

              <div className="flex gap-1 mb-6 text-[#FBBF24]">
                {Array.from({ length: test.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              <p className="text-brand-text text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                &ldquo;{test.comment}&rdquo;
              </p>

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
