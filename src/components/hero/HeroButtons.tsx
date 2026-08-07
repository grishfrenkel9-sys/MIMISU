import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        mt-8
        flex
        flex-wrap
        items-center
        gap-4
      "
    >
      <PrimaryButton />
      <SecondaryButton />
    </motion.div>
  );
}

function PrimaryButton() {
  return (
    <motion.a
      href="#calculator"
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        duration: .35,
        ease: [0.22,1,0.36,1],
      }}
      className="
        group
        relative

        overflow-hidden

        rounded-full

        bg-white

        px-7
        py-4

        text-[15px]
        font-semibold

        text-black

        shadow-[0_12px_40px_rgba(255,255,255,.08)]
      "
    >
      <motion.div
        className="
          absolute
          inset-0

          bg-gradient-to-r
          from-cyan-100
          via-white
          to-cyan-100
        "
        initial={{
          x: "-100%",
        }}
        whileHover={{
          x: 0,
        }}
        transition={{
          duration: .6,
        }}
      />

      <span className="relative z-10 flex items-center gap-3">
        Запустить кампанию

        <motion.span
          whileHover={{
            x: 4,
          }}
        >
          <ArrowRight size={18} />
        </motion.span>
      </span>
    </motion.a>
  );
}

function SecondaryButton() {
  return (
    <motion.a
      href="#story"
      whileHover={{
        y: -3,
      }}
      whileTap={{
        scale: .98,
      }}
      transition={{
        duration:.35,
        ease:[0.22,1,0.36,1]
      }}      className="
        group

        relative

        overflow-hidden

        rounded-full

        border
        border-white/10

        bg-white/[0.03]

        backdrop-blur-xl

        px-8
        py-4

        text-[15px]

        font-medium

        text-white/80

        transition-all
        duration-300

        hover:border-cyan-400/30
        hover:bg-white/[0.05]
        hover:text-white
      "
    >
      {/* Animated background */}

      <motion.div
        className="
          absolute

          inset-0

          bg-gradient-to-r
          from-transparent
          via-cyan-400/10
          to-transparent
        "
        animate={{
          x: ["-100%", "150%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Button content */}

      <span className="relative z-10 flex items-center gap-3">

        <span
          className="
            flex

            h-8
            w-8

            items-center
            justify-center

            rounded-full

            bg-white/8

            transition-colors

            group-hover:bg-cyan-400/20
          "
        >
          <Play
            size={13}
            fill="currentColor"
            className="translate-x-[1px]"
          />
        </span>

        Смотреть историю

      </span>

      {/* Bottom glow */}

      <motion.div
        className="
          absolute

          bottom-0
          left-6
          right-6

          h-px

          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
        initial={{
          opacity: 0,
          scaleX: .3,
        }}
        whileHover={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: .35,
        }}
      />
    </motion.a>
  );
}
