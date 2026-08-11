import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface SiteLoaderProps {
  onComplete: () => void;
}

const LOADING_TIME = 2600;

const loadingMessages = [
  "Подготавливаем пространство",
  "Настраиваем атмосферу",
  "Загружаем систему",
  "Почти готово",
];

export default function SiteLoader({
  onComplete,
}: SiteLoaderProps) {
  const reduceMotion = useReducedMotion();

  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();

    let frame = 0;
    let finishTimeout = 0;
    let completeTimeout = 0;

    const update = (time: number) => {
      const elapsed = time - start;
      const raw = Math.min(elapsed / LOADING_TIME, 1);

      const eased = 1 - Math.pow(1 - raw, 3);

      setProgress(eased * 100);

      setMessageIndex(
        Math.min(
          Math.floor(eased * loadingMessages.length),
          loadingMessages.length - 1,
        ),
      );

      if (raw < 1) {
        frame = requestAnimationFrame(update);
        return;
      }

      finishTimeout = window.setTimeout(() => {
        setFinished(true);

        completeTimeout = window.setTimeout(() => {
          onComplete();
        }, 900);
      }, 250);
    };

    frame = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(finishTimeout);
      window.clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  const percentage = Math.round(progress);

  /* =====================================================
     FINAL TRANSITION
  ===================================================== */

  if (finished) {
    return (
      <motion.div
        initial={{
          opacity: 1,
          scale: 1,
        }}
        animate={{
          opacity: 0,
          scale: reduceMotion ? 1 : 1.04,
        }}
        transition={{
          duration: reduceMotion ? 0.2 : 0.9,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          bg-[#F2F7F6]
        "
      >
        <span
          className="
            text-[18px]
            font-light
            uppercase
            tracking-[0.45em]
            text-[#173F49]
          "
        >
          MIMISU
        </span>
      </motion.div>
    );
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        overflow-hidden
        bg-[#F2F7F6]
        text-[#173F49]
      "
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(23,63,73,.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(23,63,73,.045) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Ambient light */}

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.55, 0.35],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[420px]
          w-[420px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#BFEFEA]/35
          blur-[110px]
        "
      />

      {/* Decorative circles */}

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-[18%]
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-[#2F6873]/[0.07]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          top-[27%]
          h-[210px]
          w-[210px]
          rounded-full
          border
          border-[#2F6873]/[0.06]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-32
          h-[380px]
          w-[380px]
          rounded-full
          bg-white/60
          blur-[100px]
        "
      />

      {/* =================================================
          TOP BAR
      ================================================= */}

      <div
        className="
          absolute
          left-5
          right-5
          top-5
          flex
          items-center
          justify-between

          sm:left-8
          sm:right-8
          sm:top-8
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#2F6873]
              shadow-[0_0_10px_rgba(47,104,115,.25)]
            "
          />

          <span
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#52757B]
            "
          >
            Добро пожаловать
          </span>
        </div>

        <span
          className="
            font-mono
            text-[8px]
            tracking-[0.25em]
            text-[#6C898D]
          "
        >
          01 / 01
        </span>
      </div>

      {/* =================================================
          CENTER
      ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          flex
          w-full
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          px-6
        "
      >
        {/* =================================================
            WATER OBJECT
        ================================================= */}

        <div
          className="
            relative
            flex
            h-[170px]
            w-[170px]
            items-center
            justify-center

            sm:h-[190px]
            sm:w-[190px]
          "
        >
          {/* Outer circle */}

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: 360,
                  }
            }
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              inset-0
              rounded-full
              border
              border-[#2F6873]/[0.10]
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-0
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-[#2F6873]/70
              "
            />
          </motion.div>

          {/* Inner circle */}

          <div
            className="
              absolute
              inset-[15px]
              rounded-full
              border
              border-[#2F6873]/[0.08]
            "
          />

          {/* Water container */}

          <div
            className="
              absolute
              inset-[31px]
              overflow-hidden
              rounded-full
              border
              border-[#2F6873]/[0.12]
              bg-white/45
              shadow-[0_15px_45px_rgba(23,63,73,.08)]
            "
          >
            {/* Water */}

            <motion.div
              className="
                absolute
                bottom-0
                left-0
                right-0
                bg-[#9DDCD9]/30
              "
              animate={{
                height: `${progress}%`,
              }}
              transition={{
                duration: 0.18,
                ease: "linear",
              }}
            />

            {/* Wave */}

            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : {
                      x: ["-12%", "12%", "-12%"],
                    }
              }
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[-15%]
                right-[-15%]
                h-5
                rounded-[50%]
                border-t
                border-[#2F6873]/20
              "
              style={{
                bottom: `calc(${progress}% - 8px)`,
              }}
            />

            {/* Shine */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-br
                from-white/50
                via-transparent
                to-transparent
              "
            />
          </div>

          {/* Percentage */}

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
                text-[30px]
                font-light
                leading-none
                tracking-[-0.05em]
                text-[#173F49]
              "
            >
              {percentage}
            </span>

            <span
              className="
                mt-2
                text-[7px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[#63858A]
              "
            >
              загрузка
            </span>
          </div>
        </div>

        {/* =================================================
            BRAND
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: reduceMotion ? 0.2 : 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mt-9
            text-center
          "
        >
          <div
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.5em]
              text-[#63858A]
            "
          >
            Чистая вода
          </div>

          <div
            className="
              mt-3
              text-[25px]
              font-light
              uppercase
              tracking-[0.35em]
              text-[#173F49]
            "
          >
            MIMISU
          </div>
        </motion.div>

        {/* =================================================
            STATUS
        ================================================= */}

        <div
          className="
            mt-7
            flex
            min-h-[20px]
            items-center
            gap-2.5
          "
        >
          <motion.span
            animate={
              reduceMotion
                ? undefined
                : {
                    opacity: [0.25, 1, 0.25],
                  }
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-[#2F6873]
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
            transition={{
              duration: 0.3,
            }}
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-[#63858A]
            "
          >
            {percentage >= 100
              ? "Готово"
              : loadingMessages[messageIndex]}
          </motion.span>
        </div>
      </div>

      {/* =================================================
          BOTTOM
      ================================================= */}

      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          flex
          items-end
          justify-between

          sm:bottom-8
          sm:left-8
          sm:right-8
        "
      >
        <div
          className="
            text-[7px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#779397]
          "
        >
          Природный источник
        </div>

        <div
          className="
            text-[7px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-[#779397]
          "
        >
          2026
        </div>
      </div>

      {/* =================================================
          SIDE PROGRESS
      ================================================= */}

      <div
        className="
          absolute
          right-5
          top-1/2
          hidden
          h-[110px]
          w-px
          -translate-y-1/2
          bg-[#2F6873]/[0.10]

          sm:right-8
          sm:block
        "
      >
        <motion.div
          className="
            absolute
            bottom-0
            left-0
            w-full
            bg-[#2F6873]/60
          "
          style={{
            height: `${progress}%`,
          }}
        />
      </div>

      <div
        className="
          absolute
          right-[20px]
          top-1/2
          hidden
          -translate-y-1/2
          -rotate-90
          text-[6px]
          font-medium
          uppercase
          tracking-[0.35em]
          text-[#779397]

          sm:block
        "
      >
        Загрузка
      </div>
    </div>
  );
}
