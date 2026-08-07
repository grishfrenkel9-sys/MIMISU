import {
  motion,
  useReducedMotion,
} from "framer-motion";

interface Props {
  number: string;
  title: string;
  description: string;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function FeatureCard({
  number,
  title,
  description,
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
        scale: 0.985,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        ease,
      }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              scale: 1.005,
            }
      }
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.015]
        px-7
        py-8
        transition-[border-color,background-color]
        duration-500

        md:px-10
        md:py-10

        hover:border-white/[0.12]
        hover:bg-white/[0.025]
      "
    >
      {/* =========================================
          RED AMBIENT GLOW
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
          amount: 0.25,
        }}
        transition={{
          duration: 1.1,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          -left-24
          top-1/2
          h-48
          w-48
          -translate-y-1/2
          rounded-full
          bg-red-500/[0.035]
          blur-[90px]
          transition-all
          duration-700
          group-hover:bg-red-500/[0.1]
        "
      />

      {/* =========================================
          TOP LIGHT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.1]
          to-transparent
          opacity-60
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* =========================================
          VERTICAL ACCENT
      ========================================= */}

      <motion.div
        initial={{
          scaleY: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleY: 1,
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        transition={{
          duration: 0.9,
          delay: 0.1,
          ease,
        }}
        className="
          absolute
          left-0
          top-0
          h-full
          w-px
          origin-top
          bg-gradient-to-b
          from-red-400/80
          via-red-500/30
          to-transparent
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          relative
          flex
          gap-8

          md:gap-12
        "
      >
        {/* NUMBER */}

        <div className="relative shrink-0 pt-1">
          <motion.span
            whileHover={
              reduceMotion
                ? undefined
                : {
                    color: "rgba(248,113,113,1)",
                    x: 2,
                  }
            }
            className="
              relative
              z-10
              block
              font-mono
              text-xs
              tracking-[0.25em]
              text-red-500/70
              transition-colors
              duration-500
            "
          >
            {number}
          </motion.span>

          <span
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-10
              w-10
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-red-500/0
              blur-xl
              transition-all
              duration-500
              group-hover:bg-red-500/20
            "
          />
        </div>

        {/* MAIN */}

        <div className="relative min-w-0 flex-1">
          <div className="flex items-center gap-4">
            <motion.h3
              className="
                text-2xl
                font-light
                tracking-tight
                text-white

                md:text-3xl
              "
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      x: 4,
                    }
              }
              transition={{
                duration: 0.35,
                ease,
              }}
            >
              {title}
            </motion.h3>

            {/* Arrow */}

            <motion.span
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileHover={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                hidden
                text-sm
                text-red-400

                md:block
              "
            >
              ↗
            </motion.span>
          </div>

          <p
            className="
              mt-4
              max-w-3xl
              text-sm
              leading-7
              text-white/35
              transition-colors
              duration-500
              group-hover:text-white/50

              md:text-base
              md:leading-8
            "
          >
            {description}
          </p>
        </div>
      </div>

      {/* =========================================
          BOTTOM SHINE
      ========================================= */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.7,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          origin-left
          bg-gradient-to-r
          from-transparent
          via-red-400/60
          to-transparent
        "
      />

      {/* =========================================
          CORNER LIGHT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-24
          w-24
          rounded-bl-full
          bg-red-400/[0.015]
          opacity-0
          blur-2xl
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}
