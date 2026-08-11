import { useEffect, useState } from "react";
import Lenis from "lenis";

import SiteLoader from "./components/loader/SiteLoader";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Story from "./components/story";
import Features from "./components/features";
import Calculator from "./components/calculator";
import { FAQ } from "./components/faq";
import Footer from "./components/footer/Footer";

import BottleCanvas from "./components/canvas/BottleCanvas";

export default function App() {
  const [loading, setLoading] = useState(true);

  /* =========================================
     LENIS
  ========================================= */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      touchMultiplier: 1.2,
      autoRaf: true,
    });

    (window as any).__mimisuLenis = lenis;

    return () => {
      delete (window as any).__mimisuLenis;
      lenis.destroy();
    };
  }, []);

  /* =========================================
     GLOBAL NAVIGATION
  ========================================= */

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      console.warn(`Section #${id} not found`);
      return;
    }

    const lenis = (window as any).__mimisuLenis;

    if (lenis) {
      lenis.scrollTo(element, {
        offset: -80,
        duration: 1.5,
        easing: (t: number) => {
          return 1 - Math.pow(1 - t, 4);
        },
      });

      return;
    }

    const top =
      element.getBoundingClientRect().top +
      window.scrollY -
      80;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* =========================================
          LOADER
      ========================================= */}

      {loading && (
        <SiteLoader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      {/* =========================================
          NAVBAR
      ========================================= */}

      <Navbar />

      {/* =========================================
          3D BOTTLE
      ========================================= */}

      <BottleCanvas />

      {/* =========================================
          MAIN
      ========================================= */}

      <main className="relative z-20">
        <Hero onNavigate={scrollToSection} />

        <About />

        <Story />

        <Features />

        <Calculator />

        <FAQ />
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />
    </>
  );
}