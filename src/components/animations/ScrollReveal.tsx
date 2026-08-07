import { motion, type Variants } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;

  direction?:
    | "up"
    | "down"
    | "left"
    | "right"
    | "blur";

  distance?: number;
  duration?: number;
  delay?: number;
  amount?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  direction = "up",
  distance = 40,
  duration = 0.9,
  delay = 0,
  amount = 0.25,
  className,
}: ScrollRevealProps) {
  const hiddenState = {
    opacity: 0,

    x:
      direction === "left"
        ? -distance
        : direction === "right"
          ? distance
          : 0,

    y:
      direction === "up"
        ? distance
        : direction === "down"
          ? -distance
          : 0,

    scale:
      direction === "blur"
        ? 0.94
        : 1,

    filter:
      direction === "blur"
        ? "blur(18px)"
        : "blur(0px)",
  };

  const visibleState = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  };

  const variants: Variants = {
    hidden: hiddenState,
    visible: visibleState,
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
