"use client";

import React from "react";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { gsap, useGSAP } from "@/lib/gsapConfig";

const ProjectImageZoom = ({ src, alt }: { src: string; alt: string }) => {
  const isSmall = useMediaQuery({ maxWidth: 640 });

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageContainer",
        start: "center center",
        end: isSmall ? "+=250 center" : "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        // markers: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100svh",
      borderRadius: 0,
      // objectFit: "cover",
    });
  });

  return (
    <div className="imageContainer h-svh w-screen">
      <div className="mask-clip-path absolute-center top-0 z-20 h-[40vh] w-[60vw] origin-center overflow-hidden rounded-3xl object-cover md:h-[60vh] md:w-[30vw]">
        <Image
          src={src}
          alt={alt}
          fill
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectImageZoom;
