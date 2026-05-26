import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CountdownSection() {

  const targetDate = new Date("2028-08-19T14:00:00");

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0"),

      hours: String(
        Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        )
      ).padStart(2, "0"),

      minutes: String(
        Math.floor(
          (difference / (1000 * 60)) % 60
        )
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      label: "Días",
      value: timeLeft.days,
    },
    {
      label: "Horas",
      value: timeLeft.hours,
    },
    {
      label: "Min",
      value: timeLeft.minutes,
    },
    {
      label: "Seg",
      value: timeLeft.seconds,
    },
  ];

  return (
    <section className="relative py-36 px-6 overflow-hidden">

      {/* FONDO */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      {/* GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/10 blur-3xl rounded-full" />

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

        <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
          La carrera comienza en...
        </p>

        <h2 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
          ⏳ Cuenta regresiva
        </h2>

        <p className="mt-6 text-zinc-400 text-lg max-w-2xl mx-auto">
          Prepárate para una experiencia temática inspirada en
          la legendaria Ruta 66, llena de velocidad, diversión y aventura.
        </p>
      </motion.div>

      {/* CONTADOR */}
      <div className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center shadow-[0_0_40px_rgba(255,0,0,0.12)]"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-yellow-400/5" />

            {/* NUMERO */}
            <motion.div
              key={item.value}
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative z-10 text-6xl md:text-8xl font-black text-white"
            >
              {item.value}
            </motion.div>

            {/* TEXTO */}
            <p className="relative z-10 mt-4 uppercase tracking-[0.3em] text-zinc-400 text-sm">
              {item.label}
            </p>

            {/* BRILLO */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60" />

          </motion.div>
        ))}

      </div>

      {/* TEXTO FINAL */}
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 1,
        }}
        viewport={{ once: true }}
        className="relative z-10 mt-20 text-center"
      >

        <p className="text-zinc-400 text-lg md:text-2xl">
          ⚡ Prepárate para arrancar motores ⚡
        </p>

      </motion.div>
    </section>
  );
}