import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);

  const x = useSpring(mx, {
    stiffness: 70,
    damping: 18,
  });

  const y = useSpring(my, {
    stiffness: 70,
    damping: 18,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mx.set(e.clientX - 250);
      my.set(e.clientY - 250);
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
absolute
h-[800px]
w-[800px]
rounded-full
bg-white/5
blur-[130px]
pointer-events-none
"
    />
  );
}
