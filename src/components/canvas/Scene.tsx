import Bottle from "./Bottle";
import Lights from "./Lights";

interface SceneProps {
  reduceMotion?: boolean;
}

export default function Scene({
  reduceMotion = false,
}: SceneProps) {
  return (
    <>
      <Lights />

      <Bottle
        reduceMotion={
          reduceMotion
        }
      />
    </>
  );
}