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
        py-32
        text-white

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
          h-[180px]
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
          top-[-100px]
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.045]
          blur-[120px]

          max-md:h-[360px]
          max-md:w-[360px]
          max-md:blur-[80px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[30%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-teal-400/[0.025]
          blur-[100px]

          max-md:h-[280px]
          max-md:w-[280px]
          max-md:blur-[70px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[8%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-500/[0.02]
          blur-[100px]

          max-md:h-[260px]
          max-md:w-[260px]
          max-md:blur-[70px]
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
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-200/40
          shadow-[0_0_12px_rgba(103,232,249,.35)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[30%]
          h-2
          w-2
          rounded-full
          border
          border-cyan-200/20
          bg-cyan-200/[0.05]
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
          px-6

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
                  y: 25,
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
            mb-20
            max-w-4xl
            text-center

            lg:mb-24
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-4
              text-[9px]
              font-medium
              uppercase
              tracking-[0.4em]
              text-cyan-200/70
            "
          >
            <span className="h-px w-10 bg-cyan-200/30" />

            CAMPAIGN ESTIMATOR

            <span className="h-px w-10 bg-cyan-200/30" />
          </div>

          <h2
            className="
              mt-7
              text-[clamp(2.8rem,6vw,5.8rem)]
              font-light
              leading-[0.95]
              tracking-[-0.055em]
              text-white
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
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-white/45

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
            gap-8

            lg:grid-cols-2
            lg:gap-10
          "
        >
          {/* CONFIG */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
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
            className="relative"
          >
            <div
              className="
                pointer-events-none
                absolute
                -left-px
                top-8
                h-28
                w-px
                bg-gradient-to-b
                from-cyan-300/60
                via-cyan-300/20
                to-transparent
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-cyan-100/[0.10]
                bg-[#062730]/90
                p-6
                shadow-[0_30px_80px_rgba(0,20,25,.15)]

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
                  inset-x-8
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-200/25
                  to-transparent
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

          {/* RESULT */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
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
            className="relative"
          >
            <div
              className="
                pointer-events-none
                absolute
                inset-8
                rounded-full
                bg-cyan-300/[0.025]
                blur-[70px]
              "
            />

            <div
              className="
                relative
                h-full
                overflow-hidden
                rounded-3xl
                border
                border-cyan-200/[0.14]
                bg-gradient-to-br
                from-[#08333D]
                via-[#062730]
                to-[#041D24]
                p-6
                shadow-[0_30px_100px_rgba(0,30,35,.2)]

                md:p-8
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute
                  left-8
                  right-8
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-200/45
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  right-[-80px]
                  top-[-80px]
                  h-[240px]
                  w-[240px]
                  rounded-full
                  bg-cyan-300/[0.025]
                  blur-[60px]
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
            mt-10
            flex
            items-center
            justify-center
            gap-3
            text-[9px]
            uppercase
            tracking-[0.22em]
            text-cyan-100/25
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-300/60
              shadow-[0_0_8px_rgba(34,211,238,.45)]
            "
          />

          Расчёт обновляется в реальном времени
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
          h-[180px]
          bg-gradient-to-t
          from-[#03171D]
          via-[#041E25]/70
          to-transparent
        "
      />
    </section>
  );
}