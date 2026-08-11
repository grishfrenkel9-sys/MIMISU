import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import StoryStep from "./StoryStep";
import { story } from "./storyData";

export default function BottleStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Быстрый отклик без ощущения рывка.
   */
  const progress = useSpring(scrollYProgress, {
    stiffness: 320,
    damping: 36,
    mass: 0.12,
  });

  const glowY = useTransform(
    progress,
    [0, 1],
    [-60, 60],
  );

  return (
    <section
      ref={sectionRef}
      id="story"
      className="
        relative
        overflow-visible
        bg-[#062A32]
        text-white
      "
    >
      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      {!reduceMotion && (
        <motion.div
          aria-hidden
          style={{ y: glowY }}
          className="
            pointer-events-none
            fixed
            left-1/2
            top-1/2
            z-0
            h-[380px]
            w-[380px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#6CE0E5]/[0.055]
            blur-[120px]

            sm:h-[500px]
            sm:w-[500px]

            lg:h-[650px]
            lg:w-[650px]
            lg:blur-[160px]
          "
        />
      )}

      {/* =====================================================
          GRID
      ===================================================== */}

      <div
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(108,224,229,.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(108,224,229,.22) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
        }}
      />

      {/* =====================================================
          INTRO
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1320px]
          px-5
          pb-14
          pt-24

          sm:px-7
          sm:pb-16
          sm:pt-28

          lg:px-12
          lg:pb-20
          lg:pt-36
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? undefined
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="max-w-[760px]"
        >
          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#6CE0E5]/70
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#6CE0E5]
                shadow-[0_0_12px_rgba(108,224,229,.55)]
              "
            />

            О бренде

            <span
              className="
                h-px
                w-8
                bg-[#6CE0E5]/30
              "
            />
          </div>

          <h2
            className="
              mt-6
              text-[clamp(2.7rem,8vw,6.5rem)]
              font-light
              leading-[0.9]
              tracking-[-0.06em]
              text-[#F0FFFF]
            "
          >
            Как бутылка
            <br />

            <span className="text-[#A8CDD1]/45">
              становится контактом.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-[560px]
              text-sm
              leading-6
              text-[#A8CDD1]/65

              sm:text-base
              sm:leading-8
            "
          >
            Один физический объект проходит несколько
            стадий — от появления бренда до цифрового
            действия аудитории.
          </p>
        </motion.div>
      </div>

      {/* =====================================================
          STORY ENGINE
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1320px]
          px-5

          sm:px-7

          lg:px-12
        "
      >
        {/*
         * 5 состояний.
         *
         * Важно:
         * родитель НЕ имеет overflow-hidden.
         *
         * Sticky живёт внутри этого блока.
         */}
        <div
          className="
            relative
            min-h-[300vh]

            sm:min-h-[320vh]

            lg:min-h-[380vh]
          "
        >
          <div
            className="
              sticky
              top-0
              flex
              min-h-screen
              items-center
            "
          >
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-7
                py-8

                sm:gap-10
                sm:py-12

                lg:grid-cols-[72px_minmax(0,1fr)_minmax(280px,0.62fr)]
                lg:items-center
                lg:gap-12
                lg:py-16
              "
            >
              {/* =================================================
                  LEFT NUMBERS
              ================================================= */}

              <div
                className="
                  hidden
                  lg:flex
                  lg:flex-col
                  lg:items-center
                  lg:gap-4
                "
              >
                {story.map((item, index) => {
                  const start = index / story.length;
                  const end = (index + 1) / story.length;

                  const opacity = useTransform(
                    progress,
                    [
                      start,
                      start + 0.02,
                      end - 0.02,
                      end,
                    ],
                    [0.28, 1, 1, 0.28],
                  );

                  const scale = useTransform(
                    progress,
                    [
                      start,
                      start + 0.045,
                      end - 0.045,
                      end,
                    ],
                    [0.88, 1, 1, 0.88],
                  );

                  return (
                    <motion.div
                      key={item.id}
                      style={{
                        opacity,
                        scale,
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#6CE0E5]/[0.14]
                        bg-[#6CE0E5]/[0.025]
                        font-mono
                        text-[9px]
                        tracking-[0.15em]
                        text-[#6CE0E5]/70
                      "
                    >
                      {item.number}
                    </motion.div>
                  );
                })}

                {/* Декоративная линия — БЕЗ progress fill */}
                <div
                  className="
                    mt-1
                    h-16
                    w-px
                    bg-gradient-to-b
                    from-[#6CE0E5]/20
                    to-transparent
                  "
                />
              </div>

              {/* =================================================
                  STORY CARD
              ================================================= */}

              <div
                className="
                  relative
                  min-h-[380px]
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[#6CE0E5]/[0.07]
                  bg-[#07303A]/[0.42]

                  sm:min-h-[430px]
                  sm:rounded-[2rem]

                  lg:min-h-[560px]
                  lg:rounded-[2.5rem]
                "
              >
                <StoryStep
                  story={story}
                  progress={progress}
                />

                {/* INNER FRAME */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    inset-3
                    rounded-[1.35rem]
                    border
                    border-[#6CE0E5]/[0.035]

                    sm:inset-4

                    lg:inset-6
                    lg:rounded-[2rem]
                  "
                />

                {/* TOP SIGNAL */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    left-6
                    top-6
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#6CE0E5]
                    shadow-[0_0_12px_rgba(108,224,229,.65)]
                  "
                />

                {/* BOTTOM DETAIL */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    bottom-7
                    right-7
                    h-px
                    w-12
                    bg-[#6CE0E5]/20
                  "
                />
              </div>

              {/* =================================================
                  RIGHT DESCRIPTION
              ================================================= */}

              <div className="hidden lg:block">
                <div
                  className="
                    mb-7
                    h-px
                    w-14
                    bg-[#6CE0E5]/30
                  "
                />

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-[#6CE0E5]/45
                  "
                >
                  Physical → Digital
                </p>

                <p
                  className="
                    mt-5
                    max-w-[300px]
                    text-sm
                    leading-7
                    text-[#A8CDD1]/35
                  "
                >
                  Каждый этап меняет роль объекта,
                  превращая физический контакт
                  в цифровое действие.
                </p>

                <div
                  className="
                    mt-10
                    flex
                    items-center
                    gap-2
                    text-[8px]
                    uppercase
                    tracking-[0.25em]
                    text-[#6CE0E5]/40
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#6CE0E5]
                      shadow-[0_0_8px_rgba(108,224,229,.6)]
                    "
                  />

                  System active
                </div>
              </div>

              {/* =================================================
                  MOBILE NUMBERS
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  lg:hidden
                "
              >
                {story.map((item, index) => {
                  const start = index / story.length;
                  const end = (index + 1) / story.length;

                  const opacity = useTransform(
                    progress,
                    [
                      start,
                      start + 0.02,
                      end - 0.02,
                      end,
                    ],
                    [0.3, 1, 1, 0.3],
                  );

                  const scale = useTransform(
                    progress,
                    [
                      start,
                      start + 0.04,
                      end - 0.04,
                      end,
                    ],
                    [0.9, 1, 1, 0.9],
                  );

                  return (
                    <motion.div
                      key={item.id}
                      style={{
                        opacity,
                        scale,
                      }}
                      className="
                        flex
                        h-8
                        min-w-8
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#6CE0E5]/[0.13]
                        bg-[#6CE0E5]/[0.025]
                        px-2
                        font-mono
                        text-[8px]
                        text-[#6CE0E5]/65
                      "
                    >
                      {item.number}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1320px]
          px-5
          pb-20
          pt-6

          sm:px-7

          lg:px-12
          lg:pb-28
        "
      >
        <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-[#6CE0E5]/10
            pt-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-[#A8CDD1]/35
            "
          >
            Physical → Digital → Action
          </span>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-[#A8CDD1]/35
            "
          >
            System active
          </span>
        </div>
      </div>
    </section>
  );
}