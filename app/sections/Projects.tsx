"use client";

import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import MarqueeText from "../components/MarqueeText";
import SliderProject from "../components/SliderProject";
import { projects } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

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
      ease: "none", // A bit smoother easing
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1, // ⬆️ Increase to make scrolling require more effort
        snap: {
          snapTo: 1 / panels.length - 1, // Ensures each panel is a step
          duration: 0.1, // ⬆️ Faster snap animation (stronger effect)
          delay: 0.1, // ⬇️ Lower delay for quicker snapping
          ease: "power2.inOut", // ⬆️ Snappier easing
          directional: false,
        },
        end: () => "+=" + container.offsetWidth,
      },
    });
  }, []);

  const { ref } = useSectionInView("Projects");

  return (
    <section id="projects" ref={ref} className="relative !overflow-hidden">
      <MarqueeText fontMobileBigger text="Projects" />
      <div
        ref={projectsContainer}
        className="flex h-screen w-[300vw] !overflow-hidden"
      >
        {projects.map((project, i) => (
          <SliderProject
            key={project.name}
            className={i % 2 ? "panel bg-black dark:bg-white" : ""}
            name={project.name}
            detailsPageLink={project.detailsPageLink}
            subheading={project.subheading}
            descriptionShort={project.descriptionShort}
            imgPreview={project.imgPreview}
            currentCounter={i}
            projectsLength={projects.length}
            reverseColor={i % 2 ? true : false}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
