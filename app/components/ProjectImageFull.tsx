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
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px", once: true });

  return (
    <div className="full-size f-col gap-4" ref={ref}>
      <MaskText
        text={[title]}
        className="font-semibold tracking-wide ~text-lg/2xl"
        headline
      />
      <motion.div
        className="full-size relative aspect-[16/9] shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className="object-cover"
          quality={80}
        />
      </motion.div>
    </div>
  );
};

export default ProjectImageFull;
