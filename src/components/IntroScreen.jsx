import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function IntroScreen({ onFinish }) {
  const audioRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      handleFinish();
    }, 6500);

    return () => clearTimeout(timer);
  }, [started]);

  const handleFinish = () => {
    setClosing(true);

    if (audioRef.current) {
      let vol = audioRef.current.volume;

      const fade = setInterval(() => {
        if (vol > 0.05) {
          vol -= 0.05;
          audioRef.current.volume = vol;
        } else {
          audioRef.current.pause();
          clearInterval(fade);
        }
      }, 50);
    }

    setTimeout(() => {
      onFinish();
    }, 1200);
  };

  const startExperience = async () => {
    try {
      if (audioRef.current) {
        audioRef.current.volume = 0.6;
        audioRef.current.loop = true;
        await audioRef.current.play();
      }

      setStarted(true);
    } catch (error) {
      console.log("Audio error:", error);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: closing ? 0 : 1,
          scale: closing ? 1.05 : 1,
          filter: closing ? "blur(10px)" : "blur(0px)",
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="fixed inset-0 z-[999] overflow-hidden bg-black flex items-center justify-center"
      >

        {/* 🎧 AUDIO MOTOR */}
        <audio ref={audioRef} src="/audio/engine.mp3" />

        {/* FONDO */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/30 to-black" />

        {/* GLOW */}
        <motion.div
          animate={{
            scale: started ? 1.5 : 0.5,
            opacity: started ? 1 : 0.4,
          }}
          transition={{ duration: 2 }}
          className="absolute w-[500px] h-[500px] bg-red-500/30 blur-3xl rounded-full"
        />

        {/* CARRETERA */}
        {started && (
          <motion.div
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            transition={{ duration: 2 }}
            className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-zinc-900 to-transparent"
          />
        )}

        {/* CONTENIDO */}
        <div className="relative z-10 text-center px-6">

          {!started ? (
            <>
              <motion.h1 className="text-5xl md:text-7xl font-black">
                ⚡ John Doe ⚡
              </motion.h1>

              <motion.p className="mt-6 text-zinc-300 text-lg md:text-2xl">
                Presiona para encender los motores
              </motion.p>

              <motion.button
                onClick={startExperience}
                className="mt-10 bg-red-500 hover:bg-red-600 transition px-10 py-5 rounded-full text-xl font-black shadow-2xl"
              >
                Encender motor 🚗
              </motion.button>
            </>
          ) : (
            <>
              <motion.p className="text-zinc-300 text-lg md:text-2xl uppercase tracking-[0.3em]">
                En la Ruta 66...
              </motion.p>

              <motion.h1 className="mt-6 text-5xl md:text-8xl font-black">
                John Doe
              </motion.h1>

              <motion.p className="mt-6 text-yellow-400 text-xl md:text-3xl font-bold">
                ⚡ Celebrando un día especial ⚡
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 3.5,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleFinish}
                className="mt-12 px-6 py-3 rounded-full border border-white/20 hover:border-red-500 transition backdrop-blur-md"
              >
                Saltar intro
              </motion.button>
            </>
          )}

        </div>
      </motion.div>
    </AnimatePresence>
  );
}