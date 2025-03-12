import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const TestSlider = () => {
  useEffect(() => {
    // This runs once after the component is mounted
    const sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true, // pins the container while scrolling
        scrub: 1, // smooth scroll effect
        snap: 1 / (sections.length - 1),
        end: () => {
          const container = document.querySelector(".container");
          return (
            "+=" + (container ? (container as HTMLElement).offsetWidth : 0)
          );
        }, // sets the end point for scroll animation
      },
    });

    return () => {
      // Clean up ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="container">
      <div className="panel">
        <div>
          SCROLL DOWN
          <div className="scroll-down">
            <div className="arrow"></div>
          </div>
        </div>
      </div>

      <section className="panel bg-red-500">ONE</section>
      <section className="panel bg-orange-500">TWO</section>
      <section className="panel bg-purple-500">THREE</section>
    </div>
  );
};

export default TestSlider;
