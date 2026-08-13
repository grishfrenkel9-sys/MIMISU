export default function Lights() {
  return (
    <>
      {/* =========================================
          BASE
      ========================================= */}

      <ambientLight
        intensity={0.4}
      />

      {/* =========================================
          KEY LIGHT
      ========================================= */}

      <spotLight
        position={[
          3.5,
          4.5,
          5,
        ]}
        intensity={5}
        angle={0.42}
        penumbra={0.8}
        distance={12}
        color="#ffffff"
      />

      {/* =========================================
          LEFT COOL LIGHT
      ========================================= */}

      <pointLight
        position={[
          -3.5,
          1.5,
          3,
        ]}
        intensity={3}
        distance={8}
        color="#67e8f9"
      />

      {/* =========================================
          RIGHT RED LIGHT
      ========================================= */}

      <pointLight
        position={[
          3.5,
          -0.5,
          2,
        ]}
        intensity={2.3}
        distance={7}
        color="#ef4444"
      />

      {/* =========================================
          BACK / RIM
      ========================================= */}

      <pointLight
        position={[
          0,
          2,
          -3,
        ]}
        intensity={2.5}
        distance={8}
        color="#38bdf8"
      />
    </>
  );
}