import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { links } from "./navLinks";

const SCROLL_THRESHOLD = 30;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) return;

      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        frame = 0;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      setOpen(false);
      return;
    }

    const offset = 80;

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });

    setOpen(false);
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
          {/* Mobile logo */}

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