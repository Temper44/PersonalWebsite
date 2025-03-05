"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const MarqueeText = ({ text }: { text: string }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    // Create the infinite scrolling effect
    const marqueeTimeline = gsap.timeline({
      repeat: -1,
    });

    // Animate the marquee text
    // marqueeTimeline.to(marquee, {
    //   xPercent: -100, // Move the text fully out of the viewport
    //   duration: 10, // Duration for one full scroll
    //   ease: "none",
    // });

    // Store the timeline reference for use in scroll interaction
    timelineRef.current = marqueeTimeline;

    // Scroll interaction
    const updateOnScroll = () => {
      const scrollAmount = window.scrollY || 0;

      // Pause the timeline while scrolling
      //   marqueeTimeline.pause();

      // Adjust position based on scroll
      gsap.to(marquee, {
        xPercent: -scrollAmount * 0.01, // Adjust speed by multiplying scroll
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => {
          // Resume the timeline after scrolling stops
          marqueeTimeline.play();
        },
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", updateOnScroll);

    return () => {
      // Clean up event listener
      window.removeEventListener("scroll", updateOnScroll);
    };
  }, []);

  return (
    <div
      className="overflow-hidden"
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        width: "99vw",
      }}
    >
      <div
        ref={marqueeRef}
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
        }}
      >
        <h2 className="mb-[4rem] mt-[9rem] inline-block overflow-hidden font-urbanist text-4xl font-normal uppercase italic tracking-wide xs:text-5xl sm:mb-[5rem] sm:mt-[10rem] sm:text-7xl md:mb-[6rem] md:mt-[11rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem] 2xl:mb-[8rem] 2xl:mt-[13rem] 2xl:text-[11rem]">
          {text} - {text} - {text} - {text} - {text} - {text} - {text} - {text}
        </h2>
      </div>
    </div>
  );
};

export default MarqueeText;
