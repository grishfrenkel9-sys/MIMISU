import { motion } from "framer-motion";

export default function HeroBadge() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 14,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      className="
        group

        relative

        inline-flex
        w-fit
        items-center
        gap-3

        overflow-hidden

        rounded-full

        border
        border-white/10

        bg-white/[0.03]

        px-3
        py-2

        backdrop-blur-xl
      "
    >
      {/* Animated border */}

      <motion.div
        className="
          absolute

          inset-0

          bg-gradient-to-r
          from-transparent
          via-cyan-400/20
          to-transparent
        "
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dot */}

      <span
        className="
          relative

          flex

          h-6
          w-6

          items-center
          justify-center

          rounded-full

          bg-cyan-400/10
        "
      >
        <motion.span
          className="
            absolute

            h-full
            w-full

            rounded-full

            bg-cyan-400/30
          "
          animate={{
            scale: [1, 1.8],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />

        <motion.span
          className="
            h-2
            w-2

            rounded-full

            bg-cyan-400
          "
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
        />
      </span>      {/* Text */}

      <div className="relative z-10 flex flex-col leading-none">
        <motion.span
          className="
            text-[13px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/80
          "
          animate={{
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          QR AD NETWORK
        </motion.span>

        <span
          className="
            mt-1

            text-[11px]

            uppercase

            tracking-[0.22em]

            text-cyan-400/70
          "
        >
          REAL-TIME ANALYTICS
        </span>
      </div>

      {/* Right glow */}

      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          -right-6

          h-12
          w-12

          rounded-full

          bg-cyan-400/20

          blur-2xl
        "
      />

      {/* Bottom line */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          duration: 1,
          delay: .5,
          ease: [0.22,1,0.36,1],
        }}
        className="
          absolute

          bottom-0
          left-4
          right-4

          h-px

          origin-left

          bg-gradient-to-r
          from-cyan-400
          via-white/60
          to-transparent
        "
      />
    </motion.div>
  );
}
