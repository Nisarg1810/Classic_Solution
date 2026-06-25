"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="text-center max-w-2xl px-6">
        <span className="text-secondary font-bold tracking-wider uppercase text-xs sm:text-sm">Waterproofing Results</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-primary mt-2">Before vs After Comparison</h2>
        <p className="text-brand-muted mt-3 text-sm sm:text-base">
          Drag the slider to see how our waterproofing and dampness control solutions restore severely damaged structures to pristine, healthy conditions.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-4xl h-[300px] sm:h-[450px] rounded-3xl overflow-hidden shadow-premium select-none border border-brand-border/30 cursor-ew-resize bg-brand-light"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Before Image (Damaged) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop"
            alt="Water Damaged Wall Before Classic Solution Inspection"
            fill
            sizes="(max-width: 1024px) 100vw, 1000px"
            priority
            className="object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-red-600/90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full backdrop-blur-sm shadow-md">
            Damaged Wall (Before)
          </div>
        </div>

        {/* After Image (Restored) - Clipped Width */}
        <div
          className="absolute inset-0 h-full overflow-hidden transition-all duration-75"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 w-full max-w-4xl h-[300px] sm:h-[450px]" style={{ width: containerRef.current?.getBoundingClientRect().width || 800 }}>
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
              alt="Waterproofed Restored Wall After Classic Solution Inspection"
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-green-600/90 text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-full backdrop-blur-sm shadow-md whitespace-nowrap">
            Restored Wall (After)
          </div>
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary border-4 border-white text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
            <MoveHorizontal className="h-5 w-5" />
          </div>
        </div>
      </div>
      
      <p className="text-xs text-brand-muted flex items-center gap-2 bg-brand-light px-4 py-2 rounded-full border border-brand-border/30 animate-pulse">
        <span>←</span> Drag the slider left & right to inspect details <span>→</span>
      </p>
    </div>
  );
}
