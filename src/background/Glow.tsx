import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Glow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 40,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 40,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 350);
      mouseY.set(e.clientY - 350);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
      pointer-events-none
      absolute
      z-0
      h-[700px]
      w-[700px]
      rounded-full
      bg-blue-500/10
      blur-[180px]
      "
    />
  );
}
