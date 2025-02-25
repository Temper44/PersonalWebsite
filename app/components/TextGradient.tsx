"use client";

import { useRef, useEffect, JSX } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function TextGradient({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top center`,
        end: `+=${window.innerHeight / 1.5}`,
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
        <p key={word + "_" + i} className="m-0 mr-[0.5rem]">
          {letters}
        </p>,
      );
    });
    return body;
  };

  const splitLetters = (word: string) => {
    const letters: JSX.Element[] = [];
    word.split(" ").forEach((letter, i) => {
      letters.push(
        <span
          className="opacity-20"
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
    <div ref={container}>
      <div ref={body} className={`flex flex-wrap ${className}`}>
        {splitWords(text)}
      </div>
    </div>
  );
}
