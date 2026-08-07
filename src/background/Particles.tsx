import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 12000;

export default function Particles() {
  const points = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const { geometry, basePositions, particleTexture } =
    useMemo(() => {
      const positions = new Float32Array(COUNT * 3);
      const base = new Float32Array(COUNT * 3);

      for (let i = 0; i < COUNT; i++) {
        const x = (Math.random() - 0.5) * 90;
        const y = (Math.random() - 0.5) * 55;
        const z = (Math.random() - 0.5) * 55;

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        base[i * 3] = x;
        base[i * 3 + 1] = y;
        base[i * 3 + 2] = z;
      }

      const geometry = new THREE.BufferGeometry();

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      // Создаём круглую текстуру для частиц
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;

      const context = canvas.getContext("2d");

      if (context) {
        const center = 32;
        const radius = 30;

        const gradient = context.createRadialGradient(
          center,
          center,
          0,
          center,
          center,
          radius
        );

        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(0.55, "rgba(255,255,255,0.9)");
        gradient.addColorStop(0.8, "rgba(255,255,255,0.35)");
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        context.fillStyle = gradient;

        context.beginPath();
        context.arc(
          center,
          center,
          radius,
          0,
          Math.PI * 2
        );

        context.fill();
      }

      const particleTexture =
        new THREE.CanvasTexture(canvas);

      particleTexture.needsUpdate = true;

      return {
        geometry,
        basePositions: base,
        particleTexture,
      };
    }, []);

  useFrame(({ clock }) => {
    if (!points.current) return;

    const t = clock.elapsedTime;

    const positionAttribute =
      points.current.geometry.attributes.position;

    const positions =
      positionAttribute.array as Float32Array;

    // Положение мыши
    const mx = mouse.x * 18;
    const my = mouse.y * 10;

    for (let i = 0; i < COUNT; i++) {
      const index = i * 3;

      const ox = basePositions[index];
      const oy = basePositions[index + 1];
      const oz = basePositions[index + 2];

      let targetX = ox;
      let targetY = oy;
      let targetZ = oz;

      // -----------------------------------------
      // Плавное движение
      // -----------------------------------------

      targetX +=
        Math.sin(
          t * 0.35 +
            i * 0.013 +
            oz * 0.03
        ) * 0.12;

      targetY +=
        Math.cos(
          t * 0.3 +
            i * 0.017 +
            ox * 0.025
        ) * 0.12;

      targetZ +=
        Math.sin(
          t * 0.25 +
            i * 0.011 +
            oy * 0.02
        ) * 0.08;

      // -----------------------------------------
      // Волна
      // -----------------------------------------

      const wave = Math.sin(
        ox * 0.055 +
          oy * 0.035 +
          t * 0.7
      );

      targetY += wave * 0.45;

      // -----------------------------------------
      // Реакция на мышь
      // РАБОТАЕТ ПО ВСЕМУ ЭКРАНУ
      // -----------------------------------------

      const dx = targetX - mx;
      const dy = targetY - my;

      const distance = Math.sqrt(
        dx * dx + dy * dy
      );

      const radius = 10;

      if (distance < radius) {
        const strength =
          Math.pow(
            1 - distance / radius,
            2
          );

        const nx =
          dx / (distance + 0.001);

        const ny =
          dy / (distance + 0.001);

        // Отталкивание
        targetX +=
          nx * strength * 3;

        targetY +=
          ny * strength * 3;

        // Закручивание
        targetX +=
          -ny * strength * 1.6;

        targetY +=
          nx * strength * 1.6;

        // Небольшое движение в глубину
        targetZ +=
          strength * 2;
      }

      // -----------------------------------------
      // Плавность
      // -----------------------------------------

      positions[index] +=
        (targetX - positions[index]) * 0.04;

      positions[index + 1] +=
        (targetY - positions[index + 1]) * 0.04;

      positions[index + 2] +=
        (targetZ - positions[index + 2]) * 0.04;
    }

    positionAttribute.needsUpdate = true;

    // -----------------------------------------
    // Поворот облака
    // -----------------------------------------

    points.current.rotation.y =
      THREE.MathUtils.lerp(
        points.current.rotation.y,
        mouse.x * 0.12,
        0.035
      );

    points.current.rotation.x =
      THREE.MathUtils.lerp(
        points.current.rotation.x,
        -mouse.y * 0.1,
        0.035
      );

    points.current.rotation.z =
      Math.sin(t * 0.08) * 0.025;

    // -----------------------------------------
    // Parallax
    // -----------------------------------------

    points.current.position.x =
      THREE.MathUtils.lerp(
        points.current.position.x,
        mouse.x * 2,
        0.025
      );

    points.current.position.y =
      THREE.MathUtils.lerp(
        points.current.position.y,
        mouse.y * 1.5,
        0.025
      );
  });

  return (
    <points
      ref={points}
      geometry={geometry}
    >
      <pointsMaterial
        size={0.12}
        color="#ffffff"
        transparent
        opacity={0.8}
        depthWrite={false}
        sizeAttenuation
        alphaMap={particleTexture}
        alphaTest={0.01}
      />
    </points>
  );
}
