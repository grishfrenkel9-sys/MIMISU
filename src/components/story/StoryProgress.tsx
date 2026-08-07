import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function StoryProgress() {
  const { scrollYProgress } = useScroll();

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.5,
  });

  const circumference = 2 * Math.PI * 30;

  const offset = useTransform(
    progress,
    [0, 1],
    [circumference, 0]
  );

  const rotation = useTransform(
    progress,
    [0, 1],
    [0, 360]
  );

  const glowOpacity = useTransform(
    progress,
    [0, 0.15, 0.5, 0.85, 1],
    [0.35, 0.6, 0.7, 0.6, 0.35]
  );

  const coreScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.9, 1.15, 0.9]
  );

  const ringScale = useTransform(
    progress,
    [0, 0.5, 1],
    [0.85, 1.15, 0.85]
  );

  return (
    <motion.div
      className="
        pointer-events-none
        fixed
        left-6
        top-1/2
        z-[100]
        hidden
        h-20
        w-20
        -translate-y-1/2
        lg:block
      "
    >
      {/* =========================
          GLOW
      ========================= */}

      <motion.div
        className="
          absolute
          inset-0
          rounded-full
          bg-cyan-400/[0.07]
          blur-2xl
        "
        style={{
          opacity: glowOpacity,
        }}
      />

      {/* =========================
          SVG
      ========================= */}

      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        className="
          absolute
          inset-0
          -rotate-90
        "
      >
        {/* Background */}

        <circle
          cx="40"
          cy="40"
          r="30"
          fill="none"
          stroke="rgba(255,255,255,.08)"
          strokeWidth="1"
        />

        {/* Progress */}

        <motion.circle
          cx="40"
          cy="40"
          r="30"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          style={{
            strokeDashoffset: offset,
            filter:
              "drop-shadow(0 0 7px rgba(34,211,238,.8))",
          }}
        />
      </svg>

      {/* =========================
          ORBIT
      ========================= */}

      <motion.div
        className="absolute inset-0"
        style={{
          rotate: rotation,
        }}
      >
        <div
          className="
            absolute
            left-1/2
            top-[7px]
            h-1.5
            w-1.5
            -translate-x-1/2
            rounded-full
            bg-cyan-300
            shadow-[0_0_12px_rgba(103,232,249,.9)]
          "
        />
      </motion.div>

      {/* =========================
          CORE
      ========================= */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-3
          w-3
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300
        "
        style={{
          scale: coreScale,
          boxShadow:
            "0 0 15px rgba(34,211,238,.9), 0 0 35px rgba(34,211,238,.35)",
        }}
      />

      {/* =========================
          INNER RING
      ========================= */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-cyan-300/20
        "
        style={{
          scale: ringScale,
        }}
      />
    </motion.div>
  );
}
