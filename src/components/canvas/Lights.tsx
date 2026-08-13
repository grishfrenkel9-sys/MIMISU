export const glassMaterial = {
  color: "#ffffff",
  transmission: 1,
  transparent: true,
  opacity: 1,
  roughness: 0,
  metalness: 0,
  thickness: 0.4,
  ior: 1.5,
  clearcoat: 1,
};

export const neckMaterial = {
  color: "#ffffff",
  transmission: 1,
  roughness: 0,
  thickness: 0.4,
};

export const capMaterial = {
  color: "#ffffff",
  roughness: 0.3,
};

export default function Lights() {
  return (
    <>
      <ambientLight
        intensity={0.5}
      />

      <directionalLight
        position={[3, 4, 5]}
        intensity={3}
        color="#ffffff"
      />

      <pointLight
        position={[-3, 1.5, 3]}
        intensity={2}
        distance={8}
        color="#67e8f9"
      />

      <pointLight
        position={[0, 2, -3]}
        intensity={1.5}
        distance={8}
        color="#38bdf8"
      />
    </>
  );
}