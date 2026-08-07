import { motion } from "framer-motion";
import {
  Target,
  Palette,
  Factory,
  MessageCircle,
  BarChart3,
} from "lucide-react";

interface Props {
  number: string;
  title: string;
  text: string;
}

const icons = {
  "01": Target,
  "02": Palette,
  "03": Factory,
  "04": MessageCircle,
  "05": BarChart3,
};

const labels = {
  "01": "STRATEGY",
  "02": "DESIGN",
  "03": "PRODUCTION",
  "04": "CONTACT",
  "05": "Analytics",
};

export default function StoryStep({
  number,
  title,
  text,
}: Props) {
  const Icon =
    icons[number as keyof typeof icons] ?? Target;

  const label =
    labels[number as keyof typeof labels] ?? "ACTIVE";

  return (
    <section
      className="
        relative
        mx-auto
        flex
        min-h-[620px]
        w-full
        max-w-6xl
        items-center
        border-t
        border-white/[0.07]
        px-6
        py-24

        md:px-10
        lg:min-h-[680px]
        lg:px-16
        lg:py-28
      "
    >
      {/* =========================================
          TOP LABEL
      ========================================= */}

      <div
        className="
          absolute
          right-6
          top-6

          rounded-full
          border
          border-red-400/10
          bg-red-400/[0.025]

          px-4
          py-2

          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white/30

          md:right-10
          md:top-8

          lg:right-16
        "
      >
        {label}
      </div>

      {/* =========================================
          MAIN GRID
      ========================================= */}

      <div
        className="
          grid
          w-full
          grid-cols-1
          items-center
          gap-14

          md:grid-cols-[minmax(280px,1fr)_minmax(300px,1fr)]
          md:gap-16

          lg:grid-cols-[1fr_1.1fr]
          lg:gap-24
        "
      >
        {/* =======================================
            RED ORBIT
        ======================================= */}

        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              relative
              flex
              h-52
              w-52
              items-center
              justify-center

              md:h-60
              md:w-60
            "
          >
            {/* Outer ring */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-red-400/20
              "
            />

            {/* Middle ring */}

            <div
              className="
                absolute
                inset-6
                rounded-full
                border
                border-red-400/15
              "
            />

            {/* Inner ring */}

            <div
              className="
                absolute
                inset-12
                rounded-full
                border
                border-red-400/20
              "
            />

            {/* Glow */}

            <div
              className="
                absolute
                h-20
                w-20
                rounded-full
                bg-red-500/[0.08]
                blur-2xl
              "
            />

            {/* Core */}

            <div
              className="
                relative
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full

                border
                border-red-400/20

                bg-red-500/[0.04]

                shadow-[0_0_35px_rgba(248,113,113,.12)]
              "
            >
              <Icon
                size={17}
                strokeWidth={1.4}
                className="text-red-400"
              />
            </div>

            {/* Orbit dot */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-1.5
                  w-1.5
                  -translate-x-1/2
                  rounded-full
                  bg-red-400

                  shadow-[0_0_10px_rgba(248,113,113,.8)]
                "
              />
            </motion.div>
          </motion.div>
        </div>

        {/* =======================================
            CONTENT
        ======================================= */}

        <div className="relative max-w-xl">
          {/* Number */}

          <div
            className="
              mb-5
              font-mono
              text-[10px]
              tracking-[0.35em]
              text-red-400/50
            "
          >
            {number}
          </div>

          {/* Title */}

          <h2
            className="
              text-4xl
              font-light
              tracking-[-0.03em]
              text-white

              md:text-5xl

              lg:text-6xl
            "
          >
            {title}
          </h2>

          {/* Accent */}

          <div
            className="
              mt-7
              h-px
              w-14
              bg-red-400/50
            "
          />

          {/* Text */}

          <p
            className="
              mt-7
              max-w-lg

              text-sm
              leading-8
              text-white/35

              md:text-[15px]
            "
          >
            {text}
          </p>

          {/* Active */}

          <div
            className="
              mt-10
              inline-flex
              items-center
              gap-2

              rounded-full
              border
              border-red-400/10
              bg-red-400/[0.025]

              px-4
              py-2

              text-[9px]
              uppercase
              tracking-[0.25em]
              text-red-300/45
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-red-400

                shadow-[0_0_8px_rgba(248,113,113,.8)]
              "
            />

            Active
          </div>
        </div>
      </div>
    </section>
  );
}
