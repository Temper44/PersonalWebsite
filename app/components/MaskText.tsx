"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCursor } from "./context/CursorContext";

export default function MaskText({
  text,
  className,
  headline = false,
  cursorHoverEffect = false,
}: {
  text: string[];
  className?: string;
  headline?: boolean;
  cursorHoverEffect?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  const animation = {
    initial: { y: "100%" }, // Start the text off-screen (downwards)
    enter: (i: number) => ({
      y: "0", // Move the text to its normal position
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1], // Custom easing
        delay: 0.08 * i, // Stagger the animations
      },
    }),
  };

  const { setIsCursorHovered } = useCursor();

  return (
    <div ref={ref}>
      {text.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          {headline ? (
            <motion.h3
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
              className={`${className} `}
              // will-change-transform
              onMouseEnter={() => cursorHoverEffect && setIsCursorHovered(true)}
              onMouseLeave={() =>
                cursorHoverEffect && setIsCursorHovered(false)
              }
            >
              {phrase}
            </motion.h3>
          ) : (
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
              className={`${className} `}
              // will-change-transform
            >
              {phrase}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
}
