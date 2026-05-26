import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

export default function RaceTicket() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">

      {/* GLOW */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />

      {/* FONDO */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/backgrounds/route66.jpg')",
          }}
        />
      </div>

      {/* TITULO */}
      <motion.div
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="relative z-10 text-center"
      >

        <p className="tracking-[0.4em] uppercase text-zinc-400 text-sm">
          Copa Pistón
        </p>

        <h2 className="mt-6 text-5xl md:text-7xl font-black">
          🎫 Ticket Oficial
        </h2>

        <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
          Prepárate para vivir una experiencia interactiva
          inspirada en Cars, llena de velocidad y aventura.
        </p>
      </motion.div>

      {/* TICKET */}
      <motion.div
        initial={{
          opacity: 0,
          rotateX: 20,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          rotateX: 0,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="relative z-10 mt-20 max-w-5xl mx-auto"
      >

        {/* SOMBRA */}
        <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-[40px]" />

        {/* CONTENEDOR */}
        <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-[0_0_60px_rgba(255,0,0,0.15)]">

          {/* LINEA SUPERIOR */}
          <div className="h-3 bg-gradient-to-r from-red-500 via-yellow-400 to-red-500" />

          <div className="grid md:grid-cols-2">

            {/* IZQUIERDA */}
            <div className="relative p-10 md:p-14">

              {/* NUMERO */}
              <div className="absolute top-6 right-6 text-[90px] font-black text-white/5">
                95
              </div>

              <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
                Invitación Oficial
              </p>

              <h3 className="mt-6 text-5xl md:text-6xl font-black leading-none">
                <span className="block text-red-500">
                  John Doe
                </span>
              </h3>

              <p className="mt-6 text-zinc-300 text-xl">
                ⚡ Celebra un día especial ⚡
              </p>

              {/* INFO */}
              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Lugar
                    </p>

                    <p className="font-bold text-lg">
                      Route 66 Event Center
                    </p>

                    <p className="text-zinc-400">
                      123 Main Street
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                    <FaClock />
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Fecha
                    </p>

                    <p className="font-bold text-lg">
                      Sabado 19 de Agosto - 2:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <FaTrophy />
                  </div>

                  <div>
                    <p className="text-zinc-500 text-sm">
                      Equipo oficial
                    </p>

                    <p className="font-bold text-lg">
                      Jane Doe
                    </p>

                    <p className="text-zinc-400">
                      John Doe Sr. & Jane Doe
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* DERECHA */}
            <div className="relative bg-gradient-to-br from-red-600/20 via-black to-black flex flex-col items-center justify-center p-10 overflow-hidden">

              {/* FONDO */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/backgrounds/route66.jpg')",
                  }}
                />
              </div>

              {/* CIRCULO */}
              <div className="absolute w-[500px] h-[500px] bg-red-500/10 blur-3xl rounded-full" />

              {/* MCQUEEN */}
              <motion.img
                src="/images/cars/mcqueen.png"
                alt="McQueen"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 0.3,
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="relative z-10 w-[280px] md:w-[420px] drop-shadow-[0_0_40px_rgba(255,0,0,0.5)]"
              />

              {/* TEXTO */}
              <p className="relative z-10 mt-8 text-zinc-300 uppercase tracking-[0.4em] text-sm text-center">
                Ruta 66 Experience
              </p>

              {/* BOTON */}
              <a
                href="https://github.com/juangomezn"
                target="_blank"
                rel="noreferrer"
                className="relative z-10 mt-8 bg-yellow-400 text-black hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full font-black shadow-2xl"
              >
                Confirmar asistencia 🚗
              </a>

            </div>

          </div>

          {/* PERFORACIONES */}
          <div className="absolute left-[-15px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black" />
          <div className="absolute right-[-15px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black" />

        </div>
      </motion.div>
    </section>
  );
}