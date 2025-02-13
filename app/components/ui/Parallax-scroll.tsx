"use client";

import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll(); // Track scroll progress of the window

  // Parallax transform values
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Split images into 3 parts
  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  // Reusable animation wrapper
  const AnimatedWrapper = ({
    children,
    translate,
  }: {
    children: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    translate: any;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "0px 0px -100px 0px",
    }); // Trigger animation when element enters viewport

    return (
      <motion.div
        ref={ref}
        style={{ y: translate }}
        initial={{ opacity: 0, scale: 0.95 }} // Start invisible and slightly scaled down
        animate={isInView ? { opacity: 1, scale: 1 } : {}} // Fade in and scale up when in view
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="shadow-xl"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className={cn("w-full items-start overflow-x-auto", className)}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 py-40 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {/* First Column */}
        <div className="grid gap-8 md:gap-6">
          {firstPart.map((el, idx) => (
            <AnimatedWrapper key={"grid-1" + idx} translate={translateFirst}>
              <div className="relative overflow-hidden">
                {" "}
                {/* Static wrapper */}
                <motion.div
                  whileHover={{ scale: 1.05 }} // Scale only the image
                  transition={{ duration: 0.3, ease: "easeOut" }} // Smooth scaling
                  className="relative" // Ensure no wrapper effects
                >
                  <Image
                    src={el}
                    className="h-120 !m-0 w-full object-cover object-left-top brightness-100 transition-all duration-300 hover:brightness-75"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Second Column */}
        <div className="grid gap-8 md:gap-6">
          {secondPart.map((el, idx) => (
            <AnimatedWrapper key={"grid-2" + idx} translate={translateSecond}>
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={el}
                    className="!m-0 h-80 w-full object-cover object-left-top brightness-100 transition-all duration-300 hover:brightness-75"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        {/* Third Column */}
        <div className="grid gap-8 md:gap-6">
          {thirdPart.map((el, idx) => (
            <AnimatedWrapper key={"grid-3" + idx} translate={translateThird}>
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <Image
                    src={el}
                    className="h-90 !m-0 w-full object-cover object-left-top brightness-100 transition-all duration-300 hover:brightness-75"
                    height="400"
                    width="400"
                    alt="thumbnail"
                  />
                </motion.div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
