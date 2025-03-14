"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const firstLayer = useRef<HTMLDivElement | null>(null);
  const secondLayer = useRef<HTMLDivElement | null>(null);

  return (
    <TransitionRouter
      auto={true}
      leave={(next, from, to) => {
        console.log("Leaving:", { from, to });

        // 🚀 Instantly scroll to top BEFORE transition starts to prevent flash
        // window.scrollTo({ top: 0, behavior: "instant" });

        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { y: "100%" },
            {
              y: 0,
              duration: 0.5,
              ease: "circ.inOut",
            },
          )
          .fromTo(
            secondLayer.current,
            { y: "100%" },
            {
              y: 0,
              duration: 0.5,
              ease: "circ.inOut",
            },
            "<50%",
          );

        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        console.log("Entering new page...");

        const tl = gsap
          .timeline()
          .fromTo(
            secondLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration: 0.5,
              ease: "circ.inOut",
            },
          )
          .fromTo(
            firstLayer.current,
            { y: 0 },
            {
              y: "-100%",
              duration: 0.5,
              ease: "circ.inOut",
            },
            "<50%",
          )
          .call(next, undefined, "<50%"); // End transition
        window.scrollTo({ top: 0, behavior: "instant" });
        return () => {
          tl.kill();
        };
      }}
    >
      <>{children}</>

      <div
        ref={firstLayer}
        className="fixed left-0 top-0 z-50 h-[100dvh] w-full translate-y-full overflow-hidden bg-gradient-to-r from-rose-500 to-purple-500 will-change-transform"
      />
      <div
        ref={secondLayer}
        className="fixed left-0 top-0 z-50 h-[100dvh] w-full translate-y-full overflow-hidden bg-black will-change-transform"
      />
    </TransitionRouter>
  );
}
