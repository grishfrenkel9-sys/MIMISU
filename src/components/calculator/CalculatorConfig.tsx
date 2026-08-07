import { motion } from "framer-motion";
import type { AdvertiserCount } from "./types";
interface Props {
  advertisers: AdvertiserCount;
  quantity: number;
  includeDesign: boolean;
  includeDistribution: boolean;

  onAdvertiserChange: (value: AdvertiserCount) => void;
  onQuantityChange: (value: number) => void;
  onDesignChange: (value: boolean) => void;
  onDistributionChange: (value: boolean) => void;
}

export default function CalculatorConfig({
  advertisers,
  quantity,
  includeDesign,
  includeDistribution,
  onAdvertiserChange,
  onQuantityChange,
  onDesignChange,
  onDistributionChange,
}: Props) {
  return (
    <div className="space-y-5">
      {/* ================================= */}
      {/* ADVERTISERS */}
      {/* ================================= */}

      <div
        className="
          rounded-3xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          p-7
          backdrop-blur-2xl
          md:p-8
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Параметр 01
            </p>

            <h3 className="mt-2 text-xl font-light text-white">
              Количество рекламодателей
            </h3>
          </div>

          <div
            className="
              flex
              h-12
              min-w-16
              items-center
              justify-center
              rounded-xl
              border
              border-cyan-300/15
              bg-cyan-300/[0.04]
              px-4
              font-mono
              text-lg
              text-cyan-200
            "
          >
            {advertisers}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {[1, 2, 4].map((value) => {
            const selected = advertisers === value;

            return (
              <motion.button
                key={value}
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  onAdvertiserChange(
                    value as AdvertiserCount
                  )
                }
                className={`
                  rounded-xl
                  border
                  py-4
                  font-mono
                  text-sm
                  transition-all
                  duration-300

                  ${
                    selected
                      ? `
                        border-cyan-300/30
                        bg-cyan-300/[0.08]
                        text-cyan-200
                        shadow-[0_0_30px_rgba(103,232,249,0.08)]
                      `
                      : `
                        border-white/[0.06]
                        bg-white/[0.015]
                        text-white/35
                        hover:border-white/[0.12]
                        hover:text-white/70
                      `
                  }
                `}
              >
                {value}
              </motion.button>
            );
          })}
        </div>

        <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/20">
          <span>1 рекламодатель</span>
          <span>4 рекламодателя</span>
        </div>
      </div>

      {/* ================================= */}
      {/* QUANTITY */}
      {/* ================================= */}

      <div
        className="
          rounded-3xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          p-7
          backdrop-blur-2xl
          md:p-8
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div>
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-white/30
              "
            >
              Параметр 02
            </p>

            <h3 className="mt-2 text-xl font-light text-white">
              Тираж бутылок
            </h3>
          </div>

          <div
            className="
              rounded-xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              px-4
              py-3
              font-mono
              text-sm
              text-white/70
            "
          >
            {quantity.toLocaleString("ru-RU")}
          </div>
        </div>

       <input
  type="range"
  min={1000}
  max={20000}
  step={500}
  value={quantity}
  onChange={(event) =>
    onQuantityChange(Number(event.target.value))
  }
  style={{
    "--progress": `${((quantity - 1000) / (20000 - 1000)) * 100}%`,
  } as React.CSSProperties}
  className="slider mt-8 w-full"
/>

        <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/20">
          <span>1 000</span>
          <span>20 000</span>
        </div>
      </div>

      {/* ================================= */}
      {/* OPTIONS */}
      {/* ================================= */}

      <div
        className="
          rounded-3xl
          border
          border-white/[0.07]
          bg-white/[0.025]
          p-7
          backdrop-blur-2xl
          md:p-8
        "
      >
        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/30
          "
        >
          Дополнительные услуги
        </p>

        <div className="mt-6 space-y-3">
          <Option
            checked={includeDesign}
            onChange={onDesignChange}
            title="Разработка дизайна"
            description="Создание фирменной этикетки"
          />

          <Option
            checked={includeDistribution}
            onChange={onDistributionChange}
            title="Распространение"
            description="Организация размещения и раздачи"
          />
        </div>
      </div>
    </div>
  );
}

/* ================================= */
/* OPTION */
/* ================================= */

interface OptionProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  title: string;
  description: string;
}

function Option({
  checked,
  onChange,
  title,
  description,
}: OptionProps) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.99 }}
      onClick={() => onChange(!checked)}
      className={`
        flex
        w-full
        items-center
        gap-4
        rounded-2xl
        border
        p-5
        text-left
        transition-all
        duration-300

        ${
          checked
            ? `
              border-cyan-300/20
              bg-cyan-300/[0.05]
            `
            : `
              border-white/[0.05]
              bg-white/[0.015]
              hover:border-white/[0.1]
              hover:bg-white/[0.025]
            `
        }
      `}
    >
      <span
        className={`
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          transition-all
          duration-300

          ${
            checked
              ? `
                border-cyan-300
                bg-cyan-300
                text-black
              `
              : `
                border-white/20
                bg-transparent
              `
          }
        `}
      >
        {checked && (
          <span className="text-xs font-bold">
            ✓
          </span>
        )}
      </span>

      <span className="flex-1">
        <span
          className={`
            block
            text-sm
            ${
              checked
                ? "text-white"
                : "text-white/60"
            }
          `}
        >
          {title}
        </span>

        <span className="mt-1 block text-xs text-white/25">
          {description}
        </span>
      </span>
    </motion.button>
  );
}
