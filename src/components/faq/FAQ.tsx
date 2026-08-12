import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const ease = [0.16, 1, 0.3, 1] as const;

export default function FAQ() {
  const { t } = useLanguage();

  const [openIndex, setOpenIndex] =
    useState<number | null>(null);

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#031A21]
        py-20
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
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-400/[0.035]
          blur-[140px]
          sm:h-[650px]
          sm:w-[650px]
          sm:blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[280px]
          bottom-0
          h-[400px]
          w-[400px]
          rounded-full
          bg-teal-400/[0.025]
          blur-[140px]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[170px]
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
          h-32
          bg-gradient-to-b
          from-[#052830]
          via-[#031F27]/60
          to-transparent
          sm:h-40
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
          px-4
          sm:px-8
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
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease,
          }}
          className="
            mb-10
            sm:mb-16
            md:mb-20
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              gap-2.5
              text-[8px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-cyan-200/60
              sm:gap-3
              sm:text-[9px]
              sm:tracking-[0.35em]
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                shrink-0
                rounded-full
                bg-cyan-300
                shadow-[0_0_14px_rgba(103,232,249,.6)]
              "
            />

            {t.faq.label}

            <span
              className="
                h-px
                w-7
                bg-cyan-300/20
                sm:w-10
              "
            />
          </div>

          {/* TITLE */}

          <h2
            className="
              mt-5
              max-w-4xl
              text-[clamp(2.8rem,14vw,6rem)]
              font-light
              leading-[0.9]
              tracking-[-0.065em]
              text-white
              sm:mt-6
            "
          >
            {t.faq.title}

            <br />

            <span className="text-cyan-100/[0.22]">
              {t.faq.titleAccent}
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-5
              max-w-[510px]
              text-[12px]
              leading-5
              text-cyan-50/40
              sm:mt-7
              sm:text-sm
              sm:leading-7
              md:text-base
              md:leading-8
            "
          >
            {t.faq.description}
          </p>
        </motion.div>

        {/* =========================================
            FAQ LIST
        ========================================= */}

        <div className="space-y-2">
          {t.faq.items.map((item, index) => {
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
                  rounded-[18px]
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
                {/* =========================================
                    QUESTION
                ========================================= */}

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
                    min-h-[70px]
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-4
                    text-left
                    outline-none
                    sm:min-h-[92px]
                    sm:gap-5
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
                      inset-x-4
                      top-0
                      h-px
                      bg-gradient-to-r
                      from-transparent
                      via-cyan-200/20
                      to-transparent
                      transition-opacity
                      duration-500
                      sm:inset-x-6

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
                      flex-1
                      items-center
                      gap-3
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
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    {/* QUESTION TEXT */}

                    <span
                      className={`
                        min-w-0
                        pr-1
                        text-[14px]
                        font-light
                        leading-[1.45]
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

                  {/* =========================================
                      PLUS ICON
                  ========================================= */}

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
                      h-9
                      w-9
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
                      size={16}
                      strokeWidth={1.4}
                    />
                  </motion.span>
                </button>

                {/* =========================================
                    ANSWER
                ========================================= */}

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
                          px-4
                          pb-6
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
                            text-[12px]
                            leading-5
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
          h-32
          bg-gradient-to-t
          from-[#020F15]
          via-[#031A21]/60
          to-transparent
          sm:h-40
        "
      />
    </section>
  );
}