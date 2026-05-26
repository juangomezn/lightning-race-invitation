import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import IntroScreen from "./components/IntroScreen";
import JhonCard from "./components/JhonDoeCard";
import Route66Section from "./components/Route66Section";
import RoadParallax from "./components/RoadParallax";
import RaceTicket from "./components/RaceTicket";
import CountdownSection from "./components/CountdownSection";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const audioRef = useRef(null);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleStart = () => {
    setShowIntro(false);

    setTimeout(() => {
      setShowMain(true);
    }, 1300);

    if (!musicStarted && audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.loop = true;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay bloqueado, esperando interacción");
        });
      }

      setMusicStarted(true);
    }
  };

  return (

    <div className="bg-black min-h-screen">

      {/* 🎧 AUDIO GLOBAL */}
      <audio ref={audioRef} src="/audio/music.mp3" />

      {/* INTRO */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <IntroScreen onFinish={handleStart} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMain && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="relative overflow-hidden bg-black text-white"
          >

            {/* PARALLAX GLOBAL */}
            <RoadParallax />

            {/* HERO */}
            <section className="relative min-h-screen flex items-center justify-center px-6">

              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('/images/backgrounds/route66.jpg')" }}
              />

              <div className="absolute inset-0 bg-black/70" />

              <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/20 blur-3xl rounded-full" />

              <div className="absolute bottom-0 left-0 right-0 h-[35vh] bg-gradient-to-t from-orange-500/10 to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="relative z-10 text-center max-w-5xl"
              >

                <motion.img
                  src="/images/cars/mcqueen.png"
                  alt="McQueen"
                  initial={{ x: -300, opacity: 0, rotate: -5 }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.4, delay: 0.5 }}
                  className="w-[320px] md:w-[520px] mx-auto drop-shadow-[0_0_40px_rgba(255,0,0,0.5)]"
                />

                <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">
                  Jhon Doe
                  <span className="block text-red-500">acelera hacia</span>
                  <span className="text-yellow-400">su gran celebración</span>
                </h1>

                <p className="mt-6 text-zinc-300 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
                  ⚡ Prepárate para una celebración llena de velocidad, diversión y aventura ⚡
                </p>

                <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
                  <a
                    href="https://github.com/juangomezn"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-red-500 hover:bg-red-600 transition-all px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
                  >
                    Confirmar asistencia
                  </a>

                  <button
                    onClick={() => {
                      document.getElementById("ticket")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="border border-white/30 hover:border-yellow-400 hover:bg-white/10 px-8 py-4 rounded-full font-bold"
                  >
                    Ver invitación
                  </button>
                </div>

              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
            </section>

            {/* SECCIONES */}
            <div className="relative h-40 bg-gradient-to-b from-black via-zinc-950 to-transparent" />

            <JhonCard />

            <div className="relative h-40 bg-gradient-to-b from-transparent via-black/70 to-transparent" />

            <Route66Section />

            <section id="ticket">
              <RaceTicket />
            </section>

            <CountdownSection />

            {/* FOOTER */}
            <footer className="relative py-20 text-center">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/10 to-black" />

              <div className="relative z-10 px-6">
                <p className="text-zinc-400 tracking-[0.4em] uppercase text-sm">
                  Ruta 66 Experience
                </p>

                <h3 className="mt-6 text-4xl md:text-6xl font-black">
                  ⚡ Nos vemos en la pista ⚡
                </h3>

                <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
                  Gracias por acompañar a Jhon Doe
                </p>

                {/* 🚗 BOTÓN DE CRÉDITO DESARROLLADOR */}
                <div className="fixed bottom-5 right-5 z-50">
                  <a
                    href="https://juandevportfolio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      group relative inline-flex items-center gap-2
                      px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md
                      border border-white/10 hover:border-yellow-400/60
                      shadow-lg transition-all duration-300 hover:scale-105
                    "
                  >
                    <span className="absolute inset-0 rounded-full bg-yellow-400/10 opacity-0 group-hover:opacity-100 transition" />
                    <span className="relative text-xs tracking-wide text-zinc-300 group-hover:text-yellow-300 transition">
                      Developed by Juan David Gomez
                    </span>
                    <span className="relative text-yellow-400 text-sm">🚗</span>
                  </a>
                </div>

              </div>
            </footer>

          </motion.main>
        )}
      </AnimatePresence>

    </div>
  );
}