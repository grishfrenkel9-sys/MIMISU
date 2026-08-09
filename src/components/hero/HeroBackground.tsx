import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#dff8f8]">
      {/* Base water gradient */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(135deg,#e9ffff_0%,#d9f5f7_42%,#b9e8ec_100%)]
        "
      />

      {/* Deep water area */}
      <div
        className="
          absolute
          -right-[15%]
          top-[8%]
          h-[80%]
          w-[65%]
          rounded-full
          bg-[radial-gradient(circle,#6bd3df_0%,#3bb8c8_35%,transparent_72%)]
          opacity-30
          blur-[90px]
        "
      />

      {/* Soft aqua light */}
      <div
        className="
          absolute
          -left-[15%]
          top-[5%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-200/70
          blur-[100px]
        "
      />

      {/* Water reflection */}
      <motion.div
        className="
          absolute
          left-[-10%]
          top-[20%]
          h-[420px]
          w-[120%]
          rounded-[50%]
          border
          border-white/70
        "
        animate={{
          x: ["-3%", "3%", "-3%"],
          scaleY: [0.8, 1, 0.8],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          left-[-15%]
          top-[28%]
          h-[500px]
          w-[130%]
          rounded-[50%]
          border
          border-white/40
        "
        animate={{
          x: ["2%", "-2%", "2%"],
          scaleY: [0.75, 1, 0.75],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glass / water circles */}
      <motion.div
        className="
          absolute
          right-[8%]
          top-[15%]
          h-[380px]
          w-[380px]
          rounded-full
          border
          border-white/50
          bg-white/10
          backdrop-blur-[2px]
        "
        animate={{
          y: [-10, 15, -10],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          right-[18%]
          top-[27%]
          h-[170px]
          w-[170px]
          rounded-full
          border
          border-white/60
          bg-white/20
        "
        animate={{
          y: [10, -12, 10],
          x: [-5, 8, -5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tiny water highlights */}
      <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-white/70" />
      <div className="absolute left-[22%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/80" />
      <div className="absolute right-[32%] top-[18%] h-2 w-2 rounded-full bg-white/70" />
      <div className="absolute right-[15%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-white/60" />

      {/* Water line */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[35%]
          bg-[linear-gradient(to_top,rgba(21,112,128,.16),transparent)]
        "
      />

      {/* Bottom readability */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-[#d9f5f7]
          to-transparent
        "
      />

      {/* Very subtle animated shine */}
      <motion.div
        className="
          absolute
          -left-[30%]
          top-0
          h-full
          w-[30%]
          rotate-[12deg]
          bg-white/20
          blur-[80px]
        "
        animate={{
          x: ["0%", "500%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}