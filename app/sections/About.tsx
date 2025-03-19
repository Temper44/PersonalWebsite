"use client";

import React, { useRef } from "react";
import MarqueeText from "../components/MarqueeText";
import { FiArrowDownRight } from "react-icons/fi";
import MaskText from "../components/MaskText";
import TextGradient from "../components/TextGradient";
import hoverEffect from "hover-effect";
import { aboutMeTexts } from "@/lib/texts";
import { useSectionInView } from "@/lib/hooks";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsapConfig";

const About = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const hasLoaded = useRef(false); // Prevent re-initialization

  useGSAP(() => {
    if (typeof window !== "undefined") {
      if (aboutMeRef.current && imageRef.current) {
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
            },
            ease: "easeIn",
          },
        );

        ScrollTrigger.create({
          trigger: aboutMeRef.current,
          start: "top center",
          end: "start+=100px center",
          scrub: false,
          onEnter: () => {
            aboutMeRef.current?.classList.add("bg-black", "dark:bg-white");
          },
          onLeaveBack: () => {
            aboutMeRef.current?.classList.remove("bg-black", "dark:bg-white");
          },
        });
      }

      // Lazy Load hover-effect images when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasLoaded.current) {
            hasLoaded.current = true; // Prevent multiple initializations
            new hoverEffect({
              parent: imageContainer.current,
              intensity: 0.2,
              image1: "./img/portrait.jpg",
              image2: "./img/portrait2.jpg",
              displacementImage: "./img/distortion.png",
              imagesRatio: 5 / 4,
            });
            observer.disconnect(); // Stop observing after loading
          }
        },
        { rootMargin: "200px" }, // Load just before entering the viewport
      );

      if (imageContainer.current) {
        observer.observe(imageContainer.current);
      }

      return () => observer.disconnect(); // Cleanup observer
    }
  }, []);

  const { ref } = useSectionInView("About");

  return (
    <section id="about" ref={ref}>
      <div className="overflow-hidden">
        <MarqueeText fontMobileBigger text="About" />
      </div>
      <div className="flex-col-center">
        <div
          ref={aboutMeRef}
          className="flex-col-center duration-400 relative min-h-[130svh] w-full rounded-[3rem] transition-colors ease-linear"
        >
          <div className="absolute left-8 top-8 text-white ~text-6xl/8xl dark:text-black">
            <FiArrowDownRight />
          </div>
          <div className="full-size grid grid-cols-1 place-items-center gap-16 !px-6 pb-24 pt-32 lg:grid-cols-2 lg:gap-4 lg:py-32">
            <div className="relative my-32 h-full lg:my-0">
              <div ref={imageRef} className="sticky top-32 lg:top-12">
                <div
                  id="imgContainer"
                  ref={imageContainer}
                  className="aspect-[4/5] h-auto w-[75vw] !rounded-xl object-cover shadow-md sm:w-[45vw] sm:object-contain md:w-[38vw] lg:w-[29vw] xl:w-[25vw] xl:object-cover 2xl:w-[23vw] 3xl:w-[21vw]"
                ></div>
              </div>
            </div>

            <div className="f-col w-full gap-6">
              <TextGradient
                text="Student, Developer, Adventurer"
                className="mb-8 mt-8 font-semibold uppercase leading-none text-white ~text-[3rem]/[7.25rem] dark:text-black max-xs:text-4xl md:mt-0 lg:mb-20 lg:text-[4.5rem] xl:text-[5rem] xl:tracking-wide 2xl:max-w-[65%] 2xl:~text-[4rem]/[7.25rem]"
                animationStart="top center"
                animationEnd="+=300"
                spaceLine={false}
              />
              <MaskText
                className="font-semibold tracking-wide text-white ~text-2xl/4xl dark:text-black sm:px-0"
                text={["Mathias Ebner"]}
                headline
              />
              <div className="flex w-full flex-col gap-4 self-center sm:max-w-[90%] sm:px-0 md:max-w-[88%] lg:max-w-[83%] xl:max-w-[77%] 2xl:max-w-[75%] 3xl:max-w-[67%]">
                <MaskText
                  className="textParagraph"
                  text={[aboutMeTexts.firstParagraph]}
                />
                <MaskText
                  className="textParagraph"
                  text={[aboutMeTexts.secondParagraph]}
                />
                <MaskText
                  className="textParagraph"
                  text={[aboutMeTexts.thirdParagraph]}
                />
                <MaskText
                  className="textParagraph"
                  text={[aboutMeTexts.fourthParagraph]}
                />
                <MaskText
                  className="textParagraph"
                  text={[aboutMeTexts.fifthparagraph]}
                />
              </div>
            </div>
            <div className="absolute-center bottom-[-5px] h-[12px] w-[20%]">
              <div className="h-full w-full rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
