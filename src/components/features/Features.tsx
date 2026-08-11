import { motion, useReducedMotion } from "framer-motion";
import FeatureTimeline from "./FeatureTimeline";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Создаём носитель",
    text: "Формируем дизайн бутылки под задачу бренда и подготавливаем рекламное размещение.",
  },
  {
    number: "02",
    title: "Запускаем распространение",
    text: "Бутылки появляются в точках контакта с аудиторией — там, где бренд действительно может быть замечен.",
  },
  {
    number: "03",
    title: "Измеряем действие",
    text: "QR-код переводит физический контакт в цифровой сценарий и позволяет видеть результат кампании.",
  },
];

export default function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        bg-[#052830]
        text-white
      "
    >
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[20%]
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-300/[0.055]
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[20%]
          bottom-[15%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-teal-300/[0.035]
          blur-[130px]
        "
      />

      {/* =====================================================
          SOFT GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(180,240,245,.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(180,240,245,.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "100px 100px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
        }}
      />

      {/* =====================================================
          DECORATIVE ORBIT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          top-[25%]
          h-[600px]
          w-[900px]
          rounded-[50%]
          border
          border-cyan-200/[0.035]
          rotate-[-8deg]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[210px]
          top-[31%]
          h-[470px]
          w-[740px]
          rounded-[50%]
          border
          border-cyan-200/[0.025]
          rotate-[-8deg]
        "
      />

      {/* =====================================================
          TOP TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-black/20
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          pb-28
          pt-24
          sm:px-6
          sm:pb-32
          sm:pt-28
          md:px-10
          md:pb-40
          md:pt-36
          xl:px-16
          xl:pb-44
          xl:pt-44
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
                }
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
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-cyan-200/60
              sm:text-[10px]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_12px_rgba(103,232,249,.5)]
              "
            />

             Система
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-6
              max-w-[1000px]
              text-[clamp(2.7rem,7vw,6rem)]
              font-light
              leading-[0.94]
              tracking-[-0.055em]
              text-white
            "
          >
            От идеи
            <br className="sm:hidden" /> до контакта.

            <span className="block text-cyan-100/35">
              Всё остальное — система.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              max-w-[650px]
              text-[15px]
              leading-7
              text-cyan-50/55
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            MIMISU объединяет производство, распространение
            и цифровую аналитику в один рекламный цикл.
            Бренд получает не просто размещение,
            а измеримый путь от показа до действия.
          </p>
        </motion.div>

        {/* =================================================
            SYSTEM HEADER
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
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
            duration: reduceMotion ? 0 : 0.6,
            delay: reduceMotion ? 0 : 0.1,
            ease,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-cyan-100/[0.08]
            pt-5
            sm:mt-20
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-cyan-100/35
            "
          >
            MIMISU / CAMPAIGN FLOW
          </span>

          <div
            className="
              flex
              items-center
              gap-2
              text-[8px]
              uppercase
              tracking-[0.2em]
              text-cyan-100/35
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
              "
            />

            Physical → Digital
          </div>
        </motion.div>

        {/* =================================================
            MAIN SYSTEM
        ================================================= */}

        <div
          className="
            relative
            mt-8
            overflow-hidden
            rounded-[28px]
            border
            border-cyan-100/[0.09]
            bg-white/[0.025]
            shadow-[0_35px_100px_rgba(0,0,0,.18)]
            sm:rounded-[36px]
            md:mt-10
          "
        >
          {/* TOP ACCENT */}

          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-300/40
              to-transparent
            "
          />

          <div
            className="
              grid
              lg:grid-cols-[0.65fr_1.35fr]
            "
          >
            {/* =================================================
                LEFT VISUAL
            ================================================= */}

            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                border-b
                border-cyan-100/[0.08]
                p-6
                sm:p-9
                lg:min-h-[620px]
                lg:border-b-0
                lg:border-r
                lg:p-12
              "
            >
              {/* BIG NUMBER */}

              <div
                className="
                  absolute
                  -right-4
                  top-0
                  select-none
                  text-[180px]
                  font-light
                  leading-none
                  tracking-[-0.12em]
                  text-white/[0.025]
                  sm:text-[220px]
                "
              >
                
              </div>

              <div className="relative z-10">
                <div
                  className="
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.28em]
                    text-cyan-100/35
                  "
                >
                  Campaign engine
                </div>

                <div className="mt-8">
                  <div
                    className="
                      text-5xl
                      font-light
                      tracking-[-0.06em]
                      text-white
                      sm:text-6xl
                    "
                  >
                    ТРИ
                  </div>

                  <p
                    className="
                      mt-3
                      max-w-[220px]
                      text-sm
                      leading-6
                      text-cyan-50/45
                    "
                  >
                    последовательных этапа,
                    которые превращают идею
                    в измеримый контакт.
                  </p>
                </div>
              </div>

              {/* FLOW VISUAL */}

              <div
                className="
                  absolute
                  bottom-7
                  left-6
                  right-6
                  sm:bottom-9
                  sm:left-9
                  sm:right-9
                  lg:bottom-12
                  lg:left-12
                  lg:right-12
                "
              >
                <div
                  className="
                    relative
                    h-28
                    overflow-hidden
                    rounded-2xl
                    border
                    border-cyan-100/[0.08]
                    bg-black/[0.12]
                  "
                >
                  {/* TRACK */}

                  <div
                    className="
                      absolute
                      left-6
                      right-6
                      top-1/2
                      h-px
                      bg-cyan-100/[0.12]
                    "
                  />

                  {/* NODES */}

                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className="absolute top-1/2 -translate-y-1/2"
                      style={{
                        left:
                          index === 0
                            ? "12%"
                            : index === 1
                              ? "50%"
                              : "88%",
                      }}
                    >
                      <div
                        className="
                          h-3
                          w-3
                          rounded-full
                          border
                          border-cyan-200/50
                          bg-[#052830]
                          shadow-[0_0_18px_rgba(103,232,249,.35)]
                        "
                      />
                    </div>
                  ))}

                  {/* MOVING SIGNAL */}

                  {!reduceMotion && (
                    <motion.div
                      animate={{
                        x: ["-100%", "520%"],
                      }}
                      transition={{
                        duration: 3.2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-px
                        w-24
                        -translate-y-1/2
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-300
                        to-transparent
                      "
                    />
                  )}

                  <div
                    className="
                      absolute
                      bottom-3
                      left-4
                      text-[7px]
                      uppercase
                      tracking-[0.2em]
                      text-cyan-100/25
                    "
                  >
                    DESIGN
                  </div>

                  <div
                    className="
                      absolute
                      bottom-3
                      left-1/2
                      -translate-x-1/2
                      text-[7px]
                      uppercase
                      tracking-[0.2em]
                      text-cyan-100/25
                    "
                  >
                    REACH
                  </div>

                  <div
                    className="
                      absolute
                      bottom-3
                      right-4
                      text-[7px]
                      uppercase
                      tracking-[0.2em]
                      text-cyan-100/25
                    "
                  >
                    DATA
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT STEPS
            ================================================= */}

            <div className="p-6 sm:p-9 lg:p-12">
              <div
                className="
                  mb-4
                  text-[8px]
                  font-semibold
                  uppercase
                  tracking-[0.28em]
                  text-cyan-100/30
                "
              >
                How the system moves
              </div>

              <div>
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 20,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion
                        ? 0
                        : index * 0.08,
                      ease,
                    }}
                    className="
                      group
                      relative
                      flex
                      gap-5
                      border-b
                      border-cyan-100/[0.07]
                      py-7
                      last:border-b-0
                      sm:gap-7
                      sm:py-9
                    "
                  >
                    {/* CONNECTOR */}

                    {index < steps.length - 1 && (
                      <div
                        className="
                          absolute
                          left-[17px]
                          top-[72px]
                          bottom-[-1px]
                          w-px
                          bg-gradient-to-b
                          from-cyan-300/25
                          to-transparent
                          sm:left-[21px]
                          sm:top-[82px]
                        "
                      />
                    )}

                    {/* NUMBER */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-100/[0.12]
                        bg-[#052830]
                        text-[8px]
                        font-bold
                        text-cyan-100/45
                        transition-all
                        duration-300
                        group-hover:border-cyan-300/40
                        group-hover:text-cyan-200
                        sm:h-11
                        sm:w-11
                      "
                    >
                      {step.number}
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0">
                      <div
                        className="
                          flex
                          flex-col
                          gap-2
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                        "
                      >
                        <h3
                          className="
                            text-lg
                            font-medium
                            tracking-[-0.025em]
                            text-white
                            sm:text-xl
                          "
                        >
                          {step.title}
                        </h3>

                        <span
                          className="
                            text-[7px]
                            uppercase
                            tracking-[0.2em]
                            text-cyan-200/25
                          "
                        >
                          0{index + 1}
                        </span>
                      </div>

                      <p
                        className="
                          mt-3
                          max-w-[560px]
                          text-sm
                          leading-6
                          text-cyan-50/42
                          sm:text-[15px]
                          sm:leading-7
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
        </div>

        {/* =================================================
            FEATURE TIMELINE
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.1,
            ease,
          }}
          className="mt-12 sm:mt-16"
        >
          <FeatureTimeline />
        </motion.div>

        {/* =================================================
            FINAL STATEMENT
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                }
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
            duration: reduceMotion ? 0 : 0.65,
            ease,
          }}
          className="
            mt-20
            border-t
            border-cyan-100/[0.08]
            pt-8
            sm:mt-24
            sm:flex
            sm:items-end
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[700px]
              text-2xl
              font-light
              leading-tight
              tracking-[-0.035em]
              text-white/80
              sm:text-3xl
              md:text-4xl
            "
          >
            Каждый этап работает
            <span className="text-cyan-100/30">
              {" "}
              на следующий.
            </span>
          </p>

          <div
            className="
              mt-6
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-100/25
              sm:mt-0
            "
          >
            MIMISU / 2026
          </div>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-b
          from-transparent
          to-[#031A22]
        "
      />
    </section>
  );
}
