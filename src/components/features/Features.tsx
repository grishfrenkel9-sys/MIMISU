import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

import FeatureTimeline from "./FeatureTimeline";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Features() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

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
      {/* ATMOSPHERE */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[35%]
          top-[8%]
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-300/[0.045]
          blur-[80px]

          sm:-right-[18%]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[30%]
          bottom-[15%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-teal-300/[0.03]
          blur-[80px]

          sm:-left-[18%]
          sm:h-[340px]
          sm:w-[340px]
          sm:blur-[100px]
        "
      />

      {/* GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.014]
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
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
        }}
      />

      {/* ORBIT */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[280px]
          top-[25%]
          hidden
          h-[600px]
          w-[900px]
          rotate-[-8deg]
          rounded-[50%]
          border
          border-cyan-200/[0.025]
          lg:block
        "
      />

      {/* TOP TRANSITION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-24
          bg-gradient-to-b
          from-black/20
          to-transparent

          sm:h-32
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-5
          pb-20
          pt-20

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
        {/* HEADER */}

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
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
        >
          <div
            className="
              flex
              items-center
              gap-2.5
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-200/60

              sm:gap-3
              sm:text-[10px]
              sm:tracking-[0.28em]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-cyan-300
              "
            />

            {t.features.label}
          </div>

          <h2
            className="
              mt-5
              max-w-[1000px]
              text-[clamp(2.4rem,11vw,6rem)]
              font-light
              leading-[0.92]
              tracking-[-0.06em]
              text-white

              sm:mt-6
              sm:text-[clamp(2.7rem,7vw,6rem)]
              sm:leading-[0.94]
              sm:tracking-[-0.055em]
            "
          >
            {t.features.title}

            <span className="block text-cyan-100/35">
              {t.features.titleAccent}
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-[650px]
              text-[13px]
              leading-6
              text-cyan-50/55

              sm:mt-7
              sm:text-base
              sm:leading-8

              md:text-lg
            "
          >
            {t.features.description}
          </p>
        </motion.div>

        {/* SYSTEM HEADER */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-3
            border-t
            border-cyan-100/[0.08]
            pt-4

            sm:mt-20
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:gap-4
            sm:pt-5
          "
        >
          <span
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-100/35

              sm:text-[8px]
              sm:tracking-[0.28em]
            "
          >
            MIMISU / CAMPAIGN FLOW
          </span>

          <div
            className="
              flex
              items-center
              gap-2
              text-[7px]
              uppercase
              tracking-[0.18em]
              text-cyan-100/35

              sm:text-[8px]
              sm:tracking-[0.2em]
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

            {t.features.physicalDigital}
          </div>
        </div>

        {/* MAIN SYSTEM */}

        <div
          className="
            relative
            mt-6
            overflow-hidden
            rounded-[22px]
            border
            border-cyan-100/[0.09]
            bg-white/[0.025]

            sm:mt-8
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
            {/* LEFT VISUAL */}

            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                border-b
                border-cyan-100/[0.08]
                p-5

                sm:min-h-[340px]
                sm:p-9

                lg:min-h-[620px]
                lg:border-b-0
                lg:border-r
                lg:p-12
              "
            >
              <div className="relative z-10">
                <div
                  className="
                    text-[7px]
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-cyan-100/35

                    sm:text-[8px]
                    sm:tracking-[0.28em]
                  "
                >
                  {t.features.campaignEngine}
                </div>

                {/* THREE BLOCK */}

                <div
                  className="
                    mt-7

                    sm:mt-9
                  "
                >
                  <div
                    className="
                      text-[clamp(3.2rem,16vw,5rem)]
                      font-light
                      leading-none
                      tracking-[-0.07em]
                      text-white

                      sm:text-5xl
                      sm:leading-none

                      md:text-6xl
                    "
                  >
                    {t.features.three}
                  </div>

                  <p
                    className="
                      mt-4
                      max-w-[230px]
                      text-[12px]
                      leading-5
                      text-cyan-50/45

                      sm:mt-4
                      sm:max-w-[280px]
                      sm:text-sm
                      sm:leading-6

                      lg:max-w-[300px]
                    "
                  >
                    {t.features.threeDescription}
                  </p>
                </div>
              </div>

              {/* FLOW */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  right-5

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
                    h-[92px]
                    overflow-hidden
                    rounded-xl
                    border
                    border-cyan-100/[0.08]
                    bg-black/[0.12]

                    sm:h-28
                    sm:rounded-2xl
                  "
                >
                  {/* TRACK */}

                  <div
                    className="
                      absolute
                      left-5
                      right-5
                      top-1/2
                      h-px
                      bg-cyan-100/[0.12]

                      sm:left-6
                      sm:right-6
                    "
                  />

                  {/* NODES */}

                  {[12, 50, 88].map((position) => (
                    <div
                      key={position}
                      className="
                        absolute
                        top-1/2
                        -translate-y-1/2
                      "
                      style={{
                        left: `${position}%`,
                      }}
                    >
                      <div
                        className="
                          h-2.5
                          w-2.5
                          rounded-full
                          border
                          border-cyan-200/50
                          bg-[#052830]
                          shadow-[0_0_12px_rgba(103,232,249,.3)]

                          sm:h-3
                          sm:w-3
                        "
                      />
                    </div>
                  ))}

                  {/* SIGNAL */}

                  {!reduceMotion && (
                    <motion.div
                      animate={{
                        x: ["-100%", "520%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="
                        absolute
                        left-0
                        top-1/2
                        h-px
                        w-16
                        -translate-y-1/2
                        bg-gradient-to-r
                        from-transparent
                        via-cyan-300
                        to-transparent

                        sm:w-20
                      "
                    />
                  )}

                  <div
                    className="
                      absolute
                      bottom-2
                      left-3
                      text-[6px]
                      uppercase
                      tracking-[0.18em]
                      text-cyan-100/25

                      sm:bottom-3
                      sm:left-4
                      sm:text-[7px]
                      sm:tracking-[0.2em]
                    "
                  >
                    {t.features.design}
                  </div>

                  <div
                    className="
                      absolute
                      bottom-2
                      left-1/2
                      -translate-x-1/2
                      text-[6px]
                      uppercase
                      tracking-[0.18em]
                      text-cyan-100/25

                      sm:bottom-3
                      sm:text-[7px]
                      sm:tracking-[0.2em]
                    "
                  >
                    {t.features.reach}
                  </div>

                  <div
                    className="
                      absolute
                      bottom-2
                      right-3
                      text-[6px]
                      uppercase
                      tracking-[0.18em]
                      text-cyan-100/25

                      sm:bottom-3
                      sm:right-4
                      sm:text-[7px]
                      sm:tracking-[0.2em]
                    "
                  >
                    {t.features.data}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SYSTEM */}

            <div
              className="
                p-5

                sm:p-9

                lg:p-12
              "
            >
              <div
                className="
                  mb-1
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-cyan-100/30

                  sm:mb-4
                  sm:text-[8px]
                  sm:tracking-[0.28em]
                "
              >
                {t.features.systemFlow}
              </div>

              <div>
                {t.features.systemSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 16,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : index * 0.06,
                      ease,
                    }}
                    className="
                      group
                      relative
                      flex
                      gap-4
                      border-b
                      border-cyan-100/[0.07]
                      py-6
                      last:border-b-0

                      sm:gap-7
                      sm:py-9
                    "
                  >
                    {/* CONNECTOR */}

                    {index < t.features.systemSteps.length - 1 && (
                      <div
                        className="
                          absolute
                          left-[15px]
                          top-[62px]
                          bottom-[-1px]
                          w-px
                          bg-gradient-to-b
                          from-cyan-300/20
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
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-cyan-100/[0.12]
                        bg-[#052830]
                        text-[7px]
                        font-bold
                        text-cyan-100/45
                        transition-colors
                        duration-300
                        group-hover:border-cyan-300/40
                        group-hover:text-cyan-200

                        sm:h-11
                        sm:w-11
                        sm:text-[8px]
                      "
                    >
                      {step.number}
                    </div>

                    {/* TEXT */}

                    <div className="min-w-0">
                      <h3
                        className="
                          text-[16px]
                          font-medium
                          leading-tight
                          tracking-[-0.025em]
                          text-white

                          sm:text-xl
                        "
                      >
                        {step.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[560px]
                          text-[12px]
                          leading-5
                          text-cyan-50/42

                          sm:mt-3
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

        {/* FEATURE TIMELINE */}

        <div className="mt-9 sm:mt-16">
          <FeatureTimeline />
        </div>

        {/* FINAL STATEMENT */}

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
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease,
          }}
          className="
            mt-14
            border-t
            border-cyan-100/[0.08]
            pt-7

            sm:mt-24
            sm:pt-8
            sm:flex
            sm:items-end
            sm:justify-between
          "
        >
          <p
            className="
              max-w-[700px]
              text-[1.65rem]
              font-light
              leading-[1.05]
              tracking-[-0.04em]
              text-white/80

              sm:text-3xl

              md:text-4xl
            "
          >
            {t.features.finalStatement}
          </p>

          <div
            className="
              mt-5
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-100/25

              sm:mt-0
              sm:text-[8px]
            "
          >
            MIMISU / 2026
          </div>
        </motion.div>
      </div>

      {/* BOTTOM TRANSITION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-28
          bg-gradient-to-b
          from-transparent
          to-[#031A22]

          sm:h-40
        "
      />
    </section>
  );
}