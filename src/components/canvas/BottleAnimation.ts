import {
  useEffect,
  useRef,
} from "react";

import {
  useFrame,
} from "@react-three/fiber";

import * as THREE from "three";

import type {
  RefObject,
} from "react";

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
    x: 4.0,
    y: 0.6,
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

const clamp =
  THREE.MathUtils.clamp;

const lerp =
  THREE.MathUtils.lerp;

const damp =
  THREE.MathUtils.damp;

const smootherstep =
  THREE.MathUtils.smootherstep;

export default function useBottleAnimation(
  ref: RefObject<THREE.Group | null>,
  reduceMotion = false
) {
  const progress =
    useRef(0);

  const targetProgress =
    useRef(0);

  const jumpVelocity =
    useRef(0);

  const jumpOffset =
    useRef(0);

  const lastSection =
    useRef(0);

  const sectionsRef =
    useRef<HTMLElement[]>([]);

  const isMobileRef =
    useRef(false);

  // =========================================
  // DEVICE
  // =========================================

  useEffect(() => {
    if (
      typeof window ===
      "undefined"
    ) {
      return;
    }

    const mediaQuery =
      window.matchMedia(
        "(max-width: 768px)"
      );

    const updateDevice =
      () => {
        isMobileRef.current =
          mediaQuery.matches;
      };

    updateDevice();

    mediaQuery.addEventListener(
      "change",
      updateDevice
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateDevice
      );
    };
  }, []);

  // =========================================
  // SCROLL
  // =========================================

  useEffect(() => {
    const collectSections =
      () => {
        sectionsRef.current =
          sectionSelectors
            .map((selector) =>
              document.querySelector(
                selector
              )
            )
            .filter(
              (
                section
              ): section is HTMLElement =>
                section instanceof
                HTMLElement
            );
      };

    const updateScroll =
      () => {
        const sections =
          sectionsRef.current;

        if (
          !sections.length
        ) {
          return;
        }

        const viewportCenter =
          window.scrollY +
          window.innerHeight *
            0.5;

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
          } else {
            break;
          }
        }

        if (
          currentIndex !==
          lastSection.current
        ) {
          lastSection.current =
            currentIndex;

          jumpVelocity.current =
            isMobileRef.current
              ? 0.45
              : 0.8;
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
          sections[
            currentIndex + 1
          ];

        const distance =
          next.offsetTop -
          current.offsetTop;

        if (
          distance <= 0
        ) {
          return;
        }

        const localProgress =
          clamp(
            (
              viewportCenter -
              current.offsetTop
            ) / distance,
            0,
            1
          );

        targetProgress.current =
          currentIndex +
          localProgress;
      };

    collectSections();
    updateScroll();

    window.addEventListener(
      "scroll",
      updateScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      collectSections,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      updateScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );

      window.removeEventListener(
        "resize",
        collectSections
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

  useFrame(
    (state, delta) => {
      const object =
        ref.current;

      if (!object) {
        return;
      }

      // =======================================
      // REDUCE MOTION
      // =======================================

      if (reduceMotion) {
        const first =
          states[0];

        object.position.set(
          first.x,
          first.y,
          first.z
        );

        object.rotation.set(
          first.rotationX,
          first.rotationY,
          first.rotationZ
        );

        object.scale.setScalar(
          first.scale
        );

        return;
      }

      // =======================================
      // DELTA
      // =======================================

      const dt =
        Math.min(
          delta,
          0.05
        );

      const time =
        state.clock.elapsedTime;

      // =======================================
      // PROGRESS
      // =======================================

      progress.current =
        damp(
          progress.current,
          targetProgress.current,
          isMobileRef.current
            ? 5
            : 6,
          dt
        );

      const safeProgress =
        clamp(
          progress.current,
          0,
          states.length - 1
        );

      // =======================================
      // SECTION
      // =======================================

      const currentIndex =
        Math.min(
          Math.floor(
            safeProgress
          ),
          states.length - 2
        );

      const localProgress =
        safeProgress -
        currentIndex;

      const eased =
        smootherstep(
          localProgress,
          0,
          1
        );

      const from =
        states[currentIndex];

      const to =
        states[
          currentIndex + 1
        ];

      // =======================================
      // POSITION
      // =======================================

      const baseX =
        lerp(
          from.x,
          to.x,
          eased
        );

      const baseY =
        lerp(
          from.y,
          to.y,
          eased
        );

      const baseZ =
        lerp(
          from.z,
          to.z,
          eased
        );

      // =======================================
      // SCALE
      // =======================================

      let targetScale = 0;

      if (
        safeProgress < 3
      ) {
        const index =
          Math.floor(
            safeProgress
          );

        const local =
          safeProgress -
          index;

        targetScale =
          lerp(
            states[index].scale,
            states[
              Math.min(
                index + 1,
                states.length - 1
              )
            ].scale,
            smootherstep(
              local,
              0,
              1
            )
          );
      } else if (
        safeProgress < 4
      ) {
        const disappear =
          safeProgress - 3;

        targetScale =
          lerp(
            0.68,
            0,
            smootherstep(
              disappear,
              0,
              1
            )
          );
      } else if (
        safeProgress < 5
      ) {
        targetScale = 0;
      } else if (
        safeProgress < 6
      ) {
        const appear =
          safeProgress - 5;

        targetScale =
          lerp(
            0,
            0.67,
            smootherstep(
              appear,
              0,
              1
            )
          );
      } else {
        targetScale = 0.65;
      }

      // =======================================
      // HIDDEN
      // =======================================

      if (
        targetScale <
          0.001 &&
        object.scale.x <
          0.001
      ) {
        object.scale.setScalar(
          0
        );

        object.position.x =
          baseX;

        object.position.y =
          baseY;

        object.position.z =
          baseZ;

        return;
      }

      // =======================================
      // FLOAT
      // =======================================

      const floatSpeed =
        isMobileRef.current
          ? 1.1
          : 1.45;

      const floatY =
        Math.sin(
          time *
            floatSpeed
        ) *
        0.055;

      const floatX =
        Math.sin(
          time * 0.72
        ) *
        0.035;

      const floatZ =
        Math.cos(
          time * 0.9
        ) *
        0.025;

      // =======================================
      // JUMP
      // =======================================

      jumpVelocity.current =
        damp(
          jumpVelocity.current,
          0,
          4,
          dt
        );

      jumpOffset.current +=
        jumpVelocity.current *
        dt;

      jumpOffset.current =
        damp(
          jumpOffset.current,
          0,
          5,
          dt
        );

      // =======================================
      // ORBIT
      // =======================================

      const orbitX =
        Math.sin(
          time * 0.48
        ) *
        0.045;

      const orbitZ =
        Math.cos(
          time * 0.55
        ) *
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

      object.position.x =
        damp(
          object.position.x,
          targetX,
          6,
          dt
        );

      object.position.y =
        damp(
          object.position.y,
          targetY,
          6,
          dt
        );

      object.position.z =
        damp(
          object.position.z,
          targetZ,
          6,
          dt
        );

      // =======================================
      // ROTATION
      // =======================================

      const baseRotationX =
        lerp(
          from.rotationX,
          to.rotationX,
          eased
        );

      const baseRotationY =
        lerp(
          from.rotationY,
          to.rotationY,
          eased
        );

      const baseRotationZ =
        lerp(
          from.rotationZ,
          to.rotationZ,
          eased
        );

      const spinY =
        time * 0.42;

      const spinX =
        Math.sin(
          time * 0.8
        ) *
        0.10;

      const spinZ =
        Math.sin(
          time * 0.62
        ) *
        0.07;

      const wobbleX =
        Math.sin(
          time * 1.8
        ) *
        0.035;

      const wobbleZ =
        Math.cos(
          time * 1.55
        ) *
        0.04;

      object.rotation.x =
        damp(
          object.rotation.x,
          baseRotationX +
            spinX +
            wobbleX,
          4.5,
          dt
        );

      object.rotation.y =
        damp(
          object.rotation.y,
          baseRotationY +
            spinY,
          4.5,
          dt
        );

      object.rotation.z =
        damp(
          object.rotation.z,
          baseRotationZ +
            spinZ +
            wobbleZ,
          4.5,
          dt
        );

      // =======================================
      // BREATHING
      // =======================================

      targetScale *=
        1 +
        Math.sin(
          time * 1.25
        ) *
        0.018;

      // =======================================
      // FINAL SCALE
      // =======================================

      const smoothScale =
        damp(
          object.scale.x,
          targetScale,
          7,
          dt
        );

      object.scale.setScalar(
        smoothScale
      );
    }
  );
}