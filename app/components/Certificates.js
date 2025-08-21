"use client";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Certificates() {
  const [selectedId, setSelectedId] = useState(1);
  const [activeFilter, setActiveFilter] = useState("all");
  const [page, setPage] = useState(1);
  const pageSize = 4;

  const certificateData = [
    {
      id: 1,
      key: "cert-1",
      title: 'Research Presenter for the Parallel Theme 1 - Data Innovation',
      issuer: 'Center for Research and Publication',
      date: '2025',
      image: '/certificates/research 2025.jpg',
      description: 'Presented our capstone project titled Dresscan during the Joint Research Conference of Maritime Education, Criminal Justice Education and College of Engineering and Technology.',
      category: 'competition'
    },
  {
    id: 2,
    key: "cert-2",
    title: 'Introduction to HTML',
    issuer: 'Simplilearn',
    date: '2025',
    image: '/certificates/html 2025.jpg',
    description: 'Deepening skills in HTML.',
    category: 'programming'
  },
  {
    id: 3,
    key: "cert-3",
    title: 'UI! UXpect the unxpected | UI/UX For Starters Workshop',
    issuer: 'Google Developer Groups on Campus UIC',
    date: '2025',
    image: '/certificates/uiux.png',
    description: 'Workshop for fostering a productive UI/UX learning',
    category: 'uiux'
  },
  {
    id: 4,
    key: "cert-4",
    title: 'Capstone Project Writing 1 Workshop',
    issuer: 'Holy Cross of Davao College - BSIT',
    date: '2024',
    image: '/certificates/CAPSTONE PROJECT WRITING 1 WORKSHOP_CERTIFICATES.pdf.jpg',
    description: 'Participation for the capstone project writing workshop.',
    category: 'programming'
  },
  {
    id: 5,
    key: "cert-5",
    title: 'Capstone Project Writing 2 Workshop',
    issuer: 'Holy Cross of Davao College - BSIT',
    date: '2024',
    image: '/certificates/CAPSTONE PROJECT WRITING 2 WORKSHOP_CERTIFICATES.pdf.jpg',
    description: 'Participation for the capstone project writing workshop.',
    category: 'programming'
  },
  {
    id: 6,
    key: "cert-6",
    title: 'JavaScript Tutorial: Learn JavaScript in 1 Hour',
    issuer: 'Learnoverse',
    date: '2024',
    image: '/certificates/javascript 2024.jpg',
    description: 'An Online Course for JavaScript.',
    category: 'programming'
  },
  {
    id: 7,
    key: "cert-7",
    title: 'Blockchain Campus Conference 2024',
    issuer: 'The Blocklabs, Inc.',
    date: '2024',
    image: '/certificates/Js Mella_BCC Mindanao 2024 Cert.pdf.jpg',
    description: 'Attended the Blockchain Conference at Mapua Malayan Colleges Mindanao.',
    category: 'gathering'
  },
  {
    id: 8,
    key: "cert-8",
    title: 'Mindanao Conference of Information Technology (MCITS) 2024',
    issuer: 'PSITE XI, CDITE XI',
    date: '2024',
    image: '/certificates/mcits 2024.jpg',
    description: 'Participated the MCITS 2024.',
    category: 'gathering'
  },
  {
    id: 9,
    key: "cert-9",
    title: '1st Runner Up in the Networking Competition',
    issuer: 'Holy Cross of Davao College - CET',
    date: '2024',
    image: '/certificates/networking 2024.jpg',
    description: 'CET TechnoFair 2024 Networking Competition 1st Runner Up.',
    category: 'competition'
  },
  {
    id: 10,
    key: "cert-10",
    title: 'IT Olympiad 2024 - ACM Programming Competition',
    issuer: 'PSITE XI, CDITE XI',
    date: '2024',
    image: '/certificates/programmin 2024.jpg',
    description: 'Competitor for the Holy Cross of Davao College for the Programming Contest of PSITS.',
    category: 'competition'
  },
  {
    id: 11,
    key: "cert-11",
    title: '10th TOPCIT Level 2 Passer',
    issuer: 'TOPCIT',
    date: '2024',
    image: '/certificates/topcit 2024 (2).jpg',
    description: 'HCDC Test Taker for the 10th TOPCIT Philippines (Level 2 Passer).',
    category: 'competition'
  },
  {
    id: 12,
    key: "cert-12",
    title: '11th TOPCIT Level 2 Passer',
    issuer: 'TOPCIT',
    date: '2024',
    image: '/certificates/topcit 2024.jpg',
    description: 'HCDC Test Taker for the 11th TOPCIT Philippines (Level 2 Passer).',
    category: 'competition'
  },
  {
    id: 13,
    key: "cert-13",
    title: 'Crack the Code: An Introduction to IOS Development',
    issuer: 'fix my mac.',
    date: '2023',
    image: '/certificates/crack the code 2023.jpg',
    description: 'A workshop for Swift programming language.',
    category: 'programming'
  },
  {
    id: 14,
    key: "cert-14",
    title: 'Data Visualization',
    issuer: 'Smart Wireless Engineering Education Program',
    date: '2023',
    image: '/certificates/John Smile Mella Certificate.pdf.jpg',
    description: 'A webinar for Data Visualization Techniques.',
    category: 'programming'
  },
  {
    id: 15,
    key: "cert-15",
    title: 'MCITS 2023',
    issuer: 'PSITE XI, CDITE XI',
    date: '2023',
    image: '/certificates/mcits 2023.jpg',
    description: 'Mindanao Conference for IT Students.',
    category: 'gathering'
  }
];

 const filterOptions = [
  { id: 'all', label: 'All Certificates' },
  { id: 'competition', label: 'Competitions' },
  { id: 'programming', label: 'Programming Related Workshops' },
  { id: 'gathering', label: 'IT Related Gatherings' },
  { id: 'uiux', label: 'UI/UX' }
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
        {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      {/* Underline */}
      <motion.div
        className="w-20 h-1.5 bg-[var(--accent)] mb-10 rounded-full"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />

      </div>


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
   

      <div className="lg:flex lg:items-start lg:gap-10">
        {/* Left: big typographic title and meta */}
        <div className="lg:flex-1">
          <div className="max-w-3xl">
    
            <h3 className="text-5xl md:text-7xl font-extrabold leading-tight text-white/95 tracking-tight">
              {selectedCert.title}
            </h3>

            {/* tags removed */}

            <div className="mt-8">
              <a
                  href={selectedCert.url && selectedCert.url !== "#" ? selectedCert.url : selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-4 py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
                >
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

            {/* tags removed */}
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
              aria-pressed={selectedId === cert.id}
              className={`flex items-center gap-3 p-2 rounded-md transition transform ${selectedId === cert.id ? 'ring-2 ring-[var(--accent)] bg-[var(--accent)]/10 scale-105 shadow-lg' : 'hover:scale-105 hover:bg-white/5'}`}
            >
              <div className={`w-40 h-24 relative rounded-md overflow-hidden bg-gray-800 ${selectedId === cert.id ? 'ring-1 ring-white/20' : ''}`}>
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
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="px-3 py-1 rounded-md bg-gray-800 text-white/90 disabled:opacity-40  cursor-pointer">Prev</button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 rounded-md ${page === i + 1 ? 'bg-[var(--accent)] text-white' : 'bg-gray-700 text-white/80 cursor-pointer'}`}>{i + 1}</button>
            ))}
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="px-3 py-1 rounded-md bg-gray-800 text-white/90 disabled:opacity-40 cursor-pointer">Next</button>
          </div>
        )}
      </div>
    </section>
  );
}
