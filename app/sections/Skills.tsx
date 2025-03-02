import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/BackgroundGradientAnimation";
import MarqueeText from "../components/MarqueeText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TextGradient from "../components/TextGradient";
import { skills } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".skillsContainer",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section className="relative flex flex-col items-center">
      <MarqueeText text="Skills/Interests" />
      <div className="skillsContainer h-dvh w-screen">
        <h2 className="absolute left-1/2 top-3/4 -translate-x-1/2 text-center text-xl font-extralight">
          I strive to learn and master modern web technologies to create
          seamless, accessible, and visually stunning experiences
        </h2>
        <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[40vh] w-[60vw] origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:h-[60vh] md:w-[30vw]">
          <BackgroundGradientAnimation interactive={false}>
            <div className="absolute inset-0 z-50 flex items-center justify-center px-10">
              <TextGradient
                text={skills.join(" / ")}
                className="textShadow text-3xl font-semibold text-white md:text-4xl lg:text-7xl"
                opacityClassName="opacity-0"
              />
            </div>
          </BackgroundGradientAnimation>
        </div>
      </div>
    </section>
  );
};

export default Skills;
