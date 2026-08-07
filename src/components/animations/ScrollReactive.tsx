import {
  motion,
  type MotionValue,
} from "framer-motion";

interface ScrollReactiveProps {
  children: React.ReactNode;

  movement?: MotionValue<number>;
  rotation?: MotionValue<number>;

  className?: string;
}

export default function ScrollReactive({
  children,
  movement,
  rotation,
  className,
}: ScrollReactiveProps) {
  return (
    <motion.div
      className={className}
      style={{
        y: movement,
        rotateZ: rotation,
      }}
    >
      {children}
    </motion.div>
  );
}
