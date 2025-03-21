"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import MaskText from "./MaskText";

type ProjectImageItemProps = {
  title: string;
  src: string;
  alt: string;
  objectCover?: boolean;

  shadow: boolean;
};

const ProjectImageFull = ({
  title,
  src,
  alt,
  objectCover,
  shadow,
}: ProjectImageItemProps) => {
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
        className={`full-size relative aspect-[17/9] overflow-hidden rounded-sm ${shadow && "shadow-lg"} `}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={objectCover ? "object-cover" : "object-contain"}
          quality={80}
          sizes="95vw"
        />
      </motion.div>
    </div>
  );
};

export default ProjectImageFull;
