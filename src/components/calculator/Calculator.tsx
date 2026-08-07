import { useMemo, useState } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";
import type { AdvertiserCount } from "./types";
import CalculatorConfig from "./CalculatorConfig";
import CalculatorResult from "./CalculatorResult";

import { calculateCampaign } from "./utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Calculator() {
  const reduceMotion = useReducedMotion();

  // ----------------------------------
  // State
  // ----------------------------------

  const [advertisers, setAdvertisers] =
  useState<AdvertiserCount>(4);

  const [quantity, setQuantity] =
    useState(3000);

  const [includeDesign, setIncludeDesign] =
    useState(false);

  const [includeDistribution, setIncludeDistribution] =
    useState(false);

  // ----------------------------------
  // Calculate
  // ----------------------------------

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

  // ----------------------------------
  // Render
  // ----------------------------------

  return (
    <section
      id="calculator"
      className="
        relative
        overflow-hidden
        bg-[#040404]
        py-32
        text-white

        md:py-40
        lg:py-48
      "
    >
      {/* =========================================
          AMBIENT LIGHT
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: false,
          amount: 0.15,
        }}
        transition={{
          duration: 1.5,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#E3C14B]/[0.055]
          blur-[220px]
        "
      />

      {/* Secondary light */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[250px]
          top-[35%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/[0.025]
          blur-[180px]
        "
      />

      {/* =========================================
          GRID
      ========================================= */}

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
              rgba(255,255,255,.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* =========================================
          CONTAINER
      ========================================= */}

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
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            filter: "blur(8px)",
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
            duration: 0.9,
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
          {/* Label */}

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
              text-[#E3C14B]/70
            "
          >
            <span className="h-px w-8 bg-[#E3C14B]/40" />

            CAMPAIGN ESTIMATOR

            <span className="h-px w-8 bg-[#E3C14B]/40" />
          </div>

          {/* Heading */}

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
            <span className="text-white/35">
              вашей кампании
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-sm
              leading-7
              text-white/35

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

        {/* =========================================
            CALCULATOR GRID
        ========================================= */}

        <div
          className="
            grid
            gap-8

            lg:grid-cols-2
            lg:gap-10
          "
        >
          {/* =======================================
              CONFIG
          ======================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="relative"
          >
            {/* Accent */}

            <div
              className="
                pointer-events-none
                absolute
                -left-px
                top-8
                h-24
                w-px
                bg-gradient-to-b
                from-[#E3C14B]/80
                to-transparent
              "
            />

            <div
              className="
                rounded-3xl
                border
                border-white/[0.07]
                bg-white/[0.015]
                p-6
                backdrop-blur-sm

                md:p-8

                transition-colors
                duration-500
                hover:border-white/[0.11]
              "
            >
              <CalculatorConfig
                advertisers={advertisers}
                quantity={quantity}
                includeDesign={includeDesign}
                includeDistribution={includeDistribution}
                onAdvertiserChange={setAdvertisers}
                onQuantityChange={setQuantity}
                onDesignChange={setIncludeDesign}
                onDistributionChange={
                  setIncludeDistribution
                }
              />
            </div>
          </motion.div>

          {/* =======================================
              RESULT
          ======================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease,
            }}
            className="relative"
          >
            {/* Result glow */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.04, 1],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-10
                rounded-full
                bg-[#E3C14B]/[0.035]
                blur-[100px]
              "
            />

            <div
              className="
                relative
                h-full
                rounded-3xl
                border
                border-[#E3C14B]/[0.12]
                bg-gradient-to-br
                from-[#E3C14B]/[0.035]
                via-white/[0.012]
                to-transparent
                p-6
                shadow-[0_0_80px_rgba(227,193,75,0.025)]

                md:p-8
              "
            >
              {/* Top line */}

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
                  via-[#E3C14B]/40
                  to-transparent
                "
              />

              <CalculatorResult
                result={result}
              />
            </div>
          </motion.div>
        </div>

        {/* =========================================
            FOOT NOTE
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
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
            text-white/20
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#E3C14B]/60
              shadow-[0_0_10px_rgba(227,193,75,.5)]
            "
          />

          Расчёт обновляется в реальном времени
        </motion.div>
      </div>
    </section>
  );
}
