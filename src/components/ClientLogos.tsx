"use client";


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
        <div className="relative w-full overflow-hidden py-6 bg-white">
          {/* Infinite scrolling wrapper using raw img to bypass flex-basis scaling constraints */}
          <div className="flex w-max animate-scroll gap-0">
            <img
              src="https://macj-abuyerschoice.com/wp-content/uploads/2018/10/macjclientlist.jpg"
              alt="MACJ Corporate Clients List"
              className="h-20 md:h-28 w-auto max-w-none shrink-0 select-none"
              draggable="false"
            />
            <img
              src="https://macj-abuyerschoice.com/wp-content/uploads/2018/10/macjclientlist.jpg"
              alt="MACJ Corporate Clients List Duplicate"
              className="h-20 md:h-28 w-auto max-w-none shrink-0 select-none"
              draggable="false"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
