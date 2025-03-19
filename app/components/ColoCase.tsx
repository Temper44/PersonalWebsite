"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ColorCaseProps {
  colors: string[];
}

export default function ColorCase({ colors }: ColorCaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  return (
    <div ref={ref} className="flex gap-6">
      {colors.map((color, index) => (
        <motion.div
          key={color}
          className="flex-col-center gap-3"
          initial={{ opacity: 0, y: 60 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <span
            className="size-16 rounded-full md:size-20"
            style={{ backgroundColor: color }}
          />
          <span className="text-xs font-extralight text-zinc-900 dark:text-zinc-100">
            {color}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
