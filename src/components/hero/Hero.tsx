import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroFeed from "./HeroFeed";
import HeroScroll from "./HeroScroll";
import HeroStats from "./HeroStats";
import HeroTitle from "./HeroTitle";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
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
          pb-24
          pt-24
          sm:px-6
          sm:pt-28
          md:px-10
          md:pt-32
          lg:px-16
          lg:pb-28
          lg:pt-36
        "
      >
        <div
          className="
            mb-7
            flex
            items-center
            justify-between
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-[#073b4c]/45
            sm:mb-9
            sm:text-[9px]
          "
        >
          <span className="flex items-center gap-3">
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
                mt-6
                max-w-[620px]
                text-sm
                font-medium
                leading-7
                text-[#073b4c]/65
                sm:mt-7
                md:text-[15px]
              "
            >
              MiMiSU превращает обычную бутылку воды
              в современный рекламный носитель —
              с QR-аналитикой, измеримым охватом
              и прозрачной статистикой.
            </p>

            <HeroButtons onNavigate={onNavigate} />
          </div>

          {/* RIGHT */}

          <div
            className="
              relative
              z-10
              mt-2
              h-[430px]
              sm:h-[500px]
              lg:mt-0
              lg:h-[620px]
            "
          >
            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[250px]
                w-[250px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-cyan-200/40
                blur-[90px]
                sm:h-[360px]
                sm:w-[360px]
                sm:blur-[120px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[290px]
                w-[290px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#073b4c]/[0.07]
                sm:h-[430px]
                sm:w-[430px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#073b4c]/[0.045]
                sm:h-[340px]
                sm:w-[340px]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[300px]
                w-[calc(100%-20px)]
                max-w-[460px]
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

            <div
              className="
                absolute
                bottom-[4%]
                right-[3%]
                rounded-full
                border
                border-white/70
                bg-white/65
                px-3
                py-2
                text-[7px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#073b4c]/50
                shadow-[0_10px_30px_rgba(7,59,76,.06)]
                backdrop-blur-xl
                sm:px-4
                sm:text-[8px]
              "
            >
              Water / Media / Data
            </div>

            <div
              className="
                absolute
                left-[3%]
                top-[9%]
                flex
                items-center
                gap-2
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-[#073b4c]/35
              "
            >
              <span className="h-px w-6 bg-[#073b4c]/20" />
              01
            </div>
          </div>
        </div>

        <div className="relative z-20">
          <HeroStats />
        </div>
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-[100px]
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