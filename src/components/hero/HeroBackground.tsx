import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

import Aurora from "../../background/Aurora";
import MouseGlow from "../../background/MouseGlow";

export default function HeroBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations for mouse tracking
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Animated base with gradient shift */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "linear-gradient(180deg, #040506 0%, #050a0f 50%, #040506 100%)",
            "linear-gradient(180deg, #040506 0%, #0a0515 50%, #040506 100%)",
            "linear-gradient(180deg, #040506 0%, #050a0f 50%, #040506 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Primary cyan blob - follows mouse smoothly */}
      <motion.div
        className="
          absolute
          right-[-10%]
          top-1/2
          h-[900px]
          w-[900px]
          -translate-y-1/2
          rounded-full
          bg-cyan-400/15
          blur-[180px]
        "
        style={{
          x: useTransform(smoothMouseX, (v) => v * 0.4),
          y: useTransform(smoothMouseY, (v) => v * 0.4),
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          scale: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Secondary sky glow - moves opposite direction */}
      <motion.div
        className="
          absolute
          right-[20%]
          top-[40%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-sky-500/10
          blur-[140px]
        "
        style={{
          x: useTransform(smoothMouseX, (v) => v * -0.25),
          y: useTransform(smoothMouseY, (v) => v * -0.25),
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Tertiary accent blob - subtle pulse */}
      <motion.div
        className="
          absolute
          left-[15%]
          top-[60%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-500/8
          blur-[160px]
        "
        style={{
          x: useTransform(smoothMouseX, (v) => v * 0.3),
          y: useTransform(smoothMouseY, (v) => v * 0.3),
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Animated light vignette */}
      <motion.div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.25)_70%,rgba(0,0,0,.65)_100%)]
        "
        animate={{
          opacity: [0.7, 0.85, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top fade with subtle animation */}
      <motion.div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-black
          to-transparent
        "
        animate={{
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom fade with animated gradient */}
      <motion.div
        className="
          absolute
          inset-x-0
          bottom-0
          h-64
          bg-gradient-to-t
          from-black
          via-black/70
          to-transparent
        "
        animate={{
          opacity: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Aurora background with mouse interaction */}
      <Aurora />
<MouseGlow />
    </>
  );
}
