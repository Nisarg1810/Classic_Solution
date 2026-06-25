"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "thermal" | "electrical" | "moisture" | "industrial" | "property";
  imageUrl: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Thermal Imaging — Electrical Panel Scan",
    category: "thermal",
    imageUrl: "/images/thermal_camera_check.png",
  },
  {
    id: 2,
    title: "Electrical Hotspot Detection — Switchboard",
    category: "electrical",
    imageUrl: "/images/underground_leak_detector.png",
  },
  {
    id: 3,
    title: "Wall Scanner — Rebar & Conduit Mapping",
    category: "property",
    imageUrl: "/images/metal_detector_drilling.png",
  },
  {
    id: 4,
    title: "Moisture Intrusion — Wall Dampness Scan",
    category: "moisture",
    imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Industrial Equipment — Motor Thermal Scan",
    category: "industrial",
    imageUrl: "/images/video_borescope_test.png",
  },
  {
    id: 6,
    title: "Commercial Building — Envelope Inspection",
    category: "property",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Industrial Plant — Transformer Inspection",
    category: "industrial",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Thermal Scan — Moisture & Energy Loss",
    category: "thermal",
    imageUrl: "/images/hero_background.png",
  },
  {
    id: 9,
    title: "Property Health Audit — Full Assessment",
    category: "property",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
];

const categories = [
  { value: "all", label: "All Photos" },
  { value: "thermal", label: "Thermal Scans" },
  { value: "electrical", label: "Electrical" },
  { value: "moisture", label: "Moisture" },
  { value: "industrial", label: "Industrial" },
  { value: "property", label: "Property" },
];

export default function GalleryMasonry() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredItems = filter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="flex flex-wrap justify-center gap-2 max-w-2xl px-6">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setFilter(cat.value)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === cat.value
                ? "bg-primary text-white shadow-md scale-105"
                : "bg-brand-light text-brand-text hover:bg-brand-border/40 border border-brand-border/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-7xl"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightboxIndex(idx)}
              className={`relative overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer shadow-premium hover:shadow-premium-hover border border-brand-border/20 ${
                idx >= 4 && !isExpanded ? "hidden sm:block" : "block"
              }`}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">{item.category}</span>
                <h4 className="text-white text-base sm:text-lg font-bold font-display mt-1">{item.title}</h4>
                <div className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredItems.length > 4 && (
        <div className="flex sm:hidden mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3 bg-primary hover:bg-secondary text-white font-bold rounded-full transition-all shadow-md active:scale-95 text-xs uppercase tracking-wider"
          >
            {isExpanded ? "Show Less" : "Show All"}
          </button>
        </div>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              aria-label="Previous Image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[80vh] aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-2xl"
            >
              <Image
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white max-w-xl">
              <h3 className="text-lg font-bold font-display">{filteredItems[lightboxIndex].title}</h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1 uppercase tracking-widest">{filteredItems[lightboxIndex].category}</p>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              aria-label="Next Image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
