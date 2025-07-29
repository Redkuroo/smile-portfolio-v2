"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Project data with categories
const projectsData = [
  {
    id: 1,
    category: "frontend",
    type: "Fullstack",
    title: "Dresscan",
    description: "An AI to detect inappropriate student attire in real-time, empowering HCDC security teams to enforce dress codes and maintain a safe, focused learning environment.",
    techs: ["Python", "YOLOv8"],
    image: "/project-laptop.png",
    codeUrl: "#",
    demoUrl: "https://dresscan-landingpage.vercel.app/"
  },
  {
    id: 2,
    category: "design",
    type: "UI/UX Designer",
    title: "Luxe Donut - Admin dashboard",
    description: "A modern e-commerce platform with real-time inventory management, secure payments, and responsive design for seamless shopping experience.",
    techs: ["Figma", "Photoshop", "Canva"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/227072853/Luxe-Donut-Admin-dashboard",
    demoUrl: "#"
  },
  {
    id: 3,
    category: "design",
    type: "UI/UX Design",
    title: "Mobile Banking App",
    description: "Complete UI/UX design for a modern mobile banking application with focus on user experience and accessibility.",
    techs: ["figma", "adobe xd", "prototyping", "user research"],
    image: "/dummy.png",
    codeUrl: "#",
    demoUrl: "#"
  },
  {
    id: 4,
    category: "design",
    type: "Brand Identity",
    title: "Restaurant Branding",
    description: "Full brand identity design including logo, color palette, typography, and marketing materials for a premium restaurant chain.",
    techs: ["illustrator", "photoshop", "indesign", "branding"],
    image: "/dummy.png",
    codeUrl: "#",
    demoUrl: "#"
  }
];

const filterOptions = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "design", label: "Design" }
];

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative w-full min-h-screen px-8 md:px-32 py-20 overflow-hidden bg-[#18191A] light:bg-[#fff8f1] light:text-[#18191A]">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] light:text-[#18191A]">
          Projects
        </h2>
        <div className="w-20 h-1.5 bg-[var(--accent)] mb-10 rounded-full" />
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === option.id
                  ? "bg-[var(--accent)] text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 light:bg-[#f5e6d8] light:text-gray-700 light:hover:bg-[#e2cdb0]"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-20">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col items-center justify-between gap-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Project Info */}
            <div className="relative z-10 flex-1 max-w-xl text-white card p-6 rounded-xl shadow light:text-[#18191A]">
              <div className="mb-2 text-xs text-[var(--accent)] font-semibold uppercase tracking-wide">
                {project.type}
              </div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight light:text-[#18191A]">
                {project.title}
              </h3>
              <p className="mb-6 text-lg text-white/90 light:text-gray-900">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techs.map((tech) => (
                  <span 
                    key={tech} 
                    className="badge bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-[var(--accent)]/30 light:bg-[#fff8f1] light:text-[var(--accent)] light:border-[var(--accent)]/30 light:hover:bg-[#f5e6d8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href={project.codeUrl} 
                  className="bg-[var(--accent)] hover:bg-[#6d3bbd] text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow transition"
                >
                  {project.category === "design" ? "View Design" : "View Code"} <span aria-hidden>→</span>
                </a>
                <a 
                  href={project.demoUrl} 
                  className="text-[var(--accent)] hover:underline flex items-center gap-2"
                >
                  {project.category === "design" ? "Live Design" : "Live Demo"}
                </a>
              </div>
            </div>

            {/* Project Image */}
            <div className="relative flex-1 flex items-center justify-center z-10">
              <div className="w-[440px] h-[260px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800 bg-gray-900 flex items-center justify-center light:border-[#e2cdb0] light:bg-[#f5e6d8]">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No projects message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-xl text-gray-400 light:text-gray-600">
            No projects found in this category.
          </p>
        </div>
      )}
    </section>
  );
}