"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function WelcomeScrollSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    tl.to(textRef.current, {
      x: "-50vw",
      opacity: 0,
      ease: "none",
    });

    tl.fromTo(
      imageRef.current,
      { xPercent: 100, opacity: 0 },
      { xPercent: 0, opacity: 1, ease: "none" },
      0
    );

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-[#fffdf4] z-20"
    >
      {/* TEXT */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center text-center z-30 px-6"
      >
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-[42px] md:text-[68px] font-extrabold mb-8 text-[#6b1415] leading-tight">
            Al Zal Street Food
          </h1>

          <p className="text-lg md:text-xl text-black/70 leading-relaxed">
            Step into the world of Al Zal — where every bite tells a story.
            Inspired by the vibrant flavors of the streets, we serve bold,
            handcrafted dishes made with heart. From sizzling shawarmas to
            crispy falafel and spicy fries, taste the energy, soul, and culture
            of true street food reimagined.
          </p>
        </motion.div>
      </div>

      {/* IMAGE */}
      <div
        ref={imageRef}
        className="absolute inset-0 overflow-hidden rounded-[55px] z-10 p-20"
      >
        <Image
          src="/img20.jpg"
          alt="Street Food"
          fill
          className="object-cover rounded-[55px]"
          priority
        />
      </div>
    </section>
  );
}
