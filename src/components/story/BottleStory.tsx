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

import { useLanguage } from "../../context/LanguageContext";

export default function BottleStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.25,
  });

  const glowY = useTransform(progress, [0, 1], [-40, 40]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="
        relative
        bg-[#062A32]
        text-white
      "
    >
      {/* AMBIENT LIGHT */}

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
            h-[240px]
            w-[240px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#6CE0E5]/[0.035]
            blur-[80px]

            sm:h-[480px]
            sm:w-[480px]
            sm:blur-[110px]

            lg:h-[620px]
            lg:w-[620px]
            lg:blur-[150px]
          "
        />
      )}

      {/* GRID */}

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
          backgroundSize: "70px 70px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)",
        }}
      />

      {/* INTRO */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1320px]
          px-5
          pb-8
          pt-20

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
          className="w-full max-w-[760px]"
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
              tracking-[0.26em]
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

            <span>{t.story.label}</span>

            <span className="h-px w-6 bg-[#6CE0E5]/30 sm:w-8" />
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-6
              max-w-[700px]
              text-[clamp(2.5rem,11vw,6.5rem)]
              font-light
              leading-[0.94]
              tracking-[-0.065em]
              text-[#F0FFFF]

              sm:mt-6
              sm:text-[clamp(2.7rem,8vw,6.5rem)]
              sm:leading-[0.92]
            "
          >
            {t.story.title}
            <br />

            <span className="text-[#A8CDD1]/45">
              {t.story.titleAccent}
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-7
              max-w-[500px]
              text-[13px]
              leading-7
              text-[#A8CDD1]/65

              sm:mt-7
              sm:text-base
              sm:leading-8
            "
          >
            {t.story.description}
          </p>
        </motion.div>
      </div>

      {/* STORY ENGINE */}

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
            min-h-[500vh]
          "
        >
          {/* STICKY CONTENT */}

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
                gap-5
                py-5

                sm:gap-10
                sm:py-12

                lg:grid-cols-[72px_minmax(0,1fr)_minmax(280px,0.62fr)]
                lg:items-center
                lg:gap-12
                lg:py-16
              "
            >
              {/* DESKTOP NUMBERS */}

              <div className="hidden lg:block">
                <StoryNumbers
                  progress={progress}
                  mobile={false}
                />
              </div>

              {/* STORY CARD */}

              <div
                className="
                  relative
                  min-h-[410px]
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
                  story={t.story.steps}
                  progress={progress}
                  reduceMotion={reduceMotion}
                />

                {/* INNER FRAME */}

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

                {/* SIGNAL */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    left-4
                    top-4
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#6CE0E5]
                    shadow-[0_0_12px_rgba(108,224,229,.65)]

                    sm:left-6
                    sm:top-6
                  "
                />

                {/* DETAIL */}

                <div
                  aria-hidden
                  className="
                    pointer-events-none
                    absolute
                    bottom-4
                    right-4
                    h-px
                    w-8
                    bg-[#6CE0E5]/20

                    sm:bottom-7
                    sm:right-7
                    sm:w-12
                  "
                />
              </div>

              {/* DESKTOP DESCRIPTION */}

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
                  {t.story.physicalDigital}
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
                  {t.story.sideDescription}
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

                  {t.story.systemActive}
                </div>
              </div>

              {/* MOBILE NUMBERS */}

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

      {/* FOOTER */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1320px]
          px-5
          pb-14
          pt-4

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
            {t.story.footerFlow}
          </span>

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.22em]
              text-[#A8CDD1]/35
            "
          >
            {t.story.systemActive}
          </span>
        </div>
      </div>

      {/* TRANSITION */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-20
          bg-gradient-to-b
          from-transparent
          to-[#052830]/30

          sm:h-24
        "
      />
    </section>
  );
}