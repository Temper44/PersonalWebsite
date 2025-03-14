"use client";

import React, { useRef } from "react";
import MarqueeText from "../components/MarqueeText";
import SliderProject from "../components/SliderProject";
import { projects } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { gsap, useGSAP } from "@/lib/gsapConfig";

const Projects = () => {
  const projectsContainer = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useGSAP(() => {
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
          snapTo: 1 / (panels.length - 1), // Ensures each panel is a step
          duration: { min: 0.3, max: 0.7 }, // ⬆️ Faster snap animation (stronger effect)
          ease: "power2.inOut", // ⬆️ Snappier easing
        },
        end: () => "+=" + (container ? container.offsetWidth : 0),
      },
    });
  }, []);

  const { ref } = useSectionInView("Projects");

  return (
    <section id="projects" ref={ref} className="relative !overflow-hidden">
      <MarqueeText fontMobileBigger text="Projects" />
      <div
        ref={projectsContainer}
        className="flex h-dvh w-[300vw] !overflow-hidden"
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
