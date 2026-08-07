import { motion } from "framer-motion";

const smallDrops = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${5 + ((i * 71) % 90)}%`,
  top: `${5 + ((i * 43) % 88)}%`,
  size: 8 + (i % 4) * 4,
  duration: 14 + (i % 5) * 2,
  delay: -(i % 6) * 2,
}));

const largeDrops = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  left: `${8 + ((i * 83) % 84)}%`,
  top: `${8 + ((i * 57) % 80)}%`,
  size: 18 + (i % 3) * 7,
  duration: 18 + (i % 4) * 3,
  delay: -(i % 5) * 3,
}));

export default function LiveWaterBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
        bg-[#020708]
      "
      aria-hidden="true"
    >
      {/* =========================================
          BASE
      ========================================= */}

      <div className="absolute inset-0 bg-[#020708]" />

      {/* =========================================
          MOVING LIGHT 1
      ========================================= */}

      <motion.div
        animate={{
          x: ["-5%", "8%", "-5%"],
          y: ["-3%", "5%", "-3%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-[15%]
          -top-[20%]
          h-[65vh]
          w-[65vh]
          rounded-full
          bg-cyan-400/[0.055]
          blur-[110px]
        "
      />

      {/* =========================================
          MOVING LIGHT 2
      ========================================= */}

      <motion.div
        animate={{
          x: ["5%", "-8%", "5%"],
          y: ["5%", "-5%", "5%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-[18%]
          top-[10%]
          h-[60vh]
          w-[60vh]
          rounded-full
          bg-blue-500/[0.045]
          blur-[120px]
        "
      />

      {/* =========================================
          MOVING LIGHT 3
      ========================================= */}

      <motion.div
        animate={{
          x: ["-5%", "10%", "-5%"],
          y: ["5%", "-8%", "5%"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-25%]
          left-[20%]
          h-[55vh]
          w-[55vh]
          rounded-full
          bg-sky-300/[0.035]
          blur-[120px]
        "
      />

      {/* =========================================
          SMALL DROPS
      ========================================= */}

      <div className="absolute inset-0">
        {smallDrops.map((drop) => (
          <div
            key={drop.id}
            className="water-drop water-drop-small"
            style={
              {
                left: drop.left,
                top: drop.top,
                width: drop.size,
                height: drop.size * 1.25,
                animationDuration: `${drop.duration}s`,
                animationDelay: `${drop.delay}s`,
              } as React.CSSProperties
            }
          >
            <span className="water-drop-highlight" />
          </div>
        ))}
      </div>

      {/* =========================================
          LARGE DROPS
      ========================================= */}

      <div className="absolute inset-0">
        {largeDrops.map((drop) => (
          <div
            key={drop.id}
            className="water-drop water-drop-large"
            style={
              {
                left: drop.left,
                top: drop.top,
                width: drop.size,
                height: drop.size * 1.3,
                animationDuration: `${drop.duration}s`,
                animationDelay: `${drop.delay}s`,
              } as React.CSSProperties
            }
          >
            <span className="water-drop-highlight" />
          </div>
        ))}
      </div>

      {/* =========================================
          VERY LIGHT RAIN STREAKS
      ========================================= */}

      <div className="absolute inset-0 opacity-[0.18]">
        <div
          className="rain-streak"
          style={{ left: "18%", animationDelay: "-2s" }}
        />

        <div
          className="rain-streak"
          style={{ left: "42%", animationDelay: "-7s" }}
        />

        <div
          className="rain-streak"
          style={{ left: "67%", animationDelay: "-11s" }}
        />

        <div
          className="rain-streak"
          style={{ left: "84%", animationDelay: "-5s" }}
        />
      </div>

      {/* =========================================
          VIGNETTE
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            circle_at_center,
            transparent_0%,
            rgba(0,8,9,0.12)_45%,
            rgba(0,4,5,0.78)_100%
          )]
        "
      />

      {/* =========================================
          TOP DARKNESS
      ========================================= */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[28vh]
          bg-gradient-to-b
          from-[#020708]
          via-[#020708]/50
          to-transparent
        "
      />

      {/* =========================================
          BOTTOM DARKNESS
      ========================================= */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[24vh]
          bg-gradient-to-t
          from-[#020708]
          via-[#020708]/40
          to-transparent
        "
      />

      {/* =========================================
          CSS
      ========================================= */}

      <style>{`
        .water-drop {
          position: absolute;
          border-radius: 50% 50% 58% 42%;
          transform: rotate(45deg);
          background:
            radial-gradient(
              circle at 30% 25%,
              rgba(255,255,255,0.62) 0%,
              rgba(210,250,255,0.20) 14%,
              rgba(90,210,230,0.08) 45%,
              rgba(30,120,140,0.02) 70%,
              transparent 78%
            );
          border: 1px solid rgba(210,250,255,0.12);
          box-shadow:
            inset 2px 3px 6px rgba(255,255,255,0.10),
            0 0 12px rgba(80,220,235,0.05);
          opacity: 0;
          animation-name: waterDropMove;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }

        .water-drop-small {
          filter: blur(0.2px);
        }

        .water-drop-large {
          filter: blur(0.15px);
        }

        .water-drop-highlight {
          position: absolute;
          left: 20%;
          top: 13%;
          width: 25%;
          height: 16%;
          border-radius: 50%;
          background: rgba(255,255,255,0.65);
          filter: blur(0.6px);
        }

        @keyframes waterDropMove {
          0% {
            opacity: 0;
            transform: translate3d(0, -25px, 0) rotate(45deg);
          }

          15% {
            opacity: 0.18;
          }

          50% {
            opacity: 0.28;
            transform: translate3d(8px, 35px, 0) rotate(45deg);
          }

          80% {
            opacity: 0.16;
            transform: translate3d(-4px, 90px, 0) rotate(45deg);
          }

          100% {
            opacity: 0;
            transform: translate3d(4px, 140px, 0) rotate(45deg);
          }
        }

        .rain-streak {
          position: absolute;
          top: -20%;
          width: 1px;
          height: 100px;
          border-radius: 999px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(190,245,255,0.16),
            transparent
          );
          animation: rainMove 13s linear infinite;
          will-change: transform, opacity;
        }

        @keyframes rainMove {
          0% {
            transform: translate3d(0, -20vh, 0);
            opacity: 0;
          }

          15% {
            opacity: 0.5;
          }

          80% {
            opacity: 0.35;
          }

          100% {
            transform: translate3d(20px, 120vh, 0);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .water-drop,
          .rain-streak {
            animation: none;
            opacity: 0.08;
          }
        }
      `}</style>
    </div>
  );
}