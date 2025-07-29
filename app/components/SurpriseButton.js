"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function SurpriseButton() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when scrolled to bottom
      if (documentHeight - scrollPosition < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push('/surprise')}
            className="bg-[var(--accent)] text-white px-6 py-3 rounded-full shadow-lg 
                     hover:shadow-xl transition-all duration-300 flex items-center gap-2
                     border-2 border-white/20 hover:border-white/40"
          >
            <span className="text-lg font-medium">Open Surprise</span>
            <span className="text-xl">🎁</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 