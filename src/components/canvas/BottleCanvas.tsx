import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

interface BottleCanvasProps {
  reduceMotion?: boolean;
}

export default function BottleCanvas({
  reduceMotion = false,
}: BottleCanvasProps) {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        h-screen
        w-screen
      "
      aria-hidden="true"
    >
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 35,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.35]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
      >
        <Scene
          reduceMotion={reduceMotion}
        />
      </Canvas>
    </div>
  );
}