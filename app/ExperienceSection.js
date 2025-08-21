"use client";
import { motion } from "framer-motion";

const experiences = [

 {
  date: "August 2025 - Present",
  title: "Part-Time Faculty Instructor, BSIT Program",
  company: "Holy Cross of Davao College",
  description:
    "Teach core and elective IT subjects including Human-Computer Interaction, Web Development (Next.js), Mobile Development (React Native), and System Administration with SQL and Database Fundamentals, focusing on both theory and hands-on application.",
},

  {
    date: "April 2024 - Present",
    title: "Frontend Developer | UI/UX Designer ",
    company: "Freelance",
    description:
      "Led the full development cycle from client communication to deployment while designing user-friendly UIs informed by research and feedback to enhance usability.",
  
  },
  {
    date: "February 2025 - June 2025",
    title: "UI/UX Designer (Internship)",
    company: "Jairosoft",
    description:
      "Designed responsive web and mobile UIs that boosted engagement by 30%, created wireframes and prototypes in Figma, built and maintained a consistent design system, and collaborated closely with developers and PMs to achieve design goals.",
    readMore: true,
  },
  {
    date: "July 2022 - July 2025",
    title: "Student Assistant",
    company: "Holy Cross of Davao College",
    description:
      "Maintained IT lab systems through regular updates and issue resolution, provided technical support to students and faculty, and assisted with hardware, software, and network setup.",
    readMore: true,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full min-h-[60vh] bg-[#18191A] px-8 md:px-32 py-20 light:bg-[#fff8f1] light:text-[#18191A]">

      {/* Section Heading */}
       <div className="mb-10">
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Experience
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
      <div className="relative flex flex-col items-start">
        {/* Vertical timeline line */}
        <div className="absolute -left-6 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[var(--accent)]/60 to-transparent rounded-full z-0" />
        <div className="flex flex-col gap-12 w-full max-w-3xl z-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              className="relative flex items-start gap-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <span className="mt-2 w-4 h-4 bg-[var(--accent)] rounded-full border-4 border-[#18191A] z-10 light:border-[#fff8f1]" />
              {/* Card */}
              <div className="card border border-[#222] rounded-xl shadow-lg p-6 flex-1 light:border-[#e2cdb0]">
                <div className="inline-block px-4 py-1 bg-[var(--accent)]/20 text-[var(--accent)] rounded-full text-sm font-bold mb-3">
                  {exp.date}
                </div>
                <div className="text-xl md:text-2xl font-extrabold mb-1 light:text-[#18191A]">{exp.title}</div>
                <div className="text-[var(--accent)] mb-1">{exp.company}</div>
                <div className="text-gray-300 mb-2 light:text-gray-900">{exp.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 