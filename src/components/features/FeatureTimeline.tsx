import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { steps } from "./data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FeatureTimeline() {
  return (
    <div className="relative">
      {/* =================================================
          CENTRAL TIMELINE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[11px]
          top-0
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-300/[0.16]
          to-transparent
          md:left-[15px]
        "
      />

      {/* Static timeline accent */}

      <div
        className="
          pointer-events-none
          absolute
          left-[10px]
          top-[8%]
          h-[18%]
          w-px
          bg-gradient-to-b
          from-transparent
          via-cyan-300/25
          to-transparent
          md:left-[14px]
        "
      />

      {/* =================================================
          CARDS
      ================================================= */}

      <div className="relative space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{
              opacity: 0,
              y: 60,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: index * 0.08,
              ease,
            }}
            className="
              relative
              pl-10
              md:pl-14
            "
          >
            {/* Timeline node */}

            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              whileInView={{
                scale: 1,
                opacity: 1,
              }}
              viewport={{
                once: false,
                amount: 0.35,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08 + 0.15,
                ease,
              }}
              className="
                absolute
                left-[5px]
                top-8
                z-20
                flex
                h-3
                w-3
                items-center
                justify-center
                rounded-full
                border
                border-cyan-300/30
                bg-[#061F26]
                md:left-[9px]
                md:h-4
                md:w-4
              "
            >
              <span
                className="
                  h-1
                  w-1
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_10px_rgba(103,232,249,0.65)]
                "
              />
            </motion.div>

            <FeatureCard
              number={step.number}
              title={step.title}
              description={step.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}