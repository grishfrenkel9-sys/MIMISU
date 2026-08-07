import { useEffect, useState } from "react";

interface SectionProgress {
  hero: number;
  about: number;
  story: number;
  features: number;
  calculator: number;
  faq: number;
  footer: number;
}

const clamp = (value: number) =>
  Math.min(Math.max(value, 0), 1);

export default function useSectionProgress(): SectionProgress {
  const [progress, setProgress] =
    useState<SectionProgress>({
      hero: 0,
      about: 0,
      story: 0,
      features: 0,
      calculator: 0,
      faq: 0,
      footer: 0,
    });

  useEffect(() => {
    const update = () => {
      const viewport = window.innerHeight;

      const getProgress = (id: string) => {
        const element =
          document.getElementById(id);

        if (!element) return 0;

        const rect =
          element.getBoundingClientRect();

        const start =
          viewport;

        const end =
          -rect.height;

        return clamp(
          (start - rect.top) /
            (start - end)
        );
      };

      setProgress({
        hero: getProgress("hero"),
        about: getProgress("about"),
        story: getProgress("story"),
        features: getProgress("features"),
        calculator:
          getProgress("calculator"),
        faq: getProgress("faq"),
        footer: getProgress("footer"),
      });
    };

    update();

    window.addEventListener(
      "scroll",
      update,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      update
    );

    return () => {
      window.removeEventListener(
        "scroll",
        update
      );

      window.removeEventListener(
        "resize",
        update
      );
    };
  }, []);

  return progress;
}
