import { motion } from "framer-motion";

export default function Gradient() {
  return (
    <motion.div
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 70,
        ease: "linear",
      }}
      className="
absolute
left-1/2
top-1/2
h-[1600px]
w-[1600px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-[radial-gradient(circle,rgba(59,130,246,.07),transparent_65%)]
pointer-events-none
"
    />
  );
}
