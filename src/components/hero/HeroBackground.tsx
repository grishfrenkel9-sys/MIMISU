import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#dff8f8]">
      {/* Base */}

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(135deg,#efffff_0%,#dff7f8_45%,#bde9ed_100%)]
        "
      />

      {/* Deep water */}

      <div
        className="
          absolute
          -right-[25%]
          top-[8%]
          h-[70%]
          w-[70%]
          rounded-full
          bg-[radial-gradient(circle,#6bd3df_0%,#3bb8c8_35%,transparent_72%)]
          opacity-25
          blur-[100px]
        "
      />

      {/* Aqua light */}

      <div
        className="
          absolute
          -left-[25%]
          top-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-200/60
          blur-[110px]

          sm:h-[600px]
          sm:w-[600px]
        "
      />

      {/* Water reflection */}

      <motion.div
        className="
          absolute
          left-[-20%]
          top-[22%]
          h-[300px]
          w-[140%]
          rounded-[50%]
          border
          border-white/60

          sm:h-[420px]
        "
        animate={{
          x: ["-2%", "2%", "-2%"],
          scaleY: [0.82, 1, 0.82],
          opacity: [0.2, 0.42, 0.2],
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
          left-[-20%]
          top-[30%]
          h-[360px]
          w-[140%]
          rounded-[50%]
          border
          border-white/35

          sm:h-[500px]
        "
        animate={{
          x: ["2%", "-2%", "2%"],
          scaleY: [0.78, 1, 0.78],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glass circle */}

      <motion.div
        className="
          absolute
          right-[-10%]
          top-[12%]
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-white/45
          bg-white/10
          backdrop-blur-[2px]

          sm:right-[8%]
          sm:h-[380px]
          sm:w-[380px]
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

      {/* Small glass circle */}

      <motion.div
        className="
          absolute
          right-[10%]
          top-[27%]
          h-[110px]
          w-[110px]
          rounded-full
          border
          border-white/50
          bg-white/15

          sm:right-[18%]
          sm:h-[170px]
          sm:w-[170px]
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

      {/* Highlights */}

      <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-white/70" />

      <div className="absolute left-[22%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/80" />

      <div className="absolute right-[32%] top-[18%] h-2 w-2 rounded-full bg-white/70" />

      <div className="absolute right-[15%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-white/60" />

      {/* Bottom water */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[35%]
          bg-[linear-gradient(to_top,rgba(21,112,128,.14),transparent)]
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

      {/* Moving shine */}

      <motion.div
        className="
          absolute
          -left-[30%]
          top-0
          h-full
          w-[30%]
          rotate-[12deg]
          bg-white/15
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