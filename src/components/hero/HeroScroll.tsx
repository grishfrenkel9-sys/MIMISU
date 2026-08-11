import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 1.1,
      }}
      className="
        absolute
        bottom-5
        left-1/2
        z-30
        hidden
        -translate-x-1/2
        flex-col
        items-center
        gap-2
        select-none

        sm:bottom-7
        sm:flex
      "
    >
      <span
        className="
          text-[8px]
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[#073b4c]/45

          sm:text-[9px]
        "
      >
        ЛИСТАЙТЕ
      </span>

      <div
        className="
          relative
          flex
          h-10
          w-5
          items-start
          justify-center
          rounded-full
          border
          border-[#073b4c]/20
          bg-white/25

          sm:h-11
          sm:w-6
        "
      >
        <motion.div
          animate={{
            y: [5, 22, 5],
            opacity: [1, 0.15, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-[#078c9d]

            sm:h-2
            sm:w-2
          "
        />
      </div>
    </motion.div>
  );
}