import { Canvas } from "@react-three/fiber";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroScroll from "./HeroScroll";
import HeroTitle from "./HeroTitle";

import Scene from "../canvas/Scene";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const { scrollY } = useScroll();

  // -----------------------------------------
  // SCROLL
  // -----------------------------------------

  const heroY = useTransform(
    scrollY,
    [0, 700],
    [0, 45]
  );

  const heroOpacity = useTransform(
    scrollY,
    [0, 500],
    [1, 0.65]
  );

  const sceneY = useTransform(
    scrollY,
    [0, 700],
    [0, 55]
  );

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#040404]        text-white
      "
    >
      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#040404]        "
      />

      {/* Очень мягкий свет справа */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-12%]
          top-[10%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-400/[0.035]
          blur-[180px]
        "
      />

      {/* Очень мягкий свет снизу */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-20%]
          left-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/[0.018]
          blur-[180px]
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <motion.div
        style={{
          y: heroY,
          opacity: heroOpacity,
        }}
        className="
          relative
          z-20
          mx-auto
          grid
          min-h-screen
          w-full
          max-w-[1500px]
          grid-cols-1
          items-center
          px-6
          pb-20
          pt-28

          lg:grid-cols-12
          lg:gap-x-4
          lg:px-12
          lg:pb-16
          lg:pt-24

          xl:px-16
        "
      >
        {/* =======================================
            LEFT — TEXT
        ======================================= */}

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
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            z-30
            flex
            w-full
            flex-col
            justify-center

            lg:col-span-6
            lg:pr-8

            xl:pr-16
          "
        >
          {/* ---------------------------------------
              EYEBROW
          --------------------------------------- */}

          <HeroBadge />

          {/* ---------------------------------------
              TITLE
          --------------------------------------- */}

          <div
            className="
              mt-6
              max-w-[720px]
            "
          >
            <HeroTitle />
          </div>

          {/* ---------------------------------------
              DESCRIPTION
          --------------------------------------- */}

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-7
              max-w-[500px]
              text-[15px]
              leading-[1.8]
              text-white/40

              sm:text-[16px]
            "
          >
            MIMISU превращает обычную бутылку
            воды в современный цифровой
            рекламный носитель — с QR-
            аналитикой, измеримым охватом
            и прозрачной статистикой.
          </motion.p>

          {/* ---------------------------------------
              BUTTONS
          --------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-9
            "
          >
            <HeroButtons />
          </motion.div>

          {/* ---------------------------------------
              MINIMAL STATS
          --------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              mt-12
              flex
              items-center
              gap-8
            "
          >
            <div>
              <div
                className="
                  text-[20px]
                  font-medium
                  tracking-tight
                  text-white
                "
              >
                10K+
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                пользователей
              </div>
            </div>

            <div
              className="
                h-8
                w-px
                bg-white/[0.08]
              "
            />

            <div>
              <div
                className="
                  text-[20px]
                  font-medium
                  tracking-tight
                  text-white
                "
              >
                99.9%
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                uptime
              </div>
            </div>

            <div
              className="
                h-8
                w-px
                bg-white/[0.08]
              "
            />

            <div>
              <div
                className="
                  text-[20px]
                  font-medium
                  tracking-tight
                  text-white
                "
              >
                24/7
              </div>

              <div
                className="
                  mt-1
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-white/25
                "
              >
                поддержка
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* =======================================
            RIGHT — BOTTLE
        ======================================= */}

        <motion.div
          style={{
            y: sceneY,
          }}
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            hidden
            h-[620px]
            w-full
            items-center
            justify-center

            lg:col-span-6
            lg:flex

            xl:h-[720px]
          "
        >
          {/* ---------------------------------------
              SINGLE SOFT GLOW
          --------------------------------------- */}

          <div
            className="
              pointer-events-none
              absolute
              h-[420px]
              w-[420px]
              rounded-full
              bg-cyan-400/[0.045]
              blur-[150px]
            "
          />

          {/* ---------------------------------------
              3D
          --------------------------------------- */}

          <div
            className="
              relative
              z-10
              h-full
              w-full
            "
          >
            <Canvas
              dpr={[1, 1.5]}
              camera={{
                position: [0, 0, 6],
                fov: 40,
              }}
              gl={{
                antialias: true,
                alpha: true,
                powerPreference:
                  "high-performance",
              }}
            >
              <Scene
                reduceMotion={
                  !!reduceMotion
                }
              />
            </Canvas>
          </div>

          {/* ---------------------------------------
              PRODUCT LABEL
          --------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.9,
            }}
            className="
              pointer-events-none
              absolute
              bottom-[12%]
              left-1/2
              z-20
              -translate-x-1/2
              whitespace-nowrap
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.025]
                px-4
                py-2
                backdrop-blur-md
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-300/70
                "
              />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                MIMISU / DIGITAL WATER
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =========================================
          TOP FADE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-30
          h-28
          bg-gradient-to-b
          from-[#050505]
          to-transparent
        "
      />

      {/* =========================================
          BOTTOM FADE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-30
          h-32
          bg-gradient-to-t
          from-[#050505]
          to-transparent
        "
      />

      {/* =========================================
          SCROLL
      ========================================= */}

      <HeroScroll />
    </section>
  );
}
