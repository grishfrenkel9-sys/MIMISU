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
        setScrolled(window.scrollY > 30);
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

  const closeMenu = () => setOpen(false);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);

    if (!element) {
      closeMenu();
      return;
    }

    const offset = 80;
    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    closeMenu();
  };

  return (
    <>
      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          h-20
          transition-all
          duration-500
          ${
            scrolled
              ? `
                border-b
                border-[#092B32]/[0.08]
                bg-[#F5F9F8]/90
                shadow-[0_8px_30px_rgba(9,43,50,.06)]
                backdrop-blur-xl
              `
              : `
                border-b
                border-[#092B32]/[0.05]
                bg-[#F5F9F8]/60
                backdrop-blur-md
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
            px-5
            sm:px-8
            lg:px-12
          "
        >
          {/* DESKTOP */}

          <div className="hidden items-center gap-7 lg:flex">
            {/* LOGO */}

            <button
              type="button"
              onClick={() => scrollTo("#hero")}
              className="
                group
                relative
                text-[27px]
                font-light
                uppercase
                tracking-[0.42em]
                text-[#092B32]
                transition-all
                duration-300
                hover:text-[#2F6873]
              "
            >
              MIMISU

              <span
                className="
                  pointer-events-none
                  absolute
                  -inset-x-4
                  -inset-y-3
                  -z-10
                  rounded-full
                  bg-[#2F6873]/0
                  blur-xl
                  transition-all
                  duration-500
                  group-hover:bg-[#2F6873]/10
                "
              />
            </button>

            <div className="h-5 w-px bg-[#092B32]/[0.12]" />

            {/* LINKS */}

            <nav className="flex items-center gap-6">
              {links.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollTo(link.href)}
                  className="
                    group
                    relative
                    py-2
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.20em]
                    text-[#092B32]/80
                    transition-colors
                    duration-300
                    hover:text-[#092B32]
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
                      bg-[#2F6873]
                      shadow-[0_0_8px_rgba(47,104,115,.30)]
                      transition-[width]
                      duration-300
                      group-hover:w-full
                    "
                  />
                </button>
              ))}
            </nav>

            <div className="h-5 w-px bg-[#092B32]/[0.12]" />

            {/* CTA */}

            <button
              type="button"
              onClick={() => scrollTo("#calculator")}
              className="
                group
                relative
                h-10
                overflow-hidden
                rounded-full
                border
                border-[#2F6873]/30
                bg-[#2F6873]/[0.07]
                px-6
                text-[11px]
                font-medium
                uppercase
                tracking-[0.17em]
                text-[#092B32]
                transition-all
                duration-400
                hover:-translate-y-0.5
                hover:border-[#2F6873]/55
                hover:bg-[#2F6873]/[0.12]
                hover:shadow-[0_10px_30px_rgba(47,104,115,.12)]
                active:translate-y-0
                active:scale-[0.98]
              "
            >
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
                  via-white/60
                  to-transparent
                  transition-[left]
                  duration-[850ms]
                  group-hover:left-[130%]
                "
              />

              <span className="relative z-10">
                Запустить кампанию
              </span>
            </button>
          </div>

          {/* MOBILE */}

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open ? "Закрыть меню" : "Открыть меню"
            }
            aria-expanded={open}
            className="
              ml-auto
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#092B32]/15
              bg-white/70
              text-[#092B32]
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-[#2F6873]/40
              hover:bg-[#2F6873]/[0.06]
              active:scale-95
              lg:hidden
            "
          >
            {open ? (
              <X size={19} strokeWidth={1.6} />
            ) : (
              <Menu size={19} strokeWidth={1.6} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}

      <div
        className={`
          fixed
          inset-0
          z-40
          lg:hidden
          transition-opacity
          duration-300
          ${
            open
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <button
          type="button"
          aria-label="Закрыть меню"
          onClick={closeMenu}
          className="
            absolute
            inset-0
            h-full
            w-full
            bg-[#092B32]/25
            backdrop-blur-md
          "
        />

        <div
          className={`
            absolute
            inset-x-0
            top-20
            overflow-hidden
            border-t
            border-[#092B32]/[0.08]
            bg-[#F5F9F8]
            shadow-[0_20px_60px_rgba(9,43,50,.12)]
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
                onClick={() => scrollTo(link.href)}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-[#092B32]/[0.07]
                  px-7
                  py-5
                  text-left
                  text-lg
                  font-light
                  text-[#092B32]
                  transition-all
                  duration-300
                  hover:bg-[#2F6873]/[0.05]
                  hover:pl-9
                  hover:text-[#2F6873]
                "
              >
                <span>{link.label}</span>

                <span
                  className="
                    font-mono
                    text-[9px]
                    tracking-[0.3em]
                    text-[#2F6873]/45
                    transition-colors
                    duration-300
                    group-hover:text-[#2F6873]
                  "
                >
                  0{index + 1}
                </span>
              </button>
            ))}
          </nav>

          <div className="p-7">
            <button
              type="button"
              onClick={() => scrollTo("#calculator")}
              className="
                group
                relative
                flex
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-[#2F6873]/30
                bg-[#2F6873]/[0.07]
                py-4
                text-[11px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#092B32]
                transition-all
                duration-400
                hover:border-[#2F6873]/55
                hover:bg-[#2F6873]/[0.12]
                active:scale-[0.98]
              "
            >
              <span className="relative z-10">
                Запустить кампанию
              </span>

              <span
                className="
                  relative
                  z-10
                  ml-3
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#2F6873]
                  shadow-[0_0_8px_rgba(47,104,115,.45)]
                "
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}