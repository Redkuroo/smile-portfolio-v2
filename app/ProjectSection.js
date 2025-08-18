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
    demoUrl: "https://www.figma.com/design/WfHxOnmvmMBLXcho7qjLqn/Casino-Backup?node-id=0-1&t=dGSN6pu7ALcV9SFd-1"
  },
    {
    id: 9,
    category: "design",
    type: "UI/UX Designer",
    title: "Bubble ELMS - Material Listing Section",
    description: "As part of my UI/UX design internship, I designed the Material Listing section for Bubble ELMS, an e-learning management system.",
    techs: ["Figma", "Photoshop", "Canva", "Adobe XD"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/231639593/Bubble-ELMS-Material-Listing-Section",
  },
  {
    id: 10,
    category: "design",
    type: "UI/UX Designer",
    title: "JIT EDU Website",
    description: "Designed the Jairo Institute of Technology website (JIT), it is a sister company of Jairosoft, Inc., a global software solution and consulting services company, trusted since 2007.",
    techs: ["Figma", "Photoshop", "Canva", "Adobe XD"],
    image: "/dummy.png",
    codeUrl: "https://www.behance.net/gallery/231694921/JIT-EDU-Website-Internship-Dump-Visuals",
     demoUrl: "https://jit.edu.ph/"
  }
];

const filterOptions = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "design", label: "Design" }
];

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);
  return (
    <section id="projects" className="relative w-full min-h-screen px-6 md:px-28 py-16 overflow-hidden bg-[#18191A] light:bg-[#fff8f1] light:text-[#18191A]">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] light:text-[#18191A]">
          Projects
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

  {/* Grid of project cards (no gaps) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
  {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group"
          >
            {/* Type & Title above the image */}
            <div className="mb-3">
              <div className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide">{project.type}</div>
              <h3 className="text-2xl font-extrabold text-white mt-1 light:text-[#18191A]">{project.title}</h3>
            </div>

            {/* Image container with hover overlay (flush tiles, no border/shadow) */}
            <div
              className="relative overflow-hidden bg-gray-900 light:bg-[#f5e6d8]"
              role="button"
              tabIndex={0}
              onClick={() => setOpenId(openId === project.id ? null : project.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setOpenId(openId === project.id ? null : project.id);
                }
              }}
            >
              <div className="w-full h-56 relative">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 440px"
                  priority={index < 3}
                />
              </div>

              {/* Overlay shown on hover OR when tile is open (mobile) */}
              <div
                className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-end ${openId === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                <div className="w-full p-5 text-white">
                  <p className="mb-3 text-sm text-white/90 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.techs || []).map((tech) => (
                      <span key={tech} className="badge bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide border border-[var(--accent)]/30">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.codeUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`bg-[var(--accent)] hover:bg-[#6d3bbd] text-white px-4 py-2 rounded-md font-semibold transition shadow ${openId === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                      aria-label={`${project.title} Source Code`}
                    >
                      {project.category === 'design' ? 'View' : 'Code'}
                    </a>
                    <a
                      href={project.demoUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md font-semibold transition ${openId === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                      aria-label={`${project.title} Demo`}
                    >
                      {project.category === 'design' ? 'Preview' : 'Demo'}
                    </a>
                  </div>
                </div>
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