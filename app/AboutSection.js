"use client";
import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

const textFadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutSection() {
  const carouselImages = useMemo(
    () => [
      "/about/1.jpg",
      "/about/2.jpg",
      "/about/3.jpg",
      "/about/4.jpg",
      "/about/5.jpg",
      "/about/6.jpg",
      "/about/7.jpg",
      "/about/8.png",
      "/about/9.png",
      "/about/10.png",
      "/about/t15.png",
   
    ],
    []
  );
  const [zoomSrc, setZoomSrc] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia('(hover: none) and (pointer: coarse)');
    const update = () => setIsTouch(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);
  return (
    <>
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
        className="w-20 h-1.5 bg-[var(--accent)] mb-10 rounded-full"
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
 Hello! I&apos;m a front-end developer and UI/UX designer based in Davao City, Philippines. I specialize in creating clean, responsive, and engaging user interfaces using tools like React and Tailwind CSS. I&apos;m passionate about crafting designs that are not only visually appealing but also intuitive and user-friendly.


</p>
<p className="light:text-gray-800">
  Beyond coding, I&apos;m a proud Portland Trail Blazers fan and a Mobile Legends gamer, thriving on both competition and creativity. I&apos;m always learning, growing, and pushing boundaries whether through design, development, or a clutch comeback in ranked matches.
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

      {/* Carousels */}
      <div className="mt-12">
        <div className="relative">
          {/* Left/Right glowing fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-red-500/60 to-transparent blur-sm" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-red-500/60 to-transparent blur-sm" />

          {/* Carousel 1: left -> right (we animate translateX negative to move left) */}
          <div className="carousel overflow-hidden">
            <div className="carousel-track" aria-hidden>
              {[...carouselImages, ...carouselImages].map((src, i) => (
                <div
                  key={`c1-${i}`}
                  className="carousel-item inline-block p-2"
                >
                  <div className="focus:outline-none" aria-hidden>
                    <img src={src} alt={`carousel ${i}`} className="h-40 md:h-56 object-cover rounded-lg shadow-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="h-6" />

          {/* Carousel 2: right -> left (reverse animation) */}
          <div className="carousel overflow-hidden">
            <div className="carousel-track reverse" aria-hidden>
              {[...carouselImages, ...carouselImages].map((src, i) => (
                <div
                  key={`c2-${i}`}
                  className="carousel-item inline-block p-2"
                >
                  <div className="focus:outline-none" aria-hidden>
                    <img src={src} alt={`carousel rev ${i}`} className="h-40 md:h-56 object-cover rounded-lg shadow-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  </section>

        {/* Zoom modal (mobile click) */}
        {zoomSrc && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setZoomSrc(null)}
            role="dialog"
            aria-modal="true"
          >
            <img src={zoomSrc} alt="zoomed" className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl" />
          </div>
        )}

  {/* Styles for the carousels (scoped via global injection) */}
      <style>{`
      .carousel { position: relative; }
      .carousel-track { display: flex; align-items: center; width: 200%; gap: 0.5rem; animation: scroll-left 28s linear infinite; }
      .carousel-track.reverse { animation: scroll-right 28s linear infinite; }
      .carousel-item { flex: 0 0 auto; }

      /* Hover zoom for non-touch devices */
      @media (hover: hover) and (pointer: fine) {
        .carousel-item img { transition: transform 220ms ease, box-shadow 220ms ease; }
        .carousel-item img:hover { transform: scale(1.08); box-shadow: 0 10px 30px rgba(0,0,0,0.45); }
      }

      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      @keyframes scroll-right {
        0% { transform: translateX(-50%); }
        100% { transform: translateX(0); }
      }

      /* Make the gradients glow a bit stronger on larger screens */
      @media (min-width: 768px) {
        .carousel-item img { height: 14rem; }
      }
    `}</style>
    </>
  );
}

// Add modal outside component scope? No - keep simple: modal is rendered conditionally inside component return.
