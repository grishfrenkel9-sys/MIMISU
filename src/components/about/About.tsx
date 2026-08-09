
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#1A4A55]
        py-28
        text-white
        md:py-36
        lg:py-44
      "
    >
      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#1A4A55]
          via-[#1A4A55]
          to-[#1A4A55]
        "
      />

      {/* AMBIENT LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[4%]
          h-[620px]
          w-[620px]
          rounded-full
          bg-cyan-100/[0.06]
          blur-[190px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[240px]
          top-[30%]
          h-[560px]
          w-[560px]
          rounded-full
          bg-cyan-100/[0.045]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[35%]
          bottom-[-180px]
          h-[500px]
          w-[700px]
          rounded-full
          bg-cyan-50/[0.035]
          blur-[180px]
        "
      />

      {/* GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(220,250,255,.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(220,250,255,.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "120px 120px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      {/* HORIZONTAL LINES */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[18%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-100/[0.08]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[54%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-100/[0.05]
          to-transparent
        "
      />

      {/* ORBITS */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[16%]
          top-[12%]
          h-[620px]
          w-[920px]
          rounded-[50%]
          border
          border-cyan-50/[0.04]
          rotate-[-8deg]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[10%]
          top-[20%]
          h-[470px]
          w-[760px]
          rounded-[50%]
          border
          border-cyan-50/[0.025]
          rotate-[-8deg]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[26%]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-cyan-50/[0.025]
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1400px]
          px-6
          md:px-10
          xl:px-16
        "
      >
        {/* LABEL */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            flex
            items-center
            gap-4
            text-[10px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-cyan-100/80
          "
        >
          <span
            className="
              h-px
              w-10
              bg-cyan-100/60
            "
          />

          Глава 01 // О платформе
        </motion.div>

        {/* TITLE */}

        <div className="mt-8 overflow-hidden">
          <motion.h2
            initial={{
              opacity: 0,
              y: 80,
              filter: "blur(14px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.35,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="
              max-w-6xl
              text-[clamp(3.2rem,7vw,7rem)]
              font-light
              leading-[0.9]
              tracking-[-0.06em]
            "
          >
            Реклама,
            <br />

            <span className="text-white/40">
              которую невозможно пролистать.
            </span>
          </motion.h2>
        </div>

        {/* MAIN TEXT */}

        <div
          className="
            mt-16
            grid
            gap-12
            lg:grid-cols-[1fr_0.62fr]
            lg:items-end
            lg:gap-24
          "
        >
          <motion.p
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease,
            }}
            className="
              max-w-3xl
              text-base
              leading-[1.9]
              text-[#D8F3F5]
              md:text-lg
              md:leading-[1.9]
            "
          >
            MIMISU превращает обычную бутылку воды
            в физический рекламный носитель — объект,
            который оказывается рядом с человеком
            именно тогда, когда его внимание действительно
            принадлежит моменту.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease,
            }}
            className="
              border-l
              border-cyan-100/35
              bg-white/[0.025]
              pl-6
              py-3
            "
          >
            <div
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-cyan-100/80
              "
            >
              Physical contact
            </div>

            <div
              className="
                mt-3
                text-sm
                leading-6
                text-white/65
              "
            >
              Не баннер.
              <br />
              Не экран.
              <br />
              Реальный объект.
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease,
          }}
          className="
            mt-20
            h-px
            w-full
            origin-left
            bg-gradient-to-r
            from-cyan-100/30
            via-cyan-50/[0.1]
            to-transparent
          "
        />

        {/* FEATURES */}

        <div
          className="
            mt-10
            grid
            gap-8
            sm:grid-cols-3
          "
        >
          {[
            {
              number: "01",
              title: "Физический носитель",
              text: "Реклама становится частью реального пространства.",
            },
            {
              number: "02",
              title: "Прямой контакт",
              text: "Бренд оказывается буквально в руках аудитории.",
            },
            {
              number: "03",
              title: "Реальное присутствие",
              text: "Контакт происходит естественно, без пролистывания.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: false,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease,
              }}
              className="
                group
                border
                border-cyan-50/[0.1]
                bg-white/[0.025]
                px-5
                py-5
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-50/[0.18]
                hover:bg-white/[0.04]
              "
            >
              <div
                className="
                  font-mono
                  text-[9px]
                  tracking-[0.25em]
                  text-cyan-100/55
                "
              >
                {item.number}
              </div>

              <div
                className="
                  mt-3
                  text-sm
                  text-white/75
                  transition-colors
                  duration-300
                  group-hover:text-white
                "
              >
                {item.title}
              </div>

              <p
                className="
                  mt-2
                  max-w-xs
                  text-xs
                  leading-6
                  text-white/45
                "
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION TRANSITION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-48
          bg-gradient-to-t
          from-[#1A4A55]
          to-transparent
        "
      />
    </section>
  );
}