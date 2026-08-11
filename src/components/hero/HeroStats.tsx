import { motion } from "framer-motion";

const STATS = [
  {
    value: "10M+",
    title: "Бутылок в месяц",
  },
  {
    value: "47",
    title: "Регионов",
  },
  {
    value: "98%",
    title: "Возвратов",
  },
  {
    value: "1.2k",
    title: "Партнёров",
  },
];

function StatCard({
  value,
  title,
  index,
}: {
  value: string;
  title: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.65,
        delay: 0.85 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[20px]
        border
        border-white/70
        bg-white/45
        p-4
        shadow-[0_14px_45px_rgba(7,59,76,.07)]
        backdrop-blur-[8px]

        sm:rounded-[24px]
        sm:p-5
      "
    >
      {/* Highlight */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-5
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white
          to-transparent
        "
      />

      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-24
          w-24
          rounded-full
          bg-cyan-300/20
          blur-2xl
          transition-opacity
          duration-300
          group-hover:opacity-90
        "
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#0ea5a8]
              shadow-[0_0_10px_rgba(14,165,168,.45)]
            "
          />

          <span
            className="
              text-[7px]
              font-semibold
              uppercase
              tracking-[0.22em]
              text-[#0e7490]/35

              sm:text-[8px]
            "
          >
            DATA
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1 + index * 0.07,
          }}
          className="
            mt-4
            text-[clamp(1.7rem,7vw,2.5rem)]
            font-black
            leading-none
            tracking-[-0.055em]
            text-[#073b4c]

            sm:mt-5
            sm:text-[clamp(2rem,3.5vw,2.8rem)]
          "
        >
          {value}
        </motion.div>

        <div
          className="
            mt-3
            max-w-[150px]
            text-[8px]
            font-semibold
            uppercase
            leading-[1.5]
            tracking-[0.18em]
            text-[#0e7490]/55

            sm:text-[9px]
            sm:tracking-[0.2em]
          "
        >
          {title}
        </div>

        <div className="mt-4 h-px w-full bg-[#073b4c]/[0.07] sm:mt-5">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${45 + index * 13}%`,
            }}
            transition={{
              duration: 0.9,
              delay: 1.05 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              h-full
              rounded-full
              bg-gradient-to-r
              from-[#0ea5a8]
              to-[#38bdf8]
            "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        delay: 0.8,
      }}
      className="
        mt-8
        grid
        grid-cols-2
        gap-3

        sm:mt-10
        sm:gap-4

        lg:gap-5
      "
    >
      {STATS.map((item, index) => (
        <StatCard
          key={item.title}
          value={item.value}
          title={item.title}
          index={index}
        />
      ))}
    </motion.div>
  );
}