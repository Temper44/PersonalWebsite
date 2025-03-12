"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GridImage = ({
  className,
  src,
  alt,
  sizes,
}: {
  className?: string;
  src: string;
  alt: string;
  sizes: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -100px 0px",
    once: true,
  });

  return (
    <motion.div
      ref={ref}
      className={`${className} relative w-full shadow-md`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        quality={100}
        className="object-cover"
        sizes={sizes}
      />
    </motion.div>
  );
};

export default GridImage;
