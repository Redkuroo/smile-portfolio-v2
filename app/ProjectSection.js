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
    category: "frontend",
    type: "Frontend Developer",
    title: "SMOvers Logistics Services",
    description: "A logistics service website designed to streamline operations.",
    techs: ["Next.js", "TailwindCSS", "React", "TypeScript"],
    image: "/project-laptop.png",
    codeUrl: "https://github.com/Redkuroo/smovers-website",
    demoUrl: "https://smovers-website.vercel.app/"
  },
  {
    id: 3,
    category: "design",
    type: "UI/UX Designer",
    title: "Luxe Donut - Admin Dashboard",
    description: "A modern e-commerce platform with real-time inventory management, secure payments, and responsive design for seamless shopping experience.",
    techs: ["Figma", "Photoshop", "Canva"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/227072853/Luxe-Donut-Admin-dashboard",
    demoUrl: "https://www.figma.com/design/lwoWEVzWzPD6tipb8Tpr58/Luxe-Donut?node-id=0-1&p=f&t=Kjbl9pwTwarALxUh-0"
  },
  {
    id: 4,
    category: "design",
    type: "UI/UX Designer",
    title: "Esports Streaming Site",
    description: "A case study on designing a user-friendly esports streaming site, focusing on intuitive navigation, engaging visuals, and responsive layouts.",
    techs: ["Figma"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/227155627/Esports-Streaming-Site",
    demoUrl: "https://www.figma.com/design/ySSWWEJMAtAzWjtsHcy7A6/Esports-Streaming-Website?t=Kjbl9pwTwarALxUh-0"
  },
  {
    id: 5,
    category: "design",
    type: "UI/UX Designer",
    title: "Authentication Flow Design - Colina Health",
    description: "A comprehensive design project for Colina Health's authentication flow, focusing on user experience, accessibility, and visual consistency across platforms.",
    techs: ["Figma"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/227205371/Colina-Health-Authentication-Flow-Design",
    demoUrl: "https://www.figma.com/design/jMjKvklrAU9Tg4h5Qv9vuG/Typography?node-id=15-156&p=f&t=Kjbl9pwTwarALxUh-0"
  },
   {
    id: 6,
    category: "design",
    type: "UI/UX Designer",
    title: "Luxe Donut",
    description: "A Donut shop website design featuring a modern, responsive layout with a focus on user experience and visual appeal.",
    techs: ["Figma"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/228310555/Luxe-Donut",
    demoUrl: "https://www.figma.com/design/lwoWEVzWzPD6tipb8Tpr58/Luxe-Donut?node-id=0-1&t=Kjbl9pwTwarALxUh-1"
  },
   {
    id: 7,
    category: "design",
    type: "UI/UX Designer",
    title: "Logistic Services - SMOVERS Landing Page",
    description: "A landing page design for SMOVERS, a logistics service, showcasing their offerings with a clean, modern aesthetic and user-friendly navigation.",
    techs: ["Figma"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/230536442/Logistic-Services-Landing-Page-(SMOvers)",
    demoUrl: "https://www.figma.com/design/ySSWWEJMAtAzWjtsHcy7A6/Esports-Streaming-Website?node-id=93-9315&t=Kjbl9pwTwarALxUh-0"
  },
  {
    id: 8,
    category: "design",
    type: "UI/UX Designer",
    title: "GO Plus Online Casino",
    description: "A sleek online casino platform design featuring a modern interface, intuitive navigation, and engaging user experience.",
    techs: ["Figma", "Photoshop", "Canva", "Adobe XD"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/230618553/GO-PLUS-CASINO-UIUX-for-Online-Casino-Platform",
    demoUrl: "https://www.figma.com/design/ySSWWEJMAtAzWjtsHcy7A6/Esports-Streaming-Website?node-id=93-9315&t=Kjbl9pwTwarALxUh-0"
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