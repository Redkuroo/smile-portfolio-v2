"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import AudioPlayer from './AudioPlayer';
import Image from 'next/image';
import Confetti from 'react-confetti';

export default function SurpriseModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [heartCount, setHeartCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSecretMessage, setShowSecretMessage] = useState(false);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [showMemoryTimeline, setShowMemoryTimeline] = useState(false);

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

  const emojis = ['💖', '😊', '🥰', '💝', '💕', '💓', '💗', '💘', '💞'];

  const memories = [
    { date: '2016', title: 'First Meeting', description: 'The day our story began' },
    { date: '2017', title: 'First Date', description: 'A magical evening to remember' },
    { date: '2018', title: 'First Travel', description: 'Adventures together' },
    { date: '2019', title: 'First Anniversary', description: 'Celebrating our love' },
    { date: '2020', title: 'Lockdown Love', description: 'Growing stronger together' },
    { date: '2021', title: 'New Adventures', description: 'Creating more memories' },
    { date: '2022', title: 'Dreams & Goals', description: 'Building our future' },
    { date: '2023', title: '8 Years Strong', description: 'Our love story continues' },
  ];

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    } else {
      setIsPlaying(false);
    }
  }, [isOpen]);

  const handleHeartClick = () => {
    setHeartCount(prev => prev + 1);
    if (heartCount === 4) {
      setShowSecretMessage(true);
    }
    if (heartCount === 9) {
      setShowLoveLetter(true);
    }
  };

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setTimeout(() => setSelectedEmoji(null), 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="modal-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {showConfetti && <Confetti />}
        
        <motion.div
          key="modal-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-[#242526] rounded-2xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="text-center">
            <motion.h2 
              className="text-3xl font-bold mb-4 text-[var(--accent)]"
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
            </motion.h2>
            
            {/* Interactive Heart Counter */}
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleHeartClick}
                className="text-2xl cursor-pointer"
              >
                💖
              </motion.button>
              <span className="text-lg font-medium text-[var(--accent)]">
                {heartCount} hearts collected!
              </span>
            </motion.div>

            {/* Emoji Reaction Bar */}
            <motion.div 
              className="flex justify-center gap-2 mb-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {emojis.map((emoji, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleEmojiClick(emoji)}
                  className="text-2xl cursor-pointer hover:rotate-12 transition-transform"
                >
                  {emoji}
                </motion.button>
              ))}
            </motion.div>

            {/* Selected Emoji Animation */}
            <AnimatePresence>
              {selectedEmoji && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl pointer-events-none"
                >
                  {selectedEmoji}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Image Gallery */}
            <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
              <Image
                src={images[currentImage]}
                alt="Our memories"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-between p-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                  }}
                  className="bg-white/80 p-2 rounded-full hover:bg-white transition-all"
                >
                  ←
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                  }}
                  className="bg-white/80 p-2 rounded-full hover:bg-white transition-all"
                >
                  →
                </motion.button>
              </div>
            </div>

            {/* Memory Timeline Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowMemoryTimeline(!showMemoryTimeline)}
              className="mb-6 bg-[var(--accent)]/20 text-[var(--accent)] px-4 py-2 rounded-full hover:bg-[var(--accent)]/30 transition-all"
            >
              {showMemoryTimeline ? 'Hide Timeline' : 'Show Our Journey'}
            </motion.button>

            {/* Memory Timeline */}
            <AnimatePresence>
              {showMemoryTimeline && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="space-y-4">
                    {memories.map((memory, index) => (
                      <motion.div
                        key={memory.date}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 bg-[var(--accent)]/10 p-4 rounded-lg"
                      >
                        <div className="font-bold text-[var(--accent)]">{memory.date}</div>
                        <div>
                          <div className="font-medium">{memory.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{memory.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-4 text-left">
              <motion.p 
                className="text-lg font-medium text-gray-800 dark:text-gray-200"
                whileHover={{ scale: 1.02 }}
              >
                I love you so much! Please take care always. Always remember that I always love you.
              </motion.p>
              <motion.p 
                className="text-gray-600 dark:text-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                Sorry sa mga nabuhat and thank you sa tanan nabuhat nimo sa akoa. If magka 2nd life, I still want it to be you.
              </motion.p>
              <motion.p 
                className="text-gray-600 dark:text-gray-400"
                whileHover={{ scale: 1.02 }}
              >
                God really gave me an angel. Idunno if deserve ba jud nako. Please bare with me, trust me ga na ma millionaire ko, ihatag nako tanan sa imoha.
              </motion.p>
              <motion.p 
                className="text-lg font-medium text-[var(--accent)] mt-6"
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

              {/* Secret Message */}
              <AnimatePresence>
                {showSecretMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-4 bg-[var(--accent)]/10 rounded-lg"
                  >
                    <p className="text-[var(--accent)] font-medium">
                      You found the secret message! 🌟 You&apos;re the best girlfriend ever! 💝
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Love Letter */}
              <AnimatePresence>
                {showLoveLetter && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="mt-6 p-6 bg-[var(--accent)]/5 rounded-lg border-2 border-[var(--accent)]/20"
                  >
                    <h3 className="text-xl font-bold text-[var(--accent)] mb-4">A Special Letter 💌</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      My dearest love,
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Eight years of beautiful memories, laughter, and love. You&apos;ve been my rock, my inspiration, and my best friend. Every moment with you is a treasure I hold dear to my heart.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Thank you for being you, for loving me, and for making every day special. Here&apos;s to many more years of love and happiness together.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-right">
                      Forever yours,<br />
                      Your loving partner 💝
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 flex items-center justify-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 rounded-full bg-[var(--accent)] text-white hover:bg-opacity-90 transition-all"
                >
                  {isPlaying ? '⏸️' : '▶️'}
                </motion.button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {isPlaying ? 'Pause Music' : 'Play Music'}
                </span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="mt-8 bg-[var(--accent)] text-white px-6 py-3 rounded-full 
                       hover:bg-opacity-90 transition-all duration-300"
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
      <AudioPlayer key="audio-player" isPlaying={isPlaying} onEnded={() => setIsPlaying(false)} />
    </AnimatePresence>
  );
} 