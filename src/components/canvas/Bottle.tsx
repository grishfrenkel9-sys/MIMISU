import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import useBottleAnimation from "./BottleAnimation";

interface BottleProps {
  reduceMotion?: boolean;
}

const Bottle = forwardRef<THREE.Group, BottleProps>(
  ({ reduceMotion = false }, forwardedRef) => {
    const group = useRef<THREE.Group>(null);
    const molecule = useRef<THREE.Group>(null);

    useImperativeHandle(
      forwardedRef,
      () => group.current as THREE.Group
    );

    // =========================================
    // DEVICE
    // =========================================

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      if (typeof window === "undefined") {
        return;
      }

      const mediaQuery = window.matchMedia(
        "(max-width: 767px)"
      );

      const update = () => {
        setIsMobile(mediaQuery.matches);
      };

      update();

      mediaQuery.addEventListener(
        "change",
        update
      );

      return () => {
        mediaQuery.removeEventListener(
          "change",
          update
        );
      };
    }, []);

    // =========================================
    // BOTTLE ANIMATION
    // =========================================

    useBottleAnimation(
      group,
      reduceMotion
    );

    // =========================================
    // OXYGEN GEOMETRY
    // =========================================

    const oxygenGeometry = useMemo(() => {
      const segments = isMobile ? 16 : 32;

      const geometry =
        new THREE.SphereGeometry(
          0.38,
          segments,
          segments
        );

      const position =
        geometry.attributes.position;

      const vertex =
        new THREE.Vector3();

      for (
        let i = 0;
        i < position.count;
        i++
      ) {
        vertex.fromBufferAttribute(
          position,
          i
        );

        const distortion =
          1 +
          Math.sin(
            vertex.x * 5 +
              vertex.z * 2.5
          ) *
            0.015 +
          Math.sin(
            vertex.y * 4 -
              vertex.x * 2
          ) *
            0.01;

        vertex.multiplyScalar(
          distortion
        );

        position.setXYZ(
          i,
          vertex.x,
          vertex.y,
          vertex.z
        );
      }

      position.needsUpdate = true;

      geometry.computeVertexNormals();

      return geometry;
    }, [isMobile]);

    // =========================================
    // HYDROGEN GEOMETRY
    // =========================================

    const hydrogenGeometry =
      useMemo(() => {
        const segments = isMobile
          ? 12
          : 24;

        return new THREE.SphereGeometry(
          0.205,
          segments,
          segments
        );
      }, [isMobile]);

    // =========================================
    // OXYGEN MATERIAL
    // =========================================

    const oxygenMaterial =
      useMemo(() => {
        // MOBILE / SAFARI
        // Much cheaper than MeshPhysicalMaterial.
        if (isMobile) {
          return new THREE.MeshStandardMaterial({
            color: "#16bfd7",

            roughness: 0.18,
            metalness: 0.02,

            transparent: true,
            opacity: 0.98,
          });
        }

        // DESKTOP
        return new THREE.MeshPhysicalMaterial({
          color: "#16bfd7",

          roughness: 0.09,
          metalness: 0.015,

          clearcoat: 1,
          clearcoatRoughness: 0.025,

          transmission: 0.08,
          thickness: 0.35,

          ior: 1.333,

          envMapIntensity: 1.8,

          transparent: true,
          opacity: 0.98,
        });
      }, [isMobile]);

    // =========================================
    // HYDROGEN MATERIAL
    // =========================================

    const hydrogenMaterial =
      useMemo(() => {
        // MOBILE / SAFARI
        if (isMobile) {
          return new THREE.MeshStandardMaterial({
            color: "#f2fcff",

            roughness: 0.16,
            metalness: 0.01,

            transparent: true,
            opacity: 0.96,
          });
        }

        // DESKTOP
        return new THREE.MeshPhysicalMaterial({
          color: "#f2fcff",

          roughness: 0.085,
          metalness: 0.01,

          clearcoat: 1,
          clearcoatRoughness: 0.025,

          transmission: 0.08,
          thickness: 0.22,

          ior: 1.333,

          envMapIntensity: 1.7,

          transparent: true,
          opacity: 0.96,
        });
      }, [isMobile]);

    // =========================================
    // OXYGEN GLOW
    // =========================================

    const oxygenGlowMaterial =
      useMemo(() => {
        return new THREE.MeshBasicMaterial({
          color: "#4be8f7",

          transparent: true,

          opacity: isMobile
            ? 0.022
            : 0.045,

          side: THREE.BackSide,

          depthWrite: false,

          blending:
            THREE.AdditiveBlending,
        });
      }, [isMobile]);

    // =========================================
    // HYDROGEN GLOW
    // =========================================

    const hydrogenGlowMaterial =
      useMemo(() => {
        return new THREE.MeshBasicMaterial({
          color: "#d9faff",

          transparent: true,

          opacity: isMobile
            ? 0.01
            : 0.022,

          side: THREE.BackSide,

          depthWrite: false,

          blending:
            THREE.AdditiveBlending,
        });
      }, [isMobile]);

    // =========================================
    // POSITIONS
    // =========================================

    const oxygenPosition =
      useMemo(
        () =>
          new THREE.Vector3(
            0,
            0.06,
            0
          ),
        []
      );

    const hydrogenLeft =
      useMemo(
        () =>
          new THREE.Vector3(
            -0.57,
            -0.26,
            0.035
          ),
        []
      );

    const hydrogenRight =
      useMemo(
        () =>
          new THREE.Vector3(
            0.57,
            -0.26,
            -0.015
          ),
        []
      );

    // =========================================
    // MOLECULE ANIMATION
    // =========================================
    //
    // IMPORTANT:
    // No FPS limiter here.
    //
    // The animation runs on every
    // requestAnimationFrame.
    //
    // This keeps the molecule smooth
    // at 60 FPS when the device can handle it.
    //
    // =========================================

    const time = useRef(0);

    useFrame((_, delta) => {
      if (
        reduceMotion ||
        !molecule.current
      ) {
        return;
      }

      const dt = Math.min(
        delta,
        0.05
      );

      time.current += dt;

      const t =
        time.current;

      const current =
        molecule.current;

      // FLOAT

      current.position.y =
        Math.sin(
          t * 0.72
        ) *
        0.018;

      // MICRO ROTATION

      current.rotation.x =
        Math.sin(
          t * 0.42
        ) *
        0.012;

      current.rotation.z =
        Math.sin(
          t * 0.34
        ) *
        0.016;

      // MICRO SCALE

      const scale =
        1 +
        Math.sin(
          t * 0.8
        ) *
        0.006;

      current.scale.setScalar(
        scale
      );
    });

    // =========================================
    // RETURN
    // =========================================

    return (
      <group ref={group}>
        <group ref={molecule}>

          {/* =====================================
              OXYGEN
          ===================================== */}

          <mesh
            geometry={oxygenGeometry}
            material={oxygenMaterial}
            position={[
              oxygenPosition.x,
              oxygenPosition.y,
              oxygenPosition.z,
            ]}
          />

          {/* =====================================
              OXYGEN AURA
          ===================================== */}

          <mesh
            geometry={oxygenGeometry}
            material={
              oxygenGlowMaterial
            }
            position={[
              oxygenPosition.x,
              oxygenPosition.y,
              oxygenPosition.z,
            ]}
            scale={
              isMobile
                ? 1.045
                : 1.075
            }
          />

          {/* =====================================
              HYDROGEN LEFT
          ===================================== */}

          <mesh
            geometry={hydrogenGeometry}
            material={hydrogenMaterial}
            position={[
              hydrogenLeft.x,
              hydrogenLeft.y,
              hydrogenLeft.z,
            ]}
          />

          {/* =====================================
              HYDROGEN LEFT AURA
          ===================================== */}

          <mesh
            geometry={hydrogenGeometry}
            material={
              hydrogenGlowMaterial
            }
            position={[
              hydrogenLeft.x,
              hydrogenLeft.y,
              hydrogenLeft.z,
            ]}
            scale={
              isMobile
                ? 1.035
                : 1.065
            }
          />

          {/* =====================================
              HYDROGEN RIGHT
          ===================================== */}

          <mesh
            geometry={hydrogenGeometry}
            material={hydrogenMaterial}
            position={[
              hydrogenRight.x,
              hydrogenRight.y,
              hydrogenRight.z,
            ]}
          />

          {/* =====================================
              HYDROGEN RIGHT AURA
          ===================================== */}

          <mesh
            geometry={hydrogenGeometry}
            material={
              hydrogenGlowMaterial
            }
            position={[
              hydrogenRight.x,
              hydrogenRight.y,
              hydrogenRight.z,
            ]}
            scale={
              isMobile
                ? 1.035
                : 1.065
            }
          />

        </group>
      </group>
    );
  }
);

Bottle.displayName = "Bottle";

export default Bottle;