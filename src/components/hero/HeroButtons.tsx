import { motion } from "framer-motion";

interface HeroButtonsProps {
  onNavigate: (id: string) => void;
}

export default function HeroButtons({
  onNavigate,
}: HeroButtonsProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {/* ЗАПУСТИТЬ КАМПАНИЮ */}

      <motion.button
        type="button"
        onClick={() => onNavigate("calculator")}
        whileHover={{
          y: -2,
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          group
          flex
          items-center
          gap-4
          rounded-full
          bg-[#073b4c]
          px-7
          py-4
          text-sm
          font-semibold
          text-white
          shadow-[0_14px_35px_rgba(7,59,76,.14)]
          transition-shadow
          duration-300
          hover:shadow-[0_18px_45px_rgba(7,59,76,.22)]
        "
      >
        <span>Запустить кампанию</span>

        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          →
        </motion.span>
      </motion.button>

      {/* СМОТРЕТЬ ИСТОРИЮ */}

      <motion.button
        type="button"
        onClick={() => onNavigate("story")}
        whileHover={{
          y: -2,
          scale: 1.015,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          duration: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          group
          flex
          items-center
          gap-4
          rounded-full
          border
          border-[#073b4c]/10
          bg-white/50
          px-7
          py-4
          text-sm
          font-medium
          text-[#073b4c]
          shadow-[0_10px_30px_rgba(7,59,76,.05)]
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-[#073b4c]/15
          hover:bg-white/75
          hover:shadow-[0_16px_40px_rgba(7,59,76,.10)]
        "
      >
        <span
          className="
            flex
            h-7
            w-7
            items-center
            justify-center
            rounded-full
            bg-[#dff7f8]
            text-[#0aa6b7]
          "
        >
          <span className="ml-0.5 text-[10px]">
            ▶
          </span>
        </span>

        <span>Смотреть историю</span>
      </motion.button>
    </div>
  );
}