const links = [
  {
    title: "О платформе",
    href: "#about",
  },
  {
    title: "Как это работает",
    href: "#features",
  },
  {
    title: "Калькулятор",
    href: "#calculator",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];

export default function FooterLinks() {
  return (
    <div>

      <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
        Навигация
      </span>

      <div className="mt-6 flex flex-col gap-4">

        {links.map((link) => (
          <a
            key={link.title}
            href={link.href}
            className="
              text-lg
              text-neutral-300
              transition
              hover:text-white
            "
          >
            {link.title}
          </a>
        ))}

      </div>

    </div>
  );
}
