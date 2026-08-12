import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroFeed from "./HeroFeed";
import HeroScroll from "./HeroScroll";
import HeroStats from "./HeroStats";
import HeroTitle from "./HeroTitle";

import { useLanguage } from "../../context/LanguageContext";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        text-[#073b4c]
      "
    >
      <HeroBackground />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          max-w-[1500px]
          flex-col
          px-5
          pb-16
          pt-20
          sm:px-6
          sm:pb-24
          sm:pt-28
          md:px-10
          md:pt-32
          lg:px-16
          lg:pb-28
          lg:pt-36
        "
      >
        {/* TOP LABEL */}

        <div
          className="
            mb-6
            flex
            items-center
            justify-between
            text-[7px]
            font-semibold
            uppercase
            tracking-[0.24em]
            text-[#073b4c]/45
            sm:mb-9
            sm:text-[9px]
            sm:tracking-[0.28em]
          "
        >
          <span className="flex items-center gap-2.5 sm:gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#0aa6b7]
                shadow-[0_0_12px_rgba(10,166,183,.35)]
              "
            />

            MiMiSU / Water Media
          </span>

          <span className="hidden md:block">
            Digital Water System
          </span>
        </div>

        {/* MAIN GRID */}

        <div
          className="
            grid
            flex-1
            items-center
            gap-8
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-10
          "
        >
          {/* LEFT */}

          <div
            className="
              relative
              z-20
              max-w-[820px]
            "
          >
            <HeroBadge />

            <HeroTitle />

            <p
              className="
                mt-7
                max-w-[620px]
                text-[13px]
                font-medium
                leading-6
                text-[#073b4c]/65
                sm:mt-7
                sm:text-sm
                sm:leading-7
                md:text-[15px]
              "
            >
              {t.hero.description}
            </p>

            <HeroButtons onNavigate={onNavigate} />
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              z-10
              mt-0
              h-[320px]
              sm:mt-2
              sm:h-[500px]
              lg:mt-0
              lg:h-[620px]
            "
          >
            {/* GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[200px]
                w-[200px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-200/40
                blur-[70px]
                sm:h-[360px]
                sm:w-[360px]
                sm:blur-[120px]
              "
            />

            {/* OUTER RING */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[230px]
                w-[230px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#073b4c]/[0.07]
                sm:h-[430px]
                sm:w-[430px]
              "
            />

            {/* INNER RING */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[175px]
                w-[175px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#073b4c]/[0.045]
                sm:h-[340px]
                sm:w-[340px]
              "
            />

            {/* FEED */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[calc(100%-20px)]
                max-w-[350px]
                -translate-x-1/2
                -translate-y-1/2
                sm:h-[410px]
                sm:w-[430px]
                lg:h-[500px]
                lg:w-[470px]
              "
            >
              <HeroFeed />
            </div>

            {/* WATER / MEDIA / DATA */}

            <div
              className="
                absolute
                bottom-[2%]
                right-[2%]
                rounded-full
                border
                border-white/70
                bg-white/65
                px-2.5
                py-1.5
                text-[6px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#073b4c]/50
                shadow-[0_10px_30px_rgba(7,59,76,.06)]
                backdrop-blur-xl
                sm:px-4
                sm:py-2
                sm:text-[8px]
                sm:tracking-[0.2em]
              "
            >
              Water / Media / Data
            </div>

            {/* INDEX */}

            <div
              className="
                absolute
                left-[3%]
                top-[5%]
                hidden
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[#073b4c]/35
                sm:flex
              "
            >
              <span className="h-px w-6 bg-[#073b4c]/20" />
              01
            </div>
          </div>
        </div>

        {/* STATS */}

        <div className="relative z-20 mt-4 sm:mt-0">
          <HeroStats />
        </div>
      </div>

      {/* BOTTOM GRADIENT */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[80px]
          bg-gradient-to-b
          from-transparent
          to-slate-50
          sm:h-[140px]
        "
      />

      <HeroScroll />
    </section>
  );
}