import React, { useEffect, useRef } from "react";
import MarqueeText from "../components/MarqueeText";
import { FiArrowDownRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskText from "../components/MaskText";
import TextGradient from "../components/TextGradient";
import hoverEffect from "hover-effect";
import { aboutMeTexts } from "@/lib/texts";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainer = useRef<HTMLDivElement>(null);
  const hasLoaded = useRef(false); // Prevent re-initialization

  useEffect(() => {
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
          start: "top-=100px center",
          end: "start+=100px center",
          scrub: true,
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

  return (
    <section className="flex-col-center">
      <MarqueeText text="About me" />
      <div
        ref={aboutMeRef}
        className="flex-col-center relative min-h-[130dvh] w-full rounded-[3rem] transition-colors duration-1000"
      >
        <div className="absolute left-8 top-8 text-7xl text-white dark:text-black 2xl:text-8xl">
          <FiArrowDownRight />
        </div>
        <div className="full-size grid grid-cols-1 place-items-center gap-16 px-6 pb-24 pt-32 lg:grid-cols-2 lg:gap-4 lg:py-32">
          <div className="relative my-32 h-full lg:my-0">
            <div ref={imageRef} className="sticky top-32 lg:top-12">
              {/* <img
                src="./img/portrait4-5.jpg"
                alt="My Picture"
                className="w-[90vw] rounded-xl shadow-md md:w-[25vw]"
              /> */}
              <div
                id="imgContainer"
                ref={imageContainer}
                className="aspect-[4/5] h-auto w-[80vw] !rounded-xl object-cover shadow-md sm:w-[65vw] sm:object-contain md:w-[55vw] lg:w-[35vw] xl:w-[28vw] xl:object-cover"
              ></div>
            </div>
          </div>

          <div className="f-col gap-6">
            <TextGradient
              text="Developer, Designer, Creator"
              className="mb-6 mt-6 uppercase text-white ~text-6xl/9xl dark:text-black max-xs:text-5xl md:mt-0 lg:mb-20 2xl:max-w-[65%]"
              opacityClassName="opacity-20"
              animationStart="top center"
              animationEnd="+=200"
              spaceLine={false}
            />
            <MaskText
              className="font-semibold tracking-wide text-white ~text-2xl/5xl dark:text-black"
              text={["Mathias Ebner"]}
              headline
            />
            <div className="flex w-full flex-col gap-6 self-center lg:max-w-[70%] xl:max-w-[65%]">
              <MaskText
                className="textParagraph"
                text={[
                  aboutMeTexts.firstParagraph,
                  aboutMeTexts.secondParagraph,
                ]}
              />
              <MaskText
                className="textParagraph"
                text={[
                  aboutMeTexts.thirdParagraph,
                  aboutMeTexts.fourthParagraph,
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
