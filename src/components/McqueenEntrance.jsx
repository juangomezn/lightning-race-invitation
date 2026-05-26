import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function McqueenEntrance() {
  const passAudio = useRef(null);

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (passAudio.current) {
      passAudio.current.volume = 0.5;

      setTimeout(() => {
        passAudio.current.play().catch(() => {});
      }, 1200);
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <>
      {/* AUDIO */}
      <audio
        ref={passAudio}
        src="/audio/car-pass.mp3"
      />

      {/* HUMO */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0.5, 1.5, 2],
        }}
        transition={{
          duration: 2,
          delay: 1,
        }}
        className="
          fixed
          bottom-24
          left-1/2
          -translate-x-1/2
          w-[400px]
          h-[150px]
          bg-white/20
          blur-3xl
          rounded-full
          pointer-events-none
          z-30
        "
      />

      {/* MCQUEEN */}
      <motion.img
        src="/images/cars/mcqueen.png"
        alt="McQueen"
        initial={{
          x: -1400,
          rotate: -5,
          opacity: 1,
        }}
        animate={{
          x: 1600,
          rotate: 5,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          ease: "easeInOut",
        }}
        className="
          fixed
          bottom-10
          left-0
          w-[320px]
          md:w-[500px]
          z-30
          pointer-events-none
          select-none
        "
        style={{
          filter:
            "drop-shadow(0 0 40px rgba(255,0,0,0.5)) blur(1px)",
        }}
      />

      {/* DESTELLO */}
      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: [0, 1, 0],
          scaleX: [0, 1.5, 0],
        }}
        transition={{
          duration: 1.5,
          delay: 0.8,
        }}
        className="
          fixed
          bottom-28
          left-0
          right-0
          h-3
          bg-gradient-to-r
          from-transparent
          via-yellow-400
          to-transparent
          blur-xl
          pointer-events-none
          z-20
        "
      />
    </>
  );
}