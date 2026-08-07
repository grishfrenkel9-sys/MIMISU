import ScrollReveal from "../animations/ScrollReveal";
import ScrollReactive from "../animations/ScrollReactive";
import useScrollVelocity from "../../hooks/useScrollVelocity";

export default function Statement() {
  const {
    movement,
    rotation,
  } = useScrollVelocity();

  return (
    <div
      className="
        mt-24
        grid
        grid-cols-1
        gap-12
        lg:mt-32
        lg:grid-cols-12
        lg:gap-8
      "
    >
      {/* LABEL */}

      <ScrollReveal
        direction="left"
        distance={30}
        duration={0.8}
      >
        <div className="lg:col-span-3">
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.28em]
              text-neutral-600
            "
          >
            Что мы делаем
          </span>
        </div>
      </ScrollReveal>

      {/* STATEMENT */}

      <div
        className="
          lg:col-span-8
          lg:col-start-5
        "
      >
        <ScrollReveal
          direction="up"
          distance={55}
          duration={1}
        >
          <ScrollReactive
            movement={movement}
            rotation={rotation}
          >
            <p
              className="
                text-[clamp(1.5rem,3vw,2.7rem)]
                font-light
                leading-[1.35]
                tracking-[-0.025em]
                text-white/70
              "
            >
              MiMiSU превращает обычную бутылку
              воды в{" "}
              <span className="text-white">
                физический рекламный носитель
              </span>
              , который человек берет в руки,
              рассматривает, сканирует{" "}
              <span className="text-cyan-300/90">
                QR-код
              </span>{" "}
              и взаимодействует с брендом.
            </p>
          </ScrollReactive>
        </ScrollReveal>

        <ScrollReveal
          direction="right"
          distance={80}
          delay={0.15}
          duration={1.1}
        >
          <div
            className="
              mt-12
              h-px
              w-full
              bg-white/[0.08]
            "
          />
        </ScrollReveal>
      </div>
    </div>
  );
}
