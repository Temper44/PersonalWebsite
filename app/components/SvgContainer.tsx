"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapConfig";

const SvgContainer = ({
  children,
  svgClassName,
  width,
  height,
  viewBox,
}: {
  children: React.ReactNode;
  svgClassName: string;
  width: string;
  height: string;
  viewBox: string;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    const paths = svgRef.current?.querySelectorAll("path");

    if (paths) {
      paths.forEach((path) => {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = pathLength.toString();
        path.style.strokeDashoffset = pathLength.toString();
        path.style.opacity = "0";
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: `top top+=200px`, // start when the top of the trigger element hits the top of the viewport
          end: "bottom top", // end when the top of the trigger element hits the top of the viewport
          scrub: 1,
          pin: true,
          //   markers: true,
        },
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        opacity: 1,
        ease: "power2.out",
      }).to(paths, {
        strokeDashoffset: (i, target) => target.getTotalLength(),
        ease: "power2.in",
        opacity: 0,
      });
    }
  }, []);
  return (
    <section className="svgContainer">
      <svg
        ref={svgRef}
        className={svgClassName}
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </section>
  );
};

export default SvgContainer;
