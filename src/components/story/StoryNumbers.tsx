import { motion, useTransform, type MotionValue } from "framer-motion";

interface StoryNumberItem {
  id: number;
  number: string;
}

interface Props {
  progress: MotionValue<number>;
  mobile?: boolean;
}

const numbers: StoryNumberItem[] = [
  { id: 1, number: "01" },
  { id: 2, number: "02" },
  { id: 3, number: "03" },
  { id: 4, number: "04" },
  { id: 5, number: "05" },
];

export default function StoryNumbers({
  progress,
  mobile = false,
}: Props) {
  if (mobile) {
    return (
      <div className="flex items-center justify-center gap-2 lg:hidden">
        {numbers.map((item, index) => {
          const start = index / numbers.length;
          const end = (index + 1) / numbers.length;

          const opacity = useTransform(
            progress,
            [
              start,
              start + 0.02,
              end - 0.02,
              end,
            ],
            [0.3, 1, 1, 0.3],
          );

          const scale = useTransform(
            progress,
            [
              start,
              start + 0.04,
              end - 0.04,
              end,
            ],
            [0.9, 1, 1, 0.9],
          );

          return (
            <motion.div
              key={item.id}
              style={{
                opacity,
                scale,
              }}
              className="
                flex
                h-8
                min-w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#6CE0E5]/[0.13]
                bg-[#6CE0E5]/[0.025]
                px-2
                font-mono
                text-[8px]
                text-[#6CE0E5]/65
              "
            >
              {item.number}
            </motion.div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="
        hidden
        lg:flex
        lg:flex-col
        lg:items-center
        lg:gap-4
      "
    >
      {numbers.map((item, index) => {
        const start = index / numbers.length;
        const end = (index + 1) / numbers.length;

        const opacity = useTransform(
          progress,
          [
            start,
            start + 0.02,
            end - 0.02,
            end,
          ],
          [0.28, 1, 1, 0.28],
        );

        const scale = useTransform(
          progress,
          [
            start,
            start + 0.045,
            end - 0.045,
            end,
          ],
          [0.88, 1, 1, 0.88],
        );

        return (
          <motion.div
            key={item.id}
            style={{
              opacity,
              scale,
            }}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-[#6CE0E5]/[0.14]
              bg-[#6CE0E5]/[0.025]
              font-mono
              text-[9px]
              tracking-[0.15em]
              text-[#6CE0E5]/70
            "
          >
            {item.number}
          </motion.div>
        );
      })}

      <div
        className="
          mt-1
          h-16
          w-px
          bg-gradient-to-b
          from-[#6CE0E5]/20
          to-transparent
        "
      />
    </div>
  );
}