import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import * as THREE from "three";

interface Props {
  children: React.ReactNode;
}

export default function BottleScroll({ children }: Props) {
  const group = useRef<THREE.Group>(null);

  const { scrollYProgress } = useScroll();

  useFrame(() => {
    if (!group.current) return;

    const progress = scrollYProgress.get();

    // Плавность
    const targetY = THREE.MathUtils.lerp(
      1.5,
      -2,
      progress
    );

    const targetX = THREE.MathUtils.lerp(
      0,
      2.2,
      progress
    );

    const targetScale = THREE.MathUtils.lerp(
      1,
      0.65,
      progress
    );

    // Положение
    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      targetX,
      0.06
    );

    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      targetY,
      0.06
    );

    // Масштаб
    const scale = THREE.MathUtils.lerp(
      group.current.scale.x,
      targetScale,
      0.06
    );

    group.current.scale.setScalar(scale);

    // Вращение
    group.current.rotation.y += 0.003;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      progress * 0.25,
      0.05
    );
  });

  return (
    <group ref={group}>
      {children}
    </group>
  );
}
