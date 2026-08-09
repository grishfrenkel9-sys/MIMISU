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
      autoRaf: true,
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* =========================================
          LIVE BACKGROUND
      ========================================= */}

    

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
          3D MOLECULE
      ========================================= */}

      <BottleCanvas />

      {/* =========================================
          PAGE
      ========================================= */}

      <main className="relative z-20">
        <Hero />
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