import React, { useEffect, useRef } from "react";
import MarqueeText from "../components/MarqueeText";
import { FiArrowDownRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskText from "../components/MaskText";
import TextGradient from "../components/TextGradient";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutMeRef.current) {
      gsap.fromTo(
        aboutMeRef.current,
        { scale: 1 },
        {
          scale: 0.95,
          scrollTrigger: {
            trigger: aboutMeRef.current,
            start: "center center",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
          ease: "easeIn",
        },
      );
      ScrollTrigger.create({
        trigger: aboutMeRef.current,
        start: "top-=100px center",
        end: "start+=100px center",
        scrub: true,
        // markers: true,
        onEnter: () => {
          aboutMeRef.current?.classList.add("bg-zinc-900", "dark:bg-zinc-100");
        },
        onLeaveBack: () => {
          aboutMeRef.current?.classList.remove(
            "bg-zinc-900",
            "dark:bg-zinc-100",
          );
        },
      });
    }
  }, []);

  return (
    <section className="flex flex-col items-center">
      <MarqueeText text="About me" />
      <div
        ref={aboutMeRef}
        className="relative min-h-screen w-full rounded-[3rem] transition-colors duration-1000" //bg-zinc-900 dark:bg-zinc-100
      >
        <div className="absolute left-8 top-8 text-white dark:text-black 2xl:text-8xl">
          <FiArrowDownRight />
        </div>
        <div className="flex h-full w-full flex-row items-center gap-4 p-6">
          <div className="">
            <img
              src="./img/portrait4-5.jpg"
              alt="My Picture"
              className="w-[30vw] rounded-xl shadow-md"
            />
          </div>
          <div className="">
            <MaskText
              text={[
                "It is a long established fact",
                "that a reader will be distracted",
                "by the readable content of a page",
                "when looking at its layout.",
              ]}
            />
            <TextGradient
              text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."
              className="text-4xl text-white dark:text-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
