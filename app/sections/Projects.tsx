"use client";

import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import MarqueeText from "../components/MarqueeText";
import SliderProject from "../components/SliderProject";
import { projects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsContainer = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    const container = projectsContainer.current;
    if (!container) return;

    const panels = container.querySelectorAll(
      ".panel",
    ) as NodeListOf<HTMLElement>;
    panelsRef.current = panels;

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1), // Moves all panels to the left
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + container.scrollWidth, // Scrolls horizontally based on width
      },
    });
  }, []);

  return (
    <>
      <MarqueeText text="Selected work" />
      <div
        ref={projectsContainer}
        className="flex h-screen w-[200vw] overflow-x-hidden"
      >
        {projects.map((project, i) => (
          <SliderProject
            key={project.name}
            className={i % 2 ? "bg-black dark:bg-white" : ""}
            name={project.name}
            detailsPageLink={project.detailsPageLink}
            subheading={project.subheading}
            descriptionShort={project.descriptionShort}
            imgPreview={project.imgPreview}
            currentCounter={i}
            projectsLength={projects.length}
          />
        ))}
        {/* <SliderProject /> */}
        {/* <SliderProject /> */}
        {/* <div className="panel">THREE</div> */}
        {/* <div className="panel bg-black dark:bg-white">TWO</div>
        <SliderProject /> */}
      </div>
    </>
  );
};

export default Projects;
