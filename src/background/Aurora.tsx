import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 180, -120, 0],
          y: [0, -90, 60, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        left-[-350px]
        top-[-280px]
        h-[1100px]
        w-[1100px]
        rounded-full
        bg-cyan-400/10
        blur-[220px]
      "
      />

      <motion.div
        animate={{
          x: [0, -160, 130, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-[-320px]
        bottom-[-260px]
        h-[1200px]
        w-[1200px]
        rounded-full
        bg-red-500/10
        blur-[250px]
      "
      />
    </>
  );
}
