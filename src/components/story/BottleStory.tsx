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
      id="story"
      ref={storyRef}
      className="
        relative
        overflow-hidden
        bg-[#040404]
        py-24
        text-white
        md:py-32
        lg:py-36
      "
    >
      {/* =========================================
          AMBIENT LIGHT
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
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-red-500/[0.025]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[40%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/[0.018]
          blur-[150px]
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
          opacity-[0.012]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "100px 100px",
        }}
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
          md:px-10
          xl:px-14
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
          {/* Label */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-red-400/70
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-red-400
                shadow-[0_0_12px_rgba(248,113,113,.7)]
              "
            />

            О бренде

            <span className="h-px w-10 bg-red-400/25" />
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-[clamp(2.8rem,7vw,6rem)]
              font-light
              leading-[0.9]
              tracking-[-0.055em]
              text-white
            "
          >
            Как бутылка
            <br />

            <span className="text-white/30">
              становится контактом
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-white/35
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
              via-white/[0.08]
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
          BOTTOM FADE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#040404]
          to-transparent
        "
      />
    </section>
  );
}