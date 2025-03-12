"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
// import Lenis from "lenis";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export default function ParallaxScrollGallery() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  // Dynamically update scroll values based on viewport height
  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2.3]);
  const y3 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, dimension.height * 1.25],
  );
  const y4 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3]);

  useEffect(() => {
    // Function to update dimensions on resize
    const updateDimensions = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <>
      <div className="h-[50vh] bg-gradient-to-r from-rose-500 to-purple-500 sm:h-[75vh]" />

      <div
        ref={gallery}
        className="flex-center relative mx-auto box-border h-[120vh] w-full max-w-9xl overflow-hidden p-6 ~gap-3/7 md:h-[170vh]"
      >
        <Column
          images={[images[0], images[1], images[2]]}
          y={y}
          className="top-[-80%]"
          // top-[-45%]
        />
        <Column
          images={[images[2], images[3], images[4]]}
          y={y2}
          className="top-[-95%]"
        />
        <Column
          images={[images[5], images[6], images[7]]}
          y={y3}
          className="top-[-45%] hidden md:flex"
        />
        <Column
          images={[images[8], images[9], images[10]]}
          y={y4}
          className="top-[-75%] hidden lg:flex"
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
  // const ref = useRef(null);
  // const isInView = useInView(ref, {
  //   margin: "0px 0px -100px 0px",
  //   once: true,
  // });
  return (
    <motion.div
      className={`lg:1/4 relative flex h-full w-1/2 flex-col will-change-transform ~gap-3/7 md:w-1/3 ${className}`}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={i} className="relative aspect-[9/16] w-full shadow-md">
          <Image
            src={`/img/gallery/${src}`}
            className="rounded-sm object-cover"
            fill
            quality={100}
            alt={`Image ${i + 1}`} // updated `idx` to `i` for accuracy
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      ))}
    </motion.div>
  );
};
