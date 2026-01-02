/* eslint-disable prefer-const */
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  '/img1.jpg', '/img2.jpg', '/img3.jpg',
  '/img4.jpg', '/img5.jpg', '/img6.jpg',
  '/img7.jpg', '/img5.jpg', '/img6.jpg',
  
];

export default function HorizontalScrollGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (!trackRef.current || !sectionRef.current) return;

      const track = trackRef.current;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${track.scrollWidth}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100vw',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: '1fr',      // BASE UNIT (1fr)
          height: '100vh',
          alignItems: 'center',
          padding: '0 2vw',
          width: 'max-content',
          willChange: 'transform',
          columnGap: '2vw',            // outer spacing
        }}
      >
        {images.map((src, i) => {
          const isBig = i % 3 === 0;

          return (
            <div
              key={i}
              style={{
                position: 'relative',
                height: '70vh',
                gridColumn: isBig ? 'span 2' : 'span 1', // TRUE 2fr / 1fr
                minWidth: '22vw',
                paddingInline: '1vw',   // 🔥 ensures visible gap
                boxSizing: 'border-box',
              }}
            >
              <Image
                src={src}
                alt={`Gallery ${i}`}
                fill
                priority={i < 3}
                sizes={isBig ? '66vw' : '33vw'}
                style={{
                  objectFit: 'cover',
                  borderRadius: '14px',
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
