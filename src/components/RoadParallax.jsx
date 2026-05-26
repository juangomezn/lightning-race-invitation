import { motion, useScroll, useTransform } from "framer-motion";

export default function RoadParallax() {
  const { scrollY } = useScroll();

  const roadY = useTransform(scrollY, [0, 2000], [0, 600]);

  const glowOpacity = useTransform(
    scrollY,
    [0, 800],
    [0.5, 0.1]
  );

  return (
    <>
      {/* FONDO PARALLAX */}
      <motion.div
        style={{ y: roadY }}
        className="fixed inset-0 z-[-10]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/backgrounds/route66.jpg')",
          }}
        />

        {/* OVERLAY OSCURO */}
        <div className="absolute inset-0 bg-black/75" />

        {/* GLOW */}
        <motion.div
          style={{
            opacity: glowOpacity,
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-500/20 blur-3xl rounded-full"
        />

        {/* SUNSET */}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-orange-500/20 to-transparent" />
      </motion.div>

      {/* POLVO / PARTICULAS */}
      <div className="fixed inset-0 pointer-events-none z-[-5] overflow-hidden">

        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -1000],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              delay: i,
              ease: "linear",
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10%",
            }}
          />
        ))}
      </div>

      {/* CARRETERA */}
      <div className="fixed bottom-0 left-0 right-0 h-28 z-[-4] overflow-hidden">

        {/* ASFALTO */}
        <div className="absolute inset-0 bg-zinc-900" />

        {/* LINEAS */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="absolute top-1/2 w-[200%] h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
        />

        {/* BRILLO */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>
    </>
  );
}