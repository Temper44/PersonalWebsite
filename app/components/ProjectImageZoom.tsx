"use client";

import React from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsapConfig";
import { useBetterMediaQuery } from "@/lib/hooks";

const ProjectImageZoom = ({
  src,
  alt,
  colorsGradient,
}: {
  src: string;
  alt: string;
  colorsGradient: string[];
}) => {
  const isSmall = useBetterMediaQuery("(max-width: 768px)");

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".imageContainer",
        start: "center center",
        end: isSmall ? "+=250 center" : "+=800 center",
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100svh",
      borderRadius: 0,
      background: `linear-gradient(to bottom right, ${colorsGradient[0]}, ${colorsGradient[1]})`, //bottom right
    });
  });

  return (
    <div className="imageContainer h-svh w-screen">
      <div
        className={`mask-clip-path absolute-center top-0 z-20 h-[40vh] w-[60vw] origin-center overflow-hidden rounded-3xl object-cover md:h-[60vh] md:w-[30vw]`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          quality={80}
          sizes="100vw"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProjectImageZoom;
