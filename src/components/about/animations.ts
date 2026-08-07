import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function animateAbout() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      once: true,
    },
  });

  tl.from(".about-title", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
  })

    .from(
      ".about-text",
      {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      },
      "-=0.6"
    )

    .from(
      ".about-card",
      {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      },
      "-=0.5"
    );
}
