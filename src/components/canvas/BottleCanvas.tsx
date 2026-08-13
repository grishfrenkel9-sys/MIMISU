import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Scene from "./Scene";

interface BottleCanvasProps {
  reduceMotion?: boolean;
}

export default function BottleCanvas({
  reduceMotion = false,
}: BottleCanvasProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let frame1: number;
    let frame2: number;

    frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(() => {
        setReady(true);
      });
    });

    return () => {
      cancelAnimationFrame(frame1);
      cancelAnimationFrame(frame2);
    };
  }, []);

  if (!ready) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-30
        h-screen
        w-screen
      "
    >
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 35,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.15]}
        frameloop="always"
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
          preserveDrawingBuffer: false,
        }}
        performance={{
          min: 0.5,
          max: 1,
          debounce: 200,
        }}
        style={{
          pointerEvents: "none",
        }}
      >
        <Scene reduceMotion={reduceMotion} />
      </Canvas>
    </div>
  );
}