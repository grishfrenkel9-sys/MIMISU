import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Statement() {
  return (
    <section className="relative py-20 md:py-28">
      {/* Ambient glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-[20%]
          top-[20%]
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-cyan-300/[0.08]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          bottom-[10%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-sky-300/[0.07]
          blur-[120px]
        "
      />

      <div className="relative z-10 grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            flex
            items-start
            gap-3
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.3em]
            text-[#0E7490]/60
          "
        >
          <span
            className="
              mt-1
              h-2
              w-2
              rounded-full
              bg-[#0EA5A8]
              shadow-[0_0_16px_rgba(14,165,168,0.35)]
            "
          />

          <span>
            MiMiSU
            <br />
            / Water Media
          </span>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="max-w-[1000px]"
        >
          <h2
            className="
              text-[clamp(2.2rem,4.5vw,5rem)]
              font-black
              leading-[0.98]
              tracking-[-0.045em]
              text-[#073B4C]
            "
          >
            Мы превращаем
            <span className="text-[#0E7490]"> воду </span>
            в точку контакта
            <span className="text-[#4B8D99]">
              {" "}
              между брендом и человеком.
            </span>
          </h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
              duration: 0.7,
              ease,
            }}
            className="
              mt-8
              max-w-[720px]
              text-[15px]
              leading-7
              text-[#073B4C]/60
              md:text-[17px]
              md:leading-8
            "
          >
            Каждая бутылка становится физическим носителем бренда,
            который находится рядом с аудиторией в момент реального
            потребления. Мы соединяем дистрибуцию, дизайн и цифровую
            аналитику в одной рекламной системе.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
              ease,
            }}
            className="
              mt-10
              flex
              items-center
              gap-4
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#0E7490]/45
            "
          >
            <span className="h-px w-12 bg-[#0E7490]/25" />

            Physical media

            <span className="text-[#0E7490]/20">•</span>

            Digital data

            <span className="text-[#0E7490]/20">•</span>

            Real audience
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}