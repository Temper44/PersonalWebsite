"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);

  // 🛠 Dynamically adjust height to prevent black space issue
  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight; // Get actual viewport height
      if (firstLayer.current && secondLayer.current) {
        firstLayer.current.style.height = `${vh}px`;
        secondLayer.current.style.height = `${vh}px`;
      }
    };

    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight); // Update on resize

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
        console.log("Leaving:", { from, to });

        const tl = gsap
          .timeline({ onComplete: next })
          .fromTo(
            firstLayer.current,
            { y: "100%" },
            { y: 0, duration: 0.5, ease: "circ.inOut" },
          )
          .fromTo(
            secondLayer.current,
            { y: "100%" },
            { y: 0, duration: 0.5, ease: "circ.inOut" },
            "<50%",
          );

        return () => tl.kill();
      }}
      enter={(next) => {
        console.log("Entering new page...");

        const tl = gsap
          .timeline()
          .fromTo(
            secondLayer.current,
            { y: 0 },
            { y: "-100%", duration: 0.5, ease: "circ.inOut" },
          )
          .fromTo(
            firstLayer.current,
            { y: 0 },
            { y: "-100%", duration: 0.5, ease: "circ.inOut" },
            "<50%",
          )
          .call(next, undefined, "<50%");

        window.scrollTo({ top: 0, behavior: "instant" });
        return () => tl.kill();
      }}
    >
      <>{children}</>

      {/* 🛠 Dynamically sized transition layers */}
      <div
        ref={firstLayer}
        className="fixed left-0 top-0 z-50 w-full translate-y-full overflow-hidden bg-gradient-to-r from-rose-500 to-purple-500 will-change-transform"
      />
      <div
        ref={secondLayer}
        className="fixed left-0 top-0 z-50 w-full translate-y-full overflow-hidden bg-black will-change-transform"
      />
    </TransitionRouter>
  );
}
