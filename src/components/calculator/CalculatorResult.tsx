
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import type { CampaignResult } from "./types";
import { formatPrice } from "./utils";

interface Props {
  result: CampaignResult;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function CalculatorResult({
  result,
}: Props) {
  const reduceMotion = useReducedMotion();

  const stats = [
    {
      label: "Стоимость бутылок",
      value: formatPrice(result.bottlePrice),
    },
    {
      label: "Дизайн",
      value: formatPrice(result.designPrice),
    },
    {
      label: "Раздача",
      value: formatPrice(result.distributionPrice),
    },
    {
      label: "Стоимость для рекламодателя",
      value: formatPrice(result.advertiserBudget),
      accent: true,
    },
  ];

  const handleWhatsApp = () => {
    const phone = "77064111040";

    const message =
      "Здравствуйте! Хочу получить коммерческое предложение по размещению рекламы.";

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
    <motion.div
      className="
        group
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
          -right-32
          -top-32
          h-80
          w-80
          rounded-full
          bg-cyan-400/[0.06]
          blur-[80px]

          max-md:h-56
          max-md:w-56
          max-md:blur-[55px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          h-80
          w-80
          rounded-full
          bg-[#E3C14B]/[0.025]
          blur-[90px]

          max-md:h-56
          max-md:w-56
          max-md:blur-[60px]
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
          via-cyan-300/30
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
            Campaign summary
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
                shadow-[0_0_8px_rgba(103,232,249,.65)]
              "
            />

            Live estimate
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
            Стоимость участия
          </p>

          <div
            className="
              relative
              mt-3
              min-h-[72px]
              overflow-hidden
            "
          >
            <AnimatePresence
              mode="popLayout"
              initial={false}
            >
              <motion.div
                key={result.advertiserBudget}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: reduceMotion ? 0 : -14,
                }}
                transition={{
                  duration: 0.3,
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
            </AnimatePresence>
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
            Стоимость участия одного рекламодателя
            в выбранной конфигурации.
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
                      x: 12,
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
                duration: 0.4,
                delay: index * 0.04,
                ease,
              }}
              className={`
                relative
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

              <AnimatePresence
                mode="popLayout"
                initial={false}
              >
                <motion.span
                  key={item.value}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: reduceMotion ? 0 : -6,
                  }}
                  transition={{
                    duration: 0.2,
                    ease,
                  }}
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
                </motion.span>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* =========================================
            CTA — WHATSAPP
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
            duration: 0.2,
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
            hover:shadow-[0_15px_40px_rgba(103,232,249,.15)]
          "
        >
          <span className="relative z-10">
            Получить коммерческое предложение
          </span>

          {/* Shine только для desktop */}

          <span
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              hidden
              w-20
              skew-x-[-20deg]
              bg-white/40
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

          Расчёт является предварительным
        </div>

      </div>
    </motion.div>
  );
}
