import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroBadge() {
  const { language } = useLanguage();

  const title =
    language === "ru"
      ? "QR РЕКЛАМНАЯ СЕТЬ"
      : "QR ЖАРНАМА ЖЕЛІСІ";

  const subtitle =
    language === "ru"
      ? "ЦИФРОВАЯ ВОДА"
      : "ЦИФРЛЫҚ СУ";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="
        relative
        inline-flex
        w-fit
        items-center
        gap-3
        overflow-hidden
        rounded-full
        border
        border-[#0b7180]/15
        bg-white/45
        px-4
        py-2.5
        shadow-[0_10px_35px_rgba(15,110,125,.08)]
        backdrop-blur-xl
      "
    >
      {/* STATUS */}

      <span
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          bg-[#0a91a1]/10
        "
      >
        <span className="h-2 w-2 rounded-full bg-[#0a91a1]" />
      </span>

      {/* TEXT */}

      <div className="flex flex-col leading-none">
        <span
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#073b4c]
            sm:text-[11px]
          "
        >
          {title}
        </span>

        <span
          className="
            mt-1
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-[#0a8b9b]/70
            sm:text-[9px]
          "
        >
          {subtitle}
        </span>
      </div>

      {/* WATER LINE */}

      <div
        className="
          absolute
          bottom-0
          left-5
          right-5
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#0aa5b5]/60
          to-transparent
        "
      />
    </motion.div>
  );
}