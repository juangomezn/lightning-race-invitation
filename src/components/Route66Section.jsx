import { motion } from "framer-motion";

export default function Route66Section() {
  return (
    <section className="relative min-h-screen overflow-hidden py-32">

      {/* FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/backgrounds/sunset.jpg')",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-500/20 blur-3xl rounded-full" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TITULO */}
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-yellow-400 tracking-[0.4em] uppercase text-sm">
            Ruta 66
          </p>

          <h2 className="mt-6 text-5xl md:text-7xl font-black">
            La gran carrera
            <span className="block text-red-500">
              está por comenzar
            </span>
          </h2>

          <p className="mt-8 text-zinc-300 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed">
            John Doe se prepara para vivir
            una aventura llena de velocidad,
            diversión y momentos inolvidables.
          </p>
        </motion.div>

        {/* PERSONAJES */}
        <div className="mt-28 grid md:grid-cols-3 gap-10">

          {/* PERSONAJE 1 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 text-center"
          >
            <img
              src="/images/cars/mate.png"
              alt="Mate"
              className="w-[220px] mx-auto"
            />

            <h3 className="mt-6 text-3xl font-black">
              Mate
            </h3>

            <p className="mt-4 text-zinc-300">
              El compañero más divertido de la pista
              ya está listo para la celebración.
            </p>
          </motion.div>

          {/* PERSONAJE 2 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 text-center"
          >
            <img
              src="/images/cars/doc.png"
              alt="Doc"
              className="w-[1200px] mx-auto"
            />

            <h3 className="mt-6 text-3xl font-black">
              Doc
            </h3>

            <p className="mt-4 text-zinc-300">
              La experiencia y la velocidad
              acompañarán esta gran aventura.
            </p>
          </motion.div>

          {/* PERSONAJE 3 */}
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-[30px] p-8 text-center"
          >
            <img
              src="/images/cars/guidoyluigi.png"
              alt="Guido y Luigi"
              className="w-[1200px] mx-auto"
            />

            <h3 className="mt-6 text-3xl font-black">
              Guido y Luigi
            </h3>

            <p className="mt-4 text-zinc-300">
              Todo el equipo de pits está preparado
              para celebrar esta gran aventura.
            </p>
          </motion.div>
        </div>

        {/* CARRETERA */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          viewport={{ once: true }}
          className="relative mt-32 h-40 overflow-hidden rounded-[40px] border border-white/10"
        >
          {/* ASFALTO */}
          <div className="absolute inset-0 bg-zinc-900" />

          {/* LÍNEAS */}
          <motion.div
            animate={{
              x: ["0%", "100%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="absolute top-1/2 left-[-20%] w-[140%] h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          />

          {/* TEXTO */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <h3 className="text-3xl md:text-5xl font-black text-center">
              ⚡ Prepárate para acelerar ⚡
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}