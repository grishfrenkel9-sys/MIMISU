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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="
        relative
        bg-[#040404]/85
        py-28
        text-white

        md:py-36
        lg:py-44
      "
    >
      {/* =========================================
          AMBIENT LIGHT
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-400/[0.018]
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          bottom-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-red-500/[0.015]
          blur-[150px]
        "
      />

      {/* =========================================
          GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.012]
        "
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* =========================================
          TOP TRANSITION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-[#040404]
          to-transparent
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

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
        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(8px)",
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
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16 md:mb-20"
        >
          <div
            className="
              flex
              items-center
              gap-3
              text-[9px]
              font-medium
              uppercase
              tracking-[0.35em]
              text-red-400/70
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-red-400
                shadow-[0_0_12px_rgba(248,113,113,.7)]
              "
            />

            FAQ

            <span className="h-px w-10 bg-red-400/25" />
          </div>

          <h2
            className="
              mt-6
              max-w-4xl
              text-[clamp(3rem,7vw,6rem)]
              font-light
              leading-[0.9]
              tracking-[-0.055em]
            "
          >
            Частые
            <br />

            <span className="text-white/30">
              вопросы
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-xl
              text-sm
              leading-7
              text-white/35

              md:text-base
              md:leading-8
            "
          >
            Всё самое важное о формате, размещении рекламы
            и возможностях MIMISU.
          </p>
        </motion.div>

        {/* =========================================
            FAQ LIST
        ========================================= */}

        <div className="border-t border-white/[0.08]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.6,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="border-b border-white/[0.08]"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    py-7
                    text-left

                    md:py-8

                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center gap-5">
                    <span
                      className="
                        hidden
                        font-mono
                        text-[10px]
                        tracking-[0.2em]
                        text-white/20

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
                            : "text-white/65 group-hover:text-white"
                        }
                      `}
                    >
                      {item.question}
                    </span>
                  </div>

                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-500

                      ${
                        isOpen
                          ? "rotate-45 border-red-400/30 bg-red-400/[0.08] text-red-300"
                          : "border-white/[0.08] bg-white/[0.02] text-white/35 group-hover:border-white/20 group-hover:text-white"
                      }
                    `}
                  >
                    <Plus size={17} strokeWidth={1.5} />
                  </span>
                </button>

                {/* Answer */}

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
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
                      text-white/35

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

      {/* =========================================
          BOTTOM TRANSITION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-[#040404]
          to-transparent
        "
      />
    </section>
  );
}