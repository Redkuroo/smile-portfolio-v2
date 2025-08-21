"use client";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Certificates() {
  const [selectedId, setSelectedId] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const certificateData = [
    {
      id: 1,
      title: "Google I/O Extended 2024 Volunteer",
      issuer: "Google / Volunteer",
      category: "it",
      date: "2024",
      tags: ["Google", "Volunteering"],
      image: "/projects/goplus.png",
      url: "#"
    },
    {
      id: 2,
      title: "Fullstack Web Development",
      issuer: "Coursera / University",
      category: "programming",
      date: "Mar 2024",
      tags: ["Web", "Fullstack"],
      image: "/a.jpg",
      url: "#"
    },
    {
      id: 3,
      title: "Advanced React",
      issuer: "Frontend Masters",
      category: "programming",
      date: "Jun 2024",
      tags: ["React", "Frontend"],
      image: "/b.jpg",
      url: "#"
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      issuer: "Design Institute",
      category: "uiux",
      date: "Dec 2023",
      tags: ["Design", "UX"],
      image: "/c.jpg",
      url: "#"
    },
    {
      id: 5,
      title: "Certificate 5",
      issuer: "Issuer 5",
      category: "competitions",
      date: "2022",
      tags: ["TagA"],
      image: "/a.jpg",
      url: "#"
    },
    {
      id: 6,
      title: "Certificate 6",
      issuer: "Issuer 6",
      category: "it",
      date: "2021",
      tags: ["TagB"],
      image: "/b.jpg",
      url: "#"
    },
    {
      id: 7,
      title: "Certificate 7",
      issuer: "Issuer 7",
      category: "competitions",
      date: "2020",
      tags: ["TagC"],
      image: "/c.jpg",
      url: "#"
    }
  ];

  const filterOptions = [
    { id: "all", label: "All" },
    { id: "competitions", label: "Competitions" },
    { id: "programming", label: "Programming Related Workshops" },
    { id: "it", label: "IT Related Gatherings" },
    { id: "uiux", label: "UI/UX" }
  ];

  const filteredCerts = useMemo(() => {
    if (activeFilter === "all") return certificateData;
    return certificateData.filter((c) => {
      const cats = Array.isArray(c.category) ? c.category : [c.category];
      return cats.map(x => x.toLowerCase()).includes(activeFilter.toLowerCase());
    });
  }, [activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredCerts.length / pageSize));
  const pagedCerts = useMemo(() => filteredCerts.slice((page - 1) * pageSize, page * pageSize), [page, filteredCerts]);
  const selectedCert = filteredCerts.find((c) => c.id === selectedId) || filteredCerts[0] || certificateData[0];

  // ensure selectedId exists on page change
  useEffect(() => {
    if (!pagedCerts.some((c) => c.id === selectedId)) {
      setSelectedId(pagedCerts[0]?.id || filteredCerts[0]?.id || certificateData[0].id);
    }
  }, [page, filteredCerts]);

  // reset page when filter changes
  useEffect(() => setPage(1), [activeFilter]);

  return (
    <section id="certificates" className="relative w-full px-6 md:px-28 py-16 overflow-hidden bg-transparent light:bg-transparent">
       {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] light:text-[#18191A]">
          Certificates
        </h2>
        <div className="w-20 h-1.5 bg-[var(--accent)] mb-8 rounded-full" />

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === option.id
                  ? "bg-[var(--accent)] text-white shadow-lg"
                  : "bg-gray-800/40 text-gray-300 hover:bg-gray-700/40 light:bg-[#f5e6d8] light:text-gray-700 light:hover:bg-[#e2cdb0]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:flex lg:items-start lg:gap-10">
        {/* Left: big typographic title and meta */}
        <div className="lg:flex-1">
          <div className="max-w-3xl">
            <div className="text-[12px] text-white/60 mb-6">16.</div>
            <h3 className="font-serif italic text-5xl md:text-7xl leading-tight text-white/95 tracking-tight">
              {selectedCert.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              {selectedCert.tags?.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-black/40 text-white text-sm border border-white/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={selectedCert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-4 py-2 rounded-md hover:bg-white/5 transition"
                onMouseEnter={() => setSelectedId(selectedCert.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                View Certificate
              </a>
            </div>

            <div className="mt-6 text-sm text-white/70">
              Issue Date: <span className="font-semibold text-white/90">{selectedCert.date}</span>
            </div>
          </div>
        </div>

        {/* Right: preview card */}
        <div className="hidden lg:block w-96">
          <div className="text-white/80 mb-3">Project Overview</div>
          <div className="bg-black/40 rounded-xl p-4">
            <div className="relative w-full h-56 rounded-md overflow-hidden">
              <motion.div
                key={selectedCert.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.28 }}
                className="w-full h-full"
              >
                <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain" />
              </motion.div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {selectedCert.tags?.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full bg-black/30 text-white text-xs border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails + pagination */}
      <div className="mt-12">
        <div className="flex flex-wrap gap-4 items-center">
          {pagedCerts.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setSelectedId(cert.id)}
              onMouseEnter={() => setSelectedId(cert.id)}
              className={`flex items-center gap-3 p-2 rounded-md transition ${selectedId === cert.id ? 'ring-2 ring-[var(--accent)]' : 'hover:scale-105'}`}
            >
              <div className="w-40 h-24 relative rounded-md overflow-hidden bg-gray-800">
                <Image src={cert.image} alt={cert.title} fill className="object-cover" />
              </div>
              <div className="text-left">
                <div className="text-sm text-white/70">{cert.issuer}</div>
                <div className="font-medium text-white">{cert.title}</div>
                <div className="text-xs text-white/60">{cert.date}</div>
              </div>
            </button>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1 rounded-md bg-gray-800 text-white/90 disabled:opacity-40">Prev</button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 rounded-md ${page === i + 1 ? 'bg-[var(--accent)] text-white' : 'bg-gray-700 text-white/80'}`}>{i + 1}</button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-1 rounded-md bg-gray-800 text-white/90 disabled:opacity-40">Next</button>
          </div>
        )}
      </div>
    </section>
  );
}
