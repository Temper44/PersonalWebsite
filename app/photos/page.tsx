"use client";

import React, { useEffect, useRef } from "react";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import { useMediaQuery } from "react-responsive";
import { ParallaxScrollPhoto } from "../components/ui/ParallaxScrollPhoto";
import ScrollToTopButton from "../components/ScrollToTopButton";
import GridGallery from "../components/GridGallery";
import Footer from "../components/Footer";
import { loadParallaxImages, loadSliderImages } from "../../lib/loadImages";
import ScrollProgressBar from "../components/ScrollProgressBar";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import HeroText from "../components/HeroText";
import MarqueeText from "../components/MarqueeText";
import { Carousel } from "../components/ui/Carousel";
import FixedBackground from "../components/FixedBackground";
import { subHeadingTexts } from "@/lib/texts";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const gridGalleryRef = useRef(null);

  const landscapeImages = loadSliderImages();
  const parallaxImages = loadParallaxImages();

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");

    if (paths) {
      paths.forEach((path) => {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        path.style.strokeDashoffset = pathLength.toString();
        path.style.opacity = "0"; // Start paths invisible
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: `top ${isDesktop ? "top-=100px" : "top+=100"}`, // start when the top of the trigger element hits the top of the viewport
          end: `${isDesktop ? "bottom+=1300px" : "bottom+=1000px"} top`, // end when the top of the trigger element hits the top of the viewport
          scrub: isDesktop ? 2 : 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          // markers: true,
        },
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        ease: "power2.out",
      }).to(paths, {
        strokeDashoffset: (i, target) => target.getTotalLength(),
        ease: "power2.in",
        opacity: 0.5,
      });
    }
  }, []);

  return (
    <main className="max-screen-center">
      <FixedBackground />

      <ScrollProgressBar />
      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}
      <ScrollToTopButton />

      <section className="container-flex-center">
        <HeroText
          heading="Photos"
          subheading={subHeadingTexts.photos}
          anchor="images"
        />
      </section>

      <section className="h-screen">
        <svg
          ref={svgRef}
          className="photoSvg"
          width="570"
          height="407"
          viewBox="0 0 570 407"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_169_1676)">
            <path d="M0.5 105V406.5H569.5V170.5H447L429 116.5" />
            <path d="M569.5 144.5V105H555.5" stroke="black" />
            <path d="M30 105H52.5" stroke="black" />
            <path d="M262.5 105V58H279.5" stroke="black" />
            <path d="M55.5 105V94.5H47V84H55.5V73.5H60.5" stroke="black" />
            <path d="M55.5 105H89.5" stroke="black" />
            <path d="M55.5 105H52.5" stroke="black" />
            <path d="M89.5 105V94.5H99V84H89.5V73.5H86.5" stroke="black" />
            <path d="M89.5 105H93.5" stroke="black" />
            <path d="M145.5 105V91.5H133V61.5H215.5" stroke="black" />
            <path d="M145.5 105H213" stroke="black" />
            <path d="M145.5 105H138.5" stroke="black" />
            <path d="M213 105V91.5H224.5V61.5H215.5" stroke="black" />
            <path d="M213 105H220" stroke="black" />
            <path
              d="M215.5 61.5V84H205V64.5H194.5V84H184.5V64.5H173.5V84H164V64.5H153V84H142V64.5"
              stroke="black"
            />
            <path d="M60.5 73.5V91.5H67.5V73.5" stroke="black" />
            <path d="M60.5 73.5H67.5" stroke="black" />
            <path d="M67.5 73.5H71" stroke="black" />
            <path d="M71 73.5V91.5H77V73.5" stroke="black" />
            <path d="M71 73.5H77" stroke="black" />
            <path d="M77 73.5H80" stroke="black" />
            <path d="M80 73.5V91.5H86.5V73.5" stroke="black" />
            <path d="M80 73.5H86.5" stroke="black" />
            <path d="M550 105V91.5H539.5V70.5H534" stroke="black" />
            <path d="M550 105H476.5" stroke="black" />
            <path d="M550 105H555.5" stroke="black" />
            <path d="M476.5 105V91.5H489.5V70.5H497" stroke="black" />
            <path d="M476.5 105H470.5" stroke="black" />
            <path d="M497 70.5V88H507V70.5" stroke="black" />
            <path d="M497 70.5H507" stroke="black" />
            <path d="M507 70.5H515" stroke="black" />
            <path d="M515 70.5V88H524.5V70.5" stroke="black" />
            <path d="M515 70.5H524.5" stroke="black" />
            <path d="M524.5 70.5H532" stroke="black" />
            <path d="M532 70.5V88H534V70.5" stroke="black" />
            <path d="M532 70.5H534" stroke="black" />
            <path
              d="M392 58H413.5V116.5H246.5L224.5 170.5H133"
              stroke="black"
            />
            <path
              d="M392 58V111H370V65H347.5V111H324.5V65H303V111H279.5V65V58"
              stroke="black"
            />
            <path d="M392 58H279.5" stroke="black" />
            <path d="M14 116.5H236.5" stroke="black" />
            <path d="M119.25 170.5H14V392.5H119.25" stroke="black" />
            <path d="M119.25 170.5V392.5" stroke="black" />
            <path d="M119.25 170.5H133" stroke="black" />
            <path d="M119.25 392.5H133" stroke="black" />
            <path d="M133 392.5H267.5H560.5V344" stroke="black" />
            <path d="M133 392.5V344" stroke="black" />
            <path d="M133 170.5V344" stroke="black" />
            <path d="M560.5 182V344" stroke="black" />
            <path d="M133 344H218.75" stroke="black" />
            <path d="M465 344H560.5" stroke="black" />
            <path d="M284 20.5L297.5 7H384L397.5 20.5" stroke="black" />
            <path d="M284 20.5H397.5" stroke="black" />
            <path d="M284 20.5L277.5 27" stroke="black" />
            <path d="M397.5 20.5L404 27" stroke="black" />
            <path
              d="M138.5 105V97H126.5V54.5H232.5V97H220V105"
              stroke="black"
            />
            <path d="M138.5 105H93.5" stroke="black" />
            <path d="M220 105H240" stroke="black" />
            <path
              d="M52.5 105V98H43.5V81H52.5V69H93.5V81H102.5V98H93.5V105"
              stroke="black"
            />
            <path d="M470.5 105V88H484V65H545V88H555.5V105" stroke="black" />
            <path d="M470.5 105H441.5" stroke="black" />
            <path d="M240 105H246.5V58L277.5 27" stroke="black" />
            <path d="M240 105V58L297.5 0.5H384L441.5 58V105" stroke="black" />
            <path d="M441.5 105H435V58L404 27" stroke="black" />
            <path d="M277.5 27H404" stroke="black" />
            <path
              d="M527 153.5C533.075 153.5 538 148.575 538 142.5C538 136.425 533.075 131.5 527 131.5C520.925 131.5 516 136.425 516 142.5C516 148.575 520.925 153.5 527 153.5Z"
              stroke="black"
            />
            <path
              d="M64 158C70.3513 158 75.5 152.851 75.5 146.5C75.5 140.149 70.3513 135 64 135C57.6487 135 52.5 140.149 52.5 146.5C52.5 152.851 57.6487 158 64 158Z"
              stroke="black"
            />
            <path
              d="M201 269.5C201.207 343.369 261.632 402.914 335.5 402.5C408.953 402.088 468.293 342.954 468.5 269.5C468.708 195.632 408.618 135.75 334.75 135.75C260.882 135.75 200.793 195.632 201 269.5Z"
              stroke="black"
            />
            <path
              d="M335.5 357C381.603 358.076 419 319.616 419 273.5C419 227.384 381.602 188.869 335.5 190C291.607 191.077 258.101 225.644 256 269.5C253.791 315.616 289.344 355.923 335.5 357Z"
              stroke="black"
            />
            <path
              d="M335.5 292.5C345.993 292.5 354.5 283.993 354.5 273.5C354.5 263.007 345.993 254.5 335.5 254.5C325.007 254.5 316.5 263.007 316.5 273.5C316.5 283.993 325.007 292.5 335.5 292.5Z"
              stroke="black"
            />
            <path
              d="M334.75 153.5C270.686 153.912 218.956 205.435 218.75 269.5C218.542 333.979 271.021 386.25 335.5 386.25C399.979 386.25 452.456 333.979 452.25 269.5C452.044 205.02 399.229 153.086 334.75 153.5Z"
              stroke="black"
            />
            <path
              d="M489.5 380.5C493.642 380.5 497 377.142 497 373C497 368.858 493.642 365.5 489.5 365.5C485.358 365.5 482 368.858 482 373C482 377.142 485.358 380.5 489.5 380.5Z"
              stroke="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_169_1676">
              <rect width="570" height="407" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </section>

      <section className="container-flex-center" id="images">
        <MarqueeText text="landscape shots" />
        <div className="relative w-screen overflow-hidden pb-20">
          <Carousel slides={landscapeImages} />
        </div>
        <MarqueeText text="selected work" />

        <div ref={gridGalleryRef} className="container-flex-center">
          <GridGallery />
        </div>
        <MarqueeText text="street collection" />
        <ParallaxScrollPhoto images={parallaxImages} />
      </section>
      <Footer />
    </main>
  );
}
