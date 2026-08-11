import { motion, useReducedMotion } from "framer-motion";

import FeatureCard from "./FeatureCard";
import { steps } from "./data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FeatureTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative">
      {/* TIMELINE */}

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

      {/* CARDS */}

      <div className="relative space-y-5 sm:space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.55,
              delay: reduceMotion ? 0 : index * 0.05,
              ease,
            }}
            className="
              relative
              pl-10
              md:pl-14
            "
          >
            {/* TIMELINE NODE */}

            <div
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
                  shadow-[0_0_8px_rgba(103,232,249,0.55)]
                "
              />
            </div>

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