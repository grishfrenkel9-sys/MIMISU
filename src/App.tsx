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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
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

  const scrollToSection = (id: string) => {
    const lenis = (window as any).__mimisuLenis as Lenis | undefined;

    const element = document.getElementById(id);

    if (!element) return;

    if (lenis) {
      lenis.scrollTo(element, {
        duration: 1.4,
        easing: (t: number) =>
          1 - Math.pow(1 - t, 4),
      });
    } else {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {loading && (
        <SiteLoader
          onComplete={() => {
            setLoading(false);
          }}
        />
      )}

      <Navbar />

      <BottleCanvas />

      <main className="relative z-20">
        <Hero onNavigate={scrollToSection} />
        <About />
        <Story />
        <Features />
        <Calculator />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}