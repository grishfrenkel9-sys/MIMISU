import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 1.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        absolute
        bottom-10
        left-1/2
        z-30

        flex
        -translate-x-1/2
        flex-col
        items-center
        gap-3
        select-none
      "
    >
      <span
        className="
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-white/35
        "
      >
        ЛИСТАЙТЕ
      </span>

      <div
        className="
          relative

          flex
          h-[48px]
          w-[28px]
          items-start
          justify-center

          rounded-full

          border
          border-white/15
        "
      >
        <motion.div
          animate={{
            y: [6, 24, 6],
            opacity: [1, 0.15, 1],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute

            h-2.5
            w-2.5

            rounded-full

            bg-cyan-300
          "
          style={{
            boxShadow:
              "0 0 16px rgba(34,211,238,.9), 0 0 30px rgba(34,211,238,.45)",
          }}
        />
      </div>
    </motion.div>
  );
}
