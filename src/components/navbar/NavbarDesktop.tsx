import { useLanguage } from "../../context/LanguageContext";

interface LinkItem {
  title: string;
  id: string;
}

interface Props {
  links: LinkItem[];
  scrollTo: (id: string) => void;
}

export default function NavbarDesktop({
  links,
  scrollTo,
}: Props) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="hidden items-center gap-7 lg:flex">
      {/* =========================================
          LOGO
      ========================================= */}

      <button
        type="button"
        onClick={() => scrollTo("hero")}
        aria-label={
          language === "ru"
            ? "На главную"
            : "Басты бетке"
        }
        className="
          group
          relative
          text-[27px]
          font-light
          uppercase
          tracking-[0.42em]
          text-[#092B32]
          transition-colors
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

      {/* =========================================
          LINKS
      ========================================= */}

      <nav
        aria-label={
          language === "ru"
            ? "Основная навигация"
            : "Негізгі навигация"
        }
        className="flex items-center gap-6"
      >
        {links.map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => scrollTo(link.id)}
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
            {link.title}

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

      {/* =========================================
          LANGUAGE
      ========================================= */}

      <div
        className="
          flex
          items-center
          rounded-full
          border
          border-[#092B32]/10
          bg-white/50
          p-1
          backdrop-blur-md
        "
      >
        <button
          type="button"
          onClick={() => setLanguage("ru")}
          aria-pressed={language === "ru"}
          className={`
            rounded-full
            px-3
            py-1.5
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.16em]
            transition-all
            duration-300
            ${
              language === "ru"
                ? "bg-[#073b4c] text-white shadow-sm"
                : "text-[#092B32]/45 hover:text-[#092B32]"
            }
          `}
        >
          RU
        </button>

        <button
          type="button"
          onClick={() => setLanguage("kz")}
          aria-pressed={language === "kz"}
          className={`
            rounded-full
            px-3
            py-1.5
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.16em]
            transition-all
            duration-300
            ${
              language === "kz"
                ? "bg-[#073b4c] text-white shadow-sm"
                : "text-[#092B32]/45 hover:text-[#092B32]"
            }
          `}
        >
          KZ
        </button>
      </div>

      {/* =========================================
          CTA
      ========================================= */}

      <button
        type="button"
        onClick={() => scrollTo("calculator")}
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
          duration-300
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
          {t.hero.button}
        </span>
      </button>
    </div>
  );
}