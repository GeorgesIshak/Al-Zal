"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(
  ref: React.RefObject<HTMLElement>,
  options = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
      },
      ...options,
    });
  }, [ref, options]);
}
