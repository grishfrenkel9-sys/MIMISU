import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface Props {
  question: string;
  answer: string;
  index: number;
}

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
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group border-b border-white/[0.07]"
    >
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
        <div className="flex items-start gap-6">
          <span
            className="
              pt-1
              font-mono
              text-[10px]
              tracking-[0.2em]
              text-red-500/60
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
            ease: [0.16, 1, 0.3, 1],
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
            group-hover:border-red-400/30
            group-hover:text-red-400
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
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden"
          >
            <div className="pb-7 pl-12 md:pl-[4.5rem]">
              <p
                className="
                  max-w-3xl
                  text-sm
                  leading-7
                  text-white/35
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
