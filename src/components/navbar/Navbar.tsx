
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
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 30;

        setScrolled((prev) =>
          prev === nextScrolled ? prev : nextScrolled
        );

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.slice(1);
    const element = document.getElementById(id);

    if (!element) return;

    const offset = 90;

    window.scrollTo({
      top:
        element.getBoundingClientRect().top +
        window.scrollY -
        offset,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          h-20
          transition-[background-color,border-color,box-shadow]
          duration-500
          ease-out
          ${
            scrolled
              ? `
                border-b
                border-white/[0.08]
                bg-[#173F49]/85
                shadow-[0_4px_24px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
              `
              : `
                border-b
                border-transparent
                bg-transparent
              `
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-full
            max-w-[1700px]
            items-center
            justify-between
            px-8
            lg:px-12
          "
        >
          {/* =================================================
              DESKTOP
          ================================================= */}

          <div className="hidden items-center gap-8 lg:flex">
            {/* =================================================
                LOGO
            ================================================= */}

            <button
              type="button"
              onClick={() => scrollToSection("#hero")}
              className="
                group
                relative
                text-[28px]
                font-light
                uppercase
                tracking-[0.45em]
                text-[#F0FEFF]
                transition-all
                duration-500
                ease-out
                hover:text-[#D5FBFC]
                hover:[text-shadow:0_0_12px_rgba(213,251,252,0.35),0_0_28px_rgba(213,251,252,0.18)]
              "
            >
              <span
                className="
                  pointer-events-none
                  absolute
                  -inset-x-4
                  -inset-y-3
                  -z-10
                  rounded-full
                  bg-[#D5FBFC]/0
                  opacity-0
                  blur-xl
                  transition-all
                  duration-500
                  ease-out
                  group-hover:bg-[#D5FBFC]/10
                  group-hover:opacity-100
                "
              />

              <span className="relative">
                MIMISU
              </span>
            </button>

            {/* DIVIDER */}

            <div className="h-5 w-px bg-white/[0.12]" />

            {/* =================================================
                LINKS
            ================================================= */}

            <nav className="flex items-center gap-7">
              {links.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() =>
                    scrollToSection(link.href)
                  }
                  className="
                    group
                    relative
                    py-2
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[0.22em]
                    text-[#D8F3F5]/75
                    transition-colors
                    duration-300
                    ease-out
                    hover:text-white
                  "
                >
                  {link.label}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-px
                      w-0
                      bg-[#D5FBFC]
                      shadow-[0_0_8px_rgba(213,251,252,0.35)]
                      transition-[width]
                      duration-300
                      ease-out
                      group-hover:w-full
                    "
                  />
                </button>
              ))}
            </nav>

            {/* DIVIDER */}

            <div className="h-5 w-px bg-white/[0.12]" />

            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                scrollToSection("#calculator")
              }
              className="
                group
                relative
                h-11
                overflow-hidden
                rounded-full
                border
                border-[#D5FBFC]/30
                bg-white/[0.06]
                px-7
                text-[13px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#E9FCFD]

                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]

                hover:-translate-y-1
                hover:border-[#D5FBFC]/60
                hover:bg-[#D5FBFC]/[0.10]
                hover:text-white
                hover:shadow-[0_10px_35px_rgba(213,251,252,0.14)]

                active:translate-y-0
                active:scale-[0.98]
              "
            >
              {/* INNER GLOW */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-[#D5FBFC]/0
                  transition-colors
                  duration-500
                  group-hover:bg-[#D5FBFC]/[0.04]
                "
              />

              {/* SHINE */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-[60%]
                  w-[35%]
                  -skew-x-[20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-[left]
                  duration-[900ms]
                  ease-out
                  group-hover:left-[130%]
                "
              />

              <span
                className="
                  relative
                  z-10
                  transition-[letter-spacing]
                  duration-500
                  ease-out
                  group-hover:tracking-[0.21em]
                "
              >
                Запустить кампанию
              </span>
            </button>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="
              group
              ml-auto
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#D5FBFC]/25
              bg-white/[0.06]
              text-[#D5FBFC]
              backdrop-blur-md
              transition-all
              duration-300
              ease-out
              hover:-translate-y-0.5
              hover:border-[#D5FBFC]/50
              hover:bg-[#D5FBFC]/[0.09]
              hover:text-white
              hover:shadow-[0_6px_24px_rgba(213,251,252,0.10)]
              lg:hidden
            "
            aria-label={
              open ? "Закрыть меню" : "Открыть меню"
            }
          >
            {open ? (
              <X
                size={20}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                "
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300
                "
              />
            )}
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`
          fixed
          inset-0
          z-40
          lg:hidden
          transition-[opacity,visibility]
          duration-300
          ${
            open
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      >
        {/* BACKDROP */}

        <div
          className="
            absolute
            inset-0
            bg-[#173F49]/95
            backdrop-blur-xl
          "
          onClick={() => setOpen(false)}
        />

        {/* MENU */}

        <div
          className={`
            absolute
            inset-x-0
            top-20
            overflow-hidden
            border-t
            border-white/[0.08]
            bg-[#173F49]
            transition-transform
            duration-500
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              open
                ? "translate-y-0"
                : "-translate-y-4"
            }
          `}
        >
          <nav>
            {links.map((link, index) => (
              <button
                key={link.href}
                type="button"
                onClick={() =>
                  scrollToSection(link.href)
                }
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  px-8
                  py-5
                  text-left
                  text-xl
                  font-light
                  text-[#D8F3F5]
                  transition-all
                  duration-300
                  hover:bg-white/[0.04]
                  hover:pl-10
                  hover:text-white
                "
              >
                <span>{link.label}</span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.3em]
                    text-[#A9DDE1]/40
                    transition-colors
                    duration-300
                    group-hover:text-[#D5FBFC]/70
                  "
                >
                  0{index + 1}
                </span>
              </button>
            ))}
          </nav>

          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <div className="p-8">
            <button
              type="button"
              onClick={() =>
                scrollToSection("#calculator")
              }
              className="
                group
                relative
                w-full
                overflow-hidden
                rounded-full
                border
                border-[#D5FBFC]/30
                bg-white/[0.06]
                py-4
                text-sm
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#E9FCFD]

                transition-all
                duration-500
                ease-[cubic-bezier(0.16,1,0.3,1)]

                hover:-translate-y-1
                hover:border-[#D5FBFC]/60
                hover:bg-[#D5FBFC]/[0.10]
                hover:text-white
                hover:shadow-[0_10px_35px_rgba(213,251,252,0.14)]

                active:translate-y-0
                active:scale-[0.98]
              "
            >
              {/* INNER GLOW */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-full
                  bg-[#D5FBFC]/0
                  transition-colors
                  duration-500
                  group-hover:bg-[#D5FBFC]/[0.04]
                "
              />

              {/* SHINE */}

              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-[60%]
                  w-[35%]
                  -skew-x-[20deg]
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-[left]
                  duration-[900ms]
                  ease-out
                  group-hover:left-[130%]
                "
              />

              <span
                className="
                  relative
                  z-10
                  transition-[letter-spacing]
                  duration-500
                  ease-out
                  group-hover:tracking-[0.22em]
                "
              >
                Запустить кампанию
              </span>

              <span
                className="
                  relative
                  z-10
                  ml-3
                  inline-block
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#D5FBFC]/60
                  align-middle
                  transition-all
                  duration-500
                  ease-out
                  group-hover:scale-125
                  group-hover:bg-[#D5FBFC]
                  group-hover:shadow-[0_0_12px_rgba(213,251,252,0.9)]
                "
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}