"use client";

import React from "react";
import MaskText from "./MaskText";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ProjectImageFrame = ({
  name,
  src,
  alt,
}: {
  name: string;
  src: string;
  alt: string;
}) => {
  useGSAP(() => {
    gsap.set("#image-frame", {
      clipPath: "polygon(8% 0, 68% 0, 88% 86%, 1% 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#image-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#image-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div id="image-frame" className="relative-center h-dvh w-full max-w-9xl">
      <div className="full-size relative aspect-[16/9] shadow-md">
        <div className="absolute inset-0 z-10 bg-black opacity-60" />
        <Image
          src={src}
          alt={alt}
          fill
          quality={100}
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
      </div>
      <div className="absolute bottom-36 left-4 z-20 max-w-7xl md:bottom-20 md:left-12 2xl:bottom-32">
        <MaskText
          text={[name]}
          headline
          className={`textShadow font-semibold leading-tight tracking-wide text-zinc-100 ~text-[2.75rem]/[8.5rem] max-xs:text-4xl md:pb-2`}
        />
      </div>
    </div>
  );
};

export default ProjectImageFrame;
