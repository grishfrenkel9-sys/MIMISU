import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqItems = [
  {
    question: "Что такое MIMISU?",
    answer:
      "MIMISU — это рекламный формат, который превращает бутылку воды в физическую точку контакта между брендом и человеком.",
  },
  {
    question: "Как работает размещение рекламы?",
    answer:
      "Бренд размещается на этикетке бутылки. После производства бутылки распространяются через выбранные каналы и становятся частью повседневного контакта с аудиторией.",
  },
  {
    question: "Какой тираж можно заказать?",
    answer:
      "В калькуляторе можно выбрать тираж от 1 000 до 20 000 бутылок. Итоговая стоимость зависит от количества рекламодателей и дополнительных услуг.",
  },
  {
    question: "Можно ли заказать дизайн?",
    answer:
      "Да. Можно добавить разработку фирменной этикетки как дополнительную услугу. Стоимость отображается непосредственно в калькуляторе.",
  },
  {
    question: "Можно ли организовать распространение?",
    answer:
      "Да. В калькуляторе можно добавить услугу распространения — организацию размещения и раздачи готовой продукции.",
  },
  {
    question: "Можно ли разместить несколько рекламодателей?",
    answer:
      "Да. Один тираж может быть разделён между несколькими рекламодателями. Количество рекламодателей выбирается в калькуляторе.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#031A21]
        py-28
        text-white

        md:py-36
        lg:py-44
      "
    >
      {/* =====================================================
          DEEP OCEAN ATMOSPHERE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          top-[8%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-cyan-400/[0.055]
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[240px]
          bottom-[5%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-teal-500/[0.035]
          blur-[170px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-sky-500/[0.018]
          blur-[220px]
        "
      />

      {/* =====================================================
          DEEP GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.022]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(120,230,240,.12) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(120,230,240,.12) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "120px 120px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      {/* =====================================================
          HORIZONTAL DEPTH LINES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[18%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-200/[0.07]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[55%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-200/[0.035]
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-[16%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-cyan-200/[0.055]
          to-transparent
        "
      />

      {/* =====================================================
          ORBIT / WATER DETAIL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[12%]
          hidden
          h-[260px]
          w-[260px]
          rounded-full
          border
          border-cyan-200/[0.055]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[16%]
          hidden
          h-[190px]
          w-[190px]
          rounded-full
          border
          border-cyan-200/[0.035]
          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[18%]
          top-[29%]
          hidden
          h-2
          w-2
          rounded-full
          bg-cyan-300/45
          shadow-[0_0_18px_rgba(103,232,249,.45)]
          lg:block
        "
      />

      {/* =====================================================
          SMALL WATER PARTICLES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[11%]
          top-[31%]
          h-1
          w-1
          rounded-full
          bg-cyan-300/30
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[19%]
          bottom-[27%]
          h-1.5
          w-1.5
          rounded-full
          bg-cyan-300/25
          shadow-[0_0_12px_rgba(103,232,249,.25)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[12%]
          bottom-[24%]
          h-1
          w-1
          rounded-full
          bg-cyan-200/25
        "
      />

      {/* =====================================================
          TOP TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-[#052830]
          via-[#031F27]
          to-transparent
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-[1100px]
          px-6

          md:px-10
          xl:px-14
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 45,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="mb-16 md:mb-20"
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-cyan-200/70
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_14px_rgba(103,232,249,.7)]
              "
            />

            FAQ

            <span
              className="
                h-px
                w-12
                bg-cyan-300/30
              "
            />
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-6
              max-w-4xl
              text-[clamp(3rem,7vw,6rem)]
              font-light
              leading-[0.9]
              tracking-[-0.055em]
              text-white
            "
          >
            Частые
            <br />

            <span className="text-cyan-100/30">
              вопросы
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-cyan-50/45

              md:text-base
              md:leading-8
            "
          >
            Всё самое важное о формате, размещении рекламы
            и возможностях MIMISU.
          </p>
        </motion.div>

        {/* =================================================
            FAQ LIST
        ================================================= */}

        <div
          className="
            border-t
            border-cyan-100/[0.10]
          "
        >
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.05,
                  ease,
                }}
                className="
                  group
                  relative
                  border-b
                  border-cyan-100/[0.09]
                "
              >
                {/* ACTIVE SIDE LIGHT */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    left-0
                    top-1/2
                    h-10
                    w-px
                    -translate-y-1/2
                    bg-gradient-to-b
                    from-transparent
                    via-cyan-300/0
                    to-transparent
                    transition-all
                    duration-500

                    ${
                      isOpen
                        ? "via-cyan-300/70"
                        : "group-hover:via-cyan-300/35"
                    }
                  `}
                />

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-7
                    text-left
                    transition-all
                    duration-300

                    md:py-8
                  "
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="
                        hidden
                        font-mono
                        text-[10px]
                        tracking-[0.2em]
                        text-cyan-200/25

                        sm:block
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className={`
                        text-lg
                        font-light
                        transition-colors
                        duration-300

                        md:text-xl

                        ${
                          isOpen
                            ? "text-white"
                            : "text-white/65 group-hover:text-cyan-50/90"
                        }
                      `}
                    >
                      {item.question}
                    </span>
                  </div>

                  <span
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-500

                      ${
                        isOpen
                          ? "rotate-45 border-cyan-300/40 bg-cyan-300/[0.10] text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,.10)]"
                          : "border-cyan-100/[0.10] bg-cyan-100/[0.025] text-white/35 group-hover:border-cyan-200/30 group-hover:bg-cyan-200/[0.05] group-hover:text-cyan-200"
                      }
                    `}
                  >
                    <Plus
                      size={17}
                      strokeWidth={1.5}
                    />
                  </span>
                </button>

                {/* ANSWER */}

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                  className="overflow-hidden"
                >
                  <div
                    className="
                      max-w-2xl
                      pb-8
                      pl-0
                      text-sm
                      leading-7
                      text-cyan-50/40

                      sm:pl-9
                      md:text-base
                      md:leading-8
                    "
                  >
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          BOTTOM TRANSITION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-44
          bg-gradient-to-t
          from-[#020F15]
          via-[#031A21]/80
          to-transparent
        "
      />
    </section>
  );
}