import { Canvas } from "@react-three/fiber";
import Particles from "../../background/Particles";

export default function HeroParticlesCanvas() {
  return (
    <div
      className="
        absolute
        inset-0
        z-[5]
        overflow-hidden
        pointer-events-none
      "
    >
      <Canvas
        dpr={[1, 2]}
        orthographic={false}
        camera={{
          position: [0, 0, 18],
          fov: 60,
          near: 0.1,
          far: 300,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <fog attach="fog" args={["#040404", 40, 180]} />

        <ambientLight intensity={0.4} />

        <Particles />
      </Canvas>
    </div>
  );
}
