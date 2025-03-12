"use client";

import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Footer from "../components/Footer";
import HeroText from "../components/HeroText";
import FixedBackground from "../components/FixedBackground";
import MarqueeText from "../components/MarqueeText";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { loadParallaxPoster } from "@/lib/loadImages";
import { ParallaxScrollPoster } from "../components/ui/ParallaxScrollPoster";
import PageUtilities from "../components/PageUtilities";
import { subHeadingTexts } from "@/lib/texts";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const parallaxPoster = loadParallaxPoster();
  const svgRef = useRef<SVGSVGElement>(null);
  ScrollTrigger.normalizeScroll(true);
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
          start: `top ${isDesktop ? "top-=400px" : "top-=200px"}`, // start when the top of the trigger element hits the top of the viewport
          end: "bottom top", // end when the top of the trigger element hits the top of the viewport
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
      <PageUtilities />

      <section className="container-flex-center">
        <HeroText heading="Posters" subheading={subHeadingTexts.posters} />
      </section>

      <section className="h-svh">
        <svg
          ref={svgRef}
          className="posterSvg"
          width="504"
          height="716"
          viewBox="0 0 504 716"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 715V1H503V715H1Z" stroke="black" />
          <path
            d="M73 126V28C73 28 43.6517 29.9716 29.4774 52.1277M73 126C73 126 19.9033 122.426 22.0642 76.8511C22.5489 66.6287 25.3788 58.5343 29.4774 52.1277M73 126L29.4774 52.1277"
            stroke="black"
          />
          <path
            d="M40.5 373.501L126.75 289.943M309 311.014L233.5 186.524L164.25 253.613M367 491.694L349.645 462.63M46 262.09L72 236.901M349.645 462.63L424.237 390.939M349.645 462.63L337.496 442.285M424.237 390.939L486 491.694H199L340.5 254.34L400.185 351.703M424.237 390.939L413.547 373.501M337.496 442.285L413.547 373.501M337.496 442.285L325.637 422.425M413.547 373.501L400.185 351.703M325.637 422.425L162.5 149.226L109.5 200.572M325.637 422.425L400.185 351.703M29 565.322L58 537.227L87 565.322L116 537.227L145 565.322L174 537.227L199 561.447L224 537.227L249 561.447L274 537.227L299 561.447L324 537.227L349 561.447L374 537.227L399 561.447L424 537.227L449 561.447M72 236.901L126.75 289.943M72 236.901L90.25 219.221M126.75 289.943L145 272.262M145 272.262L90.25 219.221M145 272.262L164.25 253.613M90.25 219.221L109.5 200.572M109.5 200.572L164.25 253.613"
            stroke="black"
          />
          <path
            d="M29 593.901L56.5 567.259L84 593.901L111.5 567.259L139 593.901L166.5 567.259L194 593.901L221.5 567.259L249 593.901L276.5 567.259L304 593.901L331.5 567.259L359 593.901L386.5 567.259L414 593.901L441.5 567.259L469 593.901"
            stroke="black"
          />
          <path
            d="M318 27.1572L463 167.632M350.5 27.1572L463 136.146M385.5 27.1572L463 102.239M420 27.1572L463 68.8153M447.5 27.1572L463 42.1735M39.4998 611.339H463L39.4998 638.95H463L39.4998 666.56H463L39.4998 693.202H463"
            stroke="black"
          />
          <path
            d="M115.5 400.143C115.5 412.693 104.994 422.894 92 422.894C79.0062 422.894 68.5 412.693 68.5 400.143C68.5 387.592 79.0062 377.392 92 377.392C104.994 377.392 115.5 387.592 115.5 400.143Z"
            stroke="black"
          />
          <path
            d="M166.5 438.895C166.5 463.751 145.696 483.928 120 483.928C94.3037 483.928 73.5 463.751 73.5 438.895C73.5 414.038 94.3037 393.861 120 393.861C145.696 393.861 166.5 414.038 166.5 438.895Z"
            stroke="black"
          />
          <path
            d="M291.5 656.872V501.381H397.5V656.872H291.5Z"
            stroke="black"
          />
        </svg>
      </section>

      <section className="container-flex-center" id="posters">
        <MarqueeText text="selected work" />
        <ParallaxScrollPoster images={parallaxPoster} />
      </section>
      <Footer />
    </main>
  );
}
