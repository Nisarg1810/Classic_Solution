"use client";

import Image from "next/image";

export default function ClientLogos() {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-brand-border/20">
      <div className="mx-auto max-w-5xl px-8 sm:px-16 lg:px-28">
        
        {/* Centered Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3.5xl font-bold font-display text-[#333333]">
            Clients
          </h2>
        </div>

        {/* Carousel constrained to page width and margins */}
        <div className="relative w-full overflow-hidden py-4 bg-white">
          {/* Infinite scrolling wrapper */}
          <div className="flex w-[200%] animate-scroll whitespace-nowrap gap-0">
            <div className="w-1/2 flex justify-center items-center shrink-0">
              <Image
                src="https://macj-abuyerschoice.com/wp-content/uploads/2018/10/macjclientlist.jpg"
                alt="MACJ Corporate Clients List"
                width={2400}
                height={200}
                className="object-contain h-24 sm:h-36 w-auto select-none"
                unoptimized
                priority
              />
            </div>
            <div className="w-1/2 flex justify-center items-center shrink-0">
              <Image
                src="https://macj-abuyerschoice.com/wp-content/uploads/2018/10/macjclientlist.jpg"
                alt="MACJ Corporate Clients List Duplicate"
                width={2400}
                height={200}
                className="object-contain h-24 sm:h-36 w-auto select-none"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
