import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SiteLoaderProps {
  onComplete: () => void;
}

const LOADING_TIME = 3000;

const loadingMessages = [
  "Подготавливаем пространство",
  "Настраиваем атмосферу",
  "Загружаем чистую воду",
  "Почти готово",
];

export default function SiteLoader({
  onComplete,
}: SiteLoaderProps) {
  const [progress, setProgress] =
    useState(0);

  const [finished, setFinished] =
    useState(false);

  const [messageIndex, setMessageIndex] =
    useState(0);

  useEffect(() => {
    const start = performance.now();

    let frame = 0;

    const update = (time: number) => {
      const elapsed =
        time - start;

      const raw =
        elapsed / LOADING_TIME;

      const value =
        Math.min(raw, 1);

      // Плавный прогресс
      const eased =
        1 -
        Math.pow(1 - value, 3);

      setProgress(eased * 100);

      setMessageIndex(
        Math.min(
          Math.floor(
            eased *
              loadingMessages.length
          ),
          loadingMessages.length - 1
        )
      );

      if (value < 1) {
        frame =
          requestAnimationFrame(
            update
          );
      } else {
        setTimeout(() => {
          setFinished(true);

          setTimeout(() => {
            onComplete();
          }, 1200);
        }, 300);
      }
    };

    frame =
      requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [onComplete]);

  // =========================================
  // FINAL TRANSITION
  // =========================================

  if (finished) {
    return (
      <motion.div
        initial={{
          scale: 1,
          opacity: 1,
        }}
        animate={{
          scale: 5,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-[#040404]
        "
      >
        <div
          className="
            text-[10px]
            uppercase
            tracking-[0.5em]
            text-white/30
          "
        >
          MIMISU
        </div>
      </motion.div>
    );
  }

  const percentage =
    Math.round(progress);

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        bg-[#040404]
        text-white
      "
    >
      {/* =================================
          BACKGROUND GRID
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            `
            linear-gradient(
              rgba(255,255,255,.5) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.5) 1px,
              transparent 1px
            )
          `,
          backgroundSize:
            "80px 80px",
        }}
      />

      {/* =================================
          AMBIENT GLOW
      ================================= */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [
            0.015,
            0.035,
            0.015,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300
          blur-[160px]
        "
      />

      {/* =================================
          TOP
      ================================= */}

      <div
        className="
          absolute
          left-8
          right-8
          top-8
          flex
          items-center
          justify-between
        "
      >
        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.45em]
            text-white/30
          "
        >
          ЧИСТАЯ ВОДА
        </span>

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.45em]
            text-white/30
          "
        >
          01 / 01
        </span>
      </div>

      {/* =================================
          CENTER
      ================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
        "
      >
        {/* =================================
            WATER CIRCLE
        ================================= */}

        <div
          className="
            relative
            flex
            h-[180px]
            w-[180px]
            items-center
            justify-center
          "
        >
          {/* OUTER RING */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-white/10
              border-t-cyan-200/60
            "
          />

          {/* SECOND RING */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-[12px]
              rounded-full
              border
              border-white/[0.05]
              border-b-cyan-200/40
            "
          />

          {/* WATER */}

          <div
            className="
              absolute
              inset-[30px]
              overflow-hidden
              rounded-full
              border
              border-white/10
              bg-cyan-200/[0.015]
            "
          >
            {/* FILL */}

            <motion.div
              className="
                absolute
                bottom-0
                left-0
                right-0
                bg-cyan-200/[0.10]
              "
              animate={{
                height: `${progress}%`,
              }}
              transition={{
                duration: 0.2,
                ease: "linear",
              }}
            />

            {/* WAVE */}

            <motion.div
              animate={{
                x: [
                  "-15%",
                  "15%",
                  "-15%",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[-15%]
                right-[-15%]
                h-[20px]
                rounded-[50%]
                border-t
                border-cyan-100/20
              "
              style={{
                bottom:
                  `calc(${progress}% - 8px)`,
              }}
            />
          </div>

          {/* NUMBER */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
            "
          >
            <span
              className="
                text-3xl
                font-light
                tracking-tight
              "
            >
              {percentage}
            </span>

            <span
              className="
                mt-1
                text-[7px]
                uppercase
                tracking-[0.35em]
                text-white/30
              "
            >
              процентов
            </span>
          </div>
        </div>

        {/* =================================
            BRAND
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            mt-10
            text-center
          "
        >
          <div
            className="
              text-[9px]
              uppercase
              tracking-[0.6em]
              text-white/30
            "
          >
            ГОРНАЯ ВОДА
          </div>

          <div
            className="
              mt-3
              text-2xl
              font-light
              tracking-[0.25em]
            "
          >
            MIMISU
          </div>
        </motion.div>

        {/* =================================
            STATUS
        ================================= */}

        <div
          className="
            mt-8
            flex
            items-center
            gap-3
          "
        >
          <motion.div
            animate={{
              opacity: [
                0.2,
                1,
                0.2,
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              h-1
              w-1
              rounded-full
              bg-cyan-200
            "
          />

          <motion.span
            key={messageIndex}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              text-[8px]
              uppercase
              tracking-[0.4em]
              text-white/25
            "
          >
            {percentage >= 100
              ? "ГОТОВО"
              : loadingMessages[
                  messageIndex
                ]}
          </motion.span>
        </div>
      </div>

      {/* =================================
          BOTTOM LEFT
      ================================= */}

      <div
        className="
          absolute
          bottom-8
          left-8
          text-[8px]
          uppercase
          tracking-[0.4em]
          text-white/20
        "
      >
        ПРИРОДНЫЙ ИСТОЧНИК
      </div>

      {/* =================================
          BOTTOM RIGHT
      ================================= */}

      <div
        className="
          absolute
          bottom-8
          right-8
          text-[8px]
          uppercase
          tracking-[0.4em]
          text-white/20
        "
      >
        2026
      </div>

      {/* =================================
          SIDE PROGRESS
      ================================= */}

      <div
        className="
          absolute
          bottom-1/2
          right-8
          h-[120px]
          w-px
          translate-y-1/2
          bg-white/10
        "
      >
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            bg-cyan-200/70
          "
          style={{
            height: `${progress}%`,
          }}
        />
      </div>

      <div
        className="
          absolute
          bottom-1/2
          right-[23px]
          translate-y-1/2
          -rotate-90
          text-[7px]
          uppercase
          tracking-[0.4em]
          text-white/20
        "
      >
        ЗАГРУЗКА
      </div>
    </div>
  );
}