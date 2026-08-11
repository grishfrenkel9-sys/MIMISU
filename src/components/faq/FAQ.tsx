import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

interface FAQItemData {
  question: string;
  answer: string;
}

const faqItems: FAQItemData[] = [
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
    question: "Какой минимальный тираж?",
    answer:
      "Минимальный тираж начинается от 1 000 бутылок. При увеличении тиража стоимость размещения одной бутылки снижается.",
  },
  {
    question: "Можно ли заказать дизайн?",
    answer:
      "Да. Мы можем разработать индивидуальный дизайн этикетки с учётом фирменного стиля, цветов и рекламного сообщения бренда.",
  },
  {
    question: "Можно ли организовать распространение?",
    answer:
      "Да. При подключении услуги распространения мы берём организацию раздачи на себя: планируем точки, логистику и процесс передачи бутылок аудитории.",
  },
  {
    question: "Можно ли разместить несколько рекламодателей?",
    answer:
      "Да. Один тираж может быть разделён между несколькими рекламодателями. Это позволяет распределить стоимость производства между участниками.",
  },
  {
    question: "Как рассчитывается стоимость кампании?",
    answer:
      "Стоимость зависит от количества рекламодателей, тиража бутылок и дополнительных услуг. В калькуляторе можно изменить параметры и сразу увидеть предварительный расчёт.",
  },
  {
    question: "Какой охват можно получить?",
    answer:
      "Охват зависит от тиража и сценария распространения. В калькуляторе используется предварительная модель прогнозирования, которая помогает оценить потенциальное количество контактов.",
  },
  {
    question: "Можно ли получить коммерческое предложение?",
    answer:
      "Да. После предварительного расчёта вы можете связаться с нами, чтобы обсудить задачу, формат размещения и получить персональное коммерческое предложение.",
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
        py-24
        text-white
        sm:py-28
        md:py-36
        lg:py-44
      "
    >
      {/* =========================================
          SOFT ATMOSPHERE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[260px]
          top-[5%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-cyan-400/[0.035]
          blur-[160px]
          sm:h-[650px]
          sm:w-[650px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[280px]
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-teal-400/[0.025]
          blur-[170px]
        "
      />

      {/* =========================================
          TOP FADE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-[#052830]
          via-[#031F27]/60
          to-transparent
        "
      />

      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1120px]
          px-5
          sm:px-8
          md:px-10
          xl:px-14
        "
      >
        {/* =======================================
            HEADER
        ======================================= */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mb-14
            sm:mb-16
            md:mb-20
          "
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
              text-cyan-200/60
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-cyan-300
                shadow-[0_0_14px_rgba(103,232,249,.6)]
              "
            />

            FAQ

            <span
              className="
                h-px
                w-10
                bg-cyan-300/20
              "
            />
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-6
              max-w-4xl
              text-[clamp(3.2rem,12vw,6rem)]
              font-light
              leading-[0.88]
              tracking-[-0.065em]
              text-white
            "
          >
            Частые
            <br />
            <span className="text-cyan-100/[0.22]">
              вопросы
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-[510px]
              text-[13px]
              leading-6
              text-cyan-50/40
              sm:text-sm
              sm:leading-7
              md:text-base
              md:leading-8
            "
          >
            Всё самое важное о формате, размещении рекламы
            и возможностях MIMISU.
          </p>
        </motion.div>

        {/* =======================================
            FAQ LIST
        ======================================= */}

        <div className="space-y-2">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.035,
                  ease,
                }}
                className={`
                  group
                  overflow-hidden
                  rounded-[22px]
                  border
                  transition-colors
                  duration-500
                  sm:rounded-[26px]

                  ${
                    isOpen
                      ? `
                        border-cyan-200/[0.14]
                        bg-white/[0.035]
                        shadow-[0_20px_70px_rgba(0,0,0,0.12)]
                      `
                      : `
                        border-white/[0.055]
                        bg-white/[0.012]
                        hover:border-white/[0.10]
                        hover:bg-white/[0.022]
                      `
                  }
                `}
              >
                {/* =================================
                    QUESTION
                ================================= */}

                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() =>
                    setOpenIndex(
                      isOpen ? null : index
                    )
                  }
                  className="
                    relative
                    flex
                    min-h-[82px]
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-5
                    py-5
                    text-left
                    outline-none
                    sm:min-h-[92px]
                    sm:px-7
                    sm:py-6
                    md:px-8
                    focus-visible:ring-1
                    focus-visible:ring-cyan-300/40
                  "
                >
                  {/* ACTIVE TOP LINE */}

                  <span
                    className={`
                      pointer-events-none
                      absolute
                      inset-x-6
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-200/20
                      to-transparent
                      transition-opacity
                      duration-500
                      ${
                        isOpen
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />

                  {/* QUESTION CONTENT */}

                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-4
                      sm:gap-6
                    "
                  >
                    {/* NUMBER */}

                    <span
                      className={`
                        hidden
                        shrink-0
                        font-mono
                        text-[9px]
                        tracking-[0.2em]
                        transition-colors
                        duration-300
                        sm:block

                        ${
                          isOpen
                            ? "text-cyan-200/55"
                            : "text-white/20"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* QUESTION */}

                    <span
                      className={`
                        pr-1
                        text-[15px]
                        font-light
                        leading-6
                        transition-colors
                        duration-300
                        sm:text-lg
                        sm:leading-7
                        md:text-xl

                        ${
                          isOpen
                            ? "text-white"
                            : "text-white/70 group-hover:text-white/90"
                        }
                      `}
                    >
                      {item.question}
                    </span>
                  </div>

                  {/* =================================
                      PLUS ICON
                  ================================= */}

                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: 0.35,
                      ease,
                    }}
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-colors
                      duration-500
                      sm:h-11
                      sm:w-11

                      ${
                        isOpen
                          ? `
                            border-cyan-200/20
                            bg-cyan-200/[0.07]
                            text-cyan-100
                          `
                          : `
                            border-white/[0.07]
                            bg-white/[0.025]
                            text-white/35
                            group-hover:border-white/[0.13]
                            group-hover:text-white/70
                          `
                      }
                    `}
                  >
                    <Plus
                      size={17}
                      strokeWidth={1.4}
                    />
                  </motion.span>
                </button>

                {/* =================================
                    ANSWER
                ================================= */}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.42,
                        ease,
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          px-5
                          pb-7
                          pt-0
                          sm:px-7
                          sm:pb-8
                          md:px-8
                        "
                      >
                        <div
                          className="
                            ml-0
                            max-w-2xl
                            border-l
                            border-cyan-200/[0.10]
                            pl-4
                            text-[13px]
                            leading-6
                            text-cyan-50/40
                            sm:ml-[3.25rem]
                            sm:pl-5
                            sm:text-sm
                            sm:leading-7
                            md:text-base
                            md:leading-8
                          "
                        >
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* =========================================
          BOTTOM FADE
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-[#020F15]
          via-[#031A21]/60
          to-transparent
        "
      />
    </section>
  );
}