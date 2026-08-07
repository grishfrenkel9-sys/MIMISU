interface LinkItem {
  title: string;
  id: string;
}

interface Props {
  links: LinkItem[];
  active: string;
  scrollTo: (id: string) => void;
}

export default function NavbarDesktop({
  links,
  active,
  scrollTo,
}: Props) {
  return (
    <>
      <nav className="hidden items-center gap-3 lg:flex">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollTo(link.id)}
            className={`
              rounded-full
              px-5
              py-2.5
              text-sm
              transition-all
              duration-300

              ${
                active === link.id
                  ? "bg-white text-black"
                  : "text-white/65 hover:bg-white/5 hover:text-white"
              }
            `}
          >
            {link.title}
          </button>
        ))}
      </nav>

      <button
        onClick={() => scrollTo("calculator")}
        className="
          hidden
          rounded-full
          bg-white
          px-8
          py-3
          text-sm
          text-black
          transition
          hover:scale-105
          lg:block
        "
      >
        Рассчитать стоимость
      </button>
    </>
  );
}
