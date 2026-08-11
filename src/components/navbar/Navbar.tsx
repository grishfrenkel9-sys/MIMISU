import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { links } from "./navLinks";

const SCROLL_THRESHOLD = 30;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* =========================================
     NAVBAR SCROLL STATE
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     ESCAPE
  ========================================= */

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  /* =========================================
     SMOOTH NAVIGATION
  ========================================= */

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    console.log("NAV CLICK:", id);
    console.log("ELEMENT:", element);

    if (!element) {
      console.error(`Элемент #${id} не найден`);
      setOpen(false);
      return;
    }

    setOpen(false);

    const lenis = (
      window as Window & {
        __mimisuLenis?: {
          scrollTo: (
            target: HTMLElement,
            options?: {
              duration?: number;
              offset?: number;
              easing?: (t: number) => number;
            }
          ) => void;
        };
      }
    ).__mimisuLenis;

    /* =========================================
       LENIS
    ========================================= */

    if (lenis) {
      lenis.scrollTo(element, {
        duration: 1.4,
        offset: -80,
        easing: (t: number) =>
          1 - Math.pow(1 - t, 4),
      });

      return;
    }

    /* =========================================
       FALLBACK
    ========================================= */

    const elementTop =
      element.getBoundingClientRect().top +
      window.scrollY;

    window.scrollTo({
      top: Math.max(0, elementTop - 80),
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        h-20
        transition-all
        duration-500
        ease-[cubic-bezier(0.16,1,0.3,1)]

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
              border-transparent
              bg-transparent
              backdrop-blur-0
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
        <NavbarDesktop
          links={links}
          scrollTo={scrollTo}
        />

        {/* MOBILE */}

        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            aria-label="На главную"
            className="
              text-[21px]
              font-light
              uppercase
              tracking-[0.38em]
              text-[#092B32]
              transition-colors
              duration-300
              hover:text-[#2F6873]
            "
          >
            MIMISU
          </button>

          <div className="ml-4">
            <NavbarMobile
              open={open}
              setOpen={setOpen}
              links={links}
              scrollTo={scrollTo}
            />
          </div>
        </div>
      </div>
    </header>
  );
}