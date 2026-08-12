import { motion, useReducedMotion } from "framer-motion";

import type { CampaignResult } from "./types";
import { formatPrice } from "./utils";
import { useLanguage } from "../../context/LanguageContext";

interface Props {
  result: CampaignResult;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function CalculatorResult({
  result,
}: Props) {
  const reduceMotion = useReducedMotion();
  const { t, language } = useLanguage();

  const stats = [
    {
      label: t.calculator.bottleCost,
      value: formatPrice(result.bottlePrice),
    },
    {
      label: t.calculator.designCost,
      value: formatPrice(result.designPrice),
    },
    {
      label: t.calculator.distributionCost,
      value: formatPrice(result.distributionPrice),
    },
    {
      label: t.calculator.advertiserCost,
      value: formatPrice(result.advertiserBudget),
      accent: true,
    },
  ];

  const handleWhatsApp = () => {
    const phone = "77064111040";

    const message =
      t.calculator.whatsappMessage;

    const whatsappUrl =
      `https://wa.me/${phone}?text=${encodeURIComponent(
        message
      )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/[0.08]
        bg-white/[0.025]
        p-7

        md:p-9

        transition-[border-color]
        duration-300

        hover:border-white/[0.12]
      "
    >
      {/* =========================================
          AMBIENT GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-64
          w-64
          rounded-full
          bg-cyan-400/[0.04]
          blur-[60px]

          max-md:h-48
          max-md:w-48
          max-md:blur-[45px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-24
          h-64
          w-64
          rounded-full
          bg-[#E3C14B]/[0.02]
          blur-[70px]

          max-md:h-48
          max-md:w-48
          max-md:blur-[50px]
        "
      />

      {/* TOP SHINE */}

      <div
        className="
          pointer-events-none
          absolute
          left-10
          right-10
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/25
          to-transparent
        "
      />

      <div className="relative z-10">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="flex items-center justify-between">
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-cyan-300/70
            "
          >
            {t.calculator.summary}
          </span>

          <span
            className="
              flex
              items-center
              gap-2
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-white/25
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_7px_rgba(103,232,249,.5)]
              "
            />

            {t.calculator.liveEstimate}
          </span>
        </div>

        {/* =========================================
            MAIN PRICE
        ========================================= */}

        <div className="mt-10">
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/25
            "
          >
            {t.calculator.participationCost}
          </p>

          <div
            className="
              mt-3
              min-h-[72px]
              overflow-hidden
            "
          >
            <motion.div
              key={result.advertiserBudget}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0.4,
                      y: 10,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
                ease,
              }}
              className="
                text-5xl
                font-light
                tracking-[-0.05em]
                text-white

                md:text-6xl
              "
            >
              {formatPrice(
                result.advertiserBudget
              )}
            </motion.div>
          </div>

          <p
            className="
              mt-3
              max-w-sm
              text-sm
              leading-6
              text-white/30
            "
          >
            {t.calculator.participationDescription}
          </p>
        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <div
          className="
            my-8
            h-px
            bg-white/[0.07]
          "
        />

        {/* =========================================
            STATS
        ========================================= */}

        <div className="space-y-2">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 8,
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.03,
                ease,
              }}
              className={`
                flex
                items-center
                justify-between
                gap-5
                overflow-hidden
                rounded-xl
                border
                px-5
                py-4

                transition-[border-color,background-color]
                duration-200

                ${
                  item.accent
                    ? `
                      border-cyan-300/[0.14]
                      bg-cyan-300/[0.035]
                    `
                    : `
                      border-white/[0.05]
                      bg-white/[0.012]

                      hover:border-white/[0.1]
                      hover:bg-white/[0.025]
                    `
                }
              `}
            >
              <span
                className={`
                  text-sm

                  ${
                    item.accent
                      ? "text-white/60"
                      : "text-white/30"
                  }
                `}
              >
                {item.label}
              </span>

              <span
                className={`
                  shrink-0
                  text-sm
                  font-medium

                  ${
                    item.accent
                      ? "text-cyan-200"
                      : "text-white/75"
                  }
                `}
              >
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            CTA
        ========================================= */}

        <motion.button
          type="button"
          onClick={handleWhatsApp}
          whileHover={
            reduceMotion
              ? undefined
              : {
                  y: -2,
                }
          }
          whileTap={
            reduceMotion
              ? undefined
              : {
                  scale: 0.985,
                }
          }
          transition={{
            duration: 0.15,
            ease,
          }}
          className="
            group/btn
            relative
            mt-8
            w-full
            overflow-hidden
            rounded-xl
            border
            border-cyan-200/20
            bg-cyan-300
            py-4
            text-sm
            font-medium
            text-black

            transition-[background-color,box-shadow]
            duration-200

            hover:bg-cyan-200
            hover:shadow-[0_15px_35px_rgba(103,232,249,.12)]
          "
        >
          <span className="relative z-10">
            {t.calculator.commercialOffer}
          </span>

          <span
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              hidden
              w-20
              skew-x-[-20deg]
              bg-white/30
              blur-md

              lg:block
              lg:-translate-x-[130%]
              lg:transition-transform
              lg:duration-700
              lg:group-hover/btn:translate-x-[500%]
            "
          />
        </motion.button>

        {/* =========================================
            FOOTER
        ========================================= */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-center
            gap-2
            text-center
            text-[9px]
            uppercase
            tracking-[0.18em]
            text-white/15
          "
        >
          <span
            className="
              h-1
              w-1
              rounded-full
              bg-white/20
            "
          />

          {language === "ru"
            ? t.calculator.preliminary
            : t.calculator.preliminary}
        </div>
      </div>
    </div>
  );
}