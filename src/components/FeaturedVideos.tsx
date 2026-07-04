"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

const featuredVideos = [
  {
    id: "UHt1RqhpNVM",
    title: "Office Timing ka Maara DEV Hamara, Bhag Bhag ke Thak gaya Bechara !!!",
  },
  {
    id: "GvbXO3pIHpk",
    title: "Live Demo on Home Inspection Process. Learn How it is Done!",
  },
  {
    id: "r6n5hkmGxDI",
    title: "Explaining the Home Inspection Process Step by Step",
  },
];

export default function FeaturedVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://macj-abuyerschoice.com/wp-content/uploads/2017/04/Home-Inspection-Coverage-1024x485.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#111]/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-8 sm:px-16 lg:px-28">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10 tracking-wide">
          Featured Videos
        </h2>

        {/* Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {featuredVideos.map((video) => (
            <div key={video.id} className="flex flex-col gap-3 group">
              {/* Thumbnail */}
              <div
                className="relative aspect-video overflow-hidden cursor-pointer rounded-sm shadow-lg ring-0 hover:ring-2 hover:ring-white/50 transition-all duration-300"
                onClick={() => setActiveVideo(video.id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-all duration-300" />

                {/* Play Button � always visible on all cards */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-secondary/90 hover:bg-secondary flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110">
                    <Play className="h-6 w-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <p className="text-white/90 text-sm leading-snug text-center font-medium px-1">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="Featured Video"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <button
            className="absolute top-6 right-6 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
