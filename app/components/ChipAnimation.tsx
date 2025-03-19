"use client";

import { motion, useInView } from "framer-motion";
import Chip from "@/app/components/Chip";
import { useRef } from "react";

type ChipAnimationProps = {
  technologies: string[];
};

export default function ChipAnimation({ technologies }: ChipAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  return (
    <div ref={ref} className="flex flex-wrap gap-3 sm:gap-4">
      {technologies.map((name, index) => (
        <motion.div
          key={name}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          <Chip
            text={name}
            className="leading-relaxed text-zinc-900 ~text-sm/base dark:text-zinc-100"
          />
        </motion.div>
      ))}
    </div>
  );
}
