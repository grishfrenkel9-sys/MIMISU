import {
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";

import {
  Target,
  Palette,
  Factory,
  MessageCircle,
  BarChart3,
} from "lucide-react";

interface StoryItem {
  id: number;
  number: string;
  title: string;
  text: string;
}

interface Props {
  story: StoryItem[];
  progress: MotionValue<number>;
}

const icons = [
  Target,
  Palette,
  Factory,
  MessageCircle,
  BarChart3,
];

export default function StoryStep({
  story,
  progress,
}: Props) {
  return (
    <div className="absolute inset-0">
      {story.map((item, index) => {
        const Icon = icons[index] ?? Target;

        const start = index / story.length;
        const end = (index + 1) / story.length;

        /*
         * Быстрый переход между этапами.
         */

        const opacity = useTransform(
          progress,
          [
            start,
            start + 0.025,
            end - 0.025,
            end,
          ],
          [0, 1, 1, 0],
        );

        const scale = useTransform(
          progress,
          [
            start,
            start + 0.04,
            end - 0.04,
            end,
          ],
          [0.96, 1, 1, 0.98],
        );

        const y = useTransform(
          progress,
          [
            start,
            start + 0.04,
            end - 0.04,
            end,
          ],
          [18, 0, 0, -12],
        );

        return (
          <motion.div
            key={item.id}
            style={{
              opacity,
              scale,
              y,
            }}
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
              px-7
              text-center

              sm:px-12

              lg:px-16
            "
          >
            {/* NUMBER */}

            <div
              className="
                font-mono
                text-[10px]
                tracking-[0.35em]
                text-cyan-300/40
              "
            >
              {item.number}
            </div>

            {/* DIGITAL VISUAL */}

            <div
              className="
                relative
                mt-7
                flex
                h-28
                w-28
                items-center
                justify-center

                sm:h-32
                sm:w-32

                lg:mt-9
                lg:h-40
                lg:w-40
              "
            >
              {/* Outer ring */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border
                  border-cyan-300/[0.14]
                "
              />

              {/* Inner ring */}

              <div
                className="
                  absolute
                  inset-5
                  rounded-full
                  border
                  border-cyan-300/[0.08]

                  lg:inset-6
                "
              />

              {/* Glow */}

              <div
                className="
                  absolute
                  h-20
                  w-20
                  rounded-full
                  bg-cyan-300/[0.06]
                  blur-2xl

                  lg:h-28
                  lg:w-28
                "
              />

              {/* Icon */}

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
                  border-cyan-300/[0.18]
                  bg-[#07303A]
                  shadow-[0_0_35px_rgba(103,232,249,.08)]

                  lg:h-14
                  lg:w-14
                "
              >
                <Icon
                  size={18}
                  strokeWidth={1.3}
                  className="text-cyan-300/75"
                />
              </div>

              {/* ROTATING SIGNAL */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  inset-0
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-1.5
                    w-1.5
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-300
                    shadow-[0_0_10px_rgba(103,232,249,.7)]
                  "
                />
              </motion.div>
            </div>

            {/* TITLE */}

            <h3
              className="
                mt-8
                max-w-[650px]
                text-[clamp(2.2rem,6vw,4.8rem)]
                font-light
                leading-[0.92]
                tracking-[-0.05em]
                text-white
              "
            >
              {item.title}
            </h3>

            {/* ACCENT */}

            <div
              className="
                mt-6
                h-px
                w-12
                bg-cyan-300/40
              "
            />

            {/* TEXT */}

            <p
              className="
                mt-6
                max-w-[520px]
                text-[13px]
                leading-6
                text-white/35

                sm:text-sm
                sm:leading-7
              "
            >
              {item.text}
            </p>

            {/* STATUS */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-cyan-200/35
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-cyan-300
                  shadow-[0_0_8px_rgba(103,232,249,.65)]
                "
              />

              Active
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}