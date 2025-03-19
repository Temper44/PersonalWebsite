"use client";

import { useRef } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { loadMobileParallaxImages } from "@/lib/loadImages";

const images = loadMobileParallaxImages();

export default function ParallaxScrollGallery() {
  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <>
      <div className="h-[50vh] bg-gradient-to-r from-rose-500 to-purple-500 sm:h-[75vh]" />

      <div
        ref={gallery}
        className="flex-center relative mx-auto h-[140vh] w-full max-w-9xl overflow-hidden p-6 ~gap-3/8 sm:h-[180vh] md:h-[190vh] lg:h-[200vh] xl:h-[210vh] 2xl:h-[230vh]"
      >
        <Column
          images={[images[0], images[1], images[2]]}
          y={y}
          className="top-[-5%]"
          // top-[-45%]
        />
        <Column
          images={[images[3], images[4], images[5]]}
          y={y2}
          className="top-[-15%]"
        />
        <Column
          images={[images[6], images[7], images[8]]}
          y={y3}
          className="top-[-14%] hidden md:flex"
        />
        <Column
          images={[images[9], images[10], images[11]]}
          y={y4}
          className="top-[-10%] hidden lg:flex"
        />
      </div>

      <div className="h-[50vh] rounded-b-3xl bg-gradient-to-r from-purple-500 to-rose-500 sm:h-[75vh]" />
    </>
  );
}

interface ColumnProps {
  images: string[];
  y: MotionValue<number>;
  className: string;
}

const Column = ({ images, y, className }: ColumnProps) => {
  return (
    <motion.div
      className={`relative flex h-full w-1/2 flex-col will-change-transform ~gap-3/7 md:w-1/3 lg:w-1/4 ${className}`}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative aspect-[9/19.5] w-full shadow-md">
          <Image
            src={src}
            className="rounded-sm object-cover"
            fill
            quality={80}
            alt={`Image ${i + 1}`}
            sizes="(min-width: 1028px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        </div>
      ))}
    </motion.div>
  );
};
