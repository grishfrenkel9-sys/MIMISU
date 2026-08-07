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
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: .7,
        delay: index * 0.05,
        ease: [0.16,1,0.3,1],
      }}
    whileHover={{
  y: -2,
  scale: 1.01,
}}
      className="
        group

        relative

        overflow-hidden

        rounded-[28px]

        border
        border-white/8

        bg-white/[0.03]

        p-7

        backdrop-blur-xl

        transition-all

        duration-300

        hover:border-cyan-400/30
      "
    >
      {/* Moving glow */}

      <motion.div
        className="
          absolute

          inset-0

          bg-gradient-to-r
          from-transparent
          via-cyan-400/8
          to-transparent
        "
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Cyan glow */}

      <motion.div
className="
absolute
right-0
top-0
h-16
w-16
rounded-full
bg-cyan-400/10
blur-2xl
"
/>
      <div className="relative z-10">

        <motion.div
          className="
            text-[42px]

            font-light

            tracking-[-0.05em]

            text-white
          "
          animate={{
            opacity:[.85,1,.85],
          }}
          transition={{
            duration:3,
            repeat:Infinity,
          }}
        >
          {value}
        </motion.div>

        <div
          className="
            mt-3

            text-xs

            uppercase

            tracking-[0.22em]

            text-white/40
          "
        >
          {title}
        </div>        {/* Accent line */}

        {/* Hover glow */}
      

      </div>
    </motion.div>
  );
}

export default function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity:0,
      }}
      animate={{
        opacity:1,
      }}
      transition={{
        delay:1,
      }}
      className="
        mt-600


        grid

        grid-cols-2

        gap-4

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
