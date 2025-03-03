import React, { useEffect, useRef } from "react";
import MarqueeText from "../components/MarqueeText";
import { FiArrowDownRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaskText from "../components/MaskText";
import TextGradient from "../components/TextGradient";
import hoverEffect from "hover-effect";

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
            aboutMeRef.current?.classList.add(
              "bg-zinc-900",
              "dark:bg-zinc-100",
            );
          },
          onLeaveBack: () => {
            aboutMeRef.current?.classList.remove(
              "bg-zinc-900",
              "dark:bg-zinc-100",
            );
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
    <section className="flex flex-col items-center">
      <MarqueeText text="About me" />
      <div
        ref={aboutMeRef}
        className="relative flex min-h-[130dvh] w-full flex-col justify-center rounded-[3rem] transition-colors duration-1000"
      >
        <div className="absolute left-8 top-8 text-7xl text-white dark:text-black 2xl:text-8xl">
          <FiArrowDownRight />
        </div>
        <div className="grid h-full w-full grid-cols-1 place-items-center gap-16 px-6 pb-24 pt-32 lg:grid-cols-2 lg:gap-4 lg:py-32">
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
                className="aspect-[4/5] h-auto w-[80vw] !rounded-xl object-cover shadow-md sm:w-[65vw] sm:object-contain md:w-[55vw] lg:w-[35vw] xl:w-[28vw] xl:object-cover 2xl:w-[32vw]"
              ></div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <TextGradient
              text="Developer, Designer, Creator"
              className="mb-6 mt-6 text-5xl uppercase text-white dark:text-black xs:text-6xl sm:text-7xl md:mt-0 md:text-8xl lg:mb-20 lg:text-7xl xl:text-8xl 2xl:text-9xl"
              opacityClassName="opacity-20"
              animationStart="top center"
              animationEnd="+=300"
              spaceLine={false}
            />
            <MaskText
              className="text-2xl font-semibold tracking-wide text-white dark:text-black md:text-3xl xl:text-4xl"
              text={["Mathias Ebner"]}
              headline
            />
            <div className="flex w-full flex-col gap-6 self-center lg:max-w-[70%] xl:max-w-[65%]">
              <MaskText
                className="text-base font-light tracking-wide text-white dark:text-black"
                text={[
                  "is an Experience Designer and Artist driven by a deep commitment to human-centric principles. Her work transcends mere aesthetics, creating engaging and meaningful digital experiences.",
                  "She’s exploring the future of technology through workshops, leveraging versatile media and blending scientific research approaches with a pragmatic hands-on mentality that makes innovative concepts graspable for anyone.",
                ]}
              />
              <MaskText
                className="text-base font-light tracking-wide text-white dark:text-black"
                text={[
                  "You can catch Melanie sharing her insights at events and workshops, spreading her creative mindset.",
                  "is an Experience Designer and Artist driven by a deep commitment to human-centric principles. Her work transcends mere aesthetics, creating engaging and meaningful digital experiences.",
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
