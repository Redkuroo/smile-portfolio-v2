"use client";
import Image from "next/image";

export default function Certificates() {
  const certificateData = [
    {
      id: 1,
      title: "Fullstack Web Development",
      issuer: "Coursera / University",
      date: "Mar 2024",
      image: "/a.jpg",
      url: "#"
    },
    {
      id: 2,
      title: "Advanced React",
      issuer: "Frontend Masters",
      date: "Jun 2024",
      image: "/b.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      issuer: "Design Institute",
      date: "Dec 2023",
      image: "/c.jpg",
      url: "#"
    }
  ];

  return (
    <section id="certificates" className="relative w-full px-6 md:px-28 py-16 overflow-hidden bg-transparent light:bg-transparent">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] light:text-[#18191A]">
          Certificates
        </h2>
        <div className="w-20 h-1.5 bg-[var(--accent)] mb-8 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificateData.map((cert) => (
          <div key={cert.id} className="group relative overflow-hidden bg-gray-900 light:bg-[#f5e6d8] rounded-md">
            <div className="w-full relative aspect-[16/9]">
              <Image
                src={cert.image}
                alt={`${cert.title} Certificate`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 440px"
              />
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end">
              <div className="w-full p-4 text-white">
                <div className="text-sm text-[var(--accent)] font-semibold uppercase tracking-wide">{cert.issuer}</div>
                <h3 className="text-lg font-bold mt-1 light:text-[#18191A]">{cert.title}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xs text-white/90">{cert.date}</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--accent)] hover:bg-[#6d3bbd] text-white text-sm px-3 py-1 rounded-sm font-medium"
                    aria-label={`View ${cert.title}`}
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
