import { motion } from "framer-motion";
import {
  QrCode,
  BarChart3,
  MapPinned,
  Eye,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const content = {
  ru: {
    cards: [
      {
        icon: QrCode,
        title: "QR-кампания",
        value: "12 458",
        label: "СКАНИРОВАНИЙ",
        progress: 78,
      },
      {
        icon: Eye,
        title: "Охват",
        value: "20К",
        label: "ПОКАЗОВ",
        progress: 91,
      },
      {
        icon: BarChart3,
        title: "CTR",
        value: "7.82%",
        label: "В РЕАЛЬНОМ ВРЕМЕНИ",
        progress: 64,
      },
      {
        icon: MapPinned,
        title: "Покрытие",
        value: "24",
        label: "ГОРОДА",
        progress: 82,
      },
    ],

    live: "LIVE",
  },

  kz: {
    cards: [
      {
        icon: QrCode,
        title: "QR науқаны",
        value: "12 458",
        label: "СКАНЕРЛЕУ",
        progress: 78,
      },
      {
        icon: Eye,
        title: "Қамту",
        value: "20К",
        label: "КӨРСЕТІЛІМ",
        progress: 91,
      },
      {
        icon: BarChart3,
        title: "CTR",
        value: "7.82%",
        label: "НАҚТЫ УАҚЫТТА",
        progress: 64,
      },
      {
        icon: MapPinned,
        title: "Қамту аймағы",
        value: "24",
        label: "ҚАЛА",
        progress: 82,
      },
    ],

    live: "LIVE",
  },
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroFeed() {
  const { language } = useLanguage();

  const { cards, live } = content[language];

  return (
    <div
      className="
        relative
        h-full
        overflow-hidden
        rounded-[28px]
        border
        border-white/60
        bg-white/20
        shadow-[0_30px_90px_rgba(7,59,76,.06)]
        sm:rounded-[36px]
      "
    >
      {/* =====================================================
          WATER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[380px]
          w-[380px]
          rounded-full
          bg-cyan-300/15
          blur-[100px]
        "
      />

      {/* =====================================================
          REFLECTION
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-[20%]
          top-[25%]
          h-[220px]
          w-[140%]
          rounded-[50%]
          border
          border-white/30
          will-change-transform
        "
        animate={{
          x: ["-2%", "2%", "-2%"],
          scaleY: [0.8, 1, 0.8],
          opacity: [0.12, 0.24, 0.12],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          TOP FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-20
          h-20
          bg-gradient-to-b
          from-[#dff8f8]
          via-[#dff8f8]/50
          to-transparent
        "
      />

      {/* =====================================================
          CARDS
      ===================================================== */}

      <div
        className="
          relative
          z-10
          flex
          flex-col
          gap-3
          p-3

          sm:gap-4
          sm:p-5

          lg:gap-5
          lg:p-7
        "
      >
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={`${language}-${card.title}`}
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: 0.2 + index * 0.08,
                ease,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-white/70
                bg-white/55
                p-4

                shadow-[0_12px_35px_rgba(7,59,76,.055)]

                transition-transform
                duration-200
                ease-out

                hover:-translate-y-1

                sm:rounded-[24px]
                sm:p-5

                ${
                  index === 3
                    ? "hidden sm:block"
                    : ""
                }
              `}
              style={{
                transform: "translateZ(0)",
              }}
            >
              {/* =================================================
                  SHINE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-white
                  to-transparent
                "
              />

              {/* =================================================
                  STATIC GLOW
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-300/10
                  blur-3xl
                "
              />

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative z-10">
                {/* HEADER */}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-white/70
                        bg-cyan-500/10
                        text-[#087f91]

                        sm:h-11
                        sm:w-11
                        sm:rounded-2xl
                      "
                    >
                      <Icon
                        size={18}
                        className="sm:h-5 sm:w-5"
                      />
                    </div>

                    <div>
                      <p
                        className="
                          text-[7px]
                          font-semibold
                          uppercase
                          tracking-[0.25em]
                          text-[#0e7490]/50

                          sm:text-[9px]
                          sm:tracking-[0.28em]
                        "
                      >
                        {card.label}
                      </p>

                      <h3
                        className="
                          mt-1
                          text-[14px]
                          font-bold
                          tracking-tight
                          text-[#073b4c]

                          sm:text-[17px]
                        "
                      >
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* LIVE */}

                  <div className="flex items-center gap-1.5">
                    <span
                      className="
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#0e7490]/40

                        sm:text-[8px]
                      "
                    >
                      {live}
                    </span>

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#0ea5a8]
                        shadow-[0_0_10px_rgba(14,165,168,.4)]

                        sm:h-2
                        sm:w-2
                      "
                    />
                  </div>
                </div>

                {/* VALUE */}

                <div className="mt-4 flex items-end justify-between sm:mt-6">
                  <span
                    className="
                      text-[clamp(1.6rem,6vw,2.4rem)]
                      font-black
                      leading-none
                      tracking-[-0.04em]
                      text-[#073b4c]

                      sm:text-[clamp(2rem,3vw,3rem)]
                    "
                  >
                    {card.value}
                  </span>

                  <span
                    className="
                      mb-1
                      text-[8px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#0e7490]/40
                    "
                  >
                    {card.progress}%
                  </span>
                </div>

                {/* PROGRESS */}

                <div
                  className="
                    mt-4
                    h-[3px]
                    overflow-hidden
                    rounded-full
                    bg-[#073b4c]/[0.07]

                    sm:mt-5
                  "
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.5 + index * 0.1,
                      ease,
                    }}
                    style={{
                      width: `${card.progress}%`,
                      transformOrigin: "left",
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#0ea5a8]
                      to-[#38bdf8]
                      will-change-transform
                    "
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* =====================================================
          BOTTOM REFLECTION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-30
          h-16
          bg-gradient-to-t
          from-[#dff8f8]/80
          to-transparent
        "
      />
    </div>
  );
}