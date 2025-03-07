import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/BackgroundGradientAnimation";
import MarqueeText from "../components/MarqueeText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TextGradient from "../components/TextGradient";
import { skills } from "@/lib/data";
import { skillsText } from "@/lib/texts";

gsap.registerPlugin(ScrollTrigger);

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
        // markers: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100dvh",
      borderRadius: 0,
    });
  });

  return (
    <section className="flex-col-center relative overflow-hidden">
      <MarqueeText text="Skills" />
      <div className="skillsContainer h-dvh w-screen">
        <h2 className="absolute-center top-[60%] w-[80%] text-center font-extralight tracking-wide ~text-base/2xl sm:top-[75%] md:w-auto">
          {skillsText}
        </h2>
        <div className="mask-clip-path absolute-center top-0 z-20 h-[40vh] w-[60vw] origin-center overflow-hidden rounded-3xl md:h-[60vh] md:w-[30vw]">
          <BackgroundGradientAnimation interactive={false}>
            <div className="flex-center absolute inset-0 z-50 ~px-8/28">
              <TextGradient
                text={skills.join(" / ")}
                className="textShadow font-semibold text-white ~text-3xl/8xl"
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
