import { motion } from "framer-motion";
import type { AdvertiserCount } from "./types";

const options = [
  {
    id: 4 as AdvertiserCount,
    number: "04",
    title: "Мультибренд",
    subtitle: "4 рекламодателя",
  },
  {
    id: 2 as AdvertiserCount,
    number: "02",
    title: "Совместная",
    subtitle: "2 рекламодателя",
  },
  {
    id: 1 as AdvertiserCount,
    number: "01",
    title: "Эксклюзив",
    subtitle: "1 рекламодатель",
  },
];

interface Props {
  value: AdvertiserCount;
  onChange: (value: AdvertiserCount) => void;
}

export default function AdvertiserSelector({
  value,
  onChange,
}: Props) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {options.map((item) => {
        const active = value === item.id;

        return (
          <motion.button
            key={item.id}
            type="button"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.98,
            }}
            onClick={() => onChange(item.id)}
            className={`
              group
              relative
              h-[130px]
              overflow-hidden
              rounded-2xl
              border
              p-5
              text-left
              transition-all
              duration-500

              ${
                active
                  ? `
                    border-red-400/30
                    bg-red-400/[0.045]
                  `
                  : `
                    border-white/[0.07]
                    bg-white/[0.015]
                    hover:border-white/[0.14]
                    hover:bg-white/[0.025]
                  `
              }
            `}
          >
            {/* Active glow */}

            <motion.div
              animate={{
                opacity: active ? 1 : 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                pointer-events-none
                absolute
                -left-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-red-500/20
                blur-[55px]
              "
            />

            {/* Top line */}

            <motion.div
              animate={{
                scaleX: active ? 1 : 0,
                opacity: active ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                absolute
                left-0
                right-0
                top-0
                h-px
                origin-left
                bg-gradient-to-r
                from-red-400
                to-transparent
              "
            />

            <div className="relative z-10">
              {/* Number */}

              <div
                className={`
                  font-mono
                  text-[10px]
                  tracking-[0.3em]
                  transition-colors
                  duration-300

                  ${
                    active
                      ? "text-red-300"
                      : "text-white/20"
                  }
                `}
              >
                {item.number}
              </div>

              {/* Title */}

              <h3
                className="
                  mt-4
                  text-base
                  font-medium
                  tracking-tight
                  text-white
                "
              >
                {item.title}
              </h3>

              {/* Subtitle */}

              <p
                className="
                  mt-1.5
                  text-xs
                  text-white/30
                "
              >
                {item.subtitle}
              </p>
            </div>

            {/* Active indicator */}

            <motion.div
              animate={{
                scale: active ? 1 : 0,
                opacity: active ? 1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="
                absolute
                right-5
                top-5
                h-2
                w-2
                rounded-full
                bg-red-300
                shadow-[0_0_15px_rgba(248,113,113,0.8)]
              "
            />

            {/* Bottom number */}

            <span
              className="
                absolute
                bottom-4
                right-5
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/10
              "
            >
              MiMiSU
            </span>
          </motion.button>
        );
      })}
    </div>
  );
}
