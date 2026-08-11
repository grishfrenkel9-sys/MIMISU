import { motion, useReducedMotion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Бренд появляется в реальном мире",
    text: "Кампания начинается с физического контакта. Бренд выбирает объём размещения и получает присутствие там, где люди уже потребляют воду.",
  },
  {
    number: "02",
    title: "Контакт происходит естественно",
    text: "Бутылка оказывается в руках человека без дополнительного рекламного барьера — в кафе, офисе, магазине или городском пространстве.",
  },
  {
    number: "03",
    title: "Физический контакт становится действием",
    text: "QR-код переводит человека из офлайн-среды в цифровой канал, где можно измерять переходы, интерес и дальнейшее взаимодействие.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const reduceMotion = useReducedMotion();
  const motionEnabled = !reduceMotion;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A3B45] text-white"
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_78%_18%,rgba(103,232,249,.10),transparent_34%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[20%]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-cyan-300/[0.08]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[110px]
          top-[28%]
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-cyan-300/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[10%]
          left-[-180px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-300/[0.04]
          blur-[100px]
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-5
          py-24
          sm:px-6
          sm:py-28
          md:px-10
          md:py-32
          lg:px-16
          lg:py-40
        "
      >
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={
            motionEnabled
              ? {
                  opacity: 0,
                  y: 18,
                }
              : false
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: motionEnabled ? 0.55 : 0,
            ease,
          }}
          className="max-w-[820px]"
        >
          <div
            className="
              mb-5
              flex
              items-center
              gap-3
              text-[9px]
              font-bold
              uppercase
              tracking-[0.28em]
              text-cyan-300/60
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_10px_rgba(103,232,249,.45)]
              "
            />

            About the system
          </div>

          <h2
            className="
              text-4xl
              font-semibold
              leading-[1.04]
              tracking-[-0.05em]
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            Реклама начинается
            <br />

            <span className="text-cyan-200/45">
              не с экрана.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-[650px]
              text-base
              leading-7
              text-white/45
              md:text-lg
              md:leading-8
            "
          >
            MIMISU создаёт физическую точку контакта между
            брендом и человеком. Мы переносим рекламное
            сообщение из привычной цифровой среды
            в реальный повседневный контекст.
          </p>
        </motion.div>

        {/* =========================================
            SYSTEM VISUAL
        ========================================= */}

        <motion.div
          initial={
            motionEnabled
              ? {
                  opacity: 0,
                  y: 24,
                }
              : false
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: motionEnabled ? 0.65 : 0,
            delay: motionEnabled ? 0.05 : 0,
            ease,
          }}
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[28px]
            border
            border-cyan-300/[0.08]
            bg-white/[0.025]
            shadow-[0_25px_80px_rgba(0,0,0,.14)]
            md:mt-20
            md:rounded-[38px]
          "
        >
          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-300/30
              to-transparent
            "
          />

          <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
            {/* LEFT PANEL */}

            <div
              className="
                relative
                border-b
                border-cyan-300/[0.07]
                p-7
                sm:p-9
                lg:border-b-0
                lg:border-r
                lg:border-cyan-300/[0.07]
                lg:p-12
              "
            >
              <div
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-200/35
                "
              >
                Physical → Digital
              </div>

              <div className="mt-10">
                <div
                  className="
                    text-[64px]
                    font-light
                    leading-none
                    tracking-[-0.08em]
                    text-white/90
                    sm:text-[82px]
                  "
                >
                  01
                </div>

                <div
                  className="
                    mt-5
                    h-px
                    w-full
                    bg-cyan-300/[0.09]
                  "
                />

                <p
                  className="
                    mt-5
                    max-w-[310px]
                    text-sm
                    leading-6
                    text-white/35
                  "
                >
                  Физический объект становится
                  связующим звеном между вниманием
                  человека и цифровым действием.
                </p>
              </div>

              {/* SIGNAL */}

              <div
                className="
                  relative
                  mt-12
                  h-24
                  overflow-hidden
                  rounded-2xl
                  border
                  border-cyan-300/[0.07]
                  bg-cyan-300/[0.02]
                "
              >
                <div
                  className="
                    absolute
                    inset-y-0
                    left-[20%]
                    w-px
                    bg-cyan-300/10
                  "
                />

                <div
                  className="
                    absolute
                    inset-y-0
                    left-[50%]
                    w-px
                    bg-cyan-300/20
                  "
                />

                <div
                  className="
                    absolute
                    inset-y-0
                    left-[80%]
                    w-px
                    bg-cyan-300/10
                  "
                />

                {motionEnabled && (
                  <motion.div
                    animate={{
                      x: ["-120%", "500%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-y-0
                      left-0
                      w-16
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-300/[0.10]
                      to-transparent
                      will-change-transform
                    "
                  />
                )}

                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-cyan-200/35
                  "
                >
                  QR / DATA / ACTION
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}

            <div className="p-7 sm:p-9 lg:p-12">
              <div
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
                "
              >
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-cyan-200/35
                  "
                >
                  How it works
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-cyan-300/[0.10]
                    bg-cyan-300/[0.04]
                    px-3
                    py-1.5
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-cyan-300/55
                  "
                >
                  3 stages
                </span>
              </div>

              <div>
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={
                      motionEnabled
                        ? {
                            opacity: 0,
                            y: 12,
                          }
                        : false
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: motionEnabled ? 0.45 : 0,
                      delay: motionEnabled
                        ? index * 0.06
                        : 0,
                      ease,
                    }}
                    className="
                      group
                      relative
                      flex
                      gap-5
                      border-b
                      border-cyan-300/[0.07]
                      py-7
                      last:border-b-0
                    "
                  >
                    <div
                      className="
                        relative
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-300/[0.14]
                        bg-cyan-300/[0.025]
                        text-[9px]
                        font-bold
                        text-cyan-300/60
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      "
                    >
                      {step.number}
                    </div>

                    <div>
                      <h3
                        className="
                          text-base
                          font-semibold
                          tracking-[-0.02em]
                          text-white/90
                          sm:text-lg
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[520px]
                          text-sm
                          leading-6
                          text-white/35
                        "
                      >
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================= */}

        <motion.div
          initial={
            motionEnabled
              ? {
                  opacity: 0,
                  y: 16,
                }
              : false
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: motionEnabled ? 0.55 : 0,
            ease,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-cyan-300/[0.08]
            pt-8
            sm:flex-row
            sm:items-end
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[620px]
              text-xl
              font-medium
              leading-8
              tracking-[-0.03em]
              text-white/75
              md:text-2xl
            "
          >
            Бутылка — это только начало.
            <br />

            <span className="text-white/30">
              Ценность создаёт взаимодействие вокруг неё.
            </span>
          </p>

          <div
            className="
              text-[8px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-cyan-200/30
            "
          >
            MIMISU / 2026
          </div>
        </motion.div>
      </div>

      {/* =========================================
          TRANSITION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-24
          bg-gradient-to-b
          from-transparent
          to-[#052830]/30
        "
      />
    </section>
  );
}