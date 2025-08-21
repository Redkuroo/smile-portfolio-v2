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
    image: "/projects/dresscan.jpg",
    codeUrl: "https://github.com/Redkuroo/Dresscan",
    demoUrl: "https://dresscan-landingpage.vercel.app/"
  },
   {
    id: 2,
    category: "frontend",
    type: "Frontend Developer",
    title: "SMOvers Logistics Services",
    description: "A logistics service website designed to streamline operations.",
    techs: ["Next.js", "TailwindCSS", "React", "TypeScript"],
    image: "/projects/smovers.png",
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
    image: "/projects/luxe admin.jpg",
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
    image: "/projects/esports.png",
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
    image: "/projects/colina.jpg",
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
    image: "/projects/luxe.png",
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
    image: "/projects/smovers ui.png",
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
    image: "/projects/goplus.png",
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
    image: "/projects/elms.png",
    codeUrl: "https://www.behance.net/gallery/231639593/Bubble-ELMS-Material-Listing-Section",
  },
  {
    id: 10,
    category: "design",
    type: "UI/UX Designer",
    title: "JIT EDU Website",
    description: "Designed the Jairo Institute of Technology website (JIT), it is a sister company of Jairosoft, Inc., a global software solution and consulting services company, trusted since 2007.",
    techs: ["Figma", "Photoshop", "Canva", "Adobe XD"],
    image: "/projects/jit.png",
    codeUrl: "https://www.behance.net/gallery/231694921/JIT-EDU-Website-Internship-Dump-Visuals",
     demoUrl: "https://jit.edu.ph/"
  },
  {
    id: 11,
    category: "frontend",
    type: "Fullstack Developer",
    title: "Nextjs AI Chatbot",
    description: "An AI-powered chatbot built with Next.js, offering real-time, interactive conversations with a sleek, responsive UI.",
    techs: ["Next.js", "AI SDK", "shadcn/ui"],
    image: "/projects/chatsdk.png",
    codeUrl: "https://github.com/Redkuroo/nextjs-ai-chatbot?tab=readme-ov-file",
    demoUrl: "https://nextjs-ai-chatbot-three-lovat-83.vercel.app/"
  },
  {
    id: 12,
    category: ["design", "frontend"],
    type: "Frontend Developer & UI/UX Designer",
    title: "The Wander Club",
    description: "I developed the hero section and designed it with CRO (Conversion Rate Optimization) principles for The Wander Club website during my freelancing days, focusing on a sleek, responsive, and user-friendly UI.",
    techs: ["Next.js", "Figma", "Canva"],
    image: "/projects/wanderclub.png",
    codeUrl: "https://www.figma.com/design/62Id4GggHC0VRs0cczHfP0/TheWanderClub_Hero_A-BTest_UIUX_JohnSmileMella?node-id=0-1&p=f&t=22nh2iwYQKELw4CI-0",
    demoUrl: "https://thewanderclub.com/?srsltid=AfmBOopwb_s69cp4tm5YYQXZfL9UL1mBsE7JlZOayUgtu9q9uvf2_9Qq"
  },
  {
    id: 13,
    category: ["frontend"],
    type: "Frontend Developer",
    title: "Sanction System - Holy Cross of Davao College",
    description: "This project is a web-based system for managing IT lab sanction requests at HCDC. It streamlines the process of submitting, reviewing, and approving lab usage requests, making it easier for students and staff to access IT resources efficiently.",
    techs: ["React JS"],
    image: "/projects/sanction.png",
    codeUrl: "https://github.com/Redkuroo/Sanction-System",
    demoUrl: "https://sanction-system-hcdc.vercel.app/"
  },
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
  // support categories stored as string or array
  const filteredProjects = activeFilter === "all"
    ? projectsData
    : projectsData.filter(project => {
        const cats = Array.isArray(project.category) ? project.category : [project.category];
        return cats.map(c => c.toLowerCase().trim()).includes(activeFilter.toLowerCase());
      });
  return (
    <>
      <section id="projects" className="relative w-full min-h-screen px-6 md:px-28 py-16 overflow-hidden bg-[#18191A] light:bg-[#fff8f1] light:text-[#18191A]">
      

       {/* Section Heading */}

             <div className="mb-10">

            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Projects
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

  {/* Grid of project cards (small gap between tiles) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
  {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="group cursor-pointer"
          >
            {/* Type & Title moved into overlay (show on hover/click) */}

            {/* Image container with hover overlay (flush tiles, no border/shadow) */}
            <div
              className="relative overflow-hidden bg-gray-900 light:bg-[#f5e6d8] cursor-pointer"
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
              {/* 16:9 aspect box; requires Tailwind aspect-ratio plugin or modern Tailwind */}
              <div className="w-full relative aspect-[16/9] sm:aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 440px"
                  priority={index < 3}
                />
              </div>

              {/* Overlay shown on hover OR when tile is open (mobile) */}
              <div
                className={`absolute inset-0 bg-black/60 transition-opacity duration-300 flex items-end ${openId === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
              >
                <div className="w-full p-5 text-white">
                  {/* Title & Type now shown inside the overlay */}
                  <div className="mb-3">
                    <div className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide">{project.type}</div>
                    <h3 className="text-xl font-extrabold text-white mt-1 light:text-[#18191A]">{project.title}</h3>
                  </div>
                  <p className="mb-3 text-sm text-white/90 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {(project.techs || []).map((tech) => (
                      <span key={tech} className="badge bg-black/50 text-white px-2 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wide border border-[var(--accent)]/30 cursor-pointer">
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
                      className={`bg-[var(--accent)] hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-sm font-medium transition ${openId === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} cursor-pointer`}
                      aria-label={`${project.title} Source Code`}
                    >
                      {project.category === 'design' ? 'View' : 'Code'}
                    </a>
                    <a
                      href={project.demoUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-1.5 rounded-sm font-medium transition ${openId === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} cursor-pointer`}
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

  
    </>
  );
}