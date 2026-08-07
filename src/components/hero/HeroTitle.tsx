import { motion } from "framer-motion";

const lines = [
  {
    text: "РЕКЛАМНАЯ",
    color: "text-white",
  },
  {
    text: "СЕТЬ,",
    color: "text-white",
  },
  {
    text: "КОТОРУЮ",
    color: "text-white/35",
  },
  {
    text: "НЕВОЗМОЖНО",
    color: "text-white/35",
  },
  {
    text: "ПРОЛИСТАТЬ",
    color: "gradient",
  },
];

export default function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
      }}
     className="
mt-6

font-black
uppercase
select-none

leading-[1.05]

tracking-normal

[font-size:clamp(2.7rem,5vw,5.4rem)]
"
    >
      {lines.map((line, index) => (
        <div
          key={line.text}
          className="overflow-visible"  
        > 
          <motion.div
            initial={{
              y: 120,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={
              line.color === "gradient"
                ? `
                    inline-block
                    bg-gradient-to-r
                    from-cyan-300
                    via-cyan-400
                    to-cyan-500
                    bg-clip-text
                    text-transparent
                  `
                : line.color
            }
          >
            {line.text}
          </motion.div>
        </div>
      ))}
    </motion.h1>
  );
}
