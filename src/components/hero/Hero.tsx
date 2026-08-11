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
        bg-white
        text-slate-950
      "
    >
      {/* =====================================================
          BASE BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-white" />

      {/* =====================================================
          SOFT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[18%]
          -top-[20%]
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-100/[0.28]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[15%]
          top-[5%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-slate-100
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[35%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-50/[0.5]
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
          opacity-[0.035]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(15,23,42,.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(15,23,42,.22) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "90px 90px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 76%)",
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
          border-slate-900/[0.06]
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
          border-slate-900/[0.045]
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
          border-slate-900/[0.03]
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
          bg-cyan-500
          shadow-[0_0_20px_rgba(6,182,212,.25)]
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
          bg-cyan-400
          shadow-[0_0_16px_rgba(34,211,238,.25)]
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
          bg-slate-400
          shadow-[0_0_18px_rgba(100,116,139,.2)]
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
          bg-slate-400
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
          px-5
          pb-20
          pt-24
          sm:px-6
          sm:pb-24
          sm:pt-28
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
            mb-6
            flex
            items-center
            justify-between
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.25em]
            text-slate-500
            sm:mb-8
            sm:text-[9px]
            sm:tracking-[0.28em]
          "
        >
          <span className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-500
                shadow-[0_0_12px_rgba(6,182,212,.35)]
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
            gap-4
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-6
          "
        >
          {/* =================================================
              LEFT
          ================================================= */}

          <div className="relative z-40 max-w-[820px]">
            {/* BADGE */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-slate-900/[0.09]
                bg-slate-900/[0.035]
                px-4
                py-2
                shadow-[0_12px_35px_rgba(15,23,42,.06)]
                backdrop-blur-xl
                sm:mb-6
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-500
                  shadow-[0_0_12px_rgba(6,182,212,.35)]
                "
              />

              <div>
                <div
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.18em]
                    text-slate-950
                  "
                >
                  QR AD NETWORK
                </div>

                <div
                  className="
                    mt-0.5
                    text-[8px]
                    tracking-[0.22em]
                    text-slate-500
                  "
                >
                  DIGITAL WATER
                </div>
              </div>
            </motion.div>

            {/* TITLE */}

            <div className="text-slate-950">
              <HeroTitle />
            </div>

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
                bg-cyan-100/[0.45]
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
                mt-6
                h-[2px]
                bg-gradient-to-r
                from-cyan-600
                via-cyan-400
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
                mt-5
                max-w-[620px]
                text-sm
                font-medium
                leading-7
                text-slate-600
                sm:mt-6
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
                mt-7
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
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
                  bg-slate-950
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_18px_50px_rgba(15,23,42,.16)]
                  transition-all
                  duration-300
                  hover:bg-slate-800
                  hover:shadow-[0_22px_60px_rgba(15,23,42,.22)]
                "
              >
                <span className="relative z-10">
                  Запустить кампанию
                  <span className="ml-3">→</span>
                </span>
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
                  border-slate-900/[0.12]
                  bg-white
                  px-7
                  py-4
                  text-sm
                  font-semibold
                  text-slate-900
                  shadow-[0_10px_30px_rgba(15,23,42,.05)]
                  transition-all
                  duration-300
                  hover:border-slate-900/[0.2]
                  hover:bg-slate-50
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
                      bg-slate-900/[0.06]
                      text-[10px]
                      text-slate-700
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:bg-cyan-500/[0.12]
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
              mt-[-10px]
              min-h-[300px]
              sm:min-h-[380px]
              lg:mt-0
              lg:min-h-[620px]
            "
          >
            {/* CENTRAL LIGHT */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-100/[0.5]
                blur-[100px]
                sm:h-[420px]
                sm:w-[420px]
                sm:blur-[130px]
              "
            />

            {/* OUTER RING */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[320px]
                w-[320px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-slate-900/[0.06]
                sm:h-[500px]
                sm:w-[500px]
              "
            />

            {/* INNER RING */}

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
                border
                border-slate-900/[0.045]
                sm:h-[390px]
                sm:w-[390px]
              "
            />

            {/* GLASS STAGE */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[270px]
                w-[270px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-slate-900/[0.07]
                bg-slate-900/[0.025]
                shadow-[0_30px_90px_rgba(15,23,42,.08)]
                sm:h-[420px]
                sm:w-[420px]
              "
            />

            {/* 3D MODEL STAGE */}

            <div
              className="
                relative
                z-10
                flex
                h-full
                min-h-[300px]
                items-center
                justify-center
                sm:min-h-[380px]
              "
            >
              <div
                className="
                  absolute
                  bottom-[12%]
                  h-8
                  w-32
                  rounded-full
                  bg-slate-900/[0.08]
                  blur-2xl
                  sm:h-10
                  sm:w-44
                "
              />
            </div>

            {/* DATA LABEL */}

            <div
              className="
                absolute
                bottom-[5%]
                right-[2%]
                rounded-full
                border
                border-slate-900/[0.08]
                bg-white/[0.8]
                px-3
                py-2
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-500
                shadow-[0_10px_30px_rgba(15,23,42,.06)]
                backdrop-blur-xl
                sm:px-4
                sm:text-[8px]
              "
            >
              Water / Media / Data
            </div>

            {/* CORNER MARKER */}

            <div
              className="
                absolute
                left-[8%]
                top-[14%]
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              <span className="h-px w-6 bg-slate-300" />
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
            mt-8
            grid
            max-w-[760px]
            grid-cols-2
            gap-3
            sm:mt-10
            md:grid-cols-4
          "
        >
          {[
            ["10К+", "Бутылок в месяц"],
            ["3", "города"],
            ["98%", "Возвратов"],
            ["200+", "Партнёров"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="
                group
                relative
                overflow-hidden
                rounded-[20px]
                border
                border-slate-900/[0.08]
                bg-white/[0.75]
                p-4
                shadow-[0_15px_40px_rgba(15,23,42,.05)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
                sm:p-5
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
                  from-cyan-500/40
                  to-transparent
                "
              />

              <div
                className="
                  mb-3
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-500
                  shadow-[0_0_10px_rgba(6,182,212,.3)]
                  sm:mb-4
                "
              />

              <div
                className="
                  text-2xl
                  font-black
                  tracking-[-0.04em]
                  text-slate-950
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
                  text-slate-500
                "
              >
                {label}
              </div>

              <div
                className="
                  mt-4
                  h-px
                  w-full
                  bg-slate-900/[0.08]
                  sm:mt-5
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
          h-[120px]
          bg-gradient-to-b
          from-transparent
          to-slate-50
          sm:h-[160px]
        "
      />
    </section>
  );
}