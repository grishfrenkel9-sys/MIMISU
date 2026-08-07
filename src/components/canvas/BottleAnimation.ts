import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { RefObject } from "react";

interface BottleState {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
}

const states: BottleState[] = [
  // HERO
  {
    x: 1.8,
    y: 0,
    z: -1.3,
    rotationX: 0.12,
    rotationY: -0.45,
    rotationZ: 0,
    scale: 0.72,
  },

  // ABOUT
  {
    x: -1.8,
    y: 0.15,
    z: -1,
    rotationX: 0.12,
    rotationY: Math.PI * 1.2,
    rotationZ: -0.08,
    scale: 0.68,
  },

  // STORY
  {
    x: 1.7,
    y: 0,
    z: -1,
    rotationX: -0.1,
    rotationY: Math.PI * 2.1,
    rotationZ: 0.08,
    scale: 0.72,
  },

  // FEATURES
  {
    x: -1.7,
    y: 0.12,
    z: -1,
    rotationX: 0.12,
    rotationY: Math.PI * 3.1,
    rotationZ: -0.06,
    scale: 0.68,
  },

  // CALCULATOR
  {
    x: 5,
    y: 0,
    z: -3,
    rotationX: 0,
    rotationY: Math.PI * 4,
    rotationZ: 0,
    scale: 0,
  },

  // FAQ
  {
    x: -1.35,
    y: 0.1,
    z: -0.9,
    rotationX: -0.12,
    rotationY: Math.PI * 4.7,
    rotationZ: 0.06,
    scale: 0.67,
  },

  // FOOTER
  {
    x: 0,
    y: 0,
    z: -1,
    rotationX: 0,
    rotationY: Math.PI * 5.5,
    rotationZ: 0,
    scale: 0.65,
  },
];

const sectionSelectors = [
  "#hero",
  "#about",
  "#story",
  "#features",
  "#calculator",
  "#faq",
  "footer",
];

export default function useBottleAnimation(
  ref: RefObject<THREE.Group | null>,
  reduceMotion = false
) {
  const progress = useRef(0);
  const targetProgress = useRef(0);

  // Дополнительное состояние анимации
  const jumpVelocity = useRef(0);
  const jumpOffset = useRef(0);

  const lastSection = useRef(0);

  // =========================================
  // SCROLL
  // =========================================

  useEffect(() => {
    const updateScroll = () => {
      const sections = sectionSelectors
        .map((selector) =>
          document.querySelector(selector)
        )
        .filter(
          (section): section is HTMLElement =>
            section instanceof HTMLElement
        );

      if (!sections.length) {
        return;
      }

      const viewportCenter =
        window.scrollY +
        window.innerHeight * 0.5;

      let currentIndex = 0;

      for (
        let i = 0;
        i < sections.length;
        i++
      ) {
        if (
          viewportCenter >=
          sections[i].offsetTop
        ) {
          currentIndex = i;
        }
      }

      if (
        currentIndex !==
        lastSection.current
      ) {
        lastSection.current =
          currentIndex;

        // Маленький импульс
        // при переходе между секциями.
        jumpVelocity.current = 0.8;
      }

      if (
        currentIndex >=
        sections.length - 1
      ) {
        targetProgress.current =
          states.length - 1;

        return;
      }

      const current =
        sections[currentIndex];

      const next =
        sections[currentIndex + 1];

      const distance =
        next.offsetTop -
        current.offsetTop;

      let localProgress = 0;

      if (distance > 0) {
        localProgress =
          (viewportCenter -
            current.offsetTop) /
          distance;
      }

      localProgress =
        THREE.MathUtils.clamp(
          localProgress,
          0,
          1
        );

      targetProgress.current =
        currentIndex +
        localProgress;
    };

    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );

      window.removeEventListener(
        "resize",
        updateScroll
      );
    };
  }, []);

  // =========================================
  // THREE ANIMATION
  // =========================================

  useFrame((state, delta) => {
    if (!ref.current) {
      return;
    }

    const time =
      state.clock.elapsedTime;

    // =======================================
    // REDUCE MOTION
    // =======================================

    if (reduceMotion) {
      const first = states[0];

      ref.current.position.set(
        first.x,
        first.y,
        first.z
      );

      ref.current.rotation.set(
        first.rotationX,
        first.rotationY,
        first.rotationZ
      );

      ref.current.scale.setScalar(
        first.scale
      );

      return;
    }

    // =======================================
    // SMOOTH SECTION PROGRESS
    // =======================================

    progress.current =
      THREE.MathUtils.damp(
        progress.current,
        targetProgress.current,
        5,
        delta
      );

    const safeProgress =
      THREE.MathUtils.clamp(
        progress.current,
        0,
        states.length - 1
      );

    const currentIndex = Math.min(
      Math.floor(safeProgress),
      states.length - 2
    );

    const localProgress =
      safeProgress -
      currentIndex;

    const eased =
      THREE.MathUtils.smootherstep(
        localProgress,
        0,
        1
      );

    const from =
      states[currentIndex];

    const to =
      states[currentIndex + 1];

    // =======================================
    // BASE POSITION
    // =======================================

    const baseX =
      THREE.MathUtils.lerp(
        from.x,
        to.x,
        eased
      );

    const baseY =
      THREE.MathUtils.lerp(
        from.y,
        to.y,
        eased
      );

    const baseZ =
      THREE.MathUtils.lerp(
        from.z,
        to.z,
        eased
      );

    // =======================================
    // FLOATING
    // =======================================

    const floatY =
      Math.sin(time * 1.45) *
      0.055;

    const floatX =
      Math.sin(time * 0.72) *
      0.035;

    const floatZ =
      Math.cos(time * 0.9) *
      0.025;

    // =======================================
    // JUMP
    // =======================================

    jumpVelocity.current =
      THREE.MathUtils.damp(
        jumpVelocity.current,
        0,
        4,
        delta
      );

    jumpOffset.current +=
      jumpVelocity.current *
      delta;

    jumpOffset.current =
      THREE.MathUtils.damp(
        jumpOffset.current,
        0,
        5,
        delta
      );

    // =======================================
    // SMALL ORBITAL MOVEMENT
    // =======================================

    const orbitX =
      Math.sin(time * 0.48) *
      0.045;

    const orbitZ =
      Math.cos(time * 0.55) *
      0.035;

    // =======================================
    // FINAL POSITION
    // =======================================

    const targetX =
      baseX +
      floatX +
      orbitX;

    const targetY =
      baseY +
      floatY +
      jumpOffset.current;

    const targetZ =
      baseZ +
      floatZ +
      orbitZ;

    ref.current.position.x =
      THREE.MathUtils.damp(
        ref.current.position.x,
        targetX,
        6,
        delta
      );

    ref.current.position.y =
      THREE.MathUtils.damp(
        ref.current.position.y,
        targetY,
        6,
        delta
      );

    ref.current.position.z =
      THREE.MathUtils.damp(
        ref.current.position.z,
        targetZ,
        6,
        delta
      );

    // =======================================
    // BASE ROTATION
    // =======================================

    const baseRotationX =
      THREE.MathUtils.lerp(
        from.rotationX,
        to.rotationX,
        eased
      );

    const baseRotationY =
      THREE.MathUtils.lerp(
        from.rotationY,
        to.rotationY,
        eased
      );

    const baseRotationZ =
      THREE.MathUtils.lerp(
        from.rotationZ,
        to.rotationZ,
        eased
      );

    // =======================================
    // CONTINUOUS ROTATION
    // =======================================

    const spinY =
      time * 0.42;

    const spinX =
      Math.sin(time * 0.8) *
      0.10;

    const spinZ =
      Math.sin(time * 0.62) *
      0.07;

    // =======================================
    // EXTRA WOBBLE
    // =======================================

    const wobbleX =
      Math.sin(time * 1.8) *
      0.035;

    const wobbleZ =
      Math.cos(time * 1.55) *
      0.04;

    const targetRotationX =
      baseRotationX +
      spinX +
      wobbleX;

    const targetRotationY =
      baseRotationY +
      spinY;

    const targetRotationZ =
      baseRotationZ +
      spinZ +
      wobbleZ;

    // =======================================
    // APPLY ROTATION
    // =======================================

    ref.current.rotation.x =
      THREE.MathUtils.damp(
        ref.current.rotation.x,
        targetRotationX,
        4.5,
        delta
      );

    ref.current.rotation.y =
      THREE.MathUtils.damp(
        ref.current.rotation.y,
        targetRotationY,
        4.5,
        delta
      );

    ref.current.rotation.z =
      THREE.MathUtils.damp(
        ref.current.rotation.z,
        targetRotationZ,
        4.5,
        delta
      );

    // =======================================
    // SCALE
    // =======================================

    let targetScale = 0;

    if (safeProgress < 3) {
      const index =
        Math.floor(
          safeProgress
        );

      const local =
        safeProgress - index;

      const fromScale =
        states[index].scale;

      const toScale =
        states[
          Math.min(
            index + 1,
            states.length - 1
          )
        ].scale;

      targetScale =
        THREE.MathUtils.lerp(
          fromScale,
          toScale,
          THREE.MathUtils.smootherstep(
            local,
            0,
            1
          )
        );
    } else if (
      safeProgress >= 3 &&
      safeProgress < 4
    ) {
      const disappear =
        safeProgress - 3;

      targetScale =
        THREE.MathUtils.lerp(
          0.68,
          0,
          THREE.MathUtils.smootherstep(
            disappear,
            0,
            1
          )
        );
    } else if (
      safeProgress >= 4 &&
      safeProgress < 5
    ) {
      targetScale = 0;
    } else if (
      safeProgress >= 5 &&
      safeProgress < 6
    ) {
      const appear =
        safeProgress - 5;

      targetScale =
        THREE.MathUtils.lerp(
          0,
          0.67,
          THREE.MathUtils.smootherstep(
            appear,
            0,
            1
          )
        );
    } else {
      targetScale = 0.65;
    }

    // =======================================
    // BREATHING SCALE
    // =======================================

    const breathing =
      1 +
      Math.sin(time * 1.25) *
        0.018;

    targetScale *=
      breathing;

    const smoothScale =
      THREE.MathUtils.damp(
        ref.current.scale.x,
        targetScale,
        7,
        delta
      );

    ref.current.scale.setScalar(
      smoothScale
    );
  });
}