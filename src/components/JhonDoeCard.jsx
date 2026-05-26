import { motion } from "framer-motion";

export default function JhonDoeCard() {
  return (
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
      className="relative mt-20 flex justify-center px-6 text-white" // Forzado text-white para asegurar contraste si el fondo es oscuro
    >
      {/* GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-red-500/20 blur-3xl rounded-full" />

      {/* CARD */}
      <motion.div
        whileHover={{
          rotateY: 6,
          rotateX: 4,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        className="relative z-10 bg-white/10 border border-white/10 backdrop-blur-xl rounded-[40px] overflow-hidden max-w-[420px] shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000, // Añadido para que el efecto de rotación 3D sea realista
        }}
      >
        {/* IMAGEN */}
        <div className="relative overflow-hidden">
          <img
            src="/images/JhonDoe/JhonDoe-driver.png"
            alt="Jhon Doe"
            className="w-full h-[500px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* BADGE */}
          <div className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-xl">
            ⚡ Rookie Racer
          </div>
        </div>

        {/* INFO */}
        <div className="p-8 text-center">
          <h2 className="text-4xl font-black">
            Jhon Doe
          </h2>

          <p className="mt-4 text-zinc-300 text-lg">
            El pequeño campeón está listo para
            celebrar su primer añito en la pista.
          </p>

          {/* DETALLES */}
          <div className="mt-8 grid gap-4">
            <div className="bg-black/30 rounded-2xl p-4">
              <p className="text-zinc-400 text-sm">
                📍 Lugar
              </p>

              <p className="font-bold text-lg">
                Route 66 Event Center - 123 Main Street
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-4">
              <p className="text-zinc-400 text-sm">
                🕑 Hora
              </p>

              <p className="font-bold text-lg">
                2:00 PM
              </p>
            </div>
          </div>

          {/* BOTÓN */}
          <a
            href="https://github.com/juangomezn"
            target="_blank"
            rel="noopener noreferrer" // Añadido por seguridad
            className="mt-8 inline-block bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-full font-bold shadow-xl text-white"
          >
            Confirmar asistencia 🚗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}