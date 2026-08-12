import { useEffect, useState } from "react";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

import { useLanguage } from "../../context/LanguageContext";

const SCROLL_THRESHOLD = 30;

export default function Navbar() {
  const { language, t } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* =========================================
     NAVIGATION
  ========================================= */

  const links = [
    {
      title: t.nav.about,
      id: "about",
    },
    {
      title: t.nav.story,
      id: "story",
    },
    {
      title: t.nav.features,
      id: "features",
    },
    {
      title: t.nav.calculator,
      id: "calculator",
    },
    {
      title: t.nav.faq,
      id: "faq",
    },
    {
      title: t.nav.contacts,
      id: "contacts",
    },
  ];

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
        {/* =========================================
            DESKTOP
        ========================================= */}

        <div className="hidden items-center lg:flex">
          <NavbarDesktop
            links={links}
            scrollTo={scrollTo}
          />
        </div>

        {/* =========================================
            MOBILE
        ========================================= */}

        <div className="flex w-full items-center justify-between lg:hidden">
          <button
            type="button"
            onClick={() => scrollTo("hero")}
            aria-label={
              language === "ru"
                ? "На главную"
                : "Басты бетке"
            }
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

          <NavbarMobile
            open={open}
            setOpen={setOpen}
            links={links}
            scrollTo={scrollTo}
          />
        </div>
      </div>
    </header>
  );
}