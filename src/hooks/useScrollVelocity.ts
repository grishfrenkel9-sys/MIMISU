import {
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useEffect } from "react";

export default function useScrollVelocity() {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const update = () => {
      scrollY.set(window.scrollY);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", update);
    };
  }, [scrollY]);

  const velocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(velocity, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  const movement = useTransform(
    smoothVelocity,
    [-2500, 0, 2500],
    [-18, 0, 18]
  );

  const rotation = useTransform(
    smoothVelocity,
    [-2500, 0, 2500],
    [-1.5, 0, 1.5]
  );

  return {
    scrollY,
    velocity: smoothVelocity,
    movement,
    rotation,
  };
}
