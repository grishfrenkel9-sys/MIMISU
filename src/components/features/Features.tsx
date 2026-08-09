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
        bg-[#052830]
        text-white
      "
    >
      {/* =====================================================
          TOP TRANSITION FROM ABOUT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-0
          h-[180px]
          bg-gradient-to-b
          from-[#04242C]
          via-[#04242C]/55
          to-[#052830]
        "
      />

      {/* =====================================================
          OCEAN ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[10%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-300/[0.055]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[8%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-teal-300/[0.04]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[150px]
        "
      />

      {/* =====================================================
          VERTICAL GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[24%]
          top-0
          h-full
          w-px
          bg-cyan-100/[0.025]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-full
          w-px
          bg-cyan-100/[0.018]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[24%]
          top-0
          h-full
          w-px
          bg-cyan-100/[0.025]
        "
      />

      {/* =====================================================
          HORIZONTAL LINES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[16%]
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-100/[0.045]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-[52%]
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-100/[0.025]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[15%]
          left-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-cyan-100/[0.04]
          to-transparent
        "
      />

      {/* =====================================================
          WATER ARCS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[18%]
          top-[28%]
          h-[520px]
          w-[900px]
          rounded-[50%]
          border
          border-cyan-200/[0.035]
          rotate-[-7deg]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[10%]
          top-[35%]
          h-[420px]
          w-[760px]
          rounded-[50%]
          border
          border-cyan-200/[0.022]
          rotate-[-7deg]
        "
      />

      {/* =====================================================
          MICRO DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[18%]
          top-[24%]
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300/35
          shadow-[0_0_14px_rgba(103,232,249,0.3)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[17%]
          top-[20%]
          h-2
          w-2
          rounded-full
          border
          border-cyan-200/20
          bg-cyan-200/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[31%]
          bottom-[24%]
          h-1
          w-1
          rounded-full
          bg-cyan-300/25
        "
      />

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(180,240,245,.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(180,240,245,.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "120px 120px",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          pb-32
          pt-28

          md:px-10
          md:pb-36
          md:pt-36

          xl:px-16
          xl:pb-44
          xl:pt-44
        "
      >
        {/* =================================================
            LABEL
        ================================================= */}

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
            text-cyan-200/65
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
              bg-cyan-300/60
            "
          />

          Глава 02 // Как это работает
        </motion.div>

        {/* =================================================
            HEADING
        ================================================= */}

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
              text-white
            "
          >
            От идеи до реального контакта
            <br className="hidden md:block" />

            <motion.span
              initial={{
                opacity: 0.3,
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
              className="text-cyan-100/40"
            >
              с вашей аудиторией.
            </motion.span>
          </motion.h2>
        </div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

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
            text-cyan-50/55
            md:text-lg
          "
        >
          Мы берем на себя весь процесс: от разработки
          дизайна бутылки до распространения и аналитики
          результатов рекламной кампании.
        </motion.p>

        {/* =================================================
            DIVIDER
        ================================================= */}

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
            from-cyan-300/25
            via-cyan-100/[0.09]
            to-transparent
          "
        />

        {/* =================================================
            TIMELINE
        ================================================= */}

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

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[220px]
          bg-gradient-to-b
          from-transparent
          via-[#052830]/80
          to-[#031A22]
        "
      />

      {/* =====================================================
          BOTTOM LIGHT
      ===================================================== */}

      {!reduceMotion && (
        <motion.div
          animate={{
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-[-120px]
            left-1/2
            h-[240px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-cyan-300/[0.035]
            blur-[100px]
          "
        />
      )}
    </section>
  );
}