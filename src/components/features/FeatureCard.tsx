import { motion, useReducedMotion } from "framer-motion";

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
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 24,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        ease,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-cyan-100/[0.06]
        bg-white/[0.015]
        px-6
        py-7
        transition-[border-color,background-color]
        duration-300
        hover:border-cyan-200/[0.13]
        hover:bg-cyan-100/[0.018]
        sm:px-8
        sm:py-8
        md:px-10
        md:py-10
      "
    >
      {/* TOP LIGHT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-100/[0.12]
          to-transparent
          opacity-70
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* LEFT ACCENT */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-px
          bg-gradient-to-b
          from-cyan-300/60
          via-cyan-400/20
          to-transparent
        "
      />

      {/* CONTENT */}

      <div className="relative flex gap-6 md:gap-10">
        {/* NUMBER */}

        <div className="relative shrink-0 pt-1">
          <span
            className="
              relative
              z-10
              block
              font-mono
              text-[10px]
              tracking-[0.25em]
              text-cyan-300/60
              transition-colors
              duration-300
              group-hover:text-cyan-200
            "
          >
            {number}
          </span>
        </div>

        {/* MAIN */}

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <h3
              className="
                text-xl
                font-light
                tracking-tight
                text-white
                sm:text-2xl
                md:text-3xl
              "
            >
              {title}
            </h3>

            <span
              className="
                hidden
                text-sm
                text-cyan-300/60
                transition-transform
                duration-300
                group-hover:translate-x-1
                md:block
              "
            >
              ↗
            </span>
          </div>

          <p
            className="
              mt-3
              max-w-3xl
              text-sm
              leading-6
              text-white/35
              transition-colors
              duration-300
              group-hover:text-white/50
              sm:mt-4
              sm:text-[15px]
              sm:leading-7
              md:text-base
              md:leading-8
            "
          >
            {description}
          </p>
        </div>
      </div>

      {/* BOTTOM SHINE */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-px
          w-full
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-transparent
          via-cyan-300/40
          to-transparent
          transition-transform
          duration-500
          group-hover:scale-x-100
        "
      />
    </motion.div>
  );
}