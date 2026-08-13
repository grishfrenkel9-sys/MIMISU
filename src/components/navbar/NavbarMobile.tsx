import { Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

interface LinkItem {
  id: string;
  title: string;
}

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  links: LinkItem[];
  scrollTo: (id: string) => void;
}

export default function NavbarMobile({
  open,
  setOpen,
  links,
  scrollTo,
}: Props) {
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleLanguage = () => {
    setLanguage(language === "ru" ? "kz" : "ru");
  };

  return (
    <>
      <div
        className="
          flex
          items-center
          gap-2
          lg:hidden
        "
      >
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={
            language === "ru"
              ? "Переключить на казахский язык"
              : "Қазақ тіліне ауыстыру"
          }
          className="
            flex
            h-10
            items-center
            gap-1
            rounded-full
            border
            border-[#092B32]/10
            bg-white/70
            px-3
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#092B32]/55
            backdrop-blur-md
            transition-all
            duration-200
            active:scale-95
          "
        >
          <span
            className={
              language === "ru"
                ? "text-[#2F6873]"
                : "text-[#092B32]/30"
            }
          >
            RU
          </span>

          <span className="text-[#092B32]/15">
            /
          </span>

          <span
            className={
              language === "kz"
                ? "text-[#2F6873]"
                : "text-[#092B32]/30"
            }
          >
            KZ
          </span>
        </button>

        <button
          type="button"
          onClick={toggleMenu}
          aria-label={
            open
              ? language === "ru"
                ? "Закрыть меню"
                : "Мәзірді жабу"
              : language === "ru"
                ? "Открыть меню"
                : "Мәзірді ашу"
          }
          aria-expanded={open}
          className="
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
            duration-200
            active:scale-95
          "
        >
          {open ? (
            <X
              size={19}
              strokeWidth={1.6}
            />
          ) : (
            <Menu
              size={19}
              strokeWidth={1.6}
            />
          )}
        </button>
      </div>

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
          aria-label={
            language === "ru"
              ? "Закрыть меню"
              : "Мәзірді жабу"
          }
          onClick={() => setOpen(false)}
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
          <nav aria-label="Мобильная навигация">
            {links.map((link, index) => (
              <button
                key={link.id}
                type="button"
                onClick={() => {
                  scrollTo(link.id);
                  setOpen(false);
                }}
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
                <span>{link.title}</span>

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
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </nav>

          <div className="p-7">
            <button
              type="button"
              onClick={() => {
                scrollTo("calculator");
                setOpen(false);
              }}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
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
                duration-300
                hover:border-[#2F6873]/55
                hover:bg-[#2F6873]/[0.12]
                active:scale-[0.98]
              "
            >
              <span>{t.hero.button}</span>

              <span
                className="
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