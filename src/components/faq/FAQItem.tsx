import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
  index: number;
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function FAQItem({
  question,
  answer,
  index,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease,
      }}
      className="
        group
        relative
        border-b
        border-cyan-100/[0.07]
      "
    >
      <span
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
          h-8
          w-px
          -translate-y-1/2
          bg-gradient-to-b
          from-transparent
          via-cyan-300/0
          to-transparent
          transition-all
          duration-500
          group-hover:via-cyan-300/35
        "
      />

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-8
          py-7
          text-left
        "
      >
        <div className="flex items-center gap-5">
          <span
            className="
              font-mono
              text-[10px]
              tracking-[0.2em]
              text-cyan-200/20
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <span
            className={`
              text-lg
              font-light
              tracking-tight
              transition-colors
              duration-300
              md:text-xl

              ${
                open
                  ? "text-white"
                  : "text-white/65 group-hover:text-white"
              }
            `}
          >
            {question}
          </span>
        </div>

        <motion.span
          animate={{
            rotate: open ? 45 : 0,
          }}
          transition={{
            duration: 0.3,
            ease,
          }}
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-white/[0.08]
            text-lg
            font-light
            text-white/40
            transition-colors
            duration-300
            group-hover:border-cyan-300/30
            group-hover:text-cyan-300
          "
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
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
              duration: 0.4,
              ease,
            }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-12 md:pl-[4.5rem]">
              <p
                className="
                  max-w-3xl
                  text-sm
                  leading-7
                  text-white/40

                  md:text-base
                  md:leading-8
                "
              >
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}