import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroTitle() {
  const { language } = useLanguage();

  const isKz = language === "kz";

  const content = {
    ru: {
      lines: [
        {
          text: "РЕКЛАМНАЯ",
          className: "text-[#063B4A]",
        },
        {
          text: "СЕТЬ,",
          className: "text-[#063B4A]",
        },
        {
          text: "КОТОРУЮ",
          className: "text-[#467783]",
        },
        {
          text: "НЕВОЗМОЖНО",
          className: "text-[#467783]",
        },
      ],
      accent: "ПРОЛИСТАТЬ",
    },

    kz: {
      lines: [
        {
          text: "ӨТІП КЕТУ",
          className: "text-[#063B4A]",
        },
        {
          text: "МҮМКІН ЕМЕС",
          className: "text-[#467783]",
        },
        {
          text: "ЖАРНАМА",
          className: "text-[#467783]",
        },
      ],
      accent: "ЖЕЛІСІ",
    },
  } as const;

  const { lines, accent } = content[language];

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.7,
      }}
      className={`
        relative
        mt-8
        select-none
        font-black
        uppercase
        leading-[0.94]
        tracking-[-0.055em]

        ${
          isKz
            ? "text-[clamp(2.7rem,10vw,5.7rem)] sm:text-[clamp(3.4rem,7.5vw,5.8rem)] lg:text-[clamp(3.8rem,5.7vw,5.8rem)]"
            : "text-[clamp(3rem,11vw,6.2rem)] sm:text-[clamp(3.8rem,8vw,6.2rem)] lg:text-[clamp(4rem,6vw,6.2rem)]"
        }

        sm:mt-6
        sm:leading-[0.91]
      `}
    >
      {lines.map((line, index) => (
        <motion.div
          key={`${language}-${line.text}`}
          initial={{
            opacity: 0,
            y: 55,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            ${line.className}
            relative
            w-fit
          `}
        >
          {line.text}
        </motion.div>
      ))}

      {/* ACCENT */}

      <motion.div
        key={`${language}-${accent}`}
        initial={{
          opacity: 0,
          y: 55,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.85,
          delay: lines.length * 0.08 + 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mt-3
          w-fit
          bg-gradient-to-r
          from-[#078A9A]
          via-[#12B8C8]
          to-[#08788A]
          bg-clip-text
          text-transparent

          sm:mt-1
        "
      >
        {accent}

        {/* GLOW */}

        <motion.div
          aria-hidden="true"
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scaleX: [0.85, 1, 0.85],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-2
            left-0
            h-3
            w-[85%]
            origin-left
            rounded-full
            bg-[#12B8C8]/20
            blur-xl
          "
        />
      </motion.div>

      {/* WATER LINE */}

      <motion.div
        initial={{
          opacity: 0,
          scaleX: 0,
        }}
        animate={{
          opacity: 1,
          scaleX: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-7
          h-[2px]
          w-20
          origin-left
          rounded-full
          bg-gradient-to-r
          from-[#0AA6B7]
          to-transparent

          sm:mt-5
          sm:w-28
        "
      />
    </motion.h1>
  );
}