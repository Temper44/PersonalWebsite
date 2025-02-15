"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useId } from "react";
import { useMediaQuery } from "react-responsive";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  // Generate unique IDs
  const uniqueId = useId();
  const gradientId = `textGradient-${uniqueId}`;
  const maskId = `revealMask-${uniqueId}`;
  const maskDefId = `textMask-${uniqueId}`;

  const isDesktop = useMediaQuery({ minWidth: 1280 });
  // const isBigDesktop = useMediaQuery({ minWidth: 1600 });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={svgRef}
      width="100vw"
      height={isDesktop ? `14vh` : `10vh`}
      viewBox={isDesktop ? `0 0 400 120` : `0 0 400 100`}
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        {/* Enhanced Linear Gradient */}
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="50%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={"#FFDD00"} /> {/* Brighter Yellow */}
              <stop offset="25%" stopColor={"#FF5733"} /> {/* Vibrant Orange */}
              <stop offset="50%" stopColor={"#1E90FF"} /> {/* Bold Blue */}
              <stop offset="75%" stopColor={"#00FFFF"} /> {/* Cyan */}
              <stop offset="100%" stopColor={"#8A2BE2"} /> {/* Deep Purple */}
            </>
          )}
        </linearGradient>

        {/* Larger Radial Gradient for Mask */}
        <motion.radialGradient
          id={maskId}
          gradientUnits="userSpaceOnUse"
          r="70%" // Increased size
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" /> {/* Gradual fade */}
        </motion.radialGradient>

        {/* Mask Definition */}
        <mask id={maskDefId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${maskId})`}
          />
        </mask>
      </defs>

      {/* Fallback Text */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        className="nav-text stroke-black dark:stroke-neutral-200"
        style={{
          opacity: hovered ? 0.3 : 0, // Fade out on hover
        }}
      >
        {text}
      </text>

      {/* Animated Stroke Effect */}
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        className="nav-text stroke-black dark:stroke-neutral-200"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 3.5,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>

      {/* Enhanced Hover Color Reveal */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke={`url(#${gradientId})`} // Use unique gradient ID
        strokeWidth="2" // Slightly thicker for stronger visibility
        mask={`url(#${maskDefId})`} // Use unique mask ID
        className="nav-text"
        style={{
          opacity: hovered ? 1 : 0, // Show only on hover
          filter: "brightness(2)", // Slight brightness boost
        }}
      >
        {text}
      </text>
    </svg>
  );
};
