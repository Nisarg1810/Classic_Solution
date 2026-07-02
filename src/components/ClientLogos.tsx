"use client";

import Image from "next/image";

export default function ClientLogos() {
  return (
    <section className="py-12 bg-white border-t border-brand-border/10 overflow-hidden">
      <div className="mx-auto max-w-5xl px-8 sm:px-16 lg:px-28 text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold font-display text-primary uppercase tracking-wider">
          Our Valued Corporate Clients
        </h2>
      </div>

      <div className="relative w-full overflow-hidden py-4 bg-white">
        {/* Infinite scrolling wrapper */}
        <div className="flex w-[200%] animate-scroll whitespace-nowrap gap-0">
          <div className="w-1/2 flex justify-center items-center shrink-0">
            <Image
              src="https://macj-abuyerschoice.com/wp-content/uploads/2018/10/macjclientlist.jpg"
              alt="MACJ Corporate Clients List"
              width={1600}
              height={100}
              className="object-contain h-12 sm:h-16 w-auto select-none"
              unoptimized
              priority
            />
          </div>
          <div className="w-1/2 flex justify-center items-center shrink-0">
            <Image
              src="https://macj-abuyerschoice.com/wp-content/uploads/2018/10/macjclientlist.jpg"
              alt="MACJ Corporate Clients List Duplicate"
              width={1600}
              height={100}
              className="object-contain h-12 sm:h-16 w-auto select-none"
              unoptimized
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
