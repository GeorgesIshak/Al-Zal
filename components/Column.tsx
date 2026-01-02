'use client';

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

interface Event {
  image: string;
  date: string;
  title: string;
  description: string;
}

export default function EventsGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const items = containerRef.current?.querySelectorAll('.event-card');
      items?.forEach((item, i) => {
        gsap.fromTo(item,
          {
            y: 50 + (i % 4) * 20,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            delay: (i % 4) * 0.1,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              end: "top center",
              scrub: 1,
            }
          }
        );

        item.addEventListener("mouseenter", () => {
          gsap.to(item, { y: -10, scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)", duration: 0.3, ease: "power2.out" });
        });
        item.addEventListener("mouseleave", () => {
          gsap.to(item, { y: 0, scale: 1, boxShadow: "0 10px 20px rgba(0,0,0,0.15)", duration: 0.3, ease: "power2.out" });
        });
      });
    }, containerRef);

    return () => { ctx.revert(); lenis.destroy(); };
  }, []);

  const events: Event[] = [
    { image: '/3.jpg', date: 'Dec 29, 2025', title: 'Event One', description: 'This is the first event.' },
    { image: '/6.jpg', date: 'Dec 30, 2025', title: 'Event Two', description: 'This is the second event.' },
    { image: '/11.avif', date: 'Jan 01, 2026', title: 'Event Three', description: 'Another amazing event.' },
    { image: '/12.jpg', date: 'Jan 05, 2026', title: 'Event Four', description: 'Exciting things happening.' },
    { image: '/5.jpg', date: 'Jan 10, 2026', title: 'Event Five', description: 'Don’t miss this one.' },
    { image: '/14.jpg', date: 'Jan 15, 2026', title: 'Event Six', description: 'Final event in series.' },
    { image: '/7.jpg', date: 'Jan 20, 2026', title: 'Event Seven', description: 'Another cool event.' },
    { image: '/8.jpg', date: 'Jan 25, 2026', title: 'Event Eight', description: 'Last one this month.' },
  ];

  return (
   <section className="bg-white pt-32">
  {/* ===== SECTION HEADER ===== */}
  <motion.div 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-10% 0px" }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="max-w-[1440px] mx-auto px-6 md:px-16 pb-16"
  >
    <div className="flex items-center gap-6 mb-6">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-[14px] uppercase tracking-[0.3em] text-black"
      >
        Events
      </motion.span>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
        className="flex-1 h-[1px] bg-black origin-left" 
      />
    </div>

    <motion.h2 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
    className="max-w-[1100px] text-[5vw] md:text-[5rem] leading-tight font-s text-[#6b1415]"
    >
      Discover Our <br />Exciting Events
    </motion.h2>
  </motion.div>

  {/* ===== EVENTS GRID ===== */}
  <div className="max-w-[1440px] mx-auto px-6 md:px-16">
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12">
      {events.map((event, idx) => (
        <div
          key={idx}
          className="event-card rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer will-change-transform transition-transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="relative w-full h-56 md:h-48">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-500">{event.date}</p>
            <h3 className="font-semibold text-lg mt-1">{event.title}</h3>
            <p className="text-gray-700 text-sm mt-1">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
