import ScrollReveal from "../animations/ScrollReveal";

const lines = [
  "Реклама,",
  "которую невозможно",
  "пролистать.",
];

export default function Intro() {
  return (
    <div>
      <ScrollReveal
        direction="left"
        distance={30}
        duration={0.8}
      >
        <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.35em] text-neutral-500">
          <span className="h-px w-8 bg-cyan-400/50" />

          <span>Глава 01 // О платформе</span>
        </div>
      </ScrollReveal>

      <h2 className="mt-8 max-w-[1100px] text-[clamp(3rem,7vw,7rem)] font-light leading-[0.95] tracking-[-0.045em]">
        {lines.map((line, index) => (
          <span
            key={line}
            className="block overflow-hidden"
          >
            <ScrollReveal
              direction="up"
              distance={80}
              delay={index * 0.12}
              duration={1}
            >
              <span
                className={
                  index === 2
                    ? "block text-white"
                    : "block text-white/95"
                }
              >
                {line}
              </span>
            </ScrollReveal>
          </span>
        ))}
      </h2>

      <ScrollReveal
        direction="right"
        distance={100}
        delay={0.4}
        duration={1}
      >
        <div className="mt-10 h-px w-full origin-left bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />
      </ScrollReveal>
    </div>
  );
}