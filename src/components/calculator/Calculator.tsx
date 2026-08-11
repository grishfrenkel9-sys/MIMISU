import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import type { AdvertiserCount } from "./types";
import CalculatorConfig from "./CalculatorConfig";
import CalculatorResult from "./CalculatorResult";
import { calculateCampaign } from "./utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Calculator() {
  const reduceMotion = useReducedMotion();

  const [advertisers, setAdvertisers] =
    useState<AdvertiserCount>(4);

  const [quantity, setQuantity] = useState(3000);

  const [includeDesign, setIncludeDesign] =
    useState(false);

  const [includeDistribution, setIncludeDistribution] =
    useState(false);

  const result = useMemo(
    () =>
      calculateCampaign(
        advertisers,
        quantity,
        includeDesign,
        includeDistribution
      ),
    [
      advertisers,
      quantity,
      includeDesign,
      includeDistribution,
    ]
  );

  return (
    <section
      id="calculator"
      className="
        relative
        overflow-hidden
        bg-[#041E25]
        py-20
        text-white

        sm:py-28

        md:py-40

        lg:py-48
      "
    >
      {/* =====================================================
          TOP TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[140px]

          sm:h-[180px]

          bg-gradient-to-b
          from-[#052830]
          via-[#04242C]
          to-[#041E25]
        "
      />

      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-80px]
          h-[300px]
          w-[300px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.045]
          blur-[70px]

          sm:top-[-100px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[100px]

          lg:h-[520px]
          lg:w-[520px]
          lg:blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[120px]
          top-[30%]
          h-[240px]
          w-[240px]
          rounded-full
          bg-teal-400/[0.025]
          blur-[70px]

          sm:-right-[180px]
          sm:h-[420px]
          sm:w-[420px]
          sm:blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[120px]
          bottom-[8%]
          h-[240px]
          w-[240px]
          rounded-full
          bg-cyan-500/[0.02]
          blur-[70px]

          sm:-left-[180px]
          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[100px]
        "
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.02]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(130,230,235,.10) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(130,230,235,.10) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "100px 100px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* =====================================================
          HORIZONTAL LINES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[20%]
          h-px
          w-[42%]
          bg-gradient-to-r
          from-transparent
          via-cyan-200/[0.08]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-[65%]
          h-px
          w-[38%]
          bg-gradient-to-l
          from-transparent
          via-cyan-200/[0.06]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-[18%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-200/[0.04]
          to-transparent
        "
      />

      {/* =====================================================
          MICRO DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[9%]
          top-[22%]
          h-1
          w-1
          rounded-full
          bg-cyan-200/40
          shadow-[0_0_10px_rgba(103,232,249,.35)]

          sm:h-1.5
          sm:w-1.5
          sm:shadow-[0_0_12px_rgba(103,232,249,.35)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[30%]
          h-1.5
          w-1.5
          rounded-full
          border
          border-cyan-200/20
          bg-cyan-200/[0.05]

          sm:h-2
          sm:w-2
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[17%]
          bottom-[22%]
          h-1
          w-1
          rounded-full
          bg-cyan-200/25
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
          max-w-[1350px]
          px-4

          sm:px-7

          md:px-10

          xl:px-14
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
                  y: 20,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            mx-auto
            mb-12
            max-w-4xl
            text-center

            sm:mb-16

            lg:mb-24
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              text-[8px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-cyan-200/70

              sm:gap-4
              sm:text-[9px]
              sm:tracking-[0.4em]
            "
          >
            <span className="h-px w-6 bg-cyan-200/30 sm:w-10" />

            <span>CAMPAIGN ESTIMATOR</span>

            <span className="h-px w-6 bg-cyan-200/30 sm:w-10" />
          </div>

          <h2
            className="
              mt-5
              text-[clamp(2.35rem,10vw,5.8rem)]
              font-light
              leading-[0.94]
              tracking-[-0.06em]
              text-white

              sm:mt-7
              sm:text-[clamp(2.8rem,6vw,5.8rem)]
              sm:tracking-[-0.055em]
            "
          >
            Рассчитайте стоимость
            <br />

            <span className="text-cyan-100/45">
              вашей кампании
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[340px]
              text-[12px]
              leading-6
              text-white/45

              sm:mt-7
              sm:max-w-2xl
              sm:text-sm
              sm:leading-7

              md:text-base
              md:leading-8
            "
          >
            Настройте параметры размещения
            и получите мгновенный прогноз
            стоимости, охвата и эффективности
            рекламной кампании.
          </p>
        </motion.div>

        {/* =================================================
            CALCULATOR
        ================================================= */}

        <div
          className="
            grid
            min-w-0
            gap-5

            sm:gap-8

            lg:grid-cols-2
            lg:gap-10
          "
        >
          {/* =================================================
              CONFIG
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -25,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              ease,
            }}
            className="
              relative
              min-w-0
              w-full
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                -left-px
                top-6
                h-24
                w-px
                bg-gradient-to-b
                from-cyan-300/60
                via-cyan-300/20
                to-transparent

                sm:top-8
                sm:h-28
              "
            />

            <div
              className="
                relative
                min-w-0
                w-full
                overflow-hidden
                rounded-[1.5rem]
                border
                border-cyan-100/[0.10]
                bg-[#062730]/90
                p-4
                shadow-[0_25px_70px_rgba(0,20,25,.15)]

                sm:rounded-3xl
                sm:p-6

                md:p-8

                transition-[border-color,background-color]
                duration-300

                hover:border-cyan-200/[0.16]
                hover:bg-[#07303A]
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-5
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-200/25
                  to-transparent

                  sm:inset-x-8
                "
              />

              <CalculatorConfig
                advertisers={advertisers}
                quantity={quantity}
                includeDesign={includeDesign}
                includeDistribution={
                  includeDistribution
                }
                onAdvertiserChange={
                  setAdvertisers
                }
                onQuantityChange={
                  setQuantity
                }
                onDesignChange={
                  setIncludeDesign
                }
                onDistributionChange={
                  setIncludeDistribution
                }
              />
            </div>
          </motion.div>

          {/* =================================================
              RESULT
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 25,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              delay: 0.06,
              ease,
            }}
            className="
              relative
              min-w-0
              w-full
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-6
                rounded-full
                bg-cyan-300/[0.025]
                blur-[60px]

                sm:inset-8
                sm:blur-[70px]
              "
            />

            <div
              className="
                relative
                min-h-[360px]
                w-full
                overflow-hidden
                rounded-[1.5rem]
                border
                border-cyan-200/[0.14]
                bg-gradient-to-br
                from-[#08333D]
                via-[#062730]
                to-[#041D24]
                p-4
                shadow-[0_25px_80px_rgba(0,30,35,.2)]

                sm:min-h-[420px]
                sm:rounded-3xl
                sm:p-6

                md:min-h-0
                md:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-5
                  right-5
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-200/45
                  to-transparent

                  sm:left-8
                  sm:right-8
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-60px]
                  top-[-60px]
                  h-[180px]
                  w-[180px]
                  rounded-full
                  bg-cyan-300/[0.025]
                  blur-[50px]

                  sm:right-[-80px]
                  sm:top-[-80px]
                  sm:h-[240px]
                  sm:w-[240px]
                  sm:blur-[60px]
                "
              />

              <CalculatorResult result={result} />
            </div>
          </motion.div>
        </div>

        {/* =================================================
            NOTE
        ================================================= */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-2
            text-center
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-cyan-100/25

            sm:mt-10
            sm:gap-3
            sm:text-[9px]
            sm:tracking-[0.22em]
          "
        >
          <span
            className="
              h-1
              w-1
              shrink-0
              rounded-full
              bg-cyan-300/60
              shadow-[0_0_7px_rgba(34,211,238,.45)]

              sm:h-1.5
              sm:w-1.5
              sm:shadow-[0_0_8px_rgba(34,211,238,.45)]
            "
          />

          <span>
            Расчёт обновляется в реальном времени
          </span>
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
          z-20
          h-[120px]
          bg-gradient-to-t
          from-[#03171D]
          via-[#041E25]/70
          to-transparent

          sm:h-[180px]
        "
      />
    </section>
  );
}