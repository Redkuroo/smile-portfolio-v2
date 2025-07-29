"use client";
import { motion } from 'framer-motion';

const elements = [
  { emoji: '💖', delay: 0, x: '10vw' },
  { emoji: '🌸', delay: 0.5, x: '30vw' },
  { emoji: '💝', delay: 1, x: '50vw' },
  { emoji: '🌺', delay: 1.5, x: '70vw' },
  { emoji: '💕', delay: 2, x: '20vw' },
  { emoji: '🌹', delay: 2.5, x: '40vw' },
  { emoji: '💗', delay: 3, x: '60vw' },
  { emoji: '🌷', delay: 3.5, x: '80vw' },
  { emoji: '💓', delay: 4, x: '25vw' },
  { emoji: '🌼', delay: 4.5, x: '45vw' },
];

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          initial={{
            opacity: 0,
            y: '100vh',
            x: element.x,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: ['100vh', '-10vh'],
            x: [
              element.x,
              `${parseFloat(element.x) + 10}vw`,
              `${parseFloat(element.x) - 5}vw`,
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + (index * 2),
            repeat: Infinity,
            delay: element.delay,
            ease: 'linear',
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
} 