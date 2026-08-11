import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import StoryNumbers from "./StoryNumbers";
import StoryStep from "./StoryStep";
import { story } from "./storyData";

export default function BottleStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
   * Плавный прогресс Story.
   */
  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.25,
  });

  /*
   * Медленное движение фонового свечения.
   */
  const glowY = useTransform(progress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="
        relative
        overflow-hidden
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
            h-[280px]
            w-[280px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#6CE0E5]/[0.035]
            blur-[90px]

            sm:h-[480px]
            sm:w-[480px]
            sm:blur-[110px]

            lg:h-[620px]
            lg:w-[620px]
            lg:blur-[150px]
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
          z-0
          opacity-[0.015]
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
          pb-10
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
              ? false
              : {
                  opacity: 0,
                  y: 16,
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
            duration: reduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            w-full
            max-w-[760px]
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#6CE0E5]/70

              sm:text-[9px]
              sm:tracking-[0.3em]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-[#6CE0E5]
                shadow-[0_0_12px_rgba(108,224,229,.55)]
              "
            />

            <span>О бренде</span>

            <span className="h-px w-7 bg-[#6CE0E5]/30 sm:w-8" />
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-5
              max-w-[700px]
              text-[clamp(2.5rem,11vw,6.5rem)]
              font-light
              leading-[0.92]
              tracking-[-0.065em]
              text-[#F0FFFF]

              sm:mt-6
              sm:text-[clamp(2.7rem,8vw,6.5rem)]
            "
          >
            Как бутылка
            <br />

            <span className="text-[#A8CDD1]/45">
              становится контактом.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-6
              max-w-[500px]
              text-[13px]
              leading-[1.8]
              text-[#A8CDD1]/65

              sm:mt-7
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
        <div
          className="
            relative
            min-h-[250vh]

            sm:min-h-[300vh]

            lg:min-h-[340vh]
          "
        >
          {/* =================================================
              STICKY CONTENT
          ================================================= */}

          <div
            className="
              sticky
              top-[4.5rem]
              flex
              min-h-[calc(100svh-4.5rem)]
              items-center

              sm:top-20
              sm:min-h-[calc(100vh-5rem)]

              lg:top-20
              lg:min-h-[calc(100vh-5rem)]
            "
          >
            <div
              className="
                grid
                w-full
                grid-cols-1
                gap-5
                py-4

                sm:gap-10
                sm:py-12

                lg:grid-cols-[72px_minmax(0,1fr)_minmax(280px,0.62fr)]
                lg:items-center
                lg:gap-12
                lg:py-16
              "
            >
              {/* =================================================
                  DESKTOP NUMBERS
              ================================================= */}

              <div className="hidden lg:block">
                <StoryNumbers
                  progress={progress}
                  mobile={false}
                />
              </div>

              {/* =================================================
                  STORY CARD
              ================================================= */}

              <div
                className="
                  relative
                  min-h-[340px]
                  w-full
                  overflow-hidden
                  rounded-[1.5rem]
                  border
                  border-[#6CE0E5]/[0.07]
                  bg-[#07303A]/[0.42]

                  sm:min-h-[430px]
                  sm:rounded-[2rem]

                  lg:min-h-[560px]
                  lg:rounded-[2.5rem]

                  will-change-transform
                "
              >
                <StoryStep
                  story={story}
                  progress={progress}
                  reduceMotion={reduceMotion}
                />

                {/* =================================================
                    INNER FRAME
                ================================================= */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    inset-2
                    rounded-[1.2rem]
                    border
                    border-[#6CE0E5]/[0.035]

                    sm:inset-4
                    sm:rounded-[1.5rem]

                    lg:inset-6
                    lg:rounded-[2rem]
                  "
                />

                {/* =================================================
                    SIGNAL
                ================================================= */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    left-5
                    top-5
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#6CE0E5]
                    shadow-[0_0_12px_rgba(108,224,229,.65)]

                    sm:left-6
                    sm:top-6
                  "
                />

                {/* =================================================
                    DETAIL
                ================================================= */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    bottom-5
                    right-5
                    h-px
                    w-10
                    bg-[#6CE0E5]/20

                    sm:bottom-7
                    sm:right-7
                    sm:w-12
                  "
                />
              </div>

              {/* =================================================
                  DESCRIPTION
              ================================================= */}

              <div className="hidden lg:block">
                <div className="mb-7 h-px w-14 bg-[#6CE0E5]/30" />

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
                  block
                  w-full
                  lg:hidden
                "
              >
                <StoryNumbers
                  progress={progress}
                  mobile
                />
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
          pb-16
          pt-5

          sm:px-7
          sm:pb-20

          lg:px-12
          lg:pb-28
          lg:pt-6
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