"use client";
import { useEffect, useRef } from 'react';

export default function AudioPlayer({ isPlaying, onEnded }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(error => {
        console.log("Audio playback failed:", error);
      });
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      onEnded={onEnded}
      preload="auto"
    />
  );
} 