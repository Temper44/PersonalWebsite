"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useCursor } from "./context/CursorContext";

export default function MaskText({
  text,
  className,
  containerClassName,
  headline = false,
  cursorHoverEffect = false,
  viewInMargin = {
    margin: "-100px",
    once: true,
  },
}: {
  text: string[];
  className?: string;
  containerClassName?: string;
  headline?: boolean;
  cursorHoverEffect?: boolean;
  viewInMargin?: object;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewInMargin);

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.08 * i,
      },
    }),
  };

  const { setIsCursorHovered } = useCursor();

  return (
    <div ref={ref} className={containerClassName}>
      {text.map((phrase, index) => (
        <div key={index} className="overflow-hidden">
          {headline ? (
            <motion.h3
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
              className={`${className} `}
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
            >
              {phrase}
            </motion.p>
          )}
        </div>
      ))}
    </div>
  );
}
