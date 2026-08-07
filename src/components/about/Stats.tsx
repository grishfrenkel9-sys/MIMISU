import { motion } from "framer-motion";

const stats = [
  {
    value: "10K+",
    label: "Пользователей",
  },
  {
    value: "99.9%",
    label: "Аптайм",
  },
  {
    value: "24/7",
    label: "Поддержка",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Stats() {
  return (
    <div
      className="
        mt-24
        border-t
        border-white/[0.08]
        pt-8

        lg:mt-32
        lg:pt-10
      "
    >
      <div
        className="
          grid
          grid-cols-1

          sm:grid-cols-3
        "
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{
              opacity: 0,
              y: 45,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.45,
            }}
            transition={{
              duration: 0.9,
              delay: index * 0.12,
              ease,
            }}
            whileHover={{
              y: -6,
            }}
            className="
              group
              relative
              overflow-hidden
              border-b
              border-white/[0.06]
              py-7

              sm:border-b-0
              sm:border-r
              sm:px-8
              sm:py-3

              first:sm:pl-0
              last:sm:border-r-0
              last:sm:pr-0
            "
          >
            {/* Ambient glow */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.5,
              }}
              transition={{
                duration: 1.2,
                delay: index * 0.12,
                ease,
              }}
              className="
                pointer-events-none
                absolute
                -right-10
                -top-10
                h-32
                w-32
                rounded-full
                bg-cyan-400/[0.045]
                blur-3xl
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
            />

            {/* Top line */}

            <div
              className="
                relative
                mb-7
                flex
                items-center
                justify-between
              "
            >
              <span
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-white/20
                "
              >
                0{index + 1}
              </span>

              <motion.span
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.35,
                }}
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_14px_rgba(103,232,249,0.65)]
                "
              />
            </div>

            {/* Value */}

            <div
              className="
                relative
                text-[clamp(2.4rem,4vw,3.5rem)]
                font-light
                leading-none
                tracking-[-0.055em]
                text-white
              "
            >
              {stat.value}
            </div>

            {/* Label */}

            <div
              className="
                relative
                mt-3
                text-[9px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/30
              "
            >
              {stat.label}
            </div>

            {/* Bottom progress line */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: false,
                amount: 0.5,
              }}
              transition={{
                duration: 1,
                delay: 0.25 + index * 0.12,
                ease,
              }}
              className="
                mt-7
                h-px
                w-full
                origin-left
                bg-gradient-to-r
                from-cyan-400/30
                via-white/[0.08]
                to-transparent
              "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
