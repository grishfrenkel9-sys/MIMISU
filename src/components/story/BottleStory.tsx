import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import StoryStep from "./StoryStep";
import { story } from "./storyData";

export default function BottleStory() {
  const storyRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });

  const glowY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-100, 0, 100]
  );

  const glowScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1.1, 0.8]
  );

  return (
    <section
      ref={storyRef}
      id="story"
      className="
        relative
        overflow-hidden
        bg-[#07303A]
        text-white
      "
    >
      {/* =========================================
          TOP TRANSITION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-0
          h-[180px]
          bg-gradient-to-b
          from-[#06232B]
          via-[#06303A]
          to-[#07303A]
        "
      />

      {/* =========================================
          OCEAN AMBIENT LIGHT
      ========================================= */}

      <motion.div
        style={{
          y: glowY,
          scale: glowScale,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[15%]
          h-[520px]
          w-[520px]
          -translate-x-1/2
          rounded-full
          bg-[#1596A8]/[0.12]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[38%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0B7888]/[0.10]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[65%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#0E6675]/[0.08]
          blur-[160px]
        "
      />

      {/* =========================================
          SUBTLE GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(102,220,225,.16) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(102,220,225,.16) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "140px 140px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
      />

      {/* =========================================
          HORIZONTAL LINES
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[18%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#63D5DC]/[0.10]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[58%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#63D5DC]/[0.065]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[84%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#63D5DC]/[0.04]
          to-transparent
        "
      />

      {/* =========================================
          DIAGONAL WATER LINES
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-[32%]
          h-px
          w-[120%]
          rotate-[-4deg]
          bg-gradient-to-r
          from-transparent
          via-[#63D5DC]/[0.07]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[10%]
          top-[76%]
          h-px
          w-[120%]
          rotate-[2deg]
          bg-gradient-to-r
          from-transparent
          via-[#63D5DC]/[0.055]
          to-transparent
        "
      />

      {/* =========================================
          ORBIT DETAILS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[14%]
          top-[27%]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-[#63D5DC]/[0.055]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[calc(14%+34px)]
          top-[calc(27%+34px)]
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-[#63D5DC]/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[48%]
          h-[300px]
          w-[300px]
          rounded-full
          border
          border-[#63D5DC]/[0.03]
        "
      />

      {/* =========================================
          MICRO MARKERS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[24%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#6CE0E5]/70
          shadow-[0_0_16px_rgba(99,213,220,.35)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[38%]
          h-1
          w-1
          rounded-full
          bg-[#6CE0E5]/55
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[22%]
          bottom-[24%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#6CE0E5]/40
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[31%]
          top-[52%]
          h-1
          w-1
          rounded-full
          bg-[#8BE6E9]/30
        "
      />

      {/* =========================================
          COORDINATE MARKS
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[24%]
          h-px
          w-8
          bg-[#63D5DC]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-[24%]
          h-8
          w-px
          bg-[#63D5DC]/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          bottom-[22%]
          h-px
          w-8
          bg-[#63D5DC]/22
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[10%]
          bottom-[22%]
          h-8
          w-px
          bg-[#63D5DC]/22
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1250px]
          px-6
          pt-28
          pb-24

          md:px-10
          md:pt-36
          md:pb-28

          xl:px-14
          xl:pt-44
          xl:pb-32
        "
      >
        {/* HEADER */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-20
            max-w-3xl
            md:mb-24
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#74DDE2]/75
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#6CE0E5]
                shadow-[0_0_14px_rgba(108,224,229,.65)]
              "
            />

            О бренде

            <span className="h-px w-10 bg-[#6CE0E5]/30" />
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-6
              text-[clamp(2.8rem,7vw,6rem)]
              font-light
              leading-[0.9]
              tracking-[-0.055em]
              text-[#F0FFFF]
            "
          >
            Как бутылка
            <br />

            <span className="text-[#A8CDD1]/40">
              становится контактом
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-[#A8CDD1]/65
              md:text-base
              md:leading-8
            "
          >
            MIMISU превращает обычный физический объект
            в точку контакта между брендом и человеком.
          </p>
        </motion.div>

        {/* STORY */}

        <div className="relative">
          {/* Vertical line */}

          <div
            className="
              pointer-events-none
              absolute
              left-3
              top-0
              bottom-0
              hidden
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#63D5DC]/[0.12]
              to-transparent
              lg:block
            "
          />

          <div className="space-y-8 md:space-y-12">
            {story.map((item, index) => (
              <motion.div
                key={item.id}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <StoryStep
                  number={item.number}
                  title={item.title}
                  text={item.text}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          BOTTOM TRANSITION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-40
          bg-gradient-to-t
          from-[#06232B]
          to-transparent
        "
      />
    </section>
  );
}