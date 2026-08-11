import { motion } from "framer-motion";

const footerLinks = [
  { label: "История", href: "#story" },
  { label: "Возможности", href: "#features" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Footer() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#03171E]
        text-white
      "
    >
      {/* =================================================
          TOP OCEAN TRANSITION
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-[#061F26]
          via-[#04212A]
          to-transparent
        "
      />

      {/* =================================================
          DEEP OCEAN GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[650px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/[0.035]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[45%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-sky-500/[0.025]
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          bottom-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/[0.02]
          blur-[170px]
        "
      />

      {/* =================================================
          OCEAN GRID
      ================================================= */}

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
          backgroundSize: "120px 120px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {/* =================================================
          TECHNICAL LINES
      ================================================= */}

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

      {/* =================================================
          ORBIT
      ================================================= */}

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

      {/* =================================================
          CONTENT
      ================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1700px]
          px-8
          pb-10
          pt-32
          md:px-12
          md:pb-12
          md:pt-40
          lg:px-16
          lg:pb-14
          lg:pt-48
        "
      >
        {/* =================================================
            MAIN GRID
        ================================================= */}

        <div
          className="
            grid
            gap-16
            md:grid-cols-2
            lg:grid-cols-[1.4fr_0.8fr_1fr]
            lg:gap-24
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
          >
            <div
              className="
                text-5xl
                font-light
                tracking-[-0.05em]
                text-white
                md:text-6xl
                lg:text-7xl
              "
            >
              MiMiSu
            </div>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-cyan-300/45
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-300/70
                  shadow-[0_0_12px_rgba(103,232,249,.45)]
                "
              />

              Physical Advertising Platform
            </div>

            <p
              className="
                mt-7
                max-w-md
                text-sm
                leading-7
                text-white/35
              "
            >
              Физический рекламный носитель,
              который превращает обычную бутылку воды
              в реальный контакт бренда с аудиторией.
            </p>

            <motion.button
              type="button"
              onClick={() => scrollTo("#calculator")}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-9
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-300/20
                bg-cyan-300/[0.045]
                px-6
                py-3
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-cyan-100/80
                transition-all
                duration-300
                hover:border-cyan-300/40
                hover:bg-cyan-300/[0.08]
                hover:text-cyan-100
                hover:shadow-[0_0_35px_rgba(34,211,238,.12)]
              "
            >
              Запустить кампанию
            </motion.button>
          </motion.div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease,
            }}
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-cyan-200/25
              "
            >
              Навигация
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              {footerLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  whileHover={{
                    x: 5,
                  }}
                  className="
                    group
                    flex
                    w-fit
                    items-center
                    gap-3
                    text-left
                    text-sm
                    text-white/45
                    transition-colors
                    duration-300
                    hover:text-cyan-200
                  "
                >
                  <span
                    className="
                      font-mono
                      text-[9px]
                      tracking-widest
                      text-cyan-300/15
                      transition-colors
                      duration-300
                      group-hover:text-cyan-300/50
                    "
                  >
                    0{index + 1}
                  </span>

                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* =================================================
              CONTACTS
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease,
            }}
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-cyan-200/25
              "
            >
              Контакты
            </p>

            <div className="mt-7 space-y-4">
              <a
                href="mailto:hello@mimisu.kz"
                className="
                  block
                  w-fit
                  text-sm
                  text-white/45
                  transition-colors
                  duration-300
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
                  text-sm
                  text-white/45
                  transition-colors
                  duration-300
                  hover:text-cyan-200
                "
              >
                +7 706 411 10 40
              </a>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  pt-4
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/20
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-300/70
                    shadow-[0_0_10px_rgba(34,211,238,.6)]
                  "
                />

                Работаем по всему Казахстану
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

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
            once: false,
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="
            mt-20
            h-px
            w-full
            origin-left
            bg-gradient-to-r
            from-cyan-300/[0.12]
            via-white/[0.05]
            to-transparent
            md:mt-24
          "
        />

        {/* =================================================
            BOTTOM
        ================================================= */}

        <div
          className="
            flex
            flex-col
            gap-5
            pt-7
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-white/20
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <span>© 2026 MIMISU</span>

          <span className="text-cyan-200/20">
            Physical Advertising Platform
          </span>

          <span>Made for Real Contact</span>
        </div>
      </div>

      {/* =================================================
          BOTTOM OCEAN FADE
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#020F15]
          to-transparent
        "
      />
    </footer>
  );
}