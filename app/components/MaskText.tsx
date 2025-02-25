"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MaskText({ text }: { text: string[] }) {
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

  return (
    <div ref={ref}>
      {text.map((phrase, index) => (
        <div
          key={index}
          className="overflow-hidden text-4xl text-white dark:text-black"
        >
          <motion.p
            custom={index}
            variants={animation}
            initial="initial"
            animate={isInView ? "enter" : ""}
            className="leading-tight"
          >
            {phrase}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
