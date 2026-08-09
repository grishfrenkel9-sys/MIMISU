
import { motion } from "framer-motion";
import HeroTitle from "./HeroTitle";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 80;

    window.scrollTo({
      top:
        element.getBoundingClientRect().top +
        window.scrollY -
        offset,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        text-white
      "
    >
      {/* =====================================================
          BASE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-br
          from-[#285E68]
          via-[#285E68]
          to-[#245762]
        "
      />

      {/* =====================================================
          OCEANIC LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[18%]
          -top-[20%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#B9F7F8]/[0.12]
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[12%]
          top-[5%]
          h-[720px]
          w-[720px]
          rounded-full
          bg-[#8DE8EF]/[0.11]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[32%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#D2FAFB]/[0.07]
          blur-[150px]
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
          opacity-[0.04]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(230,255,255,.25) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(230,255,255,.25) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 78%)",
        }}
      />

      {/* =====================================================
          ORBITAL LINES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[18%]
          top-[4%]
          h-[680px]
          w-[980px]
          rounded-[50%]
          border
          border-white/[0.08]
          rotate-[-12deg]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[13%]
          top-[12%]
          h-[560px]
          w-[850px]
          rounded-[50%]
          border
          border-cyan-50/[0.06]
          rotate-[-12deg]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[7%]
          top-[22%]
          h-[410px]
          w-[680px]
          rounded-[50%]
          border
          border-cyan-50/[0.045]
          rotate-[-12deg]
        "
      />

      {/* =====================================================
          LIGHT PARTICLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[22%]
          h-2
          w-2
          rounded-full
          bg-[#E0FCFD]
          shadow-[0_0_22px_rgba(224,252,253,.85)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[42%]
          top-[14%]
          h-1.5
          w-1.5
          rounded-full
          bg-[#C4FAFC]
          shadow-[0_0_18px_rgba(196,250,252,.75)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[19%]
          top-[28%]
          h-2
          w-2
          rounded-full
          bg-[#D5FBFC]
          shadow-[0_0_20px_rgba(213,251,252,.75)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[34%]
          bottom-[18%]
          h-1
          w-1
          rounded-full
          bg-white/70
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-40
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1500px]
          flex-col
          px-6
          pb-28
          pt-28
          md:px-10
          md:pt-32
          lg:px-16
          lg:pt-36
        "
      >
        {/* =================================================
            TOP META
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            mb-8
            flex
            items-center
            justify-between
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#E8FCFD]
          "
        >
          <span className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#D5FBFC]
                shadow-[0_0_14px_rgba(213,251,252,.9)]
              "
            />

            MiMiSU / Water Media
          </span>

          <span className="hidden md:block">
            Digital Water System
          </span>
        </motion.div>

        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div
          className="
            grid
            flex-1
            items-center
            gap-10
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-6
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="relative z-40 max-w-[820px]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                mb-6
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/[0.18]
                bg-white/[0.08]
                px-4
                py-2
                shadow-[0_15px_45px_rgba(0,0,0,.12)]
                backdrop-blur-xl
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#D5FBFC]
                  shadow-[0_0_14px_rgba(213,251,252,.9)]
                "
              />

              <div>
                <div
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.18em]
                    text-white
                  "
                >
                  QR AD NETWORK
                </div>

                <div
                  className="
                    mt-0.5
                    text-[8px]
                    tracking-[0.22em]
                    text-[#D4F5F6]
                  "
                >
                  DIGITAL WATER
                </div>
              </div>
            </motion.div>

            {/* TITLE */}

            <HeroTitle />

            {/* TITLE LIGHT */}

            <div
              className="
                pointer-events-none
                absolute
                -left-10
                top-16
                -z-10
                h-48
                w-96
                rounded-full
                bg-cyan-50/[0.07]
                blur-[100px]
              "
            />

            {/* LINE */}

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 110, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="
                mt-7
                h-[2px]
                bg-gradient-to-r
                from-[#E0FCFD]
                via-[#B9F7F8]
                to-transparent
              "
            />

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.65,
              }}
              className="
                mt-6
                max-w-[620px]
                text-sm
                font-medium
                leading-7
                text-[#E5F8F9]
                md:text-[15px]
              "
            >
              MiMiSU превращает обычную бутылку воды
              в современный рекламный носитель —
              с QR-аналитикой, измеримым охватом
              и прозрачной статистикой.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.78,
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {/* CAMPAIGN */}

              <motion.button
                type="button"
                onClick={() => scrollToSection("calculator")}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-full
                  bg-[#F4FEFF]
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-[#285E68]
                  shadow-[0_18px_50px_rgba(0,0,0,.16)]
                  transition-all
                  duration-300
                  hover:shadow-[0_22px_60px_rgba(0,0,0,.22)]
                "
              >
                <span className="relative z-10">
                  Запустить кампанию
                  <span className="ml-3">→</span>
                </span>

                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    w-16
                    -translate-x-[140%]
                    skew-x-[-20deg]
                    bg-white/60
                    blur-md
                    transition-transform
                    duration-700
                    group-hover:translate-x-[500%]
                  "
                />
              </motion.button>

              {/* STORY */}

              <motion.button
                type="button"
                onClick={() => scrollToSection("story")}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.22]
                  bg-white/[0.08]
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-white/[0.35]
                  hover:bg-white/[0.14]
                "
              >
                <span className="relative z-10 flex items-center">
                  <span
                    className="
                      mr-3
                      inline-flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      bg-white/[0.14]
                      text-[10px]
                      text-[#E0FCFD]
                      transition-all
                      duration-300
                      group-hover:bg-white/[0.22]
                      group-hover:scale-110
                    "
                  >
                    ▶
                  </span>

                  Смотреть историю
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div
            className="
              relative
              min-h-[420px]
              lg:min-h-[620px]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[470px]
                w-[470px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#D5FBFC]/[0.12]
                blur-[130px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/[0.10]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[390px]
                w-[390px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-cyan-50/[0.08]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/[0.12]
                bg-white/[0.045]
                shadow-[0_40px_120px_rgba(0,0,0,.16)]
                backdrop-blur-[3px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[250px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-white/[0.04]
                blur-[40px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                min-h-[420px]
                items-center
                justify-center
              "
            >
              <div
                className="
                  absolute
                  bottom-[16%]
                  h-10
                  w-44
                  rounded-full
                  bg-[#D5FBFC]/[0.18]
                  blur-2xl
                "
              />
            </div>

            <div
              className="
                absolute
                bottom-[8%]
                right-[3%]
                rounded-full
                border
                border-white/[0.16]
                bg-white/[0.08]
                px-4
                py-2
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#E0F8F9]
                shadow-[0_12px_35px_rgba(0,0,0,.1)]
                backdrop-blur-xl
              "
            >
              Water / Media / Data
            </div>

            <div
              className="
                absolute
                left-[10%]
                top-[18%]
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/45
              "
            >
              <span className="h-px w-6 bg-white/25" />
              01
            </div>
          </div>
        </div>

        {/* =================================================
            STATS
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.95,
          }}
          className="
            mt-10
            grid
            max-w-[760px]
            grid-cols-2
            gap-3
            md:grid-cols-4
          "
        >
          {[
            ["10M+", "Бутылок в месяц"],
            ["47", "Регионов"],
            ["98%", "Возвратов"],
            ["1.2K", "Партнёров"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-white/[0.12]
                bg-white/[0.065]
                p-5
                shadow-[0_18px_50px_rgba(0,0,0,.1)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.10]
              "
            >
              <div
                className="
                  absolute
                  right-0
                  top-0
                  h-px
                  w-20
                  bg-gradient-to-l
                  from-[#E0FCFD]/45
                  to-transparent
                "
              />

              <div
                className="
                  mb-4
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#E0FCFD]
                  shadow-[0_0_12px_rgba(224,252,253,.75)]
                "
              />

              <div
                className="
                  text-2xl
                  font-black
                  tracking-[-0.04em]
                  text-white
                "
              >
                {value}
              </div>

              <div
                className="
                  mt-2
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#D9F2F3]
                "
              >
                {label}
              </div>

              <div
                className="
                  mt-5
                  h-px
                  w-full
                  bg-white/[0.12]
                "
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* =====================================================
          HERO → ABOUT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-30
          h-[180px]
          bg-gradient-to-b
          from-transparent
          via-[#285E68]/45
          to-[#1A4A55]
        "
      />
    </section>
  );
}
