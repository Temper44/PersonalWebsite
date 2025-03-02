"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const ProjectImageZoom = ({ src, alt }: { src: string; alt: string }) => {
  const isSmall = useMediaQuery({ maxWidth: 640 });

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageContainer",
        start: "center center",
        end: isSmall ? "+=250 center" : "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div className="imageContainer h-dvh w-screen">
      <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[40vh] w-[60vw] origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:h-[60vh] md:w-[30vw]">
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default ProjectImageZoom;
