import ScrollReveal from "../animations/ScrollReveal";

import Intro from "./Intro";
import Statement from "./Statement";
import Stats from "./Stats";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-transparent
        py-20
        text-white

        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          AMBIENT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[12%]
          top-[18%]
          z-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/[0.025]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[15%]
          bottom-[10%]
          z-0
          h-[360px]
          w-[360px]
          rounded-full
          bg-white/[0.012]
          blur-[140px]
        "
      />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-[0.012]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* =====================================================
          TOP TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-0
          h-24
          bg-gradient-to-b
          from-black/30
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1400px]
          px-6

          md:px-10
          lg:px-12
        "
      >
        {/* INTRO */}

        <Intro />

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div
          className="
            my-16
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/[0.08]
            to-transparent

            md:my-20
          "
        />

        {/* =================================================
            STATEMENT
        ================================================= */}

        <ScrollReveal
          direction="blur"
          distance={30}
          delay={0.05}
          duration={1}
        >
          <Statement />
        </ScrollReveal>

        {/* =================================================
            STATS
        ================================================= */}

        <ScrollReveal
          direction="up"
          distance={45}
          delay={0.1}
          duration={0.9}
        >
          <Stats />
        </ScrollReveal>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-0
          h-24
          bg-gradient-to-t
          from-[#040404]/50
          to-transparent
        "
      />
    </section>
  );
}