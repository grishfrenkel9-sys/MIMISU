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
    // MOLECULE GEOMETRY
    // =========================================

    const bondGeometry = useMemo(() => {
      return new THREE.CylinderGeometry(
        0.055,
        0.055,
        1,
        24
      );
    }, []);

    const oxygenGeometry = useMemo(() => {
      return new THREE.SphereGeometry(
        0.34,
        64,
        64
      );
    }, []);

    const hydrogenGeometry = useMemo(() => {
      return new THREE.SphereGeometry(
        0.21,
        48,
        48
      );
    }, []);

    // =========================================
    // MATERIALS
    // =========================================

    // OXYGEN
    // Глубокий ледяной голубой
    const oxygenMaterial = useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: "#7ddcff",

          roughness: 0.12,
          metalness: 0.08,

          clearcoat: 1,
          clearcoatRoughness: 0.04,

          transmission: 0.12,
          thickness: 0.28,

          envMapIntensity: 2.2,
        }),
      []
    );

    // HYDROGEN
    // Чистый холодный белый
    const hydrogenMaterial = useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: "#f4fbff",

          roughness: 0.08,
          metalness: 0.04,

          clearcoat: 1,
          clearcoatRoughness: 0.035,

          transmission: 0.16,
          thickness: 0.18,

          envMapIntensity: 2.1,
        }),
      []
    );

    // BONDS
    // Полупрозрачный голубой стеклянный материал
    const bondMaterial = useMemo(
      () =>
        new THREE.MeshPhysicalMaterial({
          color: "#9be7ff",

          roughness: 0.10,
          metalness: 0.06,

          clearcoat: 1,
          clearcoatRoughness: 0.035,

          transmission: 0.22,

          transparent: true,
          opacity: 0.88,

          thickness: 0.12,

          envMapIntensity: 2,
        }),
      []
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
          castShadow
          receiveShadow
        />
      );
    };

    // =========================================
    // H2O POSITIONS
    // =========================================

    const oxygenPosition = useMemo(
      () =>
        new THREE.Vector3(
          0,
          0,
          0
        ),
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
          castShadow
          receiveShadow
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
          castShadow
          receiveShadow
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
          castShadow
          receiveShadow
        />

        {/* =====================================
            SOFT INNER GLOW
        ===================================== */}

        <mesh
          position={[0, 0, -0.03]}
          scale={1.08}
        >
          <sphereGeometry
            args={[0.34, 48, 48]}
          />

          <meshBasicMaterial
            color="#8ee8ff"
            transparent
            opacity={0.045}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    );
  }
);

Bottle.displayName = "Bottle";

export default Bottle;