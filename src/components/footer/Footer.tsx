const footerLinks = [
  { label: "История", href: "#story" },
  { label: "Возможности", href: "#features" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
];

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
        z-30
        overflow-hidden
        border-t
        border-white/[0.06]
        bg-[#030404]
        text-white
      "
    >
      {/* Ambient glow */}

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
          bg-cyan-400/[0.025]
          blur-[150px]
        "
      />

      {/* Main */}

      <div
        className="
          relative
          mx-auto
          max-w-[1700px]
          px-8
          py-20

          md:px-12
          md:py-24

          lg:px-16
          lg:py-28
        "
      >
        <div
          className="
            grid
            gap-16

            md:grid-cols-2

            lg:grid-cols-[1.4fr_0.8fr_1fr]
            lg:gap-20
          "
        >
          {/* BRAND */}

          <div>
            <div
              className="
                text-5xl
                font-light
                tracking-[-0.04em]
                text-white

                md:text-6xl

                lg:text-7xl
              "
            >
              MiMiSu
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
              Физический рекламный носитель, который превращает
              обычную бутылку воды в реальный контакт бренда с
              аудиторией.
            </p>

            <button
              type="button"
              onClick={() => scrollTo("#calculator")}
              className="
                mt-8
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-300/20
                bg-cyan-300/[0.04]
                px-6
                py-3

                text-[10px]
                uppercase
                tracking-[0.2em]
                text-cyan-200

                transition-all
                duration-300

                hover:border-cyan-300/40
                hover:bg-cyan-300/[0.08]
                hover:shadow-[0_0_30px_rgba(34,211,238,.12)]
              "
            >
              Запустить кампанию
            </button>
          </div>

          {/* NAVIGATION */}

          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/20
              "
            >
              Навигация
            </p>

            <nav className="mt-7 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="
                    w-fit
                    text-left
                    text-sm
                    text-white/45

                    transition-colors
                    duration-300

                    hover:text-cyan-300
                  "
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* CONTACTS */}

          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/20
              "
            >
              Контакты
            </p>

            <div className="mt-7 space-y-4">
              <a
                href="mailto:hello@mimisu.kz"
                className="
                  block
                  text-sm
                  text-white/45
                  transition-colors
                  duration-300
                  hover:text-cyan-300
                "
              >
                hello@mimisu.kz
              </a>

              <a
                href="tel:+77000000000"
                className="
                  block
                  text-sm
                  text-white/45
                  transition-colors
                  duration-300
                  hover:text-cyan-300
                "
              >
                +7 706 411 10 40
              </a>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  pt-3
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white/20
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_10px_rgba(34,211,238,.8)]
                  "
                />

                Работаем по всему Казахстану
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div
          className="
            mt-16
            h-px
            w-full
            bg-white/[0.06]

            md:mt-20
          "
        />

        {/* Bottom */}

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

          <span>Physical Advertising Platform</span>

          <span>Made for Real Contact</span>
        </div>
      </div>
    </footer>
  );
}
