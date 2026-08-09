
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

import * as THREE from "three";

import useBottleAnimation from "./BottleAnimation";

interface BottleProps {
  reduceMotion?: boolean;
}

const Bottle = forwardRef<THREE.Group, BottleProps>(
  ({ reduceMotion = false }, forwardedRef) => {
    const group = useRef<THREE.Group>(null);

    useImperativeHandle(
      forwardedRef,
      () => group.current as THREE.Group
    );

    // =========================================
    // ANIMATION
    // =========================================

    useBottleAnimation(group, reduceMotion);

    // =========================================
    // MOBILE DETECTION
    // =========================================

    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;

    // =========================================
    // GEOMETRY QUALITY
    // =========================================

    const bondSegments = isMobile ? 12 : 20;

    const oxygenSegments = isMobile ? 28 : 48;

    const hydrogenSegments = isMobile ? 20 : 32;

    // =========================================
    // MOLECULE GEOMETRY
    // =========================================

    const bondGeometry = useMemo(() => {
      return new THREE.CylinderGeometry(
        0.055,
        0.055,
        1,
        bondSegments
      );
    }, [bondSegments]);

    const oxygenGeometry = useMemo(() => {
      return new THREE.SphereGeometry(
        0.34,
        oxygenSegments,
        oxygenSegments
      );
    }, [oxygenSegments]);

    const hydrogenGeometry = useMemo(() => {
      return new THREE.SphereGeometry(
        0.21,
        hydrogenSegments,
        hydrogenSegments
      );
    }, [hydrogenSegments]);

    // =========================================
    // MATERIALS
    // =========================================

    const oxygenMaterial = useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: "#7ddcff",

          roughness: 0.16,
          metalness: 0.06,

          clearcoat: isMobile ? 0.6 : 1,
          clearcoatRoughness: 0.06,

          transmission: isMobile ? 0.05 : 0.12,
          thickness: 0.28,

          envMapIntensity: isMobile ? 1.5 : 2.2,
        }),
      [isMobile]
    );

    const hydrogenMaterial = useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: "#f4fbff",

          roughness: 0.12,
          metalness: 0.03,

          clearcoat: isMobile ? 0.55 : 1,
          clearcoatRoughness: 0.05,

          transmission: isMobile ? 0.06 : 0.16,
          thickness: 0.18,

          envMapIntensity: isMobile ? 1.4 : 2.1,
        }),
      [isMobile]
    );

    const bondMaterial = useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: "#9be7ff",

          roughness: 0.14,
          metalness: 0.04,

          clearcoat: isMobile ? 0.5 : 1,
          clearcoatRoughness: 0.05,

          transmission: isMobile ? 0.08 : 0.22,

          transparent: true,
          opacity: 0.88,

          thickness: 0.12,

          envMapIntensity: isMobile ? 1.3 : 2,
        }),
      [isMobile]
    );

    // =========================================
    // BOND HELPER
    // =========================================

    const createBond = (
      start: THREE.Vector3,
      end: THREE.Vector3
    ) => {
      const midpoint = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5);

      const direction = new THREE.Vector3()
        .subVectors(end, start);

      const length = direction.length();

      const quaternion =
        new THREE.Quaternion();

      quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.normalize()
      );

      return (
        <mesh
          key={`${start.x}-${start.y}-${end.x}-${end.y}`}
          geometry={bondGeometry}
          material={bondMaterial}
          position={midpoint}
          quaternion={quaternion}
          scale={[1, length, 1]}
        />
      );
    };

    // =========================================
    // H2O POSITIONS
    // =========================================

    const oxygenPosition = useMemo(
      () => new THREE.Vector3(0, 0, 0),
      []
    );

    const hydrogenLeft = useMemo(
      () =>
        new THREE.Vector3(
          -0.72,
          -0.22,
          0.05
        ),
      []
    );

    const hydrogenRight = useMemo(
      () =>
        new THREE.Vector3(
          0.72,
          -0.22,
          0.05
        ),
      []
    );

    return (
      <group
        ref={group}
        position={[0, 0, 0]}
      >
        {/* =====================================
            BONDS
        ===================================== */}

        {createBond(
          oxygenPosition,
          hydrogenLeft
        )}

        {createBond(
          oxygenPosition,
          hydrogenRight
        )}

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
          castShadow={!isMobile}
          receiveShadow={!isMobile}
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
          castShadow={!isMobile}
          receiveShadow={!isMobile}
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
          castShadow={!isMobile}
          receiveShadow={!isMobile}
        />

        {/* =====================================
            SOFT INNER GLOW
        ===================================== */}

        <mesh
          position={[0, 0, -0.03]}
          scale={1.08}
        >
          <sphereGeometry
            args={[
              0.34,
              isMobile ? 20 : 32,
              isMobile ? 20 : 32,
            ]}
          />

          <meshBasicMaterial
            color="#8ee8ff"
            transparent
            opacity={isMobile ? 0.025 : 0.045}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>
      </group>
    );
  }
);

Bottle.displayName = "Bottle";

export default Bottle;
