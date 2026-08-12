import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface HeroButtonsProps {
  onNavigate: (id: string) => void;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroButtons({
  onNavigate,
}: HeroButtonsProps) {
  const { t } = useLanguage();

  return (
    <div className="mt-10 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
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
          ease,
        }}
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          bg-[#073b4c]
          px-6
          py-3.5
          text-[13px]
          font-semibold
          text-white
          shadow-[0_14px_35px_rgba(7,59,76,.14)]
          transition-shadow
          duration-200
          hover:shadow-[0_18px_45px_rgba(7,59,76,.22)]

          sm:gap-4
          sm:px-7
          sm:py-4
          sm:text-sm
        "
      >
        <span>{t.hero.button}</span>

        <span
          className="
            inline-block
            transition-transform
            duration-200
            ease-[cubic-bezier(.16,1,.3,1)]
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </motion.button>

      {/* СМОТРЕТЬ ИСТОРИЮ */}

      <motion.button
        type="button"
        onClick={() => onNavigate("story")}
        whileHover={{
          y: -2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          duration: 0.16,
          ease,
        }}
        className="
          group
          flex
          items-center
          gap-3
          rounded-full
          border
          border-[#073b4c]/10
          bg-white/50
          px-6
          py-3.5
          text-[13px]
          font-medium
          text-[#073b4c]
          shadow-[0_10px_30px_rgba(7,59,76,.05)]
          backdrop-blur-md

          transition-[background-color,border-color,box-shadow]
          duration-150

          hover:border-[#073b4c]/15
          hover:bg-white/75
          hover:shadow-[0_14px_35px_rgba(7,59,76,.08)]

          sm:gap-3.5
          sm:px-7
          sm:py-4
          sm:text-sm
        "
      >
        {/* PLAY */}

        <span
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#dff7f8]
            text-[#0aa6b7]

            sm:h-9
            sm:w-9
          "
        >
          <Play
            size={13}
            strokeWidth={0}
            fill="currentColor"
            className="ml-[1px]"
          />
        </span>

        <span className="whitespace-nowrap">
          {t.hero.storyButton}
        </span>
      </motion.button>
    </div>
  );
}