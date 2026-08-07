import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "История", href: "#story" },
  { label: "Возможности", href: "#features" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);

    if (!element) return;

    const navbarOffset = 90;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarOffset,
      behavior: "smooth",
    });

    window.history.pushState(null, "", href);

    setOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-500

          ${
            scrolled
              ? "border-b border-white/10 bg-black/35 backdrop-blur-3xl"
              : "bg-transparent"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-20
            max-w-[1700px]
            items-center
            justify-between
            px-8
            lg:px-12
          "
        >
          {/* ================= DESKTOP ================= */}

          <div className="hidden items-center gap-8 lg:flex">
            {/* Logo */}

            <button
              type="button"
              onClick={() => scrollToSection("#hero")}
              className="
                text-[28px]
                font-light
                uppercase
                tracking-[0.45em]
                text-white

                transition-all
                duration-300

                hover:text-cyan-300
              "
            >
              MIMISU
            </button>

            {/* Divider */}

            <div className="h-5 w-px bg-white/10" />

            {/* Navigation */}

            <nav className="flex items-center gap-7">
              {links.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className="
                    group
                    relative

                    text-[13px]
                    uppercase
                    tracking-[0.22em]
                    text-white/55

                    transition-all
                    duration-300

                    hover:text-white
                  "
                >
                  {link.label}

                  {/* underline */}

                  <span
                    className="
                      absolute
                      -bottom-2
                      left-0
                      h-px
                      w-0

                      bg-cyan-300

                      transition-all
                      duration-300

                      group-hover:w-full
                    "
                  />

                  {/* glow */}

                  <span
                    className="
                      pointer-events-none
                      absolute
                      -inset-x-3
                      -inset-y-2
                      -z-10

                      rounded-full

                      bg-cyan-300/0
                      blur-xl

                      transition-all
                      duration-500

                      group-hover:bg-cyan-300/10
                    "
                  />
                </button>
              ))}
            </nav>

            {/* Divider */}

            <div className="h-5 w-px bg-white/10" />

            {/* CTA */}

            <button
              type="button"
              onClick={() => scrollToSection("#calculator")}
              className="
                group
                relative

                flex
                h-11
                items-center
                justify-center
                overflow-hidden

                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                px-7

                text-[13px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-white

                backdrop-blur-xl

                transition-all
                duration-500

                hover:border-cyan-400/40
                hover:bg-white/[0.06]
                hover:shadow-[0_0_30px_rgba(34,211,238,.18)]
              "
            >
              {/* Shine */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full

                  bg-gradient-to-r
                  from-transparent
                  via-white/10
                  to-transparent

                  transition-transform
                  duration-700

                  group-hover:translate-x-full
                "
              />

              <span className="relative z-10">
                Запустить кампанию
              </span>
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="
              ml-auto
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white
              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-cyan-400/40
              hover:text-cyan-300

              lg:hidden
            "
            aria-label="Открыть меню"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`
          fixed
          inset-0
          z-40
          flex
          flex-col

          bg-black/95
          pt-24

          backdrop-blur-3xl

          transition-all
          duration-500
          lg:hidden

          ${
            open
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      >
        {/* Links */}

        <nav className="flex flex-col">
          {links.map((link, index) => (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.href)}
              className={`
                border-b
                border-white/10

                px-10
                py-6

                text-left
                text-3xl
                font-light
                text-white

                transition-all
                duration-500

                hover:bg-white/[0.03]
                hover:pl-12
                hover:text-cyan-300

                ${
                  open
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }
              `}
              style={{
                transitionDelay: open
                  ? `${index * 70}ms`
                  : "0ms",
              }}
            >
              <span className="flex items-center justify-between">
                {link.label}

                <span className="text-xs tracking-[0.3em] text-white/20">
                  0{index + 1}
                </span>
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile CTA */}

        <div className="mt-auto p-10 pb-12">
          <button
            type="button"
            onClick={() => scrollToSection("#calculator")}
            className="
              group
              relative

              block
              w-full
              overflow-hidden

              rounded-full

              border
              border-cyan-400/30

              bg-cyan-300/[0.06]

              py-5

              text-center
              text-sm
              font-medium
              uppercase
              tracking-[0.18em]
              text-white

              transition-all
              duration-500

              hover:bg-cyan-300/10
              hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
            "
          >
            <span
              className="
                absolute
                inset-0
                -translate-x-full

                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent

                transition-transform
                duration-700

                group-hover:translate-x-full
              "
            />

            <span className="relative z-10">
              Запустить кампанию
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
