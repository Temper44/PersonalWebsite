"use client";

import { useRef, JSX } from "react";
import { gsap, useGSAP } from "@/lib/gsapConfig";

export default function TextGradient({
  text,
  className,
  opacityClassName = "opacity-0",
  animationStart,
  animationEnd,
  spaceLine = true,
}: {
  text: string;
  className?: string;
  opacityClassName?: string;
  animationStart: string;
  animationEnd: string;
  spaceLine?: boolean;
}) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const body = useRef(null);
  const container2 = useRef(null);

  useGSAP(() => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container2.current,
        scrub: true,
        start: animationStart,
        end: animationEnd,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  }, []);

  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p
          key={word + "_" + i}
          className="~mr-[0.5rem]/[1.1rem] ~mb-[0.5rem]/[1.1rem]"
        >
          {letters}
        </p>,
      );
    });
    if (spaceLine) {
      body.push(
        <span
          key={"spacer"}
          className={`flex-1 self-center bg-zinc-100 ~h-[0.2rem]/[0.45rem] ${opacityClassName}`}
          ref={(el) => {
            refs.current.push(el);
          }}
        />,
      );
    }
    return body;
  };

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = [];
    word.split(" ").forEach((letter, i) => {
      letters.push(
        <span
          className={`${opacityClassName} `}
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>,
      );
    });
    return letters;
  };

  return (
    <div ref={container2} className="overflow-hidden">
      <div ref={body} className={`flex flex-wrap ${className}`}>
        {splitWords(text)}
      </div>
    </div>
  );
}
