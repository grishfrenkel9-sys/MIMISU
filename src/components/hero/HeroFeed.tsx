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
  },
  {
    icon: Eye,
    title: "Reach",
    value: "1.84M",
    label: "IMPRESSIONS",
  },
  {
    icon: BarChart3,
    title: "CTR",
    value: "7.82%",
    label: "LIVE",
  },
  {
    icon: MapPinned,
    title: "Coverage",
    value: "24",
    label: "CITIES",
  },
  {
    icon: Sparkles,
    title: "AI",
    value: "98%",
    label: "OPTIMIZATION",
  },
];

export default function HeroFeed() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[42px]">

      {/* Fade Top */}
      <div className="absolute inset-x-0 top-0 z-30 h-36 bg-gradient-to-b from-black via-black/70 to-transparent" />

      {/* Fade Bottom */}
      <div className="absolute inset-x-0 bottom-0 z-30 h-36 bg-gradient-to-t from-black via-black/70 to-transparent" />

      <motion.div
        animate={{
          y: ["0%", "-50%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6"
      >
        {[...cards, ...cards, ...cards].map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="
                relative

                overflow-hidden

                rounded-[28px]

                border
                border-white/10

                bg-white/[0.03]

                backdrop-blur-xl

                p-7
              "
            >
              {/* glow */}

              <div
                className="
                  absolute

                  right-[-40px]
                  top-[-40px]

                  h-36
                  w-36

                  rounded-full

                  bg-cyan-400/10

                  blur-[70px]
                "
              />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center

                        rounded-2xl

                        bg-cyan-400/10

                        text-cyan-300
                      "
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-white/45 text-xs uppercase tracking-[0.3em]">
                        {card.label}
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                    </div>

                  </div>

                  <div
                    className="
                      h-2.5
                      w-2.5

                      rounded-full

                      bg-cyan-400

                      shadow-[0_0_18px_#22d3ee]
                    "
                  />

                </div>

                <div className="mt-8 flex items-end justify-between">

                  <span className="text-5xl font-black tracking-tight text-white">
                    {card.value}
                  </span>

                  <span className="text-xs uppercase tracking-[0.3em] text-white/35">
                    LIVE
                  </span>

                </div>

                {/* progress */}

                <div className="mt-8 h-[2px] w-full rounded-full bg-white/10">

                  <motion.div
                    animate={{
                      width: ["25%", "80%", "45%", "100%", "25%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      h-full

                      rounded-full

                      bg-cyan-400

                      shadow-[0_0_14px_#22d3ee]
                    "
                  />

                </div>

              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
