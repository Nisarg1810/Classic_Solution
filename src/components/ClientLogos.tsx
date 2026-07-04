"use client";

export default function ClientLogos() {
  return (
    <section className="py-14 sm:py-20 bg-white border-t border-brand-border/20">
      <div className="mx-auto max-w-5xl px-8 sm:px-16 lg:px-28">

        {/* Centered Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#333333]">
            Clients
          </h2>
        </div>

        {/* Marquee container � overflow-hidden clips the track */}
        <div
          style={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            paddingTop: "1.5rem",
            paddingBottom: "1.5rem",
          }}
        >
          {/* Left & right fade masks */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, white 0%, transparent 8%, transparent 92%, white 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/*
            The track: two identical images placed side-by-side.
            We translate from 0 to -50% so the second copy fills in seamlessly.
          */}
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee-clients 35s linear infinite",
              willChange: "transform",
            }}
          >
            <img
              src="https://macj-abuyerschoice.com/wp-content/uploads/2018/10/macjclientlist.jpg"
              alt="MACJ Corporate Clients List"
              style={{
                height: "80px",
                width: "auto",
                flexShrink: 0,
                userSelect: "none",
                display: "block",
              }}
              draggable={false}
            />
            <img
              src="https://macj-abuyerschoice.com/wp-content/uploads/2018/10/macjclientlist.jpg"
              alt="MACJ Corporate Clients List Duplicate"
              style={{
                height: "80px",
                width: "auto",
                flexShrink: 0,
                userSelect: "none",
                display: "block",
              }}
              draggable={false}
            />
          </div>
        </div>

      </div>

      {/* Inject keyframes inline � guarantees the animation always loads */}
      <style>{`
        @keyframes marquee-clients {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
