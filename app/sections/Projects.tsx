"use client";

import React, { useRef } from "react";
import MarqueeText from "../components/MarqueeText";
import SliderProject from "../components/SliderProject";
import { projects } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { gsap, useGSAP } from "@/lib/gsapConfig";
import MaskText from "../components/MaskText";
import { projectsText } from "@/lib/texts";

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
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1), // Ensures each panel is a step
          duration: { min: 0.3, max: 0.7 }, // ⬆️ Faster snap animation
          ease: "power2.inOut",
        },
        end: () => "+=" + (container ? container.offsetWidth : 0),
      },
    });
  }, []);

  const { ref } = useSectionInView("Projects");

  return (
    <section id="projects" ref={ref} className="relative !overflow-hidden">
      <MarqueeText fontMobileBigger text="Projects" />
      <MaskText
        containerClassName=" textShort ~mb-[7rem]/[13rem]"
        text={[projectsText]}
      />
      <div
        ref={projectsContainer}
        className="flex h-svh w-[300vw] !overflow-hidden"
      >
        {projects.map((project, i) => (
          <SliderProject
            key={project.name}
            className={
              i % 2
                ? ""
                : "bg-gradient-to-br from-zinc-950 to-zinc-900 dark:from-zinc-100 dark:to-zinc-50"
            }
            name={project.name}
            detailsPageLink={project.detailsPageLink}
            subheading={project.subheading}
            descriptionShort={project.descriptionShort}
            imgPreview={project.imgPreview}
            currentCounter={i}
            projectsLength={projects.length}
            reverseColor={i % 2 ? false : true}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
