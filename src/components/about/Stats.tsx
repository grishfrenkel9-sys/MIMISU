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
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.1,
              ease,
            }}
            whileHover={{
              y: -4,
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

            <div
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
                opacity-70
                transition-opacity
                duration-500
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

              <span
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

            {/* Progress line */}

            <motion.div
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.1,
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