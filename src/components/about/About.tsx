import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const reduceMotion = useReducedMotion();
  const motionEnabled = !reduceMotion;

  const { t } = useLanguage();

  const steps = t.about.steps;

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A3B45] text-white"
    >
      {/* BACKGROUND */}

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

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1500px]
          px-5
          py-20
          sm:px-6
          sm:py-28
          md:px-10
          md:py-32
          lg:px-16
          lg:py-40
        "
      >
        {/* HEADER */}

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
              text-[8px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-cyan-300/60
              sm:text-[9px]
              sm:tracking-[0.28em]
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

            {t.about.label}
          </div>

          <h2
            className="
              text-[2.65rem]
              font-semibold
              leading-[1.05]
              tracking-[-0.055em]
              text-white
              sm:text-5xl
              md:text-6xl
            "
          >
            {t.about.title}
            <br />

            <span className="text-cyan-200/45">
              {t.about.titleAccent}
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-[650px]
              text-[15px]
              leading-7
              text-white/45
              sm:mt-7
              sm:text-base
              md:text-lg
              md:leading-8
            "
          >
            {t.about.description}
          </p>
        </motion.div>

        {/* SYSTEM VISUAL */}

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
            mt-12
            overflow-hidden
            rounded-[24px]
            border
            border-cyan-300/[0.08]
            bg-white/[0.025]
            shadow-[0_25px_80px_rgba(0,0,0,.14)]
            sm:mt-16
            sm:rounded-[28px]
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
                p-6
                sm:p-9
                lg:border-b-0
                lg:border-r
                lg:border-cyan-300/[0.07]
                lg:p-12
              "
            >
              <div
                className="
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-cyan-200/35
                  sm:text-[9px]
                  sm:tracking-[0.25em]
                "
              >
                {t.about.physicalDigital}
              </div>

              <div className="mt-8 sm:mt-10">
                <div
                  className="
                    text-[58px]
                    font-light
                    leading-none
                    tracking-[-0.08em]
                    text-white/90
                    sm:text-[82px]
                  "
                >
                  {t.about.number}
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
                    text-[13px]
                    leading-6
                    text-white/35
                    sm:text-sm
                  "
                >
                  {t.about.connection}
                </p>
              </div>

              {/* SIGNAL */}

              <div
                className="
                  relative
                  mt-9
                  h-20
                  overflow-hidden
                  rounded-2xl
                  border
                  border-cyan-300/[0.07]
                  bg-cyan-300/[0.02]
                  sm:mt-12
                  sm:h-24
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
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-cyan-200/35
                    sm:text-[8px]
                    sm:tracking-[0.25em]
                  "
                >
                  {t.about.signal}
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}

            <div className="p-6 sm:p-9 lg:p-12">
              <div
                className="
                  mb-5
                  flex
                  items-center
                  justify-between
                  sm:mb-8
                "
              >
                <span
                  className="
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-cyan-200/35
                    sm:text-[9px]
                    sm:tracking-[0.25em]
                  "
                >
                  {t.about.howItWorks}
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-cyan-300/[0.10]
                    bg-cyan-300/[0.04]
                    px-2.5
                    py-1.5
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-cyan-300/55
                    sm:px-3
                    sm:text-[8px]
                    sm:tracking-[0.18em]
                  "
                >
                  {t.about.stages}
                </span>
              </div>

              <div>
                {steps.map((step, index) => (
                  <motion.div
                    key={`${index}-${step.title}`}
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
                      delay: motionEnabled ? index * 0.06 : 0,
                      ease,
                    }}
                    className="
                      group
                      relative
                      flex
                      gap-4
                      border-b
                      border-cyan-300/[0.07]
                      py-6
                      last:border-b-0
                      sm:gap-5
                      sm:py-7
                    "
                  >
                    <div
                      className="
                        relative
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-300/[0.14]
                        bg-cyan-300/[0.025]
                        text-[8px]
                        font-bold
                        text-cyan-300/60
                        transition-transform
                        duration-300
                        group-hover:scale-105
                        sm:h-9
                        sm:w-9
                        sm:text-[9px]
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="min-w-0">
                      <h3
                        className="
                          text-[15px]
                          font-semibold
                          leading-6
                          tracking-[-0.02em]
                          text-white/90
                          sm:text-lg
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2.5
                          max-w-[520px]
                          text-[13px]
                          leading-6
                          text-white/35
                          sm:text-sm
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

        {/* BOTTOM STATEMENT */}

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
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-cyan-300/[0.08]
            pt-7
            sm:mt-12
            sm:flex-row
            sm:items-end
            sm:justify-between
            sm:pt-8
          "
        >
          <p
            className="
              max-w-[620px]
              text-lg
              font-medium
              leading-7
              tracking-[-0.03em]
              text-white/75
              sm:text-xl
              sm:leading-8
              md:text-2xl
            "
          >
            {t.about.statement}
            <br />

            <span className="text-white/30">
              {t.about.statementAccent}
            </span>
          </p>

          <div
            className="
              text-[7px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-cyan-200/30
              sm:text-[8px]
              sm:tracking-[0.22em]
            "
          >
            MIMISU / 2026
          </div>
        </motion.div>
      </div>

      {/* TRANSITION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-b
          from-transparent
          to-[#052830]/30
          sm:h-24
        "
      />
    </section>
  );
}