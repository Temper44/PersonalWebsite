"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import MaskText from "./MaskText";

type ProjectImageItemProps = {
  title: string;
  src: string;
  alt: string;
};

const ProjectImageFull = ({ title, src, alt }: ProjectImageItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  return (
    <div className="flex h-full w-full flex-col gap-4" ref={ref}>
      <MaskText
        text={[title]}
        className="~text-lg/2xl font-semibold tracking-wide"
        headline
      />
      <motion.div
        className="relative aspect-[16/9] h-full w-full shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </motion.div>
    </div>
  );
};

export default ProjectImageFull;
