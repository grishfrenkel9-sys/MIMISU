import { Menu, X } from "lucide-react";

interface LinkItem {
  title: string;
  id: string;
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
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden"
      >
        {open ? <X /> : <Menu />}
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="mx-4 mt-3 rounded-3xl border border-white/10 bg-black/20/80 p-6 backdrop-blur-2xl">

          <div className="flex flex-col gap-4">

            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="rounded-xl py-3 text-left text-white/80 transition hover:bg-white/5"
              >
                {link.title}
              </button>
            ))}

            <button
              onClick={() => scrollTo("calculator")}
              className="mt-3 rounded-full bg-white py-4 text-black"
            >
              Рассчитать стоимость
            </button>

          </div>

        </div>
      </div>
    </>
  );
}
