import { motion } from "framer-motion";
import { formatNumber } from "./utils";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const MIN = 1000;
const MAX = 10000;

export default function PrintSlider({
  value,
  onChange,
}: Props) {
  const progress =
    ((value - MIN) / (MAX - MIN)) * 100;

  return (
    <div>
      {/* Header */}

      <div className="mb-2 flex items-end justify-between">
        <div>
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-white/30
            "
          >
            Тираж
          </p>

          <motion.p
            key={value}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              mt-2
              font-mono
              text-3xl
              tracking-tight
              text-white
            "
          >
            {formatNumber(value)}
          </motion.p>
        </div>

        <span
          className="
            pb-1
            font-mono
            text-[10px]
            text-white/20
          "
        >
          01 — 10K
        </span>
      </div>

      {/* Slider */}

      <div className="relative h-20">
        {/* Track */}

        <div
          className="
            absolute
            left-0
            right-0
            top-1/2
            h-[3px]
            -translate-y-1/2
            rounded-full
            bg-white/[0.08]
          "
        />

        {/* Progress */}

        <motion.div
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
          className="
            absolute
            left-0
            top-1/2
            h-[3px]
            -translate-y-1/2
            rounded-full
            bg-gradient-to-r
            from-red-400
            to-red-300
          "
        />

        {/* Value marker */}

        <motion.div
          animate={{
            left: `${progress}%`,
          }}
          transition={{
            type: "spring",
            stiffness: 240,
            damping: 24,
          }}
          className="
            absolute
            top-1/2
            z-20
            flex
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
          "
        >
          {/* Glow */}

          <div
            className="
              absolute
              h-12
              w-12
              rounded-full
              bg-red-400/20
              blur-xl
            "
          />

          {/* Knob */}

          <div
            className="
              relative
              h-5
              w-5
              rounded-full
              border-[4px]
              border-[#080808]
              bg-red-300
              shadow-[0_0_18px_rgba(248,113,113,0.65)]
            "
          />
        </motion.div>

        {/* Range input */}

        <input
          type="range"
          min={MIN}
          max={MAX}
          step={500}
          value={value}
          onChange={(e) =>
            onChange(Number(e.target.value))
          }
          aria-label="Тираж"
          className="
            absolute
            inset-0
            z-30
            h-full
            w-full
            cursor-pointer
            opacity-0
          "
        />
      </div>

      {/* Scale */}

      <div
        className="
          -mt-1
          flex
          justify-between
          text-[9px]
          uppercase
          tracking-[0.15em]
          text-white/20
        "
      >
        <span>1 000</span>

        <span>10 000</span>
      </div>
    </div>
  );
}
