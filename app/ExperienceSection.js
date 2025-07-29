"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2020",
    title: "Animation & Programming Intern",
    company: "F-Squared Technologies Inc.",
    description:
      "I’ve been working at this company as an OJT (On-the-Job Training) student as part of my course requirements. During this time, we’ve been given two weeks to learn and explore the animation field and its industry, gaining valuable insights and hands-on experience.",
  },
  {
    date: "2019 - Present",
    title: "Design Editor",
    company: "Dr. Santiago Dakudao Sr. National High School",
    description:
      "I have worked as a student assistant under DepEd, focusing on designing educational and administrative materials using Canva. I created layouts for ID cards, classroom visuals, and official documents, ensuring consistent and visually effective outputs. This role strengthened my skills in layout design, visual communication, and attention to detail within an academic setting.",
    readMore: true,
  },
  {
    date: "2024 - Present",
    title: "Publication Material Editor",
    company: "Freelance | Solumi, Tibungco, Davao City",
    description:
      "I currently work as a Publication Material Editor for a coffee shop located in Tibungco, Davao City. In this role, I am responsible for designing and editing various print and digital materials such as menus, promotional posters, and announcements. I collaborate closely with the shop’s management team to create visually appealing and brand-consistent content that effectively communicates promotions, events, and updates to customers.",
    readMore: true,
  },
  {
    date: "2021 - Present",
    title: "Freelance Design Entrepreneur",
    company: "Self-employed",
    description:
      "I currently work as a Publication Material Editor for a coffee shI run a small design business creating customized souvenirs and visual materials using Canva. I design invitations, ID cards, social media graphics, and branded items for various clients, strengthening my skills in layout design, branding, and client collaboration.",
    readMore: true,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full min-h-[60vh] bg-[#18191A] px-8 md:px-32 py-20 light:bg-[#fff8f1] light:text-[#18191A]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-left mb-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Experience</h2>
      <div className="w-20 h-1.5 bg-[var(--accent)] mb-10 rounded-full" />
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