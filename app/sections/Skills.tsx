"use client";

import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/BackgroundGradientAnimation";
import MarqueeText from "../components/MarqueeText";
import TextGradient from "../components/TextGradient";
import { skills } from "@/lib/data";
import { skillsText } from "@/lib/texts";
import { useSectionInView } from "@/lib/hooks";
import { gsap, useGSAP } from "@/lib/gsapConfig";
import MaskText from "../components/MaskText";

const Skills = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".skillsContainer",
        start: "center center",
        end: "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100svh",
      borderRadius: 0,
    });
  });

  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="flex-col-center relative overflow-hidden"
    >
      <MarqueeText fontMobileBigger text="Skills" />
      <div className="skillsContainer relative h-svh w-screen">
        <div className="mask-clip-path absolute-center top-0 z-20 h-[40vh] w-[60vw] origin-center overflow-hidden rounded-3xl will-change-transform md:h-[60vh] md:w-[30vw]">
          <BackgroundGradientAnimation>
            <div className="flex-center absolute inset-0 z-50 ~px-8/28">
              <TextGradient
                text={skills.join(" / ")}
                className="textShadow font-semibold text-white ~text-3xl/8xl"
                animationStart="bottom center"
                animationEnd="+=500"
              />
            </div>
          </BackgroundGradientAnimation>
        </div>
        <MaskText
          containerClassName="absolute-center textShort top-[60%] sm:top-[75%]"
          text={[skillsText]}
        />
      </div>
    </section>
  );
};

export default Skills;
