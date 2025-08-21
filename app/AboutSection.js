"use client";
import { motion } from "framer-motion";

const textFadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-[60vh] bg-[#18191A] px-8 md:px-32 py-20 flex flex-col justify-center light:bg-[#fff8f1] light:text-[#18191A]"
    >
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
        className="w-16 h-1 bg-[var(--accent)] mb-10 rounded"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Text */}
        <motion.div
          className="flex-1 text-lg text-gray-300 space-y-8 light:text-gray-700"
          {...textFadeIn}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
       <p className="light:text-gray-800">
 Hello! I'm a front-end developer and UI/UX designer based in Davao City, Philippines. I specialize in creating clean, responsive, and engaging user interfaces using tools like React and Tailwind CSS. I'm passionate about crafting designs that are not only visually appealing but also intuitive and user-friendly.


</p>
<p className="light:text-gray-800">
  Beyond coding, I'm a proud Portland Trail Blazers fan and a Mobile Legends gamer, thriving on both competition and creativity. I'm always learning, growing, and pushing boundaries whether through design, development, or a clutch comeback in ranked matches.
</p>

        </motion.div>

        {/* Right: Info Cards */}
        <motion.div
          className="flex-1 flex flex-col gap-8"
          {...textFadeIn}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {/* Education */}
          <div className="flex items-start gap-4 bg-[#242526] hover:bg-[#2a2b2c] transition-colors duration-300 p-6 rounded-xl shadow-lg border border-gray-700/50 light:bg-white light:border-gray-200 light:hover:bg-gray-50">
            <span className="text-2xl mt-1" role="img" aria-label="graduation cap">🎓</span>
            <div>
              <div className="font-bold text-lg light:text-[#18191A]">Education</div>
              <div className="text-gray-200 light:text-[#18191A]">Holy Cross of Davao College</div>
              <div className="text-gray-400 text-sm light:text-gray-900">Bachelor of Science in Information Technology</div>
              <div className="text-gray-500 text-sm light:text-gray-900">Cum Laude - 94.25% GWA</div>
            </div>
          </div>

   
        </motion.div>
      </div>
    </section>
  );
}
