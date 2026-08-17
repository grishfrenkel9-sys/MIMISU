import { motion } from "framer-motion";

import { useLanguage } from "../../context/LanguageContext";

import type { AdvertiserCount } from "./types";

interface Props {
  advertisers: AdvertiserCount;
  quantity: number;
  includeDesign: boolean;

  onAdvertiserChange: (
    value: AdvertiserCount
  ) => void;

  onQuantityChange: (value: number) => void;

  onDesignChange: (value: boolean) => void;
}

const MIN_QUANTITY = 1000;
const MAX_QUANTITY = 20000;
const QUANTITY_STEP = 1000;

export default function CalculatorConfig({
  advertisers,
  quantity,
  includeDesign,
  onAdvertiserChange,
  onQuantityChange,
  onDesignChange,
}: Props) {
  const { t } = useLanguage();

  const progress =
    ((quantity - MIN_QUANTITY) /
      (MAX_QUANTITY - MIN_QUANTITY)) *
    100;

  return (
    <div className="space-y-3 sm:space-y-4">

      {/* ADVERTISERS */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[1.15rem]
          border
          border-cyan-100/[0.06]
          bg-[#0A2027]/70
          p-3.5

          xs:rounded-[1.25rem]
          xs:p-4

          sm:rounded-3xl
          sm:p-7

          md:p-8
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-16
            h-32
            w-32
            rounded-full
            bg-cyan-300/[0.02]
            blur-[50px]
          "
        />

        <div className="relative z-10 min-w-0">

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.23em]
                  text-cyan-100/25

                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                {t.calculator.parameter} 01
              </p>

              <h3
                className="
                  mt-1
                  max-w-[190px]
                  text-[15px]
                  font-light
                  leading-tight
                  text-white

                  xs:text-[16px]
                  sm:mt-2
                  sm:max-w-none
                  sm:text-xl
                "
              >
                {t.calculator.advertisers}
              </h3>
            </div>

            <div
              className="
                flex
                h-9
                min-w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                border
                border-cyan-200/[0.10]
                bg-cyan-200/[0.025]
                px-2.5
                font-mono
                text-sm
                text-cyan-100/80

                xs:h-10
                xs:min-w-11
                sm:h-12
                sm:min-w-16
                sm:rounded-xl
                sm:px-4
                sm:text-lg
              "
            >
              {advertisers}
            </div>
          </div>

          {/* BUTTONS */}

          <div
            className="
              mt-4
              grid
              grid-cols-3
              gap-1.5

              xs:gap-2
              sm:mt-8
              sm:gap-3
            "
          >
            {[1, 2, 4].map((value) => {
              const selected =
                advertisers === value;

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
                    min-w-0
                    rounded-lg
                    border
                    py-2.5
                    font-mono
                    text-sm
                    transition-[border-color,background-color,color,box-shadow]
                    duration-200

                    xs:py-3
                    sm:rounded-xl
                    sm:py-4

                    ${
                      selected
                        ? `
                          border-cyan-200/20
                          bg-cyan-200/[0.045]
                          text-cyan-100
                          shadow-[0_0_25px_rgba(127,197,208,0.04)]
                        `
                        : `
                          border-white/[0.05]
                          bg-white/[0.012]
                          text-white/35
                          hover:border-cyan-100/[0.10]
                          hover:bg-cyan-100/[0.018]
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

          <div
            className="
              mt-1.5
              grid
              grid-cols-3
              items-start
              text-[7px]
              uppercase
              tracking-[0.09em]
              text-white/20

              xs:text-[8px]
              sm:mt-3
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            <span className="text-left">
              {t.calculator.advertiserOne}
            </span>

            <span />

            <span className="text-right">
              {t.calculator.advertiserFour}
            </span>
          </div>
        </div>
      </div>

      {/* QUANTITY */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[1.15rem]
          border
          border-cyan-100/[0.06]
          bg-[#0A2027]/70
          p-3.5

          xs:rounded-[1.25rem]
          xs:p-4

          sm:rounded-3xl
          sm:p-7

          md:p-8
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -left-16
            bottom-[-60px]
            h-32
            w-32
            rounded-full
            bg-sky-300/[0.018]
            blur-[50px]
          "
        />

        <div className="relative z-10 min-w-0">

          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.23em]
                  text-cyan-100/25

                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                {t.calculator.parameter} 02
              </p>

              <h3
                className="
                  mt-1
                  text-[15px]
                  font-light
                  leading-tight
                  text-white

                  xs:text-[16px]
                  sm:mt-2
                  sm:text-xl
                "
              >
                {t.calculator.bottles}
              </h3>
            </div>

            <div
              className="
                shrink-0
                rounded-lg
                border
                border-white/[0.06]
                bg-white/[0.018]
                px-2
                py-1.5
                font-mono
                text-[11px]
                text-white/65

                xs:px-2.5
                xs:py-2
                sm:rounded-xl
                sm:px-4
                sm:py-3
                sm:text-sm
              "
            >
              {quantity.toLocaleString("ru-RU")}
            </div>
          </div>

          {/* SLIDER */}

          <div className="relative mt-5 h-10 sm:mt-8 sm:h-10">

            <div
              className="
                pointer-events-none
                absolute
                left-0
                right-0
                top-1/2
                h-[3px]
                -translate-y-1/2
                rounded-full
                bg-white/[0.08]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-1/2
                h-[3px]
                -translate-y-1/2
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                to-cyan-200
              "
              style={{
                width: `${progress}%`,
              }}
            />

            <div
              className="
                pointer-events-none
                absolute
                top-1/2
                z-10
                h-4
                w-4
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border-[3px]
                border-[#071A20]
                bg-cyan-200
                shadow-[0_0_14px_rgba(103,232,249,.45)]

                sm:h-5
                sm:w-5
                sm:border-[4px]
              "
              style={{
                left: `${progress}%`,
              }}
            />

            <input
              type="range"
              min={MIN_QUANTITY}
              max={MAX_QUANTITY}
              step={QUANTITY_STEP}
              value={quantity}
              onChange={(event) =>
                onQuantityChange(
                  Number(event.target.value)
                )
              }
              aria-label={t.calculator.bottles}
              className="
                absolute
                inset-0
                z-20
                h-full
                w-full
                cursor-pointer
                opacity-0
              "
            />
          </div>

          <div
            className="
              mt-0
              flex
              justify-between
              text-[7px]
              uppercase
              tracking-[0.13em]
              text-white/20

              sm:mt-2
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            <span>1 000</span>
            <span>20 000</span>
          </div>
        </div>
      </div>

      {/* OPTIONS */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[1.15rem]
          border
          border-cyan-100/[0.06]
          bg-[#0A2027]/70
          p-3.5

          xs:rounded-[1.25rem]
          xs:p-4

          sm:rounded-3xl
          sm:p-7

          md:p-8
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            right-[-50px]
            bottom-[-60px]
            h-32
            w-32
            rounded-full
            bg-cyan-300/[0.015]
            blur-[50px]
          "
        />

        <div className="relative z-10">
          <p
            className="
              text-[7px]
              uppercase
              tracking-[0.23em]
              text-cyan-100/25

              sm:text-[10px]
              sm:tracking-[0.3em]
            "
          >
            {t.calculator.additional}
          </p>

          <div className="mt-3 space-y-2 sm:mt-6 sm:space-y-3">
            <Option
              checked={includeDesign}
              onChange={onDesignChange}
              title={t.calculator.design}
              description={
                t.calculator.designDescription
              }
            />

          </div>
        </div>
      </div>
    </div>
  );
}

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
        relative
        flex
        w-full
        min-w-0
        items-center
        gap-2.5
        overflow-hidden
        rounded-xl
        border
        p-3
        text-left
        transition-[border-color,background-color]
        duration-200

        xs:gap-3
        xs:p-3.5

        sm:gap-4
        sm:rounded-2xl
        sm:p-5

        ${
          checked
            ? `
              border-cyan-200/15
              bg-cyan-200/[0.035]
            `
            : `
              border-white/[0.05]
              bg-white/[0.012]
              hover:border-cyan-100/[0.09]
              hover:bg-cyan-100/[0.015]
            `
        }
      `}
    >
      {checked && (
        <span
          className="
            pointer-events-none
            absolute
            -left-8
            top-1/2
            h-16
            w-16
            -translate-y-1/2
            rounded-full
            bg-cyan-300/[0.05]
            blur-[25px]
          "
        />
      )}

      <span
        className={`
          relative
          z-10
          flex
          h-5
          w-5
          shrink-0
          items-center
          justify-center
          rounded-md
          border
          transition-[border-color,background-color]
          duration-200

          ${
            checked
              ? `
                border-cyan-200/60
                bg-cyan-200/80
                text-[#07191F]
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

      <span className="relative z-10 min-w-0 flex-1">
        <span
          className={`
            block
            truncate
            text-[12px]

            xs:text-[13px]
            sm:text-sm

            ${
              checked
                ? "text-white"
                : "text-white/60"
            }
          `}
        >
          {title}
        </span>

        <span
          className="
            mt-0.5
            block
            truncate
            text-[9px]
            text-white/25

            xs:text-[10px]
            sm:mt-1
            sm:text-xs
          "
        >
          {description}
        </span>
      </span>
    </motion.button>
  );
}