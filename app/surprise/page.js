"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import AudioPlayer from '../components/AudioPlayer';
import FloatingElements from '../components/FloatingElements';

export default function SurprisePage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [showWittyText, setShowWittyText] = useState(false);

  const images = [
    '/a.jpg',
    '/b.jpg',
    '/c.jpg',
    '/d.jpg',
    '/e.jpg',
    '/f.jpg',
    '/g.jpg',
    '/h.jpg',
    '/i.jpg'
  ];

  const wittyTexts = [
    "Still scrolling? 😏",
    "Found the surprise! 🎉",
    "8 years and counting! 💫",
    "You're the best! 🌟",
    "Love you more! 💖",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWittyText(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#18191A] text-white font-sans relative overflow-hidden light:bg-[#fdf6ee] light:text-[#18191A]">
      <FloatingElements />
      
      {/* Witty Text Animation */}
      <AnimatePresence>
        {showWittyText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [-5, 5, -5, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-[var(--accent)] text-white px-6 py-3 rounded-full shadow-lg"
            >
              {wittyTexts[Math.floor(Math.random() * wittyTexts.length)]}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-screen Image Gallery */}
      <div className="relative w-full h-screen bg-black/50">
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-4xl max-h-[80vh]">
            <Image
              src={images[currentImage]}
              alt="Our memories"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col">
          {/* Navigation and Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
              className="bg-white/80 p-4 rounded-full hover:bg-white transition-all text-2xl"
            >
              ←
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
              className="bg-white/80 p-4 rounded-full hover:bg-white transition-all text-2xl"
            >
              →
            </motion.button>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 text-center text-white"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Happy 8th Anniversary! 💝
              </motion.h1>
              <div className="space-y-4 text-center">
                <p className="text-lg md:text-xl font-medium text-white/90">
                  I love you so much! Please take care always. Always remember that I always love you.
                </p>
                <p className="text-white/80">
                  Sorry sa mga nabuhat and thank you sa tanan nabuhat nimo sa akoa. If magka 2nd life, I still want it to be you.
                </p>
                <p className="text-white/80">
                  God really gave me an angel. Idunno if deserve ba jud nako. Please bare with me, trust me ga na ma millionaire ko, ihatag nako tanan sa imoha.
                </p>
                <motion.p 
                  className="text-2xl font-medium text-[var(--accent)] mt-6"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  Love uuuu 💖
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Music Controls */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-white/80 p-3 rounded-full hover:bg-white transition-all"
            >
              {isPlaying ? '⏸️' : '▶️'}
            </motion.button>
            <span className="text-sm text-white/80">
              {isPlaying ? 'Pause Music' : 'Play Music'}
            </span>
          </div>
        </div>
      </div>
      <AudioPlayer isPlaying={isPlaying} onEnded={() => setIsPlaying(false)} />
    </div>
  );
} 