import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { useLanguage } from "../../context/LanguageContext";

import type { AdvertiserCount } from "./types";
import CalculatorConfig from "./CalculatorConfig";
import CalculatorResult from "./CalculatorResult";
import { calculateCampaign } from "./utils";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Calculator() {
  const reduceMotion = useReducedMotion();
  const { t } = useLanguage();

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
        py-14
        text-white

        xs:py-16
        sm:py-28
        md:py-40
        lg:py-48
      "
    >
      {/* TOP TRANSITION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[90px]

          xs:h-[110px]
          sm:h-[180px]

          bg-gradient-to-b
          from-[#052830]
          via-[#04242C]
          to-[#041E25]
        "
      />

      {/* AMBIENT LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-60px]
          h-[220px]
          w-[220px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.045]
          blur-[55px]

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
          -right-[100px]
          top-[32%]
          h-[180px]
          w-[180px]
          rounded-full
          bg-teal-400/[0.025]
          blur-[55px]

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
          -left-[100px]
          bottom-[8%]
          h-[180px]
          w-[180px]
          rounded-full
          bg-cyan-500/[0.02]
          blur-[55px]

          sm:-left-[180px]
          sm:h-[380px]
          sm:w-[380px]
          sm:blur-[100px]
        "
      />

      {/* GRID */}

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
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* HORIZONTAL LINES */}

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

      {/* MICRO DETAILS */}

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

      {/* CONTENT */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1350px]
          px-4

          xs:px-5
          sm:px-7
          md:px-10
          xl:px-14
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
            mb-9
            max-w-4xl
            text-center

            xs:mb-11
            sm:mb-16
            lg:mb-24
          "
        >
          <div
            className="
              flex
              items-center
              justify-center
              gap-2.5
              text-[7px]
              font-medium
              uppercase
              tracking-[0.26em]
              text-cyan-200/70

              xs:gap-3
              sm:gap-4
              sm:text-[9px]
              sm:tracking-[0.4em]
            "
          >
            <span className="h-px w-5 bg-cyan-200/30 sm:w-10" />

            <span>{t.calculator.label}</span>

            <span className="h-px w-5 bg-cyan-200/30 sm:w-10" />
          </div>

          <h2
            className="
              mt-4
              text-[clamp(2.15rem,11vw,3.8rem)]
              font-light
              leading-[0.96]
              tracking-[-0.065em]
              text-white

              xs:mt-5
              sm:mt-7
              sm:text-[clamp(2.8rem,6vw,5.8rem)]
              sm:tracking-[-0.055em]
            "
          >
            {t.calculator.title}
            <br />

            <span className="text-cyan-100/45">
              {t.calculator.titleAccent}
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-[310px]
              text-[11px]
              leading-5
              text-white/45

              xs:mt-5
              xs:max-w-[330px]
              sm:mt-7
              sm:max-w-2xl
              sm:text-sm
              sm:leading-7

              md:text-base
              md:leading-8
            "
          >
            {t.calculator.description}
          </p>
        </motion.div>

        {/* CALCULATOR */}

        <div
          className="
            grid
            min-w-0
            gap-4

            xs:gap-5
            sm:gap-8

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
                top-5
                h-20
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
                rounded-[1.25rem]
                border
                border-cyan-100/[0.10]
                bg-[#062730]/90
                p-3.5
                shadow-[0_25px_70px_rgba(0,20,25,.15)]

                xs:rounded-[1.4rem]
                xs:p-4

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

          {/* RESULT */}

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
                inset-5
                rounded-full
                bg-cyan-300/[0.025]
                blur-[50px]

                sm:inset-8
                sm:blur-[70px]
              "
            />

            <div
              className="
                relative
                min-h-[320px]
                w-full
                overflow-hidden
                rounded-[1.25rem]
                border
                border-cyan-200/[0.14]
                bg-gradient-to-br
                from-[#08333D]
                via-[#062730]
                to-[#041D24]
                p-3.5
                shadow-[0_25px_80px_rgba(0,30,35,.2)]

                xs:min-h-[340px]
                xs:p-4

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
                  right-[-50px]
                  top-[-50px]
                  h-[150px]
                  w-[150px]
                  rounded-full
                  bg-cyan-300/[0.025]
                  blur-[45px]

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

        {/* NOTE */}

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
            mt-5
            flex
            items-center
            justify-center
            gap-1.5
            text-center
            text-[7px]
            uppercase
            tracking-[0.14em]
            text-cyan-100/25

            xs:mt-6
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
            "
          />

          <span>
            {t.calculator.updated}
          </span>
        </motion.div>
      </div>

      {/* BOTTOM TRANSITION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[90px]
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
