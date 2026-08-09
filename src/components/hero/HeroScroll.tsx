import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        delay: 1.1,
      }}
      className="
        absolute
        bottom-8
        left-1/2
        z-30
        flex
        -translate-x-1/2
        flex-col
        items-center
        gap-2
        select-none
      "
    >
      <span
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[#073b4c]/45
        "
      >
        ЛИСТАЙТЕ
      </span>

      <div
        className="
          relative
          flex
          h-11
          w-6
          items-start
          justify-center
          rounded-full
          border
          border-[#073b4c]/20
          bg-white/25
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
            h-2
            w-2
            rounded-full
            bg-[#078c9d]
          "
        />
      </div>
    </motion.div>
  );
}