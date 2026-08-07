import { motion, useReducedMotion } from "framer-motion";
import FeatureTimeline from "./FeatureTimeline";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Features() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        bg-TRANSPARENT
        py-32
        text-white

        md:py-40
        lg:py-48
      "
    >
      {/* =========================================
          AMBIENT FIELD
      ========================================= */}

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
          amount: 0.2,
        }}
        transition={{
          duration: 1.5,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[18%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-red-500/[0.035]
          blur-[160px]
        "
      />

      {/* Secondary light */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        transition={{
          duration: 1.2,
          ease,
        }}
        className="
          pointer-events-none
          absolute
          left-[-180px]
          bottom-[10%]
          h-[360px]
          w-[360px]
          rounded-full
          bg-cyan-400/[0.018]
          blur-[140px]
        "
      />

      {/* =========================================
          CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-6

          md:px-10
          xl:px-16
        "
      >
        {/* =====================================
            LABEL
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            flex
            items-center
            gap-4
            text-[10px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-neutral-500
          "
        >
          <motion.span
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
              duration: 0.8,
              ease,
            }}
            className="
              h-px
              w-8
              origin-left
              bg-red-400/50
            "
          />

          Глава 02 // Как это работает
        </motion.div>

        {/* =====================================
            HEADING
        ===================================== */}

        <div className="mt-7 overflow-hidden">
          <motion.h2
            initial={{
              opacity: 0,
              y: 90,
              filter: "blur(14px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.4,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="
              max-w-5xl
              text-[clamp(3rem,6vw,6rem)]
              font-light
              leading-[0.95]
              tracking-[-0.045em]
            "
          >
            От идеи до реального контакта
            <br className="hidden md:block" />

            <motion.span
              initial={{
                opacity: 0.25,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: false,
                amount: 0.4,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease,
              }}
              className="text-white/45"
            >
              с вашей аудиторией.
            </motion.span>
          </motion.h2>
        </div>

        {/* =====================================
            DESCRIPTION
        ===================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.35,
          }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease,
          }}
          className="
            mt-8
            max-w-2xl
            text-base
            leading-[1.8]
            text-white/40

            md:text-lg
          "
        >
          Мы берем на себя весь процесс: от разработки
          дизайна бутылки до распространения и аналитики
          результатов рекламной кампании.
        </motion.p>

        {/* =====================================
            DIVIDER
        ===================================== */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease,
          }}
          className="
            mt-16
            h-px
            w-full
            origin-left
            bg-gradient-to-r
            from-red-400/20
            via-white/[0.07]
            to-transparent
          "
        />

        {/* =====================================
            TIMELINE
        ===================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease,
          }}
        >
          <FeatureTimeline />
        </motion.div>
      </div>

      {/* =========================================
          EDGE LINES
      ========================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: false,
        }}
        transition={{
          duration: 1,
        }}
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/[0.07]
          to-transparent
        "
      />

      {!reduceMotion && (
        <motion.div
          animate={{
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            bottom-[-120px]
            h-[240px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-red-400/[0.025]
            blur-[100px]
          "
        />
      )}
    </section>
  );
}
