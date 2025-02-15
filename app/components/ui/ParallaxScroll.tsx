"use client";

import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: { src: string; thumb: string; caption?: string; size?: string }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Parallax transform values
  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Split images into 3 parts
  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const AnimatedWrapper = ({
    children,
    translate,
  }: {
    children: React.ReactNode;
    translate: any;
  }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "0px 0px -100px 0px",
    });

    return (
      <motion.div
        ref={ref}
        style={{ y: translate }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
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
    <div className={cn("w-full items-start overflow-hidden", className)}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 px-4 py-40 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <div className="grid gap-8 md:gap-6">
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={currentImage || 0}
            slides={images.map((el) => ({
              src: el.src,
              alt: el.caption || "Image",
            }))}
          />
          {firstPart.map((el, idx) => (
            <AnimatedWrapper key={`grid-1-${idx}`} translate={translateFirst}>
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setCurrentImage(idx);
                      setIsOpen(true);
                    }}
                  >
                    <Image
                      src={el.thumb}
                      className="h-120 !m-0 w-full object-cover object-left-top brightness-100 transition-all duration-300 hover:brightness-75"
                      height={400}
                      width={400}
                      alt={`Image ${idx + 1}`}
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        <div className="grid gap-8 md:gap-6">
          {secondPart.map((el, idx) => (
            <AnimatedWrapper key={`grid-2-${idx}`} translate={translateSecond}>
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setCurrentImage(idx + firstPart.length);
                      setIsOpen(true);
                    }}
                  >
                    <Image
                      src={el.thumb}
                      className="!m-0 h-80 w-full object-cover object-left-top brightness-100 transition-all duration-300 hover:brightness-75"
                      height={400}
                      width={400}
                      alt={`Image ${idx + 1}`}
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>

        <div className="grid gap-8 md:gap-6">
          {thirdPart.map((el, idx) => (
            <AnimatedWrapper key={`grid-3-${idx}`} translate={translateThird}>
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      setCurrentImage(
                        idx + firstPart.length + secondPart.length,
                      );
                      setIsOpen(true);
                    }}
                  >
                    <Image
                      src={el.thumb}
                      className="h-90 !m-0 w-full object-cover object-left-top brightness-100 transition-all duration-300 hover:brightness-75"
                      height={400}
                      width={400}
                      alt={`Image ${idx + 1}`}
                    />
                  </div>
                </motion.div>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </div>
  );
};
