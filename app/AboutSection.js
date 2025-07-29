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
  Bachelor of Science in Computer Science graduating student at the University of Mindanao, with a strong interest in UI/UX design and front-end development. Passionate about crafting user-centered interfaces and intuitive digital experiences that blend aesthetics with functionality.
</p>
<p className="light:text-gray-800">
  I combine technical knowledge with a keen eye for design, using modern tools and principles to solve problems creatively and deliver seamless, responsive user experiences.
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
              <div className="text-gray-200 light:text-[#18191A]">University of Mindanao</div>
              <div className="text-gray-400 text-sm light:text-gray-900">B.S. in Computer Science</div>
            </div>
          </div>

          {/* Focus */}
          <div className="flex items-start gap-4 bg-[#242526] hover:bg-[#2a2b2c] transition-colors duration-300 p-6 rounded-xl shadow-lg border border-gray-700/50 light:bg-white light:border-gray-200 light:hover:bg-gray-50">
            <div className="mt-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2H8C6.34315 2 5 3.34315 5 5V8C5 9.65685 6.34315 11 8 11H12V2Z" fill="#0ACF83"/>
                <path d="M12 11H8C6.34315 11 5 12.3431 5 14V17C5 18.6569 6.34315 20 8 20H12V11Z" fill="#A259FF"/>
                <path d="M19 5C19 3.34315 17.6569 2 16 2H12V11H16C17.6569 11 19 9.65685 19 8V5Z" fill="#F24E1E"/>
                <path d="M19 14C19 12.3431 17.6569 11 16 11H12V20H16C17.6569 20 19 18.6569 19 17V14Z" fill="#FF7262"/>
                <path d="M12 11H16C17.6569 11 19 12.3431 19 14V17C19 18.6569 17.6569 20 16 20H12V11Z" fill="#1ABCFE"/>
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg light:text-[#18191A]">Focus</div>
              <div className="text-gray-200 light:text-[#18191A]">UI/UX Design, Figma</div>
              <div className="text-gray-400 text-sm light:text-gray-900">Clean design & user experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
