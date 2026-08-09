import { motion } from "framer-motion";

const lines = [
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
];

export default function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="
        relative
        mt-6
        select-none
        font-black
        uppercase
        leading-[0.91]
        tracking-[-0.055em]
        [font-size:clamp(3rem,6vw,6.2rem)]
      "
    >
      {lines.map((line, index) => (
        <motion.div
          key={line.text}
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

      {/* Акцентная последняя строка */}
      <motion.div
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
          delay: 0.34,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mt-1
          w-fit
          bg-gradient-to-r
          from-[#078A9A]
          via-[#12B8C8]
          to-[#08788A]
          bg-clip-text
          text-transparent
        "
      >
        ПРОЛИСТАТЬ

        {/* Мягкое свечение под акцентом */}
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

      {/* Тонкая водная линия */}
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
          mt-5
          h-[2px]
          w-28
          origin-left
          rounded-full
          bg-gradient-to-r
          from-[#0AA6B7]
          to-transparent
        "
      />
    </motion.h1>
  );
}