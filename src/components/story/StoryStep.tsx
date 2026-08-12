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

import type { StoryItem } from "./storyData";

interface Props {
  story: readonly StoryItem[];
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
  activeText?: string;
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
  reduceMotion,
  activeText = "Active",
}: Props) {
  return (
    <div className="absolute inset-0">
      {story.map((item, index) => (
        <StoryCard
          key={item.id}
          item={item}
          index={index}
          total={story.length}
          progress={progress}
          reduceMotion={reduceMotion}
          activeText={activeText}
        />
      ))}
    </div>
  );
}

interface StoryCardProps {
  item: StoryItem;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
  activeText: string;
}

function StoryCard({
  item,
  index,
  total,
  progress,
  reduceMotion,
  activeText,
}: StoryCardProps) {
  const Icon = icons[index] ?? Target;

  const start = index / total;
  const end = (index + 1) / total;

  /*
   * FADE
   */
  const opacity = useTransform(
    progress,
    [
      start,
      start + 0.035,
      end - 0.035,
      end,
    ],
    [0, 1, 1, 0]
  );

  /*
   * SCALE
   */
  const scale = useTransform(
    progress,
    [
      start,
      start + 0.045,
      end - 0.045,
      end,
    ],
    [0.985, 1, 1, 0.995]
  );

  /*
   * Y
   */
  const y = useTransform(
    progress,
    [
      start,
      start + 0.045,
      end - 0.045,
      end,
    ],
    [8, 0, 0, -6]
  );

  return (
    <motion.div
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
        overflow-hidden
        px-5
        py-5
        text-center

        sm:px-12
        sm:py-8

        lg:px-16
        lg:py-10

        will-change-transform
      "
    >
      {/* NUMBER */}

      <div
        className="
          shrink-0
          font-mono
          text-[8px]
          tracking-[0.32em]
          text-cyan-300/40

          sm:text-[10px]
          sm:tracking-[0.35em]
        "
      >
        {item.number}
      </div>

      {/* VISUAL */}

      <div
        className="
          relative
          mt-3
          flex
          h-[76px]
          w-[76px]
          shrink-0
          items-center
          justify-center

          sm:mt-7
          sm:h-32
          sm:w-32

          lg:mt-9
          lg:h-40
          lg:w-40
        "
      >
        {/* OUTER */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-cyan-300/[0.14]
          "
        />

        {/* INNER */}

        <div
          className="
            absolute
            inset-3
            rounded-full
            border
            border-cyan-300/[0.08]

            sm:inset-5

            lg:inset-6
          "
        />

        {/* GLOW */}

        <div
          className="
            absolute
            h-12
            w-12
            rounded-full
            bg-cyan-300/[0.055]
            blur-xl

            sm:h-20
            sm:w-20
            sm:blur-2xl

            lg:h-28
            lg:w-28
          "
        />

        {/* ICON */}

        <div
          className="
            relative
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-cyan-300/[0.18]
            bg-[#07303A]
            shadow-[0_0_24px_rgba(103,232,249,.07)]

            sm:h-12
            sm:w-12

            lg:h-14
            lg:w-14
          "
        >
          <Icon
            size={14}
            strokeWidth={1.3}
            className="
              text-cyan-300/75

              sm:h-[18px]
              sm:w-[18px]
            "
          />
        </div>

        {/* ORBIT */}

        {!reduceMotion && (
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              animate-[story-orbit_9s_linear_infinite]
              motion-reduce:animate-none
            "
          >
            <span
              className="
                absolute
                left-1/2
                top-0
                h-1
                w-1
                -translate-x-1/2
                rounded-full
                bg-cyan-300
                shadow-[0_0_8px_rgba(103,232,249,.7)]

                sm:h-1.5
                sm:w-1.5
                sm:shadow-[0_0_10px_rgba(103,232,249,.7)]
              "
            />
          </div>
        )}
      </div>

      {/* TITLE */}

      <h3
        className="
          mt-3
          max-w-[280px]
          shrink-0
          text-[1.75rem]
          font-light
          leading-[0.95]
          tracking-[-0.05em]
          text-white

          sm:mt-8
          sm:max-w-[650px]
          sm:text-[clamp(2.2rem,6vw,4.8rem)]
          sm:leading-[0.92]

          lg:mt-8
        "
      >
        {item.title}
      </h3>

      {/* ACCENT */}

      <div
        className="
          mt-3
          h-px
          w-8
          shrink-0
          bg-cyan-300/40

          sm:mt-6
          sm:w-12
        "
      />

      {/* TEXT */}

      <p
        className="
          mt-3
          max-w-[270px]
          text-[11px]
          leading-[1.55]
          text-white/35

          sm:mt-6
          sm:max-w-[520px]
          sm:text-sm
          sm:leading-7
        "
      >
        {item.text}
      </p>

      {/* STATUS */}

      <div
        className="
          mt-3
          flex
          shrink-0
          items-center
          gap-1.5
          text-[7px]
          uppercase
          tracking-[0.22em]
          text-cyan-200/35

          sm:mt-7
          sm:gap-2
          sm:text-[8px]
          sm:tracking-[0.25em]
        "
      >
        <span
          className="
            h-1
            w-1
            rounded-full
            bg-cyan-300
            shadow-[0_0_7px_rgba(103,232,249,.65)]

            sm:h-1.5
            sm:w-1.5
            sm:shadow-[0_0_8px_rgba(103,232,249,.65)]
          "
        />

        {activeText}
      </div>
    </motion.div>
  );
}