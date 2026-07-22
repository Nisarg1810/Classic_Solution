

import Link from "next/link";

const categories = [
  {
    label: "Blogs",
    date: "February 12, 2022",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2022/02/How-Home-Inspection-solves-the-problems-of-Waterproofing-Companies-600x400-1.jpg",
    title: "How Home Inspection solves the problems of Waterproofing Companies?",
    href: "/blogs",
  },
  {
    label: "Case Studies",
    date: "February 9, 2019",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2019/02/Damp-Seepage-Case-Study-MACJ.jpg",
    title: "Complex Damp / Seepage Problem - Simple, Long Term, Least Destructive & Low Cost Solution",
    href: "/case-studies",
  },
  {
    label: "News",
    date: "November 25, 2020",
    image: "https://macj-abuyerschoice.com/wp-content/uploads/2020/11/Certificate-of-Recognition-Startup-India.jpg",
    title: "Certificate of Recognition - Startup India",
    href: "/news",
  },
];

export default function LatestUpdates() {
  return (
    <section className="py-14 sm:py-20 bg-[#f5f5f5] px-8 sm:px-16 lg:px-28 border-t border-neutral-200">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {categories.map((cat) => (
            <div key={cat.label} className="flex flex-col gap-3">
              {/* Category Label */}
              <h3 className="text-base font-bold text-[#333333] font-display">
                {cat.label}
              </h3>

              {/* Card */}
              <Link href={cat.href} className="flex flex-col bg-white border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                {/* Image + Date Badge */}
                <div className="relative overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Red date badge */}
                  <span className="absolute bottom-0 left-0 bg-secondary text-white text-[11px] font-semibold px-3 py-1 leading-tight">
                    {cat.date}
                  </span>
                </div>

                {/* Title */}
                <div className="p-4">
                  <p className="text-[13px] font-semibold text-[#333333] leading-snug group-hover:text-secondary transition-colors">
                    {cat.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
