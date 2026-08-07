
export default function Lights() {
  return (
    <>
      {/* =========================================
          BASE
      ========================================= */}

      <ambientLight
        intensity={0.45}
      />

      {/* =========================================
          KEY LIGHT
      ========================================= */}

      <spotLight
        position={[3.5, 4.5, 5]}
        intensity={5}
        angle={0.42}
        penumbra={0.8}
        distance={12}
        color="#ffffff"
        castShadow
      />

      {/* =========================================
          LEFT COOL LIGHT
      ========================================= */}

      <pointLight
        position={[-3.5, 1.5, 3]}
        intensity={3.2}
        distance={8}
        color="#67e8f9"
      />

      {/* =========================================
          RIGHT RED LIGHT
      ========================================= */}

      <pointLight
        position={[3.5, -0.5, 2]}
        intensity={2.5}
        distance={7}
        color="#ef4444"
      />

      {/* =========================================
          TOP RIM
      ========================================= */}

      <spotLight
        position={[0, 5, -1]}
        intensity={4}
        angle={0.5}
        penumbra={1}
        distance={10}
        color="#dffaff"
      />

      {/* =========================================
          BACK RIM
      ========================================= */}

      <pointLight
        position={[0, 1, -4]}
        intensity={4}
        distance={8}
        color="#38bdf8"
      />

      {/* =========================================
          SOFT FRONT FILL
      ========================================= */}

      <pointLight
        position={[0, 0, 5]}
        intensity={1.4}
        distance={10}
        color="#ffffff"
      />
    </>
  );
}