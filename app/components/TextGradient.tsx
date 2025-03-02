"use client";

import { useRef, useEffect, JSX } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function TextGradient({
  text,
  className,
  opacityClassName = "opacity-20",
  animationStart = "top top",
  animationEnd = `+=500`,
  spaceLine = true,
}: {
  text: string;
  className?: string;
  opacityClassName?: string;
  animationStart?: string;
  animationEnd?: string;
  spaceLine?: boolean;
}) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const body = useRef(null);
  const container = useRef(null);

  console.log(window.innerHeight);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: animationStart,
        end: animationEnd,
        // markers: true,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      markers: true,
    });
  };

  const splitWords = (phrase: string) => {
    const body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={word + "_" + i} className="mb-[0.5rem] mr-[0.5rem]">
          {letters}
        </p>,
      );
    });
    if (spaceLine) {
      body.push(
        <span
          key={"spacer"}
          className="h-[5px] flex-1 self-center bg-zinc-300"
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
          className={opacityClassName}
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
    <div ref={container} className="overflow-hidden">
      <div ref={body} className={`flex flex-wrap ${className}`}>
        {splitWords(text)}
      </div>
    </div>
  );
}
