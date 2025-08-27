"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import Certificates from "./components/Certificates";
import Sun3D from './components/Sun3D';
import { useTheme } from "./ThemeProvider";

const LoadingScreen = dynamic(() => import("./LoadingScreen"), { ssr: false });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { toggleTheme, theme } = useTheme();
const calLink = process.env.NEXT_PUBLIC_CAL_LINK || 'https://cal.com/john-smile-mella-5lwhzm'
function handleBookMeeting(e) {
    e.preventDefault()
    if (typeof window === 'undefined') return
    
    try {
      const w = window.open(calLink, '_blank', 'noopener,noreferrer')
      if (w) w.focus()
    } catch (err) {
      console.error('Failed to open booking link:', err)
      // Fallback: navigate to the link directly
      window.location.href = calLink
    }
  }
  function handleViewResume(e) {
    // prevent any default navigation and stop propagation
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    if (typeof window === 'undefined') return
    const origin = window.location?.origin || ''
    const url = `${origin}/John_Smile_Mella_Resume.pdf`
    try {
      // create an anchor and trigger a click — this reliably opens a new tab
      const a = document.createElement('a')
      a.href = url
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      // append to DOM to ensure click works in all browsers
      document.body.appendChild(a)
      a.click()
      a.remove()
    } catch (err) {
      // as a last resort, try window.open but don't navigate the current window
      try {
        const w = window.open(url, '_blank', 'noopener,noreferrer')
        if (w) w.focus()
      } catch (e2) {
        // nothing else we can do safely without navigating away
        console.error('Unable to open resume in new tab:', e2)
      }
    }
  }
  useEffect(() => {
    // Prevent footer flash: start with body class that hides footer
    if (typeof document !== 'undefined') {
      document.body.classList.add('no-flash-footer')
    }

    // Show loading screen for the full animation duration (4s + 0.5s fade)
    let timer = setTimeout(() => {
      setLoading(false);
      // Reveal footer after load
      if (typeof document !== 'undefined') {
        document.body.classList.remove('no-flash-footer')
        document.body.classList.add('app-ready')
      }
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-[#18191A] text-white font-sans relative overflow-x-hidden light:bg-[#fdf6ee] light:text-[#18191A]">
      {/* Navigation */}
      {/* Removed old header navigation */}

      {/* Main Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-32 py-12 md:py-24 gap-12 md:gap-0">
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-left">
            Hi I&apos;m <span className="text-[var(--accent)]">John Smile!!</span>
          </h1>
          <div className="text-2xl md:text-3xl font-bold mb-2 text-left">
            <span className="text-[var(--accent)]">Frontend Developer | UI/UX Designer</span>
           
          </div>
          <div className="text-lg text-gray-400 mb-6 text-left light:text-gray-700">
          Frontend developer by day, pixel perfectionist by night. Send help.
          </div>
          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-4 mt-4">
            {[
              "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "Shopify Liquid", "YOLOv8", "Python" , "Java", "MySQL", "React Native"
            ].map((tech) => (
              <span
                key={tech}
                className="badge bg-black/60 text-[var(--accent)] px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[var(--accent)]/30 hover:bg-[#232323] transition light:bg-[#fff8f1] light:text-[var(--accent)] light:border-[var(--accent)]/30 light:hover:bg-[#f5e6d8]"
              >
                {tech}
              </span>
            ))}
          </div>
            <div className="flex flex-wrap gap-4 mt-4">
            {[
              "Figma", "Canva", "Adobe XD", "Photoshop" , "Git" , "Github"
            ].map((tech) => (
              <span
                key={tech}
                className="badge bg-black/60 text-[var(--accent)] px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[var(--accent)]/30 hover:bg-[#232323] transition light:bg-[#fff8f1] light:text-[var(--accent)] light:border-[var(--accent)]/30 light:hover:bg-[#f5e6d8]"
              >
                {tech}
              </span>
            ))}

              <div className="mt-8">
              <button
                  type="button"
                  onClick={handleViewResume}
                  aria-label="View Resume (opens in new tab)"
                  className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-4 py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
                >
                 View Resume
                </button>
            </div>

              <div className="mt-8">
              <a
                 onClick={handleBookMeeting}
           
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white px-4 py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
                >
                 Blast Off a Meeting
                </a>
            </div>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="flex-1 flex items-center justify-center">
          <Sun3D onClick={toggleTheme} mode={theme} />
        </div>

            
      </section>

  

      {/* About Section */}
      <AboutSection />
      {/* Experience Section */}
      <ExperienceSection />
      {/* Project Section */}
      <ProjectSection />
  {/* Certificates Section */}
  <Certificates />


      {/* Optional: Subtle dots background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {[...Array(40)].map((_, i) => {
          // Randomize initial position, direction, and duration
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const dx = (Math.random() - 0.5) * 20; // move up to ±10% vertically
          const dy = (Math.random() - 0.5) * 20; // move up to ±10% horizontally
          const duration = 6 + Math.random() * 6; // 6s to 12s
          return (
            <span
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full particle"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animation: `moveParticle${i} ${duration}s ease-in-out infinite alternate`,
              }}
            />
          );
        })}
        <style jsx>{`
          ${[...Array(40)].map((_, i) => {
            const dx = (Math.random() - 0.5) * 20;
            const dy = (Math.random() - 0.5) * 20;
            return `
              @keyframes moveParticle${i} {
                0% { transform: translate(0, 0); }
                100% { transform: translate(${dx}vw, ${dy}vh); }
              }
            `;
          }).join('')}
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 15s ease infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
