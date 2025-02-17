"use client";

import React, { useEffect, useRef } from "react";
import MobileMenu from "../components/MobileMenu";
import CustomCursor from "../components/CustomCursor";
import { useMediaQuery } from "react-responsive";
import { ParallaxScroll } from "../components/ui/ParallaxScroll";
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

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const gridGalleryRef = useRef(null);

  const landscapeImages = loadSliderImages();
  const parallaxImages = loadParallaxImages();

  const words = `No matter where I am, I’m always looking for that perfect moment, whether in nature or the city. At least I try to..`;

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");

    if (paths) {
      paths.forEach((path) => {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        path.style.strokeDashoffset = pathLength.toString();
        // path.style.opacity = "0"; // Start paths invisible
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: `top ${isDesktop ? "top" : "top+=100"}`, // start when the top of the trigger element hits the top of the viewport
          end: "bottom top", // end when the top of the trigger element hits the top of the viewport
          scrub: 2,
          // markers: true,
        },
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        ease: "power2.out",
      }).to(paths, {
        strokeDashoffset: (i, target) => target.getTotalLength(),
        ease: "power2.in",
      });
    }
  }, []);

  return (
    <main className="max-w-screen relative mx-auto flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden">
      <FixedBackground />

      <ScrollProgressBar />
      <MobileMenu isFullPage={true} />
      {isDesktop && <CustomCursor />}
      <ScrollToTopButton />

      <div className="container flex min-h-screen flex-col items-center justify-center p-6">
        <HeroText heading="Photos" subheading={words} anchor="images" />
      </div>

      {/* <svg
        ref={svgRef}
        className="heroSvg"
        width="571"
        height="401"
        viewBox="0 0 571 401"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 99V400.5H570V164.5H447.5L429.5 110.5M570 138.5V99H550.5M30.5 99H56M263 99V52H392.5M56 99V88.5H47.5V78H56V67.5H61M56 99H90M90 99V88.5H99.5V78H90V67.5H87M90 99H146M146 99V85.5H133.5V55.5H216M146 99H213.5M213.5 99H247V52L298 1H384.5L435.5 52V99H477M213.5 99V85.5H225V55.5H216M216 55.5V78H205.5V58.5H195V78H185V58.5H174V78H164.5V58.5H153.5V78H142.5V58.5M61 67.5V85.5H68V67.5M61 67.5H68M68 67.5H71.5M71.5 67.5V85.5H77.5V67.5M71.5 67.5H77.5M77.5 67.5H80.5M80.5 67.5V85.5H87V67.5M80.5 67.5H87M561 386.5H268H133.5M550.5 99V85.5H540V64.5H532.5M550.5 99H477M477 99V85.5H490V64.5H497.5M497.5 64.5V82H507.5V64.5M497.5 64.5H507.5M507.5 64.5H515.5M515.5 64.5V82H525V64.5M515.5 64.5H525M525 64.5H532.5M532.5 64.5V82M392.5 52H414V110.5H247L225 164.5H133.5M392.5 52V105H370.5V59H348V105H325V59H303.5V105H280V59M14.5 110.5H237M119.75 164.5H14.5V386.5H119.75M119.75 164.5V386.5M119.75 164.5H133.5M119.75 386.5H133.5M133.5 386.5V164.5M527.5 125.5C533.575 125.5 538.5 130.425 538.5 136.5C538.5 142.575 533.575 147.5 527.5 147.5C521.425 147.5 516.5 142.575 516.5 136.5C516.5 130.425 521.425 125.5 527.5 125.5ZM64.5 129C58.1487 129 53 134.149 53 140.5C53 146.851 58.1487 152 64.5 152C70.8513 152 76 146.851 76 140.5C76 134.149 70.8513 129 64.5 129ZM201.5 263.5C201.707 337.369 262.132 396.914 336 396.5C409.453 396.088 468.793 336.954 469 263.5C469.208 189.632 409.118 129.75 335.25 129.75C261.382 129.75 201.293 189.632 201.5 263.5ZM336 351C382.103 352.076 419.5 313.616 419.5 267.5C419.5 221.384 382.102 182.869 336 184C292.107 185.077 258.601 219.644 256.5 263.5C254.291 309.616 289.844 349.923 336 351ZM336 248.5C346.493 248.5 355 257.007 355 267.5C355 277.993 346.493 286.5 336 286.5C325.507 286.5 317 277.993 317 267.5C317 257.007 325.507 248.5 336 248.5ZM335.25 147.5C271.186 147.912 219.456 199.435 219.25 263.5C219.042 327.979 271.521 380.25 336 380.25C400.479 380.25 452.956 327.979 452.75 263.5C452.544 199.02 399.729 147.086 335.25 147.5ZM490 359.5C485.858 359.5 482.5 362.858 482.5 367C482.5 371.142 485.858 374.5 490 374.5C494.142 374.5 497.5 371.142 497.5 367C497.5 362.858 494.142 359.5 490 359.5Z"
          stroke="black"
        />
      </svg> */}

      <svg
        ref={svgRef}
        className="heroSvg"
        width="571"
        height="407"
        viewBox="0 0 571 407"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 105V406.5H570V170.5H447.5L429.5 116.5M570 144.5V105H556M30.5 105H53M263 105V58H280M56 105V94.5H47.5V84H56V73.5H61M56 105H90M56 105H53M90 105V94.5H99.5V84H90V73.5H87M90 105H94M146 105V91.5H133.5V61.5H216M146 105H213.5M146 105H139M213.5 105V91.5H225V61.5H216M213.5 105H220.5M216 61.5V84H205.5V64.5H195V84H185V64.5H174V84H164.5V64.5H153.5V84H142.5V64.5M61 73.5V91.5H68V73.5M61 73.5H68M68 73.5H71.5M71.5 73.5V91.5H77.5V73.5M71.5 73.5H77.5M77.5 73.5H80.5M80.5 73.5V91.5H87V73.5M80.5 73.5H87M550.5 105V91.5H540V70.5H534.5M550.5 105H477M550.5 105H556M477 105V91.5H490V70.5H497.5M477 105H471M497.5 70.5V88H507.5V70.5M497.5 70.5H507.5M507.5 70.5H515.5M515.5 70.5V88H525V70.5M515.5 70.5H525M525 70.5H532.5M532.5 70.5V88H534.5V70.5M532.5 70.5H534.5M392.5 58H414V116.5H247L225 170.5H133.5M392.5 58V111H370.5V65H348V111H325V65H303.5V111H280V65V58M392.5 58H280M14.5 116.5H237M119.75 170.5H14.5V392.5H119.75M119.75 170.5V392.5M119.75 170.5H133.5M119.75 392.5H133.5M133.5 392.5H268H561V344M133.5 392.5V344M133.5 170.5V344M561 182V344M133.5 344H219.25M465.5 344H561M284.5 20.5L298 7H384.5L398 20.5M284.5 20.5H398M284.5 20.5L278 27M398 20.5L404.5 27M139 105V97H127V54.5H233V97H220.5V105M139 105H94M220.5 105H240.5M53 105V98H44V81H53V69H94V81H103V98H94V105M471 105V88H484.5V65H545.5V88H556V105M471 105H442M240.5 105H247V58L278 27M240.5 105V58L298 0.5H384.5L442 58V105M442 105H435.5V58L404.5 27M278 27H404.5M527.5 131.5C533.575 131.5 538.5 136.425 538.5 142.5C538.5 148.575 533.575 153.5 527.5 153.5C521.425 153.5 516.5 148.575 516.5 142.5C516.5 136.425 521.425 131.5 527.5 131.5ZM64.5 135C58.1487 135 53 140.149 53 146.5C53 152.851 58.1487 158 64.5 158C70.8513 158 76 152.851 76 146.5C76 140.149 70.8513 135 64.5 135ZM201.5 269.5C201.707 343.369 262.132 402.914 336 402.5C409.453 402.088 468.793 342.954 469 269.5C469.208 195.632 409.118 135.75 335.25 135.75C261.382 135.75 201.293 195.632 201.5 269.5ZM336 357C382.103 358.076 419.5 319.616 419.5 273.5C419.5 227.384 382.102 188.869 336 190C292.107 191.077 258.601 225.644 256.5 269.5C254.291 315.616 289.844 355.923 336 357ZM336 254.5C346.493 254.5 355 263.007 355 273.5C355 283.993 346.493 292.5 336 292.5C325.507 292.5 317 283.993 317 273.5C317 263.007 325.507 254.5 336 254.5ZM335.25 153.5C271.186 153.912 219.456 205.435 219.25 269.5C219.042 333.979 271.521 386.25 336 386.25C400.479 386.25 452.956 333.979 452.75 269.5C452.544 205.02 399.729 153.086 335.25 153.5ZM490 365.5C485.858 365.5 482.5 368.858 482.5 373C482.5 377.142 485.858 380.5 490 380.5C494.142 380.5 497.5 377.142 497.5 373C497.5 368.858 494.142 365.5 490 365.5Z"
          stroke="black"
        />
      </svg>

      <div className="container flex flex-col items-center" id="images">
        <MarqueeText text="landscape shots" />
        <div className="relative h-full w-screen overflow-hidden pb-20">
          <Carousel slides={landscapeImages} />
        </div>
        <MarqueeText text="Selected Work" />

        <div
          ref={gridGalleryRef}
          className="container flex flex-col items-center p-6"
        >
          <GridGallery />
        </div>
        <MarqueeText text="Street collection" />
        <ParallaxScroll images={parallaxImages} />
      </div>
      <Footer />
    </main>
  );
}
