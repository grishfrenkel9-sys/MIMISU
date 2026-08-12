import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const { t } = useLanguage();

  const navigation = [
    {
      label: t.nav.about,
      id: "about",
    },
    {
      label: t.nav.story,
      id: "story",
    },
    {
      label: t.nav.features,
      id: "features",
    },
    {
      label: t.nav.calculator,
      id: "calculator",
    },
    {
      label: t.nav.faq,
      id: "faq",
    },
    {
      label: t.nav.contacts,
      id: "contacts",
    },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer
      id="contacts"
      className="
        relative
        overflow-hidden
        bg-[#03171E]
        text-white
      "
    >
      {/* =========================================
          TOP OCEAN TRANSITION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-16
          bg-gradient-to-b
          from-[#061F26]
          via-[#04212A]
          to-transparent

          xs:h-20
          sm:h-32
          lg:h-40
        "
      />

      {/* =========================================
          DEEP OCEAN GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[260px]
          w-[260px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/[0.035]
          blur-[80px]

          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[150px]

          lg:h-[650px]
          lg:w-[650px]
          lg:blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[140px]
          top-[45%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-sky-500/[0.025]
          blur-[90px]

          sm:-left-[220px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[140px]
          bottom-[10%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-cyan-400/[0.02]
          blur-[90px]

          sm:-right-[220px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[170px]
        "
      />

      {/* =========================================
          GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(103,232,249,.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(103,232,249,.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {/* =========================================
          TECHNICAL LINES
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-[18%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/[0.055]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          bottom-[25%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-300/[0.035]
          to-transparent
        "
      />

      {/* =========================================
          ORBIT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[100px]
          top-[18%]
          hidden
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-cyan-300/[0.025]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[30px]
          top-[25%]
          hidden
          h-[220px]
          w-[220px]
          rounded-full
          border
          border-cyan-300/[0.018]
          lg:block
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1700px]
          px-5
          pb-6
          pt-20

          xs:pb-7
          xs:pt-24

          sm:px-7
          sm:pb-10
          sm:pt-32

          md:px-12
          md:pb-12
          md:pt-40

          lg:px-16
          lg:pb-14
          lg:pt-48
        "
      >
        {/* =========================================
            MAIN GRID
        ========================================= */}

        <div
          className="
            grid
            gap-9

            xs:gap-10

            sm:gap-14

            md:grid-cols-2
            md:gap-16

            lg:grid-cols-[1.4fr_0.8fr_1fr]
            lg:gap-24
          "
        >
          {/* =========================================
              BRAND
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
          >
            <div
              className="
                text-[2.8rem]
                font-light
                leading-none
                tracking-[-0.06em]
                text-white

                xs:text-[3.2rem]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              MiMiSu
            </div>

            <div
              className="
                mt-3
                flex
                items-center
                gap-2
                text-[7px]
                uppercase
                tracking-[0.2em]
                text-cyan-300/45

                xs:mt-4
                sm:mt-5
                sm:gap-3
                sm:text-[9px]
                sm:tracking-[0.3em]
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  shrink-0
                  rounded-full
                  bg-cyan-300/70
                  shadow-[0_0_12px_rgba(103,232,249,.45)]
                "
              />

              {t.footer.platform}
            </div>

            <p
              className="
                mt-5
                max-w-[300px]
                text-[12px]
                leading-5
                text-white/35

                xs:mt-6
                xs:text-[13px]
                xs:leading-6

                sm:mt-7
                sm:max-w-md
                sm:text-sm
                sm:leading-7
              "
            >
              {t.footer.description}
            </p>

            <motion.button
              type="button"
              onClick={() => scrollToSection("calculator")}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-6
                inline-flex
                min-h-[40px]
                items-center
                rounded-full
                border
                border-cyan-300/20
                bg-cyan-300/[0.045]
                px-4
                py-2
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-cyan-100/80
                transition-all
                duration-300

                xs:mt-7
                xs:px-5
                xs:text-[9px]

                sm:mt-9
                sm:px-6
                sm:py-3
                sm:text-[10px]
                sm:tracking-[0.2em]

                hover:border-cyan-300/40
                hover:bg-cyan-300/[0.08]
                hover:text-cyan-100
                hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
              "
            >
              {t.footer.campaign}
            </motion.button>
          </motion.div>

          {/* =========================================
              NAVIGATION
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease,
            }}
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-cyan-200/25

                sm:text-[10px]
                sm:tracking-[0.3em]
              "
            >
              {t.footer.navigation}
            </p>

            <nav
              className="
                mt-4
                flex
                flex-col
                gap-2.5

                xs:mt-5
                xs:gap-3

                sm:mt-7
                sm:gap-4
              "
            >
              {navigation.map((link, index) => (
                <motion.button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{
                    x: 5,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    group
                    flex
                    min-h-[22px]
                    w-fit
                    items-center
                    gap-2.5
                    text-left
                    text-[12px]
                    text-white/45
                    transition-colors
                    duration-300

                    xs:text-[13px]
                    sm:text-sm

                    hover:text-cyan-200
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[7px]
                      tracking-widest
                      text-cyan-300/15
                      transition-colors
                      duration-300

                      sm:text-[9px]

                      group-hover:text-cyan-300/50
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* =========================================
              CONTACTS
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease,
            }}
          >
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-cyan-200/25

                sm:text-[10px]
                sm:tracking-[0.3em]
              "
            >
              {t.footer.contacts}
            </p>

            <div
              className="
                mt-4
                space-y-2.5

                xs:mt-5
                xs:space-y-3

                sm:mt-7
                sm:space-y-4
              "
            >
              <a
                href="mailto:hello@mimisu.kz"
                className="
                  block
                  w-fit
                  text-[12px]
                  text-white/45
                  transition-colors
                  duration-300

                  xs:text-[13px]
                  sm:text-sm

                  hover:text-cyan-200
                "
              >
                hello@mimisu.kz
              </a>

              <a
                href="tel:+77064111040"
                className="
                  block
                  w-fit
                  text-[12px]
                  text-white/45
                  transition-colors
                  duration-300

                  xs:text-[13px]
                  sm:text-sm

                  hover:text-cyan-200
                "
              >
                +7 706 411 10 40
              </a>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  pt-2
                  text-[7px]
                  uppercase
                  tracking-[0.11em]
                  leading-5
                  text-white/20

                  xs:gap-2.5
                  xs:pt-3
                  xs:text-[8px]

                  sm:gap-3
                  sm:pt-4
                  sm:text-[10px]
                  sm:tracking-[0.18em]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-cyan-300/70
                    shadow-[0_0_10px_rgba(34,211,238,.6)]
                  "
                />

                {t.footer.location}
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================
            DIVIDER
        ========================================= */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="
            mt-10
            h-px
            w-full
            origin-left
            bg-gradient-to-r
            from-cyan-300/[0.12]
            via-white/[0.05]
            to-transparent

            xs:mt-12
            sm:mt-20
            md:mt-24
          "
        />

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div
          className="
            flex
            flex-col
            gap-2.5
            pt-5
            text-[7px]
            uppercase
            tracking-[0.16em]
            leading-5
            text-white/20

            xs:gap-3
            xs:pt-6
            xs:text-[8px]

            sm:gap-4
            sm:pt-7
            sm:text-[9px]
            sm:tracking-[0.25em]

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>{t.footer.copyright}</span>

          <span className="text-cyan-200/20">
            {t.footer.platform}
          </span>

          <span>{t.footer.slogan}</span>
        </div>
      </div>

      {/* =========================================
          BOTTOM OCEAN FADE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-16
          bg-gradient-to-t
          from-[#020F15]
          to-transparent

          sm:h-32
        "
      />
    </footer>
  );
}