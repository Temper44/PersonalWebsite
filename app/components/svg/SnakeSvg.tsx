"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsapConfig";

const SnakeSvg = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useGSAP(() => {
    if (!svgRef.current) return;
    const path = svgRef.current.querySelector("path");
    if (!path) return;
    const pathLength = path.getTotalLength();

    // Set initial SVG path styles
    gsap.set(path, {
      strokeDasharray: pathLength,
      // strokeDashoffset: pathLength,
    });

    gsap.fromTo(
      path,
      {
        strokeDashoffset: pathLength,
      },
      {
        strokeDashoffset: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start: "top top",
          end: "bottom 10%",
          scrub: 8,
        },
      },
    );
  }, []);
  return (
    <div className="svg-container full-size absolute left-0 top-0 z-[-10] hidden items-center justify-center md:flex">
      <svg
        ref={svgRef}
        className="snakeSvg"
        width="1200"
        height="3963"
        viewBox="0 0 1200 3963"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1.00098C1 1.00098 839 60.001 830 222.001C821 384.001 -106.353 442.121 46.5 787.001C165.357 1055.18 766.895 707.667 766.5 1001C766.23 1200.89 511 1727.5 431.5 1388C352 1048.5 996.385 1602.84 962 1884.5C921.151 2219.11 153.5 1666 110.5 2026C67.5 2386 587.059 2158.76 602.5 2399.5C618.084 2642.46 128.5 2543 153.5 2832C178.5 3121 785.683 2866.06 793.5 3144C801.191 3417.48 215 3800 192.5 3504C170 3208 962.283 3437.46 891.5 3713.5C859.403 3838.68 673 3962 673 3962" />
      </svg>
    </div>
  );
};

export default SnakeSvg;
