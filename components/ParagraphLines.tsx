'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
};

export default function ParagraphLines({ text }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !textRef.current) return;

    // Split text into lines
    const split = new SplitType(textRef.current, {
      types: 'lines',
      lineClass: 'p-line',
    });

    // Wrap each line with background div
    split.lines?.forEach((line) => {
      const bg = document.createElement('span');
      bg.className = 'line-back-color';
      line.prepend(bg);
    });

    gsap.fromTo(
      '.line-back-color',
      { height: '0%' },
      {
        height: '100%',
        ease: 'none',
        stagger: 0.15,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: true,
        },
      }
    );

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={wrapperRef} className="paragraph-lines">
      <p ref={textRef} className="paragraph-text">
        {text}
      </p>
    </div>
  );
}
