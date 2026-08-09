import { motion } from "framer-motion";
import {
  QrCode,
  BarChart3,
  MapPinned,
  Eye,
  Sparkles,
} from "lucide-react";

const cards = [
  {
    icon: QrCode,
    title: "QR Campaign",
    value: "12 458",
    label: "SCANS",
    progress: 78,
  },
  {
    icon: Eye,
    title: "Reach",
    value: "1.84M",
    label: "IMPRESSIONS",
    progress: 91,
  },
  {
    icon: BarChart3,
    title: "CTR",
    value: "7.82%",
    label: "LIVE",
    progress: 64,
  },
  {
    icon: MapPinned,
    title: "Coverage",
    value: "24",
    label: "CITIES",
    progress: 82,
  },
  {
    icon: Sparkles,
    title: "AI",
    value: "98%",
    label: "OPTIMIZATION",
    progress: 96,
  },
];

export default function HeroFeed() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[42px]">

      {/* Water glass surface */}
      <div className="absolute inset-0 bg-white/20" />

      {/* Soft water glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-300/20
          blur-[100px]
        "
      />

      {/* Water reflection */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -left-[20%]
          top-[25%]
          h-[240px]
          w-[140%]
          rounded-[50%]
          border
          border-white/40
        "
        animate={{
          x: ["-2%", "2%", "-2%"],
          scaleY: [0.8, 1, 0.8],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-20
          h-28
          bg-gradient-to-b
          from-[#dff8f8]
          via-[#dff8f8]/50
          to-transparent
        "
      />

      {/* Bottom fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-28
          bg-gradient-to-t
          from-[#dff8f8]
          via-[#dff8f8]/50
          to-transparent
        "
      />

      {/* Cards */}
      <div className="relative z-10 flex flex-col gap-4 p-5 lg:gap-5 lg:p-7">
        {cards.slice(0, 4).map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
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
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -3,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                border
                border-white/70
                bg-white/55
                p-5
                shadow-[0_18px_50px_rgba(7,59,76,.08)]
                backdrop-blur-[10px]
              "
            >
              {/* Glass shine */}
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

              {/* Water glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-32
                  w-32
                  rounded-full
                  bg-cyan-300/20
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-80
                "
              />

              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/70
                        bg-cyan-500/10
                        text-[#087f91]
                      "
                    >
                      <Icon size={20} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[9px]
                          font-semibold
                          uppercase
                          tracking-[0.28em]
                          text-[#0e7490]/50
                        "
                      >
                        {card.label}
                      </p>

                      <h3
                        className="
                          mt-1
                          text-[17px]
                          font-bold
                          tracking-tight
                          text-[#073b4c]
                        "
                      >
                        {card.title}
                      </h3>
                    </div>

                  </div>

                  {/* Live indicator */}
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#0e7490]/40">
                      LIVE
                    </span>

                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#0ea5a8]
                        shadow-[0_0_12px_rgba(14,165,168,.55)]
                      "
                    />
                  </div>

                </div>

                {/* Value */}
                <div className="mt-6 flex items-end justify-between">

                  <span
                    className="
                      text-[clamp(2rem,3vw,3rem)]
                      font-black
                      leading-none
                      tracking-[-0.04em]
                      text-[#073b4c]
                    "
                  >
                    {card.value}
                  </span>

                  <span
                    className="
                      mb-1
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#0e7490]/40
                    "
                  >
                    {card.progress}%
                  </span>

                </div>

                {/* Progress */}
                <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-[#073b4c]/[0.07]">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${card.progress}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.5 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#0ea5a8]
                      to-[#38bdf8]
                    "
                  />

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom glass reflection */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          z-30
          h-20
          bg-gradient-to-t
          from-[#dff8f8]/80
          to-transparent
        "
      />

    </div>
  );
}