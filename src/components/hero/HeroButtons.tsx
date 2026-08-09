import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="mt-8 flex flex-wrap items-center gap-4"
    >
      <motion.a
        href="#calculator"
        whileHover={{ y: -2, scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        className="
          group
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-[#073b4c]
          px-7
          py-4
          text-[15px]
          font-semibold
          text-white
          shadow-[0_15px_40px_rgba(7,59,76,.2)]
          transition-shadow
          hover:shadow-[0_18px_50px_rgba(7,59,76,.28)]
        "
      >
        Запустить кампанию

        <motion.span whileHover={{ x: 4 }}>
          <ArrowRight size={18} />
        </motion.span>
      </motion.a>

      <motion.a
        href="#story"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="
          inline-flex
          items-center
          gap-3
          rounded-full
          border
          border-[#0b7180]/15
          bg-white/45
          px-6
          py-3.5
          text-[15px]
          font-medium
          text-[#073b4c]
          shadow-[0_10px_30px_rgba(15,100,120,.07)]
          backdrop-blur-xl
          transition-colors
          hover:bg-white/65
        "
      >
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#0a91a1]/10
            text-[#078c9d]
          "
        >
          <Play size={13} fill="currentColor" />
        </span>

        Смотреть историю
      </motion.a>
    </motion.div>
  );
}